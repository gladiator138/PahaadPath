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

## 26 Oct 2026 (v5): Python pipeline and offline first distribution
Goal from here on: real users in Uttarakhand who are out of network most of the time.
- Python pipeline (`python/`, standard library only): reads the road network from the app, ports the v4 engine (reproduces the app's scores on all 176 replay rows), downloads ERA5 rain for 2007 to 2017, trains and checks a v5 model, makes the data pack, prints a control room advisory and runs an optional road report sync server.
- Model v5 (logistic regression on rain on the day, 3 days, 3 to 9 days before, 10 to 30 days before, slope and NASA incident count) checked year by year on 147 catalog landslide days: AUC 0.81 against 0.82 for v4, and at the same alarm rate v4 catches more. v4 stays the default; v5 is an experimental option. Full numbers in `data/model/REPORT.md`.
- Rain memory: the app notes when very heavy rain fell on a stretch in the last 7 days (debris may still block it). ERA5 shows no heavy rain on the Gangotri road before 20 Aug 2025, so gridded rain cannot explain that day's closures; road reports remain the fix.
- Road reports keep their weight longer: 24 h for a slide or washed-out road, 48 h for a bridge, 8 h for debris (was 6 h for all). Reports made with no signal wait in an outbox and go out when the connection returns.
- Data pack: CI fetches the forecast every 3 hours and publishes one file (about 6 KB compressed instead of about 700 KB from the weather API). The app tries it first.
- Offline: a saved forecast is used for up to 10 days (was 36 hours); the header gives its age and, after 36 hours, says that rain since then is unknown.
- Distribution: "Share the app" saves the whole app as one file for WhatsApp, Bluetooth or a memory card. Android APK built in CI (WebView around the same file, works with no network, shares itself) and published as a release from main.

## 27 Oct 2026 (phone test fixes)
- Tested the Android build as a phone would run it (WebView origin, phone screen, real data pack, flight mode). Fixes from that run:
- The app remembers English or Hindi between openings.
- After signal returns the app leaves the saved forecast by itself (every 5 minutes and when reopened), even where the online event never fires, as in some Android web views.
- Forecast age counts from when the data pack was made, not from when the phone downloaded it.
- "1 report waiting" (was "1 reports"); Hindi summary line ends with a danda.

## 27 Oct 2026 (v6): what general map apps lack on hill roads
- My trips: save up to 5 trips; each is re-scored on every forecast update, also offline, and the list says when the risk went up since saving.
- Tell family by SMS: trip plan with leave and arrival time and night halt, "reached safely", or "stuck" with the GPS location. Sent from the user's own phone; works on a voice-only signal.
- Where am I on this trip: GPS only, no data. Risk on the current stretch now, next Caution or Avoid stretch, next town with lodging, km left.
- Fuel and cost from the user's own mileage and fuel price.
- Safety tab links to official warnings: Sachet (NDMA) and IMD Mausam.
- Roadside stops from OpenStreetMap (fuel, hospital or clinic, ATM, mechanic within 3 km of each town; 45 of 64 towns have at least one): listed per town on the Safety tab, longest stretch with no fuel mapped, next fuel and hospital in "Where am I". Made by the new open data workflow.
- Official alerts: the data pack now carries NDMA Sachet alerts for Uttarakhand from the last 48 hours, shown on the trip and kept offline with the saved forecast. The pack is published only from main.

## 27 Oct 2026: honest offline fixes
- Back after more than 10 days offline (or never online): the app no longer falls back to demo rain and sample road reports on a real trip. It says the saved forecast is too old, hides landslide risk and still plans roads, time, halts and stops.
- Road reports queued with no signal are no longer dropped after 12 hours; they go out whenever signal returns, with the time they were made. Shared reports are now kept for 48 hours (the longest a report counts, a bridge out), in the app and the sync server.
