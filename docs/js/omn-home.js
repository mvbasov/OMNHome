/* Theme button: system -> light -> dark -> system, as in the app. */
(function () {
  var btn = document.getElementById('omn-theme-btn');
  var order = ['system', 'light', 'dark'];
  var glyph = { system: '\ue1ab', light: '\ue518', dark: '\ue51c' };
  function current() {
    return document.documentElement.getAttribute('data-theme') || 'system';
  }
  function show(mode) {
    btn.title = 'Theme: ' + mode;
    btn.setAttribute('aria-label', 'Theme: ' + mode + '. Press to change.');
    btn.firstChild.textContent = glyph[mode];
  }
  function apply(mode) {
    if (mode === 'system') document.documentElement.removeAttribute('data-theme');
    else document.documentElement.setAttribute('data-theme', mode);
    try {
      if (mode === 'system') localStorage.removeItem('omn-home-theme');
      else localStorage.setItem('omn-home-theme', mode);
    } catch (e) {}
    show(mode);
  }
  btn.addEventListener('click', function () {
    apply(order[(order.indexOf(current()) + 1) % order.length]);
  });
  show(current());
})();

/* Copy buttons: data-copy="<url>" copies the text of that file. */
(function () {
  function fallbackCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    var ok = false;
    try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
    ta.remove();
    return ok;
  }
  document.addEventListener('click', function (ev) {
    var btn = ev.target.closest ? ev.target.closest('[data-copy]') : null;
    if (!btn) return;
    var state = btn.parentNode.querySelector('.omn-copy-state');
    var show = function (msg, ok) {
      if (!state) return;
      state.textContent = msg;
      state.style.color = ok ? '' : 'var(--omn-danger, #c0392b)';
    };
    show('Copying…', true);
    fetch(btn.getAttribute('data-copy'), { cache: 'no-cache' })
      .then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.text();
      })
      .then(function (text) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          return navigator.clipboard.writeText(text).then(function () { return true; }, function () { return fallbackCopy(text); });
        }
        return fallbackCopy(text);
      })
      .then(function (ok) {
        show(ok ? 'Copied. Paste it in OMN-Go.' : 'The browser cannot copy. Use Download.', ok);
      })
      .catch(function () {
        show('The page cannot read the file. Use Download.', false);
      });
  });
})();
