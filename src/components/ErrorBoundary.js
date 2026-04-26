import React from 'react';

/**
 * Section-scoped error boundary.
 * Wraps each route so a single component throwing doesn't blank the whole dashboard.
 */
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    this.setState({ info });
    // Production-safe: log only the error message, not full stack with file paths.
    // Dev mode (NODE_ENV=development) gets full detail.
    if (typeof console !== 'undefined') {
      if (process.env.NODE_ENV === 'development') {
        console.error('Section error boundary caught:', error, info);
      } else {
        console.error('Section error:', error?.message || 'render failed');
      }
    }
  }

  render() {
    if (this.state.hasError) {
      const isDev = process.env.NODE_ENV === 'development';
      return (
        <div style={{padding:32, maxWidth:720, margin:'40px auto'}} role="alert" aria-live="polite">
          <div className="card" style={{borderLeft:'4px solid #a8322d'}}>
            <h2 style={{fontFamily:'Georgia,serif', fontSize:22, color:'#a8322d', marginBottom:12}}>
              ⚠ This section failed to render
            </h2>
            <p style={{fontSize:13, color:'#1a1f36', marginBottom:14}}>
              The rest of the dashboard is unaffected — pick another route from the sidebar.
              {isDev ? ' Error details below for the developer; this is not lost data.' : ' Try again, or report this to the team.'}
            </p>
            {isDev && (
              <details style={{fontSize:12, fontFamily:'Menlo,monospace', background:'#fbf8f1', padding:12, borderRadius:4}}>
                <summary style={{cursor:'pointer', color:'#5c6272'}}>Error details (dev mode)</summary>
                <pre style={{marginTop:10, whiteSpace:'pre-wrap', color:'#a8322d'}}>{String(this.state.error?.stack || this.state.error)}</pre>
              </details>
            )}
            {!isDev && this.state.error?.message && (
              <p style={{fontSize:12, color:'#5c6272', fontStyle:'italic'}}>
                Reference: <code>{this.state.error.message.slice(0, 80)}</code>
              </p>
            )}
            <button onClick={() => this.setState({hasError:false, error:null, info:null})}
              type="button"
              aria-label="Retry rendering this section"
              style={{marginTop:14, padding:'8px 16px', background:'#0d3b66', color:'#fff', border:'none', borderRadius:4, cursor:'pointer', fontSize:12, fontWeight:600}}>
              Try again
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
