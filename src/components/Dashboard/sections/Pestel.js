import React from 'react';
import { pestel } from '../../../data/strategy';

const ICONS = { political:'⚖', economic:'💹', social:'👥', technological:'⚙', environmental:'🌿', legal:'§' };
const IMPACT_PILL = (impact) => {
  if (impact === '+') return ['pill-good','Positive'];
  if (impact === '-') return ['pill-bad','Negative'];
  if (impact === '+/-') return ['pill-warn','Mixed'];
  return ['pill-mute','Neutral'];
};

export default function Pestel() {
  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">Strategy</div>
        <h1 className="sec-title">PESTEL Analysis</h1>
        <p className="sec-sub">
          Six lenses on the macro environment for a Maharashtra seafood-export venture.
          Each factor is rated for impact direction (positive / negative / mixed).
        </p>
      </div>

      {Object.entries(pestel).map(([k, factors]) => (
        <div className="section-block" key={k}>
          <h2 style={{textTransform:'capitalize'}}>{ICONS[k]} {k}</h2>
          <div className="tbl-wrap">
            <table className="tbl">
              <thead><tr><th>Factor</th><th>Impact</th><th>Detail</th></tr></thead>
              <tbody>
                {factors.map((f,i) => {
                  const [cls, label] = IMPACT_PILL(f.impact);
                  return (
                    <tr key={i}>
                      <td><strong>{f.factor}</strong></td>
                      <td><span className={`pill ${cls}`}>{label}</span></td>
                      <td style={{fontSize:13}}>{f.detail}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </>
  );
}
