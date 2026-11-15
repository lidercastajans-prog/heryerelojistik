import type { Frame } from "./heroSceneEngine";
import { SHUTTER_H } from "./heroSceneEngine";

/**
 * Hero sahnesinin çizimi (tek SVG, dekoratif → aria-hidden).
 * `data-k` taşıyan öğeler kaydırmada JS ile güncellenir; ilk değerleri `f0` (p=0 karesi) ile
 * sunucuda basılır. Renkler sitenin paletinden: lacivert/mavi (brand) + turkuaz (accent).
 */

const C = {
  navy: "#0a1430",
  b950: "#172554",
  b900: "#1e3a85",
  b800: "#1e42a8",
  b700: "#1d4fd0",
  a300: "#67e3f9",
  a400: "#22ccee",
  a600: "#0891b2",
  a700: "#0e7490",
  lit: "#fcd98a",
  kraft: "#c8955f",
  kraftD: "#a97842",
};

/* Uzak silüet: bloklar + kubbe/minare + kule (şematik İstanbul ufku) */
const FAR_BLOCKS: [number, number, number][] = [
  [-120, 90, 70], [-30, 60, 110], [30, 80, 60], [110, 50, 95], [160, 110, 55], [270, 70, 80],
  [560, 90, 70], [650, 60, 120], [710, 120, 65], [830, 70, 100], [900, 90, 50], [990, 60, 85],
  [1050, 110, 60], [1220, 80, 75], [1300, 60, 115], [1360, 120, 55], [1480, 70, 90],
  [1550, 100, 65], [1650, 80, 100], [1730, 90, 60],
];
const farPath = FAR_BLOCKS.map(([x, w, h]) => `M${x} 712V${712 - h}H${x + w}V712Z`).join("");

/* Orta sıra binalar (paralaks) */
const MID: [number, number, number][] = [
  [-300, 150, 300], [-140, 120, 230], [-10, 160, 330], [160, 130, 260], [300, 170, 360],
  [480, 120, 280], [1010, 150, 340], [1170, 130, 270], [1310, 170, 380], [1490, 140, 300],
  [1640, 160, 350], [1810, 140, 260], [1960, 170, 330],
];

function Carrier({ k, f0, shirt, shirtD, pants, pantsD, skin, skinD, cap }: {
  k: string;
  f0: Frame;
  shirt: string; shirtD: string; pants: string; pantsD: string; skin: string; skinD: string; cap: string;
}) {
  return (
    <g data-k={k} transform={f0[k].t}>
      {/* gölge */}
      <ellipse cx="0" cy="2" rx="22" ry="4" fill="#000" opacity="0.18" />
      {/* arka kol */}
      <g transform="translate(2 -122)">
        <g data-k={`${k}ab`} transform={f0[`${k}ab`].t}>
          <rect x="-5.5" y="-4" width="11" height="54" rx="5.5" fill={shirtD} />
          <circle cx="0" cy="52" r="5.5" fill={skinD} />
        </g>
      </g>
      {/* arka bacak */}
      <g transform="translate(0 -72)">
        <g data-k={`${k}lb`} transform={f0[`${k}lb`].t}>
          <rect x="-7" y="0" width="14" height="66" rx="6" fill={pantsD} />
          <rect x="-7" y="61" width="21" height="10" rx="4" fill="#0b1224" />
        </g>
      </g>
      {/* ön bacak */}
      <g transform="translate(0 -72)">
        <g data-k={`${k}lf`} transform={f0[`${k}lf`].t}>
          <rect x="-7.5" y="0" width="15" height="66" rx="6" fill={pants} />
          <rect x="-7.5" y="61" width="22" height="10" rx="4" fill="#0f172a" />
        </g>
      </g>
      {/* gövde */}
      <rect x="-17" y="-131" width="34" height="66" rx="12" fill={shirt} />
      <rect x="-17" y="-106" width="34" height="5" fill={C.a300} opacity="0.9" />
      <rect x="-17" y="-72" width="34" height="6" rx="2" fill={pantsD} />
      {/* baş (yüzsüz) + şapka */}
      <rect x="-4" y="-136" width="10" height="8" fill={skinD} />
      <circle cx="2" cy="-144" r="12.5" fill={skin} />
      <path d="M-11 -146 Q-10 -161 3 -161 Q15 -161 15 -147 Z" fill={cap} />
      <rect x="8" y="-150" width="14" height="4.5" rx="2.2" fill={cap} />
      {/* ön kol */}
      <g transform="translate(2 -122)">
        <g data-k={`${k}af`} transform={f0[`${k}af`].t}>
          <rect x="-6" y="-4" width="12" height="54" rx="6" fill={shirt} />
          <rect x="-6" y="14" width="12" height="4" fill={C.a300} opacity="0.85" />
          <circle cx="0" cy="52" r="6" fill={skin} />
        </g>
      </g>
    </g>
  );
}

function Box({ w, h }: { w: number; h: number }) {
  return (
    <g>
      <rect x={-w / 2} y={-h} width={w} height={h} rx="3" fill={C.kraft} />
      <rect x={-w / 2} y={-h} width={w} height="6" rx="3" fill={C.kraftD} />
      <rect x={w / 2 - w * 0.28} y={-h} width={w * 0.28} height={h} rx="3" fill="#000" opacity="0.1" />
      <rect x="-4" y={-h} width="8" height={h * 0.55} fill="#e9cf9f" />
      <rect x={-w / 2 + 6} y={-h * 0.42} width={w * 0.3} height={h * 0.16} rx="1.5" fill="#f8fafc" opacity="0.85" />
    </g>
  );
}

export default function HeroSceneSvg({ f0 }: { f0: Frame }) {
  return (
    <svg
      className="hs-svg"
      viewBox="0 0 1640 900"
      preserveAspectRatio="xMaxYMax slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="hs-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={C.navy} />
          <stop offset="0.36" stopColor="#13286a" />
          <stop offset="0.62" stopColor="#2a52c4" />
          <stop offset="0.76" stopColor="#6f98f5" />
          <stop offset="0.84" stopColor="#c9d8ff" />
          <stop offset="0.9" stopColor="#ffd9a8" />
        </linearGradient>
        <radialGradient id="hs-sun" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#fff3d6" stopOpacity="0.95" />
          <stop offset="0.25" stopColor="#ffd59e" stopOpacity="0.6" />
          <stop offset="1" stopColor="#ffd59e" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hs-glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#bcd0f7" />
          <stop offset="1" stopColor="#7d9ee6" />
        </linearGradient>
        <linearGradient id="hs-cabglass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3b5aa8" />
          <stop offset="1" stopColor="#14244f" />
        </linearGradient>
        <linearGradient id="hs-road" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2a3554" />
          <stop offset="1" stopColor="#1c2540" />
        </linearGradient>
        <pattern id="hs-win" width="26" height="34" patternUnits="userSpaceOnUse">
          <rect x="6" y="8" width="13" height="17" rx="1.5" fill="#3a57b0" />
        </pattern>
        <pattern id="hs-winlit" width="78" height="102" patternUnits="userSpaceOnUse">
          <rect x="32" y="8" width="13" height="17" rx="1.5" fill={C.lit} />
          <rect x="58" y="76" width="13" height="17" rx="1.5" fill={C.lit} opacity="0.85" />
          <rect x="6" y="42" width="13" height="17" rx="1.5" fill={C.lit} opacity="0.7" />
        </pattern>
        <pattern id="hs-tile" width="48" height="40" patternUnits="userSpaceOnUse">
          <path d="M0 0.5H48M24 0V40" stroke="#a3b1cc" strokeWidth="1.2" />
        </pattern>
        <pattern id="hs-dash" width="120" height="10" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="58" height="5" rx="2.5" fill="#e2e8f0" opacity="0.55" />
        </pattern>
        <pattern id="hs-slat" width="10" height="14" patternUnits="userSpaceOnUse">
          <rect width="10" height="14" fill="#f8fafc" />
          <rect y="12" width="10" height="2" fill="#dbe3ef" />
        </pattern>
        <pattern id="hs-quilt" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M0 0L16 16M16 0L0 16" stroke="#0e7490" strokeWidth="1.4" opacity="0.55" />
        </pattern>
        <clipPath id="hs-shutclip">
          <rect data-k="shut" x="1186" y="512" width="266" height={f0.shut.h} />
        </clipPath>
      </defs>

      {/* 1 — Gökyüzü */}
      <rect width="1640" height="900" fill="url(#hs-sky)" />
      <g fill="#fff">
        <circle cx="760" cy="70" r="1.6" opacity="0.7" />
        <circle cx="905" cy="140" r="1.2" opacity="0.5" />
        <circle cx="1040" cy="60" r="1.8" opacity="0.8" />
        <circle cx="1210" cy="120" r="1.3" opacity="0.6" />
        <circle cx="1380" cy="50" r="1.5" opacity="0.7" />
        <circle cx="1520" cy="160" r="1.2" opacity="0.5" />
        <circle cx="660" cy="190" r="1.1" opacity="0.4" />
        <circle cx="1300" cy="230" r="1" opacity="0.35" />
      </g>
      <path d="M1452 104a30 30 0 1 0 22 44a24 24 0 1 1 -22 -44z" fill="#e8efff" opacity="0.9" />
      <circle cx="1180" cy="660" r="210" fill="url(#hs-sun)" />

      {/* 2 — Uzak silüet */}
      <g data-k="far" transform={f0.far.t} fill="#4d6fc4" opacity="0.85">
        <path d={farPath} />
        {/* kubbe + minareler (şematik) */}
        <path d="M360 712V650A70 70 0 0 1 500 650V712Z" />
        <circle cx="430" cy="578" r="5" />
        <rect x="344" y="560" width="9" height="152" />
        <path d="M343 562L348.5 520L354 562Z" />
        <rect x="508" y="560" width="9" height="152" />
        <path d="M507 562L512.5 520L518 562Z" />
        <path d="M300 712V672A34 34 0 0 1 368 672V712Z" />
        {/* kule */}
        <rect x="1170" y="590" width="34" height="122" />
        <path d="M1166 592L1187 538L1208 592Z" />
      </g>

      {/* 3 — Orta sıra binalar */}
      <g data-k="mid" transform={f0.mid.t}>
        {MID.map(([x, w, h], i) => (
          <g key={i}>
            <rect x={x} y={760 - h} width={w} height={h} fill={i % 2 ? "#243f8f" : "#2b4a9e"} />
            <rect x={x} y={760 - h} width={w} height="8" fill="#1e3577" />
            <rect x={x + 8} y={760 - h + 18} width={w - 16} height={h - 30} fill="url(#hs-win)" opacity="0.55" />
            <rect x={x + 8} y={760 - h + 18} width={w - 16} height={h - 30} fill="url(#hs-winlit)" />
          </g>
        ))}
      </g>

      {/* 4 — Sokak dünyası (bina, kaldırım, yol, tabela) */}
      <g data-k="world" transform={f0.world.t}>
        {/* Ana apartman */}
        <rect x="560" y="236" width="450" height="524" fill="#dfe7f6" />
        <rect x="560" y="236" width="18" height="524" fill="#c7d3ec" />
        <rect x="548" y="222" width="474" height="18" rx="3" fill="#b4c3e4" />
        <rect x="560" y="588" width="450" height="12" fill="#c3cfe9" />
        {[268, 378, 478].map((y, r) =>
          [640, 785, 930].map((x, c) => {
            const lit = (r + c) % 3 === 1;
            return (
              <g key={`${x}-${y}`}>
                <rect x={x - 38} y={y - 4} width="76" height="88" rx="4" fill="#f8fafc" />
                <rect x={x - 32} y={y + 2} width="64" height="76" rx="2" fill={lit ? C.lit : "url(#hs-glass)"} />
                <rect x={x - 1.5} y={y + 2} width="3" height="76" fill="#f8fafc" />
                {lit ? null : <path d={`M${x - 26} ${y + 70}L${x - 6} ${y + 8}`} stroke="#fff" strokeWidth="5" opacity="0.35" />}
                {r === 1 ? (
                  <g>
                    <rect x={x - 46} y={y + 60} width="92" height="5" rx="2" fill={C.b900} />
                    <path d={`M${x - 44} ${y + 65}V${y + 92}M${x - 30} ${y + 65}V${y + 92}M${x - 16} ${y + 65}V${y + 92}M${x - 2} ${y + 65}V${y + 92}M${x + 12} ${y + 65}V${y + 92}M${x + 26} ${y + 65}V${y + 92}M${x + 42} ${y + 65}V${y + 92}`} stroke={C.b900} strokeWidth="2.5" />
                    <rect x={x - 46} y={y + 90} width="92" height="6" rx="2" fill={C.b900} />
                  </g>
                ) : null}
              </g>
            );
          })
        )}
        {/* zemin kat: kapı + vitrin */}
        <rect x="560" y="600" width="450" height="160" fill="#c9d4ea" />
        <rect x="690" y="592" width="110" height="10" rx="3" fill="#b4c3e4" />
        <path d="M682 586H808L800 606H690Z" fill={C.a600} />
        <path d="M690 606H800V612H690Z" fill={C.a700} />
        <rect x="700" y="612" width="90" height="148" fill="#0f1b3d" />
        <rect x="700" y="736" width="90" height="24" fill="#24335e" />
        <rect x="700" y="612" width="22" height="148" fill="#8b5a3c" />
        <rect x="716" y="676" width="3" height="16" rx="1.5" fill="#f4d58d" />
        <rect x="860" y="626" width="130" height="104" rx="4" fill="#f8fafc" />
        <rect x="866" y="632" width="118" height="92" rx="2" fill={C.lit} opacity="0.92" />
        <path d="M876 712L912 640" stroke="#fff" strokeWidth="6" opacity="0.35" />
        <rect x="574" y="626" width="96" height="104" rx="4" fill="#f8fafc" />
        <rect x="580" y="632" width="84" height="92" rx="2" fill="url(#hs-glass)" />

        {/* Yan binalar (kamyonun arkası) */}
        <rect x="1020" y="330" width="380" height="430" fill="#cdd8ef" />
        <rect x="1012" y="318" width="396" height="16" rx="3" fill="#aebde0" />
        <rect x="1040" y="360" width="340" height="380" fill="url(#hs-win)" opacity="0.45" />
        <rect x="1040" y="360" width="340" height="380" fill="url(#hs-winlit)" />
        <rect x="1410" y="280" width="420" height="480" fill="#b9c7e6" />
        <rect x="1402" y="268" width="436" height="16" rx="3" fill="#9fb1da" />
        <rect x="1430" y="310" width="380" height="430" fill="url(#hs-win)" opacity="0.45" />
        <rect x="1430" y="310" width="380" height="430" fill="url(#hs-winlit)" />
        <rect x="1840" y="360" width="360" height="400" fill="#d4ddf1" />
        <rect x="1860" y="390" width="320" height="350" fill="url(#hs-win)" opacity="0.45" />
        <rect x="-200" y="300" width="760" height="460" fill="#c3cfea" />
        <rect x="-180" y="330" width="720" height="410" fill="url(#hs-win)" opacity="0.45" />
        <rect x="-180" y="330" width="720" height="410" fill="url(#hs-winlit)" />

        {/* Kaldırım, bordür, yol */}
        <rect x="-800" y="760" width="3400" height="40" fill="#bfcadf" />
        <rect x="-800" y="760" width="3400" height="40" fill="url(#hs-tile)" />
        <rect x="-800" y="796" width="3400" height="12" fill="#8494b4" />
        <rect x="-800" y="806" width="3400" height="94" fill="url(#hs-road)" />
        <rect x="-800" y="884" width="3400" height="6" fill="url(#hs-dash)" />

        {/* Sokak lambaları */}
        {[520, 1700, 2150].map((x) => (
          <g key={x}>
            <rect x={x - 3} y="560" width="6" height="226" fill="#334155" />
            <path d={`M${x} 566Q${x} 546 ${x + 26} 546H${x + 34}`} stroke="#334155" strokeWidth="6" fill="none" />
            <path d={`M${x + 20} 542H${x + 50}L${x + 44} 556H${x + 26}Z`} fill="#1e293b" />
            <ellipse cx={x + 35} cy="560" rx="16" ry="5" fill="#fde68a" />
            <path d={`M${x + 22} 562L${x + 2} 780H${x + 68}L${x + 48} 562Z`} fill="#fde68a" opacity="0.08" />
          </g>
        ))}
        {/* Ağaç */}
        <g>
          <rect x="1555" y="640" width="10" height="146" fill="#5b4636" />
          <circle cx="1560" cy="620" r="52" fill="#1f7a5a" />
          <circle cx="1531" cy="648" r="34" fill="#23906a" />
          <circle cx="1591" cy="646" r="36" fill="#1b6b50" />
        </g>

        {/* Yön tabelası (şematik, yola çıkışta görünür) */}
        <g transform="translate(900 0)">
          <rect x="772" y="300" width="9" height="490" fill="#64748b" />
          <rect x="1029" y="300" width="9" height="490" fill="#64748b" />
          <rect x="752" y="296" width="306" height="146" rx="10" fill={C.b700} />
          <rect x="760" y="304" width="290" height="130" rx="6" fill="none" stroke="#fff" strokeWidth="3" />
          <g fill="#fff" style={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 700 }} fontSize="25" letterSpacing="1.5">
            <text x="814" y="345">MARMARA</text>
            <text x="814" y="382">EGE</text>
            <text x="814" y="419">AKDENİZ</text>
          </g>
          <g stroke="#fff" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
            <path d="M798 346L780 328M780 340V328H792" />
            <path d="M789 386V362M780 371L789 362L798 371" />
            <path d="M780 425L798 407M786 407H798V419" />
          </g>
        </g>
      </g>

      {/* 5 — Kamyon arka katman: gölge, kasa içi, şasi, tekerler, arka kapı */}
      <g data-k="truckA" transform={f0.truckA.t}>
        <ellipse cx="1380" cy="874" rx="240" ry="9" fill="#000" opacity="0.28" />
        {/* kasa içi */}
        <rect x="1186" y="512" width="266" height="188" fill="#d3dcee" />
        <path d="M1230 512V700M1276 512V700M1322 512V700M1368 512V700M1414 512V700" stroke="#bfcbe3" strokeWidth="3" />
        <rect x="1186" y="512" width="266" height="20" fill="#000" opacity="0.08" />
        <rect x="1186" y="606" width="266" height="5" fill="#a8b6d4" />
        {/* şasi */}
        <rect x="1160" y="714" width="404" height="30" rx="4" fill="#334155" />
        <rect x="1300" y="742" width="120" height="26" rx="5" fill="#475569" />
        <path d="M1206 780A46 46 0 0 1 1298 780" fill="none" stroke="#1e293b" strokeWidth="10" />
        <rect x="1160" y="736" width="34" height="22" rx="3" fill="#94a3b8" />
        {/* arka kapı (açık, uzak taraf) */}
        <g data-k="rdoor" transform={f0.rdoor.t} opacity={f0.rdoor.o}>
          <path d="M1172 498L1146 512V704L1172 716Z" fill="#e2e8f0" />
          <path d="M1172 498L1146 512V704L1172 716Z" fill="none" stroke="#b6c2d6" strokeWidth="2" />
          <rect x="1154" y="600" width="4" height="26" rx="2" fill="#94a3b8" />
        </g>
        {/* tekerler */}
        {[
          ["wr", 1252],
          ["wf", 1512],
        ].map(([k, x]) => (
          <g key={k as string} data-k={k as string} transform={f0[k as string].t}>
            <circle cx={x as number} cy="838" r="34" fill="#0f172a" />
            <circle cx={x as number} cy="838" r="17" fill="#cbd5e1" />
            <circle cx={x as number} cy="838" r="6" fill="#64748b" />
            <path
              d={`M${x} 823V853M${(x as number) - 15} 838H${(x as number) + 15}`}
              stroke="#64748b"
              strokeWidth="3.5"
            />
          </g>
        ))}
      </g>

      {/* 6 — Rampa */}
      <g data-k="ramp" transform={f0.ramp.t} opacity={f0.ramp.o}>
        <rect x="-164" y="-1" width="166" height="9" rx="2" fill="#cbd5e1" />
        <rect x="-164" y="6" width="166" height="3" fill="#94a3b8" />
        <path d="M-150 0V7M-130 0V7M-110 0V7M-90 0V7M-70 0V7M-50 0V7M-30 0V7" stroke="#94a3b8" strokeWidth="2" />
      </g>

      {/* 7 — Taşıyıcılar */}
      <Carrier k="c1" f0={f0} shirt={C.b800} shirtD="#183a93" pants={C.b950} pantsD="#101b40" skin="#b9825d" skinD="#9c6a49" cap={C.a600} />
      <Carrier k="c0" f0={f0} shirt={C.b900} shirtD="#172f6e" pants={C.b950} pantsD="#101b40" skin="#e3b48e" skinD="#c99672" cap={C.b950} />

      {/* 8 — Eşyalar (arka sıradan öne) */}
      <g data-k="items" transform={f0.items.t}>
        {/* dolap — streç sarılı */}
        <g data-k="wardrobe" transform={f0.wardrobe.t}>
          <rect x="-31" y="-148" width="62" height="148" rx="3" fill="#9a6a45" />
          <rect x="-31" y="-148" width="62" height="10" rx="3" fill="#7d5434" />
          <path d="M0 -136V-6" stroke="#6e4a2e" strokeWidth="2" />
          <rect x="-6" y="-84" width="3" height="16" rx="1.5" fill="#e8c48f" />
          <rect x="3" y="-84" width="3" height="16" rx="1.5" fill="#e8c48f" />
          <rect x="-33" y="-150" width="66" height="152" rx="5" fill="#eef6ff" opacity="0.32" />
          <path d="M-33 -120L33 -132M-33 -70L33 -86M-33 -26L33 -40" stroke="#fff" strokeWidth="3" opacity="0.5" />
          <path d="M-20 -146L-30 -100" stroke="#fff" strokeWidth="5" opacity="0.45" strokeLinecap="round" />
        </g>
        <g data-k="boxB" transform={f0.boxB.t}>
          <Box w={50} h={42} />
        </g>
        <g data-k="boxC" transform={f0.boxC.t}>
          <Box w={42} h={36} />
        </g>
        <g data-k="lamp" transform={f0.lamp.t} className="hs-dk">
          <ellipse cx="0" cy="-2" rx="13" ry="4" fill="#334155" />
          <rect x="-1.8" y="-84" width="3.6" height="82" fill="#475569" />
          <path d="M-15 -78H15L9 -100H-9Z" fill="#f6e7c8" />
          <path d="M-15 -78H15L14 -82H-14Z" fill="#e2cfa4" />
        </g>
        {/* koltuk — battaniye örtülü */}
        <g data-k="sofa" transform={f0.sofa.t}>
          <rect x="-56" y="-6" width="6" height="6" fill="#334155" />
          <rect x="50" y="-6" width="6" height="6" fill="#334155" />
          <rect x="-55" y="-58" width="110" height="34" rx="10" fill={C.a600} />
          <rect x="-65" y="-44" width="130" height="38" rx="10" fill={C.a600} />
          <rect x="-65" y="-44" width="130" height="38" rx="10" fill="url(#hs-quilt)" />
          <rect x="-55" y="-58" width="110" height="20" rx="10" fill="url(#hs-quilt)" />
          <rect x="-65" y="-50" width="20" height="44" rx="9" fill={C.a700} />
          <rect x="45" y="-50" width="20" height="44" rx="9" fill={C.a700} />
          <path d="M-45 -24H45" stroke="#0e7490" strokeWidth="2" opacity="0.6" />
          <rect x="-12" y="-46" width="6" height="40" fill="#f1f5f9" opacity="0.8" />
          <rect x="14" y="-46" width="6" height="40" fill="#f1f5f9" opacity="0.8" />
        </g>
        <g data-k="boxA" transform={f0.boxA.t}>
          <Box w={46} h={40} />
        </g>
        <g data-k="plant" transform={f0.plant.t} className="hs-dk">
          <path d="M-14 -26H14L10 0H-10Z" fill="#c2603a" />
          <rect x="-16" y="-30" width="32" height="6" rx="2" fill="#a64e2e" />
          <ellipse cx="-8" cy="-46" rx="9" ry="18" transform="rotate(-24 -8 -46)" fill="#1f8a5b" />
          <ellipse cx="9" cy="-50" rx="9" ry="20" transform="rotate(20 9 -50)" fill="#25a06a" />
          <ellipse cx="0" cy="-58" rx="7" ry="17" fill="#2fb879" />
        </g>
      </g>

      {/* 9 — Kamyon ön katman: kasa çerçevesi, kepenk, kabin */}
      <g data-k="truckB" transform={f0.truckB.t}>
        {/* kepenk (kapanışta yukarıdan iner) */}
        <g clipPath="url(#hs-shutclip)">
          <rect x="1186" y="512" width="266" height={SHUTTER_H} fill="url(#hs-slat)" />
          <rect x="1186" y="512" width="266" height={SHUTTER_H} fill="#000" opacity="0.03" />
        </g>
        {/* çerçeve */}
        <rect x="1168" y="494" width="300" height="18" rx="4" fill="#f1f5f9" />
        <rect x="1168" y="508" width="300" height="4" fill="#cbd5e1" />
        <rect x="1172" y="494" width="14" height="222" rx="2" fill="#e2e8f0" />
        <rect x="1452" y="494" width="14" height="222" rx="2" fill="#e2e8f0" />
        <rect x="1168" y="700" width="300" height="16" rx="2" fill="#e2e8f0" />
        <rect x="1168" y="712" width="300" height="4" fill="#b6c2d6" />
        <rect x="1166" y="676" width="8" height="24" rx="2" fill="#ef4444" />
        <rect x="1166" y="652" width="8" height="18" rx="2" fill="#f59e0b" />
        {/* kabin */}
        <path d="M1466 590H1538Q1556 590 1563 606L1586 688Q1592 700 1592 714V790H1466Z" fill="#f8fafc" />
        <path d="M1466 590H1538Q1556 590 1563 606L1586 688Q1592 700 1592 714V790H1466Z" fill="none" stroke="#cbd5e1" strokeWidth="2" />
        <rect x="1466" y="590" width="10" height="200" fill="#e2e8f0" />
        <path d="M1484 604H1534Q1546 604 1550 614L1566 668H1484Z" fill="url(#hs-cabglass)" />
        <path d="M1494 664L1520 608" stroke="#fff" strokeWidth="5" opacity="0.15" />
        {/* kabindeki ekip (yola çıkışta) */}
        <g data-k="heads" opacity={f0.heads.o}>
          <circle cx="1504" cy="646" r="10" fill="#e3b48e" />
          <path d="M1494 644Q1495 632 1505 632Q1514 632 1514 643Z" fill={C.b950} />
          <circle cx="1532" cy="648" r="10" fill="#b9825d" />
          <path d="M1522 646Q1523 634 1533 634Q1542 634 1542 645Z" fill={C.a600} />
        </g>
        <path d="M1484 676H1566" stroke="#cbd5e1" strokeWidth="2" />
        <rect x="1548" y="690" width="12" height="4" rx="2" fill="#94a3b8" />
        <rect x="1476" y="612" width="6" height="40" rx="3" fill="#334155" />
        <path d="M1532 688V786" stroke="#cbd5e1" strokeWidth="2" />
        <rect x="1580" y="716" width="13" height="18" rx="3" fill="#fde68a" />
        <rect x="1560" y="772" width="40" height="22" rx="5" fill="#94a3b8" />
        <path d="M1470 780A46 46 0 0 1 1556 780" fill="none" stroke="#1e293b" strokeWidth="10" />
        <rect x="1466" y="740" width="126" height="6" fill="#e2e8f0" />
      </g>

      {/* 10 — Hız çizgileri ve toz */}
      <g data-k="speed" transform={f0.speed.t} opacity={f0.speed.o} stroke={C.a300} strokeLinecap="round">
        <path d="M1080 548H1180" strokeWidth="6" opacity="0.9" />
        <path d="M1040 604H1180" strokeWidth="5" opacity="0.7" />
        <path d="M1100 660H1180" strokeWidth="6" opacity="0.85" />
        <path d="M1060 716H1180" strokeWidth="4" opacity="0.6" />
      </g>
      <g data-k="dust" transform={f0.dust.t} opacity={f0.dust.o} fill="#cbd5e1">
        <circle cx="1196" cy="858" r="16" opacity="0.55" />
        <circle cx="1166" cy="850" r="11" opacity="0.4" />
        <circle cx="1140" cy="862" r="8" opacity="0.3" />
      </g>
    </svg>
  );
}
