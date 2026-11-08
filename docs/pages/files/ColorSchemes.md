Title: OMN-Go color schemes
Date: 2026-08-23 21:45:00
Category: Notes
Tags: CSS, Theme, OMN-Go user

<!--- DESCRIPTION:
v26.11.11
Make color schemes for OMN-Go. A scheme sets new values for the light palette and the dark palette of OMN-Go, and it can set the main font and the code font. A color picker of the page sets each color. It shows the contrast of each text and background pair of the color, and it can set the lightness to meet WCAG AA or AAA. Examine the scheme in the preview and in the two palettes, then apply it. The page writes the scheme as one marked block into css/omn-go-custom.css. The page keeps the schemes in user_json/omn-go-schemes.json. Git sync moves this file with your notes. You can export and import the schemes.
--->

<details class="cs-about">
<summary><i class="material-icons">info</i> How this page works <span class="cs-version" title="Page version">v26.11.11</span></summary>

OMN-Go keeps each color in one palette at the top of `css/OMN-Go/omn-go-core.css`. Each token has a light value `--omn-light-<token>` and a dark value `--omn-dark-<token>`. The light theme, the dark theme and the auto theme read their colors from these values. This page reads the palette from the core stylesheet when it starts. Thus the editor shows each token of the installed OMN-Go version, with its default value and its comment.

A scheme keeps only the values that differ from the default palette. The page writes the applied scheme as one marked block into `css/omn-go-custom.css`. The block is one `:root` rule with the changed palette values, and two font rules when the scheme sets a font. This file loads last, so the scheme wins over the defaults. A different scheme replaces only this block. Your own rules in the file stay. The page keeps your schemes in `user_json/omn-go-schemes.json`. Git sync moves this file with your notes.

- Set a color for each token in the **light** palette and in the **dark** palette. A color is a hex value, or a function such as `rgba(0, 0, 0, 0.2)`. Type the value in the text field, or click the color box to open the color picker. A blue frame marks a value that differs from the default.
- The **color picker** is the same on a phone and on a desktop. It has a hue ring with a triangle, a swatch grid, and H, S, L and A sliders. The swatch view shows the colors of the palette, thus you can use a color of the scheme again. The picker shows each text and background pair of the token, with the contrast ratio before and after the change. Select AA or AAA, then click **Fix** to set L to the nearest value that meets the level for all pairs. When the switch **Live** of the picker is on, the field, the component preview and the contrast analysis change at once. The component preview shows the palette of the token. Apply keeps the new color. Cancel and the Escape key put back the start color. The result is `#rrggbb`, or `rgba(r, g, b, a)` when A is less than 1.
- The **Typography** group sets the main font and the code font, each with a size. The code font list has only monospace fonts. "OMN-Go default" keeps the font of OMN-Go.
- **Live preview** shows the scheme on this page and on all other OMN-Go pages while the editor is open.
- The **component preview** shows a sample page with the scheme. The code sample uses the real OMN-Go code block rules. The buttons, the text field and the check box use the real OMN-Go rules for the form controls of a note.
- The **contrast analysis** compares each text color with its background in the two palettes. The minimum is 4.5:1 (WCAG AA). A color with an opacity shows on the page color (`bg`) of its palette.
- The test buttons show this page in the dark palette or the light palette. This change is temporary. The restore button sets the OMN-Go theme again.
- The save-and-apply button writes the block, and the stylesheet changes at once. You do not have to start OMN-Go again.
- The editor page loads no `omn-go-custom.css`. Thus a scheme does not change the editor, and a bad scheme cannot keep you out of it.

**Button icons**

- <i class="material-icons">add</i> New scheme
- <i class="material-icons">file_download</i> Export schemes
- <i class="material-icons">file_upload</i> Import schemes
- <i class="material-icons">dark_mode</i> Test the dark palette
- <i class="material-icons">light_mode</i> Test the light palette
- <i class="material-icons">settings_backup_restore</i> Restore the OMN-Go theme
- <i class="material-icons">restart_alt</i> Remove the applied scheme
- <i class="material-icons">edit</i> Edit a saved scheme or an example
- <i class="material-icons">check</i> Apply a scheme
- <i class="material-icons">delete</i> Delete a scheme
- <i class="material-icons">save</i> Save the scheme
- <i class="material-icons">check_circle</i> Save the scheme and apply it
- <i class="material-icons">close</i> Close the editor
- <i class="material-icons">content_copy</i> Copy the exported JSON
- <i class="material-icons">save_alt</i> Save the JSON file
- <i class="material-icons">playlist_add</i> Import the pasted JSON
- <i class="material-icons">folder_open</i> Select a JSON file
- <i class="material-icons">restart_alt</i> Set the OMN-Go default color or typography (in the editor)

</details>

<style>.cs-root { max-width: 62em; }
.cs-root button:where(:not(.cs-pv-ctl)) { display:inline-flex; align-items:center; justify-content:center; gap:.3rem; box-sizing:border-box; padding:0; min-width:2.4rem; height:2.4rem; font-size:.92rem; line-height:1; border:1px solid var(--omn-border); border-radius:8px; background:var(--omn-bg-surface); color:var(--omn-text); cursor:pointer; transition:background .12s ease, border-color .12s ease, box-shadow .12s ease, transform .08s ease; }
.cs-root button:where(:not(.cs-pv-ctl)):hover { background:var(--omn-bg-hover); }
.cs-root button:where(:not(.cs-pv-ctl)):active { transform:translateY(1px); }
.cs-root button:where(:not(.cs-pv-ctl)):focus-visible { outline:2px solid var(--omn-accent); outline-offset:1px; }
.cs-root button .material-icons { font-size:1.15rem; }
.cs-root .cs-primary { border-color:var(--omn-accent); color:var(--omn-accent); }
.cs-root .cs-primary:hover { background:var(--omn-accent-hover); color:var(--omn-bg-surface); }
.cs-root .cs-danger { border-color:var(--omn-danger); color:var(--omn-danger); }
.cs-toolbar { display:flex; flex-wrap:wrap; align-items:center; gap:.5rem; padding:.5rem .6rem; margin:.5rem 0 .9rem; background:var(--omn-bg-band); border:1px solid var(--omn-border-soft); border-radius:12px; box-shadow:0 1px 2px var(--omn-shadow-soft); }
.cs-editor-toolbar { margin:.45rem 0 .75rem; }
.cs-test { display:inline-flex; flex-wrap:wrap; align-items:center; gap:.4rem; padding-left:.6rem; border-left:1px solid var(--omn-border-soft); }
.cs-applied { display:flex; align-items:center; gap:.4rem; color:var(--omn-text-muted); margin:.1rem 0 .85rem; font-size:.92rem; }
.cs-applied::before { content:"●"; color:var(--omn-success); font-size:.75rem; line-height:1; }
.cs-applied--none::before { content:"○"; color:var(--omn-text-faint); }
.cs-empty { color:var(--omn-text-muted); display:flex; align-items:flex-start; gap:.5rem; padding:.7rem 0; }
.cs-empty .material-icons { color:var(--omn-text-faint); margin-top:.12rem; }
.cs-hint { color:var(--omn-text-muted); font-size:.9em; }
.cs-card { background:var(--omn-bg-surface); border:1px solid var(--omn-border-card); border-radius:12px; padding:.85rem .95rem; margin:.65rem 0; box-shadow:0 1px 3px var(--omn-shadow-soft); transition:box-shadow .12s ease, border-color .12s ease, transform .12s ease; }
.cs-card:hover { box-shadow:0 4px 14px var(--omn-shadow); transform:translateY(-1px); }
.cs-card--active { border-color:var(--omn-success); }
.cs-card-head { display:flex; justify-content:space-between; align-items:center; gap:.6rem; flex-wrap:wrap; }
.cs-card-head strong { font-size:1.02rem; }
.cs-badge { font-size:.7em; color:var(--omn-success); border:1px solid var(--omn-success); border-radius:20px; padding:.08rem .55rem; vertical-align:middle; }
.cs-badge--ex { color:var(--omn-text-muted); border-color:var(--omn-border); }
.cs-swatch { display:flex; flex-direction:column; gap:.3rem; margin:.6rem 0 .15rem; }
.cs-swatch-row { display:flex; align-items:center; gap:.5rem; }
.cs-swatch-label { flex:0 0 auto; width:2.6rem; font-size:.68rem; font-weight:600; color:var(--omn-text-faint); text-transform:uppercase; letter-spacing:.05em; }
.cs-swatch-bar { flex:1; height:1.1rem; border-radius:6px; border:1px solid var(--omn-border); }
.cs-actions { display:flex; flex-wrap:wrap; gap:.4rem; margin-top:.15rem; }
.cs-editor-head { display:flex; flex-wrap:wrap; gap:.6rem; align-items:center; margin-bottom:.7rem; }
#csName { flex:1; min-width:12rem; padding:.5rem .7rem; font-size:1rem; border:1px solid var(--omn-border); border-radius:8px; background:var(--omn-bg-surface); color:var(--omn-text); }
.cs-toggle { display:inline-flex; align-items:center; gap:.35rem; color:var(--omn-text-muted); font-size:.92rem; white-space:nowrap; }
.cs-group { border:1px solid var(--omn-border-soft); border-radius:10px; margin:.4rem 0; background:var(--omn-bg-surface); overflow:hidden; }
.cs-group > summary { list-style:none; cursor:pointer; padding:.55rem .8rem; color:var(--omn-text-strong); font-weight:600; display:flex; align-items:center; gap:.5rem; }
.cs-group > summary::-webkit-details-marker { display:none; }
.cs-group > summary::before { content:"▸"; color:var(--omn-text-faint); font-size:.85em; transition:transform .12s ease; }
.cs-group[open] > summary::before { transform:rotate(90deg); }
.cs-group[open] > summary { border-bottom:1px solid var(--omn-border-soft); }
.cs-grid { padding:.35rem .8rem .55rem; }
.cs-grid-head { display:grid; grid-template-columns:10.5rem 1fr 1fr; gap:.4rem .7rem; padding:.1rem 0 .35rem; font-size:.68rem; font-weight:600; color:var(--omn-text-faint); text-transform:uppercase; letter-spacing:.04em; border-bottom:1px solid var(--omn-border-soft); }
.cs-row { display:grid; grid-template-columns:10.5rem 1fr 1fr; gap:.4rem .7rem; align-items:center; padding:.35rem 0; border-bottom:1px solid var(--omn-border-soft); }
.cs-row:last-child { border-bottom:none; }
.cs-token { font-size:.85rem; color:var(--omn-text-muted); font-family:ui-monospace, SFMono-Regular, Menlo, monospace; }
.cs-field { display:flex; align-items:center; gap:.4rem; }
/* The color button of a field opens the color picker. The checkerboard
   shows a color with an opacity. The button rule of .cs-root sets a
   background, thus this rule sets the checkerboard again. */
.cs-root button.cs-color { flex:0 0 auto; width:3rem; min-width:3rem; height:2.15rem; padding:0; border:1px solid var(--omn-border-strong); border-radius:6px; background-color:#fff; background-image:linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%), linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%); background-size:12px 12px; background-position:0 0, 6px 6px; }
.cs-hex { width:6.2rem; min-width:0; flex:1 1 6.2rem; padding:.32rem .4rem; font-size:.85rem; font-family:ui-monospace, SFMono-Regular, Menlo, monospace; border:1px solid var(--omn-border); border-radius:6px; background:var(--omn-bg-inset); color:var(--omn-text); }
.cs-reset { min-width:auto; width:auto; height:auto; padding:.2rem .35rem; }
.cs-reset .material-icons { font-size:1.05rem; }
.cs-bad .cs-hex { border-color:var(--omn-danger); }
.cs-editor-actions { display:flex; flex-wrap:wrap; gap:.5rem; margin-top:.8rem; }
.cs-hidden { display:none; }
.cs-about { border:1px solid var(--omn-border-soft); border-radius:12px; margin:.4rem 0 1rem; background:var(--omn-bg-surface); box-shadow:0 1px 2px var(--omn-shadow-soft); }
.cs-about summary, .cs-panel summary { cursor:pointer; padding:.55rem .8rem; color:var(--omn-text-strong); font-weight:600; display:flex; align-items:center; gap:.4rem; }
.cs-version { font-weight:400; font-size:.78rem; color:var(--omn-text-muted); border:1px solid var(--omn-border-soft); border-radius:20px; padding:.04rem .55rem; white-space:nowrap; }
.cs-about[open] summary { border-bottom:1px solid var(--omn-border-soft); }
.cs-about[open] { padding-bottom:.2rem; }
.cs-about > p, .cs-about ul { margin-left:.8rem; margin-right:.8rem; }
.cs-panel { border:1px solid var(--omn-border-soft); border-radius:10px; margin:.5rem 0; background:var(--omn-bg-surface); box-shadow:0 1px 2px var(--omn-shadow-soft); }
.cs-panel[open] { padding:0 .8rem .6rem; }
.cs-json { width:100%; box-sizing:border-box; min-height:7rem; padding:.5rem; font-family:ui-monospace, SFMono-Regular, Menlo, monospace; font-size:.8rem; border:1px solid var(--omn-border); border-radius:6px; background:var(--omn-bg-inset); color:var(--omn-text); }
.cs-status { min-height:1.2em; margin:.6rem 0; color:var(--omn-text-muted); }
.cs-status--ok { color:var(--omn-success); }
.cs-status--err { color:var(--omn-danger); }
/* Component preview */
.cs-section-label { margin:.9rem 0 .3rem; font-size:.76rem; font-weight:600; color:var(--omn-text-faint); text-transform:uppercase; letter-spacing:.05em; }
.cs-pv { border:1px solid var(--omn-border-card); border-radius:10px; overflow:hidden; margin:.4rem 0 .6rem; }
.cs-pv-head { background:var(--omn-bg-band); color:var(--omn-text-strong); display:flex; align-items:center; gap:.5rem; padding:.5rem .7rem; border-bottom:1px solid var(--omn-border-strong); }
.cs-pv-head b { font-size:.95em; }
.cs-pv-right { margin-left:auto; display:flex; flex-direction:column; align-items:flex-end; gap:.3rem; }
.cs-pv-pill { display:flex; }
.cs-pv-row { display:flex; align-items:center; gap:.3rem; }
.cs-pv-pal { display:inline-flex; gap:.3rem; }
.cs-pv-btns { display:inline-flex; gap:.3rem; }
.cs-pv-btn { min-width:24px; height:24px; padding:0 3px; border-radius:5px; border:1px solid var(--omn-border-strong); background:transparent; color:var(--omn-text); display:inline-flex; align-items:center; justify-content:center; font-size:14px; cursor:pointer; }
.cs-pv-btn[data-b="color"] { background:var(--omn-info); border-color:var(--omn-info); color:var(--omn-on-accent); }
.cs-pv-btn[data-b="gray"] { background:var(--omn-secondary); border-color:var(--omn-secondary); color:var(--omn-on-accent); }
.cs-pv-body { background:var(--omn-bg); color:var(--omn-text); padding:.8rem; }
.cs-pv-card { background:var(--omn-bg-surface); border:1px solid var(--omn-border-card); border-radius:8px; padding:.7rem .8rem; box-shadow:0 1px 3px var(--omn-shadow-soft); }
.cs-pv-card p { margin:.3rem 0; }
.cs-pv-pre { padding:0; margin:.5rem 0 0; border-radius:6px; overflow:hidden; font-family:var(--cs-code-font, ui-monospace, SFMono-Regular, Menlo, monospace); font-size:var(--cs-code-size, .82em); }
/* The OMN-Go code block rules give the colors and the padding. */
.cs-pv-pre code { font:inherit; }
.cs-pv-chip { display:inline-block; padding:.15rem .5rem; margin:.2rem .3rem .2rem 0; border-radius:99px; background:var(--omn-tag-bg); border:1px solid var(--omn-tag-border); color:var(--omn-text); font-size:.82em; }
.cs-pv-hit { background:var(--omn-search-hit-bg); color:var(--omn-search-hit-text); padding:0 2px; border-radius:3px; }
.cs-pv-tbl { border-collapse:collapse; margin-top:.5rem; font-size:.85em; }
.cs-pv-tbl th { background:var(--omn-table-th-bg); color:var(--omn-table-th-text); padding:.25rem .5rem; border:1px solid var(--omn-table-border); text-align:left; }
.cs-pv-tbl td { padding:.25rem .5rem; border:1px solid var(--omn-table-border); color:var(--omn-table-text); }
.cs-pv-tbl tr:nth-child(odd) td { background:var(--omn-table-row-odd); }
.cs-pv-tbl tr:nth-child(even) td { background:var(--omn-table-row-even); }
.cs-pv-swatches { display:flex; gap:.4rem; flex-wrap:wrap; margin-top:.5rem; }
.cs-pv-swatch { width:26px; height:26px; border-radius:6px; border:1px solid var(--omn-border); }
.cs-pv-foot { background:var(--omn-bg-band); color:var(--omn-text-muted); padding:.3rem .7rem; font-size:.72em; border-top:1px solid var(--omn-border-soft); }
/* Contrast table */
.cs-contrast { width:100%; border-collapse:collapse; font-size:.84rem; margin:.2rem 0 .3rem; }
.cs-contrast th { text-align:left; padding:.3rem .4rem; border-bottom:1px solid var(--omn-border-strong); color:var(--omn-text-muted); font-weight:600; font-size:.72rem; text-transform:uppercase; letter-spacing:.04em; }
.cs-contrast td { padding:.25rem .4rem; border-bottom:1px solid var(--omn-border-soft); color:var(--omn-text); }
.cs-contrast th:nth-child(n+2), .cs-contrast td:nth-child(n+2) { text-align:right; font-variant-numeric:tabular-nums; }
.cs-contrast td.cs-cwarn { color:var(--omn-info); }
.cs-contrast td.cs-cbad { color:var(--omn-danger); font-weight:600; }
.cs-cnote-ok { color:var(--omn-success); }
.cs-cnote-warn { color:var(--omn-info); }
.cs-cnote-bad { color:var(--omn-danger); font-weight:600; }
.cs-group > summary small { margin-left:auto; font-weight:400; color:var(--omn-text-muted); }
/* Typography chooser */
.cs-typography .cs-font-row { display:grid; grid-template-columns:6rem 1fr; gap:.3rem .6rem; align-items:center; padding:.4rem 0 .5rem; border-bottom:1px solid var(--omn-border-soft); }
.cs-typography .cs-font-row:last-of-type { border-bottom:none; }
.cs-font-label { font-size:.85rem; color:var(--omn-text-muted); font-weight:600; }
.cs-font-controls { display:grid; grid-template-columns:5.5rem 1fr; gap:.4rem; min-width:0; }
.cs-font-select { width:100%; box-sizing:border-box; padding:.45rem .55rem; font-size:.92rem; font-family:inherit; border:1px solid var(--omn-border); border-radius:6px; background:var(--omn-bg-surface); color:var(--omn-text); appearance:auto; }
.cs-font-select:focus-visible { outline:2px solid var(--omn-accent); outline-offset:1px; }
.cs-font-actions { display:flex; flex-wrap:wrap; align-items:center; gap:.5rem; margin-top:.5rem; }
.cs-specimen { margin-top:.45rem; padding:.6rem .7rem; border:1px solid var(--omn-border-card); border-radius:8px; background:var(--omn-bg); color:var(--omn-text); }
.cs-specimen-line { display:flex; align-items:baseline; gap:.65rem; }
.cs-specimen-aa { font-weight:600; font-size:1.5em; line-height:1; }
.cs-specimen-word { font-size:1em; }
.cs-specimen-meta { color:var(--omn-text-muted); font-size:.72em; margin-top:.4rem; font-family:ui-monospace, SFMono-Regular, Menlo, monospace; }
.cs-specimen-code { margin-top:.6rem; padding:.45rem .6rem; border-radius:6px; border:1px solid var(--omn-border-soft); background:var(--omn-bg-inset); font-size:.85em; white-space:pre-wrap; overflow-x:auto; box-sizing:border-box; }
.cs-specimen-code { font-family:var(--cs-code-font, ui-monospace, SFMono-Regular, Menlo, monospace); }
/* Typography line of a library card */
.cs-fontline { display:flex; align-items:center; gap:.5rem; margin:.15rem 0 .35rem; min-width:0; }
.cs-fontline-sample { display:inline-flex; flex:0 0 auto; min-width:1.9rem; height:1.9rem; align-items:center; justify-content:center; border:1px solid var(--omn-border-soft); border-radius:6px; background:var(--omn-bg-inset); color:var(--omn-text); font-weight:600; }
.cs-fontline-meta { font-size:.78rem; color:var(--omn-text-muted); overflow-wrap:anywhere; }
.cs-pv { font-family:var(--cs-font, inherit); font-size:var(--cs-font-size, inherit); }
.cs-token small { display:block; font-family:inherit; font-size:.72rem; color:var(--omn-text-faint); }
.cs-field--changed .cs-hex { border-color:var(--omn-accent); }
.cs-changes { font-size:.78rem; color:var(--omn-text-muted); }
.cs-pv-ctls { display:flex; flex-wrap:wrap; gap:.4rem; align-items:center; }
.cs-pv-ctls input[type="text"] { width:8rem; }
.cs-pv-ctls label { display:inline-flex; align-items:center; gap:.3rem; }
.cs-pv .cs-pv-ctl-hover { background-color:var(--omn-bg-hover); border-color:var(--omn-accent); color:var(--omn-accent-hover); }
@media (max-width: 640px) {
  .cs-row { grid-template-columns:1fr 1fr; }
  .cs-token { grid-column:1 / -1; }
  .cs-grid-head { grid-template-columns:1fr 1fr; }
  .cs-grid-head span:first-child { grid-column:1 / -1; }
  .cs-hex { width:100%; min-width:0; }
}
/* ---- The color picker. The same picker as the note "Color picker test". ---- */
/* A checkerboard behind a color shows its opacity. Its two grays are fixed,
   because they must look the same in each theme. */
.cp-checker { position:relative; overflow:hidden; background-color:#fff; background-image:linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%), linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%); background-size:12px 12px; background-position:0 0, 6px 6px; }
.cp-checker > span { position:absolute; inset:0; }
/* The dialog. It uses the OMN-Go classes .omn-overlay and .omn-modal, thus
   it looks the same as the commit dialog. */
.omn-modal.cp-modal { width:min(420px, calc(100vw - 32px)); max-height:calc(100vh - 32px); overflow-y:auto; box-sizing:border-box; color:var(--omn-text); }
.cp-modal h2 { margin:0 0 12px; font-size:1.2rem; }
.cp-compare { display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:14px; }
.cp-compare figure { margin:0; display:flex; flex-direction:column; gap:4px; }
.cp-compare figcaption { font-size:.8rem; color:var(--omn-text-muted); }
.cp-compare .cp-checker { height:52px; border-radius:6px; border:1px solid var(--omn-border-strong); }
.cp-before { cursor:pointer; }
.cp-head { display:flex; align-items:center; gap:10px; margin:0 0 12px; }
.cp-head h2 { margin:0; flex:1; min-width:0; overflow-wrap:anywhere; }
.omn-modal.cp-modal .cp-live { display:inline-flex; align-items:center; gap:5px; font-size:.82rem; color:var(--omn-text-muted); cursor:pointer; white-space:nowrap; }
.omn-modal.cp-modal .cp-live input { width:auto; height:auto; margin:0; accent-color:var(--omn-accent); }
/* The pairs: a text sample, the names of the two colors, and the contrast
   ratio before and after the change. */
.cp-pairs { margin:0 0 14px; }
.cp-phead { display:flex; flex-wrap:wrap; align-items:center; gap:6px 8px; margin-bottom:6px; font-size:.8rem; color:var(--omn-text-muted); }
.cp-psum { flex:1; min-width:9rem; }
.cp-psum b { color:var(--omn-text); }
.omn-modal.cp-modal .cp-fix { width:auto; margin:0; padding:4px 12px; font-size:.85rem; }
.omn-modal.cp-modal .cp-fix:disabled { opacity:.45; cursor:default; }
.cp-pnote { margin:0 0 6px; font-size:.78rem; color:var(--omn-danger); }
.cp-plist { max-height:118px; overflow-y:auto; border:1px solid var(--omn-border-soft); border-radius:6px; }
.cp-prow { display:grid; grid-template-columns:44px 1fr auto auto; align-items:center; gap:8px; padding:3px 8px 3px 3px; font-size:.8rem; }
.cp-prow + .cp-prow { border-top:1px solid var(--omn-border-soft); }
.cp-psample { height:26px; border-radius:4px; border:1px solid var(--omn-border-strong); }
.cp-psample > span { display:flex; align-items:center; justify-content:center; font-weight:700; font-size:1rem; }
.cp-pname { min-width:0; overflow-wrap:anywhere; color:var(--omn-text-muted); }
.cp-pname code { font-size:.76rem; color:var(--omn-text); }
.cp-pratio { font-variant-numeric:tabular-nums; white-space:nowrap; color:var(--omn-text-muted); }
.cp-pratio b { color:var(--omn-text); }
.cp-mark { width:1.3rem; text-align:center; font-weight:700; }
.cp-mark.cp-yes { color:var(--omn-success); }
.cp-mark.cp-no { color:var(--omn-danger); }
/* The colors of the scheme, above the swatch grid. */
.cp-sch { display:flex; flex-wrap:wrap; gap:4px; max-height:78px; overflow-y:auto; margin-bottom:8px; padding:2px; }
.omn-modal.cp-modal .cp-sc { width:24px; height:24px; margin:0; padding:0; border:1px solid var(--omn-border-strong); border-radius:4px; cursor:pointer; -webkit-tap-highlight-color:transparent; }
.omn-modal.cp-modal .cp-sc.cp-on { box-shadow:0 0 0 2px var(--omn-bg-surface), 0 0 0 4px var(--omn-accent); }
/* The buttons of the dialog get the look of ".omn-modal button" from the core
   CSS. The rules below have ".omn-modal.cp-modal" to override that look. */
.omn-modal.cp-modal .cp-seg { display:flex; width:max-content; border:1px solid var(--omn-border-strong); border-radius:6px; overflow:hidden; }
.omn-modal.cp-modal .cp-seg button { width:auto; margin:0; padding:4px 14px; border:0; border-radius:0; background:var(--omn-bg-inset); color:var(--omn-text); font-size:.85rem; }
.omn-modal.cp-modal .cp-seg button + button { border-left:1px solid var(--omn-border-strong); }
.omn-modal.cp-modal .cp-seg button[aria-pressed="true"], .omn-modal.cp-modal .cp-seg button[aria-selected="true"] { background:var(--omn-accent); color:var(--omn-on-accent); }
.omn-modal.cp-modal .cp-views { margin:0 auto 10px; }
.omn-modal.cp-modal .cp-phead .cp-seg button { padding:3px 10px; font-size:.8rem; }
.cp-vis { margin-bottom:14px; }
.cp-vis [hidden] { display:none; }
.cp-tri { display:block; width:min(220px, 100%); aspect-ratio:1; margin:0 auto; touch-action:none; cursor:crosshair; -webkit-tap-highlight-color:transparent; }
.cp-grid { display:grid; grid-template-columns:repeat(13, 1fr); gap:2px; }
.omn-modal.cp-modal .cp-cell { width:auto; min-width:0; aspect-ratio:1; margin:0; padding:0; border:0; border-radius:3px; cursor:pointer; -webkit-tap-highlight-color:transparent; }
/* The ring around the cell of the current color is black and white, thus it
   shows on each cell color. */
.omn-modal.cp-modal .cp-cell.cp-on { box-shadow:inset 0 0 0 2px #fff, 0 0 0 2px rgba(0, 0, 0, .75); position:relative; z-index:1; }
.omn-modal.cp-modal .cp-cell:focus-visible { outline:2px solid var(--omn-accent); outline-offset:1px; }
.cp-rows { display:flex; flex-direction:column; gap:12px; margin-bottom:12px; }
.cp-row { display:grid; grid-template-columns:1.6rem 1fr 4.2rem; align-items:center; gap:10px; }
.omn-modal.cp-modal .cp-lbl { justify-self:start; width:auto; margin:0; padding:0 1px; border:0; border-bottom:1px dashed var(--omn-text-faint); border-radius:0; background:none; color:var(--omn-text-heading); font-size:.9rem; font-weight:700; line-height:1.4; cursor:pointer; }
.omn-modal.cp-modal .cp-lbl:hover { color:var(--omn-accent-hover); border-bottom-color:var(--omn-accent-hover); }
.omn-modal.cp-modal .cp-lbl:focus-visible { outline:2px solid var(--omn-accent); outline-offset:2px; }
.cp-slider { position:relative; height:32px; touch-action:none; cursor:pointer; border-radius:16px; outline-offset:2px; -webkit-tap-highlight-color:transparent; }
.cp-slider:focus-visible { outline:2px solid var(--omn-accent); }
.cp-track { position:absolute; left:12px; right:12px; top:50%; height:6px; margin-top:-3px; border-radius:3px; background:var(--omn-bg-inset); border:1px solid var(--omn-border-strong); box-sizing:border-box; }
.cp-thumb { position:absolute; top:50%; width:24px; height:24px; margin:-12px 0 0 -12px; border-radius:50%; background:var(--omn-bg-surface); border:2px solid var(--omn-text-muted); box-sizing:border-box; box-shadow:0 1px 3px var(--omn-shadow); pointer-events:none; }
.cp-slider:focus-visible .cp-thumb { border-color:var(--omn-accent); }
.omn-modal.cp-modal input { margin:0; padding:0 6px; height:32px; font:13px ui-monospace, Menlo, Consolas, monospace; background:var(--omn-bg-inset); border:1px solid var(--omn-border-strong); border-radius:4px; }
.omn-modal.cp-modal input:focus { border-color:var(--omn-accent); outline:1px solid var(--omn-accent); }
.omn-modal.cp-modal .cp-text { width:100%; margin-bottom:14px; }
.cp-modal .cp-bad { border-color:var(--omn-danger); outline:1px solid var(--omn-danger); }
.cp-modal .omn-modal-buttons-row button { margin:0; }
/* When "Live" is on, the page under the dialog shows with no shade. On a wide
   screen, the dialog moves to the right side, thus more of the page shows. */
.omn-overlay.cp-see { background:transparent; }
.omn-overlay.cp-see .cp-modal { border:1px solid var(--omn-border-strong); box-shadow:0 6px 24px var(--omn-shadow-strong); }
@media (min-width: 900px) { .omn-overlay.cp-see { justify-content:flex-end; padding-right:24px; } }
</style>

<div id="csRoot" class="cs-root">Loading…</div>
<div id="csStatus" class="cs-status"></div>

<script type="module">{
  'use strict';
  const FILE = 'omn-go-schemes.json';
  const CORE_CSS = '/css/OMN-Go/omn-go-core.css';
  const CUSTOM_CSS = '/css/omn-go-custom.css';
  const BLOCK_START = '/* ====OMN-GO-SCHEME-BEGIN==== */';
  const BLOCK_END = '/* ====OMN-GO-SCHEME-END==== */';
  const BLOCK_RE = /\s*\/\* ====OMN-GO-SCHEME-BEGIN==== \*\/[\s\S]*?\/\* ====OMN-GO-SCHEME-END==== \*\//;
  const NAME_RE = /OMN-Go scheme:\s*([^*\n]+)/;
  const PALETTES = ['light', 'dark'];
  /* The groups of the editor. A token goes into the first group that matches
     its name. The token list itself comes from the palette of the core
     stylesheet, thus a new OMN-Go token shows here with no change of this page. */
  const GROUPS = [
    { title: 'Surfaces', re: /^bg(-|$)/ },
    { title: 'Text', re: /^text(-|$)/ },
    { title: 'Links', re: /^link(-|$)/ },
    { title: 'Borders', re: /^border(-|$)/ },
    { title: 'Accent and state', re: /^(accent|success|danger|info|secondary|on-accent)(-|$)/ },
    { title: 'Tags', re: /^tag-/ },
    { title: 'Search', re: /^search-/ },
    { title: 'Tables', re: /^table-/ },
    { title: 'Code blocks', re: /^code-/ },
    { title: 'Start page', re: /^start-/ },
    { title: 'Files page', re: /^files?-/ },
    { title: 'State dots', re: /^state-/ },
    { title: 'JS console', re: /^console-/ },
    { title: 'Bookmarks page', re: /^bookmarks?-/ },
    { title: 'Color marks', re: /^mark-/ },
    { title: 'Shadows and overlay', re: /^(shadow|overlay)/ },
    { title: 'Other', re: /./ }
  ];
  /* Each pair is a text color, then its background. The table shows a pair
     only when the palette has the two tokens. */
  const CONTRAST_PAIRS = [
    ['text', 'bg'], ['text', 'bg-surface'], ['text-strong', 'bg'], ['text-heading', 'bg-surface'],
    ['text-muted', 'bg-surface'], ['text-faint', 'bg'], ['text-dim', 'bg-band'], ['text', 'bg-inset'],
    ['text', 'bg-band'], ['text', 'bg-metadata'], ['text', 'bg-toc'], ['accent', 'bg-surface'],
    ['link', 'bg'], ['link-visited', 'bg'], ['link-hover', 'bg'], ['link', 'bg-surface'],
    ['on-accent', 'accent'], ['on-accent', 'success'], ['on-accent', 'success-hover'], ['on-accent', 'danger'],
    ['on-accent', 'info'], ['on-accent', 'secondary'], ['text', 'tag-bg'],
    ['text-strong', 'bg-band'], ['accent-hover', 'bg-hover'],
    ['table-th-text', 'table-th-bg'], ['table-text', 'table-row-odd'], ['table-text', 'table-row-even'],
    ['search-hit-text', 'search-hit-bg'], ['start-btn-text', 'start-notes-bg'], ['start-btn-text', 'start-bookmarks-bg'],
    ['on-accent', 'files-source-bg'], ['file-app', 'bg-surface'], ['file-alert', 'bg-surface'],
    ['file-keep', 'bg-surface'], ['file-derived', 'bg-surface'], ['file-plain', 'bg-surface'],
    ['code-text', 'code-bg'], ['code-comment', 'code-bg'], ['code-string', 'code-bg'], ['code-variable', 'code-bg'],
    ['code-literal', 'code-bg'], ['code-built-in', 'code-bg'], ['code-meta', 'code-bg'], ['code-meta-string', 'code-bg'],
    ['code-tag-name', 'code-bg'], ['code-tag-attr', 'code-bg'],
    ['console-text', 'console-bg'], ['console-line', 'console-bg'], ['console-warn', 'console-bg'], ['console-error', 'console-bg'],
    ['mark-ink', 'mark-yellow'], ['mark-ink', 'mark-aqua']
  ];
  /* A scheme keeps each font as a CSS font stack. An empty stack or size
     keeps the OMN-Go default. The first four fonts are the default fonts of
     Android and iOS. The others are desktop fonts. */
  const FONT_OPTIONS = [
    { label: 'OMN-Go default', stack: '' },
    { label: 'System UI', stack: "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" },
    { label: 'System Sans', stack: "sans-serif" },
    { label: 'System Serif', stack: "serif" },
    { label: 'System Mono', stack: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Courier New', monospace" },
    { label: 'Sans-serif', stack: "Verdana, Geneva, sans-serif" },
    { label: 'Arial', stack: "Arial, Helvetica, sans-serif" },
    { label: 'Trebuchet', stack: "'Trebuchet MS', 'Segoe UI', sans-serif" },
    { label: 'Georgia', stack: "Georgia, 'Times New Roman', serif" },
    { label: 'Palatino', stack: "'Palatino Linotype', Palatino, 'Book Antiqua', Georgia, serif" },
    { label: 'Bookman', stack: "'Bookman Old Style', Bookman, serif" },
    { label: 'Garamond', stack: "Garamond, 'Apple Garamond', 'Times New Roman', serif" },
    { label: 'Monospace', stack: "'Courier New', Courier, monospace" }
  ];
  const MONO_OPTIONS = [
    { label: 'OMN-Go default', stack: '' },
    { label: 'System Mono', stack: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Courier New', monospace" },
    { label: 'Menlo / SF Mono', stack: "SFMono-Regular, Menlo, Monaco, Consolas, monospace" },
    { label: 'Consolas', stack: "Consolas, 'Courier New', monospace" },
    { label: 'Courier', stack: "'Courier New', Courier, monospace" },
    { label: 'Monospace', stack: "monospace" }
  ];
  const FONT_SIZES = ['', '13px', '14px', '15px', '16px', '17px', '18px', '19px', '20px', '21px', '22px', '24px', '26px', '28px', '30px', '32px', '34px', '36px'];
  const FONT_DEFAULT = { main: '', mainSize: '', code: '', codeSize: '' };
  /* Example schemes. Each one sets only some tokens. The other tokens keep
     the OMN-Go default. */
  const EXAMPLES = [
    { name: 'Nord', light: { 'bg': '#eceff4', 'bg-surface': '#e5e9f0', 'bg-band': '#d8dee9', 'bg-inset': '#e5e9f0', 'bg-hover': '#c8d1dd', 'text': '#2e3440', 'text-strong': '#2e3440', 'text-heading': '#3b4252', 'text-muted': '#4c566a', 'text-faint': '#616e88', 'border': '#d8dee9', 'border-soft': '#d8dee9', 'border-card': '#c9d1de', 'border-strong': '#aab4c4', 'accent': '#5e81ac', 'accent-hover': '#81a1c1', 'success': '#a3be8c', 'success-hover': '#8fb573', 'danger': '#bf616a', 'info': '#88c0d0', 'secondary': '#4c566a', 'tag-bg': '#d8dee9', 'tag-border': '#8f9bb0', 'tag-selected': '#b0bcc9', 'search-hit-bg': '#ebcb8b', 'search-hit-text': '#2e3440', 'table-border': '#5e81ac', 'table-th-bg': '#d8dee9', 'table-th-text': '#2e3440', 'table-row-odd': '#e5e9f0', 'table-row-even': '#eceff4', 'table-text': '#2e3440', 'bg-metadata': '#d8dee9', 'bg-toc': '#eceff4' }, dark: { 'bg': '#2e3440', 'bg-surface': '#3b4252', 'bg-band': '#434c5e', 'bg-inset': '#3b4252', 'bg-hover': '#4c566a', 'text': '#eceff4', 'text-strong': '#eceff4', 'text-heading': '#d8dee9', 'text-muted': '#aab4c4', 'text-faint': '#8f9bb0', 'border': '#4c566a', 'border-soft': '#434c5e', 'border-card': '#434c5e', 'border-strong': '#616e88', 'accent': '#88c0d0', 'accent-hover': '#81a1c1', 'success': '#a3be8c', 'success-hover': '#b6d7a8', 'danger': '#bf616a', 'info': '#81a1c1', 'secondary': '#d8dee9', 'tag-bg': '#434c5e', 'tag-border': '#8f9bb0', 'tag-selected': '#616e88', 'search-hit-bg': '#ebcb8b', 'search-hit-text': '#2e3440', 'table-border': '#81a1c1', 'table-th-bg': '#434c5e', 'table-th-text': '#eceff4', 'table-row-odd': '#3b4252', 'table-row-even': '#2e3440', 'table-text': '#eceff4', 'bg-metadata': '#434c5e', 'bg-toc': '#2e3440' } },
    { name: 'Solarized', light: { 'bg': '#fdf6e3', 'bg-surface': '#eee8d5', 'bg-band': '#e8e0cc', 'bg-inset': '#eee8d5', 'bg-hover': '#e0d9c3', 'text': '#657b83', 'text-strong': '#586e75', 'text-heading': '#657b83', 'text-muted': '#839496', 'text-faint': '#93a1a1', 'border': '#d6cfb6', 'border-soft': '#e0d9c3', 'border-card': '#d6cfb6', 'border-strong': '#b8ae94', 'accent': '#268bd2', 'accent-hover': '#2aa198', 'success': '#859900', 'success-hover': '#718400', 'danger': '#dc322f', 'info': '#2aa198', 'secondary': '#839496', 'tag-bg': '#eee8d5', 'tag-border': '#93a1a1', 'tag-selected': '#d6cfb6', 'search-hit-bg': '#b58900', 'search-hit-text': '#fdf6e3', 'table-border': '#268bd2', 'table-th-bg': '#eee8d5', 'table-th-text': '#586e75', 'table-row-odd': '#eee8d5', 'table-row-even': '#fdf6e3', 'table-text': '#657b83', 'bg-metadata': '#e8e0cc', 'bg-toc': '#fdf6e3' }, dark: { 'bg': '#002b36', 'bg-surface': '#073642', 'bg-band': '#0a3a46', 'bg-inset': '#073642', 'bg-hover': '#0f4b5a', 'text': '#839496', 'text-strong': '#93a1a1', 'text-heading': '#93a1a1', 'text-muted': '#657b83', 'text-faint': '#586e75', 'border': '#586e75', 'border-soft': '#0a3a46', 'border-card': '#0e4a58', 'border-strong': '#657b83', 'accent': '#268bd2', 'accent-hover': '#2aa198', 'success': '#859900', 'success-hover': '#95a60a', 'danger': '#dc322f', 'info': '#2aa198', 'secondary': '#839496', 'tag-bg': '#073642', 'tag-border': '#586e75', 'tag-selected': '#0e4a58', 'search-hit-bg': '#b58900', 'search-hit-text': '#002b36', 'table-border': '#268bd2', 'table-th-bg': '#073642', 'table-th-text': '#93a1a1', 'table-row-odd': '#073642', 'table-row-even': '#002b36', 'table-text': '#839496', 'bg-metadata': '#0a3a46', 'bg-toc': '#002b36' } },
    { name: 'Forest', light: { 'bg': '#f2f7f1', 'bg-surface': '#ffffff', 'bg-band': '#e2ece0', 'bg-inset': '#e9f1e7', 'bg-hover': '#d4e3d0', 'text': '#2f3d31', 'text-strong': '#1d2a1f', 'text-heading': '#3c4b3e', 'text-muted': '#5c6f5f', 'text-faint': '#71846f', 'border': '#c4d5c0', 'border-soft': '#d3e0d0', 'border-card': '#c4d5c0', 'border-strong': '#9db398', 'accent': '#2e7d32', 'accent-hover': '#1b5e20', 'success': '#43a047', 'success-hover': '#388e3c', 'danger': '#c62828', 'info': '#00695c', 'secondary': '#5c7a63', 'tag-bg': '#e2ece0', 'tag-border': '#6f8f74', 'tag-selected': '#bcd6b8', 'search-hit-bg': '#fff59d', 'search-hit-text': '#1d2a1f', 'table-border': '#2e7d32', 'table-th-bg': '#d3e0d0', 'table-th-text': '#1d2a1f', 'table-row-odd': '#eef5ec', 'table-row-even': '#ffffff', 'table-text': '#2f3d31', 'bg-metadata': '#e2ece0', 'bg-toc': '#f2f7f1' }, dark: { 'bg': '#16211b', 'bg-surface': '#1e2c22', 'bg-band': '#233326', 'bg-inset': '#1e2c22', 'bg-hover': '#2a3d2e', 'text': '#cfe3d2', 'text-strong': '#e8f2e9', 'text-heading': '#b8d0bc', 'text-muted': '#8fae93', 'text-faint': '#7d9a81', 'border': '#3a4f3e', 'border-soft': '#2a3d2e', 'border-card': '#2a3d2e', 'border-strong': '#4d6652', 'accent': '#81c784', 'accent-hover': '#a5d6a7', 'success': '#66bb6a', 'success-hover': '#81c784', 'danger': '#e57373', 'info': '#4db6ac', 'secondary': '#a5c8a9', 'tag-bg': '#233326', 'tag-border': '#7d9a81', 'tag-selected': '#3a4f3e', 'search-hit-bg': '#b89b2e', 'search-hit-text': '#16211b', 'table-border': '#81c784', 'table-th-bg': '#233326', 'table-th-text': '#e8f2e9', 'table-row-odd': '#1e2c22', 'table-row-even': '#16211b', 'table-text': '#cfe3d2', 'bg-metadata': '#233326', 'bg-toc': '#16211b' } },
    { name: 'Slate', light: { 'bg': '#f4f7fb', 'bg-surface': '#ffffff', 'bg-band': '#e8eef7', 'bg-inset': '#eef3f9', 'bg-hover': '#d9e4f1', 'text': '#1f2d3d', 'text-strong': '#14202e', 'text-heading': '#2b3a4d', 'text-muted': '#52627a', 'text-faint': '#64748b', 'border': '#c8d4e3', 'border-soft': '#d8e1ee', 'border-card': '#c8d4e3', 'border-strong': '#9db0c7', 'accent': '#2563eb', 'accent-hover': '#1d4ed8', 'success': '#16a34a', 'success-hover': '#15803d', 'danger': '#dc2626', 'info': '#0891b2', 'secondary': '#64748b', 'tag-bg': '#e8eef7', 'tag-border': '#64748b', 'tag-selected': '#c8d4e3', 'search-hit-bg': '#fde047', 'search-hit-text': '#1f2d3d', 'table-border': '#2563eb', 'table-th-bg': '#e8eef7', 'table-th-text': '#14202e', 'table-row-odd': '#f1f5fb', 'table-row-even': '#ffffff', 'table-text': '#1f2d3d', 'bg-metadata': '#e8eef7', 'bg-toc': '#f4f7fb' }, dark: { 'bg': '#0f172a', 'bg-surface': '#1e293b', 'bg-band': '#27364b', 'bg-inset': '#1e293b', 'bg-hover': '#334155', 'text': '#cbd5e1', 'text-strong': '#f1f5f9', 'text-heading': '#b6c2d4', 'text-muted': '#94a3b8', 'text-faint': '#8494ab', 'border': '#334155', 'border-soft': '#27364b', 'border-card': '#27364b', 'border-strong': '#475569', 'accent': '#60a5fa', 'accent-hover': '#93c5fd', 'success': '#4ade80', 'success-hover': '#86efac', 'danger': '#f87171', 'info': '#22d3ee', 'secondary': '#94a3b8', 'tag-bg': '#27364b', 'tag-border': '#8494ab', 'tag-selected': '#334155', 'search-hit-bg': '#a16207', 'search-hit-text': '#ffedb3', 'table-border': '#60a5fa', 'table-th-bg': '#27364b', 'table-th-text': '#f1f5f9', 'table-row-odd': '#1e293b', 'table-row-even': '#0f172a', 'table-text': '#cbd5e1', 'bg-metadata': '#27364b', 'bg-toc': '#0f172a' } },
    { name: 'Peach Cream', light: { 'bg': '#fdf3ec', 'bg-surface': '#ffffff', 'bg-band': '#f7e6d8', 'bg-inset': '#faece1', 'bg-hover': '#f0dccb', 'text': '#4d423b', 'text-strong': '#3a322c', 'text-heading': '#5a4c43', 'text-muted': '#7d6f65', 'text-faint': '#9a8b7f', 'border': '#e3cdbb', 'border-soft': '#ecd9c9', 'border-card': '#ecd9c9', 'border-strong': '#c9ab93', 'accent': '#e08a5e', 'accent-hover': '#d1713d', 'success': '#7fb069', 'success-hover': '#6d9c59', 'danger': '#e77c73', 'info': '#6ba8c4', 'secondary': '#a08e7f', 'tag-bg': '#f7e6d8', 'tag-border': '#9a8b7f', 'tag-selected': '#e0c3a9', 'search-hit-bg': '#ffe6c4', 'search-hit-text': '#4d423b', 'table-border': '#e08a5e', 'table-th-bg': '#f7e6d8', 'table-th-text': '#4d423b', 'table-row-odd': '#faf0e6', 'table-row-even': '#ffffff', 'table-text': '#4d423b', 'bg-metadata': '#f7e6d8', 'bg-toc': '#fdf3ec' }, dark: { 'bg': '#2b2420', 'bg-surface': '#342c27', 'bg-band': '#3b322c', 'bg-inset': '#3f3630', 'bg-hover': '#4a3f37', 'text': '#e8ddd3', 'text-strong': '#f2e9e1', 'text-heading': '#d2c4b8', 'text-muted': '#b3a493', 'text-faint': '#97897a', 'border': '#55483e', 'border-soft': '#463b34', 'border-card': '#463b34', 'border-strong': '#6a5b4f', 'accent': '#f0a071', 'accent-hover': '#f2b28a', 'success': '#8fbf83', 'success-hover': '#a2cf97', 'danger': '#ef9a91', 'info': '#7fb2cf', 'secondary': '#b3a493', 'tag-bg': '#463b34', 'tag-border': '#97897a', 'tag-selected': '#5c4d42', 'search-hit-bg': '#6b573f', 'search-hit-text': '#ffe7c8', 'table-border': '#f0a071', 'table-th-bg': '#40362f', 'table-th-text': '#f2e9e1', 'table-row-odd': '#312a25', 'table-row-even': '#342c27', 'table-text': '#e8ddd3', 'bg-metadata': '#3b322c', 'bg-toc': '#2b2420' } },
    { name: 'Mint Whisper', light: { 'bg': '#eef7f0', 'bg-surface': '#ffffff', 'bg-band': '#dcefe2', 'bg-inset': '#e6f3ea', 'bg-hover': '#cfe5d6', 'text': '#3c4a41', 'text-strong': '#2e3a33', 'text-heading': '#47574d', 'text-muted': '#6f8277', 'text-faint': '#8ba095', 'border': '#c6ddcd', 'border-soft': '#d6e8dc', 'border-card': '#d6e8dc', 'border-strong': '#a3c1ad', 'accent': '#5fa97d', 'accent-hover': '#4f986c', 'success': '#5fa97d', 'success-hover': '#4f986c', 'danger': '#e07a72', 'info': '#6fb1bc', 'secondary': '#8ba095', 'tag-bg': '#dcefe2', 'tag-border': '#6f8277', 'tag-selected': '#b7d5c1', 'search-hit-bg': '#daf0c6', 'search-hit-text': '#3c4a41', 'table-border': '#5fa97d', 'table-th-bg': '#dcefe2', 'table-th-text': '#3c4a41', 'table-row-odd': '#eef6f0', 'table-row-even': '#ffffff', 'table-text': '#3c4a41', 'bg-metadata': '#dcefe2', 'bg-toc': '#eef7f0' }, dark: { 'bg': '#202a24', 'bg-surface': '#29342e', 'bg-band': '#2f3c35', 'bg-inset': '#33413a', 'bg-hover': '#3d4d44', 'text': '#d6e4da', 'text-strong': '#e6f0e9', 'text-heading': '#c0d1c6', 'text-muted': '#94a89c', 'text-faint': '#7e9488', 'border': '#43564b', 'border-soft': '#37473e', 'border-card': '#37473e', 'border-strong': '#556a5d', 'accent': '#8ec9a5', 'accent-hover': '#a3d6b6', 'success': '#8ec9a5', 'success-hover': '#a3d6b6', 'danger': '#ef9a92', 'info': '#7fbcc7', 'secondary': '#a8bdb1', 'tag-bg': '#37473e', 'tag-border': '#7e9488', 'tag-selected': '#4a5c51', 'search-hit-bg': '#5a6b3f', 'search-hit-text': '#e4f5d2', 'table-border': '#8ec9a5', 'table-th-bg': '#2f3c35', 'table-th-text': '#e6f0e9', 'table-row-odd': '#26322b', 'table-row-even': '#29342e', 'table-text': '#d6e4da', 'bg-metadata': '#2f3c35', 'bg-toc': '#202a24' } },
    { name: 'Sky Mist', light: { 'bg': '#eef4fb', 'bg-surface': '#ffffff', 'bg-band': '#dce8f5', 'bg-inset': '#e7effa', 'bg-hover': '#cfdeed', 'text': '#39485c', 'text-strong': '#2b394c', 'text-heading': '#46586e', 'text-muted': '#6d7f94', 'text-faint': '#8a9cb0', 'border': '#c3d4e6', 'border-soft': '#d4e0ec', 'border-card': '#d4e0ec', 'border-strong': '#a3bad0', 'accent': '#5f8fc0', 'accent-hover': '#4f7fb0', 'success': '#64a08a', 'success-hover': '#54907c', 'danger': '#e07a85', 'info': '#6fa3c0', 'secondary': '#8a9cb0', 'tag-bg': '#dce8f5', 'tag-border': '#6d7f94', 'tag-selected': '#b3c8dd', 'search-hit-bg': '#d3e4f2', 'search-hit-text': '#39485c', 'table-border': '#5f8fc0', 'table-th-bg': '#dce8f5', 'table-th-text': '#39485c', 'table-row-odd': '#eef5fb', 'table-row-even': '#ffffff', 'table-text': '#39485c', 'bg-metadata': '#dce8f5', 'bg-toc': '#eef4fb' }, dark: { 'bg': '#1d2531', 'bg-surface': '#252f3e', 'bg-band': '#2b3748', 'bg-inset': '#30404f', 'bg-hover': '#39485c', 'text': '#d2dbe6', 'text-strong': '#e2e9f1', 'text-heading': '#bcc9d8', 'text-muted': '#8f9fb2', 'text-faint': '#7a8b9f', 'border': '#3f5064', 'border-soft': '#344256', 'border-card': '#344256', 'border-strong': '#51647a', 'accent': '#85aed6', 'accent-hover': '#9abee2', 'success': '#93c2a9', 'success-hover': '#a5d1b8', 'danger': '#ef9aa4', 'info': '#7cabcf', 'secondary': '#a4b3c4', 'tag-bg': '#344256', 'tag-border': '#7a8b9f', 'tag-selected': '#46566b', 'search-hit-bg': '#4a5a70', 'search-hit-text': '#e0ebf5', 'table-border': '#85aed6', 'table-th-bg': '#2b3748', 'table-th-text': '#e2e9f1', 'table-row-odd': '#232c39', 'table-row-even': '#252f3e', 'table-text': '#d2dbe6', 'bg-metadata': '#2b3748', 'bg-toc': '#1d2531' } },
    { name: 'Lavender Fog', light: { 'bg': '#f3f0fa', 'bg-surface': '#ffffff', 'bg-band': '#e5dff2', 'bg-inset': '#ece7f7', 'bg-hover': '#dbcfe8', 'text': '#443f55', 'text-strong': '#332f45', 'text-heading': '#514b66', 'text-muted': '#7a7390', 'text-faint': '#9a93ad', 'border': '#d3c9e4', 'border-soft': '#dfd6ec', 'border-card': '#dfd6ec', 'border-strong': '#b3a6cd', 'accent': '#8a6fb8', 'accent-hover': '#7a5fa8', 'success': '#7fa08a', 'success-hover': '#6f907b', 'danger': '#e08a9a', 'info': '#7fa3c0', 'secondary': '#9a93ad', 'tag-bg': '#e5dff2', 'tag-border': '#7a7390', 'tag-selected': '#c4b6dd', 'search-hit-bg': '#e8daf2', 'search-hit-text': '#443f55', 'table-border': '#8a6fb8', 'table-th-bg': '#e5dff2', 'table-th-text': '#443f55', 'table-row-odd': '#f1eef8', 'table-row-even': '#ffffff', 'table-text': '#443f55', 'bg-metadata': '#e5dff2', 'bg-toc': '#f3f0fa' }, dark: { 'bg': '#241f31', 'bg-surface': '#2d2739', 'bg-band': '#342e42', 'bg-inset': '#3a3248', 'bg-hover': '#463c56', 'text': '#ded5eb', 'text-strong': '#ece5f4', 'text-heading': '#c6bcd6', 'text-muted': '#9a8fb0', 'text-faint': '#867b9c', 'border': '#4c415e', 'border-soft': '#403754', 'border-card': '#403754', 'border-strong': '#605273', 'accent': '#b09acd', 'accent-hover': '#c0acd9', 'success': '#9ab8a2', 'success-hover': '#acc7b3', 'danger': '#ef9aa8', 'info': '#87a5c4', 'secondary': '#a9a0bd', 'tag-bg': '#403754', 'tag-border': '#867b9c', 'tag-selected': '#554966', 'search-hit-bg': '#5d4b6b', 'search-hit-text': '#f0e2fa', 'table-border': '#b09acd', 'table-th-bg': '#342e42', 'table-th-text': '#ece5f4', 'table-row-odd': '#2a2438', 'table-row-even': '#2d2739', 'table-text': '#ded5eb', 'bg-metadata': '#342e42', 'bg-toc': '#241f31' } },
    { name: 'Solarized Orange', light: { 'bg': '#fdf6e3', 'bg-surface': '#eee8d5', 'bg-band': '#ecdfc0', 'bg-inset': '#eee8d5', 'bg-hover': '#e2d3b2', 'text': '#657b83', 'text-strong': '#586e75', 'text-heading': '#657b83', 'text-muted': '#839496', 'text-faint': '#93a1a1', 'border': '#d9c9a8', 'border-soft': '#e3d4b4', 'border-card': '#d9c9a8', 'border-strong': '#bfa379', 'accent': '#cb4b16', 'accent-hover': '#e0662a', 'success': '#859900', 'success-hover': '#718400', 'danger': '#dc322f', 'info': '#d33682', 'secondary': '#8a7f6b', 'tag-bg': '#eee8d5', 'tag-border': '#93a1a1', 'tag-selected': '#d8c39a', 'search-hit-bg': '#cb4b16', 'search-hit-text': '#fdf6e3', 'table-border': '#cb4b16', 'table-th-bg': '#eee8d5', 'table-th-text': '#586e75', 'table-row-odd': '#eee8d5', 'table-row-even': '#fdf6e3', 'table-text': '#657b83', 'bg-metadata': '#ecdfc0', 'bg-toc': '#fdf6e3' }, dark: { 'bg': '#002b36', 'bg-surface': '#073642', 'bg-band': '#0a3a46', 'bg-inset': '#073642', 'bg-hover': '#0f4b5a', 'text': '#839496', 'text-strong': '#93a1a1', 'text-heading': '#93a1a1', 'text-muted': '#657b83', 'text-faint': '#586e75', 'border': '#586e75', 'border-soft': '#0a3a46', 'border-card': '#0e4a58', 'border-strong': '#657b83', 'accent': '#cb4b16', 'accent-hover': '#e0662a', 'success': '#859900', 'success-hover': '#95a60a', 'danger': '#dc322f', 'info': '#d33682', 'secondary': '#839496', 'tag-bg': '#073642', 'tag-border': '#586e75', 'tag-selected': '#0e4a58', 'search-hit-bg': '#cb4b16', 'search-hit-text': '#fdf6e3', 'table-border': '#cb4b16', 'table-th-bg': '#073642', 'table-th-text': '#93a1a1', 'table-row-odd': '#073642', 'table-row-even': '#002b36', 'table-text': '#839496', 'bg-metadata': '#0a3a46', 'bg-toc': '#002b36' } },
    { name: 'Solarized Amber', light: { 'bg': '#fdf6e3', 'bg-surface': '#eee8d5', 'bg-band': '#edddb6', 'bg-inset': '#eee8d5', 'bg-hover': '#e5d3a9', 'text': '#657b83', 'text-strong': '#586e75', 'text-heading': '#657b83', 'text-muted': '#839496', 'text-faint': '#93a1a1', 'border': '#dcc99e', 'border-soft': '#e6d5ae', 'border-card': '#dcc99e', 'border-strong': '#c3a878', 'accent': '#c96a1a', 'accent-hover': '#e08434', 'success': '#859900', 'success-hover': '#718400', 'danger': '#dc322f', 'info': '#d38b3a', 'secondary': '#8c7c5c', 'tag-bg': '#eee8d5', 'tag-border': '#93a1a1', 'tag-selected': '#dcc89b', 'search-hit-bg': '#c96a1a', 'search-hit-text': '#fdf6e3', 'table-border': '#c96a1a', 'table-th-bg': '#eee8d5', 'table-th-text': '#586e75', 'table-row-odd': '#eee8d5', 'table-row-even': '#fdf6e3', 'table-text': '#657b83', 'bg-metadata': '#edddb6', 'bg-toc': '#fdf6e3' }, dark: { 'bg': '#002b36', 'bg-surface': '#073642', 'bg-band': '#0a3a46', 'bg-inset': '#073642', 'bg-hover': '#0f4b5a', 'text': '#839496', 'text-strong': '#93a1a1', 'text-heading': '#93a1a1', 'text-muted': '#657b83', 'text-faint': '#586e75', 'border': '#586e75', 'border-soft': '#0a3a46', 'border-card': '#0e4a58', 'border-strong': '#657b83', 'accent': '#e08434', 'accent-hover': '#ef9a52', 'success': '#859900', 'success-hover': '#95a60a', 'danger': '#dc322f', 'info': '#d38b3a', 'secondary': '#839496', 'tag-bg': '#073642', 'tag-border': '#586e75', 'tag-selected': '#0e4a58', 'search-hit-bg': '#b97a2a', 'search-hit-text': '#fdf6e3', 'table-border': '#e08434', 'table-th-bg': '#073642', 'table-th-text': '#93a1a1', 'table-row-odd': '#073642', 'table-row-even': '#002b36', 'table-text': '#839496', 'bg-metadata': '#0a3a46', 'bg-toc': '#002b36' } },
    { name: 'Solarized Honey', light: { 'bg': '#fdf6e3', 'bg-surface': '#eee8d5', 'bg-band': '#eee2ae', 'bg-inset': '#eee8d5', 'bg-hover': '#e6d89b', 'text': '#657b83', 'text-strong': '#586e75', 'text-heading': '#657b83', 'text-muted': '#839496', 'text-faint': '#93a1a1', 'border': '#ddcb88', 'border-soft': '#e7daa3', 'border-card': '#ddcb88', 'border-strong': '#c6b16c', 'accent': '#c99700', 'accent-hover': '#e0b23c', 'success': '#859900', 'success-hover': '#718400', 'danger': '#dc322f', 'info': '#d3a83a', 'secondary': '#93824f', 'tag-bg': '#eee8d5', 'tag-border': '#93a1a1', 'tag-selected': '#dfcf8e', 'search-hit-bg': '#c99700', 'search-hit-text': '#fdf6e3', 'table-border': '#c99700', 'table-th-bg': '#eee8d5', 'table-th-text': '#586e75', 'table-row-odd': '#eee8d5', 'table-row-even': '#fdf6e3', 'table-text': '#657b83', 'bg-metadata': '#eee2ae', 'bg-toc': '#fdf6e3' }, dark: { 'bg': '#002b36', 'bg-surface': '#073642', 'bg-band': '#0a3a46', 'bg-inset': '#073642', 'bg-hover': '#0f4b5a', 'text': '#839496', 'text-strong': '#93a1a1', 'text-heading': '#93a1a1', 'text-muted': '#657b83', 'text-faint': '#586e75', 'border': '#586e75', 'border-soft': '#0a3a46', 'border-card': '#0e4a58', 'border-strong': '#657b83', 'accent': '#d9a92a', 'accent-hover': '#ecbe4a', 'success': '#859900', 'success-hover': '#95a60a', 'danger': '#dc322f', 'info': '#d3a83a', 'secondary': '#839496', 'tag-bg': '#073642', 'tag-border': '#586e75', 'tag-selected': '#0e4a58', 'search-hit-bg': '#9a7a1a', 'search-hit-text': '#fdf6e3', 'table-border': '#d9a92a', 'table-th-bg': '#073642', 'table-th-text': '#93a1a1', 'table-row-odd': '#073642', 'table-row-even': '#002b36', 'table-text': '#839496', 'bg-metadata': '#0a3a46', 'bg-toc': '#002b36' } },
    { name: 'Solarized Gold', light: { 'bg': '#fdf6e3', 'bg-surface': '#eee8d5', 'bg-band': '#efe3a4', 'bg-inset': '#eee8d5', 'bg-hover': '#e8d98b', 'text': '#657b83', 'text-strong': '#586e75', 'text-heading': '#657b83', 'text-muted': '#839496', 'text-faint': '#93a1a1', 'border': '#decc7c', 'border-soft': '#e8dba0', 'border-card': '#decc7c', 'border-strong': '#c8b05e', 'accent': '#b8912e', 'accent-hover': '#d9b954', 'success': '#859900', 'success-hover': '#718400', 'danger': '#dc322f', 'info': '#c9a63a', 'secondary': '#93854d', 'tag-bg': '#eee8d5', 'tag-border': '#93a1a1', 'tag-selected': '#e0d183', 'search-hit-bg': '#b8912e', 'search-hit-text': '#fdf6e3', 'table-border': '#b8912e', 'table-th-bg': '#eee8d5', 'table-th-text': '#586e75', 'table-row-odd': '#eee8d5', 'table-row-even': '#fdf6e3', 'table-text': '#657b83', 'bg-metadata': '#efe3a4', 'bg-toc': '#fdf6e3' }, dark: { 'bg': '#002b36', 'bg-surface': '#073642', 'bg-band': '#0a3a46', 'bg-inset': '#073642', 'bg-hover': '#0f4b5a', 'text': '#839496', 'text-strong': '#93a1a1', 'text-heading': '#93a1a1', 'text-muted': '#657b83', 'text-faint': '#586e75', 'border': '#586e75', 'border-soft': '#0a3a46', 'border-card': '#0e4a58', 'border-strong': '#657b83', 'accent': '#c9a63a', 'accent-hover': '#e0c05a', 'success': '#859900', 'success-hover': '#95a60a', 'danger': '#dc322f', 'info': '#c9a63a', 'secondary': '#839496', 'tag-bg': '#073642', 'tag-border': '#586e75', 'tag-selected': '#0e4a58', 'search-hit-bg': '#8f7420', 'search-hit-text': '#fdf6e3', 'table-border': '#c9a63a', 'table-th-bg': '#073642', 'table-th-text': '#93a1a1', 'table-row-odd': '#073642', 'table-row-even': '#002b36', 'table-text': '#839496', 'bg-metadata': '#0a3a46', 'bg-toc': '#002b36' } }
  ];
  const root = document.querySelector('#csRoot');
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
  const deep = (o) => JSON.parse(JSON.stringify(o));
  /* The default palette: DEF.light and DEF.dark hold each token value of the
     core stylesheet, ORDER holds the token names, and HINT holds the comment
     of each light value. loadPalette fills them. */
  const DEF = { light: {}, dark: {} };
  const ORDER = [];
  const HINT = {};
  let mySchemes = [];
  let activeName = null;
  let draft = null;
  let previewOn = false;
  let applied = null;
  let openPanel = null;
  let themeTest = null;   // null, 'light' or 'dark'
  let pvMode = 'light';   // the palette of the component preview
  function say(msg, ok) {
    const s = document.getElementById('csStatus');
    if (!s) return;
    s.textContent = msg;
    s.className = 'cs-status' + (msg ? (ok ? ' cs-status--ok' : ' cs-status--err') : '');
  }
  /* The server adds ".html" to an href that it finds as text in a script.
     Thus the page makes the /user_json/ links with setAttribute. */
  function userJsonLink(inner, suffix, download) {
    const a = document.createElement('a');
    a.setAttribute('href', '/user_json/' + FILE + (suffix || ''));
    if (download) a.setAttribute('download', FILE);
    a.innerHTML = inner;
    return a.outerHTML;
  }
  /* ---- The color picker ----
     The same picker as the note "Color picker test". It is in its own
     function, thus its names do not mix with the names of this page. */
  const picker = (() => {
    /* ---- Color math. h is in degrees, s, l and a are from 0 to 1, r, g and b
       are from 0 to 255. ---- */
    const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
    function hslToRgb(h, s, l) {
      h = ((h % 360) + 360) % 360;
      const c = (1 - Math.abs(2 * l - 1)) * s;
      const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
      const m = l - c / 2;
      let r = 0, g = 0, b = 0;
      if (h < 60) { r = c; g = x; } else if (h < 120) { r = x; g = c; } else if (h < 180) { g = c; b = x; }
      else if (h < 240) { g = x; b = c; } else if (h < 300) { r = x; b = c; } else { r = c; b = x; }
      return [Math.round((r + m) * 255), Math.round((g + m) * 255), Math.round((b + m) * 255)];
    }
    /* rgbToHsl answers h as NaN for a gray. The picker then keeps its hue. */
    function rgbToHsl(r, g, b) {
      r /= 255; g /= 255; b /= 255;
      const max = Math.max(r, g, b), min = Math.min(r, g, b), d = max - min;
      const l = (max + min) / 2;
      if (d === 0) return [NaN, 0, l];
      const s = d / (1 - Math.abs(2 * l - 1));
      let h;
      if (max === r) h = 60 * (((g - b) / d) % 6);
      else if (max === g) h = 60 * ((b - r) / d + 2);
      else h = 60 * ((r - g) / d + 4);
      return [(h + 360) % 360, clamp(s, 0, 1), l];
    }
    const fmtAlpha = (a) => String(Math.round(a * 100) / 100);
    /* rgbString answers #rrggbb for an opaque color, and rgba(r, g, b, a) for a
       color with an opacity. */
    const hex2 = (v) => (v < 16 ? '0' : '') + v.toString(16);
    function rgbString(r, g, b, a) {
      return a >= 1 ? '#' + hex2(r) + hex2(g) + hex2(b) : 'rgba(' + r + ', ' + g + ', ' + b + ', ' + fmtAlpha(a) + ')';
    }
    /* parseColor answers {r, g, b, a} or {h, s, l, a}, or null. */
    function parseColor(text) {
      const t = String(text || '').trim().toLowerCase();
      let m = t.match(/^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/);
      if (m) {
        let hex = m[1];
        if (hex.length <= 4) hex = hex.split('').map((c) => c + c).join('');
        const n = (i) => parseInt(hex.slice(i, i + 2), 16);
        return { r: n(0), g: n(2), b: n(4), a: hex.length === 8 ? Math.round((n(6) / 255) * 100) / 100 : 1 };
      }
      m = t.match(/^(rgba?|hsla?)\(\s*([^)]*)\)$/);
      if (!m) return null;
      const parts = m[2].replace(/\s*\/\s*/, ' / ').split(/\s*,\s*|\s+(?:\/\s+)?/).filter((p) => p !== '/' && p !== '');
      if (parts.length < 3 || parts.length > 4) return null;
      const num = (p) => (/^-?\d*\.?\d+%?$/.test(p) ? parseFloat(p) : NaN);
      const alpha = (p) => (p === undefined ? 1 : clamp(p.endsWith('%') ? num(p) / 100 : num(p), 0, 1));
      const a = alpha(parts[3]);
      if (isNaN(a)) return null;
      if (m[1].startsWith('rgb')) {
        const c = parts.slice(0, 3).map((p) => (p.endsWith('%') ? num(p) * 2.55 : num(p)));
        if (c.some(isNaN)) return null;
        return { r: Math.round(clamp(c[0], 0, 255)), g: Math.round(clamp(c[1], 0, 255)), b: Math.round(clamp(c[2], 0, 255)), a: a };
      }
      const h = num(parts[0].replace(/deg$/, '')), s = num(parts[1]), l = num(parts[2]);
      if ([h, s, l].some(isNaN)) return null;
      return { h: ((h % 360) + 360) % 360, s: clamp(s, 0, 100) / 100, l: clamp(l, 0, 100) / 100, a: a };
    }
    /* ---- Visualizer 1: the hue ring with a triangle ----
       The sizes are in CSS pixels of a 220 x 220 box. The canvas has more
       pixels on a screen with a high pixel density. */
    const TN = 220, TC = TN / 2, RO = TN / 2 - 2, RI = RO * 0.8, TRI = RI * 0.95;
    /* The hue of a point on the ring: 0 at the top, in the clock direction. */
    const ringHue = (x, y) => (Math.atan2(x - TC, -(y - TC)) * 180 / Math.PI + 360) % 360;
    const ringXY = (h, r) => [TC + r * Math.sin(h * Math.PI / 180), TC - r * Math.cos(h * Math.PI / 180)];
    /* The corners of the triangle: the full color at the right, white at the
       top and black at the bottom. */
    const TP = [[TC + TRI, TC], [TC - TRI / 2, TC - TRI * Math.sqrt(3) / 2], [TC - TRI / 2, TC + TRI * Math.sqrt(3) / 2]];
    /* triBary answers the weights of the three corners for a point. A weight
       less than 0 shows that the point is not in the triangle. */
    function triBary(x, y) {
      const [a, b, c] = TP;
      const det = (b[1] - c[1]) * (a[0] - c[0]) + (c[0] - b[0]) * (a[1] - c[1]);
      const w1 = ((b[1] - c[1]) * (x - c[0]) + (c[0] - b[0]) * (y - c[1])) / det;
      const w2 = ((c[1] - a[1]) * (x - c[0]) + (a[0] - c[0]) * (y - c[1])) / det;
      return [w1, w2, 1 - w1 - w2];
    }
    /* The weight of the full color is the chroma. White adds to L. The result
       is [s, l], each from 0 to 1. */
    function baryToSl(w) {
      const ch = w[0], l = w[1] + ch / 2;
      const den = 1 - Math.abs(2 * l - 1);
      return [den > 0.0001 ? clamp(ch / den, 0, 1) : 0, clamp(l, 0, 1)];
    }
    /* slToXY is the opposite of baryToSl: s and l from 0 to 1 give the point. */
    function slToXY(s, l) {
      const ch = s * (1 - Math.abs(2 * l - 1)), wW = l - ch / 2, wK = 1 - ch - wW;
      return [ch * TP[0][0] + wW * TP[1][0] + wK * TP[2][0], ch * TP[0][1] + wW * TP[1][1] + wK * TP[2][1]];
    }
    /* A point out of the triangle moves to the triangle. */
    function triPick(x, y) {
      const w = triBary(x, y).map((v) => Math.max(0, v));
      const sum = w[0] + w[1] + w[2];
      return baryToSl(w.map((v) => v / sum));
    }
    /* ---- Visualizer 2: the swatch grid ----
       12 hue columns in steps of 30 degrees and 1 gray column, 7 rows. */
    const SW_S = 85, SW_L = [90, 78, 65, 50, 38, 26, 15], SW_GRAY = [100, 83, 67, 50, 33, 17, 0];
    function swatch(col, row) {
      return col === 12 ? { h: null, s: 0, l: SW_GRAY[row] } : { h: col * 30, s: SW_S, l: SW_L[row] };
    }
    /* The next hue step of 30 degrees: 215 gives 240, 240 gives 270 and 330
       gives 0. */
    const nextHueStep = (h) => ((Math.floor(h / 30) + 1) * 30) % 360;
    /* The picker keeps the last view of the visualizer. */
    const VIEW_KEY = 'omn-cp-view';
    let lastView = 'tri';
    try { if (localStorage.getItem(VIEW_KEY) === 'grid') lastView = 'grid'; } catch (_) { /* The page works without storage. */ }
    /* ---- Contrast ---- */
    const LEVELS = { aa: 4.5, aaa: 7 };
    const LEVEL_KEY = 'omn-cp-level', LIVE_KEY = 'omn-cp-live';
    let lastLevel = 'aa', lastLive = false;
    try {
      if (localStorage.getItem(LEVEL_KEY) === 'aaa') lastLevel = 'aaa';
      lastLive = localStorage.getItem(LIVE_KEY) === '1';
    } catch (_) { /* The page works without storage. */ }
    const store = (k, v) => { try { localStorage.setItem(k, v); } catch (_) { /* The page works without storage. */ } };
    /* toRgba answers [r, g, b, a] for a color of parseColor. */
    function toRgba(v) {
      const p = parseColor(v);
      if (!p) return null;
      const c = 'h' in p ? hslToRgb(p.h, p.s, p.l) : [p.r, p.g, p.b];
      return [c[0], c[1], c[2], p.a];
    }
    /* over puts a color with an opacity on an opaque color. */
    const over = (top, under) => [0, 1, 2].map((i) => top[i] * top[3] + under[i] * (1 - top[3])).concat(1);
    /* The relative luminance and the contrast ratio of WCAG 2. */
    function luminance(c) {
      const lin = c.slice(0, 3).map((v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); });
      return 0.2126 * lin[0] + 0.7152 * lin[1] + 0.0722 * lin[2];
    }
    function contrast(fg, bg) {
      const x = luminance(fg), y = luminance(bg);
      return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
    }
    /* pairRatio answers the contrast ratio of a color and the other color of a
       pair. pair.as is the part of the other color: 'bg' or 'text'. A color
       with an opacity shows on base, an opaque [r, g, b, 1]. */
    function pairRatio(color, pair, base) {
      const c = toRgba(color), o = toRgba(pair.value);
      if (!c || !o) return NaN;
      if (pair.as === 'bg') { const bg = over(o, base); return contrast(over(c, bg), bg); }
      const bg = over(c, base);
      return contrast(over(o, bg), bg);
    }
    /* A ratio shows with one decimal. It is rounded down, thus 4.49 does not
       show as 4.5. */
    const fmtRatio = (r) => (isNaN(r) ? '?' : (Math.floor(r * 10) / 10).toFixed(1));
    /* fixLightness answers the L (0 to 100) nearest to l at which all pairs
       meet min, or null. H, S and A do not change. */
    function fixLightness(h, s, l, a, pairs, min, base) {
      let best = null;
      for (let L = 0; L <= 100; L++) {
        const c = hslToRgb(h, s / 100, L / 100), v = rgbString(c[0], c[1], c[2], a);
        if (pairs.every((p) => pairRatio(v, p, base) >= min) && (best === null || Math.abs(L - l) < Math.abs(best - l))) best = L;
      }
      return best;
    }
    /* ---- The picker dialog ---- */
    /* Each slider: the state key, the label, the largest value of the field,
       the step of an arrow key, and the quick value of a click on the label. */
    const SLIDERS = [
      { k: 'h', label: 'H', max: 360, step: 1, name: 'Hue, 0 to 360', quick: nextHueStep, tip: 'Go to the next step of 30 degrees' },
      { k: 's', label: 'S', max: 100, step: 1, name: 'Saturation, 0 to 100', quick: () => 100, tip: 'Set S to 100' },
      { k: 'l', label: 'L', max: 100, step: 1, name: 'Lightness, 0 to 100', quick: () => 50, tip: 'Set L to 50' },
      { k: 'a', label: 'A', max: 1, step: 0.01, name: 'Opacity, 0 to 1', quick: () => 1, tip: 'Set A to 1' }
    ];
    const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    /* openPicker shows the picker dialog. The options:
       - title: the title of the dialog.
       - value: the start color.
       - name: the name of the color in the pair list. If not set, the title.
       - pairs: [{name, value, as}], the other color of each pair. as is 'bg'
         when the other color is the background, or 'text' when it is the text.
       - base: the page background, an opaque color. A color with an opacity
         shows on it. If not set, the surface color of the theme.
       - schemeColors: [{name, value}], the colors of the scheme.
       - onInput(value): if set, the dialog has the switch "Live". When the
         switch is on, the dialog sends each change. Cancel sends the start
         color again.
       - onApply(value) and onCancel().
       It answers get(), set(value) and close(). The dialog is a child of
       <body>, because in #omn-preview a fixed element is not fixed to the
       screen. */
    function openPicker(options) {
      const opts = options || {};
      const name = String(opts.name || opts.title || '');
      const pairs = (opts.pairs || []).filter((p) => p && toRgba(p.value) && (p.as === 'bg' || p.as === 'text'));
      const scheme = [];
      for (const c of opts.schemeColors || []) {
        const rgba = c && toRgba(c.value);
        if (!rgba) continue;
        const key = rgbString(rgba[0], rgba[1], rgba[2], rgba[3]);
        const same = scheme.find((x) => x.value === key);
        if (same) same.names.push(c.name); else scheme.push({ value: key, names: [c.name] });
      }
      const old = document.getElementById('cpDialog');
      if (old) old.remove();
      const back = document.activeElement;
      /* st holds h from 0 to 360, s and l from 0 to 100, and a from 0 to 1. */
      const st = { h: 0, s: 100, l: 50, a: 1 };
      const overlay = document.createElement('div');
      overlay.id = 'cpDialog';
      overlay.className = 'omn-overlay';
      overlay.style.display = 'flex';
      overlay.innerHTML =
        '<div class="omn-modal cp-modal" role="dialog" aria-modal="true" aria-labelledby="cpDialogTitle">' +
        '<div class="cp-head"><h2 id="cpDialogTitle">' + esc(opts.title || 'Color') + '</h2>' +
        (typeof opts.onInput === 'function' ? '<label class="cp-live" title="Show each change on the page at once"><input type="checkbox" class="cp-live-box"> Live</label>' : '') +
        '</div>' +
        '<div class="cp-compare">' +
        '<figure><figcaption>Before</figcaption><div class="cp-checker cp-before" title="Go back to this color"><span></span></div></figure>' +
        '<figure><figcaption>After</figcaption><div class="cp-checker cp-after"><span></span></div></figure>' +
        '</div>' +
        (pairs.length ? '<div class="cp-pairs">' +
          '<div class="cp-phead"><span class="cp-psum"></span>' +
          '<div class="cp-seg" role="group" aria-label="Contrast level"><button type="button" data-level="aa">AA</button><button type="button" data-level="aaa">AAA</button></div>' +
          '<button type="button" class="cp-fix" title="Set L to the nearest value at which all pairs meet the level">Fix</button></div>' +
          '<p class="cp-pnote" hidden></p>' +
          '<div class="cp-plist">' + pairs.map((p, i) => {
            const fg = p.as === 'bg' ? name : p.name, bg = p.as === 'bg' ? p.name : name;
            return '<div class="cp-prow" data-p="' + i + '"><div class="cp-checker cp-psample"><span>Aa</span></div>' +
              '<span class="cp-pname"><code>' + esc(fg) + '</code> on <code>' + esc(bg) + '</code></span>' +
              '<span class="cp-pratio"></span><span class="cp-mark"></span></div>';
          }).join('') + '</div>' +
          '</div>' : '') +
        '<div class="cp-seg cp-views" role="tablist" aria-label="Visualizer">' +
        '<button type="button" role="tab" data-view="tri">Triangle</button>' +
        '<button type="button" role="tab" data-view="grid">Swatches</button>' +
        '</div>' +
        '<div class="cp-vis">' +
        '<canvas class="cp-tri" role="tabpanel" aria-label="Hue ring and triangle"></canvas>' +
        '<div class="cp-gridview" role="tabpanel" aria-label="Swatches">' +
        (scheme.length ? '<div class="cp-sch" aria-label="Scheme colors">' + scheme.map((c, i) =>
          '<button type="button" class="cp-sc cp-checker" data-sc="' + i + '" title="' + esc(c.names.join(', ') + ': ' + c.value) + '" aria-label="' + esc(c.names.join(', ')) + '"><span style="background:' + c.value + '"></span></button>').join('') + '</div>' : '') +
        '<div class="cp-grid">' + Array.from({ length: 7 * 13 }, (_, i) => {
          const col = i % 13, row = Math.floor(i / 13), c = swatch(col, row);
          const css = 'hsl(' + (c.h || 0) + ', ' + c.s + '%, ' + c.l + '%)';
          return '<button type="button" class="cp-cell" tabindex="-1" data-col="' + col + '" data-row="' + row + '" style="background:' + css + '" aria-label="' + css + '"></button>';
        }).join('') + '</div></div>' +
        '</div>' +
        '<div class="cp-rows">' + SLIDERS.map((d) =>
          '<div class="cp-row"><button type="button" class="cp-lbl" data-quick="' + d.k + '" title="' + d.tip + '">' + d.label + '</button>' +
          '<div class="cp-slider" data-k="' + d.k + '" tabindex="0" role="slider" aria-label="' + d.name + '" aria-valuemin="0" aria-valuemax="' + d.max + '"><div class="cp-track"></div><div class="cp-thumb"></div></div>' +
          '<input type="text" inputmode="decimal" data-k="' + d.k + '" aria-label="' + d.name + '"></div>').join('') +
        '</div>' +
        '<input class="cp-text" type="text" spellcheck="false" autocomplete="off" aria-label="Color value">' +
        '<div class="omn-modal-buttons-row"><button type="button" data-a="apply">Apply</button><button type="button" data-a="cancel" class="omn-btn-cancel">Cancel</button></div>' +
        '</div>';
      document.body.appendChild(overlay);
      const q = (sel) => overlay.querySelector(sel);
      const beforeSw = q('.cp-before span'), afterSw = q('.cp-after span'), text = q('.cp-text');
      const value = () => { const c = hslToRgb(st.h, st.s / 100, st.l / 100); return rgbString(c[0], c[1], c[2], st.a); };
      /* setValue answers false when the text is not a color. */
      function setValue(v) {
        const p = parseColor(v);
        if (!p) return false;
        if ('h' in p) { st.h = p.h; st.s = p.s * 100; st.l = p.l * 100; }
        else {
          const hsl = rgbToHsl(p.r, p.g, p.b);
          if (!isNaN(hsl[0])) st.h = hsl[0];
          st.s = hsl[1] * 100; st.l = hsl[2] * 100;
        }
        st.a = p.a;
        return true;
      }
      const shown = (k) => (k === 'a' ? fmtAlpha(st.a) : String(Math.round(st[k])));
      function render(skip) {
        for (const d of SLIDERS) {
          const sl = overlay.querySelector('.cp-slider[data-k="' + d.k + '"]');
          /* The thumb stays inside the slider: its center moves from 12px to
             the width less 12px. */
          sl.querySelector('.cp-thumb').style.left = 'calc(12px + (100% - 24px) * ' + (st[d.k] / d.max) + ')';
          sl.setAttribute('aria-valuenow', shown(d.k));
          const f = overlay.querySelector('input[data-k="' + d.k + '"]');
          if (skip !== f) f.value = shown(d.k);
        }
        beforeSw.style.background = start;
        afterSw.style.background = value();
        if (skip !== text) { text.value = value(); text.classList.remove('cp-bad'); }
        renderVis();
        renderPairs();
        sendLive();
      }
      /* ---- Pairs and contrast ---- */
      /* themeColor answers a theme color as rgb() or rgba(). The browser
         changes each form of a CSS color to one of these two forms. */
      const probe = document.createElement('i');
      probe.hidden = true;
      overlay.appendChild(probe);
      function themeColor(prop) {
        probe.style.color = '';
        probe.style.color = getComputedStyle(document.documentElement).getPropertyValue(prop).trim();
        return getComputedStyle(probe).color;
      }
      const base = over(toRgba(opts.base) || toRgba(themeColor('--omn-bg-surface')) || [255, 255, 255, 1], [255, 255, 255, 1]);
      let level = lastLevel;
      function renderPairs() {
        if (!pairs.length) return;
        const min = LEVELS[level], now = value();
        let low = Infinity, fails = 0;
        pairs.forEach((p, i) => {
          const row = q('.cp-prow[data-p="' + i + '"]');
          const r0 = pairRatio(start, p, base), r1 = pairRatio(now, p, base);
          const sample = row.querySelector('.cp-psample span');
          sample.style.background = p.as === 'bg' ? p.value : now;
          sample.style.color = p.as === 'bg' ? now : p.value;
          row.querySelector('.cp-pratio').innerHTML = fmtRatio(r0) + ' → <b>' + fmtRatio(r1) + '</b>';
          row.dataset.ratio = fmtRatio(r1);
          const ok = r1 >= min, mark = row.querySelector('.cp-mark');
          mark.textContent = ok ? '✓' : '✗';
          mark.className = 'cp-mark ' + (ok ? 'cp-yes' : 'cp-no');
          mark.title = ok ? 'Meets ' + level.toUpperCase() : 'Does not meet ' + level.toUpperCase();
          low = Math.min(low, r1);
          if (!ok) fails++;
        });
        q('.cp-psum').innerHTML = pairs.length + (pairs.length === 1 ? ' pair' : ' pairs') + ' · lowest <b>' + fmtRatio(low) + ':1</b>' +
          (fails ? ' · ' + fails + ' below ' + level.toUpperCase() : '');
        for (const b of overlay.querySelectorAll('[data-level]')) b.setAttribute('aria-pressed', String(b.dataset.level === level));
        q('.cp-fix').disabled = fails === 0;
      }
      if (pairs.length) {
        q('.cp-phead').addEventListener('click', (e) => {
          const b = e.target.closest('[data-level]');
          if (!b) return;
          level = lastLevel = b.dataset.level;
          store(LEVEL_KEY, level);
          q('.cp-pnote').hidden = true;
          renderPairs();
        });
        q('.cp-fix').addEventListener('click', () => {
          const L = fixLightness(st.h, st.s, st.l, st.a, pairs, LEVELS[level], base);
          const note = q('.cp-pnote');
          if (L === null) {
            note.textContent = 'No value of L meets ' + level.toUpperCase() + ' for all pairs with this H and S. Change H or S, or select AA.';
            note.hidden = false;
            return;
          }
          note.hidden = true;
          st.l = L;
          render();
        });
      }
      /* ---- Live preview ---- */
      const liveBox = q('.cp-live-box');
      let live = !!liveBox && lastLive, sent = false, lastSent = null;
      function sendLive() {
        if (!live) return;
        const v = value();
        if (v === lastSent) return;
        lastSent = v;
        sent = true;
        opts.onInput(v);
      }
      /* unsend puts the start color back on the page. */
      function unsend() {
        if (sent && lastSent !== start) opts.onInput(start);
        sent = false;
        lastSent = null;
      }
      if (liveBox) {
        liveBox.checked = live;
        overlay.classList.toggle('cp-see', live);
        liveBox.addEventListener('change', () => {
          live = lastLive = liveBox.checked;
          overlay.classList.toggle('cp-see', live);
          store(LIVE_KEY, live ? '1' : '0');
          if (live) sendLive(); else unsend();
        });
      }
      /* ---- The visualizer ---- */
      const tri = q('.cp-tri'), gridView = q('.cp-gridview'), grid = q('.cp-grid'), tctx = tri.getContext('2d');
      const dpr = Math.min(2, Math.max(1, Math.round(window.devicePixelRatio || 1)));
      tri.width = tri.height = TN * dpr;
      const img = tctx.createImageData(TN * dpr, TN * dpr);
      /* The ring does not change. Its pixels are painted one time. The edges
         of the ring and of the triangle are smooth: a pixel on an edge is
         partly transparent. */
      (function paintRing() {
        const d = img.data, W = TN * dpr;
        for (let py = 0; py < W; py++) for (let px = 0; px < W; px++) {
          const x = (px + 0.5) / dpr, y = (py + 0.5) / dpr, r = Math.hypot(x - TC, y - TC);
          const cover = clamp(Math.min(r - RI, RO - r) * dpr + 0.5, 0, 1);
          if (cover <= 0) continue;
          const c = hslToRgb(ringHue(x, y), 1, 0.5), i = (py * W + px) * 4;
          d[i] = c[0]; d[i + 1] = c[1]; d[i + 2] = c[2]; d[i + 3] = Math.round(cover * 255);
        }
      })();
      /* The triangle has a new picture only when H changes. */
      const TX0 = Math.floor((TC - TRI / 2 - 2) * dpr), TX1 = Math.ceil((TC + TRI + 2) * dpr);
      const TY0 = Math.floor((TC - TRI - 2) * dpr), TY1 = Math.ceil((TC + TRI + 2) * dpr);
      const triHeight = TRI * 1.5;
      let triHue = null;
      function paintTriangle() {
        const d = img.data, W = TN * dpr;
        for (let py = TY0; py < TY1; py++) for (let px = TX0; px < TX1; px++) {
          const x = (px + 0.5) / dpr, y = (py + 0.5) / dpr, i = (py * W + px) * 4;
          const r = Math.hypot(x - TC, y - TC);
          if (r >= RI - 1) continue; /* A pixel of the ring. */
          const w = triBary(x, y);
          const cover = clamp(Math.min(w[0], w[1], w[2]) * triHeight * dpr + 0.5, 0, 1);
          if (cover <= 0) { d[i + 3] = 0; continue; }
          const sl = triPick(x, y), c = hslToRgb(st.h, sl[0], sl[1]);
          d[i] = c[0]; d[i + 1] = c[1]; d[i + 2] = c[2]; d[i + 3] = Math.round(cover * 255);
        }
        triHue = st.h;
      }
      /* marker draws a black and white ring, thus it shows on each color. */
      function marker(x, y, r) {
        tctx.beginPath(); tctx.arc(x, y, r, 0, Math.PI * 2);
        tctx.lineWidth = 3; tctx.strokeStyle = 'rgba(0, 0, 0, 0.7)'; tctx.stroke();
        tctx.lineWidth = 1.5; tctx.strokeStyle = '#fff'; tctx.stroke();
      }
      let view = lastView;
      function renderVis() {
        for (const b of overlay.querySelectorAll('[data-view]')) b.setAttribute('aria-selected', String(b.dataset.view === view));
        tri.hidden = view !== 'tri';
        gridView.hidden = view !== 'grid';
        if (view === 'tri') {
          if (triHue !== st.h) paintTriangle();
          tctx.setTransform(1, 0, 0, 1, 0, 0);
          tctx.putImageData(img, 0, 0);
          tctx.setTransform(dpr, 0, 0, dpr, 0, 0);
          marker(...ringXY(st.h, (RI + RO) / 2), 7);
          marker(...slToXY(st.s / 100, st.l / 100), 6);
        } else {
          const h = Math.round(st.h) % 360, s = Math.round(st.s), l = Math.round(st.l);
          const now = value();
          for (const b of gridView.querySelectorAll('.cp-sc')) b.classList.toggle('cp-on', scheme[Number(b.dataset.sc)].value === now);
          for (const cell of grid.children) {
            const c = swatch(Number(cell.dataset.col), Number(cell.dataset.row));
            cell.classList.toggle('cp-on', s === c.s && l === c.l && (c.h === null || h === c.h));
          }
        }
      }
      overlay.querySelector('.cp-views').addEventListener('click', (e) => {
        const b = e.target.closest('[data-view]');
        if (!b) return;
        view = lastView = b.dataset.view;
        try { localStorage.setItem(VIEW_KEY, view); } catch (_) { /* The page works without storage. */ }
        renderVis();
      });
      gridView.addEventListener('click', (e) => {
        const sc = e.target.closest('.cp-sc');
        if (sc) { setValue(scheme[Number(sc.dataset.sc)].value); render(); }
      });
      grid.addEventListener('click', (e) => {
        const cell = e.target.closest('.cp-cell');
        if (!cell) return;
        const c = swatch(Number(cell.dataset.col), Number(cell.dataset.row));
        /* A gray cell keeps the hue, thus a move to S above 0 gives the old hue. */
        if (c.h !== null) st.h = c.h;
        st.s = c.s; st.l = c.l;
        render();
      });
      tri.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        tri.setPointerCapture(e.pointerId);
        const at = (ev) => { const r = tri.getBoundingClientRect(); return [(ev.clientX - r.left) * TN / r.width, (ev.clientY - r.top) * TN / r.height]; };
        const p0 = at(e);
        /* A press on the ring sets H. A press in the ring sets S and L. The
           drag keeps the part where it started. */
        const onRing = Math.hypot(p0[0] - TC, p0[1] - TC) >= RI - 4;
        const pick = (p) => {
          if (onRing) st.h = Math.round(ringHue(p[0], p[1])) % 360;
          else { const sl = triPick(p[0], p[1]); st.s = Math.round(sl[0] * 100); st.l = Math.round(sl[1] * 100); }
          render();
        };
        pick(p0);
        const mv = (ev) => pick(at(ev));
        const up = () => { tri.removeEventListener('pointermove', mv); tri.removeEventListener('pointerup', up); tri.removeEventListener('pointercancel', up); };
        tri.addEventListener('pointermove', mv);
        tri.addEventListener('pointerup', up);
        tri.addEventListener('pointercancel', up);
      });
      /* A click on the label of a slider sets its quick value. */
      for (const b of overlay.querySelectorAll('[data-quick]')) {
        const d = SLIDERS.find((x) => x.k === b.dataset.quick);
        b.addEventListener('click', () => { st[d.k] = d.quick(st[d.k]); render(); });
      }
      for (const d of SLIDERS) {
        const sl = overlay.querySelector('.cp-slider[data-k="' + d.k + '"]');
        const setFrom = (e) => {
          const r = sl.getBoundingClientRect();
          const v = clamp((e.clientX - r.left - 12) / (r.width - 24), 0, 1) * d.max;
          st[d.k] = d.k === 'a' ? Math.round(v * 100) / 100 : Math.round(v);
          render();
        };
        sl.addEventListener('pointerdown', (e) => {
          e.preventDefault();
          sl.focus();
          sl.setPointerCapture(e.pointerId);
          setFrom(e);
          const mv = (ev) => setFrom(ev);
          const up = () => { sl.removeEventListener('pointermove', mv); sl.removeEventListener('pointerup', up); sl.removeEventListener('pointercancel', up); };
          sl.addEventListener('pointermove', mv);
          sl.addEventListener('pointerup', up);
          sl.addEventListener('pointercancel', up);
        });
        sl.addEventListener('keydown', (e) => {
          const dir = { ArrowLeft: -1, ArrowDown: -1, ArrowRight: 1, ArrowUp: 1 }[e.key];
          if (!dir) return;
          e.preventDefault();
          const v = st[d.k] + dir * d.step * (e.shiftKey ? 10 : 1);
          st[d.k] = clamp(d.k === 'a' ? Math.round(v * 100) / 100 : v, 0, d.max);
          render();
        });
        const f = overlay.querySelector('input[data-k="' + d.k + '"]');
        f.addEventListener('input', () => {
          const n = parseFloat(f.value.replace(',', '.'));
          if (isNaN(n)) return;
          st[d.k] = clamp(n, 0, d.max);
          render(f);
        });
        f.addEventListener('blur', () => render());
      }
      text.addEventListener('input', () => {
        if (setValue(text.value)) render(text); else text.classList.add('cp-bad');
      });
      text.addEventListener('keydown', (e) => {
        if (e.key !== 'Enter') return;
        e.preventDefault();
        if (setValue(text.value)) render(); else text.classList.add('cp-bad');
      });
      let start = '#ff0000';
      if (setValue(opts.value)) start = value(); else setValue(start);
      q('.cp-before').addEventListener('click', () => { setValue(start); render(); });
      function close() {
        overlay.remove();
        document.removeEventListener('keydown', onKey, true);
        if (back && back.focus) back.focus();
      }
      const onKey = (e) => {
        if (e.key !== 'Escape') return;
        e.preventDefault();
        close();
        unsend();
        if (opts.onCancel) opts.onCancel();
      };
      document.addEventListener('keydown', onKey, true);
      overlay.addEventListener('click', (e) => {
        const b = e.target.closest('[data-a]');
        if (!b) return;
        const v = value();
        close();
        if (b.dataset.a === 'apply') { if (opts.onApply) opts.onApply(v); }
        else { unsend(); if (opts.onCancel) opts.onCancel(); }
      });
      render();
      q('.cp-slider').focus();
      return { get: value, set(v) { const ok = setValue(v); render(); return ok; }, close: close };
    }
    return { open: openPicker, toRgba: toRgba, over: over, contrast: contrast };
  })();
  /* ---- Colors ---- */
  function normHex(v) {
    v = String(v || '').trim().toLowerCase();
    if (/^#([0-9a-f]{6}|[0-9a-f]{8})$/.test(v)) return v;
    if (/^#([0-9a-f]{3}|[0-9a-f]{4})$/.test(v)) return '#' + v.slice(1).split('').map((c) => c + c).join('');
    return null;
  }
  /* A token value is a hex color, or a function color such as rgba(). */
  function normColor(v) {
    const hex = normHex(v);
    if (hex) return hex;
    v = String(v || '').trim().replace(/\s+/g, ' ');
    if (/^(rgba?|hsla?)\([^;{}]*\)$/.test(v) && window.CSS && CSS.supports('color', v)) return v;
    return null;
  }
  /* contrastRatio answers the WCAG contrast ratio of a text color on a
     background in a palette, or null. A color with an opacity shows on the
     page color (bg) of the palette, the same as in the color picker. */
  function contrastRatio(fg, bg, pal) {
    const W = [255, 255, 255, 1];
    const page = picker.toRgba(value(draft, pal, 'bg')), f = picker.toRgba(fg), b = picker.toRgba(bg);
    if (!f || !b) return null;
    const under = picker.over(page || W, W), back = picker.over(b, under);
    return picker.contrast(picker.over(f, back), back);
  }
  /* ---- The default palette ---- */
  async function loadPalette() {
    const res = await fetch(CORE_CSS, { cache: 'no-store' });
    if (!res.ok) throw new Error('the server answered ' + res.status + ' for ' + CORE_CSS);
    const css = await res.text();
    const block = css.match(/:root\s*\{(\s*--omn-light-[\s\S]*?)\n\}/);
    if (!block) throw new Error(CORE_CSS + ' has no palette');
    const re = /--omn-(light|dark)-([\w-]+)\s*:\s*([^;]+);[ \t]*(?:\/\*\s*([^\n]*?)\s*\*\/)?/g;
    let m;
    while ((m = re.exec(block[1])) !== null) {
      const v = normColor(m[3]) || m[3].trim();
      DEF[m[1]][m[2]] = v;
      if (m[1] === 'light') {
        ORDER.push(m[2]);
        if (m[4]) HINT[m[2]] = m[4];
      }
    }
    if (!ORDER.length) throw new Error(CORE_CSS + ' has no palette values');
  }
  const value = (scheme, pal, name) => (scheme[pal] && scheme[pal][name]) || DEF[pal][name];
  const changeCount = (s) => PALETTES.reduce((n, p) => n + Object.keys(s[p] || {}).length, 0);
  function groupsOfTokens() {
    const out = GROUPS.map((g) => ({ title: g.title, tokens: [] }));
    for (const name of ORDER) {
      const i = GROUPS.findIndex((g) => g.re.test(name));
      out[i].tokens.push(name);
    }
    return out.filter((g) => g.tokens.length);
  }
  /* ---- Schemes ---- */
  /* A scheme keeps only the values that differ from the default palette. A
     key may start with "--". A key that is not a token of the palette, and a
     value that is not a color, go away. */
  function cleanPalette(p, pal) {
    const out = {};
    for (const k of Object.keys(p || {})) {
      const name = k.replace(/^--(omn-)?/, '');
      const v = normColor(p[k]);
      if (v && name in DEF[pal] && v !== DEF[pal][name]) out[name] = v;
    }
    return out;
  }
  function normalizeFont(f) {
    const src = f || {};
    const px = (v) => (/^\d+(\.\d+)?px$/.test(v || '') ? v : '');
    const stack = (v) => String(v || '').replace(/[;{}]/g, '').trim();
    return { main: stack(src.main), mainSize: px(src.mainSize), code: stack(src.code), codeSize: px(src.codeSize) };
  }
  const normalizeScheme = (s) => ({
    name: String(s.name).trim(),
    font: normalizeFont(s.font),
    light: cleanPalette(s.light, 'light'),
    dark: cleanPalette(s.dark, 'dark')
  });
  const validScheme = (s) => s && typeof s.name === 'string' && s.name.trim() && typeof s.light === 'object' && typeof s.dark === 'object';
  function fontLabel(stack, list) {
    const opt = list.find((o) => o.stack === stack);
    return opt ? opt.label : stack;
  }
  /* ---- CSS of a scheme ---- */
  const safeComment = (s) => String(s).replace(/\*\//g, '* /').replace(/[\r\n]+/g, ' ');
  function cssFor(scheme) {
    const font = normalizeFont(scheme.font);
    const lines = [
      '/* OMN-Go scheme: ' + safeComment(scheme.name),
      '   The ColorSchemes page writes this block. Change the scheme on that page. */',
      ':root {'
    ];
    for (const pal of PALETTES) {
      for (const name of ORDER) {
        const v = scheme[pal][name];
        if (v) lines.push('  --omn-' + pal + '-' + name + ': ' + v + ';');
      }
    }
    if (font.main) lines.push('  --omn-font: ' + font.main + ';');
    if (font.mainSize) lines.push('  --omn-font-size: ' + font.mainSize + ';');
    if (font.code) lines.push('  --omn-code-font: ' + font.code + ';');
    if (font.codeSize) lines.push('  --omn-code-size: ' + font.codeSize + ';');
    lines.push('}');
    const body = (font.main ? '  font-family: var(--omn-font);\n' : '') + (font.mainSize ? '  font-size: var(--omn-font-size);\n' : '');
    if (body) lines.push('body {\n' + body + '}');
    const code = (font.code ? '  font-family: var(--omn-code-font);\n' : '') + (font.codeSize ? '  font-size: var(--omn-code-size);\n' : '');
    if (code) lines.push('#omn-preview pre, #omn-preview code {\n' + code + '}');
    return lines.join('\n');
  }
  function parseBlock(css) {
    const block = css.match(BLOCK_RE);
    if (!block) return null;
    const m = block[0].match(NAME_RE);
    if (!m) return null;
    const out = { name: m[1].trim(), light: {}, dark: {} };
    const re = /--omn-(light|dark)-([\w-]+)\s*:\s*([^;]+);/g;
    let t;
    while ((t = re.exec(block[0])) !== null) out[t[1]][t[2]] = t[3];
    const grab = (name) => (block[0].match(new RegExp('--' + name + '\\s*:\\s*([^;]+);')) || [])[1];
    out.font = { main: grab('omn-font'), mainSize: grab('omn-font-size'), code: grab('omn-code-font'), codeSize: grab('omn-code-size') };
    return normalizeScheme(out);
  }
  /* ---- Storage in user_json ---- */
  async function loadSchemes() {
    const res = await fetch('/user_json/' + FILE, { cache: 'no-store' });
    if (res.status === 404) return;
    if (!res.ok) throw new Error('the server answered ' + res.status);
    const data = await res.json();
    if (!data || !Array.isArray(data.schemes)) throw new Error('the file has no schemes list');
    mySchemes = data.schemes.filter(validScheme).map(normalizeScheme);
    if (data.active) activeName = data.active;
  }
  async function persistSchemes() {
    const fd = new FormData();
    fd.append('file',
      new Blob([JSON.stringify({ active: activeName, schemes: mySchemes }, null, 2)],
        { type: 'application/json' }), FILE);
    const res = await fetch('/api/upload_json', { method: 'POST', body: fd });
    if (!res.ok) throw new Error('the server answered ' + res.status);
  }
  async function fetchCustomCss() {
    const res = await fetch(CUSTOM_CSS + '?t=' + Date.now(), { cache: 'no-store' });
    if (!res.ok) throw new Error('the server answered ' + res.status);
    return res.text();
  }
  async function detectApplied() {
    try {
      applied = parseBlock(await fetchCustomCss());
      activeName = applied ? applied.name : null;
    } catch (_) { /* No file or no connection: keep the stored name. */ }
  }
  /* ---- Apply: write css/omn-go-custom.css ---- */
  async function saveCustomCss(content) {
    const fd = new FormData();
    fd.append('name', 'css/omn-go-custom.css');
    fd.append('content', content);
    const res = await fetch('/api/save', { method: 'POST', body: fd });
    if (!res.ok) throw new Error('the server answered ' + res.status);
  }
  function bustCustomCss() {
    const link = document.querySelector('link[href*="omn-go-custom.css"]');
    if (link) link.href = CUSTOM_CSS + '?v=' + Date.now();
  }
  async function applyScheme(scheme) {
    let current = '';
    try { current = await fetchCustomCss(); } catch (_) { /* The file does not exist yet. */ }
    const kept = current.replace(BLOCK_RE, '').trim();
    await saveCustomCss((kept ? kept + '\n\n' : '') + BLOCK_START + '\n' + cssFor(scheme) + '\n' + BLOCK_END + '\n');
    activeName = scheme.name;
    applied = deep(scheme);
    stopPreview();
    bustCustomCss();
    try { await persistSchemes(); } catch (err) { console.error('The scheme file is not saved:', err); }
    say('The scheme "' + scheme.name + '" is applied to all OMN-Go pages.', true);
    renderLibrary();
  }
  async function removeApplied() {
    let current;
    try { current = await fetchCustomCss(); } catch (err) {
      say('The page cannot read css/omn-go-custom.css: ' + err.message);
      console.error(err);
      return;
    }
    try { await saveCustomCss(current.replace(BLOCK_RE, '').trim() + '\n'); } catch (err) {
      say('The page cannot remove the scheme: ' + err.message);
      return;
    }
    activeName = null;
    applied = null;
    bustCustomCss();
    try { await persistSchemes(); } catch (err) { console.error(err); }
    say('The page removed the scheme. OMN-Go uses its default colors.', true);
    renderLibrary();
  }
  /* ---- Component preview and contrast ---- */
  function pvPalButtons(pal) {
    return '<button type="button"' + (pal === 'light' ? ' class="cs-primary"' : '') +
      ' data-act="pv-light" title="Show the light palette"><i class="material-icons">light_mode</i></button>' +
      '<button type="button"' + (pal === 'dark' ? ' class="cs-primary"' : '') +
      ' data-act="pv-dark" title="Show the dark palette"><i class="material-icons">dark_mode</i></button>';
  }
  /* The preview sets each OMN-Go token on its own element. The real OMN-Go
     rules of a code block thus color the sample with the values of the draft. */
  function previewHtml() {
    const pal = pvMode;
    const font = normalizeFont(draft.font);
    const vars = ORDER.map((n) => '--omn-' + n + ':' + value(draft, pal, n)).join(';') +
      (font.main ? ';--cs-font:' + font.main : '') + (font.mainSize ? ';--cs-font-size:' + font.mainSize : '') +
      (font.code ? ';--cs-code-font:' + font.code : '') + (font.codeSize ? ';--cs-code-size:' + font.codeSize : '');
    const swatches = ['accent', 'success', 'danger', 'info', 'secondary', 'search-hit-bg', 'code-literal'].map((k) =>
      '<span class="cs-pv-swatch" style="background:var(--omn-' + k + ')" title="' + esc(k) + '"></span>').join('');
    return '<div class="cs-pv" style="' + esc(vars) + '">' +
      '<div class="cs-pv-head">' +
      '<b>' + esc(draft.name || 'Scheme') + '</b>' +
      '<span class="cs-pv-right">' +
      '<span class="cs-pv-row">' +
      '<span class="cs-pv-pal">' + pvPalButtons(pal) + '</span>' +
      '<span class="cs-pv-btns">' +
      '<span class="cs-pv-btn" data-b="color" title="info"><i class="material-icons">note_add</i></span>' +
      '<span class="cs-pv-btn" data-b="gray" title="secondary"><i class="material-icons">settings</i></span>' +
      '<span class="cs-pv-btn" title="text on the band"><i class="material-icons">home</i></span>' +
      '</span></span>' +
      '<span class="cs-pv-pill"><span class="cs-pv-chip">Tag</span></span>' +
      '</span></div>' +
      '<div class="cs-pv-body">' +
      '<div class="cs-pv-card">' +
      '<p><strong style="color:var(--omn-text-strong);font-size:1.15em">A heading on a card</strong></p>' +
      '<p>Body text, a <span style="color:var(--omn-link);text-decoration:underline">link</span>, a ' +
      '<span style="color:var(--omn-link-visited);text-decoration:underline">visited link</span>, a ' +
      '<span style="color:var(--omn-link-hover);text-decoration:underline">link under the pointer</span>, and a ' +
      '<span class="cs-pv-hit">search match</span>.</p>' +
      '<p style="color:var(--omn-text-muted)">A hint in muted text, and <span style="color:var(--omn-text-faint)">faint text</span>.</p>' +
      '<table class="cs-pv-tbl"><tr><th>Name</th><th>State</th></tr>' +
      '<tr><td>Welcome.md</td><td style="color:var(--omn-success)">ready</td></tr>' +
      '<tr><td>notes/ideas.md</td><td style="color:var(--omn-info)">sync</td></tr>' +
      '<tr><td>draft.md</td><td style="color:var(--omn-danger)">draft</td></tr></table>' +
      '<pre class="cs-pv-pre"><code class="hljs">' +
      '<span class="hljs-comment">// a note script</span>\n' +
      '<span class="hljs-keyword">const</span> hit = <span class="hljs-title function_">omnHighlightTerms</span>(<span class="hljs-string">&#x27;habits&#x27;</span>);\n' +
      '<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-literal">true</span>, <span class="hljs-number">42</span>);\n' +
      '<span class="hljs-keyword">@media</span> (<span class="hljs-attribute">min-width</span>: <span class="hljs-number">40em</span>)\n' +
      '<span class="hljs-tag">&lt;<span class="hljs-name">tag</span> <span class="hljs-attr">attr</span>=<span class="hljs-string">&quot;value&quot;</span>&gt;</span>' +
      '</code></pre' + '>' +
      '<p class="cs-pv-ctls"><button type="button" class="cs-pv-ctl">Button</button>' +
      '<button type="button" class="cs-pv-ctl cs-pv-ctl-hover">Under the pointer</button>' +
      '<input type="text" class="cs-pv-ctl" value="Text field" aria-label="Sample text field">' +
      '<label><input type="checkbox" class="cs-pv-ctl" checked> Check box</label></p>' +
      '<div class="cs-pv-swatches">' + swatches + '</div>' +
      '</div></div>' +
      '<div class="cs-pv-foot">OMN-Go component preview &middot; ' + pal + ' palette</div>' +
      '</div>';
  }
  function contrastHtml() {
    const pairs = CONTRAST_PAIRS.filter((p) => p[0] in DEF.light && p[1] in DEF.light);
    const mark = (r) => (r === null ? '' : (r < 4.5 ? 'cs-cbad' : (r < 7 ? 'cs-cwarn' : '')));
    const show = (r) => (r === null ? '&ndash;' : r.toFixed(2));
    let badL = 0, badD = 0, warnL = 0, warnD = 0;
    const rows = pairs.map((p) => {
      const rl = contrastRatio(value(draft, 'light', p[0]), value(draft, 'light', p[1]), 'light');
      const rd = contrastRatio(value(draft, 'dark', p[0]), value(draft, 'dark', p[1]), 'dark');
      if (rl !== null) { if (rl < 4.5) badL++; else if (rl < 7) warnL++; }
      if (rd !== null) { if (rd < 4.5) badD++; else if (rd < 7) warnD++; }
      return '<tr><td>' + esc(p[0]) + ' on ' + esc(p[1]) + '</td>' +
        '<td class="' + mark(rl) + '">' + show(rl) + '</td>' +
        '<td class="' + mark(rd) + '">' + show(rd) + '</td></tr>';
    }).join('');
    const badTotal = badL + badD, warnTotal = warnL + warnD;
    const where = (l, d) => (l && d) ? (l + ' light and ' + d + ' dark') : (l ? l + ' light' : d + ' dark');
    let note, cls;
    if (badTotal > 0) {
      cls = 'cs-cnote-bad';
      note = badTotal + ' pair(s) are below 4.5:1 (AA): ' + where(badL, badD) + '. Small text is difficult to read with these pairs.';
    } else if (warnTotal > 0) {
      cls = 'cs-cnote-warn';
      note = warnTotal + ' pair(s) are below 7:1 (AAA): ' + where(warnL, warnD) + '. They pass AA. For small text, increase the contrast.';
    } else {
      cls = 'cs-cnote-ok';
      note = 'All pairs are 7:1 (AAA) or more in the two palettes.';
    }
    return '<details class="cs-group" data-contrast>' +
      '<summary><span>Contrast analysis</span>' +
      '<small>&ge; 4.5:1 (AA) &middot; &ge; 7:1 (AAA) &middot; ' + pairs.length + ' pairs</small></summary>' +
      '<div class="cs-grid">' +
      '<p class="' + cls + '">' + esc(note) + '</p>' +
      '<table class="cs-contrast">' +
      '<thead><tr><th>Pair</th><th>Light</th><th>Dark</th></tr></thead>' +
      '<tbody>' + rows + '</tbody></table>' +
      '</div></details>';
  }
  function refreshDerived() {
    if (!draft) return;
    const pv = root.querySelector('.cs-pv');
    if (pv) pv.outerHTML = previewHtml();
    const ct = root.querySelector('[data-contrast]');
    if (ct) {
      const wasOpen = ct.open;
      ct.outerHTML = contrastHtml();
      const nct = root.querySelector('[data-contrast]');
      if (nct) nct.open = wasOpen;
    }
    for (const g of root.querySelectorAll('[data-group]')) {
      const n = groupChanges(g.dataset.group);
      const s = g.querySelector('.cs-changes');
      if (s) s.textContent = n ? n + ' changed \u00b7 ' : '';
    }
  }
  /* ---- Editor ---- */
  function freshDraft() {
    const base = applied || { light: {}, dark: {}, font: FONT_DEFAULT };
    return { name: applied ? applied.name + ' (copy)' : 'My scheme', font: normalizeFont(base.font), light: deep(base.light), dark: deep(base.dark) };
  }
  function fieldHtml(name, pal) {
    const v = value(draft, pal, name);
    const changed = name in draft[pal];
    const swatch = '<button type="button" class="cs-color cp-checker" data-act="pick" data-token="' + name + '" data-palette="' + pal + '" title="Open the color picker" aria-label="Pick ' + name + ' ' + pal + '"><span style="background:' + esc(v) + '"></span></button>';
    return '<span class="cs-field' + (changed ? ' cs-field--changed' : '') + '">' + swatch +
      '<input class="cs-hex" type="text" data-token="' + name + '" data-palette="' + pal + '" value="' + esc(v) + '" title="' + esc(v) + '" maxlength="40" spellcheck="false" aria-label="' + name + ' ' + pal + '">' +
      '<button type="button" class="cs-reset" data-act="reset" data-token="' + name + '" data-palette="' + pal + '" title="Set the OMN-Go default: ' + esc(DEF[pal][name]) + '"><i class="material-icons">restart_alt</i></button>' +
      '</span>';
  }
  function rowHtml(name) {
    return '<div class="cs-row">' +
      '<span class="cs-token">' + esc(name) + (HINT[name] ? '<small>' + esc(HINT[name]) + '</small>' : '') + '</span>' +
      fieldHtml(name, 'light') + fieldHtml(name, 'dark') +
      '</div>';
  }
  function groupChanges(title) {
    const g = groupsOfTokens().find((x) => x.title === title);
    if (!g || !draft) return 0;
    return g.tokens.reduce((n, t) => n + (t in draft.light ? 1 : 0) + (t in draft.dark ? 1 : 0), 0);
  }
  function groupHtml(group) {
    const n = groupChanges(group.title);
    return '<details class="cs-group" data-group="' + esc(group.title) + '">' +
      '<summary>' + esc(group.title) + '<small><span class="cs-changes">' + (n ? n + ' changed \u00b7 ' : '') + '</span>' + group.tokens.length + ' tokens</small></summary>' +
      '<div class="cs-grid">' +
      '<div class="cs-grid-head"><span>Token</span><span>Light</span><span>Dark</span></div>' +
      group.tokens.map(rowHtml).join('') +
      '</div></details>';
  }
  function fontOptionHtml(list, cur) {
    return list.map((o) =>
      '<option value="' + esc(o.stack) + '"' + (o.stack === cur ? ' selected' : '') + '>' + esc(o.label) + '</option>').join('');
  }
  function sizeOptionHtml(cur) {
    return FONT_SIZES.map((s) => '<option value="' + esc(s) + '"' + (s === cur ? ' selected' : '') + '>' + esc(s || 'Default') + '</option>').join('');
  }
  function fontMeta(stack, size, list) {
    return fontLabel(stack, list) + ' · ' + (size || 'default size');
  }
  function typographyHtml() {
    const font = normalizeFont(draft.font);
    return '<details class="cs-group cs-typography">' +
      '<summary>Typography<small>main &middot; code</small></summary>' +
      '<div class="cs-grid">' +
      '<div class="cs-font-row">' +
      '<label class="cs-font-label" for="csFontFamily">Main</label>' +
      '<span class="cs-font-controls">' +
      '<select id="csFontSize" class="cs-font-select" data-font="mainSize">' + sizeOptionHtml(font.mainSize) + '</select>' +
      '<select id="csFontFamily" class="cs-font-select" data-font="main">' + fontOptionHtml(FONT_OPTIONS, font.main) + '</select>' +
      '</span>' +
      '</div>' +
      '<div class="cs-font-row">' +
      '<label class="cs-font-label" for="csCodeFont">Code</label>' +
      '<span class="cs-font-controls">' +
      '<select id="csCodeSize" class="cs-font-select" data-font="codeSize">' + sizeOptionHtml(font.codeSize) + '</select>' +
      '<select id="csCodeFont" class="cs-font-select" data-font="code">' + fontOptionHtml(MONO_OPTIONS, font.code) + '</select>' +
      '</span>' +
      '</div>' +
      '<div class="cs-font-actions">' +
      '<button type="button" class="cs-reset" data-act="reset-font" title="Set the OMN-Go default fonts and sizes"><i class="material-icons">restart_alt</i></button>' +
      '<span class="cs-hint">In each row, the first list sets the size and the second list sets the font. The code row has only monospace fonts.</span>' +
      '</div>' +
      '<div class="cs-specimen" id="csSpecimen">' +
      '<div class="cs-specimen-line">' +
      '<span class="cs-specimen-aa">Aa</span>' +
      '<span class="cs-specimen-word">The quick brown fox jumps over the lazy dog</span>' +
      '</div>' +
      '<div class="cs-specimen-meta" id="csMetaMain"></div>' +
      '<div class="cs-specimen-code" id="csSpecimenCode">const hit = omnHighlightTerms(\'habits\');</div>' +
      '<div class="cs-specimen-meta" id="csMetaCode"></div>' +
      '</div>' +
      '</div></details>';
  }
  function setText(id, txt) {
    const el = document.getElementById(id);
    if (el) el.textContent = txt;
  }
  function updateSpecimen() {
    const f = draft.font;
    const sp = document.getElementById('csSpecimen');
    if (sp) { sp.style.fontFamily = f.main; sp.style.fontSize = f.mainSize; }
    const c = document.getElementById('csSpecimenCode');
    if (c) { c.style.fontFamily = f.code; c.style.fontSize = f.codeSize; }
    setText('csMetaMain', fontMeta(f.main, f.mainSize, FONT_OPTIONS));
    setText('csMetaCode', 'code: ' + fontMeta(f.code, f.codeSize, MONO_OPTIONS));
  }
  function editorHtml() {
    return '<div class="cs-toolbar cs-editor-toolbar">' +
      '<button type="button" class="cs-primary" data-act="save" title="Save the scheme"><i class="material-icons">save</i></button>' +
      '<button type="button" data-act="apply-save" title="Save the scheme and apply it"><i class="material-icons">check_circle</i></button>' +
      '<button type="button" data-act="cancel" title="Close the editor"><i class="material-icons">close</i></button>' +
      '<span class="cs-test" id="csThemeTest">' + themeTestButtonsHtml() + '</span>' +
      '</div>' +
      '<div class="cs-editor-head">' +
      '<input id="csName" type="text" value="' + esc(draft.name) + '" maxlength="60" placeholder="Scheme name" aria-label="Scheme name">' +
      '<label class="cs-toggle"><input id="csPreviewChk" type="checkbox"' + (previewOn ? ' checked' : '') + '> Live preview</label>' +
      '</div>' +
      '<div class="cs-section-label">Component preview</div>' +
      previewHtml() +
      '<div class="cs-editor-body">' +
      typographyHtml() +
      groupsOfTokens().map(groupHtml).join('') +
      '</div>' +
      contrastHtml();
  }
  function renderEditor() {
    const open = new Set(Array.from(root.querySelectorAll('details[open][data-group]')).map((d) => d.dataset.group));
    root.innerHTML = editorHtml();
    for (const d of root.querySelectorAll('details[data-group]')) if (open.has(d.dataset.group)) d.open = true;
    updateSpecimen();
    updatePreview();
  }
  function updatePreview() {
    let el = document.getElementById('csPreview');
    if (!previewOn || !draft) {
      if (el) el.remove();
      return;
    }
    if (!el) {
      el = document.createElement('style');
      el.id = 'csPreview';
      document.head.appendChild(el);
    }
    el.textContent = cssFor(draft);
  }
  function stopPreview() {
    previewOn = false;
    const el = document.getElementById('csPreview');
    if (el) el.remove();
  }
  /* ---- Theme test: a temporary dark or light view ---- */
  function configuredTheme() {
    return (typeof OMN_THEME === 'string' && OMN_THEME) ? OMN_THEME : 'auto';
  }
  function themeTestButtonsHtml() {
    const t = themeTest;
    return '<button type="button"' + (t === 'dark' ? ' class="cs-primary"' : '') +
      ' data-act="test-dark" title="Test the dark palette on this page"><i class="material-icons">dark_mode</i></button>' +
      '<button type="button"' + (t === 'light' ? ' class="cs-primary"' : '') +
      ' data-act="test-light" title="Test the light palette on this page"><i class="material-icons">light_mode</i></button>' +
      (t ? '<button type="button" data-act="restore-theme" title="Set the OMN-Go theme again"><i class="material-icons">settings_backup_restore</i></button>' : '');
  }
  function setTestTheme(mode) {
    themeTest = mode;
    document.documentElement.setAttribute('data-theme', mode || configuredTheme());
    const row = document.getElementById('csThemeTest');
    if (row) row.innerHTML = themeTestButtonsHtml();
    if (mode) {
      say('This page shows the ' + mode + ' palette. This change is temporary. To go back to the OMN-Go theme, press the restore button or open the page again.', true);
    } else {
      say('The page uses the OMN-Go theme again (' + configuredTheme() + ').', true);
    }
  }
  /* ---- Library ---- */
  const grad = (a, b, c) => 'background:linear-gradient(90deg,' +
    [a, a, b, b, c, c].map((x, i) => x + ' ' + Math.round((i * 100) / 6) + '%').join(',') + ')';
  function cardHtml(s, mine) {
    const active = s.name === activeName;
    const bar = (pal) => grad(value(s, pal, 'bg'), value(s, pal, 'accent'), value(s, pal, 'text'));
    const swatch = '<div class="cs-swatch">' +
      '<span class="cs-swatch-row"><span class="cs-swatch-label">Light</span><span class="cs-swatch-bar" style="' + esc(bar('light')) + '"></span></span>' +
      '<span class="cs-swatch-row"><span class="cs-swatch-label">Dark</span><span class="cs-swatch-bar" style="' + esc(bar('dark')) + '"></span></span>' +
      '</div>';
    const f = normalizeFont(s.font);
    const fontline = '<div class="cs-fontline">' +
      '<span class="cs-fontline-sample" style="font-family:' + esc(f.main || 'inherit') + '">Aa</span>' +
      '<span class="cs-fontline-meta">' + esc(fontMeta(f.main, f.mainSize, FONT_OPTIONS)) + ' &middot; ' + changeCount(s) + ' changed values</span>' +
      '</div>';
    const actions = mine
      ? '<button type="button" data-act="edit" data-name="' + esc(s.name) + '" title="Edit this scheme"><i class="material-icons">edit</i></button>' +
        '<button type="button" class="cs-primary" data-act="apply" data-name="' + esc(s.name) + '" title="Apply this scheme"><i class="material-icons">check</i></button>' +
        '<button type="button" class="cs-danger" data-act="del" data-name="' + esc(s.name) + '" title="Delete this scheme"><i class="material-icons">delete</i></button>'
      : '<button type="button" data-act="load-example" data-name="' + esc(s.name) + '" title="Edit this example"><i class="material-icons">edit</i></button>' +
        '<button type="button" class="cs-primary" data-act="apply-example" data-name="' + esc(s.name) + '" title="Apply this example"><i class="material-icons">check</i></button>';
    return '<div class="cs-card' + (active ? ' cs-card--active' : '') + '">' +
      '<div class="cs-card-head">' +
      '<strong>' + esc(s.name) +
      (mine ? '' : ' <span class="cs-badge cs-badge--ex">example</span>') +
      (active ? ' <span class="cs-badge">applied</span>' : '') +
      '</strong>' +
      '</div>' +
      swatch + fontline +
      '<div class="cs-actions">' + actions + '</div>' +
      '</div>';
  }
  function exportPanelHtml() {
    const json = JSON.stringify({ active: activeName, schemes: mySchemes }, null, 2);
    return '<details class="cs-panel" data-panel="export"' + (openPanel === 'export' ? ' open' : '') + '>' +
      '<summary><i class="material-icons">file_download</i> Export schemes</summary>' +
      '<p class="cs-hint">Copy the text. On a desktop browser, you can also save the file. The file is at ' + userJsonLink('/user_json/' + FILE) + '.</p>' +
      '<textarea class="cs-json" id="csExportText" readonly rows="8" spellcheck="false">' + esc(json) + '</textarea' + '>' +
      '<div class="cs-editor-actions">' +
      '<button type="button" data-act="copy-export" title="Copy the JSON to the clipboard"><i class="material-icons">content_copy</i></button>' +
      userJsonLink('<button type="button" title="Save the JSON file"><i class="material-icons">save_alt</i></button>', '', true) +
      '</div>' +
      '</details>';
  }
  function importPanelHtml() {
    return '<details class="cs-panel" data-panel="import"' + (openPanel === 'import' ? ' open' : '') + '>' +
      '<summary><i class="material-icons">file_upload</i> Import schemes</summary>' +
      '<p class="cs-hint">Paste the exported JSON below. On a desktop browser, you can also select a file.</p>' +
      '<textarea class="cs-json" id="csImportText" rows="8" spellcheck="false" placeholder="Paste the exported JSON here"></textarea' + '>' +
      '<div class="cs-editor-actions">' +
      '<button type="button" class="cs-primary" data-act="import-paste" title="Import the pasted JSON"><i class="material-icons">playlist_add</i></button>' +
      '<button type="button" data-act="pick-file" title="Select a JSON file"><i class="material-icons">folder_open</i></button>' +
      '</div>' +
      '<input id="csImport" type="file" accept=".json,application/json" class="cs-hidden">' +
      '</details>';
  }
  function renderLibrary() {
    const appliedLine = activeName
      ? 'Applied: <strong>' + esc(activeName) + '</strong>'
      : 'No scheme is applied. OMN-Go uses its default colors.';
    const myCards = mySchemes.map((s) => cardHtml(s, true)).join('');
    const exCards = EXAMPLES.map((s) => cardHtml(s, false)).join('');
    const removeBtn = activeName
      ? '<button type="button" data-act="remove-applied" title="Remove the applied scheme"><i class="material-icons">restart_alt</i></button>'
      : '';
    root.innerHTML =
      '<div class="cs-toolbar">' +
      '<button type="button" class="cs-primary" data-act="new" title="New scheme"><i class="material-icons">add</i></button>' +
      '<span class="cs-test" id="csThemeTest">' + themeTestButtonsHtml() + '</span>' +
      removeBtn +
      '</div>' +
      '<p class="' + (activeName ? 'cs-applied' : 'cs-applied cs-applied--none') + '">' + appliedLine + '</p>' +
      exportPanelHtml() +
      importPanelHtml() +
      '<h4>My schemes</h4>' +
      (myCards || '<div class="cs-empty"><i class="material-icons">palette</i><span>There is no saved scheme. Make a scheme and save it. The page keeps it in <code>user_json/' + FILE + '</code>. Git sync moves this file with your notes.</span></div>') +
      '<h4>Example schemes</h4>' +
      '<p class="cs-hint">Edit an example to change it, or apply it as it is. When you apply an example, the page does not save it. To keep a copy, edit the example and save it.</p>' +
      exCards +
      '<p class="cs-hint">Storage file: ' + userJsonLink('edit ' + FILE, '?edit=true') + ' &middot; ' + userJsonLink('view the file') + ' &middot; Applied CSS: <a href="/css/omn-go-custom.css?edit=true">omn-go-custom.css</a> &middot; Default palette: <a href="/css/OMN-Go/omn-go-core.css">omn-go-core.css</a></p>';
  }
  /* ---- Actions ---- */
  function findScheme(name) {
    return mySchemes.find((s) => s.name === name) || EXAMPLES.find((s) => s.name === name) || null;
  }
  async function saveDraft(alsoApply) {
    const name = (draft.name || '').trim();
    if (!name) { say('Type a name for the scheme.'); return; }
    draft.name = name;
    const copy = normalizeScheme(draft);
    const i = mySchemes.findIndex((s) => s.name === name);
    if (i >= 0) mySchemes[i] = copy; else mySchemes.push(copy);
    try {
      await persistSchemes();
    } catch (err) {
      say('The server did not save the scheme file: ' + err.message + '. Only the admin can save. Another device without the admin login can only preview and export schemes.');
      console.error(err);
      return;
    }
    if (alsoApply) {
      try {
        await applyScheme(copy);
      } catch (err) {
        say('The page saved the scheme "' + name + '", but it cannot apply it: ' + err.message);
        console.error(err);
      }
      return;
    }
    say('The page saved the scheme "' + name + '" in user_json/' + FILE + '.', true);
    renderLibrary();
  }
  async function copyExport() {
    const ta = document.getElementById('csExportText');
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
    say(ok ? 'The JSON is in the clipboard.' : 'The page cannot copy. Select the text and copy it.', ok);
  }
  async function importFromText(text) {
    let data;
    try {
      data = JSON.parse(text);
    } catch (_) {
      say('The page cannot import: the text is not valid JSON.');
      return;
    }
    if (!data || !Array.isArray(data.schemes)) {
      say('The page cannot import: the text has no "schemes" list.');
      return;
    }
    const incoming = data.schemes.filter(validScheme).map(normalizeScheme);
    if (!incoming.length) {
      say('The page cannot import: the text has no valid scheme.');
      return;
    }
    if (!window.confirm('Import ' + incoming.length + ' scheme(s)? An imported scheme replaces a scheme with the same name.')) return;
    for (const s of incoming) {
      const i = mySchemes.findIndex((x) => x.name === s.name);
      if (i >= 0) mySchemes[i] = s; else mySchemes.push(s);
    }
    try {
      await persistSchemes();
    } catch (err) {
      say('The page cannot save the imported schemes: ' + err.message + '. Only the admin can save.');
      console.error(err);
      return;
    }
    say('The page imported ' + incoming.length + ' scheme(s).', true);
    renderLibrary();
  }
  function importFromFile(file) {
    const reader = new FileReader();
    reader.onload = () => importFromText(String(reader.result));
    reader.onerror = () => say('The page cannot read the file.');
    reader.readAsText(file);
  }
  /* setField writes a value from the color picker into the draft and into
     its field. */
  function setField(pal, name, v) {
    v = normColor(v) || v;
    const btn = root.querySelector('.cs-color[data-token="' + name + '"][data-palette="' + pal + '"]');
    const field = btn && btn.closest('.cs-field');
    if (field) {
      btn.firstElementChild.style.background = v;
      const hex = field.querySelector('.cs-hex');
      hex.value = v;
      hex.title = v;
      field.classList.remove('cs-bad');
      field.classList.toggle('cs-field--changed', v !== DEF[pal][name]);
    }
    setToken(pal, name, v);
  }
  /* openTokenPicker opens the color picker for a token of a palette. The
     picker gets the pairs of the contrast table, the page color of the
     palette and all the colors of the palette. The component preview shows
     the palette of the token. */
  function openTokenPicker(pal, name) {
    const known = (n) => n in DEF.light;
    const pairs = CONTRAST_PAIRS.filter((p) => p.includes(name) && known(p[0]) && known(p[1])).map((p) =>
      (p[0] === name ? { name: p[1], value: value(draft, pal, p[1]), as: 'bg' } : { name: p[0], value: value(draft, pal, p[0]), as: 'text' }));
    if (pvMode !== pal) { pvMode = pal; refreshDerived(); }
    picker.open({
      title: name + ' \u00b7 ' + pal,
      name: name,
      value: value(draft, pal, name),
      pairs: pairs,
      base: value(draft, pal, 'bg'),
      schemeColors: ORDER.map((n) => ({ name: n, value: value(draft, pal, n) })),
      onInput: (v) => setField(pal, name, v),
      onApply: (v) => setField(pal, name, v)
    });
  }
  /* setToken writes one value of the draft. A value equal to the default is
     not a change, thus the draft drops it. */
  function setToken(pal, name, v) {
    if (v === DEF[pal][name]) delete draft[pal][name]; else draft[pal][name] = v;
    if (previewOn) updatePreview();
    refreshDerived();
  }
  root.addEventListener('click', async (e) => {
    const btn = e.target.closest('[data-act]');
    if (!btn) return;
    const act = btn.dataset.act;
    const name = btn.dataset.name;
    try {
      if (act === 'new') {
        draft = freshDraft();
        openPanel = null;
        renderEditor();
        say('');
      } else if (act === 'edit' || act === 'load-example') {
        const s = findScheme(name);
        if (!s) return;
        draft = deep(s);
        openPanel = null;
        renderEditor();
        say('');
      } else if (act === 'apply' || act === 'apply-example') {
        const s = findScheme(name);
        if (s) await applyScheme(s);
      } else if (act === 'del') {
        if (!window.confirm('Delete the scheme "' + name + '"?')) return;
        mySchemes = mySchemes.filter((s) => s.name !== name);
        await persistSchemes();
        say('The page deleted the scheme "' + name + '".', true);
        renderLibrary();
      } else if (act === 'copy-export') {
        await copyExport();
      } else if (act === 'import-paste') {
        const ta = document.getElementById('csImportText');
        await importFromText(ta ? ta.value : '');
      } else if (act === 'pick-file') {
        const fi = document.getElementById('csImport');
        if (fi) fi.click();
      } else if (act === 'remove-applied') {
        await removeApplied();
      } else if (act === 'pick') {
        if (draft) openTokenPicker(btn.dataset.palette, btn.dataset.token);
      } else if (act === 'reset') {
        if (draft) {
          delete draft[btn.dataset.palette][btn.dataset.token];
          renderEditor();
          if (previewOn) updatePreview();
        }
      } else if (act === 'reset-font') {
        if (draft) {
          draft.font = deep(FONT_DEFAULT);
          renderEditor();
          say('The typography is the OMN-Go default again.', true);
        }
      } else if (act === 'save') {
        await saveDraft(false);
      } else if (act === 'apply-save') {
        await saveDraft(true);
      } else if (act === 'cancel') {
        draft = null;
        stopPreview();
        openPanel = null;
        renderLibrary();
      } else if (act === 'test-dark' || act === 'test-light') {
        setTestTheme(act === 'test-dark' ? 'dark' : 'light');
      } else if (act === 'restore-theme') {
        setTestTheme(null);
      } else if (act === 'pv-light' || act === 'pv-dark') {
        pvMode = act === 'pv-light' ? 'light' : 'dark';
        refreshDerived();
      }
    } catch (err) {
      say('An error occurred: ' + err.message + '. Look in the JS console.');
      console.error(err);
    }
  });
  root.addEventListener('toggle', (e) => {
    const p = e.target.dataset && e.target.dataset.panel;
    if (p) openPanel = e.target.open ? p : (openPanel === p ? null : openPanel);
  }, true);
  root.addEventListener('input', (e) => {
    const t = e.target;
    if (!draft) return;
    if (t.id === 'csName') {
      draft.name = t.value;
      refreshDerived();
      return;
    }
    const name = t.dataset && t.dataset.token;
    const pal = t.dataset && t.dataset.palette;
    if (!name || !(pal in DEF)) return;
    const field = t.closest('.cs-field');
    if (t.classList.contains('cs-hex')) {
      const v = normColor(t.value);
      field.classList.toggle('cs-bad', !v);
      if (!v) return;
      field.querySelector('.cs-color span').style.background = v;
      field.classList.toggle('cs-field--changed', v !== DEF[pal][name]);
      setToken(pal, name, v);
    }
  });
  root.addEventListener('change', (e) => {
    const t = e.target;
    if (t.id === 'csPreviewChk') {
      previewOn = t.checked;
      updatePreview();
      say(previewOn ? 'Live preview is on. This page and all OMN-Go pages show the scheme while the editor is open.' : '');
    } else if (t.id === 'csImport') {
      const f = t.files && t.files[0];
      if (f) importFromFile(f);
      t.value = '';
    } else if (t.dataset && t.dataset.font && draft) {
      draft.font[t.dataset.font] = t.value;
      if (previewOn) updatePreview();
      refreshDerived();
      updateSpecimen();
      say('The typography changed. Save or apply the scheme to keep it.', true);
    }
  });
  (async () => {
    await loadPalette();
    for (let i = 0; i < EXAMPLES.length; i++) {
      const ex = EXAMPLES[i];
      /* The page of the Bookmarks note follows the page color of the example,
         and the links follow its accent color. */
      for (const pal of PALETTES) {
        const p = ex[pal];
        if (p.bg && !p['bookmarks-bg']) p['bookmarks-bg'] = p.bg;
        if (p.accent && !p.link) p.link = p.accent;
        if (p.accent && !p['link-visited']) p['link-visited'] = p.accent;
        if (p['accent-hover'] && !p['link-hover']) p['link-hover'] = p['accent-hover'];
      }
      EXAMPLES[i] = normalizeScheme(ex);
    }
    try {
      await loadSchemes();
    } catch (err) {
      say('The page cannot read user_json/' + FILE + ': ' + err.message);
    }
    await detectApplied();
    renderLibrary();
  })().catch((err) => {
    root.innerHTML = '<p class="cs-empty">The page cannot start: ' + esc(err.message) + '. Look in the JS console.</p>';
    console.error(err);
  });
}</script>

- - -

<span id="local_counter">...</span>
<script type="module" src="/js/local_counter.js"></script>
