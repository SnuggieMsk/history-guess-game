// Creates build/404.html as a copy of build/index.html AND injects the
// single-page-app GitHub Pages redirect snippet into index.html.
//
// How this works:
//   1. GH Pages serves 404.html for any unknown path (e.g. /species, /moat).
//   2. 404.html is a copy of our index.html — React boots normally, then
//      BrowserRouter looks at the current URL and renders the right route.
//   3. A small inline script in both files preserves the original path so
//      the browser address bar stays clean after the fallback load.
//
// Reference: https://github.com/rafgraph/spa-github-pages

const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '..', 'build');
const indexPath = path.join(buildDir, 'index.html');
const notFoundPath = path.join(buildDir, '404.html');

if (!fs.existsSync(indexPath)) {
  console.error('build/index.html not found — did the build run?');
  process.exit(1);
}

// The redirect snippet injected into index.html <head>.
// If the URL looks like it was reconstructed by the 404 shim (contains a `?/`
// query segment), rewrite it back to the original path before React Router sees it.
const redirectSnippet = `
    <script>
      (function (l) {
        if (l.search[1] === '/') {
          var decoded = l.search.slice(1).split('&').map(function (s) {
            return s.replace(/~and~/g, '&');
          }).join('?');
          window.history.replaceState(null, null,
              l.pathname.slice(0, -1) + decoded + l.hash
          );
        }
      }(window.location))
    </script>`;

let index = fs.readFileSync(indexPath, 'utf8');
if (!index.includes('window.history.replaceState')) {
  index = index.replace('<head>', '<head>' + redirectSnippet);
  fs.writeFileSync(indexPath, index, 'utf8');
}

// 404.html is an exact copy of the patched index.html
fs.writeFileSync(notFoundPath, index, 'utf8');

console.log('✓ build/404.html created and SPA redirect snippet injected');
