import { brand, customer, formatINR } from "@/lib/portal-data";

type Line = { label: string; note?: string; amount: number };

/**
 * Renders a branded estimate/invoice into a hidden iframe and opens the
 * browser print dialog, where the customer can "Save as PDF".
 * In production this would be replaced by a server-generated PDF.
 */
export function printDocument({
  kind,
  number,
  date,
  vehicle,
  lines,
  status,
}: {
  kind: "Estimate" | "Tax invoice" | "Service history";
  number: string;
  date: string;
  vehicle: string;
  lines: Line[];
  status?: string;
}) {
  const total = lines.reduce((s, l) => s + l.amount, 0);
  const rows = lines
    .map(
      (l) =>
        `<tr><td><strong>${escape(l.label)}</strong>${l.note ? `<br><small>${escape(l.note)}</small>` : ""}</td><td class="r">${formatINR(l.amount)}</td></tr>`,
    )
    .join("");

  const html = `<!doctype html><html><head><meta charset="utf-8"><title>${kind} ${number} · ${brand.name}</title>
<style>
  *{box-sizing:border-box} body{margin:0;padding:48px;font:14px/1.5 Inter,Arial,sans-serif;color:#111}
  header{display:flex;justify-content:space-between;align-items:flex-start;padding-bottom:24px;border-bottom:3px solid #111}
  img{height:54px} h1{margin:0;font-size:26px;letter-spacing:-.02em;text-align:right} .muted{color:#666}
  .meta{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin:28px 0}
  .meta div{padding:12px 14px;background:#f4f4f2;border-radius:6px} .meta small{display:block;color:#666;font-size:11px;text-transform:uppercase;letter-spacing:.08em}
  table{width:100%;border-collapse:collapse} th{text-align:left;font-size:11px;text-transform:uppercase;letter-spacing:.08em;color:#666;padding:10px 0;border-bottom:1px solid #ddd}
  td{padding:14px 0;border-bottom:1px solid #eee;vertical-align:top} td small{color:#777} .r{text-align:right;white-space:nowrap}
  tfoot td{border:0;padding-top:18px;font-size:18px;font-weight:700}
  footer{margin-top:48px;padding-top:16px;border-top:1px solid #ddd;font-size:12px;color:#666;display:flex;justify-content:space-between}
</style></head><body>
<header><img src="${new URL("brand/v-mechanic-logo-dark.png", document.baseURI).href}" alt="${brand.name}"><div><h1>${kind}</h1><div class="muted">${number}${status ? ` · ${escape(status)}` : ""}</div></div></header>
<section class="meta"><div><small>Customer</small>${customer.name}<br><span class="muted">${customer.id}</span></div><div><small>Vehicle</small>${escape(vehicle)}</div><div><small>Date</small>${escape(date)}</div></section>
<table><thead><tr><th>Item</th><th class="r">Amount</th></tr></thead><tbody>${rows}</tbody>
<tfoot><tr><td>Total (incl. GST)</td><td class="r">${formatINR(total)}</td></tr></tfoot></table>
<footer><span>${brand.name} · ${brand.tagline}</span><span>${brand.phone} · ${brand.email}</span></footer>
</body></html>`;

  const frame = document.createElement("iframe");
  frame.setAttribute("aria-hidden", "true");
  frame.style.cssText = "position:fixed;right:0;bottom:0;width:0;height:0;border:0;opacity:0";
  document.body.appendChild(frame);
  const doc = frame.contentDocument;
  if (!doc) return;
  doc.open();
  doc.write(html);
  doc.close();
  const run = () => {
    frame.contentWindow?.focus();
    frame.contentWindow?.print();
    setTimeout(() => frame.remove(), 1000);
  };
  const img = doc.querySelector("img");
  if (img && !img.complete) {
    img.onload = run;
    img.onerror = run;
  } else {
    setTimeout(run, 50);
  }
}

function escape(value: string) {
  return value.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);
}
