#!/usr/bin/env python3
"""Print the HTML preview of a color scheme for docs/pages/index.html.

Usage:
  python3 tools/scheme-preview.py docs/pages/files/schemes/<scheme>.json

The JSON file has the export format of the Color schemes page:
{"schemes": [ {"name": ..., "font": {...}, "light": {...}, "dark": {...}} ]}.
The script uses the first scheme. It prints a light and a dark sample note
with the colors of the scheme. Paste the output into the card of the scheme.
"""
import html
import json
import sys


def mini(scheme, palette):
    c = scheme[palette]
    font = scheme.get('font', {})
    on_accent = c.get('on-accent', '#ffffff')
    main_font = html.escape(font.get('main') or 'inherit', quote=True)
    code_font = html.escape(font.get('code') or 'monospace', quote=True)
    return f'''<div class="omn-mini" style="background:{c['bg']};color:{c['text']};border-color:{c['border']};font-family:{main_font}">
  <div class="omn-mini-head" style="background:{c['bg-band']};color:{c['text-strong']};border-bottom:1px solid {c['border-strong']}">Weekly plan <small>{palette}</small></div>
  <div class="omn-mini-body">
    <div class="omn-mini-card" style="background:{c['bg-surface']};border-color:{c['border-card']}">
      <p style="color:{c['text-heading']};font-weight:700">Monday</p>
      <p>Read the <span style="color:{c['link']};text-decoration:underline">manual</span>, then <span style="background:{c['search-hit-bg']};color:{c['search-hit-text']};padding:0 2px;border-radius:3px">sync</span>.</p>
      <p style="color:{c['text-muted']}">Tags: work, notes</p>
      <div class="omn-mini-code" style="background:{c['code-bg']};color:{c['code-text']};font-family:{code_font}"><span style="color:{c['code-comment']}">// a note script</span>
<span style="color:{c['code-meta']}">const</span> <span style="color:{c['code-variable']}">msg</span> = <span style="color:{c['code-string']}">'Hello'</span>;</div>
      <span class="omn-mini-btn" style="background:{c['accent']};color:{on_accent}">Save</span>
      <div class="omn-mini-dots"><span style="background:{c['accent']}"></span><span style="background:{c['success']}"></span><span style="background:{c['danger']}"></span><span style="background:{c['info']}"></span><span style="background:{c['tag-bg']}"></span><span style="background:{c['table-th-bg']}"></span></div>
    </div>
  </div>
</div>'''


def main():
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    scheme = json.load(open(sys.argv[1], encoding='utf-8'))['schemes'][0]
    print('<div class="omn-scheme">\n' + mini(scheme, 'light') + '\n' + mini(scheme, 'dark') + '\n</div>')


if __name__ == '__main__':
    main()
