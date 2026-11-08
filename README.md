# OMNHome

Website for the OMN and OMN-Go projects.

The site is one static page in `docs/`. It has no build step and no
external dependency: the page, the images and a subset of the Material
Icons font are all in that directory.

## Publish with GitHub Pages

1. Open **Settings → Pages** of this repository.
2. In **Build and deployment**, set **Source** to *Deploy from a branch*.
3. Select the branch `master` and the folder `/docs`. Save.

The site is then at `https://mvbasov.github.io/OMNHome/`. The `og:url` and
`og:image` tags in `docs/index.html` use this address. Change them if you
use a custom domain.

## Contents of `docs/`

| Path | What it is |
| --- | --- |
| `index.html` | The page. CSS and the theme script are inline. |
| `img/` | Icon, favicon, link preview image and the phone screenshots, from `fastlane/metadata` of OMN-Go. |
| `fonts/material-icons-subset.woff2` | Material Icons (Apache License 2.0), subset to the glyphs that the page uses. |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are. |

To add an icon, add its code point to the `pyftsubset` command below and
run it on `material-icons.woff2` from the OMN-Go tree:

```
pyftsubset material-icons.woff2 --flavor=woff2 --layout-features='' \
  --output-file=docs/fonts/material-icons-subset.woff2 \
  --unicodes="U+E2C1,U+E873,U+E3C9,U+E627,U+EB2F,U+E1DB,U+E892,U+EA0B,U+E80D,U+E24A,U+E51C,U+E518,U+E1AB,U+E859,U+E30A,U+F090,U+E86F,U+E889,U+EF49,U+E89E,U+E898,U+E14B"
```
