# IOTSIM Quick Start Guide — PWA

A lightweight, installable Progressive Web App that delivers the **Quick Start Guide** for the *Infinite Outcome Trade Simulator & Insight Monitor* (V38).

## Run locally

Open `index.html` directly in any modern browser (Chrome/Edge/Safari/Firefox) — works as a static site, no build step.

For full PWA features (service worker, install prompt, offline cache), serve over `http://` instead of `file://`:

```bash
# from this folder
python3 -m http.server 8000
# then visit  http://localhost:8000
```

## Install

When loaded over HTTP/HTTPS the install banner appears automatically — click **Install** to add it to your home screen / app drawer for offline access.

## Contents

11 chapters covering:
- Welcome & first load
- Reading the chart (emoji key, trade label)
- Settings at a glance, Account & Risk, Asset Presets
- Insight Monitor pages & stat rows
- Quick Switches and Next Steps

Aligned with **V38** of the indicator (45 settings groups, HTF Scout, PD Array Matrices, updated monitor pages).

## Files

| File | Purpose |
|------|---------|
| `index.html` | App shell + nav |
| `content.json` | All chapter HTML |
| `assets/theme.css` | Styling (matches Complete User Manual) |
| `assets/interactions.js` | Search + helpers |
| `manifest.json` | PWA metadata |
| `sw.js` | Service worker (offline) |
| `IOTSIM_LOGO.png` | Cover artwork |
| `icon192.png`, `icon512.png` | App icons |

© Reggie_W 2026+
