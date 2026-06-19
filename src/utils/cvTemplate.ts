// Bravo house-style CV template.
// Produces a standalone, print-ready HTML document from a FormattedCv.
// Dark/gold brand to match the CRM. Used by the CVs page for Print & Download.

import type { FormattedCv } from './aiClient'

function esc(s: string | undefined): string {
  if (!s) return ''
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export function buildFormattedCvHtml(cv: FormattedCv): string {
  const contact = [cv.contact.email, cv.contact.phone, cv.contact.location]
    .filter(Boolean)
    .map(esc)
    .join('&nbsp;&nbsp;·&nbsp;&nbsp;')

  const experience = cv.experience.lines.slice(0, 40).map(l => `<li>${esc(l)}</li>`).join('')
  const skills = cv.skills.map(s => `<span class="chip">${esc(s)}</span>`).join('')
  const certs = cv.certifications.map(esc).join('&nbsp;·&nbsp;')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${esc(cv.name)} — Bravo CV</title>
<style>
  * { box-sizing: border-box; }
  body { font-family: Inter, -apple-system, Segoe UI, Roboto, sans-serif; color: #1a1a2e; margin: 0; background: #f5f6fa; }
  .page { max-width: 820px; margin: 1.5rem auto; background: #fff; padding: 2.5rem 2.75rem; box-shadow: 0 8px 32px rgba(0,0,0,0.08); }
  .header { border-bottom: 3px solid #b8942e; padding-bottom: 1rem; margin-bottom: 1.5rem; }
  .name { font-size: 2rem; font-weight: 800; letter-spacing: -0.01em; margin: 0; }
  .headline { color: #b8942e; font-weight: 700; font-size: 1.05rem; margin: 0.15rem 0 0; }
  .contact { color: #6b7280; font-size: 0.88rem; margin-top: 0.5rem; }
  .section { margin-bottom: 1.5rem; }
  .section h2 { font-size: 0.74rem; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; color: #1a1a2e; border-bottom: 1px solid #e5e7eb; padding-bottom: 0.3rem; margin: 0 0 0.6rem; }
  .section p { margin: 0; line-height: 1.7; color: #374151; }
  .section ul { margin: 0; padding-left: 1.2rem; line-height: 1.75; color: #374151; }
  .chips { display: flex; flex-wrap: wrap; gap: 0.4rem; }
  .chip { background: rgba(184,148,46,0.1); color: #8a6d1f; border-radius: 999px; padding: 0.25rem 0.75rem; font-size: 0.82rem; font-weight: 600; }
  .footer { margin-top: 2rem; padding-top: 1rem; border-top: 1px solid #e5e7eb; font-size: 0.75rem; color: #9ca3af; text-align: center; }
  @media print {
    body { background: #fff; }
    .page { box-shadow: none; margin: 0; max-width: 100%; padding: 1.5rem; }
  }
</style>
</head>
<body>
  <div class="page">
    <div class="header">
      <h1 class="name">${esc(cv.name)}</h1>
      <p class="headline">${esc(cv.headline)}</p>
      ${contact ? `<div class="contact">${contact}</div>` : ''}
    </div>
    ${cv.profile ? `<div class="section"><h2>Profile</h2><p>${esc(cv.profile)}</p></div>` : ''}
    ${experience ? `<div class="section"><h2>Experience</h2><ul>${experience}</ul></div>` : ''}
    ${skills ? `<div class="section"><h2>Key Skills</h2><div class="chips">${skills}</div></div>` : ''}
    ${certs ? `<div class="section"><h2>Certifications</h2><p>${certs}</p></div>` : ''}
    <div class="footer">Formatted by Bravo Construction Recruitment</div>
  </div>
</body>
</html>`
}
