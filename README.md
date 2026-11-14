# OMNHome

Website for the OMN and OMN-Go projects.

The site is static HTML in `docs/`. It has no build step and no external
dependency: the pages, the styles, the images and a subset of the Material
Icons font are all in that directory.

## Publish with GitHub Pages

1. Open **Settings → Pages** of this repository.
2. In **Build and deployment**, set **Source** to *Deploy from a branch*.
3. Select the branch `master` and the folder `/docs`. Save.

The site is then at `https://mvbasov.github.io/OMNHome/`. The `og:url` and
`og:image` tags of each page use this address. Change them if you use a
custom domain.

## Contents of `docs/`

| Path | What it is |
| --- | --- |
| `index.html` | The home page. |
| `pages/index.html` | The page library: ready-made OMN-Go pages to download. |
| `pages/install.html` | How to add a page to OMN-Go on Android and on the desktop. |
| `doc/index.html` | The documentation index: one card for each document, with its summary. |
| `doc/view.html` | Shows one document: `view.html?d=CODE_MAP`. |
| `pages/files/` | The `.md` files of the library, and `schemes/` with color schemes as JSON. |
| `css/omn-home.css` | The styles of each page. The palette is the OMN-Go palette. |
| `js/omn-home.js` | The theme button and the copy buttons. |
| `js/omn-docs.js` | Reads the documents from the OMN-Go repository and shows them. The list of the documents is at the top of this file. |
| `js/marked.umd.js` | marked 18.2.0 (MIT License), the Markdown parser of the documentation pages. |
| `img/` | Icon, favicon, link preview image and the phone screenshots, from `fastlane/metadata` of OMN-Go. |
| `fonts/material-icons-subset.woff2` | Material Icons (Apache License 2.0), subset to the icons that the site uses. |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are. |

## Add a page to the library

1. Put the `.md` file into `docs/pages/files/`. Remove an `Imported:`
   header line: it is a fact about your device, not about the page.
2. Copy an `<article class="omn-card omn-item">` block in
   `docs/pages/index.html` and change the name, the version, the text, the
   file size and the two file links (download, and "Read the source").
3. Add a card to the "Page library" section of `docs/index.html` if the page
   should show on the home page.

## Add a color scheme

1. On the Color schemes page in OMN-Go, export the schemes, and keep only the
   scheme that you want in the `schemes` list. Remove `"active"`.
2. Save it as `docs/pages/files/schemes/<name>.json`.
3. Make the preview, and paste it into a new `omn-sub` block of the Color
   schemes card in `docs/pages/index.html`:

   ```
   python3 tools/scheme-preview.py docs/pages/files/schemes/<name>.json
   ```

## Documentation

The text of each document is only in the OMN-Go repository, in `doc/`. The
site reads it from `raw.githubusercontent.com`, branch `master`, when a
person opens the page. Thus a change in OMN-Go shows on the site after the
push, with no change here.

The site gets these parts from the document:

* The title: the first line, `# Title`.
* The summary: an HTML comment after the title. GitHub does not show it.

  ```
  # OMN-Go code map

  <!-- Summary: A map from each feature of OMN-Go to the files that make it. -->
  ```

  Without the comment, the summary is the first paragraph after the title.
* The body: all the text after the summary. A link to a listed document
  opens on this site. Each other relative link opens on GitHub. An image
  comes from `raw.githubusercontent.com`.

To add a document, write it in OMN-Go `doc/` with a summary comment. Then add
its name and an icon to `DOCS` at the top of `docs/js/omn-docs.js`.

## Add an icon

The site writes an icon as its code point, for example `&#xe40a;` for
`palette`. Add the name of the icon to `ICONS` in `tools/subset-icons.py`,
and run the script with the full font from the OMN-Go tree
(`backend/frontend/html/css/OMN-Go/fonts/material-icons.woff2`):

```
pip install fonttools brotli
python3 tools/subset-icons.py material-icons.woff2
```

The script prints the code point of each icon and writes the new subset.
