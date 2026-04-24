import React from 'react';
import { buyerMarkets } from '../../../data/v2Buyers';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';

const MARKET_COLOR = {
  'hk':'#0d3b66','sg':'#2d6a4f','jp':'#a8322d','es':'#c5a565',
  'us':'#7a5b8c','gcc':'#b8860b','cn':'#5fb3e3'
};

export default function BuyersV2() {
  const totalRev = buyerMarkets.reduce((s, m) => s + m.revINRcr, 0);
  const pieData = buyerMarkets.map(m => ({ name: m.market, value: m.revINRcr, color: MARKET_COLOR[m.id] }));

  return (
    <>
      <div className="sec-head">
        <div className="sec-eyebrow">V2 · Named Buyer Directory</div>
        <h1 className="sec-title">Who Actually Writes the Cheque</h1>
        <p className="sec-sub">
          {buyerMarkets.length} target markets · 40+ named importers, sogo shosha, distributors,
          and retail buyers. Entry path, trade fair, credit terms, and regulatory gate for each.
          Y3 revenue allocation ₹{totalRev} cr across markets.
        </p>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <h3>Y3 revenue split by market</h3>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={pieData}
                outerRadius={95}
                label={({name, value, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                labelLine={{stroke:'#5c6272'}}
                fontSize={11}
              >
                {pieData.map((e, i) => <Cell key={i} fill={e.color} />)}
              </Pie>
              <Tooltip contentStyle={{background:'#ffffff',border:'1px solid #e0d9c8',color:'#1a1f36'}}
                formatter={(v) => [`₹${v} cr`, 'Revenue']}/>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="card">
          <h3>Entry sequence by year</h3>
          <div style={{ position: 'relative', paddingLeft: 18, borderLeft: '2px solid var(--c-border)' }}>
            {[
              { year: 'Y1 (M10-M18)', markets: ['GCC (Gulfood, Feb)', 'China wholesale (Nov)', 'Singapore (FHA, Apr)'], color: '#2d6a4f' },
              { year: 'Y1 end (M18-M24)', markets: ['Hong Kong live (Aug expo)'], color: '#0d3b66' },
              { year: 'Y2 (M24-M36)', markets: ['Spain cephalopods (Conxemar Oct)', 'USA commodity (Boston SENA Mar)'], color: '#c5a565' },
              { year: 'Y2 end (M36)', markets: ['Japan (Tokyo seafood show Aug, post-MSC)'], color: '#a8322d' },
              { year: 'Y3+ (M36+)', markets: ['EU retail (Barcelona Apr)', 'USA premium MSC retail'], color: '#7a5b8c' },
            ].map((e, i) => (
              <div key={i} style={{ marginBottom: 16, position: 'relative' }}>
                <span style={{ position: 'absolute', left: -24, top: 4, width: 12, height: 12, background: e.color, borderRadius: '50%', border: '2px solid #fff' }} />
                <div style={{ fontSize: 12, fontWeight: 700, color: e.color, textTransform: 'uppercase', letterSpacing: 0.5 }}>{e.year}</div>
                <div style={{ fontSize: 13, color: 'var(--c-text)', marginTop: 2 }}>{e.markets.join(' · ')}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-block">
        <h2>By market — named buyers and entry paths</h2>
        {buyerMarkets.map(m => (
          <div key={m.id} className="card" style={{ marginBottom: 16, borderLeft: `4px solid ${MARKET_COLOR[m.id]}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 12, flexWrap: 'wrap' }}>
              <div>
                <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 20, color: 'var(--c-text)', fontWeight: 600 }}>{m.market}</h3>
                <div style={{ fontSize: 12, color: 'var(--c-text-dim)', marginTop: 2, fontStyle: 'italic' }}>{m.role}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: 'Georgia, serif', fontSize: 22, fontWeight: 600, color: MARKET_COLOR[m.id] }}>₹{m.revINRcr} cr</div>
                <div style={{ fontSize: 11, color: 'var(--c-text-dim)', textTransform: 'uppercase', letterSpacing: 1 }}>{m.shareY3}% of Y3</div>
              </div>
            </div>

            <div className="tbl-wrap" style={{ marginBottom: 14 }}>
              <table className="tbl">
                <thead><tr><th>Buyer</th><th>Type</th><th>Note</th></tr></thead>
                <tbody>
                  {m.buyers.map((b, i) => (
                    <tr key={i}>
                      <td><strong>{b.name}</strong></td>
                      <td><span className="pill pill-mute">{b.type}</span></td>
                      <td style={{ fontSize: 12 }}>{b.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-2">
              <div>
                <strong style={{ fontSize: 11, color: MARKET_COLOR[m.id], textTransform: 'uppercase', letterSpacing: 1 }}>End-buyer targets</strong>
                <p style={{ fontSize: 13, color: 'var(--c-text)', marginTop: 4 }}>{m.endBuyers.join(' · ')}</p>
              </div>
              <div>
                <strong style={{ fontSize: 11, color: MARKET_COLOR[m.id], textTransform: 'uppercase', letterSpacing: 1 }}>Key facts</strong>
                <div style={{ fontSize: 12.5, color: 'var(--c-text)', marginTop: 4, lineHeight: 1.7 }}>
                  <div><strong>Trade fair:</strong> {m.tradeFair}</div>
                  <div><strong>Regulatory:</strong> {m.regulatory}</div>
                  <div><strong>Credit:</strong> {m.credit}</div>
                </div>
              </div>
            </div>

            <div className="callout" style={{ marginTop: 12 }}>
              <strong>Entry path: </strong>{m.entryPath}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
