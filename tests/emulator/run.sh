#!/bin/bash
# Runs inside the emulator job: installs the published signed APK and drives it. Output in emu-out/.
# APK_URL picks the APK; SITE_URL, when set, is the live site whose page the APK should carry (else main's index.html).
set -x
OUT=emu-out; mkdir -p $OUT
APK_URL=${APK_URL:-https://github.com/gladiator138/PahaadPath/releases/download/android-latest/PahaadPath.apk}
echo "$APK_URL" > $OUT/apk_url.txt
curl -sSL -o PahaadPath.apk "$APK_URL"
ls -l PahaadPath.apk; sha256sum PahaadPath.apk | tee $OUT/apk_sha256.txt
BT=$(ls -d $ANDROID_HOME/build-tools/* | sort -V | tail -1)
$BT/aapt dump badging PahaadPath.apk | head -5 > $OUT/apk_badging.txt
export PKG=$($BT/aapt dump badging PahaadPath.apk | sed -n "s/^package: name='\([^']*\)'.*/\1/p")
A=$($BT/aapt dump badging PahaadPath.apk | sed -n "s/^launchable-activity: name='\([^']*\)'.*/\1/p")
[ -n "$PKG" ] && [ -n "$A" ] && export ACT=$PKG/$A
$BT/apksigner verify --print-certs PahaadPath.apk > $OUT/apk_cert.txt 2>&1
unzip -p PahaadPath.apk assets/index.html > $OUT/apk_index.html
REF=index.html; [ -n "$SITE_URL" ] && curl -sSL -o site_index.html "$SITE_URL" && REF=site_index.html
cmp $OUT/apk_index.html $REF && echo "APK page same as ${SITE_URL:-main index.html}" > $OUT/apk_vs_main.txt || echo "APK page DIFFERS from ${SITE_URL:-main index.html}" > $OUT/apk_vs_main.txt
rm -f $OUT/apk_index.html
adb install -r PahaadPath.apk | tee $OUT/install.txt
adb logcat -c
node tests/emulator/drive.js $OUT 2>&1 | tee $OUT/drive_log.txt
adb logcat -d -v time '*:W' | grep -iE "pahaadpath|chromium|AndroidRuntime|FATAL|WebView" | tail -400 > $OUT/logcat.txt
true
