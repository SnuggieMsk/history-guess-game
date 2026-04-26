import React, { useState, useMemo } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';

// Interactive live-cargo economics for lobster/mud crab BOM → HKG etc.
// Based on v2 docs per-shipment cost structure.

function Slider({ label, min, max, step, value, onChange, unit }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
        <span style={{ fontSize: 12, color: 'var(--c-text-dim)' }}>{label}</span>
        <span style={{ fontSize: 12, color: 'var(--c-text)', fontWeight: 600 }}>{value}{unit}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={e => onChange(parseFloat(e.target.value))}
        style={{ width: '100%', accentColor: 'var(--c-accent)' }} />
    </div>
  );
}

export default function LiveCargoCalcV2() {
  // Cargo parameters
  const [cargoKg,          setCargoKg]          = useState(500);
  const [fobUSD,           setFobUSD]           = useState(30);
  const [mortalityPct,     setMortalityPct]     = useState(10);
  const [buyerDiscountPct, setBuyerDiscountPct] = useState(8);

  // Cost parameters
  const [purgingCostINR,   setPurgingCostINR]   = useState(6500);
  const [landTruckINR,     setLandTruckINR]     = useState(18000);
  const [airportHandleINR, setAirportHandleINR] = useState(4500);
  const [airFreightINRperKg, setAirFreightINRperKg] = useState(220);
  const [destHandleINR,    setDestHandleINR]    = useState(8000);
  const [docsINR,          setDocsINR]          = useState(3000);
  const [insurancePctOfCargo, setInsurancePctOfCargo] = useState(3);

  // FX
  const [fx, setFx] = useState(87);

  const calc = useMemo(() => {
    const survivedKg = cargoKg * (1 - mortalityPct / 100);
    // Revenue after buyer allowance adjustment for mortality
    const grossRevUSD = survivedKg * fobUSD * (1 - buyerDiscountPct / 100);
    const grossRevINR = grossRevUSD * fx;
    // Costs
    const airFreightINR = cargoKg * airFreightINRperKg;
    const cargoValueINR = cargoKg * fobUSD * fx;
    const insuranceINR = cargoValueINR * (insurancePctOfCargo / 100);
    const totalCostINR = purgingCostINR + landTruckINR + airportHandleINR + airFreightINR + destHandleINR + docsINR + insuranceINR;
    const marginINR = grossRevINR - totalCostINR;
    const marginPct = grossRevINR > 0 ? (marginINR / grossRevINR) * 100 : 0;
    const perKgLandedCost = totalCostINR / cargoKg;
    return {
      survivedKg, grossRevUSD, grossRevINR, airFreightINR, insuranceINR, totalCostINR,
      marginINR, marginPct, perKgLandedCost,
    };
  }, [cargoKg, fobUSD, mortalityPct, buyerDiscountPct, purgingCostINR, landTruckINR, airportHandleINR, airFreightINRperKg, destHandleINR, docsINR, insurancePctOfCargo, fx]);

  const breakdown = [
    { stage: 'Purging + cool + packing',    val: calc.insuranceINR ? purgingCostINR : 0, color: '#0d3b66' },
    { stage: 'Inland cool-truck',            val: landTruckINR,                           color: '#5fb3e3' },
    { stage: 'Airport handle (origin)',     val: airportHandleINR,                       color: '#7fbcd0' },
    { stage: 'Air freight',                  val: calc.airFreightINR,                     color: '#92c7b6' },
    { stage: 'Destination handling',         val: destHandleINR,                          color: '#cfd76f' },
    { stage: 'Documentation (AQCS+MPEDA)',   val: docsINR,                                color: '#b8860b' },
    { stage: 'Insurance (3% cargo value)',   val: calc.insuranceINR,                      color: '#c5a565' },
  ].filter(b => b.val > 0);
  breakdown[0].val = purgingCostINR;

  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">V2 · Interactive Calculator</div>
        <h1 className="sec-title">Live-Cargo Unit Economics</h1>
        <p className="sec-sub">
          Drag sliders to model a live-lobster or live-mud-crab shipment BOM → HKG
          (or equivalent). Defaults are for a 500 kg lobster cargo at FOB $30/kg
          with 10% mortality allowance. Watch margin shift as you increase mortality
          or tighten freight.
        </p>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <h3>Cargo parameters</h3>
          <Slider label="Cargo size" min={50} max={1500} step={10} value={cargoKg} onChange={setCargoKg} unit=" kg" />
          <Slider label="FOB price" min={10} max={40} step={0.5} value={fobUSD} onChange={setFobUSD} unit=" USD/kg" />
          <Slider label="Mortality %" min={0} max={25} step={0.5} value={mortalityPct} onChange={setMortalityPct} unit="%" />
          <Slider label="Buyer invoice discount (mortality allowance)" min={0} max={20} step={0.5} value={buyerDiscountPct} onChange={setBuyerDiscountPct} unit="%" />
          <Slider label="FX rate" min={75} max={100} step={0.5} value={fx} onChange={setFx} unit=" ₹/USD" />
          <h3 style={{ marginTop: 20 }}>Cost parameters</h3>
          <Slider label="Purging + cool + packing materials" min={2000} max={15000} step={500} value={purgingCostINR} onChange={setPurgingCostINR} unit=" INR" />
          <Slider label="Inland cool-truck (Ratnagiri → BOM)" min={5000} max={40000} step={1000} value={landTruckINR} onChange={setLandTruckINR} unit=" INR" />
          <Slider label="BOM airport handling" min={2000} max={12000} step={500} value={airportHandleINR} onChange={setAirportHandleINR} unit=" INR" />
          <Slider label="Air freight rate" min={120} max={360} step={5} value={airFreightINRperKg} onChange={setAirFreightINRperKg} unit=" INR/kg" />
          <Slider label="Destination handling + clearance" min={3000} max={20000} step={500} value={destHandleINR} onChange={setDestHandleINR} unit=" INR" />
          <Slider label="Per-shipment documentation" min={1500} max={10000} step={250} value={docsINR} onChange={setDocsINR} unit=" INR" />
          <Slider label="Insurance (% of cargo value)" min={1} max={6} step={0.1} value={insurancePctOfCargo} onChange={setInsurancePctOfCargo} unit="%" />
        </div>

        <div>
          <div className="kpi-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div className="card"><h3>Survived cargo</h3>
              <div className="big">{calc.survivedKg.toFixed(0)} kg</div>
              <div className="sub">of {cargoKg} kg loaded</div>
            </div>
            <div className="card"><h3>Gross revenue</h3>
              <div className="big">₹{calc.grossRevINR.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</div>
              <div className="sub">${calc.grossRevUSD.toLocaleString('en-US', { maximumFractionDigits: 0 })}</div>
            </div>
            <div className="card"><h3>Total landed cost</h3>
              <div className="big">₹{calc.totalCostINR.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</div>
              <div className="sub">≈ ₹{calc.perKgLandedCost.toFixed(0)}/kg loaded</div>
            </div>
            <div className="card"><h3>Margin (₹)</h3>
              <div className="big" style={{ color: calc.marginINR > 0 ? 'var(--c-good)' : 'var(--c-bad)' }}>₹{calc.marginINR.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</div>
              <div className="sub" style={{ color: calc.marginPct > 20 ? 'var(--c-good)' : calc.marginPct > 0 ? 'var(--c-warn)' : 'var(--c-bad)' }}>{calc.marginPct.toFixed(1)}% GM</div>
            </div>
          </div>

          <div className="card" style={{ marginTop: 14 }}>
            <h3>Cost stack (₹)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={breakdown} margin={{ top: 10, right: 10, left: 0, bottom: 30 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0d9c8" />
                <XAxis dataKey="stage" stroke="#5c6272" fontSize={9.5} angle={-22} textAnchor="end" height={56} />
                <YAxis stroke="#5c6272" fontSize={11} />
                <Tooltip contentStyle={{ background: '#ffffff', border: '1px solid #e0d9c8', color: '#1a1f36' }}
                  formatter={(v) => [`₹${Number(v).toLocaleString('en-IN')}`, 'Cost']} />
                <Bar dataKey="val" name="₹">
                  {breakdown.map((b, i) => <Cell key={i} fill={b.color} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="callout" style={{ marginTop: 10 }}>
            <strong>Interpretation:</strong> Mortality is the most leveraged variable.
            {' '}Dropping mortality from {mortalityPct}% to {Math.max(0, mortalityPct - 5)}% lifts realised revenue by ≈{(5 * cargoKg * fobUSD * fx / 100 / 1000).toFixed(1)} kINR on this shipment.
            {' '}Air-freight rate and per-shipment fixed costs (docs, handling) dominate below ~300 kg; above 500 kg, unit economics flatten.
            {' '}Target: ₹{(0.28 * calc.grossRevINR).toFixed(0).toLocaleString('en-IN')} margin at 28% GM.
          </div>
        </div>
      </div>

      <div className="section-block">
        <h2>Mortality vs transit time (observed)</h2>
        <div className="card">
          <table className="tbl">
            <thead><tr><th>Total transit time</th><th>Expected mortality</th><th>Note</th></tr></thead>
            <tbody>
              <tr><td>&lt; 16 hr</td><td style={{ color: 'var(--c-good)' }}>&lt; 3%</td><td style={{ fontSize: 12 }}>Best-case — direct BOM/PNQ → HKG overnight</td></tr>
              <tr><td>16–20 hr</td><td style={{ color: 'var(--c-good)' }}>3–5%</td><td style={{ fontSize: 12 }}>Emirates via DXB standard</td></tr>
              <tr><td>20–28 hr</td><td style={{ color: 'var(--c-warn)' }}>5–10%</td><td style={{ fontSize: 12 }}>Qatar via DOH or 1-stop Lufthansa</td></tr>
              <tr><td>&gt; 28 hr</td><td style={{ color: 'var(--c-bad)' }}>10–18%</td><td style={{ fontSize: 12 }}>Delay/re-route — avoid if possible</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="section-block">
        <h2>Target unit economics summary (Y3)</h2>
        <div className="tbl-wrap">
          <table className="tbl">
            <thead><tr><th>Product</th><th>Tonnage</th><th>Arrival-live %</th><th>FOB $/kg</th><th>Revenue ₹ cr</th><th>GM</th></tr></thead>
            <tbody>
              <tr><td><strong>Lobster live</strong></td><td>60</td><td>90%</td><td>30</td><td>14.1</td><td style={{ color: 'var(--c-good)' }}>30%</td></tr>
              <tr><td><strong>Mud crab live</strong></td><td>80</td><td>93%</td><td>16.5</td><td>10.7</td><td style={{ color: 'var(--c-good)' }}>26%</td></tr>
              <tr style={{ fontWeight: 700, background: 'var(--c-surface-2)' }}>
                <td>Combined Pillar B (live)</td><td>140</td><td>—</td><td>—</td><td>24.8</td><td>28% blended</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
