/**
 * Hero sahnesi — kaydırmaya bağlı (scroll-scrubbed) zaman çizelgesi.
 *
 * Saf fonksiyonlar: `computeFrame(p, timeline)` ilerleme p∈[0,1] için her SVG öğesinin
 * transform/opacity değerini döndürür. Sunucuda p=0 karesi bununla render edilir (SSR = ilk kare),
 * tarayıcıda aynı fonksiyon kaydırmada çağrılır → hidrasyon uyumsuzluğu yok.
 *
 * Koordinatlar SVG viewBox'ı (1640×900) içindedir. Öğelerin orijini alt-orta noktasıdır.
 */

export type FrameVal = { t?: string; o?: number; h?: number };
export type Frame = Record<string, FrameVal>;

/* ---------- Sahne geometrisi ---------- */
export const SIDEWALK_Y = 782; // taşıyıcıların yürüdüğü kaldırım çizgisi
export const FLOOR_Y = 700; // kasa tabanı
export const RAMP_FOOT_X = 1040;
export const RAMP_TOP_X = 1180;
export const RAMP_ANGLE_DOWN = -30.4; // rampa açık (kaldırıma iner)
export const RAMP_ANGLE_UP = 90; // rampa toplandı (dikey)
export const SHUTTER_H = 188;
export const PAN = 900; // yola çıkışta dünyanın sola kayma miktarı

/** Kaldırım → rampa → kasa tabanı: x'e göre ayak yüksekliği. */
export function feetY(x: number): number {
  if (x <= RAMP_FOOT_X) return SIDEWALK_Y;
  if (x >= RAMP_TOP_X) return FLOOR_Y;
  return SIDEWALK_Y - ((x - RAMP_FOOT_X) / (RAMP_TOP_X - RAMP_FOOT_X)) * (SIDEWALK_Y - FLOOR_Y);
}

/* ---------- Eşyalar ---------- */
export type ItemId = "wardrobe" | "sofa" | "boxA" | "boxB" | "boxC" | "lamp" | "plant";

type ItemSpec = {
  w: number;
  /** başlangıç (kapı önü) alt-orta */
  sx: number;
  sy: number;
  /** son (kasa içi) alt-orta */
  fx: number;
  fy: number;
  /** taşınırken ayak çizgisinin ne kadar üstünde */
  hold: number;
};

export const ITEMS: Record<ItemId, ItemSpec> = {
  wardrobe: { w: 62, sx: 830, sy: 772, fx: 1422, fy: 700, hold: 28 },
  sofa: { w: 130, sx: 905, sy: 792, fx: 1322, fy: 700, hold: 66 },
  boxA: { w: 46, sx: 1004, sy: 792, fx: 1290, fy: 642, hold: 64 },
  boxB: { w: 50, sx: 896, sy: 772, fx: 1346, fy: 642, hold: 64 },
  boxC: { w: 42, sx: 896, sy: 730, fx: 1346, fy: 600, hold: 106 },
  lamp: { w: 30, sx: 965, sy: 772, fx: 1236, fy: 700, hold: 30 },
  plant: { w: 40, sx: 762, sy: 792, fx: 1206, fy: 700, hold: 62 },
};

/** Mobilde gösterilmeyen (sadeleşen) eşyalar. */
export const MOBILE_HIDDEN: ItemId[] = ["lamp", "plant"];

/* ---------- Zaman çizelgesi ---------- */
type KF = { p: number; x: number; f: 1 | -1 };
type ItemTL = { mode: "pair" | "single"; by: 0 | 1; lift: [number, number]; drop: [number, number] };
export type Timeline = { c: [KF[], KF[]]; items: Partial<Record<ItemId, ItemTL>> };

export const PHASE = {
  loadStart: 0.12,
  loadEnd: 0.78,
  closeStart: 0.8,
  driveStart: 0.92,
};

export function buildTimeline(mobile: boolean): Timeline {
  const c: [KF[], KF[]] = [
    [{ p: 0, x: 1000, f: -1 }],
    [{ p: 0, x: 745, f: 1 }],
  ];
  const items: Timeline["items"] = {};
  const go = (ci: 0 | 1, p: number, x: number, f: 1 | -1) => c[ci].push({ p, x, f });

  // Bekleme: ilk taşıma başlayana kadar yerinde
  go(0, PHASE.loadStart, 1000, -1);
  go(1, PHASE.loadStart, 745, 1);

  const pair = (id: ItemId, a: number, s: number) => {
    const it = ITEMS[id];
    const ox = it.w / 2 + 13;
    const t = (k: number) => a + k * s;
    go(0, t(0.25), it.sx + ox, 1);
    go(1, t(0.25), it.sx - ox, 1);
    go(0, t(0.33), it.sx + ox, 1);
    go(1, t(0.33), it.sx - ox, 1);
    const fx0 = Math.min(it.fx + ox, 1446);
    go(0, t(0.78), fx0, 1);
    go(1, t(0.78), fx0 - 2 * ox, 1);
    go(0, t(0.88), fx0, -1);
    go(1, t(0.88), fx0 - 2 * ox, -1);
    items[id] = { mode: "pair", by: 0, lift: [t(0.25), t(0.33)], drop: [t(0.78), t(0.88)] };
  };

  const single = (ids: ItemId[], ci: 0 | 1, a: number, d: number) => {
    const it = ITEMS[ids[0]];
    const t = (k: number) => a + k * d;
    go(ci, t(0.25), it.sx - 26, 1);
    go(ci, t(0.33), it.sx - 26, 1);
    go(ci, t(0.78), it.fx - 26, 1);
    go(ci, t(0.88), it.fx - 26, -1);
    for (const id of ids) {
      items[id] = { mode: "single", by: ci, lift: [t(0.25), t(0.33)], drop: [t(0.78), t(0.88)] };
    }
  };

  const trips: ((a: number, s: number) => void)[] = [
    (a, s) => pair("wardrobe", a, s), // ağır eşya önce
    (a, s) => pair("sofa", a, s),
    (a, s) => {
      single(["boxA"], 0, a, s * 0.92);
      single(["boxB", "boxC"], 1, a + s * 0.08, s * 0.92);
    },
  ];
  if (!mobile) {
    trips.push((a, s) => {
      single(["lamp"], 0, a, s * 0.92);
      single(["plant"], 1, a + s * 0.08, s * 0.92);
    });
  }
  const s = (PHASE.loadEnd - PHASE.loadStart) / trips.length;
  trips.forEach((fn, i) => fn(PHASE.loadStart + i * s, s));

  // Çıkış: kasadan inip kaldırımda bekle, kapanıştan sonra kamyonun arkasından kabine yürü
  go(0, 0.805, 1010, 1);
  go(1, 0.81, 962, 1);
  go(0, 0.86, 1010, 1);
  go(1, 0.86, 962, 1);
  go(0, 0.91, 1560, 1);
  go(1, 0.915, 1540, 1);

  return { c, items };
}

/* ---------- Yardımcılar ---------- */
const clamp = (v: number, a = 0, b = 1) => (v < a ? a : v > b ? b : v);
const lerp = (a: number, b: number, u: number) => a + (b - a) * u;
export const smooth = (a: number, b: number, p: number) => {
  const u = clamp((p - a) / (b - a));
  return u * u * (3 - 2 * u);
};
const r1 = (n: number) => Math.round(n * 10) / 10;

type CPose = { x: number; y: number; f: 1 | -1; moving: number; ph: number };

function carrierAt(kf: KF[], p: number, phaseOff: number): CPose {
  let x = kf[0].x;
  let f = kf[0].f;
  let moving = 0;
  if (p >= kf[kf.length - 1].p) {
    const l = kf[kf.length - 1];
    x = l.x;
    f = l.f;
  } else if (p > kf[0].p) {
    for (let i = 0; i < kf.length - 1; i++) {
      const a = kf[i];
      const b = kf[i + 1];
      if (p >= a.p && p < b.p) {
        const u = b.p === a.p ? 1 : (p - a.p) / (b.p - a.p);
        x = lerp(a.x, b.x, u);
        const dx = b.x - a.x;
        moving = dx === 0 ? 0 : 1;
        f = dx > 0 ? 1 : dx < 0 ? -1 : a.f;
        break;
      }
    }
  }
  const ph = x * 0.105 + phaseOff;
  const bob = -Math.abs(Math.cos(ph)) * 3 * moving;
  return { x, y: feetY(x) + bob, f, moving, ph };
}

type IPose = { x: number; y: number; r: number };

function carriedPose(id: ItemId, tl: ItemTL, c: [CPose, CPose]): IPose {
  const it = ITEMS[id];
  if (tl.mode === "pair") {
    const [a, b] = c;
    return {
      x: (a.x + b.x) / 2,
      y: (a.y + b.y) / 2 - it.hold,
      r: (Math.atan2(a.y - b.y, a.x - b.x) * 180) / Math.PI,
    };
  }
  const k = c[tl.by];
  return { x: k.x + 26 * k.f, y: k.y - it.hold, r: 0 };
}

/* ---------- Kare hesabı ---------- */
export function computeFrame(p: number, tl: Timeline): Frame {
  const F: Frame = {};
  const pan = PAN * smooth(PHASE.driveStart, 1, p);
  const e = smooth(PHASE.driveStart, 1, p);

  // Paralaks katmanları (yükleme sırasında hafif kamera kayması, yola çıkışta pan)
  F.far = { t: `translate(${r1(-(p * 24 + pan * 0.12))} 0)` };
  F.mid = { t: `translate(${r1(-(p * 50 + pan * 0.4))} 0)` };
  F.world = { t: `translate(${r1(-pan)} 0)` };

  // Kamyon (yola çıkışta küçük ileri hareket + titreşim)
  const tdx = 18 * e;
  const tdy = p > PHASE.driveStart && p < 1 ? Math.sin(p * 900) * 0.8 : 0;
  const truckT = `translate(${r1(tdx)} ${r1(tdy)})`;
  F.truckA = { t: truckT };
  F.truckB = { t: truckT };
  F.items = { t: truckT };
  const wheelDeg = r1((((pan + tdx) / 34) * 180) / Math.PI);
  F.wr = { t: `rotate(${wheelDeg} 1252 838)` };
  F.wf = { t: `rotate(${wheelDeg} 1512 838)` };

  // Rampa, arka kapı, kepenk
  const ru = smooth(0.805, 0.845, p);
  F.ramp = { t: `translate(1180 702) rotate(${r1(lerp(RAMP_ANGLE_DOWN, RAMP_ANGLE_UP, ru))})`, o: p < 0.848 ? 1 : 0 };
  const ds = 1 - smooth(0.84, 0.87, p);
  F.rdoor = { t: `translate(1172 0) scale(${Math.max(ds, 0.001).toFixed(3)} 1) translate(-1172 0)`, o: ds > 0.01 ? 1 : 0 };
  F.shut = { h: r1(SHUTTER_H * smooth(0.85, 0.895, p)) };
  F.heads = { o: smooth(0.91, 0.925, p) };
  F.speed = { o: smooth(0.93, 0.97, p), t: `translate(${r1(-40 * e)} 0)` };
  F.dust = { o: smooth(0.925, 0.95, p) * 0.9, t: `translate(${r1(-30 * e)} ${r1(-6 * e)})` };

  // Taşıyıcılar
  const cp: [CPose, CPose] = [carrierAt(tl.c[0], p, 0), carrierAt(tl.c[1], p, 1.7)];
  const carryRole: [number | null, number | null] = [null, null];
  for (const t of Object.values(tl.items) as ItemTL[]) {
    if (p < t.lift[0] || p > t.drop[1]) continue;
    if (t.mode === "pair") {
      carryRole[0] = 18; // öndeki: eller arkada, eşyanın altında
      carryRole[1] = -45; // arkadaki: eller önde
    } else {
      carryRole[t.by] = -62;
    }
  }
  cp.forEach((c, i) => {
    const k = `c${i}`;
    const legA = Math.sin(c.ph) * 28 * c.moving;
    F[k] = { t: `translate(${r1(c.x)} ${r1(c.y)}) scale(${c.f} 1)`, o: p > 0.915 ? 0 : 1 };
    F[`${k}lf`] = { t: `rotate(${r1(legA)})` };
    F[`${k}lb`] = { t: `rotate(${r1(-legA)})` };
    const role = carryRole[i];
    if (role !== null) {
      F[`${k}af`] = { t: `rotate(${role})` };
      F[`${k}ab`] = { t: `rotate(${role})` };
    } else {
      F[`${k}af`] = { t: `rotate(${r1(-legA * 0.8)})` };
      F[`${k}ab`] = { t: `rotate(${r1(legA * 0.8)})` };
    }
  });

  // Eşyalar
  for (const id of Object.keys(ITEMS) as ItemId[]) {
    const it = ITEMS[id];
    const t = tl.items[id];
    let pose: IPose = { x: it.sx, y: it.sy, r: 0 };
    if (t) {
      if (p >= t.drop[1]) pose = { x: it.fx, y: it.fy, r: 0 };
      else if (p >= t.lift[0]) {
        const cur = carriedPose(id, t, cp);
        if (p < t.lift[1]) {
          const u = smooth(t.lift[0], t.lift[1], p);
          pose = { x: lerp(it.sx, cur.x, u), y: lerp(it.sy, cur.y, u), r: lerp(0, cur.r, u) };
        } else if (p < t.drop[0]) {
          pose = cur;
        } else {
          const u = smooth(t.drop[0], t.drop[1], p);
          pose = { x: lerp(cur.x, it.fx, u), y: lerp(cur.y, it.fy, u), r: lerp(cur.r, 0, u) };
        }
      }
    }
    F[id] = { t: `translate(${r1(pose.x)} ${r1(pose.y)})${pose.r ? ` rotate(${r1(pose.r)})` : ""}` };
  }

  return F;
}

/** Ara metin adımı: 0 fiyat, 1 taşıma, 2 kapanış, 3 yola çıkış. */
export function stepAt(p: number): number {
  if (p < PHASE.loadStart) return 0;
  if (p < PHASE.closeStart) return 1;
  if (p < PHASE.driveStart) return 2;
  return 3;
}
