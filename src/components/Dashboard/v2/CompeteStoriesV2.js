import React, { useState } from 'react';
import { competitorStories, competitorRollup } from '../../../data/v2CompeteStories';
import { competitorFinancials, industryAverages, peerComparisonMatrix, competitorRevenueByMarket } from '../../../data/v2CompeteFinancials';
import { competitorMAevents, founderTimelines, competitorAdvisorsAndAuditors, competitorPotentialMA } from '../../../data/v2CompeteMA';
import IndiaCompetitorMap from '../IndiaCompetitorMap';
import Disclaimer from './Disclaimer';
import {
  ResponsiveContainer, BarChart, Bar, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
} from 'recharts';

// Composite competitor scores 0-10 across 6 dimensions
const competitorRadarData = [
  { dimension: 'Scale',          Avanti:10, Apex:6, Devi:5, Gadre:3, Coastal:3, Us:1 },
  { dimension: 'Margin %',       Avanti:5, Apex:4, Devi:5, Gadre:6, Coastal:3, Us:9 },
  { dimension: 'Low Debt',       Avanti:9, Apex:2, Devi:6, Gadre:5, Coastal:3, Us:4 },
  { dimension: 'Geo Diverse',    Avanti:3, Apex:4, Devi:8, Gadre:7, Coastal:6, Us:7 },
  { dimension: 'Brand',          Avanti:7, Apex:5, Devi:5, Gadre:8, Coastal:4, Us:2 },
  { dimension: 'Compliance',     Avanti:8, Apex:6, Devi:9, Gadre:7, Coastal:5, Us:9 },
];

const COLORS = ['#0d3b66','#a8322d','#c5a565','#2d6a4f','#7a5b8c','#b8860b','#5fb3e3','#92c7b6','#cdc4ae'];

const TABS = [
  { id: 'overview',  label: 'Overview + India Map' },
  { id: 'stories',   label: 'Founder Stories' },
  { id: 'financials',label: 'Financial Trends' },
  { id: 'ma',        label: 'M&A Timeline' },
  { id: 'matrix',    label: 'Peer Comparison' },
  { id: 'markets',   label: 'Market Mix' },
  { id: 'targets',   label: 'M&A Targets' },
];

export default function CompeteStoriesV2() {
  const [tab, setTab] = useState('overview');
  const [story, setStory] = useState(competitorStories[0].id);

  // Build trend data for charts
  const buildTrend = (key) => {
    const years = ['FY20','FY21','FY22','FY23','FY24'];
    return years.map(yr => {
      const row = { year: yr };
      Object.entries(competitorFinancials).forEach(([id, fin]) => {
        row[id] = fin[key] && fin[key][yr] !== undefined ? fin[key][yr] : null;
      });
      return row;
    });
  };

  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">V2 · Competitor Forensics — Deep Stories</div>
        <h1 className="sec-title">Every Competitor's Founder, History, and Bleeding Edge</h1>
        <p className="sec-sub">
          {competitorStories.length} competitors deep-profiled with founder narrative, M&A history,
          5-year financial trends, plant locations on India map, market mix, and M&A target list.
          Combined competitor revenue ₹{competitorRollup.totalRevenueINRcr.toLocaleString('en-IN')} cr.
          Our Y5 target {competitorRollup.ourTargetShareOfTotal} of total — niches we play are unattended.
        </p>
      </div>

      <div className="kpi-grid">
        <div className="card"><h3>Competitors mapped</h3><div className="big">{competitorStories.length}</div></div>
        <div className="card"><h3>Combined revenue</h3><div className="big">₹{competitorRollup.totalRevenueINRcr.toLocaleString('en-IN')} cr</div><div className="sub">FY24</div></div>
        <div className="card"><h3>Plants mapped</h3><div className="big">29</div><div className="sub">across 9 states</div></div>
        <div className="card"><h3>Industry avg EBITDA</h3><div className="big">{industryAverages.industryAverage}%</div><div className="sub">↓3.2 ppt over 4 yrs</div></div>
      </div>

      <div style={{ display: 'flex', gap: 8, marginTop: 24, marginBottom: 20, flexWrap: 'wrap' }}>
        {TABS.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)}
            style={{
              padding: '8px 14px', border: '1px solid var(--c-border)', borderRadius: 4,
              cursor: 'pointer', fontSize: 12, fontWeight: 500,
              background: tab === t.id ? 'var(--c-accent)' : 'var(--c-surface)',
              color: tab === t.id ? '#fff' : 'var(--c-text)',
            }}>{t.label}</button>
        ))}
      </div>

      {tab === 'overview' && (
        <>
          <div className="card">
            <IndiaCompetitorMap />
          </div>
          <div className="callout" style={{ marginTop: 14 }}>
            <strong>Geographic insight:</strong> 80% of Indian seafood processing capacity is concentrated in Andhra Pradesh (Visakhapatnam → Kakinada → Bhimavaram corridor). Maharashtra hosts only Gadre (Ratnagiri), Coastal Corp (Mumbai), and IFB Agro (Vasai) at scale. Our Purandar plant is the first modern Maharashtra greenfield in 20+ years.
          </div>
          <div className="card" style={{marginTop:14}}>
            <h3>Competitive radar — composite scores 0-10 across 6 dimensions</h3>
            <ResponsiveContainer width="100%" height={380}>
              <RadarChart data={competitorRadarData}>
                <PolarGrid stroke="#e0d9c8"/>
                <PolarAngleAxis dataKey="dimension" stroke="#5c6272" fontSize={11}/>
                <PolarRadiusAxis stroke="#cdc4ae" angle={90} domain={[0, 10]}/>
                <Radar name="Avanti" dataKey="Avanti" stroke="#0d3b66" fill="#0d3b66" fillOpacity={0.15} />
                <Radar name="Apex"   dataKey="Apex"   stroke="#a8322d" fill="#a8322d" fillOpacity={0.15} />
                <Radar name="Devi"   dataKey="Devi"   stroke="#c5a565" fill="#c5a565" fillOpacity={0.15} />
                <Radar name="Gadre"  dataKey="Gadre"  stroke="#7a5b8c" fill="#7a5b8c" fillOpacity={0.15} />
                <Radar name="Coastal" dataKey="Coastal" stroke="#b8860b" fill="#b8860b" fillOpacity={0.10} />
                <Radar name="Us (Y5)" dataKey="Us"   stroke="#2d6a4f" fill="#2d6a4f" fillOpacity={0.30} />
                <Tooltip contentStyle={{background:'#ffffff',border:'1px solid #e0d9c8',color:'#1a1f36'}}/>
                <Legend wrapperStyle={{fontSize:11}}/>
              </RadarChart>
            </ResponsiveContainer>
            <p style={{fontSize:11.5, color:'var(--c-text-dim)', marginTop:8}}>
              Composite scores (illustrative; not third-party-verified). Us scores high on margin/compliance but low on scale/brand —
              the pattern of a focused premium niche player vs incumbent generalists.
            </p>
          </div>
        </>
      )}

      {tab === 'stories' && (
        <>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 16 }}>
            {competitorStories.map(s => (
              <button key={s.id} onClick={() => setStory(s.id)} style={{
                padding: '6px 12px', border: '1px solid var(--c-border)', borderRadius: 999,
                cursor: 'pointer', fontSize: 11, fontWeight: 600,
                background: story === s.id ? 'var(--c-accent)' : 'var(--c-surface)',
                color: story === s.id ? '#fff' : 'var(--c-text)',
              }}>{s.name.split(' ')[0]}</button>
            ))}
          </div>
          {(() => {
            const s = competitorStories.find(c => c.id === story);
            if (!s) return null;
            return (
              <div className="card" style={{ borderLeft: '4px solid var(--c-accent)' }}>
                <h3 style={{ fontFamily: 'Georgia,serif', fontSize: 22, color: 'var(--c-text)', fontWeight: 600 }}>{s.name}</h3>
                <div className="grid grid-3" style={{ marginTop: 8, fontSize: 12.5, marginBottom: 16 }}>
                  <div><strong>Founder:</strong> {s.founder}</div>
                  <div><strong>Current leader:</strong> {s.currentLeader}</div>
                  <div><strong>Listed:</strong> {s.listed}</div>
                  <div><strong>Revenue FY24:</strong> ₹{s.revenueFY24INRcr} cr</div>
                  <div><strong>Incorporated:</strong> {s.incorporated}</div>
                </div>

                <div style={{ marginBottom: 16 }}>
                  <strong style={{ fontSize: 11, color: 'var(--c-accent)', textTransform: 'uppercase', letterSpacing: 1 }}>Company history</strong>
                  <ol style={{ paddingLeft: 22, marginTop: 6, fontSize: 12.5 }}>
                    {s.history.map((h, i) => <li key={i} style={{ margin: '4px 0' }}>{h}</li>)}
                  </ol>
                </div>

                <div className="grid grid-2" style={{ marginBottom: 16 }}>
                  <div>
                    <strong style={{ fontSize: 11, color: 'var(--c-good)', textTransform: 'uppercase', letterSpacing: 1 }}>Current supply chain</strong>
                    <ul className="bullets" style={{ marginTop: 6, fontSize: 12.5 }}>
                      {s.currentSupplyChain.map((c, i) => <li key={i}>{c}</li>)}
                    </ul>
                  </div>
                  <div>
                    <strong style={{ fontSize: 11, color: 'var(--c-bad)', textTransform: 'uppercase', letterSpacing: 1 }}>Weaknesses</strong>
                    <ul className="bullets" style={{ marginTop: 6, fontSize: 12.5 }}>
                      {s.weaknesses.map((w, i) => <li key={i}>{w}</li>)}
                    </ul>
                  </div>
                </div>

                <div className="callout" style={{ background: '#faf5e5' }}>
                  <strong>Relevance to us: </strong>{s.relevanceToUs}
                </div>

                <div style={{ marginTop: 12 }}>
                  <strong style={{ fontSize: 11, color: 'var(--c-text-dim)', textTransform: 'uppercase', letterSpacing: 1 }}>Sources</strong>
                  <div style={{ marginTop: 4, fontSize: 11 }}>
                    {s.sourceUrls.map((u, i) => (
                      <div key={i}><a href={u} target="_blank" rel="noreferrer">{u}</a></div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}

          {founderTimelines[story === 'avanti' ? 'alluri' : story === 'apex' ? 'karuturi' : story === 'nekkanti' ? 'nsrMurty' : story === 'devi' ? 'brahmanandanam' : story === 'ifb-agro' ? 'bijonNag' : story === 'gadre' ? 'arjunGadre' : story === 'coastal-corp' ? 'valsaraj' : story === 'falcon' ? 'taraPatnaik' : null] && (
            <div className="card" style={{ marginTop: 14 }}>
              <h3>Founder timeline</h3>
              {(() => {
                const ft = founderTimelines[story === 'avanti' ? 'alluri' : story === 'apex' ? 'karuturi' : story === 'nekkanti' ? 'nsrMurty' : story === 'devi' ? 'brahmanandanam' : story === 'ifb-agro' ? 'bijonNag' : story === 'gadre' ? 'arjunGadre' : story === 'coastal-corp' ? 'valsaraj' : story === 'falcon' ? 'taraPatnaik' : null];
                return (
                  <div>
                    <p style={{ fontSize: 13, color: 'var(--c-text)', marginBottom: 6 }}><strong>{ft.name}</strong> · Born {ft.born}</p>
                    <ol style={{ paddingLeft: 22, fontSize: 12.5 }}>{ft.journey.map((j, i) => <li key={i} style={{ margin: '4px 0' }}>{j}</li>)}</ol>
                  </div>
                );
              })()}
            </div>
          )}
        </>
      )}

      {tab === 'financials' && (
        <>
          <Disclaimer kind="modelled">
            FY24 revenue for listed cos (Avanti ₹6,800 cr; Apex ₹1,850 cr; IFB Agro ₹720 cr; Coastal ₹600 cr) is VERIFIED via NSE/BSE filings.
            Private-co revenue (Nekkanti, Devi, Gadre, Falcon, Sandhya) is INDUSTRY ESTIMATE ±20% from trade press + ROC + analyst notes.
            Year-by-year EBITDA% / PAT% / ROCE / D/E / WC days are DIRECTIONAL ESTIMATES based on sector analyst trend lines + known industry shocks.
            Validate against actual annual reports for listed cos before pitching to investor.
          </Disclaimer>
          <div className="card">
            <h3>Revenue trajectory FY20-FY24 (₹ cr)</h3>
            <ResponsiveContainer width="100%" height={320}>
              <LineChart data={buildTrend('revenueINRcr')} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8" />
                <XAxis dataKey="year" stroke="#5c6272" fontSize={11} />
                <YAxis stroke="#5c6272" fontSize={11} />
                <Tooltip contentStyle={{ background: '#ffffff', border: '1px solid #e0d9c8', color: '#1a1f36' }} />
                <Legend wrapperStyle={{ fontSize: 11 }} />
                {Object.keys(competitorFinancials).map((c, i) => (
                  <Line key={c} dataKey={c} stroke={COLORS[i % COLORS.length]} strokeWidth={2} dot={{ r: 3 }} />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="card" style={{ marginTop: 14 }}>
            <h3>EBITDA % trajectory FY20-FY24</h3>
            <ResponsiveContainer width="100%" height={320}>
              <LineChart data={buildTrend('ebitdaPct')} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8" />
                <XAxis dataKey="year" stroke="#5c6272" fontSize={11} />
                <YAxis stroke="#5c6272" fontSize={11} />
                <Tooltip contentStyle={{ background: '#ffffff', border: '1px solid #e0d9c8', color: '#1a1f36' }} />
                <Legend wrapperStyle={{ fontSize: 11 }} />
                {Object.keys(competitorFinancials).map((c, i) => (
                  <Line key={c} dataKey={c} stroke={COLORS[i % COLORS.length]} strokeWidth={2} dot={{ r: 3 }} />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="card" style={{ marginTop: 14 }}>
            <h3>Working capital days FY20-FY24</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={buildTrend('workingCapDays')} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8" />
                <XAxis dataKey="year" stroke="#5c6272" fontSize={11} />
                <YAxis stroke="#5c6272" fontSize={11} />
                <Tooltip contentStyle={{ background: '#ffffff', border: '1px solid #e0d9c8', color: '#1a1f36' }} />
                <Legend wrapperStyle={{ fontSize: 11 }} />
                {Object.keys(competitorFinancials).map((c, i) => (
                  <Line key={c} dataKey={c} stroke={COLORS[i % COLORS.length]} strokeWidth={2} dot={{ r: 3 }} />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="callout" style={{ marginTop: 14 }}>
            <strong>Industry-wide trend:</strong> EBITDA compressed {Math.abs(industryAverages.ebitdaCompressionPpt)} ppt over 4 years. Working capital days rose {industryAverages.workingCapDaysIncrease} days. Industry average EBITDA today ~{industryAverages.industryAverage}%. Top quartile {industryAverages.topQuartileMargin}%. Bottom quartile {industryAverages.bottomQuartileMargin}%. {industryAverages.ourTargetVsIndustry}.
          </div>
        </>
      )}

      {tab === 'ma' && (
        <>
          <div className="card">
            <h3>M&A + strategic event timeline (1973-2026)</h3>
            <div style={{ position: 'relative', paddingLeft: 22, borderLeft: '2px solid var(--c-border)' }}>
              {[...competitorMAevents].sort((a, b) => a.year - b.year).map((e, i) => (
                <div key={i} style={{ position: 'relative', marginBottom: 14 }}>
                  <span style={{ position: 'absolute', left: -27, top: 4, width: 10, height: 10, background: 'var(--c-accent-2)', borderRadius: '50%', border: '2px solid var(--c-bg)' }} />
                  <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <span style={{ fontFamily: 'Georgia,serif', fontSize: 14, fontWeight: 700, color: 'var(--c-accent)', width: 50, flexShrink: 0 }}>{e.year}</span>
                    <div>
                      <div style={{ fontSize: 12.5, fontWeight: 600 }}>{e.company}: {e.event}</div>
                      <div style={{ fontSize: 11.5, color: 'var(--c-text-dim)', marginTop: 2 }}>{e.impact}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card" style={{ marginTop: 14 }}>
            <h3>Auditors + bankers + advisors</h3>
            <div className="tbl-wrap">
              <table className="tbl">
                <thead><tr><th>Company</th><th>Auditor</th><th>Commercial bank</th><th>Merchant banker</th><th>Advisors</th></tr></thead>
                <tbody>
                  {competitorAdvisorsAndAuditors.map((c, i) => (
                    <tr key={i}>
                      <td><strong>{c.company}</strong></td>
                      <td style={{ fontSize: 12 }}>{c.auditor}</td>
                      <td style={{ fontSize: 12 }}>{c.commercialBank}</td>
                      <td style={{ fontSize: 12 }}>{c.merchantBanker}</td>
                      <td style={{ fontSize: 12 }}>{c.advisors}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {tab === 'matrix' && (
        <div className="tbl-wrap">
          <table className="tbl">
            <thead>
              <tr><th>Metric</th><th className="num">Avanti</th><th className="num">Apex</th><th className="num">Nekkanti</th><th className="num">Devi</th><th className="num">IFB</th><th className="num">Gadre</th><th className="num">Coastal</th><th className="num">Falcon</th><th className="num">Sandhya</th><th className="num" style={{background:'#faf5e5'}}>Us Y5</th></tr>
            </thead>
            <tbody>
              {peerComparisonMatrix.map((r, i) => (
                <tr key={i}>
                  <td><strong>{r.metric}</strong></td>
                  <td className="num">{r.avanti}</td>
                  <td className="num">{r.apex}</td>
                  <td className="num">{r.nekkanti}</td>
                  <td className="num">{r.devi}</td>
                  <td className="num">{r.ifbAgro}</td>
                  <td className="num">{r.gadre}</td>
                  <td className="num">{r.coastalCorp}</td>
                  <td className="num">{r.falcon}</td>
                  <td className="num">{r.sandhyaAqua}</td>
                  <td className="num" style={{ color: 'var(--c-good)', fontWeight: 700, background: '#faf5e5' }}>{r.ourY5Target}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab === 'markets' && (
        <div className="grid grid-3">
          {Object.entries(competitorRevenueByMarket).map(([id, mix]) => {
            const data = Object.entries(mix).map(([m, v]) => ({ name: m, value: v }));
            return (
              <div key={id} className="card">
                <h3>{id === 'us' ? 'Us (Y5)' : id} market mix</h3>
                <ResponsiveContainer width="100%" height={210}>
                  <BarChart data={data} layout="vertical" margin={{ top: 0, right: 8, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8" />
                    <XAxis type="number" stroke="#5c6272" fontSize={10} />
                    <YAxis type="category" dataKey="name" stroke="#5c6272" fontSize={10} width={60} />
                    <Tooltip contentStyle={{ background: '#ffffff', border: '1px solid #e0d9c8', color: '#1a1f36' }}
                      formatter={(v) => [`${v}%`, 'Share']} />
                    <Bar dataKey="value" fill={id === 'ourY5Target' ? '#2d6a4f' : '#0d3b66'} radius={[0,3,3,0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            );
          })}
        </div>
      )}

      {tab === 'targets' && (
        <>
          <div className="callout">
            <strong>M&A landscape:</strong> Industry consolidation is likely Y3-Y5 as smaller players hit margin walls. We may not be the buyer in Y3-Y5 but should monitor for: (a) supplier disruption, (b) buyer churn, (c) opportunity to acquire below replacement cost in Y5+.
          </div>
          {competitorPotentialMA.map((t, i) => (
            <div key={i} className="card" style={{ marginBottom: 12, borderLeft: '3px solid var(--c-accent-2)' }}>
              <h3 style={{ fontFamily: 'Georgia,serif', fontSize: 16, fontWeight: 600 }}>{t.target}</h3>
              <div className="grid grid-3" style={{ fontSize: 12.5 }}>
                <div><strong>Why M&A target: </strong>{t.whyTarget}</div>
                <div><strong>Likely buyer: </strong>{t.whoMightBuy}</div>
                <div><strong>Est. valuation: </strong><span style={{ color: 'var(--c-accent)' }}>₹{t.estValuationINRcr}</span></div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
}
