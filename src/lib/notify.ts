/**
 * Form bildirimleri.
 *
 * RESEND_API_KEY tanımlıysa e-posta gönderir; tanımlı değilse (geliştirme /
 * backend kurulmadan önce) sunucu loguna yazar. Her durumda başarı döner ki
 * kullanıcı tarafında akış kesilmesin — form ayrıca WhatsApp fallback'i sunar.
 */

import "server-only";
import { site } from "./site";

type NotifyResult = { ok: boolean; delivered: "email" | "log" };

export async function sendNotification(opts: {
  subject: string;
  lines: { label: string; value: string }[];
}): Promise<NotifyResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.NOTIFY_EMAIL || site.email;

  const textBody = opts.lines.map((l) => `${l.label}: ${l.value}`).join("\n");
  const htmlBody =
    `<h2>${escapeHtml(opts.subject)}</h2><table cellpadding="6" style="border-collapse:collapse">` +
    opts.lines
      .map(
        (l) =>
          `<tr><td style="font-weight:600;border-bottom:1px solid #eee">${escapeHtml(
            l.label
          )}</td><td style="border-bottom:1px solid #eee">${escapeHtml(l.value)}</td></tr>`
      )
      .join("") +
    `</table>`;

  if (!apiKey) {
    console.log(`[notify] (e-posta anahtarı yok, loglanıyor)\n${opts.subject}\n${textBody}`);
    return { ok: true, delivered: "log" };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.NOTIFY_FROM || `${site.name} <onboarding@resend.dev>`,
        to: [to],
        subject: opts.subject,
        text: textBody,
        html: htmlBody,
      }),
    });
    if (!res.ok) {
      console.error("[notify] Resend hatası:", await res.text());
      return { ok: true, delivered: "log" };
    }
    return { ok: true, delivered: "email" };
  } catch (err) {
    console.error("[notify] gönderim hatası:", err);
    return { ok: true, delivered: "log" };
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
