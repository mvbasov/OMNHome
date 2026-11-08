#!/usr/bin/env python3
"""Make docs/fonts/material-icons-subset.woff2 from the full Material Icons font.

Usage:
  python3 tools/subset-icons.py <material-icons.woff2> [extra_icon ...]

The full font is in the OMN-Go tree:
  backend/frontend/html/css/OMN-Go/fonts/material-icons.woff2

The script prints the code point of each icon. The site writes an icon as
its code point, for example <span class="omn-icon">&#xe40a;</span> for
"palette", because the subset keeps no ligatures. To add an icon, add its
name to ICONS (or give it on the command line) and run the script again.
Needs fonttools and brotli: pip install fonttools brotli
"""
import subprocess
import sys

from fontTools.ttLib import TTFont

OUT = 'docs/fonts/material-icons-subset.woff2'
ICONS = """
cloud_off description edit sync lan storage label bolt share functions
dark_mode light_mode brightness_auto android computer download code history
campaign open_in_new lock_open block palette extension content_copy folder
folder_open phone_android check info warning arrow_back library_books
upload_file note_add file_upload playlist_add inbox update save
""".split()


def main():
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    src = sys.argv[1]
    names = ICONS + sys.argv[2:]
    font = TTFont(src)
    cmap = font.getBestCmap()
    rev = {g: cp for cp, g in cmap.items()}
    glyph_of = {chr(cp): g for cp, g in cmap.items()}
    ligatures = {}
    for lookup in font['GSUB'].table.LookupList.Lookup:
        for sub in lookup.SubTable:
            sub = getattr(sub, 'ExtSubTable', sub)
            for first, ligs in getattr(sub, 'ligatures', {}).items():
                for lig in ligs:
                    ligatures[tuple([first] + list(lig.Component))] = lig.LigGlyph
    points = {}
    for name in names:
        glyph = ligatures.get(tuple(glyph_of[c] for c in name))
        if glyph is None:
            sys.exit('Material Icons has no icon ' + name)
        points[name] = rev[glyph]
        print('%-20s &#x%x;' % (name, points[name]))
    unicodes = ','.join('U+%04X' % cp for cp in sorted(set(points.values())))
    subprocess.run(['pyftsubset', src, '--flavor=woff2', '--layout-features=',
                    '--output-file=' + OUT, '--unicodes=' + unicodes], check=True)
    print('Wrote', OUT)


if __name__ == '__main__':
    main()
