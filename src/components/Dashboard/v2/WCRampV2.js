import React from 'react';
import { cccComponents, rampUpCurve, wcFundingMix, wcRampSummaryStats } from '../../../data/v2WCRamp';
import { ResponsiveContainer, ComposedChart, Bar, LineChart, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import SortableTable from '../SortableTable';
import Disclaimer from './Disclaimer';

const FUNDING_COLOR = ['#0d3b66', '#2d6a4f', '#c5a565', '#7a5b8c'];

export default function WCRampV2() {
  const cccChart = Object.entries(cccComponents.cccByYear).map(([yr, d]) => ({
    year: yr, DSO: d.DSO, DIO: d.DIO, DPO: -d.DPO, GST: d.GSTfloat, CCC: d.cccDays,
    revenue: d.revenueINRcr, netWC: d.netWCINRcr,
  }));

  const rampChart = rampUpCurve.rampByMonth.map(r => ({
    month: r.month,
    utilisation: r.utilisationPct,
    throughput: r.throughputMTMo,
  }));

  const benchmarkChart = Object.entries(rampUpCurve.benchmarks.ours).filter(([k]) => k.startsWith('Y')).map(([yr, v]) => ({
    year: yr,
    Ours: v,
    IndianShrimpAvg: rampUpCurve.benchmarks.indianShrimp[yr],
  }));

  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">V2 · Operations Rigor</div>
        <h1 className="sec-title">Working Capital Cycle · Plant Ramp-Up</h1>
        <p className="sec-sub">
          Base CCC {wcRampSummaryStats.baseCCCdays} days at Y3 steady state →
          Y5 ramp to {wcRampSummaryStats.Y5DesignedUtilPct}% utilisation
          ({wcRampSummaryStats.Y5DesignedThroughputMTYr.toLocaleString('en-IN')} MT/yr).
          {wcRampSummaryStats.totalWCSavingsINRcr.toFixed(1)} cr in WC unlocked through 5 specific tactics.
        </p>
      </div>

      <Disclaimer kind="modelled">
        CCC components are designed values per channel-mix evolution. Y1-Y5 utilisation curve based on
        Apex Frozen Y1-Y5 IPO prospectus pattern + Devi Sea Foods commissioning curve (CMFRI case study).
        Actual utilisation depends on buyer pipeline + Maharashtra labour availability.
      </Disclaimer>

      <div className="kpi-grid">
        <div className="card"><h3>Base CCC (Y3)</h3><div className="big">{wcRampSummaryStats.baseCCCdays} days</div></div>
        <div className="card"><h3>Y3 Net WC</h3><div className="big">₹{wcRampSummaryStats.baseY3WCINRcr} cr</div></div>
        <div className="card"><h3>Y5 utilisation</h3><div className="big" style={{color:'var(--c-good)'}}>{wcRampSummaryStats.Y5DesignedUtilPct}%</div></div>
        <div className="card"><h3>WC unlocked via tactics</h3><div className="big" style={{color:'var(--c-good)'}}>₹{wcRampSummaryStats.totalWCSavingsINRcr.toFixed(1)} cr</div></div>
      </div>

      {/* CCC EVOLUTION */}
      <div className="section-block">
        <h2>Cash conversion cycle Y1 → Y5</h2>
        <div className="card">
          <h3>CCC components (DSO + DIO − DPO + GST float)</h3>
          <ResponsiveContainer width="100%" height={320}>
            <ComposedChart data={cccChart} margin={{top:10,right:10,left:0,bottom:0}}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8"/>
              <XAxis dataKey="year" stroke="#5c6272" fontSize={11}/>
              <YAxis yAxisId="left" stroke="#5c6272" fontSize={11} label={{value:'days', angle:-90, position:'insideLeft', fontSize:11}}/>
              <YAxis yAxisId="right" orientation="right" stroke="#5c6272" fontSize={11} label={{value:'₹ cr', angle:90, position:'insideRight', fontSize:11}}/>
              <Tooltip contentStyle={{background:'#ffffff',border:'1px solid #e0d9c8',color:'#1a1f36'}}/>
              <Legend wrapperStyle={{fontSize:11}}/>
              <Bar yAxisId="left" dataKey="DSO" stackId="a" fill="#0d3b66" name="DSO"/>
              <Bar yAxisId="left" dataKey="DIO" stackId="a" fill="#c5a565" name="DIO"/>
              <Bar yAxisId="left" dataKey="GST" stackId="a" fill="#7a5b8c" name="GST float"/>
              <Bar yAxisId="left" dataKey="DPO" stackId="a" fill="#2d6a4f" name="−DPO"/>
              <Line yAxisId="left" dataKey="CCC" stroke="#a8322d" strokeWidth={3} name="CCC days" dot={{r:5}}/>
              <Line yAxisId="right" dataKey="netWC" stroke="#1a1f36" strokeWidth={2} strokeDasharray="4 4" name="Net WC ₹cr" dot={{r:4}}/>
            </ComposedChart>
          </ResponsiveContainer>
          <div style={{marginTop:8, fontSize:11, color:'var(--c-text-dim)'}}>
            CCC compresses from 131d (Y1) to 85d (Y5) as AEO-T1/T2 cuts GST float and channel mix shifts toward
            faster-paying private-label + factoring.
          </div>
        </div>
      </div>

      {/* DSO BY CHANNEL */}
      <div className="section-block">
        <h2>DSO by sales channel</h2>
        <div className="card">
          <SortableTable
            columns={[
              { key:'channel', label:'Channel', render:(v) => <strong>{v}</strong> },
              { key:'dso', label:'DSO (days)', numeric:true },
              { key:'shareY1', label:'Share Y1 %', numeric:true, format:(v) => `${v}%` },
              { key:'shareY5', label:'Share Y5 %', numeric:true, format:(v) => `${v}%` },
            ]}
            rows={cccComponents.dsoByChannel}
            defaultSort="dso"
          />
        </div>
      </div>

      {/* INVENTORY BREAKDOWN */}
      <div className="section-block">
        <h2>Inventory by stage (Y3 base)</h2>
        <div className="card">
          <SortableTable
            columns={[
              { key:'stage', label:'Stage', render:(v) => <strong>{v}</strong> },
              { key:'daysHeld', label:'Days held', numeric:true },
              { key:'valueINRcrY3', label:'Value Y3 ₹cr', numeric:true, format:(v) => `₹${v.toFixed(1)} cr` },
              { key:'note', label:'Note', style:{fontSize:12} },
            ]}
            rows={cccComponents.inventoryComponents}
            defaultSort="daysHeld"
            defaultDir="desc"
          />
        </div>
      </div>

      {/* PLANT RAMP CURVE */}
      <div className="section-block">
        <h2>Plant ramp-up curve M0 → M60</h2>
        <div className="card">
          <h3>Capacity utilisation vs throughput (16 milestones)</h3>
          <ResponsiveContainer width="100%" height={320}>
            <ComposedChart data={rampChart} margin={{top:10,right:10,left:0,bottom:0}}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8"/>
              <XAxis dataKey="month" stroke="#5c6272" fontSize={10}/>
              <YAxis yAxisId="left" stroke="#5c6272" fontSize={11} label={{value:'utilisation %', angle:-90, position:'insideLeft', fontSize:11}}/>
              <YAxis yAxisId="right" orientation="right" stroke="#5c6272" fontSize={11} label={{value:'MT/mo', angle:90, position:'insideRight', fontSize:11}}/>
              <Tooltip contentStyle={{background:'#ffffff',border:'1px solid #e0d9c8',color:'#1a1f36'}}/>
              <Legend wrapperStyle={{fontSize:11}}/>
              <Area yAxisId="left" dataKey="utilisation" fill="#0d3b66" stroke="#0d3b66" fillOpacity={0.18} name="Utilisation %"/>
              <Line yAxisId="right" dataKey="throughput" stroke="#a8322d" strokeWidth={2.5} dot={{r:3}} name="Throughput MT/mo"/>
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        <div className="card" style={{marginTop:14}}>
          <h3>Vs Indian shrimp commodity benchmark</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={benchmarkChart} margin={{top:10,right:10,left:0,bottom:0}}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8"/>
              <XAxis dataKey="year" stroke="#5c6272" fontSize={11}/>
              <YAxis stroke="#5c6272" fontSize={11} label={{value:'utilisation %', angle:-90, position:'insideLeft', fontSize:11}}/>
              <Tooltip contentStyle={{background:'#ffffff',border:'1px solid #e0d9c8',color:'#1a1f36'}} formatter={(v) => `${v}%`}/>
              <Legend wrapperStyle={{fontSize:11}}/>
              <Line dataKey="Ours" stroke="#0d3b66" strokeWidth={3} dot={{r:6}} name="Our plan"/>
              <Line dataKey="IndianShrimpAvg" stroke="#a8322d" strokeWidth={2} strokeDasharray="4 4" dot={{r:5}} name="Indian shrimp avg (Apex IPO data)"/>
            </LineChart>
          </ResponsiveContainer>
          <p style={{fontSize:12, color:'var(--c-text-dim)', marginTop:8, fontStyle:'italic'}}>
            {rampUpCurve.benchmarks.note}
          </p>
        </div>
      </div>

      {/* BOTTLENECKS */}
      <div className="section-block">
        <h2>Capacity bottleneck analysis</h2>
        <div className="card">
          <SortableTable
            columns={[
              { key:'stage', label:'Stage', render:(v) => <strong>{v}</strong> },
              { key:'maxMTMo', label:'Max MT/mo', numeric:true },
              { key:'note', label:'Note', style:{fontSize:12} },
            ]}
            rows={rampUpCurve.bottlenecks}
            defaultSort="maxMTMo"
          />
        </div>
        <div className="callout" style={{marginTop:10}}>
          <strong>Binding constraint at Y5: </strong>{wcRampSummaryStats.bottleneckStage}.
          Solution: introduce 2nd shift (M48) or upgrade to semi-auto packing line (₹85 L capex).
        </div>
      </div>

      {/* WC FUNDING MIX */}
      <div className="section-block">
        <h2>Y3 working-capital funding mix</h2>
        <div className="grid grid-2">
          <div className="card">
            <h3>Funding sources (₹{wcFundingMix.Y3steadyState.netWCINRcr} cr total)</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={wcFundingMix.Y3steadyState.funding.map((f, i) => ({
                  name: f.source.split('—')[0].trim().split('(')[0].trim().slice(0,22),
                  value: f.amountINRcr,
                  color: FUNDING_COLOR[i % FUNDING_COLOR.length],
                }))} outerRadius={75}
                label={({name, percent}) => `${(percent * 100).toFixed(0)}%`} fontSize={11}>
                  {wcFundingMix.Y3steadyState.funding.map((f, i) => <Cell key={i} fill={FUNDING_COLOR[i % FUNDING_COLOR.length]}/>)}
                </Pie>
                <Tooltip contentStyle={{background:'#ffffff',border:'1px solid #e0d9c8',color:'#1a1f36'}}
                  formatter={(v) => [`₹${v} cr`, 'WC']}/>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="card">
            <h3>Detail + blended cost</h3>
            <SortableTable
              columns={[
                { key:'source', label:'Source', style:{fontSize:12} },
                { key:'amountINRcr', label:'₹cr', numeric:true, format:(v) => `₹${v.toFixed(1)}` },
                { key:'ratePct', label:'Rate %', numeric:true, format:(v) => `${v}%` },
                { key:'secured', label:'Secured by', style:{fontSize:11} },
              ]}
              rows={wcFundingMix.Y3steadyState.funding}
            />
            <div style={{marginTop:10, fontSize:13, padding:10, background:'var(--c-surface-2)', borderRadius:4}}>
              <strong>Blended cost: {wcFundingMix.Y3steadyState.blendedCostPct}%</strong> · vs naive prime-rate ~10.5%
            </div>
          </div>
        </div>
      </div>

      {/* WC TACTICS */}
      <div className="section-block">
        <h2>5 cycle-management tactics — ₹{wcRampSummaryStats.totalWCSavingsINRcr.toFixed(1)} cr unlocked</h2>
        <div className="card">
          <SortableTable
            columns={[
              { key:'tactic', label:'Tactic', render:(v) => <strong>{v}</strong> },
              { key:'wcSavingINRcr', label:'WC saved ₹cr', numeric:true, format:(v) => `₹${v.toFixed(1)} cr`, style:{color:'var(--c-good)', fontWeight:600} },
              { key:'mechanism', label:'Mechanism', style:{fontSize:12.5} },
            ]}
            rows={wcFundingMix.cycleManagementTactics}
            defaultSort="wcSavingINRcr"
            defaultDir="desc"
          />
        </div>
      </div>
    </>
  );
}
