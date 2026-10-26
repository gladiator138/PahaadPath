# PahaadPath changelog

Dates are when the work was done. Kept so judges can see what existed before the on-site round.

## Stage 1 (to 9 Oct 2026)
- Single offline HTML prototype in English and Hindi: road graph (61 towns, 3 trek heads, 75 links), Caine (1980) rainfall threshold risk per stretch, calendar traffic model, time-dependent route search with night halts, best departure window, entry rules with sources, on-device road reports, WhatsApp share and voice read-out.
- v3 deck submitted.

## 25 Oct 2026
- Closure-day replay page and ground truth for 20 Aug 2025 and 9 Jul 2026 (engine copied unchanged from the prototype).
- One Hindi list comma fixed.

## 25 to 26 Oct 2026 (v4)
- Views: Plan trip, Control room, Proof.
- Map rebuilt on Leaflet: OpenStreetMap street map when hosted and online, offline map from Natural Earth layers otherwise. Tap a stretch for its details.
- Control room for the disaster management authority and police: risk for all 44 hill stretches over 72 hours, play slider, Avoid and Caution counts, advisory draft in English or Hindi to copy or send, expected jams, road reports.
- Proof tab: the closure-day replay runs inside the app with the same engine, with scoreboard, map of named closures, results file save and load plus "plan a trip on this day" using the recorded rain.
- Open data builder in the browser: road distance and shape per link from OSRM (OpenStreetMap data), terrain slope per hill link from the Copernicus DEM through the Open-Meteo elevation API. Toggle on or off; footer states which data are in use.
- Safety tab: helplines 112, 1070, 1077 and 1364 with sources, SOS location share, towns with lodging on the route, what to do at a landslide.
- Trip from a sentence, typed or spoken, in English, Hindi or Hinglish.
- QR code and copy link for a trip; installable offline web app (manifest and service worker) for hosting.
- Tests: matrix 1,830 of 1,830 town pairs connect, 240 trips per scenario with 0 failures; house style clean on 88 screens; feature tests pass with mocked web replies.

## 26 Oct 2026 (v4.1)
- Road reports shared across phones and the control room through a public test channel (ntfy.sh), with the two-confirmation rule.
- Incident history from the NASA Global Landslide Catalog (COOLR events within 3 km of each hill road), built in the browser; catalogue points shown in the control room. Switched off later the same day, see below.
- Threshold sensitivity chart in Proof: hit rate and false alarms as the Caine trigger is scaled from 0.4 to 1.6.
- Road profile on the Trip tab from the Copernicus DEM, coloured by risk.
- Published on GitHub with CI that rebuilds the app and runs all tests.

## 26 Oct 2026 (v4.2): real data run
- Ran the Proof replay against live Open-Meteo data in a browser on the published site: 4 days by 3 rain sources, first with demo slope, then with open data.
- Fetched road distance and shape for all 75 links from OSRM (3 links flagged for checking: Haldwani to Kathgodam, Kathgodam to Bhimtal, Sonprayag to Gaurikund) and terrain slope for all 44 hill stretches from the Copernicus DEM. The slope cut-offs put 32 of 44 stretches in the steepest class, so they still need calibration against GSI maps.
- Results baked into the app (data/ folder) so the Proof tab works offline. Summary card in Proof:
  - Dry control days: no Avoid anywhere.
  - 9 Jul 2026, recorded rain, DEM slope: 3 of 4 closed stretches Caution or worse, 1 Avoid, 4 other stretches Avoid.
  - Forecasts 1 or 2 days ahead: at most 1 closed stretch at Caution.
  - 20 Aug 2025: none caught; roads were blocked by debris from earlier storms.
- NASA landslide catalog switched off: its services stopped answering after NASA's 2025 portal move. Incident counts stay demo values.
- Elevation and weather calls now wait and retry when the free API limit is hit. Offline cache always fetches the new page on an update.

## 26 Oct 2026 (v4.3): incident history and slope classes fixed
- Incident history is real again: NASA's Global Landslide Catalog export (11,033 events, 2007 to 2017) was read from its legacy copy on data.nasa.gov. The 124 events in Uttarakhand located to 10 km or better are built into the app. An event counts for a stretch when the road passes within its location accuracy (at least 3 km). Highest: Uttarkashi to Bhatwari on the Gangotri road with 15 events. Catalogue points show on the control room map.
- Slope classes recalibrated: cut-offs at 31 and 37 degrees, near the terciles of the 44 hill stretches, give 15, 16 and 13 stretches per class instead of 32 in the top class.
- Replay re-scored with both changes from the rain recorded in the live run (the offline re-score reproduces the live demo-data rows exactly). 9 Jul 2026 on recorded rain: 3 of 4 closed stretches Caution or worse, 1 Avoid, 3 other stretches Avoid. 20 Aug 2025 still 0 of 5. Dry control days still no Avoid.
- The footer no longer calls slope and incident values placeholders; its data line says what each copy uses.

## 26 Oct 2026 (v4.4): live by default
- The app opens on the live Open-Meteo forecast instead of the demo heavy-rain days, and plans from today. Live forecast is first in the weather menu; demo weather is a fallback only when there is no connection and no saved forecast.
- The live forecast refreshes every hour while the app is open and as soon as a dropped connection comes back.
