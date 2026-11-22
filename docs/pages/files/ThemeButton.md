Title: Theme button for a page
Date: 2026-11-21 20:10:00
Category: Notes
Tags: Theme, OMN-Go user

<!--- DESCRIPTION:
v26.11.3
Add a theme button to any OMN-Go page. Press the button to change the theme of that page only. The order is auto, dark, light. The browser keeps the choice for each page. This page adds the CSS of the button to css/omn-go-custom.css, checks the CSS, and removes it. You copy the JS into js/omn-go-custom.js, and this page checks it. You copy the button code into a page.
--->

<details class="thb-about">
<summary><i class="material-icons">info</i> How this theme button works <span class="thb-version" title="Page version">v26.11.3</span></summary>

The theme button changes the theme of one page. Each press selects the next theme: auto, dark, light, and then auto again. The browser keeps the choice for each page.

The theme button has three parts:

- **CSS** in `css/omn-go-custom.css`. Step 1 adds it.
- **JS** in `js/omn-go-custom.js`. You copy it in step 2. This page checks it.
- **Button code** in a page. You copy it in step 3.

The CSS is one marked block in `css/omn-go-custom.css`. Do not edit the block. Put your own rules outside the block. Only the admin can write the file. On another device, copy the CSS text and add it to the file yourself.

The JS is one marked block in `js/omn-go-custom.js`. The block starts at the line `====THEME-CYCLE-JS-BEGIN====` and stops at the line `====THEME-CYCLE-JS-END====`. This page reads the file and compares the block with the JS of this page. This page does not write `js/omn-go-custom.js`.

- The browser keeps the choice of a page under the key `omn-theme:<page name>`. Each device has its own choices.
- When you select "auto", the JS deletes the choice of the page. The next time the page opens, it uses the theme from **Settings**.
- The JS sets the theme after the page loads. Thus a page can show the theme from **Settings** for a short time.
- The editor does not load `omn-go-custom.js`. Thus an error in the JS cannot stop the editor.
- You can put more than one button on a page. All the buttons of a page show the same icon.

**To remove the theme button**

1. Delete the button code from each page.
2. Delete the JS block from `js/omn-go-custom.js`, from the begin line to the end line.
3. Press **Remove** in step 1.

**Button icons**

- <i class="material-icons">save</i> Add the CSS to omn-go-custom.css
- <i class="material-icons">fact_check</i> Check the CSS or the JS
- <i class="material-icons">delete</i> Remove the CSS from omn-go-custom.css
- <i class="material-icons">content_copy</i> Copy the text

</details>

**Try the button:** <button type="button" class="omn-theme-cycle" data-action="theme-cycle" title="Color scheme"><i class="material-icons">brightness_auto</i></button>

<div id="thb-js-status" class="thb-js-status"></div>

## 1. Add the CSS to omn-go-custom.css

Press **Add** to put the CSS into `css/omn-go-custom.css`. If the file has a different version of the CSS, **Add** replaces it. Press **Check** to read the file again. Press **Remove** to delete the CSS from the file.

<div id="thbRoot" class="thb-root">Loading…</div>
<div id="thbStatus" class="thb-status"></div>

## 2. Add the JS to omn-go-custom.js

If the file has an old version of the JS, delete the old block first. The old block starts at the begin line and stops at the end line.

1. Press **Copy** above the code.
2. Open [omn-go-custom.js in the editor](/js/omn-go-custom.js?edit=true).
3. Paste the code at the end of the file, with the begin line and the end line.
4. Save the file.
5. Open this page again.
6. Make sure that the JS state below shows "The JS is in js/omn-go-custom.js".

<div id="thbJsRoot" class="thb-root">Loading…</div>
<div id="thbJsStatus" class="thb-status"></div>

<div class="thb-code" data-thb-label="JS for omn-go-custom.js" data-thb-edit="/js/omn-go-custom.js?edit=true">

```js
/* ====THEME-CYCLE-JS-BEGIN==== */
/* The ThemeButton page checks this block. Do not edit the block. */
// Theme button: auto -> dark -> light -> auto. Each page keeps its own choice.
(function () {
    const KEY = 'omn-theme:' + (window.PageName || location.pathname);
    const ICON = { auto: 'brightness_auto', dark: 'dark_mode', light: 'light_mode' };
    const NEXT = { auto: 'dark', dark: 'light', light: 'auto' };
    const root = document.documentElement;

    function paint() {
        const t = root.getAttribute('data-theme') || 'auto';
        document.querySelectorAll('[data-action="theme-cycle"] .material-icons').forEach(function (i) {
            i.textContent = ICON[t] || ICON.auto;
        });
    }

    function cycle() {
        const next = NEXT[root.getAttribute('data-theme')] || 'dark';
        root.setAttribute('data-theme', next);
        if (next === 'auto') localStorage.removeItem(KEY); else localStorage.setItem(KEY, next);
        paint();
    }

    const saved = localStorage.getItem(KEY);
    if (saved) root.setAttribute('data-theme', saved);

    if (window.OMN && OMN.action) OMN.action('theme-cycle', cycle);
    else document.addEventListener('click', function (e) {
        if (e.target.closest('[data-action="theme-cycle"]')) cycle();
    });
    paint();
})();
/* ====THEME-CYCLE-JS-END==== */
```

</div>

## 3. Add the button to a page

1. Press **Copy** above the code.
2. Open the page in the editor.
3. Paste the code on a line of its own, at the position of the button.
4. Save the page.

<div class="thb-code" data-thb-label="Button code for a page">

```html
<button type="button" class="omn-theme-cycle" data-action="theme-cycle" title="Color scheme"><i class="material-icons">brightness_auto</i></button>
```

</div>

<style>
.thb-about { margin:0 0 1rem; padding:.6rem .8rem; border:1px solid var(--omn-border); border-radius:8px; background:var(--omn-bg-surface); }
.thb-about summary { cursor:pointer; font-weight:600; display:flex; align-items:center; gap:.4rem; }
.thb-version { margin-left:auto; font-weight:400; font-size:.8rem; color:var(--omn-text-faint); }
.thb-js-status { margin:.5em 0; color:var(--omn-text-muted); }
.thb-js-status .material-icons { vertical-align:middle; margin-right:.3em; }
.thb-js-status.thb-ok .material-icons { color:var(--omn-success); }
.thb-js-status.thb-info .material-icons { color:var(--omn-info); }
.thb-root { display:flex; flex-direction:column; gap:.8rem; }
.thb-state { padding:.7rem .9rem; border:1px solid var(--omn-border-card); border-radius:8px; background:var(--omn-bg-surface); display:flex; align-items:center; gap:.6rem; }
.thb-state .material-icons { font-size:1.6rem; }
.thb-state--on .material-icons { color:var(--omn-success); }
.thb-state--old .material-icons, .thb-state--broken .material-icons, .thb-state--twice .material-icons { color:var(--omn-danger); }
.thb-state--off .material-icons { color:var(--omn-text-faint); }
.thb-state small { display:block; color:var(--omn-text-muted); }
.thb-checks { margin:0; padding:0; list-style:none; display:flex; flex-direction:column; gap:.3rem; }
.thb-checks li { display:flex; gap:.4rem; align-items:flex-start; }
.thb-checks li span { color:var(--omn-text); }
.thb-checks .material-icons { font-size:1.15rem; }
.thb-ok { color:var(--omn-success); }
.thb-bad { color:var(--omn-danger); }
.thb-info { color:var(--omn-text-faint); }
.thb-bar { display:flex; flex-wrap:wrap; align-items:center; gap:.5rem; }
.thb-bar-label { font-weight:bold; margin-right:auto; }
.thb-code .thb-bar { margin:.5em 0 .25em; }
.thb-root button, .thb-root .thb-bar a, .thb-code button, .thb-code .thb-bar a { display:inline-flex; align-items:center; gap:.35rem; min-height:2.5rem; padding:0 .9rem; box-sizing:border-box; border:1px solid var(--omn-border); border-radius:6px; background:var(--omn-bg-surface); color:var(--omn-text); font:inherit; text-decoration:none; cursor:pointer; }
.thb-root button:hover, .thb-root .thb-bar a:hover, .thb-code button:hover, .thb-code .thb-bar a:hover { background:var(--omn-bg-hover); }
.thb-root button.thb-primary { background:var(--omn-accent); border-color:var(--omn-accent); color:var(--omn-on-accent); }
.thb-root button.thb-primary:hover { background:var(--omn-accent-hover); }
.thb-root button.thb-danger { color:var(--omn-danger); }
.thb-root button:disabled { opacity:.5; cursor:default; }
.thb-text { width:100%; box-sizing:border-box; min-height:12rem; padding:.5rem; border:1px solid var(--omn-border); border-radius:6px; background:var(--omn-bg-inset); color:var(--omn-text); font:12px/1.4 ui-monospace, Menlo, Consolas, monospace; white-space:pre; overflow-x:auto; }
.thb-meta { font-size:.85rem; color:var(--omn-text-muted); }
.thb-status { min-height:1.4em; font-size:.9rem; }
.thb-status--ok { color:var(--omn-success); }
.thb-status--err { color:var(--omn-danger); }
@media (max-width: 640px) {
  .thb-root button { flex:1 1 auto; justify-content:center; }
}
</style>

<script type="module">{
  'use strict';
  const CUSTOM_CSS = '/css/omn-go-custom.css';
  const CSS_NAME = 'css/omn-go-custom.css';
  const BLOCK_START = '/* ====THEME-CYCLE-BEGIN==== */';
  const BLOCK_END = '/* ====THEME-CYCLE-END==== */';
  const BLOCK_RE = /\/\* ====THEME-CYCLE-BEGIN==== \*\/[\s\S]*?\/\* ====THEME-CYCLE-END==== \*\//;
  /* The CSS of the button. Add puts this block into omn-go-custom.css. */
  const BLOCK = [
    BLOCK_START,
    '/* The CSS of the theme button. The ThemeButton page put this block',
    '   into the file. Do not edit the block. Remove it with the ThemeButton page. */',
    '/* Theme button: a square, 44 by 44 pixels. */',
    '.omn-theme-cycle {',
    '    display: inline-flex;',
    '    align-items: center;',
    '    justify-content: center;',
    '    box-sizing: border-box;',
    '    width: 44px;',
    '    height: 44px;',
    '    padding: 0;',
    '    border: 2px solid var(--omn-text);',
    '    border-radius: 6px;',
    '    background: var(--omn-bg-surface);',
    '    color: var(--omn-text);',
    '    cursor: pointer;',
    '}',
    '.omn-theme-cycle:hover { background: var(--omn-bg-hover); }',
    BLOCK_END
  ].join('\n');

  const root = document.getElementById('thbRoot');
  let checks = [];
  let state = null;   // 'on', 'old', 'off', 'broken' or null

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));

  /* say writes a message into the status line of a panel. */
  function say(msg, ok, id) {
    const s = document.getElementById(id || 'thbStatus');
    if (!s) return;
    s.textContent = msg;
    s.className = 'thb-status' + (msg ? (ok ? ' thb-status--ok' : ' thb-status--err') : '');
  }

  /* copyText copies a text. The older method is for an http page on the LAN. */
  async function copyText(text) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch (_) { /* Use the older copy method. */ }
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try { ok = document.execCommand('copy'); } catch (_) { ok = false; }
    ta.remove();
    return ok;
  }

  /* ---- The code blocks of step 2 and step 3 ---- */
  /* makeBar makes a bar with a Copy button, and an edit link if the block
     has one. */
  function makeBar(label, getText, editHref) {
    const bar = document.createElement('div');
    bar.className = 'thb-bar';
    bar.innerHTML = '<span class="thb-bar-label">' + esc(label) + '</span>' +
      '<button type="button" class="thb-copy"><i class="material-icons">content_copy</i><span>Copy</span></button>';
    /* This page sets the link address with setAttribute. The server changes
       each literal href="..." in the page, also in a script. */
    if (editHref) {
      const a = document.createElement('a');
      a.setAttribute('href', editHref);
      a.innerHTML = '<i class="material-icons">edit</i><span>Edit the file</span>';
      bar.appendChild(a);
    }
    const btn = bar.querySelector('.thb-copy');
    const span = btn.querySelector('span');
    btn.addEventListener('click', async () => {
      const ok = await copyText(getText());
      span.textContent = ok ? 'Copied' : 'Copy failed';
      setTimeout(() => { span.textContent = 'Copy'; }, 1500);
    });
    return bar;
  }

  /* Put a bar above each code block. A second run adds no second bar. */
  document.querySelectorAll('.thb-code').forEach((box) => {
    if (box.querySelector('.thb-bar')) return;
    const code = box.querySelector('pre code') || box.querySelector('pre');
    if (!code) return;
    box.insertBefore(makeBar(box.getAttribute('data-thb-label') || 'Code',
      () => code.textContent.replace(/\n$/, ''),
      box.getAttribute('data-thb-edit')), box.firstChild);
  });

  /* The JS of step 2 registers the action "theme-cycle". */
  const jsStatus = document.getElementById('thb-js-status');
  const jsOn = window.OMN && OMN.action && typeof OMN.action('theme-cycle') === 'function';
  jsStatus.className = 'thb-js-status ' + (jsOn ? 'thb-ok' : 'thb-info');
  jsStatus.innerHTML = jsOn
    ? '<i class="material-icons">check_circle</i>The JS works on this page. Press the button to change the theme of this page.'
    : '<i class="material-icons">info</i>The JS does not work on this page. Do step 2 first.';

  /* ---- The file ---- */
  async function fetchText(url) {
    const res = await fetch(url + (url.indexOf('?') < 0 ? '?' : '&') + 't=' + Date.now(), { cache: 'no-store' });
    if (res.status === 404) return '';
    if (!res.ok) throw new Error('the server answered ' + res.status + ' for ' + url);
    return res.text();
  }

  async function saveCustomCss(content) {
    const body = new URLSearchParams({ name: CSS_NAME, content: content });
    const res = await fetch('/api/save', { method: 'POST', body: body });
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

  async function addCss() {
    const current = await fetchText(CUSTOM_CSS);
    const has = BLOCK_RE.test(current);
    if (!has && current.indexOf(BLOCK_START) >= 0) {
      say('css/omn-go-custom.css has the begin line of the block, but no end line. Repair the file first.');
      return;
    }
    const next = has
      ? current.replace(BLOCK_RE, () => BLOCK)
      : (current.replace(/\s+$/, '') ? current.replace(/\s+$/, '') + '\n\n' : '') + BLOCK + '\n';
    if (next === current) {
      await runChecks();
      say('The CSS is already in css/omn-go-custom.css.', true);
      return;
    }
    await saveCustomCss(next);
    await runChecks();
    say(has ? 'This page replaced the CSS in css/omn-go-custom.css.' : 'This page added the CSS to css/omn-go-custom.css.', true);
  }

  async function removeCss() {
    const current = await fetchText(CUSTOM_CSS);
    const m = current.match(BLOCK_RE);
    if (!m) {
      say('css/omn-go-custom.css has no CSS of the theme button.', true);
      return;
    }
    if (!window.confirm('Remove the CSS of the theme button from css/omn-go-custom.css? The theme buttons then have no CSS.')) return;
    /* Only the space around the block changes. The rest of the file stays. */
    const before = current.slice(0, m.index).replace(/\s+$/, '');
    const after = current.slice(m.index + m[0].length).replace(/^\s+/, '');
    const next = before && after ? before + '\n\n' + after : before + after;
    await saveCustomCss(next ? next.replace(/\s*$/, '\n') : '');
    await runChecks();
    say('This page removed the CSS from css/omn-go-custom.css.', true);
  }

  /* ---- Check ---- */
  /* probe puts a test button into the page, reads its width, and removes it. */
  function probe() {
    const el = document.createElement('button');
    el.className = 'omn-theme-cycle';
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    root.appendChild(el);
    const w = getComputedStyle(el).width;
    el.remove();
    return w;
  }

  async function runChecks() {
    checks = [];
    const add = (kind, text) => checks.push({ kind: kind, text: text });
    const current = await fetchText(CUSTOM_CSS);
    const m = current.match(BLOCK_RE);
    if (m) {
      state = m[0] === BLOCK ? 'on' : 'old';
      add('ok', 'css/omn-go-custom.css has the CSS of the theme button.');
      if (state === 'on') add('ok', 'The CSS is the same as the CSS of this page.');
      else add('bad', 'The CSS is different from the CSS of this page. Press Add to replace it.');
    } else if (current.indexOf(BLOCK_START) >= 0) {
      state = 'broken';
      add('bad', 'css/omn-go-custom.css has the begin line of the block, but no end line.');
    } else {
      state = 'off';
      add('info', 'css/omn-go-custom.css has no CSS of the theme button.');
    }
    const outside = m ? current.replace(BLOCK_RE, '') : current;
    if (/\.omn-theme-cycle\b/.test(outside)) {
      add('info', 'css/omn-go-custom.css has a .omn-theme-cycle rule outside the block. That rule also changes the button.');
    }
    await reloadCustomCss();
    const w = probe();
    if (w === '44px') add('ok', 'On this page, the theme button has the CSS: a square, 44 by 44 pixels.');
    else add(state === 'off' ? 'info' : 'bad', 'On this page, the theme button does not have the CSS. Its width is ' + Math.round(parseFloat(w) || 0) + ' pixels.');
    render();
  }

  /* ---- View ---- */
  function stateHtml() {
    if (state === 'on') return '<div class="thb-state thb-state--on"><i class="material-icons">check_circle</i><span>The CSS is in css/omn-go-custom.css.<small>It is the same as the CSS of this page.</small></span></div>';
    if (state === 'old') return '<div class="thb-state thb-state--old"><i class="material-icons">error</i><span>The CSS is in css/omn-go-custom.css, but it is different.<small>Press Add to replace it.</small></span></div>';
    if (state === 'broken') return '<div class="thb-state thb-state--broken"><i class="material-icons">error</i><span>The CSS block in css/omn-go-custom.css has no end line.<small>Repair the block in the file, or delete the block.</small></span></div>';
    if (state === 'off') return '<div class="thb-state thb-state--off"><i class="material-icons">radio_button_unchecked</i><span>The CSS is not in css/omn-go-custom.css.<small>Press Add to put the CSS into the file.</small></span></div>';
    return '';
  }

  function checksHtml(list) {
    list = list || checks;
    if (!list.length) return '';
    const icon = { ok: 'check', bad: 'close', info: 'remove' };
    return '<ul class="thb-checks">' + list.map((c) =>
      '<li class="thb-' + c.kind + '"><i class="material-icons">' + icon[c.kind] + '</i><span>' + esc(c.text) + '</span></li>').join('') + '</ul>';
  }

  function render() {
    root.innerHTML =
      stateHtml() +
      checksHtml() +
      '<div class="thb-bar">' +
      '<button type="button" class="thb-primary" data-act="add" title="Add the CSS to omn-go-custom.css"' + (state === 'on' || state === 'broken' ? ' disabled' : '') + '><i class="material-icons">save</i>Add</button>' +
      '<button type="button" data-act="check" title="Check the CSS"><i class="material-icons">fact_check</i>Check</button>' +
      '<button type="button" class="thb-danger" data-act="remove" title="Remove the CSS from omn-go-custom.css"' + (state === 'on' || state === 'old' ? '' : ' disabled') + '><i class="material-icons">delete</i>Remove</button>' +
      '</div>' +
      '<textarea id="thbText" class="thb-text" readonly wrap="off" spellcheck="false">' + esc(BLOCK) + '</textarea' + '>' +
      '<div class="thb-bar"><button type="button" data-act="copy" title="Copy the CSS text"><i class="material-icons">content_copy</i>Copy</button>' +
      '<span class="thb-meta">' + BLOCK.split('\n').length + ' lines.</span></div>' +
      '<p class="thb-meta">File: <a href="/css/omn-go-custom.css?edit=true">omn-go-custom.css</a></p>';
  }

  root.addEventListener('click', async (e) => {
    const btn = e.target.closest('[data-act]');
    if (!btn) return;
    const act = btn.dataset.act;
    say('');
    try {
      if (act === 'add') {
        await addCss();
      } else if (act === 'check') {
        await runChecks();
        say('The check is complete.', true);
      } else if (act === 'remove') {
        await removeCss();
      } else if (act === 'copy') {
        const ok = await copyText(BLOCK);
        say(ok ? 'The CSS text is in the clipboard.' : 'This page cannot copy the text. Select the text and copy it.', ok);
      }
    } catch (err) {
      say('An error occurred: ' + err.message + '.');
      console.error(err);
    }
  });

  /* ---- The JS in js/omn-go-custom.js ---- */
  /* This page reads the file and compares the marked block with the code
     block of step 2. This page does not write the file. */
  const CUSTOM_JS = '/js/omn-go-custom.js';
  const JS_START = '/* ====THEME-CYCLE-JS-BEGIN==== */';
  const JS_END = '/* ====THEME-CYCLE-JS-END==== */';
  const JS_RE = /\/\* ====THEME-CYCLE-JS-BEGIN==== \*\/[\s\S]*?\/\* ====THEME-CYCLE-JS-END==== \*\//;
  const jsRoot = document.getElementById('thbJsRoot');
  const jsCode = document.querySelector('.thb-code[data-thb-edit] pre code') || document.querySelector('.thb-code[data-thb-edit] pre');
  /* norm removes the spaces at the end of each line, and the empty lines at
     the end. An editor can add or remove these spaces. */
  const norm = (t) => t.replace(/\r\n/g, '\n').replace(/[ \t]+$/gm, '').replace(/\s+$/, '');
  const pageJs = () => norm(jsCode ? jsCode.textContent : '');
  const count = (text, part) => text.split(part).length - 1;
  let jsState = null;   // 'on', 'old', 'off', 'broken', 'twice' or null

  async function runJsChecks() {
    const list = [];
    const add = (kind, text) => list.push({ kind: kind, text: text });
    const current = await fetchText(CUSTOM_JS);
    const begins = count(current, JS_START);
    const ends = count(current, JS_END);
    const m = current.match(JS_RE);
    if (begins > 1 || ends > 1) {
      jsState = 'twice';
      add('bad', 'js/omn-go-custom.js has ' + Math.max(begins, ends) + ' JS blocks of the theme button. Delete the extra blocks.');
    } else if (m) {
      jsState = norm(m[0]) === pageJs() ? 'on' : 'old';
      add('ok', 'js/omn-go-custom.js has the JS of the theme button.');
      if (jsState === 'on') add('ok', 'The JS is the same as the JS of this page.');
      else add('bad', 'The JS is different from the JS of this page. Delete the old block. Then paste the JS of this page.');
    } else if (begins || ends) {
      jsState = 'broken';
      add('bad', 'js/omn-go-custom.js has ' + (begins ? 'the begin line' : 'the end line') + ' of the JS block, but not ' + (begins ? 'the end line.' : 'the begin line.'));
    } else {
      jsState = 'off';
      add('info', 'js/omn-go-custom.js has no JS of the theme button.');
      if (current.indexOf('theme-cycle') >= 0) {
        add('info', 'js/omn-go-custom.js has theme-cycle code without the begin line and the end line. Replace that code with the JS of this page.');
      }
    }
    const works = !!(window.OMN && OMN.action && typeof OMN.action('theme-cycle') === 'function');
    if (works) add('ok', 'The JS works on this page. It registered the action theme-cycle.');
    else if (jsState === 'off') add('info', 'On this page, no script registered the action theme-cycle.');
    else add('bad', 'On this page, no script registered the action theme-cycle. After you save the file, open this page again. If the problem stays, look in the JS console.');
    renderJs(list);
  }

  function jsStateHtml() {
    if (jsState === 'on') return '<div class="thb-state thb-state--on"><i class="material-icons">check_circle</i><span>The JS is in js/omn-go-custom.js.<small>It is the same as the JS of this page.</small></span></div>';
    if (jsState === 'old') return '<div class="thb-state thb-state--old"><i class="material-icons">error</i><span>The JS is in js/omn-go-custom.js, but it is different.<small>Delete the old block. Then paste the JS of this page.</small></span></div>';
    if (jsState === 'twice') return '<div class="thb-state thb-state--twice"><i class="material-icons">error</i><span>The JS is in js/omn-go-custom.js more than one time.<small>Delete the extra blocks.</small></span></div>';
    if (jsState === 'broken') return '<div class="thb-state thb-state--broken"><i class="material-icons">error</i><span>The JS block in js/omn-go-custom.js is not complete.<small>Repair the block in the file, or delete the block.</small></span></div>';
    if (jsState === 'off') return '<div class="thb-state thb-state--off"><i class="material-icons">radio_button_unchecked</i><span>The JS is not in js/omn-go-custom.js.<small>Copy the JS below and paste it at the end of the file.</small></span></div>';
    return '';
  }

  function renderJs(list) {
    jsRoot.innerHTML =
      jsStateHtml() +
      checksHtml(list) +
      '<div class="thb-bar">' +
      '<button type="button" data-act="check" title="Check the JS"><i class="material-icons">fact_check</i>Check</button>' +
      '<a href="/js/omn-go-custom.js?edit=true" title="Open js/omn-go-custom.js in the editor"><i class="material-icons">edit</i>Edit the file</a>' +
      '</div>';
  }

  jsRoot.addEventListener('click', async (e) => {
    const btn = e.target.closest('[data-act]');
    if (!btn) return;
    say('', true, 'thbJsStatus');
    try {
      await runJsChecks();
      say('The check is complete.', true, 'thbJsStatus');
    } catch (err) {
      say('An error occurred: ' + err.message + '.', false, 'thbJsStatus');
      console.error(err);
    }
  });

  runJsChecks().catch((err) => {
    jsRoot.innerHTML = '<p class="thb-bad">This page cannot read js/omn-go-custom.js: ' + esc(err.message) + '.</p>';
    console.error(err);
  });

  runChecks().catch((err) => {
    root.innerHTML = '<p class="thb-bad">This page cannot read css/omn-go-custom.css: ' + esc(err.message) + '. Copy the CSS text below and add it to the file yourself.</p>' +
      '<textarea class="thb-text" readonly wrap="off" spellcheck="false">' + esc(BLOCK) + '</textarea' + '>';
    console.error(err);
  });
}</script>
