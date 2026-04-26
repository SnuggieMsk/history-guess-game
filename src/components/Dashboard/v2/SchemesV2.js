import React from 'react';
import { centralSchemesV2, stateSchemesV2, captureTable, applicationTimeline, namedConsultants, gstRefundModel, largeEntrantsV2, entrantSummaryStats } from '../../../data/v2Schemes';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import SortableTable from '../SortableTable';

export default function SchemesV2() {
  const captureChartData = captureTable.map(r => {
    const [lo, hi] = r.amountINRcr.includes('-')
      ? r.amountINRcr.split('-').map(parseFloat)
      : [parseFloat(r.amountINRcr), parseFloat(r.amountINRcr)];
    return { scheme: r.scheme.slice(0, 28), mid: (lo + hi) / 2, risk: r.risk };
  });

  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">V2 · Subsidy Capture Mechanics</div>
        <h1 className="sec-title">How to Actually Get the Money</h1>
        <p className="sec-sub">
          Every scheme with real application mechanics, realistic disbursal timing,
          what it pays for, what it doesn't, and the traps. Revised capture: ₹12-15 cr
          over 7 years — not v1's naive ₹5.2 cr in Y1.
        </p>
      </div>

      <div className="card">
        <h3>Capture by scheme (₹ cr mid-range)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={captureChartData} layout="vertical" margin={{ top: 5, right: 15, left: 10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8" />
            <XAxis type="number" stroke="#5c6272" fontSize={11} />
            <YAxis type="category" dataKey="scheme" stroke="#5c6272" fontSize={10} width={180} />
            <Tooltip contentStyle={{ background: '#ffffff', border: '1px solid #e0d9c8', color: '#1a1f36' }}
              formatter={(v, n, p) => [`₹${v} cr · ${p.payload.risk} risk`, 'Capture']} />
            <Bar dataKey="mid" name="₹ cr" fill="#c5a565" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="section-block">
        <h2>Central schemes</h2>
        {centralSchemesV2.map(s => (
          <div key={s.id} className="card" style={{ marginBottom: 16, borderLeft: '4px solid var(--c-accent)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 10, flexWrap: 'wrap' }}>
              <div>
                <h3 style={{ fontFamily: 'Georgia,serif', fontSize: 17, color: 'var(--c-text)', fontWeight: 600 }}>{s.name}</h3>
                <div style={{ fontSize: 11, color: 'var(--c-text-dim)', marginTop: 2 }}>{s.ministry} · {s.mode}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: 'Georgia,serif', fontSize: 22, fontWeight: 600, color: 'var(--c-good)' }}>{s.ourCapture}</div>
                <div style={{ fontSize: 11, color: 'var(--c-text-dim)' }}>{s.tranches} tranches · {s.disbursalTiming}</div>
              </div>
            </div>
            <div className="grid grid-2" style={{ marginBottom: 12 }}>
              <div>
                <strong style={{ fontSize: 11, color: 'var(--c-good)', textTransform: 'uppercase', letterSpacing: 1 }}>Pays for</strong>
                <ul className="bullets" style={{ marginTop: 4, fontSize: 12.5 }}>
                  {s.whatPays.map((w, i) => <li key={i}>{w}</li>)}
                </ul>
              </div>
              <div>
                <strong style={{ fontSize: 11, color: 'var(--c-bad)', textTransform: 'uppercase', letterSpacing: 1 }}>Does NOT pay</strong>
                <ul className="bullets" style={{ marginTop: 4, fontSize: 12.5 }}>
                  {s.whatDoesnt.map((w, i) => <li key={i}>{w}</li>)}
                </ul>
              </div>
            </div>
            <div style={{ marginBottom: 10 }}>
              <strong style={{ fontSize: 11, color: 'var(--c-accent)', textTransform: 'uppercase', letterSpacing: 1 }}>Application steps</strong>
              <ol style={{ marginTop: 4, paddingLeft: 20, fontSize: 12.5 }}>
                {s.applicationSteps.map((a, i) => <li key={i} style={{ margin: '4px 0' }}>{a}</li>)}
              </ol>
            </div>
            {s.traps && s.traps.length > 0 && (
              <div className="callout" style={{ borderLeftColor: 'var(--c-bad)', background: '#f8ebe8' }}>
                <strong>Traps: </strong>{s.traps.join(' · ')}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="section-block">
        <h2>Maharashtra state schemes — with portal links</h2>
        {stateSchemesV2.map(s => (
          <div key={s.id} className="card" style={{ marginBottom: 12, borderLeft: '3px solid var(--c-accent-2)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, marginBottom: 8, flexWrap: 'wrap' }}>
              <h3 style={{ fontFamily: 'Georgia,serif', fontSize: 15, color: 'var(--c-text)', fontWeight: 600 }}>{s.name}</h3>
              <span className="pill pill-good">{s.ourCapture}</span>
            </div>
            <ul className="bullets" style={{ fontSize: 12.5 }}>{s.benefits.map((b, i) => <li key={i}>{b}</li>)}</ul>
            <div style={{ marginTop: 10, fontSize: 12, color: 'var(--c-text-dim)' }}>
              <strong>Apply via:</strong> {s.applicationPath} · <strong>Timeline:</strong> {s.timeline}
            </div>
            {(s.portal || s.govLink) && (
              <div style={{ marginTop: 8, fontSize: 12, display:'flex', flexWrap:'wrap', gap: 14 }}>
                {s.portal && (
                  <span><strong style={{color:'var(--c-accent)'}}>Portal:</strong>{' '}
                    <a href={s.portal} target="_blank" rel="noopener noreferrer" style={{color:'var(--c-accent)', textDecoration:'underline'}}>{s.portal.replace(/^https?:\/\//,'')}</a>
                  </span>
                )}
                {s.govLink && s.govLink !== s.portal && (
                  <span><strong style={{color:'var(--c-accent)'}}>Dept site:</strong>{' '}
                    <a href={s.govLink} target="_blank" rel="noopener noreferrer" style={{color:'var(--c-accent)', textDecoration:'underline'}}>{s.govLink.replace(/^https?:\/\//,'')}</a>
                  </span>
                )}
              </div>
            )}
            {s.referenceGR && (
              <div style={{ marginTop: 6, fontSize: 11, color: 'var(--c-text-faint)', fontStyle:'italic' }}>
                Reference: {s.referenceGR}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="section-block">
        <h2>GST refund mechanics — exporter cash flow</h2>
        <div className="card" style={{marginBottom:14}}>
          <p style={{fontSize:13.5, color:'var(--c-text)', lineHeight:1.6, marginBottom:14}}>
            Under <strong>§16 IGST Act</strong>, exports are zero-rated. We file under
            <strong> Letter of Undertaking (LUT)</strong> — no IGST on outbound — and reclaim
            accumulated <strong>Input Tax Credit (ITC)</strong> monthly via <strong>RFD-01A</strong>.
            Below is the worked refund per ₹100 cr of export revenue at our blended {gstRefundModel.assumption.blendedInputGSTpct}% input GST rate.
          </p>
          <SortableTable
            columns={[
              { key:'item', label:'Line item', render:(v) => <strong>{v}</strong> },
              { key:'valueINRcr', label:'₹ cr', numeric:true, format:(v) => v == null ? '—' : `₹${v.toFixed(2)} cr` },
              { key:'note', label:'Note', style:{fontSize:12} },
            ]}
            rows={gstRefundModel.worked}
            defaultSort="item"
          />
        </div>

        <div className="card" style={{marginBottom:14}}>
          <h3>5-year refund + working-capital float</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={Object.entries(gstRefundModel.refundByYear).map(([yr, d]) => ({
              year: yr, ExportRev: d.exportRevINRcr, RefundClaim: d.refundClaimINRcr, BlockedWC: d.blockedWCINRcr
            }))} margin={{top:5,right:10,left:0,bottom:0}}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8"/>
              <XAxis dataKey="year" stroke="#5c6272" fontSize={11}/>
              <YAxis stroke="#5c6272" fontSize={11}/>
              <Tooltip contentStyle={{background:'#ffffff',border:'1px solid #e0d9c8',color:'#1a1f36'}}
                formatter={(v) => `₹${v} cr`}/>
              <Legend wrapperStyle={{fontSize:11}}/>
              <Bar dataKey="ExportRev" fill="#cdc4ae" name="Export rev"/>
              <Bar dataKey="RefundClaim" fill="#2d6a4f" name="Refund claim"/>
              <Bar dataKey="BlockedWC" fill="#a8322d" name="Blocked WC (3-mo float)"/>
            </BarChart>
          </ResponsiveContainer>
          <div style={{marginTop:10, fontSize:12.5, color:'var(--c-text-dim)'}}>
            Cumulative 5-yr refund: <strong style={{color:'var(--c-good)'}}>₹{gstRefundModel.totalRefundFiveYearINRcr} cr</strong>.{' '}
            Steady-state Y5 WC blocked: <strong style={{color:'var(--c-bad)'}}>₹{gstRefundModel.netWCBlockedINRcr} cr</strong>{' '}
            (3-month refund float). AEO-T1 cuts this to ~₹0.7 cr.
          </div>
        </div>

        <div className="card">
          <h3>GST refund risks + mitigations</h3>
          <SortableTable
            columns={[
              { key:'risk', label:'Risk', style:{fontSize:12.5, color:'var(--c-bad)'} },
              { key:'impact', label:'Impact', style:{fontSize:12} },
              { key:'mitigation', label:'Mitigation', style:{fontSize:12, color:'var(--c-good)'} },
            ]}
            rows={gstRefundModel.risks}
          />
        </div>
      </div>

      <div className="section-block">
        <h2>Large new entrants — Adani / Reliance / ITC / Tata / FDI</h2>
        <div className="kpi-grid" style={{marginBottom:14}}>
          <div className="card"><h3>Named entrants</h3><div className="big">{entrantSummaryStats.totalNamedEntrants}</div></div>
          <div className="card"><h3>Active now</h3><div className="big" style={{color:'var(--c-bad)'}}>{entrantSummaryStats.activeNow}</div></div>
          <div className="card"><h3>Watching</h3><div className="big" style={{color:'var(--c-warn)'}}>{entrantSummaryStats.watching}</div></div>
          <div className="card"><h3>High threat</h3><div className="big" style={{color:'var(--c-bad)'}}>{entrantSummaryStats.highThreat}</div></div>
        </div>

        {largeEntrantsV2.map(e => (
          <div key={e.id} className="card" style={{marginBottom:14, borderLeft:'4px solid var(--c-bad)'}}>
            <div style={{display:'flex',justifyContent:'space-between',gap:10,flexWrap:'wrap',marginBottom:10}}>
              <div>
                <h3 style={{fontFamily:'Georgia,serif',fontSize:17,fontWeight:600,color:'var(--c-text)'}}>{e.entrant}</h3>
                <div style={{fontSize:11, color:'var(--c-text-dim)', marginTop:2, textTransform:'uppercase', letterSpacing:1}}>
                  {e.status} · Time-to-impact: {e.timeToImpact}
                </div>
              </div>
              <span className={`pill ${e.threatLevel.toLowerCase().includes('high') ? 'pill-bad' : e.threatLevel.toLowerCase().includes('medium') ? 'pill-warn' : 'pill-good'}`}>
                Threat: {e.threatLevel}
              </span>
            </div>

            <div style={{marginBottom:10}}>
              <strong style={{fontSize:11, color:'var(--c-accent)', textTransform:'uppercase', letterSpacing:1}}>Their moves</strong>
              <ul className="bullets" style={{marginTop:4, fontSize:12.5}}>{e.moves.map((m,i) => <li key={i}>{m}</li>)}</ul>
            </div>

            <div className="grid grid-2" style={{marginBottom:10}}>
              <div>
                <strong style={{fontSize:11, color:'var(--c-bad)', textTransform:'uppercase', letterSpacing:1}}>What changes for us</strong>
                <ul className="bullets" style={{marginTop:4, fontSize:12.5}}>{e.whatChangesForUs.map((w,i) => <li key={i}>{w}</li>)}</ul>
              </div>
              <div>
                <strong style={{fontSize:11, color:'var(--c-good)', textTransform:'uppercase', letterSpacing:1}}>Our counter</strong>
                <ul className="bullets" style={{marginTop:4, fontSize:12.5}}>{e.ourCounter.map((c,i) => <li key={i}>{c}</li>)}</ul>
              </div>
            </div>

            {e.sourceLinks && e.sourceLinks.length > 0 && (
              <div style={{fontSize:11, color:'var(--c-text-faint)', borderTop:'1px solid var(--c-border)', paddingTop:8}}>
                <strong>Sources: </strong>
                {e.sourceLinks.map((s, i) => (
                  <span key={i}>
                    {s.startsWith('http') ? (
                      <a href={s} target="_blank" rel="noopener noreferrer" style={{color:'var(--c-accent)', textDecoration:'underline'}}>{s.replace(/^https?:\/\//,'')}</a>
                    ) : (
                      <span style={{fontStyle:'italic'}}>{s}</span>
                    )}
                    {i < e.sourceLinks.length - 1 ? ' · ' : ''}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}

        <div className="callout">
          <strong>Posture: </strong>{entrantSummaryStats.ourPostureWord}
        </div>
      </div>

      <div className="section-block">
        <h2>Application timeline</h2>
        <div className="card">
          <table className="tbl">
            <thead><tr><th>Month</th><th>Action</th></tr></thead>
            <tbody>
              {applicationTimeline.map((t, i) => (
                <tr key={i}>
                  <td><strong style={{ color: 'var(--c-accent)' }}>{t.month >= 0 ? `M+${t.month}` : `M${t.month}`}</strong></td>
                  <td style={{ fontSize: 13 }}>{t.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="section-block">
        <h2>Named DPR consultants</h2>
        <div className="grid grid-2">
          {namedConsultants.map((c, i) => (
            <div key={i} className="card">
              <h3 style={{ fontFamily: 'Georgia,serif', fontSize: 15, fontWeight: 600 }}>{c.firm}</h3>
              <p style={{ fontSize: 12, color: 'var(--c-text-dim)', marginTop: 4 }}>{c.location}</p>
              <p style={{ fontSize: 12, color: 'var(--c-accent)', marginTop: 6 }}>{c.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
