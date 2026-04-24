import React from 'react';
import { marketSnapshot, marketDestinations } from '../../../data/marketData';
import { capexSummary, returns, pnl } from '../../../data/financials';
import { gapSpeciesRollup } from '../../../data/gapSpecies';
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  PieChart, Pie, Cell,
} from 'recharts';

const COLORS = ['#4cc9f0','#f4a261','#2ec27e','#f4d35e','#ef476f','#9b5de5','#00bbf9','#ff7b54'];

export default function ExecutiveSummary() {
  const top6 = [...marketDestinations].sort((a,b) => b.shareValue - a.shareValue).slice(0, 6);
  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">Investor Brief · Apr 2026</div>
        <h1 className="sec-title">Konkan Seafoods — 10 Cr Maharashtra Seafood Export Venture</h1>
        <p className="sec-sub">
          A greenfield, modern HACCP processing plant on a 3-acre site at Purandar (Pune district),
          processing Konkan-coast wild catch and Andhra Pradesh farmed shrimp into FOB-ready exports
          to USA, EU, China, Japan and the GCC. The thesis: build a multi-species, mixed-container
          processor with a defensible Maharashtra-origin moat in pomfret, lobster, octopus and tuna —
          backed by a PMMSY/PMKSY subsidy stack and solar-PV cost floor.
        </p>
      </div>

      <div className="kpi-grid">
        <div className="card"><h3>India Seafood Exports FY26</h3><div className="big">₹{marketSnapshot.totalValueINR.toLocaleString('en-IN')} cr</div><div className="sub">{marketSnapshot.fy} · ${marketSnapshot.totalValueUSD} bn</div></div>
        <div className="card"><h3>Shrimp share of value</h3><div className="big">{marketSnapshot.shrimpShareValue}%</div><div className="sub">₹{marketSnapshot.shrimpValueINR.toLocaleString('en-IN')} cr · ↑{marketSnapshot.yoyValueGrowth}% YoY</div></div>
        <div className="card"><h3>Promoter Equity</h3><div className="big">₹10 cr</div><div className="sub">+ ₹14 cr term loan + ₹8 cr WC</div></div>
        <div className="card"><h3>Net Capex (post-subsidy)</h3><div className="big">₹{(capexSummary.netCapex / 100).toFixed(1)} cr</div><div className="sub">Gross ₹{(capexSummary.grossCapex/100).toFixed(1)} cr · subsidy ₹{(capexSummary.subsidy/100).toFixed(1)} cr</div></div>
      </div>

      <div className="kpi-grid" style={{marginTop:14}}>
        <div className="card"><h3>Project IRR</h3><div className="big" style={{color:'var(--c-good)'}}>{returns.projectIRR}%</div><div className="sub">Equity IRR {returns.equityIRR}%</div></div>
        <div className="card"><h3>Payback</h3><div className="big">{returns.paybackYears} yrs</div><div className="sub">EBITDA-based</div></div>
        <div className="card"><h3>Y5 Revenue Target</h3><div className="big">₹{(pnl[4].revenue/100).toFixed(0)} cr</div><div className="sub">3,300 MT · ASP $7.8/kg · 95% util</div></div>
        <div className="card"><h3>Y5 EBITDA</h3><div className="big" style={{color:'var(--c-good)'}}>{pnl[4].ebitdaPct}%</div><div className="sub">₹{(pnl[4].ebitda/100).toFixed(1)} cr · PAT ₹{(pnl[4].pat/100).toFixed(1)} cr</div></div>
      </div>

      <div className="section-block">
        <h2>The Thesis</h2>
        <div className="grid grid-3">
          <div className="card">
            <h3>Geographic Moat</h3>
            <p style={{fontSize:13, color:'#cbd6e8'}}>
              We process the only multi-species mix that buyers actually want in a single
              container: Konkan wild (pomfret · lobster · squid · octopus) + AP farmed
              (vannamei). AP majors do shrimp. Maharashtra incumbents do mixed but at sub-scale.
              We do both — modern, traceable, premium-positioned.
            </p>
          </div>
          <div className="card">
            <h3>Cost Moat</h3>
            <p style={{fontSize:13, color:'#cbd6e8'}}>
              1.2 MWp rooftop solar cuts power 25-30%. PMMSY + PMKSY + MNRE subsidy stack
              cuts effective capex 22%. Owned reefer fleet locks the AP-Purandar long-haul.
              Combined: 4-6 ppt EBITDA advantage by Y3.
            </p>
          </div>
          <div className="card">
            <h3>Channel Moat</h3>
            <p style={{fontSize:13, color:'#cbd6e8'}}>
              Live lobster + live mud crab via PNQ daily air cargo. Few Maharashtra peers
              do this. 25-30% margins on small but high-$/kg volumes — and these become
              the relationship anchors with Hong Kong, Singapore, Tokyo importers.
            </p>
          </div>
        </div>
      </div>

      <div className="section-block">
        <h2>Why now</h2>
        <ul className="bullets">
          <li><strong>India seafood at all-time high:</strong> ₹72,325 cr FY26 — the market is growing through tariff headwinds with destinations diversifying from USA to China, EU and GCC.</li>
          <li><strong>PMMSY runway:</strong> ₹2,500 cr FY27 outlay; capex subsidies are 30-40% on processing + cold-chain. Window is open through FY29 — first-movers compound the benefit.</li>
          <li><strong>Maharashtra Industrial Policy 2024:</strong> 7-year SGST refund + electricity duty exemption for new food processing plants in D-zone districts.</li>
          <li><strong>India-UK CETA (signed 2025):</strong> Duty-free access on processed seafood — pomfret + shrimp + cephalopods all benefit.</li>
          <li><strong>USA tariff diversification:</strong> Buyers actively scouting non-AP shrimp alternates → Maharashtra-origin is the new "interesting" geography.</li>
          <li><strong>Purandar airport (under construction):</strong> Future cargo capacity for live + premium air-export from inland plant.</li>
        </ul>
      </div>

      <div className="section-block grid grid-2">
        <div className="card">
          <h3>Top destinations (FY26)</h3>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={top6} margin={{top:10,right:10,left:0,bottom:0}}>
              <CartesianGrid strokeDasharray="3 3" stroke="#243757" />
              <XAxis dataKey="country" stroke="#9eb0c9" fontSize={11}/>
              <YAxis stroke="#9eb0c9" fontSize={11}/>
              <Tooltip contentStyle={{background:'#0b1220',border:'1px solid #243757',color:'#e6edf7'}}/>
              <Bar dataKey="valueUSDmn" name="Value (USD mn)" fill="#4cc9f0" radius={[6,6,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="card">
          <h3>Y1 revenue mix (recommended)</h3>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={[
                  { name: 'Vannamei',        value: 45 },
                  { name: 'Black Tiger',     value: 12 },
                  { name: 'Pomfret',         value: 14 },
                  { name: 'Cephalopods',     value: 16 },
                  { name: 'Ribbonfish/Mack', value:  8 },
                  { name: 'Lobster (live)',  value:  5 },
                ]}
                outerRadius={90}
                label={({name, value}) => `${name} ${value}%`}
                labelLine={{stroke:'#9eb0c9'}}
                fontSize={11}
              >
                {[0,1,2,3,4,5].map(i => <Cell key={i} fill={COLORS[i]} />)}
              </Pie>
              <Tooltip contentStyle={{background:'#0b1220',border:'1px solid #243757',color:'#e6edf7'}}/>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="callout">
        <strong>Bulletproof gap-species opportunity:</strong> {gapSpeciesRollup.totalSpecies} identified species
        (4 Tier-1, 3 Tier-2, 3 Tier-3) where India under-supplies high-margin global demand.
        Combined Y3 revenue target: <strong>${gapSpeciesRollup.combinedY3RevenueUSDmn.toFixed(1)} mn</strong> ({" "}
        ₹{gapSpeciesRollup.combinedY3RevenueINRcr} cr) at <strong>{gapSpeciesRollup.blendedGM}% blended GM</strong>.
        Tier-1 alone (octopus, yellowfin tuna, live lobster, live mud crab) clears the Konkan-edge thesis.
      </div>
    </>
  );
}
