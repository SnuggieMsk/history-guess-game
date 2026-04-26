import React from 'react';
import { founders, coreTeamHires, advisoryBoard, headcountByYear, hiringGaps, successionPlan, teamSummaryStats } from '../../../data/v2TeamOrg';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import SortableTable from '../SortableTable';
import Disclaimer from './Disclaimer';

const SEVERITY_COLOR = { 'High': 'var(--c-bad)', 'Medium': 'var(--c-warn)', 'Low': 'var(--c-good)' };

export default function TeamOrgV2() {
  const headcountChart = Object.entries(headcountByYear).map(([yr, d]) => ({
    year: yr,
    Management: d.management,
    Supervisors: d.supervisors,
    Workers: d.workers,
  }));

  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">V2 · People Layer</div>
        <h1 className="sec-title">Team · Advisory Board · Hiring Plan · Succession</h1>
        <p className="sec-sub">
          The investor question every pitch dodges: <em>who actually runs this?</em> Below: founder profile,
          {teamSummaryStats.totalCoreHires} core hires by month with ESOP + KPI, {teamSummaryStats.advisoryBoardSeats}-seat advisory board recommendation,
          honest hiring gaps, succession plan + ₹{teamSummaryStats.totalKeymanInsuranceINRcr} cr keyman insurance.
        </p>
      </div>

      <Disclaimer kind="modelled">
        Founder identity placeholder pending actual cap-table disclosure (investor will diligence directly).
        All hire bands (salary, ESOP bps, KPI targets) are <strong>recommendations</strong> based on Indian
        agri-export sector benchmarks (CIEL HR + CXO Search 2025 reports). Actual offers depend on candidate market.
      </Disclaimer>

      <div className="kpi-grid">
        <div className="card"><h3>Core hires Y1</h3><div className="big">{teamSummaryStats.totalCoreHires}</div></div>
        <div className="card"><h3>Y1 salary cost</h3><div className="big">₹{teamSummaryStats.totalSalaryINRcrYr1.toFixed(2)} cr</div></div>
        <div className="card"><h3>Total ESOP/equity allocated</h3><div className="big">{(teamSummaryStats.totalEsopAllocBps/100).toFixed(2)}%</div></div>
        <div className="card"><h3>Y5 headcount</h3><div className="big" style={{color:'var(--c-good)'}}>{teamSummaryStats.y5Headcount}</div></div>
      </div>

      {/* FOUNDER */}
      <div className="section-block">
        <h2>Founder profile</h2>
        {founders.map((f, i) => (
          <div key={i} className="card" style={{borderLeft:'4px solid var(--c-accent)'}}>
            <div style={{display:'flex',justifyContent:'space-between',gap:10,flexWrap:'wrap',marginBottom:10}}>
              <div>
                <h3 style={{fontFamily:'Georgia,serif',fontSize:18,fontWeight:600,color:'var(--c-text)'}}>{f.role}</h3>
                <div style={{fontSize:13, color:'var(--c-text-dim)', marginTop:2, fontStyle:'italic'}}>{f.nameTemplate}</div>
              </div>
              <div style={{textAlign:'right'}}>
                <div style={{fontFamily:'Georgia,serif',fontSize:20,fontWeight:600,color:'var(--c-good)'}}>₹{f.cashCommitmentINRcr} cr</div>
                <div style={{fontSize:11, color:'var(--c-text-dim)'}}>cash committed · {f.timeCommitment}</div>
              </div>
            </div>
            <p style={{fontSize:13.5, color:'var(--c-text)', marginBottom:12}}>{f.background}</p>
            <div className="grid grid-2">
              <div>
                <strong style={{fontSize:11, color:'var(--c-good)', textTransform:'uppercase', letterSpacing:1}}>Strengths</strong>
                <ul className="bullets" style={{marginTop:4, fontSize:12.5}}>
                  {f.keyStrengths.map((s,k) => <li key={k}>{s}</li>)}
                </ul>
              </div>
              <div>
                <strong style={{fontSize:11, color:'var(--c-bad)', textTransform:'uppercase', letterSpacing:1}}>Known gaps</strong>
                <ul className="bullets" style={{marginTop:4, fontSize:12.5}}>
                  {f.knownGaps.map((g,k) => <li key={k}>{g}</li>)}
                </ul>
              </div>
            </div>
            <div className="callout" style={{marginTop:12}}>
              <strong>Mitigation: </strong>{f.mitigation}
            </div>
            <div style={{marginTop:8, fontSize:11, color:'var(--c-text-faint)', fontStyle:'italic'}}>
              {f.references}
            </div>
          </div>
        ))}
      </div>

      {/* CORE TEAM HIRES */}
      <div className="section-block">
        <h2>Core team hires — by month, role, salary, ESOP</h2>
        {coreTeamHires.map((h, i) => (
          <div key={i} className="card" style={{marginBottom:12, borderLeft:'3px solid var(--c-accent-2)'}}>
            <div style={{display:'flex',justifyContent:'space-between',gap:10,flexWrap:'wrap',marginBottom:8}}>
              <div>
                <h3 style={{fontFamily:'Georgia,serif',fontSize:15,fontWeight:600,color:'var(--c-text)'}}>{h.role}</h3>
                <div style={{fontSize:11.5, color:'var(--c-text-dim)', marginTop:2}}>
                  Source: <em>{h.sourceProfile}</em> · {h.yearsRequired}+ yrs experience
                </div>
              </div>
              <div style={{textAlign:'right', fontSize:12}}>
                <div><strong>Hire by:</strong> <span style={{color:'var(--c-accent)'}}>{h.hireBy}</span></div>
                <div><strong>Salary:</strong> ₹{h.salaryINRlakh} L/yr · <strong>ESOP:</strong> {h.esopBps} bps</div>
              </div>
            </div>
            <div className="grid grid-2" style={{fontSize:12, marginBottom:8}}>
              <div>
                <strong style={{fontSize:11, color:'var(--c-good)', textTransform:'uppercase', letterSpacing:1}}>Year-1 KPIs</strong>
                <ul className="bullets" style={{marginTop:4, fontSize:12}}>
                  {h.keyKpis.map((k,j) => <li key={j}>{k}</li>)}
                </ul>
              </div>
              <div>
                <strong style={{fontSize:11, color:'var(--c-accent)', textTransform:'uppercase', letterSpacing:1}}>Sourcing path</strong>
                <p style={{fontSize:12, marginTop:4}}>{h.candidateSource}</p>
              </div>
            </div>
            <div style={{display:'flex', gap:14, fontSize:12, paddingTop:8, borderTop:'1px solid var(--c-border)'}}>
              <div><strong style={{color:'var(--c-bad)'}}>Fill risk:</strong> <span className={`pill ${h.fillRisk.startsWith('High') ? 'pill-bad' : h.fillRisk.startsWith('Medium') ? 'pill-warn' : 'pill-good'}`}>{h.fillRisk}</span></div>
              <div><strong>Fallback:</strong> <span style={{fontStyle:'italic'}}>{h.fallback}</span></div>
            </div>
          </div>
        ))}
      </div>

      {/* ADVISORY BOARD */}
      <div className="section-block">
        <h2>Advisory board — 5-seat composition</h2>
        <div className="grid grid-2">
          {advisoryBoard.map((a, i) => (
            <div key={i} className="card" style={{borderTop:'3px solid var(--c-accent-2)'}}>
              <div style={{display:'flex',justifyContent:'space-between',marginBottom:6}}>
                <h3 style={{fontFamily:'Georgia,serif',fontSize:14.5,fontWeight:600,color:'var(--c-accent)'}}>{a.seat}</h3>
                <span className={`pill ${a.seatFilled ? 'pill-good' : 'pill-mute'}`}>{a.seatFilled ? 'Filled' : 'Open'}</span>
              </div>
              <p style={{fontSize:12.5, color:'var(--c-text-dim)', marginBottom:8, fontStyle:'italic'}}>{a.profileTemplate}</p>
              <div style={{fontSize:11.5, marginBottom:6}}>
                <strong>Time:</strong> {a.timeCommitment} · <strong>Comp:</strong> ₹{a.compensationINRlakh} L/yr · <strong>Equity:</strong> {a.equityBps} bps
              </div>
              <p style={{fontSize:12, marginBottom:6}}><strong style={{color:'var(--c-good)'}}>Value-add: </strong>{a.valueAdd}</p>
              <div style={{fontSize:11, color:'var(--c-text-dim)', borderTop:'1px solid var(--c-border)', paddingTop:6}}>
                <strong>Candidates: </strong>{a.candidateExamples.join(', ')}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ORG CHART + HEADCOUNT */}
      <div className="section-block">
        <h2>Headcount evolution Y1 → Y5</h2>
        <div className="card">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={headcountChart} margin={{top:5,right:10,left:0,bottom:0}}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8"/>
              <XAxis dataKey="year" stroke="#5c6272" fontSize={11}/>
              <YAxis stroke="#5c6272" fontSize={11}/>
              <Tooltip contentStyle={{background:'#ffffff',border:'1px solid #e0d9c8',color:'#1a1f36'}}/>
              <Legend wrapperStyle={{fontSize:11}}/>
              <Bar dataKey="Management" stackId="a" fill="#0d3b66"/>
              <Bar dataKey="Supervisors" stackId="a" fill="#c5a565"/>
              <Bar dataKey="Workers" stackId="a" fill="#7a9b7a"/>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="callout" style={{marginTop:10}}>
          Headcount Y1 ({headcountByYear.Y1.total}) → Y5 ({headcountByYear.Y5.total}). Of Y5 total,
          {Math.round(headcountByYear.Y5.workers / headcountByYear.Y5.total * 100)}% are direct production workers
          (hand-picking, IQF lines, packing) — the labour-intensity profile that PMMSY scoring rewards.
        </div>
      </div>

      {/* HIRING GAPS */}
      <div className="section-block">
        <h2>Honest hiring gaps + investor pushback responses</h2>
        {hiringGaps.map((g, i) => (
          <div key={i} className="card" style={{marginBottom:10, borderLeft:`3px solid ${SEVERITY_COLOR[g.severity.split(' ')[0]] || 'var(--c-warn)'}`}}>
            <div style={{display:'flex',justifyContent:'space-between',gap:10,flexWrap:'wrap',marginBottom:8}}>
              <h3 style={{fontFamily:'Georgia,serif',fontSize:14,fontWeight:600,color:'var(--c-text)'}}>{g.gap}</h3>
              <span className={`pill ${g.severity.startsWith('High') ? 'pill-bad' : g.severity.startsWith('Medium') ? 'pill-warn' : 'pill-good'}`}>
                {g.severity}
              </span>
            </div>
            <div style={{fontSize:12.5, marginBottom:6}}>
              <strong style={{color:'var(--c-good)'}}>Closure path: </strong>{g.closurePath}
            </div>
            <div style={{fontSize:12, color:'var(--c-text-dim)', fontStyle:'italic'}}>
              <strong>Investor pushback risk: </strong>{g.investorPushback}
            </div>
          </div>
        ))}
      </div>

      {/* SUCCESSION + KEYMAN */}
      <div className="section-block">
        <h2>Succession plan + keyman insurance</h2>
        <SortableTable
          columns={[
            { key:'keyPerson', label:'Key person', render:(v) => <strong>{v}</strong> },
            { key:'keyPersonRisk', label:'Risk', style:{fontSize:12, color:'var(--c-bad)'} },
            { key:'succession', label:'Succession plan', style:{fontSize:12} },
            { key:'keymanInsuranceINRcr', label:'Keyman cover ₹cr', numeric:true, format:(v) => `₹${v.toFixed(1)} cr` },
          ]}
          rows={successionPlan}
        />
        <div className="callout" style={{marginTop:10}}>
          <strong>Total keyman insurance:</strong> ₹{teamSummaryStats.totalKeymanInsuranceINRcr} cr ·
          Premium ~₹15-20 L/yr (LIC + private; standard agri-export rates) · Beneficiary: company.
          Investor question this answers: <em>"What if your founder gets hit by a bus?"</em>
        </div>
      </div>
    </>
  );
}
