"""Builds the single-file app (dist/PahaadPath.html) and the installable site folder (dist/site/).
Usage: python3 tools/build.py [open_data.json] [replay_results.json]"""
import json,os,sys,shutil,hashlib
R=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
rd=lambda p:open(os.path.join(R,p),encoding='utf-8').read()
app=rd('src/app.html')
def sub(tag,val):
    global app
    assert app.count(tag)==1,(tag,app.count(tag))
    app=app.replace(tag,val)
sub('/*__LEAFLET_CSS__*/',rd('vendor/leaflet-1.9.4/package/dist/leaflet.css'))
sub('/*__LEAFLET_JS__*/',rd('vendor/leaflet-1.9.4/package/dist/leaflet.js').replace('</script','<\\/script'))
sub('/*__QR_JS__*/',rd('vendor/qrcode-generator-1.4.4/package/qrcode.js').replace('</script','<\\/script'))
sub('/*__FEATURES_CSS__*/',rd('src/features.css'))
feat=rd('src/features.js')+'\n'+rd('src/features2.js')
gt=json.load(open(os.path.join(R,'replay_source/gt.json'),encoding='utf-8'))
od=json.load(open(sys.argv[1],encoding='utf-8')) if len(sys.argv)>1 and sys.argv[1]!='-' else None
rp=json.load(open(sys.argv[2],encoding='utf-8')) if len(sys.argv)>2 else None
def inj(tag,obj,default):
    global feat
    assert feat.count(tag+default)==1,tag
    feat=feat.replace(tag+default,json.dumps(obj,ensure_ascii=False,separators=(',',':')) if obj is not None else 'null' if default=='null' else default)
inj('/*__BASEMAP__*/',json.load(open(os.path.join(R,'tools/basemap.json'))),'{rivers:[],roads:[],borders:[],lakes:[]}')
inj('/*__GT__*/',gt,'{events:[]}')
inj('/*__OPEN_DATA__*/',od,'null')
inj('/*__REPLAY_BAKED__*/',{'results':rp['results'],'series':{k:v for k,v in rp.get('series',{}).items() if k.endswith('/archive')}} if rp else None,'null')
sub('/*__FEATURES_JS__*/',feat)
os.makedirs(os.path.join(R,'dist/site'),exist_ok=True)
open(os.path.join(R,'dist/PahaadPath.html'),'w',encoding='utf-8').write(app)
site=os.path.join(R,'dist/site')
open(os.path.join(site,'index.html'),'w',encoding='utf-8').write(app)
shutil.copy(os.path.join(R,'src/icon.svg'),site)
ver=hashlib.sha1(app.encode()).hexdigest()[:10]
open(os.path.join(site,'manifest.webmanifest'),'w').write(json.dumps({"name":"PahaadPath","short_name":"PahaadPath","description":"Hill-road landslide, traffic and entry-rule advisory for Uttarakhand","start_url":"./","display":"standalone","background_color":"#EDEFE8","theme_color":"#1D3F31","icons":[{"src":"icon.svg","sizes":"any","type":"image/svg+xml","purpose":"any maskable"}]},indent=1))
open(os.path.join(site,'sw.js'),'w').write("""// Offline cache: the app is one file, so cache it and serve it when there is no signal. Weather and map tiles stay network-first.
const C='pp-%s';
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(['./','index.html','manifest.webmanifest','icon.svg'])).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(u.origin!==location.origin)return;
  e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request)));});
"""%ver)
open(os.path.join(site,'.nojekyll'),'w').write('')
print('built',len(app.encode()),'bytes; open data',bool(od),'replay',bool(rp))
