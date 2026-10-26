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
- Proof tab: the closure-day replay runs inside the app with the same engine, with scoreboard, map of named closures, results file save and load, and "plan a trip on this day" using the recorded rain.
- Open data builder in the browser: road distance and shape per link from OSRM (OpenStreetMap data), terrain slope per hill link from the Copernicus DEM through the Open-Meteo elevation API. Toggle on or off; footer states which data are in use.
- Safety tab: helplines 112, 1070, 1077 and 1364 with sources, SOS location share, towns with lodging on the route, what to do at a landslide.
- Trip from a sentence, typed or spoken, in English, Hindi or Hinglish.
- QR code and copy link for a trip; installable offline web app (manifest and service worker) for hosting.
- Tests: matrix 1,830 of 1,830 town pairs connect, 240 trips per scenario with 0 failures; house style clean on 88 screens; feature tests pass with mocked web replies.

## 26 Oct 2026 (v4.1)
- Road reports shared across phones and the control room through a public test channel (ntfy.sh), with the two-confirmation rule.
- Incident history from the NASA Global Landslide Catalog (COOLR events within 3 km of each hill road), built in the browser; catalogue points shown in the control room.
- Threshold sensitivity chart in Proof: hit rate and false alarms as the Caine trigger is scaled from 0.4 to 1.6.
- Road profile on the Trip tab from the Copernicus DEM, coloured by risk.
- Published on GitHub with CI that rebuilds the app and runs all tests.
