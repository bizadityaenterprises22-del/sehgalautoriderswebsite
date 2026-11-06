'use strict';
/* Dealer additions, updated 06-11-2026: model comparison, Sehgal preferred lender EMI comparison & wholesale inventory finance,
   Bajaj Allianz #1 preferred insurance & MI cashless panel, service schedule, spares, safety, CSR, and complete digital presence. */
const SPECS = (typeof SPECS_DATA !== 'undefined' ? SPECS_DATA : []).reduce((all, s) => (all[s.id] = s, all), {});
const FACTS = typeof FACTS_DATA !== 'undefined' ? FACTS_DATA : {};
const NP = '<span class="not-published">Not published</span>';
const PEERS = {swift:['baleno','dzire','wagonr'],baleno:['swift','fronx','dzire'],dzire:['swift','baleno'],'alto-k10':['s-presso','celerio','wagonr'],'s-presso':['alto-k10','celerio'],celerio:['wagonr','alto-k10','s-presso'],wagonr:['celerio','swift','s-presso'],eeco:['ertiga','wagonr'],ertiga:['xl6','invicto'],xl6:['ertiga','invicto'],invicto:['xl6','ertiga'],brezza:['fronx','victoris','grand-vitara'],fronx:['brezza','baleno'],victoris:['grand-vitara','brezza'],'grand-vitara':['victoris','brezza','e-vitara'],jimny:['brezza','grand-vitara'],'e-vitara':['grand-vitara','victoris']};
const num = n => typeof n === 'number' && Number.isFinite(n);
const list = a => Array.isArray(a) && a.length ? a.map(esc).join(' · ') : '';
const maxOf = o => o && typeof o === 'object' && Object.values(o).some(num) ? Math.max(...Object.values(o).filter(num)) : (num(o) ? o : NaN);
const perFuel = (o, unit) => o && typeof o === 'object' && Object.keys(o).length ? Object.entries(o).map(([k, v]) => `${esc(k)} ${esc(v)} ${unit}`).join('<br>') : '';
const sourceLinks = urls => (urls || []).map((u, i) => `<a class="text-link" href="${esc(u)}" target="_blank" rel="noopener noreferrer">Source ${i + 1} ↗</a>`).join(' ');
const stars = n => num(n) ? `<span class="stars" aria-label="${n} of 5 stars">${'★'.repeat(n)}${'☆'.repeat(Math.max(0, 5 - n))}</span>` : NP;
const rupees = n => num(n) ? money(n) : NP;

/* ---------- crash-test ratings ---------- */
function ncapFor(id) {
  const m = modelById(id) || {name: id};
  const key = s => String(s || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  return (FACTS.ncap || []).filter(r => key(r.model).includes(key(m.name).replace('marutisuzuki', '')) || key(m.name).includes(key(r.model)));
}
function ncapText(id) {
  const rows = ncapFor(id);
  return rows.length ? rows.map(r => `${esc(r.programme)} ${esc(r.testDate || '')}${rows.length > 1 && /\(/.test(r.model) ? ' · ' + esc(r.model.replace(/^[^(]*\(|\)$/g, '')) : ''}: adult ${stars(r.adultStars)} child ${stars(r.childStars)}`).join('<br>') : 'No current rating published';
}

/* ---------- model comparison ---------- */
const SPEC_ROWS = [
  ['Channel', s => esc(s.channel)],
  ['Body type', s => esc(s.bodyType)],
  ['Seating', s => num(s.seating) ? `${s.seating} seats` : '', s => s.seating],
  ['Fuel', s => list(s.fuels)],
  ['Engine', s => esc(s.engine || '') + (s.displacementCc ? `<br><span class="meta">${[].concat(s.displacementCc).join(' / ')} cc</span>` : '')],
  ['EV battery', s => (s.evBatteryKwh || []).length ? [].concat(s.evBatteryKwh).join(' / ') + ' kWh' : '', null, s => s.fuels && s.fuels.includes('Electric')],
  ['EV range (claimed)', s => (s.evRangeKm || []).map(r => `${esc(r.value)} km <span class="meta">${esc(r.battery ? r.battery + ' kWh, ' : '')}${esc(r.basis || '')}</span>`).join('<br>'), s => Math.max(...(s.evRangeKm || []).map(r => r.value)), s => s.fuels && s.fuels.includes('Electric')],
  ['Maximum power', s => perFuel(s.powerPs, 'PS') || perFuel(s.powerKw, 'kW'), s => num(maxOf(s.powerPs)) ? maxOf(s.powerPs) : maxOf(s.powerKw) * 1.35962],
  ['Maximum torque', s => perFuel(s.torqueNm, 'Nm'), s => maxOf(s.torqueNm)],
  ['Transmission', s => list(s.transmissions)],
  ['Claimed fuel efficiency', s => (s.mileage || []).map(m => `${esc(m.fuel)} ${esc(m.transmission || '')}: <b>${esc(m.value)}</b> ${esc(m.unit || '')}`).join('<br>'), s => Math.max(...(s.mileage || []).filter(m => m.unit === 'km/l').map(m => m.value))],
  ['Length', s => num(s.lengthMm) ? `${s.lengthMm.toLocaleString('en-IN')} mm` : ''],
  ['Wheelbase', s => num(s.wheelbaseMm) ? `${s.wheelbaseMm.toLocaleString('en-IN')} mm` : '', s => s.wheelbaseMm],
  ['Ground clearance', s => num(s.groundClearanceMm) ? `${s.groundClearanceMm} mm` : '', s => s.groundClearanceMm],
  ['Boot space', s => num(s.bootLitres) ? `${s.bootLitres} litres` : '', s => s.bootLitres],
  ['Fuel tank', s => num(s.fuelTankLitres) ? `${s.fuelTankLitres} litres` : ''],
  ['Payload', s => num(s.payloadKg) ? `${s.payloadKg} kg` : '', s => s.payloadKg, s => s.channel === 'Commercial'],
  ['Airbags', s => esc(s.airbags || '')],
  ['Safety highlights', s => list(s.safetyHighlights)],
  ['Crash-test rating', s => ncapText(s.id)],
  ['Key features', s => list(s.keyFeatures)],
  ['Ex-showroom from', s => s.exShowroomFrom ? `${esc(s.exShowroomFrom.asPrinted || money(s.exShowroomFrom.inr))}<br><span class="meta">${esc(s.exShowroomFrom.city || '')} · official site</span>` : 'Ask for an itemised quote'],
  ['Official source', s => sourceLinks(s.sources)]
];
function specTable(ids) {
  const specs = ids.map(id => SPECS[id] || {id, name: modelById(id)?.name || id, channel: modelById(id)?.channel});
  const rows = SPEC_ROWS.filter(([, , , when]) => !when || specs.some(when)).map(([label, cell, score]) => {
    const values = score ? specs.map(s => { try { return score(s); } catch { return NaN; } }) : [];
    const scored = values.filter(num), best = scored.length > 1 && new Set(scored).size > 1 ? Math.max(...scored) : NaN;
    return `<tr><th scope="row">${label}</th>${specs.map((s, i) => { const html = cell(s); return `<td class="${num(best) && values[i] === best ? 'best' : ''}">${html || NP}</td>`; }).join('')}</tr>`;
  }).join('');
  return `<div class="table-wrap spec-table-wrap"><table class="spec-table"><thead><tr><th scope="col">Specification</th>${specs.map(s => `<th scope="col">${SEHGAL.photos[s.id] ? `<img src="${SEHGAL.photos[s.id].src}" alt="" loading="lazy">` : ''}<a href="#/cars/${esc(s.id)}">${esc(s.name)}</a></th>`).join('')}</tr></thead><tbody>${rows}<tr><th scope="row">Next step</th>${specs.map(s => `<td><button class="button small teal" data-book="test-drive" data-model="${esc(s.name)}">Test drive ↗</button></td>`).join('')}</tr></tbody></table></div>`;
}
function compareIds() {
  const fromHash = (location.hash.split('/')[2] || '').split(',').filter(id => modelById(id));
  if (fromHash.length) return fromHash.slice(0, 3);
  if (state.compare.size) return [...state.compare];
  return ['brezza', 'fronx', 'victoris'];
}
function comparePage() {
  const ids = compareIds();
  const picker = i => `<label class="field">Car ${i + 1}<select data-compare-slot="${i}"><option value="">— None —</option>${SEHGAL.models.map(m => `<option value="${m.id}" ${ids[i] === m.id ? 'selected' : ''}>${esc(m.name)} · ${m.channel}</option>`).join('')}</select></label>`;
  const peers = [...new Set(ids.flatMap(id => PEERS[id] || []))].filter(id => !ids.includes(id)).slice(0, 4);
  return page('Compare cars side by side', 'Choose up to three Maruti Suzuki models. Figures are taken from the official Arena and NEXA websites, with the source linked in every column.', 'COMPARE') + `<section class="page-content"><div class="container"><div class="panel compare-pickers"><div class="form-grid three">${[0, 1, 2].map(picker).join('')}</div>${peers.length ? `<p class="meta">Similar models: ${peers.map(id => `<button class="chip small-chip" data-add-peer="${id}">+ ${esc(modelById(id).name)}</button>`).join(' ')}</p>` : ''}</div><div id="compare-output">${ids.length ? specTable(ids) : '<p>Choose a car to begin.</p>'}</div><p class="fine-print">Highlighted cells show the highest figure in that row. Specifications checked on the official websites on ${esc(SPECS_CHECKED)}. Variants differ; your advisor will confirm the exact variant, price and availability. Claimed fuel-efficiency figures are test-cycle values, not on-road guarantees.</p><div class="callout"><h3>Found your shortlist?</h3><p class="muted">Drive them back to back at your nearest Sehgal showroom.</p><button class="button teal" data-book="test-drive">Book a test drive ↗</button> ${link('finance', 'Compare finance', 'outline')}</div></div></section>`;
}
function setCompareIds(ids) { const clean = [...new Set(ids.filter(Boolean))].slice(0, 3); state.compare = new Set(clean); location.hash = '#/compare/' + clean.join(','); }
document.addEventListener('change', e => { if (e.target.matches('[data-compare-slot]')) { const ids = [...document.querySelectorAll('[data-compare-slot]')].map(s => s.value); setCompareIds(ids); } });
document.addEventListener('click', e => { const b = e.target.closest('[data-add-peer]'); if (!b) return; const ids = compareIds(); if (ids.length >= 3) ids.pop(); ids.push(b.dataset.addPeer); setCompareIds(ids); });

/* Key specifications and similar models on each model page. */
function modelSpecSummary(id) {
  const s = SPECS[id];
  const peers = (PEERS[id] || []).filter(modelById);
  const cells = s ? [['Fuel', list(s.fuels)], ['Transmission', list(s.transmissions)], ['Power', perFuel(s.powerPs, 'PS') || perFuel(s.powerKw, 'kW')], ['Seating', num(s.seating) ? s.seating + ' seats' : ''], ['Airbags', esc(s.airbags || '')], ['Crash test', ncapText(id)]] : [];
  return `${cells.length ? `<div class="spec-grid key-specs">${cells.map(([k, v]) => `<div class="spec-cell"><small>${k}</small><b>${v || NP}</b></div>`).join('')}</div><p class="fine-print">From the official website, checked ${esc(SPECS_CHECKED)}. ${sourceLinks(s.sources)}</p>` : ''}${peers.length ? `<h3 class="peer-title">Compare with similar models</h3><div class="actions">${peers.map(p => `<a class="button small outline" href="#/compare/${id},${p}">${esc(modelById(id).name)} vs ${esc(modelById(p).name)} ↗</a>`).join('')}</div>` : ''}`;
}

/* ---------- finance: Sehgal preferred retail & wholesale finance ---------- */
function lenderRows(loan, months) {
  return (FACTS.loans || []).filter(l => num(l.rateFrom)).map(l => ({...l, emi: loanEstimate(loan, l.rateFrom, months)})).sort((a, b) => (a.sehgalRank || 99) - (b.sehgalRank || 99));
}
function lenderTable() {
  const form = $('#finance-form'); if (!form || !form.checkValidity() || state.financeMode !== 'emi') return '';
  const f = new FormData(form), loan = Number(f.get('amount')) - Number(f.get('down')), months = Number(f.get('months'));
  if (!(loan > 0)) return '';
  const rows = lenderRows(loan, months);
  if (!rows.length) return '<p class="notice">Published lender rates have not been loaded yet.</p>';
  const low = Math.min(...rows.map(r => r.emi.emi));
  return `<p class="meta">Loan of <b>${money(loan)}</b> over <b>${months} months</b> ordered by <b>Sehgal Autoriders’ verified Retail & Vahan financier preference</b>. <b>HDFC Bank</b> is our #1 preferred retail car loan partner (23.5% of financed new cars), followed by <b>State Bank of India (SBI)</b>, <b>AU Small Finance Bank</b>, <b>Cholamandalam</b>, <b>ICICI Bank</b> and <b>Kotak Mahindra Prime</b>.</p><div class="table-wrap"><table class="lender-table"><thead><tr><th scope="col">Financier & Sehgal Rank</th><th scope="col">Verified Sehgal Share (Retail & Vahan)</th><th scope="col">Published Rate (p.a.)</th><th scope="col">Indicative EMI</th><th scope="col">Total Interest</th><th scope="col">Key Terms & Desk Note</th><th scope="col">Source</th></tr></thead><tbody>${rows.map(l => `<tr class="${l.sehgalRank === 1 ? 'preferred-row' : ''}"><th scope="row">${l.sehgalBadge ? `<span class="partner-badge ${l.sehgalRank === 1 ? 'gold' : 'teal-badge'}">${esc(l.sehgalBadge)}</span><br>` : ''}${esc(l.lender)}</th><td><b>${esc(l.sehgalShare || 'Smart Finance Partner')}</b>${l.sehgalStats ? `<br><span class="meta">${esc(l.sehgalStats)}</span>` : ''}</td><td><b>${esc(l.rateFrom)}%</b>${num(l.rateTo) ? ` – ${esc(l.rateTo)}%` : ' onwards'}${l.basis ? `<br><span class="meta">${esc(l.basis)}</span>` : ''}</td><td class="${l.emi.emi === low || l.sehgalRank === 1 ? 'best' : ''}"><b>${money(l.emi.emi)}</b>${l.sehgalRank === 1 ? `<br><span class="meta">Preferred #1 Desk</span>` : l.emi.emi > low ? `<br><span class="meta">+${money(l.emi.emi - low)} / mo vs lowest</span>` : '<br><span class="meta">Lowest published PSU slab</span>'}</td><td>${money(l.emi.interest)}</td><td class="meta">${esc([l.maxTenureMonths ? `Up to ${l.maxTenureMonths} months` : '', l.processingFee || ''].filter(Boolean).join(' · ')) || '—'}</td><td>${l.source ? `<a class="text-link" href="${esc(l.source)}" target="_blank" rel="noopener noreferrer">Official rate ↗</a>` : ''}</td></tr>`).join('')}</tbody></table></div>`;
}
function updateLenders() { const t = $('#lender-output'); if (t) t.innerHTML = lenderTable(); }
function financeExtras() {
  const partners = FACTS.smartFinancePartners || {};
  const wf = FACTS.wholesaleFinance || {};
  return `<div class="section">
<div class="partner-spotlight">
  <div>
    <span class="partner-badge gold">#1 PREFERRED RETAIL & WHOLESALE FINANCIER AT SEHGAL</span>
    <h2>HDFC Bank — Our #1 Car Finance Partner (23.5% Share)</h2>
    <p>Across <b>4,491+</b> new Maruti Suzuki policies and <b>3,815</b> FY 2026-27 retail deliveries, <b>77%</b> of Sehgal buyers choose vehicle finance — and <b>HDFC Bank is #1</b> in both our DMS Retail Register (<b>411</b> FY26-27 YTD retails) and Vahan RC Hypothecations (<b>370</b> registrations), followed by <b>State Bank of India (SBI)</b>, <b>AU Small Finance Bank</b>, <b>Cholamandalam</b>, <b>ICICI Bank</b>, <b>Kotak Mahindra Prime</b>, <b>Bank of Maharashtra</b> and <b>Saraswat Co-op Bank</b>.</p>
    <div class="actions">
      <button class="button teal small" data-book="finance">Get an HDFC / SBI Finance Quote ↗</button>
      <a class="button outline small" href="tel:8888881341">Call Finance Head (Sachin Kumbhar: +91 88888 81341) ↗</a>
    </div>
  </div>
  <div class="partner-metrics">
    <div class="metric-box"><strong>#1</strong><span>HDFC Bank in Retail & Vahan (23.5% Share)</span></div>
    <div class="metric-box"><strong>#2</strong><span>State Bank of India (13.6% Share)</span></div>
    <div class="metric-box"><strong>77%</strong><span>New Cars Financed In-House at Sehgal</span></div>
    <div class="metric-box"><strong>43+</strong><span>Maruti Suzuki Smart Finance Lenders</span></div>
  </div>
</div>
<div class="section-heading section-tight"><div><p class="eyebrow">SEHGAL PREFERRED FINANCIERS · VERIFIED RETAIL & VAHAN STANDING</p><h2>Same car. Our top banking partners.</h2></div><p class="muted">Compare monthly EMIs across Sehgal Autoriders’ top retail financiers. Rates and terms checked on ${esc(FACTS.checkedOn || '')}.</p></div><div id="lender-output" aria-live="polite">${state.financeMode === 'emi' ? '' : '<p class="notice">Switch to “Calculate monthly payment” to compare lenders.</p>'}</div></div>
<div class="panel section">
  <p class="eyebrow">WHOLESALE INVENTORY FUNDING & CORPORATE FLEET DESK</p>
  <h2>${esc(wf.headline || 'Institutional Inventory Funding & Corporate Fleet Strength')}</h2>
  <p class="muted">${esc(wf.subheadline || '')}</p>
  <div class="tiles four section-tight">
    ${(wf.inventoryBanks || []).map((b, i) => `<article class="tile"><p class="eyebrow">0${i + 1} · WHOLESALE LINE</p><h3>${esc(b.bank)}</h3><p><b>${esc(b.role)}</b></p><p class="muted">${esc(b.detail)}</p></article>`).join('')}
  </div>
  ${wf.corporateLeasing ? `<div class="callout section-tight"><div><p class="eyebrow">CORPORATE & FLEET LEASING</p><h3>${esc(wf.corporateLeasing.partner)}</h3><p class="muted">Trusted by ${esc(wf.corporateLeasing.corporateClients)}</p><p class="fine-print"><b>Direct Finance Desk:</b> ${esc(wf.corporateLeasing.deskContact)}</p></div><button class="button teal" data-book="fleet">Enquire for Corporate / Fleet Lease ↗</button></div>` : ''}
</div>
<div class="tiles section">
<article class="tile"><p class="eyebrow">01 · APPLY ONLINE</p><h3>Maruti Suzuki Smart Finance</h3><p class="muted">Maruti Suzuki’s digital loan platform${partners.count ? ` connects ${partners.count} financiers` : ''} — compare pre-approved offers online${(partners.names || []).length ? `. Key partners include ${esc(partners.names.slice(0, 10).join(', '))} and more` : ''}.</p>${partners.url ? external(esc(partners.url), 'Open Smart Finance') : ''}</article>
<article class="tile"><p class="eyebrow">02 · BE READY</p><h3>Documents lenders ask for</h3><ul class="check-list"><li>PAN card and Aadhaar / current address proof</li><li>Salaried: last 3 months’ salary slips & Form 16</li><li>Self-employed / Business: last 2 years’ ITR & GST/business proof</li><li>Last 6 months’ bank statement</li><li>Passport-size photographs</li></ul><p class="fine-print">In-house HDFC, SBI, AU, Chola & ICICI desks at every Sehgal showroom handle end-to-end paperless approval.</p></article>
<article class="tile"><p class="eyebrow">03 · READ THE QUOTE</p><h3>What an on-road price includes</h3><ul class="check-list"><li>Ex-showroom price</li><li>RTO registration & road tax (MH-12 / MH-14)</li><li>1st-year Comprehensive + 3-year Third-Party Insurance (Bajaj Allianz #1 preferred)</li><li>TCS (1% where ex-showroom exceeds ₹10 Lakh)</li><li>FASTag, MSGA genuine accessories & Extended Warranty (Solitaire/Royal Platinum)</li></ul>${request('Ask for an itemised quote', 'Finance', 'small outline')}</article></div>`;
}

/* ---------- insurance: Bajaj Allianz #1 Preferred Partner & MI Portfolio ---------- */
function insurancePage() {
  const ins = FACTS.insurance || {};
  const port = ins.sehgalPortfolio || {};
  const insurers = port.insurers || [];
  const ncab = (ins.ncb || []);
  const idv = (ins.idvDepreciation || []);
  const tp = (ins.thirdPartyPrivateCar || []);
  return page('Car & Two-Wheeler Insurance — Built Around Bajaj Allianz & Maruti Insurance', 'Instant policy issuance, 97.1% Maruti Insurance renewal continuity, and priority cashless accident repair across all Sehgal bodyshops.', 'SEHGAL INSURANCE & CASHLESS CLAIMS') + `<section class="page-content"><div class="container">
<div class="partner-spotlight">
  <div>
    <span class="partner-badge gold">#1 PREFERRED NEW CAR & CASHLESS BODYSHOP PARTNER</span>
    <h2>Bajaj Allianz General Insurance — 43.2% New Car Share at Sehgal</h2>
    <p>${esc(port.strategicArrangement || 'Backed by Sehgal Autoriders’ ₹1 Crore strategic advance & priority cashless arrangement with Bajaj Allianz General Insurance.')}</p>
    <p class="muted">Whether you are taking delivery of a new <b>Maruti Suzuki Arena</b> (<b>42.1%</b> Bajaj Allianz share) or <b>NEXA</b> (<b>44.0%</b> Bajaj Allianz share), or renewing your policy across our <b>15,047+</b> Maruti Suzuki and <b>5,652+</b> Hero policies, our in-house Insurance Desk ensures zero-hassle cashless claims at Bavdhan, Manjri, Lonavala, Kamshet, Khed Shivapur, Bhor and Chinchwad.</p>
    <div class="actions">
      <button class="button teal small" data-book="insurance">Get Bajaj Allianz / MI Quote ↗</button>
      <a class="button outline small" href="tel:8888881399">Call MI Renewal Desk (Sarika: +91 88888 81399) ↗</a>
      <a class="button outline small" href="mailto:insurance@sehgalautoriders.com">insurance@sehgalautoriders.com ↗</a>
    </div>
  </div>
  <div class="partner-metrics">
    <div class="metric-box"><strong>43.2%</strong><span>Bajaj Allianz Share in New Maruti Cars (1,941 Policies)</span></div>
    <div class="metric-box"><strong>3,526</strong><span>Active Bajaj Allianz Policies (#1 Overall at Sehgal)</span></div>
    <div class="metric-box"><strong>97.1%</strong><span>Maruti Insurance (MI) Own-Renewal Retention</span></div>
    <div class="metric-box"><strong>20,699+</strong><span>Total Maruti & Hero Policies Managed by Sehgal</span></div>
  </div>
</div>

${insurers.length ? `<div class="section">
  <div class="section-heading">
    <div><p class="eyebrow">SEHGAL AUTORIDERS · AUTHORISED CASHLESS INSURER PANEL</p><h2>Our Insurance Partners by Verified Volume.</h2></div>
    <p class="muted">Actual policy distribution across <b>${port.totalMarutiPolicies?.toLocaleString('en-IN') || '15,047'}</b> Maruti Suzuki policies (<b>${port.newCarPolicies?.toLocaleString('en-IN') || '4,491'}</b> New Car + <b>${port.renewalPolicies?.toLocaleString('en-IN') || '10,556'}</b> Renewals) and <b>${port.heroPolicies?.toLocaleString('en-IN') || '5,652'}</b> Hero two-wheeler policies.</p>
  </div>
  <div class="table-wrap">
    <table class="lender-table">
      <thead>
        <tr>
          <th scope="col">Rank & Insurer</th>
          <th scope="col">Sehgal Role & Tie-Up</th>
          <th scope="col">New Car Share</th>
          <th scope="col">Renewals</th>
          <th scope="col">Total Policies</th>
          <th scope="col">Customer Advantage at Sehgal</th>
        </tr>
      </thead>
      <tbody>
        ${insurers.map(r => `<tr class="${r.rank === 1 ? 'preferred-row' : ''}">
          <th scope="row">${r.rank === 1 ? '<span class="partner-badge gold">#1 PREFERRED PARTNER</span><br>' : `<span class="partner-badge teal-badge">#${r.rank} PANEL INSURER</span><br>`}${esc(r.name)}</th>
          <td><b>${esc(r.role)}</b></td>
          <td class="${r.rank === 1 ? 'best' : ''}"><b>${esc(r.newCarShare)}</b><br><span class="meta">${r.newCarPolicies.toLocaleString('en-IN')} new policies</span></td>
          <td><b>${r.renewalPolicies.toLocaleString('en-IN')}</b></td>
          <td><b>${r.totalPolicies.toLocaleString('en-IN')}</b><br><span class="meta">${esc(r.totalShare)} of portfolio</span></td>
          <td class="meta">${esc(r.highlight)}</td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>
  <p class="fine-print">Direct Insurance & Renewal Team: <b>Sarika (+91 88888 81399)</b> · <b>Manish (+91 95525 25980)</b> · <b>Suraj (+91 78880 08987)</b> · Email: <a class="text-link" href="mailto:insurance@sehgalautoriders.com">insurance@sehgalautoriders.com</a>.</p>
</div>` : ''}

<div class="tiles section"><article class="tile"><p class="eyebrow">01 · NEW & RENEWAL</p><h3>Bajaj Allianz & Maruti Insurance</h3><p class="muted">Every new Arena & NEXA car is issued with priority Bajaj Allianz / Maruti Suzuki Insurance cover (1-Year Own Damage + 3-Year Mandatory Third-Party + Zero Dep / RTI add-ons).</p><button class="button small teal" data-book="insurance">Get a renewal / new quote ↗</button> ${ins.msiUrl ? external(esc(ins.msiUrl), 'Maruti Suzuki Insurance') : ''}</article>
<article class="tile"><p class="eyebrow">02 · PRIORITY CASHLESS CLAIM</p><h3>Had an accident? Green-channel repair</h3><ol class="check-list numbered"><li>Ensure everyone is safe (Call 112 in an emergency).</li><li>Photograph the vehicle and incident spot.</li><li>Bring your car to any Sehgal Bodyshop (Bavdhan, Manjri, Lonavala, Kamshet, Khed Shivapur or Bhor).</li><li>Under our <b>₹1 Cr Bajaj Allianz & MI cashless corridor</b>, we handle intimation, digital survey and cashless settlement in-house.</li></ol><button class="button small outline" data-book="service" data-need="Bodyshop or accidental repair">Book cashless bodyshop repair ↗</button></article>
<article class="tile"><p class="eyebrow">03 · RECOMMENDED ADD-ONS</p><h3>Bumper-to-bumper peace of mind</h3><dl class="addon-list"><div><dt>Zero Depreciation (Bumper-to-Bumper)</dt><dd>100% settlement on replaced sheet-metal, plastic, fibre and glass parts with zero depreciation deduction.</dd></div><div><dt>Engine & Hydrostatic Lock Protection</dt><dd>Essential for Pune & Lonavala monsoons — covers water ingression and oil-leakage engine/gearbox damage.</dd></div><div><dt>Return to Invoice (RTI)</dt><dd>Bridges the gap between IDV and full on-road invoice price (including road tax & registration) in case of total loss or theft.</dd></div><div><dt>Consumables & Key/Tyre Cover</dt><dd>Covers engine oil, coolant, brake fluid, nuts/bolts and smart-key replacement during accidental repairs.</dd></div></dl></article></div>
<div class="duo section"><div class="panel"><p class="eyebrow">NO CLAIM BONUS</p><h2>Your reward for claim-free years.</h2><p class="muted">The discount applies to the own-damage part of the premium and belongs to you, not the car — when you exchange your old car at <b>Sehgal True Value Bavdhan</b>, you can transfer up to 50% NCB to your new Maruti Suzuki.</p>${ncab.length ? `<div class="table-wrap"><table><thead><tr><th scope="col">Claim-free years</th><th scope="col">Discount on own-damage premium</th></tr></thead><tbody>${ncab.map(r => `<tr><td>${esc(r.years)}</td><td><b>${esc(r.percent)}%</b></td></tr>`).join('')}</tbody></table></div>` : `<p>${NP}</p>`}
<form id="ncb-form" class="form-grid section-tight"><label class="field">Own-damage premium before discount (₹)<input name="od" type="number" min="0" max="10000000" step="1" value="12000" required></label><label class="field">Claim-free years<select name="years">${ncab.map(r => `<option value="${esc(r.percent)}">${esc(r.years)}</option>`).join('')}</select></label><div class="energy-result" id="ncb-result" aria-live="polite"></div></form>${ins.ncbSource ? `<p class="fine-print">Slabs as published at ${external(esc(ins.ncbSource), 'IRDAI tariff')}, checked ${esc(FACTS.checkedOn)}.</p>` : ''}</div>
<div class="panel"><p class="eyebrow">INSURED DECLARED VALUE (IDV)</p><h2>What your car is insured for.</h2><p class="muted">IDV is the maximum sum assured if the car is stolen or damaged beyond repair. It is calculated as manufacturer ex-showroom price less IRDAI standard depreciation.</p>${idv.length ? `<div class="table-wrap"><table><thead><tr><th scope="col">Age of vehicle</th><th scope="col">Depreciation</th></tr></thead><tbody>${idv.map(r => `<tr><td>${esc(r.age)}</td><td>${esc(r.percent)}${String(r.percent).match(/\d$/) ? '%' : ''}</td></tr>`).join('')}</tbody></table></div>${ins.idvSource ? `<p class="fine-print">Schedule as published at ${external(esc(ins.idvSource), 'IRDAI source')}. Cars over five years old are valued by mutual agreement across our MI panel.</p>` : ''}` : `<p>${NP}</p>`}</div></div>
${tp.length ? `<div class="panel section-tight"><p class="eyebrow">THIRD-PARTY COVER · COMPULSORY BY LAW</p><h3>Annual third-party premium for private cars</h3><div class="table-wrap"><table><thead><tr><th scope="col">Engine size</th><th scope="col">Premium (₹, before GST)</th></tr></thead><tbody>${tp.map(r => `<tr><td>${esc(r.band)}</td><td>${esc(r.premium)}</td></tr>`).join('')}</tbody></table></div><p class="fine-print">${esc(ins.thirdPartyNote || '')} ${ins.thirdPartySource ? external(esc(ins.thirdPartySource), 'MoRTH / PIB Notification') : ''}</p></div>` : ''}
<div class="panel section">
  <div class="section-heading">
    <div>
      <p class="eyebrow">W2 GATE ENTRY & RECEPTION INSURANCE PPT · 22 OFFICIAL SLIDES</p>
      <h2>Motor Insurance Myths vs Facts, Endorsements & 5-Step Claims</h2>
    </div>
    <div class="actions">
      <a class="button small teal" href="assets/guidebooks/Sehgal-Maruti-Insurance-Guide-PPT.pdf" target="_blank" rel="noopener noreferrer">Download Official 22-Slide Insurance PPT (PDF) ↗</a>
      <a class="button small outline" href="tel:7888039845">Manish Takwale: +91 78880 39845 ↗</a>
      <a class="button small outline" href="tel:8888881399">Sarika Tupere: +91 88888 81399 ↗</a>
    </div>
  </div>
  ${renderCareTabContent('insurance')}
</div>
<div class="callout"><h3>Policy due for renewal?</h3><p class="muted">Share your registration number and our Bajaj Allianz & Maruti Insurance desk (+91 88888 81399) will send an instant Zero-Dep renewal quote on WhatsApp.</p><button class="button teal" data-book="insurance">Request an instant quote ↗</button></div></div></section>`;
}
function updateNcb() { const f = $('#ncb-form'); if (!f) return; const out = $('#ncb-result'); if (!f.checkValidity()) { out.textContent = 'Enter a valid premium.'; return; } const d = new FormData(f), od = Number(d.get('od')), pct = Number(d.get('years')); out.innerHTML = `<span class="meta">Estimated NCB saving</span><strong>${money(od * pct / 100)}</strong><span>${pct}% of ${money(od)} · net own-damage premium ${money(od * (1 - pct / 100))}</span>`; }

/* ---------- service schedule, spares, safety ---------- */
function serviceExtras() {
  const s = FACTS.service || {};
  const sched = s.schedule || [];
  return `<div class="section"><div class="duo"><div class="panel"><p class="eyebrow">MARUTI SUZUKI SERVICE SCHEDULE</p><h2>When is my service due?</h2>${sched.length ? `<div class="table-wrap"><table><thead><tr><th scope="col">Service</th><th scope="col">Due at</th><th scope="col">Details</th></tr></thead><tbody>${sched.map(r => `<tr><td><b>${esc(r.name)}</b></td><td>${esc(r.due)}</td><td>${esc(r.type || '')}</td></tr>`).join('')}</tbody></table></div><p class="fine-print">Whichever comes first. ${esc(s.scheduleNote || '')}</p>` : `<p>Your owner’s manual lists the schedule for your model. ${link('owners', 'Find your manual', 'small outline')}</p>`}</div>
<div class="panel"><p class="eyebrow">WARRANTY & ROADSIDE HELP</p><h2>Covered for the road ahead.</h2><dl class="addon-list">${s.standardWarranty ? `<div><dt>Standard warranty</dt><dd>${esc(s.standardWarranty)}</dd></div>` : ''}${(s.extendedWarranty || []).map(w => `<div><dt>${esc(w.name)}</dt><dd>${esc(w.detail || '')}</dd></div>`).join('')}${s.roadside ? `<div><dt>Roadside assistance & Service Escalation</dt><dd>${esc(s.roadside)}</dd></div>` : ''}</dl>${s.warrantySource ? `<p class="fine-print">${external(esc(s.warrantySource), 'Official warranty terms')}</p>` : ''}<p class="muted">29.1% of Sehgal new car buyers in FY 2026-27 opted for Extended Warranty at delivery for up to 6 years / 1,60,000 km protection.</p></div></div>
<div class="tiles section"><article class="tile"><p class="eyebrow">GENUINE PARTS</p><h3>Spares & accessories</h3><p class="muted">Genuine MSGP parts, official price lookup and MSGA accessories fitted by certified technicians.</p>${link('spares', 'Spares & accessories', 'small outline')}</article><article class="tile"><p class="eyebrow">BAJAJ ALLIANZ & MI CASHLESS</p><h3>Accident repair & claims</h3><p class="muted">Priority ₹1 Cr Bajaj Allianz & Maruti Insurance cashless bodyshop corridor across Bavdhan, Manjri, Lonavala, Kamshet, Khed Shivapur & Bhor.</p>${link('insurance', 'Cashless insurance help', 'small outline')}</article><article class="tile"><p class="eyebrow">BEFORE YOU COME</p><h3>What to bring</h3><ul class="check-list"><li>Registration certificate (RC)</li><li>Service booklet or last invoice</li><li>Bajaj Allianz / MI policy copy for any claim</li><li>Spare key if a key/immobiliser issue is reported</li></ul></article></div>${w2GateEntryPdfPackSection()}${workshopNamedEscalationPanel()}</div>${roadCareInteractiveHub()}`;
}
function sparesPage() {
  const s = FACTS.service || {};
  return page('Genuine spares & accessories', 'Parts made for your Maruti Suzuki, fitted by trained technicians. Check a part price, ask for availability or add accessories to your car.', 'SPARES & ACCESSORIES') + `<section class="page-content"><div class="container"><div class="tiles">
<article class="tile"><p class="eyebrow">01 · MARUTI SUZUKI GENUINE PARTS</p><h3>Why genuine parts</h3><p class="muted">Genuine parts match the fit, material and testing of the parts your car was built with. Non-genuine brake, suspension and electrical parts can affect safety and warranty.</p>${(s.genuinePartsTips || []).length ? `<ul class="check-list">${s.genuinePartsTips.map(t => `<li>${esc(t)}</li>`).join('')}</ul>` : ''}</article>
<article class="tile"><p class="eyebrow">02 · PRICE CHECK</p><h3>Official parts price list</h3><p class="muted">Look up the maximum retail price of common parts on the official Maruti Suzuki website before you visit.</p>${s.partsPriceUrl ? external(esc(s.partsPriceUrl), 'Check part prices') : `<p class="meta">${NP}</p>`}</article>
<article class="tile"><p class="eyebrow">03 · MAKE IT YOURS</p><h3>Genuine accessories</h3><p class="muted">Seat covers, mats, infotainment, protection and styling kits designed for each model.</p>${s.accessoriesUrl ? external(esc(s.accessoriesUrl), 'Browse accessories') : ''}</article></div>
<div class="duo section"><div class="panel"><p class="eyebrow">ASK OUR PARTS COUNTER</p><h2>Need a part?</h2><p class="muted">Tell us the model, year and part. Our parts team confirms price and availability before you travel.</p><button class="button teal" data-book="parts">Enquire about a part ↗</button></div>
<div class="panel"><p class="eyebrow">MORE FROM SEHGAL & MARUTI SUZUKI</p><h2>Exchange, rewards and more.</h2><ul class="check-list">${s.trueValueUrl ? `<li>${external(esc(s.trueValueUrl), 'Sehgal True Value Bavdhan — Certified Used Cars & Exchange (truevalueofbavdhan.com)')}</li>` : ''}${s.rewardsUrl ? `<li>${external(esc(s.rewardsUrl), 'Maruti Suzuki Rewards')}</li>` : ''}<li>${link('owners', 'Owner’s manuals', 'small outline')}</li></ul></div></div>
<p class="fine-print">Links open official Maruti Suzuki websites, checked ${esc(FACTS.checkedOn || '')}. Parts fitted at our workshop are billed at the prices shown on your job card.</p></div></section>`;
}
function safetyPage() {
  const rated = (FACTS.ncap || []).slice().sort((a, b) => (b.adultStars || 0) - (a.adultStars || 0));
  return page('Safety first. Every journey.', 'Independent crash-test results, the safety equipment in each model, and simple habits that keep your family safe.', 'SAFETY') + `<section class="page-content"><div class="container">
<div class="section-heading"><div><p class="eyebrow">INDEPENDENT CRASH TESTS</p><h2>How our cars scored.</h2></div><p class="muted">Results from Global NCAP and Bharat NCAP, the independent and government crash-test programmes. Ratings apply to the tested version; protocols changed over time, so compare ratings of the same programme and year.</p></div>
${rated.length ? `<div class="table-wrap"><table class="ncap-table"><thead><tr><th scope="col">Model</th><th scope="col">Programme</th><th scope="col">Adult occupant</th><th scope="col">Child occupant</th><th scope="col">Tested</th><th scope="col">Source</th></tr></thead><tbody>${rated.map(r => `<tr><th scope="row">${esc(r.model)}</th><td>${esc(r.programme)}${r.protocol ? `<br><span class="meta">${esc(r.protocol)} protocol</span>` : ''}</td><td>${stars(r.adultStars)}</td><td>${stars(r.childStars)}</td><td>${esc(r.testDate || '')}</td><td>${r.source ? `<a class="text-link" href="${esc(r.source)}" target="_blank" rel="noopener noreferrer">Result ↗</a>` : ''}</td></tr>`).join('')}</tbody></table></div><p class="fine-print">${esc(FACTS.ncapNote || '')} ${external('https://www.globalncap.org/indiaresults', 'Global NCAP India results')} ${external('https://www.bncap.in/vehicle-safety-ratings/', 'Bharat NCAP ratings')}</p>` : `<p class="notice">Crash-test results have not been loaded yet.</p>`}
<div class="section"><div class="section-heading"><div><p class="eyebrow">SAFETY EQUIPMENT</p><h2>Airbags and more, model by model.</h2></div></div><div class="table-wrap"><table><thead><tr><th scope="col">Model</th><th scope="col">Airbags</th><th scope="col">Safety highlights</th></tr></thead><tbody>${SEHGAL.models.map(m => { const s = SPECS[m.id] || {}; return `<tr><th scope="row"><a href="#/cars/${m.id}">${esc(m.name)}</a></th><td>${esc(s.airbags || '') || NP}</td><td>${list(s.safetyHighlights) || NP}</td></tr>`; }).join('')}</tbody></table></div><p class="fine-print">From the official model pages, checked ${esc(SPECS_CHECKED)}. Equipment varies by variant.</p></div>
<div class="tiles section"><article class="tile"><p class="eyebrow">EVERY TRIP</p><h3>Belt up, every seat</h3><p class="muted">Airbags are designed to work with seat belts. Rear passengers need belts too.</p></article><article class="tile"><p class="eyebrow">CHILDREN</p><h3>Right seat, right place</h3><p class="muted">Use a child seat suited to your child’s age and weight, fitted to ISOFIX points where your car has them. Never place a rear-facing child seat in front of an active airbag.</p></article><article class="tile"><p class="eyebrow">YOUR CAR</p><h3>Check before long trips</h3><p class="muted">Tyre pressure and tread, brakes, wipers, lights and warning lamps. Our workshop offers a pre-trip check.</p><button class="button small outline" data-book="service">Book a check-up ↗</button></article></div>
${w2GateEntryPdfPackSection()}</div></section>${roadCareInteractiveHub()}<section class="page-content"><div class="container"><div class="callout"><h3>Learn to drive safely</h3><p class="muted">Maruti Suzuki Driving School at Bavdhan, Law College Road & Fatima Nagar trains new and returning drivers in road rules and defensive driving.</p>${link('driving-school', 'Driving school', 'outline')}</div></div></section>`;
}

/* ---------- Corporate Social Responsibility ---------- */
function csrPage() {
  const c = FACTS.csr || {};
  const disclosures = [['CSR Policy', 'The policy approved by the Board, with the areas the company will work in.'], ['CSR Committee', 'Names and roles of the Board members on the CSR Committee.'], ['Projects approved by the Board', 'Each year’s projects and annual action plan, with amounts and the areas they serve.']];
  return page('Corporate Social Responsibility', 'Driving change beyond the showroom — for safer roads, skilled young people and the communities we serve across Pune and Maval.', 'CSR · SEHGAL AUTORIDERS') + `<section class="page-content"><div class="container">
<div class="location-feature">${suppliedFigure('driving-school', 'branch-feature-photo')}<div><p class="eyebrow">OUR COMMITMENT</p><h2>Part of the community<br>for over 27 years.</h2><p>Our customers, colleagues and neighbours live along the roads we serve — from Pune city (Erandwane, Bavdhan, Fatima Nagar, Manjri, Chinchwad) to Lonavala, Kamshet, Khed Shivapur, Bhor and Chakan. We want those roads to be safer and those communities stronger.</p><p class="muted">With 71.5% of our FY 2026-27 deliveries powered by cleaner Factory S-CNG and green mobility, environmental stewardship and road-safety education are part of our daily work.</p></div></div>
<div class="section"><div class="section-heading"><div><p class="eyebrow">FOCUS AREAS</p><h2>Where we make a difference.</h2></div></div><div class="tiles four">${[['Road safety & Driving School', 'Structured driver training at Bavdhan, Law College Rd & Fatima Nagar, plus helmet and seat-belt awareness across Pune & Maval.'], ['Skills & 2,400+ Livelihoods', 'Automotive technician training, ITI apprenticeships and career growth across 15 Pune-region dealerships and workshops.'], ['Green Mobility (71.5% S-CNG)', 'Leading Pune’s transition to factory S-CNG, Strong Hybrid and Electric (e VITARA & VIDA) vehicles alongside eco-friendly dry-wash workshops.'], ['Health & Community', 'Blood donation drives, technician eye-check camps and local community support across Pune, Lonavala and Bhor.']].map(([h, p], i) => `<article class="tile"><p class="eyebrow">0${i + 1}</p><h3>${h}</h3><p class="muted">${p}</p><span class="status-pill active-pill">Active Community Focus</span></article>`).join('')}</div></div>
${w2GateEntryPdfPackSection()}</div></section>${roadCareInteractiveHub()}<section class="page-content"><div class="container"><div class="panel section-tight"><p class="eyebrow">STATUTORY DISCLOSURES</p><h2>CSR disclosures</h2><p class="muted">${esc(c.websiteRule || 'Companies covered by Section 135 of the Companies Act, 2013 display their CSR Committee, CSR Policy and Board-approved projects on their corporate website.')}</p><div class="table-wrap"><table><thead><tr><th scope="col">Document</th><th scope="col">What it contains</th><th scope="col">Status</th></tr></thead><tbody>${disclosures.map(([d, w]) => { const doc = (c.documents || {})[d]; return `<tr><th scope="row">${d}</th><td>${w}</td><td>${doc ? `<a class="text-link" href="${esc(doc)}" target="_blank" rel="noopener">Download ↗</a>` : '<span class="status-pill pending">Published via Corporate Office (Law College Rd)</span>'}</td></tr>`; }).join('')}</tbody></table></div></div>
<div class="section"><div class="section-heading"><div><p class="eyebrow">FROM OUR COMMUNITY</p><h2>Moments we are proud of.</h2></div>${link('gallery', 'View the gallery', 'outline')}</div><div class="duo">${suppliedFigure('maharashtra-day', 'campaign-feature')}${suppliedFigure('car-tips-campaign', 'campaign-feature')}</div></div>
<div class="callout"><h3>Partner with us</h3><p class="muted">Schools, colleges, corporates and community groups working on road safety, driver training or green mobility can connect with our team.</p><button class="button teal" data-book="support">Propose a partnership ↗</button></div></div></section>`;
}

/* ---------- Digital Presence, Social Media & 8 Official Hyperlocal Portals ---------- */
function sehgalPowerStrip() {
  return `<section class="section sehgal-power-section">
  <div class="container">
    <div class="section-heading">
      <div><p class="eyebrow">SEHGAL AUTORIDERS · PUNE & MAVAL’S AUTOMOTIVE LEADER SINCE 1988</p><h2>Built on scale, trust and preferred partnerships.</h2></div>
      <div class="actions">${link('digital-presence', 'Our Online Presence & 8 Official Portals', 'outline small')} ${link('about', 'Leadership & Scale', 'small teal')}</div>
    </div>
    <div class="power-metrics-grid">
      <article class="power-card">
        <span class="eyebrow">NEW CAR & SERVICE SCALE</span>
        <strong>3,815+</strong>
        <b>New Maruti Suzuki Cars Delivered (FY 26-27 YTD)</b>
        <p class="muted">71.5% Factory S-CNG & Green Fuel mix · 553 True Value exchanges · 2,83,000+ Maruti workshop visits across 7 service hubs.</p>
      </article>
      <article class="power-card highlight-card">
        <span class="eyebrow">#1 PREFERRED INSURANCE PARTNER</span>
        <strong>43.2%</strong>
        <b>Bajaj Allianz General Insurance Share in New Cars</b>
        <p class="muted">Backed by our ₹1 Crore strategic cashless arrangement · 3,526+ Bajaj Allianz policies · 15,047 total Maruti policies · 97.1% MI own-renewal retention.</p>
        <a class="text-link" href="#/insurance">Explore Bajaj Allianz & MI Cashless Cover ↗</a>
      </article>
      <article class="power-card highlight-card">
        <span class="eyebrow">#1 PREFERRED FINANCE PARTNER</span>
        <strong>#1 HDFC</strong>
        <b>23.5% Financed Share + Wholesale Inventory Lines</b>
        <p class="muted">#1 in DMS Retail (411) & Vahan RC (370), followed by SBI, AU Bank, Chola, ICICI & Kotak · Multi-crore wholesale inventory funding for ready stock.</p>
        <a class="text-link" href="#/finance">Compare HDFC, SBI & Preferred Lenders ↗</a>
      </article>
      <article class="power-card">
        <span class="eyebrow">HERO MOTOCORP TWO-WHEELERS</span>
        <strong>1.01 Lakh+</strong>
        <b>Hero Riders Across 4 Pune Dealerships</b>
        <p class="muted">Flagship Chinchwad MIDC 3S (10307), Hero Premia (17057), PCMC SSP (23490) & Chakan (61299) · 5,707+ families own both Sehgal Maruti & Hero.</p>
        <a class="text-link" href="#/two-wheelers">Explore 4 Sehgal Hero Outlets ↗</a>
      </article>
    </div>
  </div>
</section>`;
}

let activeReviewTag = 'all';
let activeMapFilter = 'all';
let selectedMapPinId = 'bavdhan-arena';

function renderReviewAndVideoGrid(tagId) {
  const dp = FACTS.digitalPresence || {};
  const rev = dp.googleReviewsSummary || {};
  const reviews = (rev.featuredReviews || []).filter(r => tagId === 'all' || (r.tags || []).includes(tagId));
  const videos = (dp.brandedVideos || []).filter(v => tagId === 'all' || (v.tags || []).includes(tagId));

  return `
    ${videos.length ? `<div class="section-tight">
      <div class="section-heading">
        <div>
          <p class="eyebrow">BRANDED SEHGAL AUTORIDERS VIDEO STUDIO · WATERMARKED & READY FOR 1-GO PUBLISHING</p>
          <h3>Watch Customer Deliveries, Showroom Walkarounds, Road Care & Careers Reels</h3>
        </div>
        <a class="button small outline" href="https://www.youtube.com/@sehgalautoriders5087" target="_blank" rel="noopener noreferrer">Open YouTube Channel ↗</a>
      </div>
      <div class="video-reel-grid">
        ${videos.map(v => `<article class="tile video-reel-card">
          <span class="partner-badge teal-badge">${esc(v.queue)}</span>
          <div class="video-frame ${v.aspect === 'vertical' ? 'vertical-video' : 'landscape-video'}">
            <video controls preload="metadata" poster="${esc(v.poster)}">
              <source src="${esc(v.src)}" type="video/mp4">
            </video>
          </div>
          <h4>${esc(v.title)}</h4>
          <p class="muted">${esc(v.subtitle)}</p>
          <div class="actions">
            <a class="button small outline" href="${esc(v.src)}" download>Download Branded MP4 ↗</a>
          </div>
        </article>`).join('')}
      </div>
    </div>` : ''}
    <div class="section-tight">
      <div class="section-heading">
        <div>
          <p class="eyebrow">VERIFIED GOOGLE MAPS CUSTOMER DELIVERY PHOTOS & 5-STAR SHOUTOUTS</p>
          <h3>Real Families & Staff Spotlights Across Sehgal Autoriders (${reviews.length} Shown)</h3>
        </div>
        <a class="button small teal" href="${esc(rev.bavdhanMapsUrl || 'https://www.google.com/maps')}" target="_blank" rel="noopener noreferrer">View 3,968+ Bavdhan Reviews on Google Maps ↗</a>
      </div>
      <div class="tiles three">
        ${reviews.map(r => `<article class="tile review-proof-card">
          <div class="review-photo-wrap">
            <img src="${esc(r.photo)}" alt="${esc(r.customer)} at Sehgal Autoriders" loading="lazy">
          </div>
          <div class="review-card-body">
            <span class="partner-badge gold">★★★★★ · ${esc(r.badge)}</span>
            <h4>${esc(r.customer)}</h4>
            <p class="eyebrow">${esc(r.branch)} · ${esc(r.timeAgo)}</p>
            <p><b>${esc(r.headline)}</b></p>
            <p class="muted">“${esc(r.quote)}”</p>
            <div class="actions">
              <a class="text-link" href="${esc(r.fullCard)}" target="_blank" rel="noopener noreferrer">View Verified Google Review Screenshot ↗</a>
            </div>
          </div>
        </article>`).join('')}
      </div>
    </div>`;
}

function googleReviewsAndVideosHub() {
  const dp = FACTS.digitalPresence || {};
  const rev = dp.googleReviewsSummary || {};
  const tags = rev.reviewTags || [];
  return `<section class="section" id="google-reviews-hub">
    <div class="container">
      <div class="partner-spotlight">
        <div>
          <span class="partner-badge gold">10,000+ GOOGLE MAPS REVIEWS · 4.6★ NETWORK RATING</span>
          <h2>4.6★ Across 3,968 Reviews at Bavdhan Arena Alone — Over 10,000+ Network-Wide.</h2>
          <p>${esc(rev.aiSummaryQuote || '')}</p>
          <p class="muted">Filter by real Google Maps review topics below to watch branded customer delivery reels, showroom walkarounds, repeat-buyer family stories (Deepti Mangesh’s 2nd car), and “Stars of Sehgal” staff shoutouts (Vikram S & Rohan).</p>
          <div class="actions">
            <a class="button teal" href="${esc(rev.bavdhanMapsUrl || '#')}" target="_blank" rel="noopener noreferrer">Verify on Google Maps (4.6★ · 3,968 Reviews) ↗</a>
            <a class="button outline" href="https://wa.me/918380038244?text=Hello%20Sehgal%20Autoriders%2C%20I%20saw%20your%204.6-star%20Google%20reviews%20and%20would%20like%20to%20enquire." target="_blank" rel="noopener noreferrer">Share Feedback / Enquire on WhatsApp ↗</a>
          </div>
        </div>
        <div class="partner-metrics">
          <div class="metric-box"><strong>4.6 ★</strong><span>Bavdhan Arena 3S Flagship (3,968 Verified Reviews)</span></div>
          <div class="metric-box"><strong>10,000+</strong><span>Total Google Maps Reviews & Followers Across 15 Locations</span></div>
          <div class="metric-box"><strong>2.83 Lakh+</strong><span>Maruti Suzuki Service Job Cards & 1.01L+ Hero Riders</span></div>
          <div class="metric-box"><strong>ceoservice@</strong><span>Unified Master Digital Command (ceoservice@sehgalautoriders.com)</span></div>
        </div>
      </div>
      <div class="chips care-tabs" role="tablist" aria-label="Filter Google Reviews & Videos by Topic">
        ${tags.map(t => `<button type="button" class="chip ${activeReviewTag === t.id ? 'active' : ''}" data-review-tag="${esc(t.id)}" aria-pressed="${activeReviewTag === t.id}">${esc(t.label)} <b>(${esc(t.count)})</b></button>`).join('')}
      </div>
      <div id="review-video-output">${renderReviewAndVideoGrid(activeReviewTag)}</div>
    </div>
  </section>`;
}

function renderSelectedPinDetail(pinId) {
  const mp = (FACTS.digitalPresence || {}).interactiveMapPins || {};
  const allCurr = mp.currentLocations || [];
  const allUp = mp.upcomingLocations || [];
  const curr = allCurr.find(p => p.id === pinId);
  const up = allUp.find(p => p.id === pinId);
  if (up) {
    return `<div class="map-detail-card upcoming-detail">
      <span class="partner-badge gold">🚀 LAUNCHING SOON · UPCOMING EXPANSION CORRIDOR</span>
      <h3>${esc(up.name)}</h3>
      <p class="eyebrow">${esc(up.corridor)} · ${esc(up.eta)}</p>
      <p>${esc(up.highlights)}</p>
      <div class="actions">
        <a class="button small teal" href="https://wa.me/918380038244?text=${encodeURIComponent('Hello Sehgal Autoriders, I would like VIP pre-opening priority for ' + up.name)}" target="_blank" rel="noopener noreferrer">Pre-Book VIP Priority on WhatsApp ↗</a>
        <a class="button small outline" href="mailto:ceoservice@sehgalautoriders.com?subject=${encodeURIComponent('Upcoming Location Inquiry / Careers: ' + up.name)}">Apply for New Branch Team (ceoservice@) ↗</a>
      </div>
    </div>`;
  }
  const p = curr || allCurr[0] || {};
  return `<div class="map-detail-card">
    <span class="partner-badge teal-badge">LIVE VERIFIED LOCATION · ${esc(p.rating || '4.6★')} (${esc(p.reviews || 'Verified')})</span>
    <h3>${esc(p.name || 'Sehgal Autoriders')}</h3>
    <p class="eyebrow">${esc(p.corridor || 'Pune & Maval')} · ${esc(p.metric || '')}</p>
    <p class="muted">Direct Telephone: <a class="text-link" href="tel:${esc(p.phone || '8380038244')}">${esc(p.phone || '+91 83800 38244')}</a> · Central Digital Desk: <a class="text-link" href="tel:8380038244">+91 83800 38244</a></p>
    <div class="actions">
      <a class="button small teal" href="${esc(p.mapUrl || '#')}" target="_blank" rel="noopener noreferrer">Navigate on Google Maps ↗</a>
      <a class="button small outline" href="https://wa.me/918380038244?text=${encodeURIComponent('Hello Sehgal Autoriders, I would like to book a visit/service at ' + (p.name || 'your branch'))}" target="_blank" rel="noopener noreferrer">Book Test Drive / Service on WhatsApp ↗</a>
    </div>
  </div>`;
}

function interactiveNetworkMapSection() {
  const mp = (FACTS.digitalPresence || {}).interactiveMapPins || {};
  const curr = mp.currentLocations || [];
  const up = mp.upcomingLocations || [];
  const showCurr = activeMapFilter === 'all' || activeMapFilter === 'current';
  const showUp = activeMapFilter === 'all' || activeMapFilter === 'upcoming';

  return `<section class="section wash" id="interactive-network-map">
    <div class="container">
      <div class="section-heading">
        <div>
          <p class="eyebrow">INTERACTIVE NETWORK MAP · 15 LIVE LOCATIONS + 4 UPCOMING EXPANSION CORRIDORS</p>
          <h2>Explore Our Pune, PCMC, Lonavala & Bhor Footprint — Plus Upcoming Locations.</h2>
        </div>
        <div class="chips" role="tablist" aria-label="Filter Map Pins">
          <button type="button" class="chip ${activeMapFilter === 'all' ? 'active' : ''}" data-map-filter="all">All Pins (${curr.length + up.length})</button>
          <button type="button" class="chip ${activeMapFilter === 'current' ? 'active' : ''}" data-map-filter="current">🟢 Live Showrooms & Workshops (15)</button>
          <button type="button" class="chip ${activeMapFilter === 'upcoming' ? 'active' : ''}" data-map-filter="upcoming">🟠 Upcoming / Launching Soon (${up.length})</button>
        </div>
      </div>
      <div class="interactive-map-layout">
        <div class="corridor-map-canvas" aria-label="Interactive Pune Maval Bhor Corridor Map">
          <div class="map-legend">
            <span><i class="pin-dot live-dot"></i> Live Showroom / Workshop (4.6★ Rated)</span>
            <span><i class="pin-dot upcoming-dot"></i> Launching Soon (Upcoming Expansion)</span>
          </div>
          <div class="map-Corridor-Lines">
            <span class="corridor-label" style="left:8%;top:10%">MUMBAI–PUNE EXPRESSWAY / LONAVALA</span>
            <span class="corridor-label" style="left:48%;top:8%">CHAKAN & PCMC INDUSTRIAL BELT</span>
            <span class="corridor-label" style="left:32%;top:44%">BAVDHAN · ERANDWANE · CENTRAL PUNE</span>
            <span class="corridor-label" style="left:60%;top:46%">FATIMA NAGAR · MANJRI EAST</span>
            <span class="corridor-label" style="left:40%;top:92%">KHED SHIVAPUR (NH-48) & BHOR SOUTH</span>
          </div>
          ${showCurr ? curr.map(p => `<button type="button" class="map-pin live-pin ${selectedMapPinId === p.id ? 'selected-pin' : ''}" style="left:${p.x}%;top:${p.y}%" data-map-pin="${esc(p.id)}" title="${esc(p.name)} (${esc(p.rating)} · ${esc(p.reviews)})">
            <span class="pin-badge">${esc(p.rating)}</span>
            <span class="pin-title">${esc(p.name.split('(')[0].trim())}</span>
          </button>`).join('') : ''}
          ${showUp ? up.map(u => `<button type="button" class="map-pin upcoming-pin ${selectedMapPinId === u.id ? 'selected-pin' : ''}" style="left:${u.x}%;top:${u.y}%" data-map-pin="${esc(u.id)}" title="UPCOMING: ${esc(u.name)}">
            <span class="pin-badge pulse-badge">SOON</span>
            <span class="pin-title">${esc(u.name.split('Express')[0].split('Customer')[0].split('Integrated')[0].split('Highway')[0].trim())}</span>
          </button>`).join('') : ''}
        </div>
        <div class="map-sidebar">
          <div id="selected-pin-box">${renderSelectedPinDetail(selectedMapPinId)}</div>
          <div class="panel map-list-scroll">
            <h4>Quick Select Branch or Upcoming Hub</h4>
            <div class="pin-quick-list">
              ${curr.map(p => `<button type="button" class="pin-list-btn ${selectedMapPinId === p.id ? 'active' : ''}" data-map-pin="${esc(p.id)}">🟢 <b>${esc(p.name.split('(')[0])}</b> <small>${esc(p.rating)} · ${esc(p.reviews)}</small></button>`).join('')}
              ${up.map(u => `<button type="button" class="pin-list-btn upcoming-btn ${selectedMapPinId === u.id ? 'active' : ''}" data-map-pin="${esc(u.id)}">🟠 <b>UPCOMING: ${esc(u.name)}</b> <small>${esc(u.corridor)}</small></button>`).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

function linkedinEmployerBrandSection() {
  const li = (FACTS.digitalPresence || {}).linkedinEmployerBrand || {};
  const stars = li.starsOfSehgal || [];
  const roles = li.openRoles || [];
  return `<section class="section" id="linkedin-careers-hub">
    <div class="container">
      <div class="section-heading">
        <div>
          <p class="eyebrow">MAGNET LINKEDIN EMPLOYER PROFILE · SEHGAL AUTORIDERS PVT. LTD.</p>
          <h2>A Dealership Everyone Wishes to Join — 2,400+ Strong Team & “Stars of Sehgal” Culture.</h2>
        </div>
        <div class="actions">
          <a class="button small teal" href="https://www.linkedin.com/company/sehgal-autoriders-pvt-ltd/" target="_blank" rel="noopener noreferrer">Open Official LinkedIn Page ↗</a>
          <a class="button small outline" href="mailto:ceoservice@sehgalautoriders.com?subject=Career%20Application%20-%20Sehgal%20Autoriders%20Pvt%20Ltd">Apply to ceoservice@sehgalautoriders.com ↗</a>
        </div>
      </div>
      <div class="linkedin-banner-preview">
        <img src="assets/social-kit/linkedin-cover-2256x382.png" alt="Sehgal Autoriders Pvt. Ltd. Official LinkedIn Employer Cover Banner" loading="lazy">
      </div>
      <div class="panel section-tight">
        <p class="eyebrow">OFFICIAL LINKEDIN “ABOUT US” EMPLOYER POSITIONING (OWNED BY CEOSERVICE@SEHGALAUTORIDERS.COM)</p>
        <h3>${esc(li.tagline || '')}</h3>
        <p class="muted">${esc(li.aboutCopy || '')}</p>
      </div>
      <div class="section-tight">
        <h3>🌟 “Stars of Sehgal” — Customer Review Recognition Wall</h3>
        <p class="muted">When customers praise our team members by name on Google Maps, we celebrate them across LinkedIn, Instagram and our showrooms.</p>
        <div class="tiles four">
          ${stars.map(s => `<article class="tile star-tile">
            <span class="partner-badge gold">★ STAR OF SEHGAL</span>
            <h4>${esc(s.name)}</h4>
            <p class="eyebrow">${esc(s.role)}</p>
            <p class="muted">${esc(s.recognition)}</p>
          </article>`).join('')}
        </div>
      </div>
      <div class="panel section-tight">
        <div class="section-heading">
          <div>
            <p class="eyebrow">EVERGREEN CAREERS · DIRECT APPLICATION TO CEOSERVICE@SEHGALAUTORIDERS.COM</p>
            <h3>Join Our 2,400+ Team Across 15 Current & 4 Upcoming Locations</h3>
          </div>
          <a class="button small teal" href="https://wa.me/918380038244?text=Hello%20Sehgal%20Autoriders%2C%20I%20would%20like%20to%20apply%20for%20a%20career%20opportunity%20with%20your%20team." target="_blank" rel="noopener noreferrer">Apply via WhatsApp (+91 83800 38244) ↗</a>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Role / Career Track</th>
                <th scope="col">Locations</th>
                <th scope="col">Why Join Sehgal Autoriders</th>
                <th scope="col">Instant Apply</th>
              </tr>
            </thead>
            <tbody>
              ${roles.map(r => `<tr>
                <th scope="row">${esc(r.title)}</th>
                <td>${esc(r.locations)}</td>
                <td>${esc(r.perks)}</td>
                <td>
                  <a class="text-link" href="mailto:ceoservice@sehgalautoriders.com?subject=${encodeURIComponent('Application: ' + r.title)}">Email CV ↗</a> ·
                  <a class="text-link" href="https://wa.me/918380038244?text=${encodeURIComponent('Hello Sehgal Autoriders, I am applying for: ' + r.title)}" target="_blank" rel="noopener">WhatsApp ↗</a>
                </td>
              </tr>`).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>`;
}

function whatsappBusinessCatalogSection() {
  const cats = (FACTS.digitalPresence || {}).whatsappCatalog || [];
  if (!cats.length) return '';
  return `<section class="section wash" id="whatsapp-business-catalog">
    <div class="container">
      <div class="section-heading">
        <div>
          <p class="eyebrow">VERIFIED WHATSAPP BUSINESS ACCOUNT & CATALOG · +91 83800 38244</p>
          <h2>One-Click WhatsApp Business Catalog for Sales, Service, Insurance, Finance & Careers.</h2>
        </div>
        <a class="button small teal" href="https://wa.me/918380038244?text=Hello%20Sehgal%20Autoriders%2C%20please%20share%20your%20WhatsApp%20Business%20Catalog." target="_blank" rel="noopener noreferrer">Open WhatsApp Desk (+91 83800 38244) ↗</a>
      </div>
      <div class="tiles three">
        ${cats.map(c => `<article class="tile wa-catalog-card">
          <img src="${esc(c.image)}" alt="${esc(c.title)}" loading="lazy" class="wa-catalog-img">
          <span class="partner-badge teal-badge">${esc(c.badge)}</span>
          <h3>${esc(c.title)}</h3>
          <p class="muted">${esc(c.subtitle)}</p>
          <div class="actions">
            <a class="button small teal" href="https://wa.me/918380038244?text=${encodeURIComponent(c.waText)}" target="_blank" rel="noopener noreferrer">Launch on WhatsApp ↗</a>
            <a class="button small outline" href="${esc(c.image)}" download>Download Catalog Card ↗</a>
          </div>
        </article>`).join('')}
      </div>
    </div>
  </section>`;
}

function socialBrandKitSection() {
  const assets = [
    ['True Vector Master Logo (SVG)', 'Infinite-resolution vector SVG redrawn from master emblem', 'assets/brand/sehgal-autoriders-logo.svg'],
    ['YouTube Profile (800×800 PNG)', 'Padded high-res square badge for @SehgalAutoriders', 'assets/social-kit/youtube-profile-800x800.png'],
    ['YouTube Channel Banner (2560×1440 PNG)', 'Safe-zone calibrated 2560×1440 banner with 4.6★ & 15 locations', 'assets/social-kit/youtube-banner-2560x1440.png'],
    ['Instagram Profile (1080×1080 & 320×320 PNG)', 'High-clarity badge for @sehgalautoriders.official', 'assets/social-kit/instagram-profile-1080x1080.png'],
    ['Facebook Profile & Retina Cover (1640×624 PNG)', 'For unified Sehgal Autoriders Official corporate page', 'assets/social-kit/facebook-cover-1640x624.png'],
    ['LinkedIn Logo (400×400) & Cover (2256×382 PNG)', 'Employer-of-Choice banner for Sehgal Autoriders Pvt. Ltd.', 'assets/social-kit/linkedin-cover-2256x382.png'],
    ['WhatsApp Business Profile (640×640 PNG)', 'Official badge for Central Digital Desk +91 83800 38244', 'assets/social-kit/whatsapp-business-profile-640x640.png']
  ];
  return `<section class="section" id="social-media-kit">
    <div class="container">
      <div class="panel">
        <div class="section-heading">
          <div>
            <p class="eyebrow">UNIFIED SOCIAL MEDIA ASSET PACK · HIGH-RESOLUTION VECTOR & PNG EXPORTS</p>
            <h3>Ready-to-Upload Profile Logos & Cover Banners (Master Account: ceoservice@sehgalautoriders.com)</h3>
          </div>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Asset Name</th>
                <th scope="col">Specification & Target Platform</th>
                <th scope="col">Direct Download</th>
              </tr>
            </thead>
            <tbody>
              ${assets.map(([name, spec, url]) => `<tr>
                <th scope="row">${esc(name)}</th>
                <td>${esc(spec)}</td>
                <td><a class="text-link" href="${esc(url)}" download>Download High-Res File ↗</a></td>
              </tr>`).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>`;
}

function digitalEcosystemStrip() {
  const dp = FACTS.digitalPresence || {};
  const socials = dp.socialChannels || [];
  const portals = dp.hyperlocalPortals || [];
  return `<section class="section wash" id="digital-ecosystem">
  <div class="container">
    <div class="section-heading">
      <div><p class="eyebrow">UNIFIED MASTER SOCIAL IDENTITY · OWNED BY CEOSERVICE@SEHGALAUTORIDERS.COM</p><h2>One Master Identity Across YouTube, Instagram, Facebook, LinkedIn & WhatsApp.</h2></div>
      <a class="button small outline" href="#/digital-presence">Open Full Digital, Reviews & Map Hub ↗</a>
    </div>
    <div class="social-cards-grid">
      ${socials.map(s => `<article class="tile social-tile">
        <div>
          <span class="partner-badge teal-badge">${esc(s.badge)}</span>
          <h3>${esc(s.platform)}</h3>
          <p class="social-handle"><b>${esc(s.handle)}</b></p>
          <p class="muted">${esc(s.description)}</p>
        </div>
        <div class="actions">
          <a class="button small teal" href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">Open ${esc(s.platform)} ↗</a>
        </div>
      </article>`).join('')}
    </div>
    <div class="panel section-tight">
      <div class="section-heading">
        <div><p class="eyebrow">8 OFFICIAL MARUTI SUZUKI HYPERLOCAL PORTALS · PARENT GROUP: SEHGL</p><h3>Official Branch Websites & Hyperlocal Network</h3></div>
        <p class="muted">Consolidated under our Central Digital & Hyperlocal Hub at Law College Road & Bavdhan (+91 83800 38244 · ceoservice@sehgalautoriders.com).</p>
      </div>
      <div class="hyperlocal-grid">
        ${portals.map(p => `<article class="hyperlocal-card">
          <span class="eyebrow">${esc(p.channel)} · WEB ID ${esc(p.webId)}</span>
          <h4>${esc(p.name)}</h4>
          <p class="hyperlocal-domain"><a href="${esc(p.url)}" target="_blank" rel="noopener noreferrer">${esc(p.domain)} ↗</a></p>
          <div class="hyperlocal-links">
            <a class="text-link" href="tel:${esc(p.phone)}">Call: ${esc(p.phone)}</a>
            <a class="text-link" href="${esc(p.fbUrl)}" target="_blank" rel="noopener noreferrer">Branch FB ↗</a>
          </div>
        </article>`).join('')}
      </div>
    </div>
  </div>
</section>`;
}

function digitalPresencePage() {
  return page(
    'Sehgal Autoriders — Unified Online Presence, 10,000+ Google Reviews & Interactive Map',
    'Centralized under ceoservice@sehgalautoriders.com & WhatsApp Business (+91 83800 38244) — featuring our 4.6★ (10,000+ Google Maps Reviews) Video Studio, Interactive Current & Upcoming Locations Map, Employer-of-Choice LinkedIn Hub, and 8 Maruti Suzuki Hyperlocal Portals.',
    'UNIFIED DIGITAL IDENTITY · 4.6★ (10,000+ REVIEWS) · CAREERS & MAP'
  ) +
    sehgalPowerStrip() +
    digitalEcosystemStrip() +
    googleReviewsAndVideosHub() +
    interactiveNetworkMapSection() +
    linkedinEmployerBrandSection() +
    whatsappBusinessCatalogSection() +
    socialBrandKitSection() +
    `<section class="page-content"><div class="container">
      <div class="duo">
        <div class="panel">
          <p class="eyebrow">UNIFIED MASTER ACCOUNT & DIGITAL COMMAND</p>
          <h2>Single-Window Governance (ceoservice@sehgalautoriders.com)</h2>
          <p class="muted">All official social channels, Google Business Profiles, LinkedIn Career applications and our 8 Maruti Suzuki Hyperlocal websites are governed centrally under <b>ceoservice@sehgalautoriders.com</b> and our Central Digital Desk (+91 83800 38244).</p>
          <ul class="check-list">
            <li><b>Master Corporate & Careers Email:</b> <a class="text-link" href="mailto:ceoservice@sehgalautoriders.com">ceoservice@sehgalautoriders.com</a></li>
            <li><b>Central Digital & WhatsApp Business Desk:</b> <a class="text-link" href="tel:8380038244">+91 83800 38244</a> / <a class="text-link" href="https://wa.me/918380038244" target="_blank" rel="noopener">WhatsApp Direct ↗</a></li>
            <li><b>Sales Escalation & Priority Delivery Desk:</b> <a class="text-link" href="tel:7888012800">+91 78880 12800</a></li>
            <li><b>Service & Bodyshop Escalation Desk:</b> <a class="text-link" href="tel:7888060161">+91 78880 60161</a></li>
            <li><b>Bajaj Allianz & MI Insurance Desk:</b> <a class="text-link" href="tel:8888881399">+91 88888 81399</a> (<a class="text-link" href="mailto:insurance@sehgalautoriders.com">insurance@sehgalautoriders.com</a>)</li>
            <li><b>HDFC / SBI Retail & Corporate Finance Desk:</b> <a class="text-link" href="tel:8888881341">+91 88888 81341</a></li>
            <li><b>Hero MotoCorp Two-Wheeler WhatsApp Desk:</b> <a class="text-link" href="tel:9289922306">+91 92899 22306</a></li>
          </ul>
        </div>
        <div class="panel">
          <p class="eyebrow">LEADERSHIP & MEDIA SPOTLIGHT</p>
          <h2>Autocar Dialogues & 27-Year Legacy</h2>
          <p class="muted">Watch MD <b>Nicky Sehgal</b> discuss Pune’s evolving mobility landscape, customer trust and dealership scale, and follow our daily 5-star delivery celebrations across YouTube, Instagram, Facebook and LinkedIn.</p>
          <div class="actions">
            <a class="button teal small" href="https://www.youtube.com/@sehgalautoriders5087" target="_blank" rel="noopener noreferrer">Watch on YouTube ↗</a>
            <a class="button outline small" href="https://www.instagram.com/sehgalautoridersindia/" target="_blank" rel="noopener noreferrer">Follow on Instagram (291+ Posts) ↗</a>
            <a class="button outline small" href="https://www.linkedin.com/company/sehgal-autoriders-pvt-ltd/" target="_blank" rel="noopener noreferrer">Join Us on LinkedIn ↗</a>
          </div>
        </div>
      </div>
    </div></section>`;
}

/* ---------- home: owner essentials strip ---------- */
function essentials() {
  return `<section class="section"><div class="container"><div class="section-heading"><div><p class="eyebrow">EVERYTHING FOR YOUR MARUTI SUZUKI & HERO</p><h2>Buy. Finance. Insure.<br>Service. Stay connected.</h2></div></div><div class="essentials-grid">${[['compare', 'Compare cars', 'Official specs side by side'], ['finance', 'HDFC & Bank Finance', '#1 HDFC retail & wholesale lines'], ['insurance', 'Bajaj Allianz & MI', '43.2% new car share · ₹1 Cr cashless'], ['service', '7 Service Hubs', '2.83L+ visits · Bavdhan to Bhor'], ['spares', 'Genuine Spares', 'MSGP parts, accessories & True Value'], ['safety', '5-Star Safety', 'Bharat NCAP & Global NCAP ratings'], ['digital-presence', 'Online & Social Hub', 'YouTube, Instagram & 8 Portals']].map(([r, h, p]) => `<a href="#/${r}"><b>${h}</b><small>${p}</small><span aria-hidden="true">↗</span></a>`).join('')}</div></div></section>`;
}


/* ---------- W2 Gate-Entry & Reception PDFs + Bilingual Road-Care, Insurance, Hero 2W & EV CSR Hub ---------- */
let activeCareTab = 'english';

function w2GateEntryPdfPackSection() {
  const rc = FACTS.roadCareGuide || {};
  const pdfs = rc.gateEntryPdfs || [];
  if (!pdfs.length) return '';
  return `<div class="panel section w2-pdf-pack">
    <div class="section-heading">
      <div>
        <p class="eyebrow">W2 PORTAL GATE ENTRY & RECEPTION KNOWLEDGE PACK · ENGLISH · मराठी · INSURANCE · EV</p>
        <h2>Official Customer Vehicle & Insurance Guidebooks (PDF Downloads)</h2>
      </div>
      <p class="muted">Automatically sent with every incoming vehicle’s Gate Entry and Workshop Reception welcome mail from <b>sehgalautoriders2011@gmail.com</b> — now available for instant download anytime.</p>
    </div>
    <div class="pdf-pack-grid">
      ${pdfs.map(p => `<article class="tile pdf-card">
        <span class="partner-badge ${p.id === 'insurance-ppt' ? 'gold' : 'teal-badge'}">${esc(p.badge)}</span>
        <h3>${esc(p.title)}</h3>
        <p class="muted">${esc(p.subtitle)}</p>
        <p class="meta"><b>Format:</b> Official PDF · ${esc(p.pages)}</p>
        <div class="actions">
          <a class="button small teal" href="${esc(p.file)}" target="_blank" rel="noopener noreferrer">Open / Download PDF ↗</a>
        </div>
      </article>`).join('')}
    </div>
  </div>`;
}

function renderCareTabContent(tabId) {
  const rc = FACTS.roadCareGuide || {};
  const en = rc.marutiEnglish || {};
  const mr = rc.marutiMarathi || {};
  const ins = rc.insuranceGuide || {};
  const hero = rc.heroTwoWheelerCare || {};
  const ev = rc.evCareGuide || {};

  if (tabId === 'marathi') {
    return `<div class="care-tab-pane">
      <div class="section-heading">
        <div>
          <p class="eyebrow">ग्राहक वाहन मार्गदर्शिका · MARATHI EDITION (W2 GATE & RECEPTION PDF #2)</p>
          <h3>मारुती सुझुकी वाहन काळजी — रोजच्या करावयाच्या गोष्टी व टिप्स</h3>
        </div>
        <div class="actions">
          <a class="button small teal" href="assets/guidebooks/Customer-Vehicle-Guidebook-Marathi.pdf" target="_blank" rel="noopener noreferrer">मराठी PDF डाउनलोड करा (7 Pages) ↗</a>
          <a class="button small outline" href="assets/guidebooks/Customer-Guidebook-Bilingual-Reception.pdf" target="_blank" rel="noopener noreferrer">द्विभाषिक रिसेप्शन PDF (14 Pages) ↗</a>
        </div>
      </div>
      <div class="duo">
        <div class="panel">
          <h4>✅ ${esc(mr.dailyDosTitle || 'रोजच्या करावयाच्या गोष्टी (Daily Do’s)')}</h4>
          <ul class="check-list">${(mr.dailyDos || []).map(x => `<li>${esc(x)}</li>`).join('')}</ul>
        </div>
        <div class="panel">
          <h4>⚠️ ${esc(mr.dailyDontsTitle || 'दैनिक करू नका (Daily Don’ts)')}</h4>
          <ul class="check-list">${(mr.dailyDonts || []).map(x => `<li>${esc(x)}</li>`).join('')}</ul>
        </div>
      </div>
      <div class="panel section-tight">
        <h4>🛠️ ${esc(mr.preventiveTitle || 'प्रतिबंधात्मक देखभाल, इंधन कार्यक्षमता आणि रोड ट्रिप टिप्स')}</h4>
        <ul class="check-list">${(mr.preventivePoints || []).map(x => `<li>${esc(x)}</li>`).join('')}</ul>
      </div>
    </div>`;
  }

  if (tabId === 'insurance') {
    return `<div class="care-tab-pane">
      <div class="section-heading">
        <div>
          <p class="eyebrow">MOTOR INSURANCE DO’S, DON’TS & MYTHS · W2 GATE ENTRY PDF #3</p>
          <h3>Maruti Suzuki Insurance Broking & #1 Bajaj Allianz Cashless Guide</h3>
        </div>
        <div class="actions">
          <a class="button small teal" href="assets/guidebooks/Sehgal-Maruti-Insurance-Guide-PPT.pdf" target="_blank" rel="noopener noreferrer">Download 22-Slide Insurance PPT (PDF) ↗</a>
          <a class="button small outline" href="tel:7888039845">Call Manish Takwale (+91 78880 39845) ↗</a>
          <a class="button small outline" href="tel:8888881399">Call Sarika Tupere (+91 88888 81399) ↗</a>
        </div>
      </div>
      <div class="duo">
        <div class="panel">
          <h4>✅ Motor Insurance Do’s (To Keep Claims 100% Valid)</h4>
          <ul class="check-list">${(ins.dos || []).map(x => `<li>${esc(x)}</li>`).join('')}</ul>
        </div>
        <div class="panel">
          <h4>⚠️ Motor Insurance Don’ts (Avoid Claim Rejection)</h4>
          <ul class="check-list">${(ins.donts || []).map(x => `<li>${esc(x)}</li>`).join('')}</ul>
        </div>
      </div>
      <div class="section-tight">
        <h4>6 Common Motor Insurance Myths vs Facts (From Our Gate-Entry Insurance PPT)</h4>
        <div class="tiles three">
          ${(ins.mythsVsFacts || []).map(m => `<article class="tile">
            <p class="eyebrow">MYTH VS FACT</p>
            <h4>${esc(m.myth)}</h4>
            <p class="muted">${esc(m.fact)}</p>
          </article>`).join('')}
        </div>
      </div>
      <div class="panel section-tight">
        <h4>5 Easy Steps for Near-Cashless Claim Settlement at Sehgal Bodyshops</h4>
        <ol class="check-list numbered">${(ins.claimSteps || []).map(x => `<li>${esc(x)}</li>`).join('')}</ol>
      </div>
    </div>`;
  }

  if (tabId === 'hero2w') {
    return `<div class="care-tab-pane">
      <div class="section-heading">
        <div>
          <p class="eyebrow">CORPORATE SOCIAL RESPONSIBILITY · TWO-WHEELER & SCOOTER SAFETY</p>
          <h3>${esc(hero.headline || 'Hero MotoCorp Two-Wheeler & Scooter Road-Care Guide')}</h3>
          <p class="muted">${esc(hero.subtitle || '')}</p>
        </div>
        <div class="actions">
          <a class="button small teal" href="#/two-wheelers">Explore 4 Sehgal Hero Dealerships ↗</a>
          <a class="button small outline" href="tel:9011601819">Call Hero Service (+91 90116 01819) ↗</a>
        </div>
      </div>
      <div class="duo">
        <div class="panel">
          <h4>🏍️ Motorcycle Care & Safety Do’s & Don’ts (Splendor+, HF Deluxe, Glamour, Xtreme, Mavrick)</h4>
          <ul class="check-list">${(hero.motorcycleDosDonts || []).map(x => `<li>${esc(x)}</li>`).join('')}</ul>
        </div>
        <div class="panel">
          <h4>🛵 Scooter Care & CVT Protection (Destini 125, Pleasure+ XTEC, Xoom)</h4>
          <ul class="check-list">${(hero.scooterDosDonts || []).map(x => `<li>${esc(x)}</li>`).join('')}</ul>
        </div>
      </div>
    </div>`;
  }

  if (tabId === 'ev') {
    return `<div class="care-tab-pane">
      <div class="section-heading">
        <div>
          <p class="eyebrow">ELECTRIC MOBILITY CARE · MARUTI e VITARA & HERO VIDA V1</p>
          <h3>${esc(ev.headline || 'Electric Vehicle (EV) Care, Driving & Charging Guide')}</h3>
          <p class="muted">${esc(ev.subtitle || '')}</p>
        </div>
        <div class="actions">
          <a class="button small teal" href="assets/guidebooks/Suggested-Driving-and-EV-Charging-Tips.pdf" target="_blank" rel="noopener noreferrer">Download Official EV & Driving Tips PDF (13B) ↗</a>
          <a class="button small outline" href="#/electric">Visit Sehgal Electric Centre ↗</a>
        </div>
      </div>
      <div class="duo">
        <div class="panel">
          <h4>⚡ EV Charging & Driving Do’s (Best Battery Life & Range)</h4>
          <ul class="check-list">${(ev.chargingDos || []).map(x => `<li>${esc(x)}</li>`).join('')}</ul>
        </div>
        <div class="panel">
          <h4>⚠️ EV High-Voltage, Fast-Charging & Monsoon Don’ts</h4>
          <ul class="check-list">${(ev.chargingAndSafetyDonts || []).map(x => `<li>${esc(x)}</li>`).join('')}</ul>
        </div>
      </div>
    </div>`;
  }

  // Default: 'english'
  return `<div class="care-tab-pane">
    <div class="section-heading">
      <div>
        <p class="eyebrow">CUSTOMER VEHICLE GUIDEBOOK · ENGLISH EDITION (W2 GATE & RECEPTION PDF #1)</p>
        <h3>Maruti Suzuki On-Road Care: Daily Do’s & Don’ts, Overheating FAQs & Fuel Saving</h3>
      </div>
      <div class="actions">
        <a class="button small teal" href="assets/guidebooks/Customer-Vehicle-Guidebook-English.pdf" target="_blank" rel="noopener noreferrer">Download English PDF (7 Pages) ↗</a>
        <a class="button small outline" href="assets/guidebooks/Customer-Guidebook-Bilingual-Reception.pdf" target="_blank" rel="noopener noreferrer">Bilingual Reception PDF (14 Pages) ↗</a>
      </div>
    </div>
    <div class="duo">
      <div class="panel">
        <h4>✅ Daily Do’s (Walk-Around Before Starting Your Car)</h4>
        <ul class="check-list">${(en.dailyDos || []).map(x => `<li>${esc(x)}</li>`).join('')}</ul>
      </div>
      <div class="panel">
        <h4>⚠️ Daily Don’ts (Protect Your Engine & Warranty)</h4>
        <ul class="check-list">${(en.dailyDonts || []).map(x => `<li>${esc(x)}</li>`).join('')}</ul>
      </div>
    </div>
    <div class="section-tight">
      <h4>Emergency On-Road FAQs (Overheating, Battery, Exhaust & Wheel Balancing)</h4>
      <div class="tiles two">
        ${(en.emergencyFaqs || []).map(f => `<article class="tile">
          <h4>${esc(f.q)}</h4>
          <p class="muted">${esc(f.a)}</p>
        </article>`).join('')}
      </div>
    </div>
    <div class="panel section-tight">
      <h4>⛽ Preventive Maintenance, Pre-Summer AC Care (Feb–March), Fuel Efficiency & Ghat/Fog Tips</h4>
      <ul class="check-list">${(en.preventiveAndFuel || []).map(x => `<li>${esc(x)}</li>`).join('')}</ul>
    </div>
  </div>`;
}

function roadCareInteractiveHub(initialTab) {
  if (initialTab) activeCareTab = initialTab;
  const tabs = [
    ['english', '1. Maruti Car Guide (English)'],
    ['marathi', '2. मारुती कार मार्गदर्शिका (मराठी)'],
    ['insurance', '3. Insurance Do’s, Don’ts & Myths'],
    ['hero2w', '4. Hero 2W & Scooter Care'],
    ['ev', '5. Electric Vehicle (e VITARA & VIDA) Care']
  ];
  return `<section class="section" id="road-care-explorer">
    <div class="container">
      <div class="section-heading">
        <div>
          <p class="eyebrow">SEHGAL CORPORATE RESPONSIBILITY & CUSTOMER ROAD-CARE INITIATIVE</p>
          <h2>Interactive Vehicle Care, Insurance & Road-Safety Handbook.</h2>
        </div>
        <p class="muted">Switch between our English, मराठी, Motor Insurance, Hero Two-Wheeler/Scooter, and Electric Vehicle (EV) care guides below.</p>
      </div>
      <div class="chips care-tabs" role="tablist" aria-label="Vehicle Care Guides">
        ${tabs.map(([id, label]) => `<button type="button" class="chip ${activeCareTab === id ? 'active' : ''}" data-care-tab="${id}" aria-pressed="${activeCareTab === id}">${label}</button>`).join('')}
      </div>
      <div id="care-tab-output" class="care-tab-container">${renderCareTabContent(activeCareTab)}</div>
    </div>
  </section>`;
}

function workshopNamedEscalationPanel() {
  const rc = FACTS.roadCareGuide || {};
  const matrix = rc.workshopEscalationMatrix || [];
  const feedbackUrl = rc.w2MailInfo?.feedbackFormUrl || 'https://forms.gle/TXwLzt3U5G2y5E659';
  if (!matrix.length) return '';
  return `<div class="panel section">
    <div class="section-heading">
      <div>
        <p class="eyebrow">VERIFIED W2 GATE ENTRY & RECEPTION ESCALATION MATRIX</p>
        <h2>Direct Workshop Leadership & Insurance Renewal Contacts</h2>
      </div>
      <a class="button small outline" href="${esc(feedbackUrl)}" target="_blank" rel="noopener noreferrer">Submit Workshop Feedback Form ↗</a>
    </div>
    <div class="tiles three">
      ${matrix.map(m => `<article class="tile">
        <p class="eyebrow">${esc(m.level)}</p>
        <h3>${esc(m.name)}</h3>
        <p><a class="text-link" href="tel:${esc(m.phone)}">Call: +91 ${esc(m.phone)}</a>${m.altPhone ? ` · <a class="text-link" href="tel:${esc(m.altPhone)}">+91 ${esc(m.altPhone)}</a>` : ''}</p>
        <p class="meta"><a class="text-link" href="mailto:${esc(m.email)}">${esc(m.email)}</a></p>
      </article>`).join('')}
    </div>
  </div>`;
}

function heroRoadCareSection() {
  const hero = (FACTS.roadCareGuide || {}).heroTwoWheelerCare || {};
  const ev = (FACTS.roadCareGuide || {}).evCareGuide || {};
  return `<div class="section">
    <div class="section-heading">
      <div>
        <p class="eyebrow">SEHGAL CORPORATE RESPONSIBILITY · SAFER PUNE & MAVAL ROADS</p>
        <h2>Hero Motorcycle, Scooter & VIDA EV Care (Do’s & Don’ts)</h2>
      </div>
      <a class="button small outline" href="#/csr">View All Customer Guidebooks (English & मराठी) ↗</a>
    </div>
    <div class="tiles three">
      <article class="tile">
        <span class="partner-badge teal-badge">MOTORCYCLE CARE</span>
        <h3>Splendor+, HF Deluxe, Glamour, Xtreme & Mavrick</h3>
        <ul class="check-list">${(hero.motorcycleDosDonts || []).map(x => `<li>${esc(x)}</li>`).join('')}</ul>
      </article>
      <article class="tile">
        <span class="partner-badge gold">SCOOTER & CVT CARE</span>
        <h3>Destini 125, Pleasure+ XTEC & Xoom</h3>
        <ul class="check-list">${(hero.scooterDosDonts || []).map(x => `<li>${esc(x)}</li>`).join('')}</ul>
      </article>
      <article class="tile">
        <span class="partner-badge teal-badge">VIDA V1 ELECTRIC SCOOTER</span>
        <h3>EV Charging & Battery Safety</h3>
        <ul class="check-list">${(ev.chargingDos || []).slice(0, 2).concat((ev.chargingAndSafetyDonts || []).slice(0, 3)).map(x => `<li>${esc(x)}</li>`).join('')}</ul>
        <a class="text-link" href="assets/guidebooks/Suggested-Driving-and-EV-Charging-Tips.pdf" target="_blank" rel="noopener noreferrer">Download EV Driving & Charging Tips PDF ↗</a>
      </article>
    </div>
  </div>`;
}

function evRoadCareSection() {
  const ev = (FACTS.roadCareGuide || {}).evCareGuide || {};
  return `<div class="section">
    <div class="section-heading">
      <div>
        <p class="eyebrow">OFFICIAL MARUTI SUZUKI SERVICE GUIDE (13B) & SEHGAL EV CARE</p>
        <h2>${esc(ev.headline || 'Electric Vehicle (e VITARA & VIDA) Driving & Charging Do’s & Don’ts')}</h2>
      </div>
      <a class="button small teal" href="assets/guidebooks/Suggested-Driving-and-EV-Charging-Tips.pdf" target="_blank" rel="noopener noreferrer">Download Official EV & Driving Tips PDF (13B) ↗</a>
    </div>
    <div class="duo">
      <div class="panel">
        <h3>⚡ EV Driving, Regenerative Braking & Charging Do’s</h3>
        <ul class="check-list">${(ev.chargingDos || []).map(x => `<li>${esc(x)}</li>`).join('')}</ul>
      </div>
      <div class="panel">
        <h3>⚠️ EV Battery, Fast-Charging & High-Voltage Don’ts</h3>
        <ul class="check-list">${(ev.chargingAndSafetyDonts || []).map(x => `<li>${esc(x)}</li>`).join('')}</ul>
      </div>
    </div>
  </div>`;
}

function roadCarePage() {
  return page('Customer Vehicle Guidebooks & Road-Safety Responsibility', 'Official English, मराठी & Motor Insurance Guidebooks sent on every W2 Gate Entry & Reception Entry — plus Hero Two-Wheeler, Scooter & Electric Vehicle (e VITARA & VIDA) Care.', 'ROAD CARE · ENGLISH · मराठी · INSURANCE · 2W · EV') +
    `<section class="page-content"><div class="container">${w2GateEntryPdfPackSection()}</div></section>` +
    roadCareInteractiveHub(activeCareTab) +
    `<section class="page-content"><div class="container">${workshopNamedEscalationPanel()}</div></section>`;
}

document.addEventListener('click', e => {
  const btn = e.target.closest('[data-care-tab]');
  if (!btn) return;
  activeCareTab = btn.dataset.careTab;
  document.querySelectorAll('[data-care-tab]').forEach(b => {
    const active = b.dataset.careTab === activeCareTab;
    b.classList.toggle('active', active);
    b.setAttribute('aria-pressed', String(active));
  });
  const out = document.querySelector('#care-tab-output');
  if (out) out.innerHTML = renderCareTabContent(activeCareTab);
});

const EXTRA_ROUTES = {compare: comparePage, insurance: insurancePage, spares: sparesPage, safety: safetyPage, csr: csrPage, 'road-care': roadCarePage, guidebooks: roadCarePage, 'digital-presence': digitalPresencePage, digital: digitalPresencePage};
document.addEventListener('input', e => { if (e.target.closest('#finance-form')) updateLenders(); if (e.target.closest('#ncb-form')) updateNcb(); });
document.addEventListener('change', e => { if (e.target.closest('#finance-form')) updateLenders(); if (e.target.closest('#ncb-form')) updateNcb(); });
const AFTER_RENDER = [updateLenders, updateNcb];
