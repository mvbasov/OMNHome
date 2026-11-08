Title: Adapter for old pages
Date: 2026-11-06 20:30:00
Category: Notes
Tags: CSS, Theme, OMN-Go user

<!--- DESCRIPTION:
v26.11.10
OMN-Go 26.11.7 gives each color token, class and id of the application the prefix "omn-". A page made before this version can use an old name, for example var(--bg) or the class bg-yellow. OMN-Go 26.11.10 also renames the panel classes, for example omn-config-panel to omn-card. This page makes an adapter for these old names. It puts the adapter into css/omn-go-custom.css, checks it, and removes it.
--->

<details class="pa-about">
<summary><i class="material-icons">info</i> How this page works <span class="pa-version" title="Page version">v26.11.10</span></summary>

OMN-Go 26.11.7 gives each color token, class and id of the application the prefix `omn-`. For example, `--bg` is now `--omn-bg`, and the class `bg-yellow` is now `omn-bg-yellow`. A page made before this version can use an old name. Then that page loses some of its colors and styles.

The adapter is one marked block in `css/omn-go-custom.css`. Each page loads this file last. The adapter has these parts:

- **Tokens.** For each token, the adapter sets the old name to the new token, for example `--bg: var(--omn-bg)`. The old name follows the theme and the color scheme.
- **Classes for notes.** The adapter copies the OMN-Go rules of the classes that a note can use, with the old names:
    - `hidden`, `title-arrow` and `tagmarkselected`
    - the table of contents: `id="TOC"`, `TOCEntry` and `TOCLevel1` to `TOCLevel6`
    - the color marks: `bg-yellow`, `bg-aqua`, `fg-red` and `fg-green`
    - the panel classes: `config-panel` and the other `config-` classes
- **Panel classes of OMN-Go 26.11.7 to 26.11.9.** OMN-Go 26.11.10 renames `omn-config-panel` to `omn-card`, and `omn-config-title`, `omn-config-field`, `omn-config-hint`, `omn-config-link-row` and `omn-config-link-btn` to `omn-card-` names. The adapter also copies the rules for these names. The rules of `omn-config-label`, `omn-config-input`, `omn-config-checkbox-row`, `omn-config-save-row` and `omn-config-save-btn` are now in `omn-go-config.css`, which loads only on the Config page. The adapter copies these rules too, so they work on each page.

The page makes the adapter from `css/OMN-Go/omn-go-core.css` and `css/OMN-Go/omn-go-config.css` of the installed version. After an update of OMN-Go, check the adapter. If the check finds a difference, put the adapter into the file again.

The adapter cannot change a script or an id. These old names need an edit in the page:

- `#preview` is now `#omn-preview`.
- `#content` is now `#omn-content`.
- `#status` is now `#omn-page-footer`.
- `document.getElementById('quickPanel')` is now `document.getElementById('omn-quick-panel')`.
- `classList.remove('hidden')` on an OMN-Go element is now `classList.remove('omn-hidden')`.

When no page uses the old names, remove the adapter. Only the admin can write `css/omn-go-custom.css`. On another device, copy the adapter text and add it to the file yourself.

**Button icons**

- <i class="material-icons">build</i> Make the adapter
- <i class="material-icons">save</i> Put the adapter into omn-go-custom.css
- <i class="material-icons">fact_check</i> Check the adapter
- <i class="material-icons">delete</i> Remove the adapter from omn-go-custom.css
- <i class="material-icons">content_copy</i> Copy the adapter text

</details>

<style>
.pa-about { margin:0 0 1rem; padding:.6rem .8rem; border:1px solid var(--omn-border); border-radius:8px; background:var(--omn-bg-surface); }
.pa-about summary { cursor:pointer; font-weight:600; display:flex; align-items:center; gap:.4rem; }
.pa-version { margin-left:auto; font-weight:400; font-size:.8rem; color:var(--omn-text-faint); }
.pa-root { display:flex; flex-direction:column; gap:.8rem; }
.pa-state { padding:.7rem .9rem; border:1px solid var(--omn-border-card); border-radius:8px; background:var(--omn-bg-surface); display:flex; align-items:center; gap:.6rem; }
.pa-state .material-icons { font-size:1.6rem; }
.pa-state--on .material-icons { color:var(--omn-success); }
.pa-state--old .material-icons { color:var(--omn-danger); }
.pa-state--off .material-icons { color:var(--omn-text-faint); }
.pa-state small { display:block; color:var(--omn-text-muted); }
.pa-parts { display:flex; flex-wrap:wrap; gap:.4rem 1.2rem; }
.pa-parts label { display:flex; align-items:center; gap:.4rem; cursor:pointer; }
.pa-bar { display:flex; flex-wrap:wrap; gap:.5rem; }
.pa-root button { display:inline-flex; align-items:center; gap:.35rem; min-height:2.5rem; padding:0 .9rem; border:1px solid var(--omn-border); border-radius:6px; background:var(--omn-bg-surface); color:var(--omn-text); font:inherit; cursor:pointer; }
.pa-root button:hover { background:var(--omn-bg-hover); }
.pa-root button.pa-primary { background:var(--omn-accent); border-color:var(--omn-accent); color:var(--omn-on-accent); }
.pa-root button.pa-primary:hover { background:var(--omn-accent-hover); }
.pa-root button.pa-danger { color:var(--omn-danger); }
.pa-root button:disabled { opacity:.5; cursor:default; }
.pa-text { width:100%; box-sizing:border-box; min-height:12rem; padding:.5rem; border:1px solid var(--omn-border); border-radius:6px; background:var(--omn-bg-inset); color:var(--omn-text); font:12px/1.4 ui-monospace, Menlo, Consolas, monospace; white-space:pre; overflow-x:auto; }
.pa-meta { font-size:.85rem; color:var(--omn-text-muted); }
.pa-checks { margin:0; padding:0; list-style:none; display:flex; flex-direction:column; gap:.3rem; }
.pa-checks li { display:flex; gap:.4rem; align-items:flex-start; }
.pa-checks li span { color:var(--omn-text); }
.pa-checks .material-icons { font-size:1.15rem; }
.pa-ok { color:var(--omn-success); }
.pa-bad { color:var(--omn-danger); }
.pa-info { color:var(--omn-text-faint); }
.pa-status { min-height:1.4em; font-size:.9rem; }
.pa-status--ok { color:var(--omn-success); }
.pa-status--err { color:var(--omn-danger); }
@media (max-width: 640px) {
  .pa-root button { flex:1 1 auto; justify-content:center; }
}
</style>

<div id="paRoot" class="pa-root">Loading…</div>
<div id="paStatus" class="pa-status"></div>

<script type="module">{
  'use strict';
  const CORE_CSS = '/css/OMN-Go/omn-go-core.css';
  const CUSTOM_CSS = '/css/omn-go-custom.css';
  const BLOCK_START = '/* ====OMN-GO-ADAPTER-BEGIN==== */';
  const BLOCK_END = '/* ====OMN-GO-ADAPTER-END==== */';
  const BLOCK_RE = /\/\* ====OMN-GO-ADAPTER-BEGIN==== \*\/[\s\S]*?\/\* ====OMN-GO-ADAPTER-END==== \*\//;
  const CONFIG_CSS = '/css/OMN-Go/omn-go-config.css';
  /* The classes and the ids that a note can use, in two sets of old names:
     the names before OMN-Go 26.11.7, then the names of OMN-Go 26.11.7 to
     26.11.9. Each entry is the old name, then the names of that class in the
     installed version. The adapter copies the rules of the new names with the
     old name. A name that is the same in the two columns gets a copy of its
     rule. Thus a rule of omn-go-config.css also works on a note page. */
  const SETS = [
    {
      '.hidden': ['.omn-hidden'],
      '.title-arrow': ['.omn-title-arrow'],
      '.tagmarkselected': ['.omn-tagmarkselected'],
      '#TOC': ['#omn-toc'],
      '.TOCEntry': ['.omn-toc-entry'],
      '.TOCLevel1': ['.omn-toc-level1'],
      '.TOCLevel2': ['.omn-toc-level2'],
      '.TOCLevel3': ['.omn-toc-level3'],
      '.TOCLevel4': ['.omn-toc-level4'],
      '.TOCLevel5': ['.omn-toc-level5'],
      '.TOCLevel6': ['.omn-toc-level6'],
      '.bg-yellow': ['.omn-bg-yellow'],
      '.bg-aqua': ['.omn-bg-aqua'],
      '.fg-red': ['.omn-fg-red'],
      '.fg-green': ['.omn-fg-green'],
      '.config-panel': ['.omn-card', '.omn-config-panel'],
      '.config-title': ['.omn-card-title', '.omn-config-title'],
      '.config-field': ['.omn-card-field', '.omn-config-field'],
      '.config-hint': ['.omn-card-hint', '.omn-config-hint'],
      '.config-link-row': ['.omn-card-link-row', '.omn-config-link-row'],
      '.config-link-btn': ['.omn-card-link-btn', '.omn-config-link-btn'],
      '.config-label': ['.omn-config-label'],
      '.config-input': ['.omn-config-input'],
      '.config-checkbox-row': ['.omn-config-checkbox-row'],
      '.config-save-row': ['.omn-config-save-row'],
      '.config-save-btn': ['.omn-config-save-btn']
    },
    {
      '.omn-config-panel': ['.omn-card'],
      '.omn-config-title': ['.omn-card-title'],
      '.omn-config-field': ['.omn-card-field'],
      '.omn-config-hint': ['.omn-card-hint'],
      '.omn-config-link-row': ['.omn-card-link-row'],
      '.omn-config-link-btn': ['.omn-card-link-btn'],
      '.omn-config-label': ['.omn-config-label'],
      '.omn-config-input': ['.omn-config-input'],
      '.omn-config-checkbox-row': ['.omn-config-checkbox-row'],
      '.omn-config-save-row': ['.omn-config-save-row'],
      '.omn-config-save-btn': ['.omn-config-save-btn']
    }
  ];
  /* A copied selector can keep these OMN-Go ids, because each page has them. */
  const PAGE_IDS = new Set(['#omn-preview', '#omn-content', '#omn-main-ui']);
  /* OLD_OF[i] gives the old name of each new name in set i. */
  const OLD_OF = SETS.map((set) => {
    const out = {};
    for (const old of Object.keys(set)) for (const n of set[old]) out[n] = old;
    return out;
  });
  const root = document.getElementById('paRoot');
  let useTokens = true;
  let useClasses = true;
  let coreCss = '';
  let configCss = '';
  let made = '';
  let checks = [];
  let state = null;   // 'on', 'old', 'off' or null
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
  function say(msg, ok) {
    const s = document.getElementById('paStatus');
    if (!s) return;
    s.textContent = msg;
    s.className = 'pa-status' + (msg ? (ok ? ' pa-status--ok' : ' pa-status--err') : '');
  }
  const version = () => (typeof APP_VERSION === 'string' && APP_VERSION) ? APP_VERSION : 'unknown';
  /* ---- Make the adapter ---- */
  /* tokenNames answers the name of each token of the theme maps. */
  function tokenNames(css) {
    const out = [];
    const re = /--omn-(?!light-|dark-)([\w-]+)\s*:\s*var\(--omn-light-/g;
    let m;
    while ((m = re.exec(css)) !== null) if (out.indexOf(m[1]) < 0) out.push(m[1]);
    return out;
  }
  /* cssRules answers each rule of css with its selector, its body and its
     @media or @supports wrapper. It drops @font-face and each other at-rule. */
  function cssRules(css) {
    css = css.replace(/\/\*[\s\S]*?\*\//g, '');
    const out = [];
    const walk = (text, wrap) => {
      let pos = 0;
      for (;;) {
        const open = text.indexOf('{', pos);
        if (open < 0) return;
        let depth = 1, j = open + 1;
        while (j < text.length && depth) {
          if (text[j] === '{') depth++; else if (text[j] === '}') depth--;
          j++;
        }
        let prelude = text.slice(pos, open);
        prelude = prelude.slice(prelude.lastIndexOf(';') + 1).trim();
        const inner = text.slice(open + 1, j - 1);
        if (/^@(media|supports)\b/.test(prelude)) walk(inner, prelude);
        else if (prelude && prelude[0] !== '@') out.push({ wrap: wrap, sel: prelude, body: inner.trim() });
        pos = j;
      }
    };
    walk(css, null);
    return out;
  }
  /* oldSelectors answers the selector with the old names of each set. Each
     OMN-Go name in the selector must be a note name or a page id. */
  function oldSelectors(sel) {
    const out = [];
    for (const map of OLD_OF) {
      let hit = false, ok = true;
      const v = sel.replace(/([.#])(omn-[\w-]+)/g, (all) => {
        if (map[all]) { hit = true; return map[all]; }
        if (!PAGE_IDS.has(all)) ok = false;
        return all;
      });
      if (ok && hit && out.indexOf(v) < 0) out.push(v);
    }
    return out;
  }
  function classRules(css) {
    const lines = [];
    for (const r of cssRules(css)) {
      const sels = [];
      for (const one of r.sel.split(',')) {
        for (const v of oldSelectors(one.trim())) if (sels.indexOf(v) < 0) sels.push(v);
      }
      if (!sels.length) continue;
      const body = r.body.split('\n').map((l) => l.trim()).filter(Boolean).map((l) => '  ' + l).join('\n');
      const rule = sels.join(',\n') + ' {\n' + body + '\n}';
      lines.push(r.wrap ? r.wrap + ' {\n' + rule.replace(/^/gm, '  ') + '\n}' : rule);
    }
    return lines;
  }
  function makeAdapter() {
    const parts = [
      BLOCK_START,
      '/* The adapter for pages made for an older OMN-Go. These pages use the',
      '   old names of the tokens and of the classes. The PageAdapter page made',
      '   this block for OMN-Go ' + version() + '. Do not edit the block. When no page',
      '   uses the old names, remove the block with the PageAdapter page. */'
    ];
    if (useTokens) {
      const names = tokenNames(coreCss);
      parts.push(':root {');
      for (const n of names) parts.push('  --' + n + ': var(--omn-' + n + ');');
      parts.push('}');
    }
    if (useClasses) parts.push(...classRules(coreCss + '\n' + configCss));
    parts.push(BLOCK_END);
    return parts.join('\n');
  }
  /* The part of a block after its head comment. Two blocks with the same
     body give the same result in each OMN-Go version. */
  const bodyOf = (block) => block.replace(BLOCK_START, '').replace(/^\s*\/\*[\s\S]*?\*\//, '').trim();
  /* ---- The file ---- */
  async function fetchText(url) {
    const res = await fetch(url + (url.indexOf('?') < 0 ? '?' : '&') + 't=' + Date.now(), { cache: 'no-store' });
    if (res.status === 404) return '';
    if (!res.ok) throw new Error('the server answered ' + res.status + ' for ' + url);
    return res.text();
  }
  async function saveCustomCss(content) {
    const fd = new FormData();
    fd.append('name', 'css/omn-go-custom.css');
    fd.append('content', content);
    const res = await fetch('/api/save', { method: 'POST', body: fd });
    if (!res.ok) throw new Error('the server answered ' + res.status + '. Only the admin can save this file');
  }
  /* reloadCustomCss loads the file again on this page, and waits for it. */
  function reloadCustomCss() {
    return new Promise((resolve) => {
      const link = document.querySelector('link[href*="omn-go-custom.css"]');
      if (!link) { resolve(false); return; }
      const done = () => resolve(true);
      link.addEventListener('load', done, { once: true });
      link.addEventListener('error', done, { once: true });
      link.href = CUSTOM_CSS + '?v=' + Date.now();
      setTimeout(done, 3000);
    });
  }
  async function placeAdapter() {
    made = makeAdapter();
    const current = await fetchText(CUSTOM_CSS);
    const next = BLOCK_RE.test(current)
      ? current.replace(BLOCK_RE, () => made)
      : (current.trim() ? current.trim() + '\n\n' : '') + made + '\n';
    await saveCustomCss(next);
    await reloadCustomCss();
    await runChecks();
    say('The adapter is in css/omn-go-custom.css.', true);
  }
  async function removeAdapter() {
    const current = await fetchText(CUSTOM_CSS);
    if (!BLOCK_RE.test(current)) {
      say('css/omn-go-custom.css has no adapter.', true);
      return;
    }
    if (!window.confirm('Remove the adapter from css/omn-go-custom.css? A page with old names loses some of its styles.')) return;
    const next = current.replace(BLOCK_RE, '').replace(/\n{3,}/g, '\n\n').trim();
    await saveCustomCss(next ? next + '\n' : '');
    await reloadCustomCss();
    await runChecks();
    say('The page removed the adapter from css/omn-go-custom.css.', true);
  }
  /* ---- Check ---- */
  /* probe puts a test element into the page, reads one style value, and
     removes the element. */
  function probe(cls, id, prop) {
    const el = document.createElement('span');
    if (cls) el.className = cls;
    if (id) el.id = id;
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    el.textContent = 'x';
    root.appendChild(el);
    const v = getComputedStyle(el)[prop];
    el.remove();
    return v;
  }
  async function runChecks() {
    checks = [];
    const add = (kind, text) => checks.push({ kind: kind, text: text });
    const current = await fetchText(CUSTOM_CSS);
    const m = current.match(BLOCK_RE);
    let wantTokens = false, wantClasses = false;
    if (!m) {
      state = 'off';
      add('info', 'css/omn-go-custom.css has no adapter.');
    } else {
      /* The check compares the placed parts with the same parts made now. */
      const placedTokens = /:root\s*\{/.test(m[0]);
      useTokens = placedTokens;
      useClasses = (bodyOf(m[0]).match(/\{/g) || []).length > (placedTokens ? 1 : 0);
      wantTokens = useTokens;
      wantClasses = useClasses;
      const fresh = makeAdapter();
      const sameBody = bodyOf(m[0]) === bodyOf(fresh);
      state = sameBody ? 'on' : 'old';
      const ver = (m[0].match(/for OMN-Go ([^\s.]+(?:\.[^\s.]+)*)\./) || [])[1];
      add('ok', 'css/omn-go-custom.css has the adapter' + (ver ? ' for OMN-Go ' + ver : '') + '.');
      if (sameBody) {
        add('ok', 'The adapter is the same as an adapter that this page makes now.');
      } else {
        add('bad', 'The adapter is different from an adapter that this page makes now. Put the adapter into the file again.');
      }
      if (!placedTokens) add('info', 'The adapter has no token part.');
      if (!useClasses) add('info', 'The adapter has no class part.');
    }
    await reloadCustomCss();
    const rs = getComputedStyle(document.documentElement);
    const pairs = ['bg', 'text', 'accent', 'code-bg'];
    const bad = pairs.filter((n) => rs.getPropertyValue('--' + n).trim() !== rs.getPropertyValue('--omn-' + n).trim() || !rs.getPropertyValue('--' + n).trim());
    if (!bad.length) add('ok', 'On this page, var(--bg), var(--text), var(--accent) and var(--code-bg) give the new colors.');
    else add(wantTokens ? 'bad' : 'info', 'On this page, these old tokens give no color: ' + bad.map((n) => '--' + n).join(', ') + '.');
    const hidden = probe('hidden', null, 'display') === 'none';
    const mark = probe('bg-yellow', null, 'backgroundColor') === probe('omn-bg-yellow', null, 'backgroundColor');
    const toc = probe(null, 'TOC', 'borderTopStyle') === probe(null, 'omn-toc', 'borderTopStyle');
    const cls = hidden && mark && toc;
    if (cls) add('ok', 'On this page, the classes hidden and bg-yellow, and the id TOC, have the OMN-Go styles.');
    else add(wantClasses ? 'bad' : 'info', 'On this page, these old names have no OMN-Go style: ' +
      [hidden ? '' : 'hidden', mark ? '' : 'bg-yellow', toc ? '' : 'TOC'].filter(Boolean).join(', ') + '.');
    render();
  }
  /* ---- View ---- */
  function stateHtml() {
    if (state === 'on') return '<div class="pa-state pa-state--on"><i class="material-icons">check_circle</i><span>The adapter is in css/omn-go-custom.css.<small>It is the same as an adapter that this page makes now.</small></span></div>';
    if (state === 'old') return '<div class="pa-state pa-state--old"><i class="material-icons">error</i><span>The adapter is in css/omn-go-custom.css, but it is different.<small>Make the adapter again and put it into the file.</small></span></div>';
    if (state === 'off') return '<div class="pa-state pa-state--off"><i class="material-icons">radio_button_unchecked</i><span>The adapter is not in css/omn-go-custom.css.<small>A page with old names loses some of its styles.</small></span></div>';
    return '';
  }
  function checksHtml() {
    if (!checks.length) return '';
    const icon = { ok: 'check', bad: 'close', info: 'remove' };
    return '<ul class="pa-checks">' + checks.map((c) =>
      '<li class="pa-' + c.kind + '"><i class="material-icons">' + icon[c.kind] + '</i><span>' + esc(c.text) + '</span></li>').join('') + '</ul>';
  }
  function render() {
    const lines = made ? made.split('\n').length : 0;
    root.innerHTML =
      stateHtml() +
      checksHtml() +
      '<div class="pa-parts">' +
      '<label><input type="checkbox" data-part="tokens"' + (useTokens ? ' checked' : '') + '> Tokens</label>' +
      '<label><input type="checkbox" data-part="classes"' + (useClasses ? ' checked' : '') + '> Classes for notes</label>' +
      '</div>' +
      '<div class="pa-bar">' +
      '<button type="button" data-act="make" title="Make the adapter"><i class="material-icons">build</i>Make</button>' +
      '<button type="button" class="pa-primary" data-act="place" title="Put the adapter into omn-go-custom.css"><i class="material-icons">save</i>Put</button>' +
      '<button type="button" data-act="check" title="Check the adapter"><i class="material-icons">fact_check</i>Check</button>' +
      '<button type="button" class="pa-danger" data-act="remove" title="Remove the adapter from omn-go-custom.css"' + (state === 'off' ? ' disabled' : '') + '><i class="material-icons">delete</i>Remove</button>' +
      '</div>' +
      (made
        ? '<textarea id="paText" class="pa-text" readonly wrap="off" spellcheck="false">' + esc(made) + '</textarea' + '>' +
          '<div class="pa-bar"><button type="button" data-act="copy" title="Copy the adapter text"><i class="material-icons">content_copy</i>Copy</button>' +
          '<span class="pa-meta">' + lines + ' lines.</span></div>'
        : '<p class="pa-meta">Make the adapter to see its text before you put it into the file.</p>') +
      '<p class="pa-meta">Files: <a href="/css/omn-go-custom.css?edit=true">omn-go-custom.css</a> &middot; <a href="/css/OMN-Go/omn-go-core.css">omn-go-core.css</a></p>';
  }
  async function copyText() {
    const ta = document.getElementById('paText');
    if (!ta) return;
    ta.focus();
    ta.select();
    let ok = false;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(ta.value);
        ok = true;
      }
    } catch (_) { /* Use the older copy method. */ }
    if (!ok) {
      try { ok = document.execCommand('copy'); } catch (_) { ok = false; }
    }
    say(ok ? 'The adapter text is in the clipboard.' : 'The page cannot copy. Select the text and copy it.', ok);
  }
  root.addEventListener('click', async (e) => {
    const btn = e.target.closest('[data-act]');
    if (!btn) return;
    const act = btn.dataset.act;
    say('');
    try {
      if (act === 'make') {
        made = makeAdapter();
        render();
        say('The page made the adapter. Read it, then put it into the file.', true);
      } else if (act === 'place') {
        if (!useTokens && !useClasses) { say('Select one part or two parts of the adapter.'); return; }
        await placeAdapter();
      } else if (act === 'check') {
        await runChecks();
        say('The check is complete.', true);
      } else if (act === 'remove') {
        await removeAdapter();
      } else if (act === 'copy') {
        await copyText();
      }
    } catch (err) {
      say('An error occurred: ' + err.message + '.');
      console.error(err);
    }
  });
  root.addEventListener('change', (e) => {
    const part = e.target.dataset && e.target.dataset.part;
    if (!part) return;
    if (part === 'tokens') useTokens = e.target.checked; else useClasses = e.target.checked;
    if (made) { made = makeAdapter(); render(); }
  });
  (async () => {
    coreCss = await fetchText(CORE_CSS);
    configCss = await fetchText(CONFIG_CSS);
    if (!tokenNames(coreCss).length) throw new Error(CORE_CSS + ' has no theme map');
    await runChecks();
  })().catch((err) => {
    root.innerHTML = '<p class="pa-bad">The page cannot start: ' + esc(err.message) + '. Look in the JS console.</p>';
    console.error(err);
  });
}</script>
