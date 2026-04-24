import React, { useState, useMemo } from 'react';
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell,
} from 'recharts';

// Interactive cost calculator. User adjusts farm gate, processing yield, freight,
// and we recompute landed FOB cost and gross margin per kg.

export default function CostCalculator() {
  const [farmGate, setFarmGate] = useState(380);          // ₹/kg input raw
  const [yieldPct, setYieldPct] = useState(66);           // % output / input
  const [processCost, setProcessCost] = useState(38);     // ₹/kg labour + utilities
  const [iqfCost, setIqfCost] = useState(14);             // ₹/kg
  const [storageCost, setStorageCost] = useState(8);
  const [packCost, setPackCost] = useState(12);
  const [coldChainCost, setColdChainCost] = useState(18);
  const [freight, setFreight] = useState(22);             // ₹/kg outbound
  const [overhead, setOverhead] = useState(18);
  const [finance, setFinance] = useState(10);
  const [fobUSD, setFobUSD] = useState(7.0);
  const [fx, setFx] = useState(87);
  const [rodtepPct, setRodtepPct] = useState(1.7);

  const calc = useMemo(() => {
    const adjustedRaw = farmGate / (yieldPct / 100);     // raw cost per kg of finished product
    const total = adjustedRaw + coldChainCost + processCost + iqfCost + storageCost + packCost + freight + overhead + finance;
    const fobINR = fobUSD * fx;
    const rodtepINR = fobINR * (rodtepPct / 100);
    const revenue = fobINR + rodtepINR;
    const margin = revenue - total;
    const marginPct = (margin / revenue) * 100;
    return { adjustedRaw, total, fobINR, rodtepINR, revenue, margin, marginPct };
  }, [farmGate, yieldPct, processCost, iqfCost, storageCost, packCost, coldChainCost, freight, overhead, finance, fobUSD, fx, rodtepPct]);

  const breakdown = [
    { stage:'Raw material (yield-adjusted)', val: Math.round(calc.adjustedRaw), color:'#4cc9f0' },
    { stage:'First-mile cold chain',         val: coldChainCost,                color:'#5fb3e3' },
    { stage:'Processing',                    val: processCost,                  color:'#7fbcd0' },
    { stage:'IQF freezing',                  val: iqfCost,                      color:'#92c7b6' },
    { stage:'Cold storage',                  val: storageCost,                  color:'#a8d49b' },
    { stage:'Packing & docs',                val: packCost,                     color:'#cfd76f' },
    { stage:'Outbound freight',              val: freight,                      color:'#f4d35e' },
    { stage:'Overheads',                     val: overhead,                     color:'#f4a261' },
    { stage:'Finance cost',                  val: finance,                      color:'#ef476f' },
  ];

  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">Interactive · Drag sliders</div>
        <h1 className="sec-title">Unit-Economics Cost Calculator</h1>
        <p className="sec-sub">
          Adjust any input. The cost stack and gross margin recompute live. Defaults are vannamei
          HLSO 31/40, 66% yield, FOB $7.0/kg, FX ₹87/USD, RoDTEP 1.7%.
        </p>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <h3>Inputs</h3>
          <Slider label="Farm-gate raw (₹/kg)"        min={150} max={900}  step={5}    value={farmGate}      onChange={setFarmGate}/>
          <Slider label="Processing yield (%)"        min={45}  max={90}   step={1}    value={yieldPct}      onChange={setYieldPct}/>
          <Slider label="First-mile cold chain (₹/kg)" min={5}  max={45}   step={1}    value={coldChainCost} onChange={setColdChainCost}/>
          <Slider label="Processing labor + utilities (₹/kg)" min={15} max={80} step={1} value={processCost} onChange={setProcessCost}/>
          <Slider label="IQF freezing (₹/kg)"         min={6}   max={28}   step={1}    value={iqfCost}       onChange={setIqfCost}/>
          <Slider label="Cold storage (₹/kg)"         min={4}   max={20}   step={1}    value={storageCost}   onChange={setStorageCost}/>
          <Slider label="Packing + docs (₹/kg)"       min={6}   max={28}   step={1}    value={packCost}      onChange={setPackCost}/>
          <Slider label="Outbound freight (₹/kg)"     min={10}  max={180}  step={2}    value={freight}       onChange={setFreight}/>
          <Slider label="Overheads & SG&A (₹/kg)"     min={8}   max={45}   step={1}    value={overhead}      onChange={setOverhead}/>
          <Slider label="Finance cost (WC) (₹/kg)"    min={4}   max={28}   step={1}    value={finance}       onChange={setFinance}/>
          <Slider label="FOB price ($/kg)"            min={3}   max={20}   step={0.1}  value={fobUSD}        onChange={setFobUSD}/>
          <Slider label="FX (₹/USD)"                  min={75}  max={100}  step={0.5}  value={fx}            onChange={setFx}/>
          <Slider label="RoDTEP rebate (%)"           min={0}   max={3}    step={0.1}  value={rodtepPct}     onChange={setRodtepPct}/>
        </div>

        <div>
          <div className="kpi-grid" style={{gridTemplateColumns:'1fr 1fr'}}>
            <div className="card"><h3>Total landed cost</h3><div className="big">₹{calc.total.toFixed(0)}/kg</div><div className="sub">Yield-adjusted raw + all stages</div></div>
            <div className="card"><h3>Gross revenue</h3><div className="big">₹{calc.revenue.toFixed(0)}/kg</div><div className="sub">FOB ₹{calc.fobINR.toFixed(0)} + RoDTEP ₹{calc.rodtepINR.toFixed(1)}</div></div>
            <div className="card"><h3>Gross margin / kg</h3><div className="big" style={{color: calc.margin>0?'var(--c-good)':'var(--c-bad)'}}>₹{calc.margin.toFixed(0)}</div><div className="sub">{calc.margin>0?'Profit':'Loss'} per kg</div></div>
            <div className="card"><h3>Gross margin %</h3><div className="big" style={{color: calc.marginPct>10?'var(--c-good)':calc.marginPct>0?'var(--c-warn)':'var(--c-bad)'}}>{calc.marginPct.toFixed(1)}%</div><div className="sub">Target: 14-22% blended</div></div>
          </div>

          <div className="card" style={{marginTop:14}}>
            <h3>Cost stack waterfall</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={breakdown} margin={{top:10,right:10,left:0,bottom:35}}>
                <CartesianGrid strokeDasharray="3 3" stroke="#243757"/>
                <XAxis dataKey="stage" stroke="#9eb0c9" fontSize={10} angle={-22} textAnchor="end" height={60}/>
                <YAxis stroke="#9eb0c9" fontSize={11}/>
                <Tooltip contentStyle={{background:'#0b1220',border:'1px solid #243757',color:'#e6edf7'}}/>
                <Bar dataKey="val" name="₹/kg">
                  {breakdown.map((b,i) => <Cell key={i} fill={b.color}/>)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="callout" style={{marginTop:10}}>
            <strong>Interpretation:</strong> Yield is the most leveraged variable. Moving from
            66% → 70% on vannamei (₹{(farmGate/0.66).toFixed(0)} → ₹{(farmGate/0.70).toFixed(0)} effective raw) saves
            ₹{((farmGate/0.66)-(farmGate/0.70)).toFixed(0)}/kg — bigger than any other intervention. After yield,
            farm-gate price (when supplier moats kick in) and freight (when annual liner contracts hold) matter most.
          </div>
        </div>
      </div>
    </>
  );
}

function Slider({ label, min, max, step, value, onChange }) {
  return (
    <div style={{marginBottom:12}}>
      <div style={{display:'flex',justifyContent:'space-between',marginBottom:4}}>
        <span style={{fontSize:12,color:'var(--c-text-dim)'}}>{label}</span>
        <span style={{fontSize:12,color:'var(--c-text)',fontWeight:600}}>{value}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={e => onChange(parseFloat(e.target.value))}
        style={{width:'100%', accentColor:'var(--c-accent)'}}/>
    </div>
  );
}
