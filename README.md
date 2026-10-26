# PahaadPath

Hill-road landslide, traffic and entry-rule advisory for Uttarakhand, in English and Hindi. SAARTHI'26, Track 3 (Smart Cities, Mobility and Public Safety). Team Coding Club MCTE.

**Live app:** https://gladiator138.github.io/pahaadpath/ (one HTML file; it also works opened straight from disk, offline).

Advisory only. It is not an official warning. Follow police, BRO and district administration notices on the road.

## What it does

- **Plan trip:** any source, destination and date up to 14 days ahead. Fastest and lower-risk roads, landslide risk per stretch at the hour you reach it, long-weekend traffic, best departure window, night halts, entry rules with sources, road profile, safety kit with helplines and SOS, trip from a typed or spoken sentence.
- **Control room:** all 44 hill stretches over 72 hours, animated map, advisory draft in English or Hindi, expected jams, road reports shared across phones.
- **Proof:** replays real closure days (20 Aug 2025, 9 Jul 2026) and dry control days on recorded rain or on forecasts issued 1 or 2 days before, and compares Avoid stretches with closures named in the news. Threshold sensitivity chart. Open data builder for road distances (OSRM), terrain slope (Copernicus DEM) and incident history (NASA landslide catalog).

The repository root holds the built app (`index.html`, identical to `PahaadPath.html`) so GitHub Pages can serve it. CI rebuilds it from `src/` and checks the copies match.

## Build

1. `npm install && npm run vendor` gets Playwright for the tests and the two libraries that are inlined so the app works offline.
2. `npm run build` (or `python3 tools/build.py`) writes `dist/PahaadPath.html` (one file) and `dist/site/` (installable web app for GitHub Pages).
3. To bake in results the team fetched in a browser: `python3 tools/build.py pahaadpath_open_data.json pahaadpath_replay_results.json` (use `-` for the first file if you only have replay results).

## Files

- `src/app.html`: the Stage 1 prototype (road graph, risk engine, traffic model, planner, trip screens) with hooks for v4.
- `src/features.js`, `src/features2.js`, `src/features.css`: v4 views (control room, proof), Leaflet map, open data builder, safety tab, sentence and voice entry, QR.
- `replay_source/gt.json`: closures named in news reports for 20 Aug 2025 and 9 Jul 2026, mapped to road links, plus two dry control days.
- `tools/basemap.json`: Natural Earth rivers, roads and Indian state lines clipped to the map area (made by `tools/clip_ne.py`).
- `tests/`: `matrix.js` (connectivity and 240 random trips per scenario), `textaudit.js` (house style on 88 screens), `features.js` (proof, control room, open data and sentence entry with mocked web replies), `smoke.js` (screenshots).
  `npm test` runs them all; `features2.js` covers shared reports between two simulated phones, NASA history, threshold sensitivity and the road profile.

## Licences

Leaflet (BSD 2-Clause), qrcode-generator (MIT), Natural Earth (public domain), OpenStreetMap data (ODbL) via OSRM, Open-Meteo data (CC BY 4.0), Copernicus GLO-90 DEM (free licence, credit Copernicus), NASA Global Landslide Catalog (NASA open data), ntfy.sh (public test channel for shared reports). Credits are shown in the app footer.

After a build, copy `dist/site/*` (including `.nojekyll`) and `dist/PahaadPath.html` to the repository root before committing.
