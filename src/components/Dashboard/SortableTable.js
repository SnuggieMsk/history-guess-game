import React, { useState, useMemo } from 'react';

/**
 * Generic sortable + filterable table.
 *
 * Usage:
 *   <SortableTable
 *     columns={[
 *       { key: 'name', label: 'Name' },
 *       { key: 'rev', label: 'Revenue ₹cr', numeric: true, format: v => `₹${v}` },
 *     ]}
 *     rows={[{ name: 'A', rev: 100 }, ...]}
 *     defaultSort="rev"
 *     defaultDir="desc"
 *     filterable
 *   />
 */
export default function SortableTable({ columns, rows, defaultSort, defaultDir = 'asc', filterable = false }) {
  const [sortKey, setSortKey] = useState(defaultSort || (columns[0] && columns[0].key));
  const [sortDir, setSortDir] = useState(defaultDir);
  const [filter, setFilter] = useState('');

  const sorted = useMemo(() => {
    let result = [...rows];
    if (filterable && filter) {
      const f = filter.toLowerCase();
      result = result.filter(r =>
        columns.some(c => String(r[c.key] ?? '').toLowerCase().includes(f))
      );
    }
    if (sortKey) {
      result.sort((a, b) => {
        const va = a[sortKey], vb = b[sortKey];
        const col = columns.find(c => c.key === sortKey);
        let cmp = 0;
        if (col?.numeric) {
          cmp = (parseFloat(va) || 0) - (parseFloat(vb) || 0);
        } else {
          cmp = String(va ?? '').localeCompare(String(vb ?? ''));
        }
        return sortDir === 'asc' ? cmp : -cmp;
      });
    }
    return result;
  }, [rows, sortKey, sortDir, filter, columns, filterable]);

  const onHeaderClick = (key) => {
    if (sortKey === key) {
      setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDir('asc');
    }
  };

  return (
    <div>
      {filterable && (
        <input
          type="text"
          value={filter}
          onChange={e => setFilter(e.target.value)}
          placeholder={`Filter ${rows.length} rows…`}
          style={{
            width: '100%', padding: '8px 12px',
            border: '1px solid var(--c-border)', borderRadius: 4,
            fontSize: 13, marginBottom: 10,
            background: 'var(--c-surface)', color: 'var(--c-text)',
          }}/>
      )}
      <div className="tbl-wrap">
        <table className="tbl">
          <thead>
            <tr>
              {columns.map(c => (
                <th key={c.key} onClick={() => onHeaderClick(c.key)}
                    className={c.numeric ? 'num' : ''}
                    style={{ cursor: 'pointer', userSelect: 'none' }}>
                  {c.label}
                  {sortKey === c.key && <span style={{marginLeft:6, color:'var(--c-accent)'}}>{sortDir === 'asc' ? '▲' : '▼'}</span>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sorted.map((r, i) => (
              <tr key={i}>
                {columns.map(c => (
                  <td key={c.key} className={c.numeric ? 'num' : ''} style={c.style || {}}>
                    {c.render ? c.render(r[c.key], r) : (c.format ? c.format(r[c.key]) : (r[c.key] ?? ''))}
                  </td>
                ))}
              </tr>
            ))}
            {sorted.length === 0 && (
              <tr><td colSpan={columns.length} style={{textAlign:'center', padding:24, color:'var(--c-text-dim)'}}>
                No matches.
              </td></tr>
            )}
          </tbody>
        </table>
      </div>
      {filterable && (
        <p style={{fontSize:11, color:'var(--c-text-dim)', marginTop:6}}>
          Showing {sorted.length} of {rows.length} · click any column header to sort
        </p>
      )}
    </div>
  );
}
