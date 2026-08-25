<!-- UFC pixel emblem -->
<div align="center">
  <img src="assets/ufc-pixel.png" width="220" height="220" alt="UFC pixel emblem">
</div>

<br>

<div align="center">
  <h1><b>Template Marp UFC</b></h1>
</div>

<div align="center">

[![Made with Marp](https://img.shields.io/badge/Made%20with-Marp-0288d1?logo=markdown&logoColor=white)](https://marp.app/)
[![Node.js 24+](https://img.shields.io/badge/Node.js-24%2B-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Deploy with GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222?logo=github)](https://pages.github.com/)

</div>

<p align="center">
  <a href="#what-is-it">What is it?</a> •
  <a href="#for-whom">For whom?</a> •
  <a href="#getting-started">Getting started</a> •
  <a href="#components">Components</a> •
  <a href="#customization">Customization</a> •
  <a href="#github-pages">GitHub Pages</a> •
  <a href="#origin-and-attribution">Attribution</a>
</p>

## What is it?

This project provides a Markdown presentation template for the Federal University of Ceará (UFC). It is based on [TemplateBeamerUFC](https://github.com/maumneto/TemplateBeamerUFC) and adapts its visual language to [Marp](https://marp.app/).

The custom CSS theme reproduces the original 4:3 format, top navigation bar, watermark, institutional signature, three-part footer, blocks, boxes, code listings, columns, figures, and references.

> This is an independent project and is not an official document or product of the Federal University of Ceará.

![Template Marp UFC cover preview](preview.png)

## For whom?

This template may be useful to UFC professors, students, researchers, and staff.

- **Professors:** classes, short courses, and academic presentations.
- **Students:** assignments, seminars, thesis defenses, and dissertation presentations.
- **Researchers:** conference talks and project presentations.

## Getting started

Node.js 24 or newer is required.

```bash
npm ci
npm run start
```

The development server opens the presentation in a browser and refreshes it whenever `slides.md` is saved.

### Project structure

```text
TemplateMarpUFC/
├── assets/                 # Emblems and theme images
├── themes/ufc.css          # Marp theme
├── scripts/build.mjs       # Site build and asset copy
├── slides.md               # Example presentation
├── .marprc.yml             # Local Marp configuration
├── package-lock.json       # Reproducible dependency versions
├── package.json            # Development and export commands
└── .github/                # CI, Dependabot, and Pages workflows
```

### Exporting

```bash
npm run build   # HTML at dist/index.html
npm run pdf     # PDF at dist/presentation.pdf
npm run pptx    # PowerPoint at dist/presentation.pptx
npm run images  # PNG files under dist/slides/
```

To create a new deck, copy `slides.md`, update its YAML front matter, and keep `theme: ufc`.

The Marp CLI output is the reference rendering. Third-party integrations may require manually registering `themes/ufc.css` and enabling raw HTML support.

## Components

The example presentation demonstrates the following CSS classes:

- `lead`: title slide with presentation metadata;
- `columns`: two-column layout;
- `block`, `block alert`, and `block success`: Beamer-inspired blocks;
- `box`, `box alert`, and `box success`: bordered callout boxes;
- `figure`, `caption`, and `source`: figure, caption, and source formatting;
- `code-slide` and `code-caption`: source-code slides;
- `thanks`: closing slide.

### Blocks

```html
<div class="block">
  <div class="block-title">Default Block</div>
  <div class="block-body">Body of the default block.</div>
</div>
```

Use `block alert` or `block success` to select the red and green variants.

### Boxes

```html
<div class="box">Simple box</div>
<div class="box alert">Alert box</div>
<div class="box success">Success box</div>
```

### Columns

```html
<div class="columns">
  <div>Left column.</div>
  <div>Right column.</div>
</div>
```

## Customization

The main colors are defined at the beginning of `themes/ufc.css`:

```css
--ufc-blue: #005386;
--ufc-gold: #ceb144;
--ufc-green: #00923e;
--ufc-red: #d70000;
```

Update the `header` and `footer` fields in the `slides.md` front matter to change the section labels, author, short title, and date. The footer contains three spans so that each value remains aligned with its corresponding color field.

## GitHub Pages

The `.github/workflows/pages.yml` workflow builds and publishes the HTML presentation and its assets whenever a commit is pushed to `main`.

In the GitHub repository, select **Settings → Pages → Source → GitHub Actions**.

Pull requests and working branches are validated by `.github/workflows/ci.yml`. Dependency updates are monitored through Dependabot.

## Origin and attribution

The theme was visually derived from `TemplateBeamerUFC` by Maurício Moreira Neto. See [NOTICE.md](NOTICE.md) for source provenance and reused assets.

The reference project does not provide a license file. This repository is therefore marked as `UNLICENSED`: publishing it on GitHub does not automatically grant reuse rights. Confirm the permissions applicable to the adapted code and UFC institutional assets before distributing the project under an open-source license.
