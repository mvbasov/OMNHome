/* OMNHome documentation: reads the documents of OMN-Go from GitHub and shows them.
   The text of each document stays only in the OMN-Go repository. This file holds
   only the list of the documents and their icons.

   A document can give its summary in an HTML comment after its title:
     # Title
     <!-- Summary: One to three short sentences. -->
   GitHub does not show the comment. Without it, the summary is the first
   paragraph after the title. */
(function () {
  'use strict';

  var REPO = 'mvbasov/OMN-Go';
  var BRANCH = 'master';
  var DIR = 'doc/';
  var RAW = 'https://raw.githubusercontent.com/' + REPO + '/' + BRANCH + '/';
  var BLOB = 'https://github.com/' + REPO + '/blob/' + BRANCH + '/';

  /* The documents, in reading order. icon is a Material Icons code point. */
  var DOCS = [
    { id: 'CODE_MAP', icon: '\ue55b' },
    { id: 'API', icon: '\uf1b7' },
    { id: 'COLOR_SCHEMES', icon: '\ue40a' },
    { id: 'TESTING', icon: '\uf0c5' },
    { id: 'TERMINOLOGY', icon: '\ue8ce' }
  ];
  var BY_ID = {};
  DOCS.forEach(function (d) { BY_ID[d.id] = d; });

  var rawUrl = function (id) { return RAW + DIR + id + '.md'; };
  var blobUrl = function (id) { return BLOB + DIR + id + '.md'; };
  var viewUrl = function (id) { return 'view.html?d=' + encodeURIComponent(id); };

  var cache = {};
  function load(id) {
    if (!cache[id]) {
      cache[id] = fetch(rawUrl(id), { cache: 'no-cache' }).then(function (res) {
        if (!res.ok) throw new Error('GitHub answered ' + res.status);
        return res.text();
      }).then(split);
    }
    return cache[id];
  }

  /* loadHead reads only the start of a document: enough for the title and the
     summary. The index thus does not read each whole document. */
  function loadHead(id) {
    if (cache[id]) return cache[id];
    return fetch(rawUrl(id), { cache: 'no-cache' }).then(function (res) {
      if (!res.ok) throw new Error('GitHub answered ' + res.status);
      if (!res.body || !res.body.getReader || typeof TextDecoder === 'undefined') return res.text();
      var reader = res.body.getReader();
      var dec = new TextDecoder();
      var text = '';
      var step = function () {
        return reader.read().then(function (r) {
          if (r.done) return text;
          text += dec.decode(r.value, { stream: true });
          if (text.length >= 4096) { reader.cancel().catch(function () {}); return text; }
          return step();
        });
      };
      return step();
    }).then(split);
  }

  /* split answers the title, the summary and the body of a document. */
  function split(md) {
    md = md.replace(/\r\n/g, '\n');
    var title = '';
    var m = md.match(/^#[ \t]+(.+)\n/);
    if (m) { title = m[1].trim(); md = md.slice(m[0].length); }
    var summary = '';
    var c = md.match(/^\s*<!--\s*Summary:\s*([\s\S]*?)-->\s*/i);
    if (c) {
      summary = c[1].replace(/\s+/g, ' ').trim();
      md = md.slice(c[0].length);
    } else {
      var p = md.replace(/^\s+/, '').split(/\n\s*\n/)[0] || '';
      if (!/^(#|```|\||-|\*|>|<|\d+\.)/.test(p)) summary = plain(p);
    }
    return { title: title, summary: summary, body: md };
  }

  /* plain answers the text of a short Markdown span without the markup. */
  function plain(s) {
    return s.replace(/`([^`]*)`/g, '$1')
      .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
      .replace(/[*_]{1,2}([^*_]+)[*_]{1,2}/g, '$1')
      .replace(/\s+/g, ' ').trim();
  }

  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };

  /* slugger answers a function that makes the same anchor as GitHub for a
     heading text, also for two headings with the same text. */
  function slugger() {
    var seen = Object.create(null);
    return function (text) {
      var base = text.toLowerCase().replace(/[^\p{L}\p{M}\p{N}\p{Pc} -]/gu, '').replace(/ /g, '-');
      var s = base;
      while (s in seen) {
        seen[base]++;
        s = base + '-' + seen[base];
      }
      seen[s] = 0;
      return s;
    };
  }

  /* clean removes each part of the HTML that can run a script. */
  function clean(root) {
    root.querySelectorAll('script, iframe, object, embed, frame, frameset, form, base, meta, link').forEach(function (el) { el.remove(); });
    root.querySelectorAll('*').forEach(function (el) {
      Array.prototype.slice.call(el.attributes).forEach(function (a) {
        var n = a.name.toLowerCase();
        if (n.indexOf('on') === 0) el.removeAttribute(a.name);
        else if ((n === 'href' || n === 'src' || n === 'xlink:href') && /^\s*(javascript|data|vbscript):/i.test(a.value) &&
          !(n === 'src' && /^\s*data:image\//i.test(a.value))) el.removeAttribute(a.name);
      });
    });
  }

  /* fixLinks makes the relative links of the document work on this site. A link
     to a listed document opens on this site. Each other link opens on GitHub. */
  function fixLinks(root, id) {
    var here = BLOB + DIR + id + '.md';
    root.querySelectorAll('a[href]').forEach(function (a) {
      var h = a.getAttribute('href');
      if (!h || h.charAt(0) === '#') return;
      var u;
      try { u = new URL(h, here); } catch (e) { return; }
      var prefix = '/' + REPO + '/blob/' + BRANCH + '/' + DIR;
      if (u.host === 'github.com' && u.pathname.indexOf(prefix) === 0) {
        var name = u.pathname.slice(prefix.length).replace(/\.md$/, '');
        if (BY_ID[name]) { a.setAttribute('href', viewUrl(name) + u.hash); return; }
      }
      a.setAttribute('href', u.href);
      if (u.host !== location.host) a.setAttribute('rel', 'noopener');
    });
    root.querySelectorAll('img[src]').forEach(function (img) {
      var s = img.getAttribute('src');
      try { img.setAttribute('src', new URL(s, RAW + DIR + id + '.md').href); } catch (e) { /* keep it */ }
      img.setAttribute('loading', 'lazy');
    });
    root.querySelectorAll('table').forEach(function (t) {
      var w = document.createElement('div');
      w.className = 'omn-doc-table';
      t.parentNode.insertBefore(w, t);
      w.appendChild(t);
    });
  }

  /* ---- The documentation index ---- */
  function index() {
    var list = document.getElementById('omn-doc-list');
    list.innerHTML = DOCS.map(function (d) {
      return '<article class="omn-card omn-doc-card" id="doc-' + esc(d.id) + '">' +
        '<span class="omn-icon" aria-hidden="true">' + d.icon + '</span>' +
        '<h3><a href="' + viewUrl(d.id) + '">' + esc(d.id) + '</a></h3>' +
        '<p class="omn-doc-file"><code>' + DIR + esc(d.id) + '.md</code></p>' +
        '<p class="omn-doc-summary">Loading…</p>' +
        '<div class="omn-actions">' +
        '<a class="omn-btn omn-btn-primary" href="' + viewUrl(d.id) + '"><span class="omn-icon" aria-hidden="true">\ue873</span>Read</a>' +
        '<a class="omn-btn" href="' + blobUrl(d.id) + '"><span class="omn-icon" aria-hidden="true">\ue86f</span>On GitHub</a>' +
        '</div></article>';
    }).join('');
    DOCS.forEach(function (d) {
      var card = document.getElementById('doc-' + d.id);
      loadHead(d.id).then(function (doc) {
        if (doc.title) card.querySelector('h3 a').textContent = doc.title;
        card.querySelector('.omn-doc-summary').textContent = doc.summary || '';
      }).catch(function () {
        card.querySelector('.omn-doc-summary').textContent = 'The page cannot read this document now. Open it on GitHub.';
      });
    });
  }

  /* ---- One document ---- */
  function view() {
    var id = new URLSearchParams(location.search).get('d') || '';
    var doc = BY_ID[id] ? id : DOCS[0].id;
    var art = document.getElementById('omn-doc');
    var toc = document.getElementById('omn-doc-toc');
    document.getElementById('omn-doc-crumb').textContent = doc;
    document.getElementById('omn-doc-title').textContent = doc;
    document.getElementById('omn-doc-source').setAttribute('href', blobUrl(doc));
    document.getElementById('omn-doc-source').textContent = DIR + doc + '.md';

    var i = DOCS.findIndex(function (d) { return d.id === doc; });
    var prev = DOCS[i - 1], next = DOCS[i + 1];
    var pager = document.getElementById('omn-doc-pager');

    load(doc).then(function (d) {
      var title = d.title || doc;
      document.title = title + ' — OMN-Go documentation';
      document.getElementById('omn-doc-title').textContent = title;
      document.getElementById('omn-doc-crumb').textContent = title;
      document.getElementById('omn-doc-summary').textContent = d.summary;

      var tpl = document.createElement('template');
      tpl.innerHTML = window.marked.parse(d.body, { gfm: true });
      var frag = tpl.content;
      clean(frag);
      fixLinks(frag, doc);
      var slug = slugger();
      var items = [];
      frag.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(function (h) {
        h.id = slug(h.textContent.trim());
        var a = document.createElement('a');
        a.className = 'omn-doc-anchor';
        a.href = '#' + h.id;
        a.setAttribute('aria-label', 'Link to this section');
        a.textContent = '#';
        h.appendChild(a);
        if ((h.tagName === 'H2' || h.tagName === 'H3') && !/^contents$/i.test(h.textContent.trim().replace(/#$/, ''))) {
          items.push({ level: h.tagName === 'H2' ? 2 : 3, id: h.id, text: h.textContent.replace(/#$/, '').trim() });
        }
      });
      art.innerHTML = '';
      art.appendChild(frag);

      if (items.length) {
        toc.innerHTML = '<details open><summary>Contents</summary><ol>' + items.map(function (t) {
          return '<li class="omn-toc-l' + t.level + '"><a href="#' + esc(t.id) + '">' + esc(t.text) + '</a></li>';
        }).join('') + '</ol></details>';
        if (window.matchMedia('(max-width: 960px)').matches) toc.querySelector('details').removeAttribute('open');
      } else {
        toc.remove();
      }

      if (location.hash) {
        var target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
        if (target) target.scrollIntoView();
      }
    }).catch(function (err) {
      art.innerHTML = '<div class="omn-callout omn-callout-warn"><span class="omn-icon" aria-hidden="true">\ue002</span><div><p>' +
        'The page cannot read this document now (' + esc(err.message) + ').</p><p><a href="' + blobUrl(doc) +
        '">Read it on GitHub</a>.</p></div></div>';
      toc.remove();
    });

    pager.innerHTML =
      (prev ? '<a class="omn-btn" href="' + viewUrl(prev.id) + '"><span class="omn-icon" aria-hidden="true">\ue5c4</span><span>' + esc(prev.id) + '</span></a>' : '<span></span>') +
      '<a class="omn-btn" href="./"><span class="omn-icon" aria-hidden="true">\uea19</span>All documents</a>' +
      (next ? '<a class="omn-btn" href="' + viewUrl(next.id) + '"><span>' + esc(next.id) + '</span><span class="omn-icon" aria-hidden="true">\ue5c8</span></a>' : '<span></span>');
  }

  if (document.getElementById('omn-doc-list')) index();
  if (document.getElementById('omn-doc')) view();
})();
