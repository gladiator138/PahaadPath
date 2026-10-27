/* ================= v6: what general map apps do not do on hill roads: watch saved trips, tell family by SMS, where am I with no data, fuel cost ================= */
Object.assign(T.en,{
  mt_t:'My trips',mt_s:'Saved trips are checked again each time the forecast updates, also offline.',mt_save:'Save trip',mt_saved:'Saved',mt_open:'Open',mt_del:'Remove',
  mt_was:'was {w} when saved',mt_up:'Risk went up since you saved this trip',mt_down:'Risk went down since you saved this trip',mt_full:'Up to {n} trips can be saved. Remove one first.',mt_ok:'Trip saved. It is checked again on every forecast update.',
  fm_b:'Tell family (SMS)',fm_t:'Tell family by SMS',fm_s:'SMS often gets through where mobile data does not. The message goes from your own phone; nothing is sent to PahaadPath.',
  fm_num:'Family phone number',fm_plan:'Send trip plan',fm_ok:'Reached safely',fm_stuck:'Stuck, send my location',fm_need:'Type a phone number first.',
  fm_msg_plan:'PahaadPath trip: {r}. Leaving {d}, expect to reach {a}.{h} Road risk: {l}. I will SMS when I reach.',fm_msg_halt:' Night halt at {p}.',
  fm_msg_ok:'Reached {p} safely. (PahaadPath)',fm_msg_stuck:'Stuck on the road near {p}. Location: {u} (accuracy {m} m). I am safe for now. (PahaadPath)',fm_msg_stuck0:'Stuck on the road near {p}. No GPS fix. I am safe for now. (PahaadPath)',
  wh_b:'Where am I on this trip?',wh_t:'Where am I',wh_s:'Uses GPS only, no mobile data needed.',wh_busy:'Finding your position…',wh_off:'{km} km from this route. Nearest town on it: {p}.',
  wh_on:'On {r}, about {km} km from {p}.',wh_at:'On {r}, near {p}.',wh_now:'Landslide risk here now: {l}.',wh_next:'Next risky stretch: {r} ({l}), about {km} km ahead.',wh_clear:'No Caution or Avoid stretch ahead on this trip.',
  wh_stay:'Next town with lodging: {p}, about {km} km ahead.',wh_left:'About {km} km left to {p}.',wh_err:'No GPS fix. Go to open sky and try again, or check that location is allowed.',
  fu_t:'Fuel and cost',fu_s:'Your own numbers. Hill roads use more fuel than the plains, so use your car’s mileage on hills.',fu_mil:'Mileage, km per litre',fu_pr:'Fuel price, ₹ per litre',
  fu_out:'About {l} litres for {km} km, about ₹{c}.',
  of_t:'Official warnings',of_s:'Needs internet. PahaadPath is advisory; these are the official sources.',of_sachet:'Sachet (NDMA): official disaster alerts by district',of_imd:'IMD Mausam: district weather warnings'
});
Object.assign(T.hi,{
  mt_t:'मेरी यात्राएँ',mt_s:'सहेजी गई यात्राएँ हर बार पूर्वानुमान बदलने पर दोबारा जाँची जाती हैं, ऑफ़लाइन भी।',mt_save:'यात्रा सहेजें',mt_saved:'सहेजी गई',mt_open:'खोलें',mt_del:'हटाएँ',
  mt_was:'सहेजते समय {w} था',mt_up:'सहेजने के बाद जोखिम बढ़ा है',mt_down:'सहेजने के बाद जोखिम घटा है',mt_full:'{n} यात्राएँ तक सहेज सकते हैं। पहले एक हटाएँ।',mt_ok:'यात्रा सहेजी गई। हर नए पूर्वानुमान पर दोबारा जाँची जाएगी।',
  fm_b:'परिवार को बताएँ (SMS)',fm_t:'परिवार को SMS से बताएँ',fm_s:'जहाँ मोबाइल डेटा नहीं चलता, वहाँ अक्सर SMS चला जाता है। संदेश आपके अपने फ़ोन से जाता है; पहाड़ पथ को कुछ नहीं भेजा जाता।',
  fm_num:'परिवार का फ़ोन नंबर',fm_plan:'यात्रा की योजना भेजें',fm_ok:'सुरक्षित पहुँच गए',fm_stuck:'फँसे हैं, मेरी जगह भेजें',fm_need:'पहले फ़ोन नंबर लिखें।',
  fm_msg_plan:'पहाड़ पथ यात्रा: {r}। रवानगी {d}, पहुँचने का अनुमान {a}।{h} सड़क का जोखिम: {l}। पहुँचने पर SMS भेजेंगे।',fm_msg_halt:' रात का पड़ाव {p} में।',
  fm_msg_ok:'{p} सुरक्षित पहुँच गए। (पहाड़ पथ)',fm_msg_stuck:'{p} के पास सड़क पर फँसे हैं। जगह: {u} (सटीकता {m} मीटर)। अभी सुरक्षित हैं। (पहाड़ पथ)',fm_msg_stuck0:'{p} के पास सड़क पर फँसे हैं। GPS नहीं मिला। अभी सुरक्षित हैं। (पहाड़ पथ)',
  wh_b:'इस यात्रा में मैं कहाँ हूँ?',wh_t:'मैं कहाँ हूँ',wh_s:'सिर्फ़ GPS से, मोबाइल डेटा नहीं चाहिए।',wh_busy:'आपकी जगह ढूँढ रहे हैं…',wh_off:'इस रास्ते से {km} किमी दूर। रास्ते का सबसे पास का शहर: {p}।',
  wh_on:'{r} पर, {p} से लगभग {km} किमी।',wh_at:'{r} पर, {p} के पास।',wh_now:'यहाँ अभी भूस्खलन जोखिम: {l}।',wh_next:'अगला जोखिम वाला हिस्सा: {r} ({l}), लगभग {km} किमी आगे।',wh_clear:'इस यात्रा में आगे कोई सावधानी या टालें वाला हिस्सा नहीं।',
  wh_stay:'ठहरने की जगह वाला अगला शहर: {p}, लगभग {km} किमी आगे।',wh_left:'{p} तक लगभग {km} किमी बाकी।',wh_err:'GPS नहीं मिला। खुले आसमान के नीचे जाकर फिर कोशिश करें, या देखें कि लोकेशन की अनुमति है।',
  fu_t:'ईंधन और ख़र्च',fu_s:'आपके अपने आँकड़े। पहाड़ी सड़कों पर मैदान से ज़्यादा ईंधन लगता है, इसलिए पहाड़ पर अपनी गाड़ी का माइलेज डालें।',fu_mil:'माइलेज, किमी प्रति लीटर',fu_pr:'ईंधन का दाम, ₹ प्रति लीटर',
  fu_out:'{km} किमी के लिए लगभग {l} लीटर, लगभग ₹{c}।',
  of_t:'आधिकारिक चेतावनियाँ',of_s:'इंटरनेट चाहिए। पहाड़ पथ सिर्फ़ सलाह देता है; ये आधिकारिक स्रोत हैं।',of_sachet:'सचेत (NDMA): ज़िलेवार आधिकारिक आपदा चेतावनियाँ',of_imd:'IMD मौसम: ज़िलेवार मौसम चेतावनियाँ'
});

/* ---------- my trips: saved trips are re-scored on every forecast update, so a change shows up without planning again ---------- */
const MT_MAX=5;
let MY=lsGet('pp_trips',[]);if(!Array.isArray(MY))MY=[];
function mtKey(x){return x.from+'|'+x.to+'|'+x.date;}
function mtCur(){return{from:st.from,to:st.to,date:st.date,dep:st.dep};}
function mtSaved(){const k=mtKey(mtCur());return MY.some(x=>mtKey(x)===k);}
function mtPrune(){const today=dayOf(st.nowMs);const n=MY.length;MY=MY.filter(x=>{const d=parseDate(x.date);return d!=null&&d>=today&&NODE(x.from)&&NODE(x.to);});if(MY.length!==n)lsSet('pp_trips',MY);}
const mtMemo=new Map();
/* plans a saved trip with the same engine as the screen, then puts the screen's trip back */
function mtRisk(x){
  const key=mtKey(x)+'|'+x.dep+'|'+st.hour0+'|'+st.src+'|'+st.scn+'|'+st.engine+'|'+odVer+'|'+ctx().reports.length;
  if(mtMemo.has(key))return mtMemo.get(key);
  const keep={from:st.from,to:st.to,date:st.date,dateIdx:st.dateIdx,dep:st.dep,pick:st.pick};
  let out=null;
  try{
    st.from=x.from;st.to=x.to;st.date=x.date;st.dateIdx=parseDate(x.date);st.dep=x.dep;st.pick=null;
    const M=compute();
    if(M.plans&&M.plans.length)out={score:M.cur.score,level:M.cur.level,hill:M.cur.hasHill,ms:M.slots[M.k].ms};
  }catch(e){out=null;}
  Object.assign(st,keep);
  if(mtMemo.size>50)mtMemo.clear();
  mtMemo.set(key,out);return out;
}
function mtLabel(level,score,hill){return hill?t(LV[level])+' '+score:t('plains');}
function myTripsHtml(){
  mtPrune();if(!MY.length||st.src==='replay')return '';
  const rows=MY.map((x,i)=>{
    const r=mtRisk(x);if(!r)return '';
    const ch=r.hill&&x.level!=null?Math.sign(r.level-x.level):0;
    const pill=r.hill?'<span class="pill l'+r.level+'">'+esc(mtLabel(r.level,r.score,true))+'</span>':'<span class="pill pl">'+t('plains')+'</span>';
    return '<div class="mt'+(ch>0?' up':'')+'"><div class="mt-h"><b>'+esc(pname(x.from)+' → '+pname(x.to))+'</b>'+pill+'</div>'
      +'<div class="note">'+esc(fmtDate(parseDate(x.date))+' '+clock(r.ms))+(x.level!=null&&r.hill?' · '+esc(fill(t('mt_was'),{w:mtLabel(x.level,x.score,true)})):'')+'</div>'
      +(ch?'<div class="mt-ch">'+t(ch>0?'mt_up':'mt_down')+'</div>':'')
      +'<div class="mt-a"><button class="btn sm" type="button" data-mt-open="'+i+'">'+t('mt_open')+'</button><button class="btn sm" type="button" data-mt-del="'+i+'">'+t('mt_del')+'</button></div></div>';
  }).join('');
  return rows?'<h3>'+t('mt_t')+'</h3><p class="note">'+t('mt_s')+'</p>'+rows:'';
}
function mtSave(){
  const M=st.M;if(!M||!M.cur)return;
  const x=Object.assign(mtCur(),{score:M.cur.score,level:M.cur.level});
  const k=mtKey(x),i=MY.findIndex(y=>mtKey(y)===k);
  if(i>=0)MY[i]=x;else{if(MY.length>=MT_MAX){toast(fill(t('mt_full'),{n:MT_MAX}));return;}MY.push(x);}
  lsSet('pp_trips',MY);toast(t('mt_ok'));render();
}

/* ---------- tell family by SMS: works on a voice-only signal, goes from the user's own phone ---------- */
function famBody(kind,pos){
  const M=st.M;if(!M||!M.cur)return '';
  const cur=M.cur,lvW=cur.hasHill?t(LV[cur.level])+' '+cur.score+'/100':t('plains');
  if(kind==='plan')return fill(t('fm_msg_plan'),{r:titleOf(M),d:fmtDate(st.dateIdx)+' '+clock(M.slots[M.k].ms),a:when(msOf(cur.end)),
    h:cur.halts.map(h=>fill(t('fm_msg_halt'),{p:pname(h.node)})).join(''),l:lvW});
  if(kind==='ok')return fill(t('fm_msg_ok'),{p:pname(M.trip.to)});
  const near=pos&&pos.near?pname(pos.near):titleOf(M);
  return pos&&pos.lat!=null?fill(t('fm_msg_stuck'),{p:near,u:'https://maps.google.com/?q='+pos.lat.toFixed(5)+','+pos.lon.toFixed(5),m:Math.round(pos.acc)}):fill(t('fm_msg_stuck0'),{p:near});
}
function smsHref(num,body){return 'sms:'+encodeURIComponent(num)+'?body='+encodeURIComponent(body);}
function famNum(){return (lsGet('pp_fam','')||'').replace(/[^\d+]/g,'');}
function showFamily(){
  openModal('<h3>'+t('fm_t')+'</h3><p class="note">'+t('fm_s')+'</p>'
    +'<label class="lbl" for="fm-num">'+t('fm_num')+'</label><input id="fm-num" class="inp" type="tel" inputmode="tel" autocomplete="tel" value="'+esc(lsGet('pp_fam',''))+'">'
    +'<p class="mono" id="fm-prev">'+esc(famBody('plan'))+'</p>'
    +'<div class="acts in"><a class="btn pri" data-fm="plan" href="#">'+t('fm_plan')+'</a><a class="btn" data-fm="ok" href="#">'+t('fm_ok')+'</a><a class="btn" data-fm="stuck" href="#">'+t('fm_stuck')+'</a></div>');
}
function famSend(kind,a){
  const num=famNum();if(!num){toast(t('fm_need'));return false;}
  if(kind!=='stuck'){a.href=smsHref(num,famBody(kind));return true;}
  /* the location needs a GPS fix first, so this one opens the SMS app itself */
  locate(pos=>{location.href=smsHref(num,famBody('stuck',pos));},()=>{location.href=smsHref(num,famBody('stuck',null));});
  return false;
}
document.addEventListener('input',e=>{if(e.target.id==='fm-num')lsSet('pp_fam',e.target.value.trim());});
document.addEventListener('click',e=>{
  const a=e.target.closest('[data-fm]');if(!a)return;
  if(!famSend(a.dataset.fm,a))e.preventDefault();
});

/* ---------- where am I: GPS works with no mobile data, so the trip screen can say what lies ahead ---------- */
function locate(ok,fail){
  if(!navigator.geolocation){fail();return;}
  navigator.geolocation.getCurrentPosition(p=>{const pos={lat:p.coords.latitude,lon:p.coords.longitude,acc:p.coords.accuracy};pos.near=tripNearTown(pos);ok(pos);},fail,
    {enableHighAccuracy:true,timeout:20000,maximumAge:120000});
}
function kmBetween(a,b,c,d){const kx=111.32*Math.cos(a*Math.PI/180);return Math.hypot((d-b)*kx,(c-a)*110.57);}
function tripNearTown(pos){
  const M=st.M;if(!M||!M.cur)return null;let best=null,bd=1e9;
  M.cur.nodes.forEach(id=>{const n=NODE(id);if(!n||n.virtual)return;const d=kmBetween(pos.lat,pos.lon,n.lat,n.lon);if(d<bd){bd=d;best=id;}});
  return best;
}
/* position along the trip: the closest stretch, and how far along it (km), from the stretch's road shape */
function whereOnTrip(lat,lon,cur){
  let best=null;
  cur.rows.forEach((r,i)=>{
    let g=geomOf(r.seg);if(r.rev)g=g.slice().reverse();
    const d=distToLine(lat,lon,g);
    if(!best||d<best.d){
      let tot=0,at=0,bd=1e9;const cum=[0];
      for(let j=1;j<g.length;j++){tot+=kmBetween(g[j-1][0],g[j-1][1],g[j][0],g[j][1]);cum.push(tot);}
      g.forEach((p,j)=>{const x=kmBetween(lat,lon,p[0],p[1]);if(x<bd){bd=x;at=cum[j];}});
      best={i,d,r,frac:tot?at/tot:0};
    }
  });
  return best;
}
function whereHtml(pos){
  const M=st.M,cur=M.cur,w=whereOnTrip(pos.lat,pos.lon,cur);if(!w)return '';
  const out=[];
  if(w.d>5){out.push(fill(t('wh_off'),{km:Math.round(w.d),p:pname(pos.near)}));return out.map(x=>'<p>'+esc(x)+'</p>').join('');}
  const r=w.r,kmHere=r.kmStart+r.seg.km*w.frac,nowH=(Date.now()-st.hour0)/3600e3;
  out.push(fill(t(r.seg.km*w.frac<1?'wh_at':'wh_on'),{r:pname(r.from)+' → '+pname(r.to),p:pname(r.from),km:Math.round(r.seg.km*w.frac)}));
  if(!r.seg.plain){const s=evalEdge(r.seg,r.rev,nowH,ctx()).score;out.push(fill(t('wh_now'),{l:t(LV[lvl(s)])+' '+s}));}
  const next=cur.rows.slice(w.i+1).find(x=>!x.seg.plain&&lvl(x.score)>0);
  out.push(next?fill(t('wh_next'),{r:pname(next.from)+' → '+pname(next.to),l:t(LV[lvl(next.score)])+' '+next.score,km:Math.max(0,Math.round(next.kmStart-kmHere))}):t('wh_clear'));
  const stay=cur.rows.slice(w.i).find(x=>NODE(x.to).stay&&!NODE(x.to).virtual&&x.to!==M.trip.to);
  if(stay)out.push(fill(t('wh_stay'),{p:pname(stay.to),km:Math.max(0,Math.round(stay.kmStart+stay.seg.km-kmHere))}));
  out.push(fill(t('wh_left'),{p:pname(M.trip.to),km:Math.max(0,Math.round(cur.totalKm-kmHere))}));
  return out.map(x=>'<p>'+esc(x)+'</p>').join('');
}
function showWhere(){
  openModal('<h3>'+t('wh_t')+'</h3><p class="note">'+t('wh_s')+'</p><div id="wh-out"><p>'+t('wh_busy')+'</p></div>');
  locate(pos=>{const o=$('wh-out');if(o)o.innerHTML=whereHtml(pos);},()=>{const o=$('wh-out');if(o)o.innerHTML='<p>'+esc(t('wh_err'))+'</p>';});
}

/* ---------- fuel and cost, from the user's own mileage and price ---------- */
function fuelHtml(M){
  const mil=+lsGet('pp_mil',12)||12,pr=+lsGet('pp_fuel',95)||95,km=Math.round(M.cur.totalKm);
  return '<div class="card fu"><h3>'+t('fu_t')+'</h3><p class="note">'+t('fu_s')+'</p>'
    +'<div class="fu-in"><label>'+t('fu_mil')+'<input id="fu-mil" class="inp" type="number" min="3" max="40" step="0.5" inputmode="decimal" value="'+mil+'"></label>'
    +'<label>'+t('fu_pr')+'<input id="fu-pr" class="inp" type="number" min="50" max="200" step="1" inputmode="decimal" value="'+pr+'"></label></div>'
    +'<p id="fu-out"><b>'+esc(fuelText(km,mil,pr))+'</b></p></div>';
}
function fuelText(km,mil,pr){const l=km/mil;return fill(t('fu_out'),{l:Math.round(l),km,c:(Math.round(l*pr/50)*50).toLocaleString('en-IN')});}
document.addEventListener('input',e=>{
  if(e.target.id!=='fu-mil'&&e.target.id!=='fu-pr')return;
  const mil=+$('fu-mil').value,pr=+$('fu-pr').value;if(!(mil>=3&&pr>=10)||!st.M)return;
  lsSet('pp_mil',mil);lsSet('pp_fuel',pr);$('fu-out').innerHTML='<b>'+esc(fuelText(Math.round(st.M.cur.totalKm),mil,pr))+'</b>';
});

/* ---------- hooks into the trip screen ---------- */
const renderTripV5=renderTrip;
renderTrip=function(M){
  renderTripV5(M);
  $('panel').insertAdjacentHTML('afterbegin','<div class="acts in wh"><button class="btn" id="a-where" type="button">'+t('wh_b')+'</button></div>');
  $('panel').insertAdjacentHTML('beforeend',fuelHtml(M));
};
const renderSafetyV5=renderSafety;
renderSafety=function(M){
  renderSafetyV5(M);
  $('panel').insertAdjacentHTML('beforeend','<h4 class="sec">'+t('of_t')+'</h4><p class="note">'+t('of_s')+'</p><ul class="ul">'
    +'<li><a href="https://sachet.ndma.gov.in/" target="_blank" rel="noopener noreferrer">'+t('of_sachet')+'</a></li>'
    +'<li><a href="https://mausam.imd.gov.in/" target="_blank" rel="noopener noreferrer">'+t('of_imd')+'</a></li></ul>');
};
const renderV5=render;
render=function(){
  renderV5();
  let box=$('mytrips');
  if(!box){box=document.createElement('section');box.id='mytrips';box.className='card';$('routes').before(box);}
  const h=st.view==='trip'?myTripsHtml():'';box.innerHTML=h;box.hidden=!h;
  const acts=$('acts');
  if(st.view==='trip'&&st.M&&st.M.cur&&acts&&acts.innerHTML&&st.src!=='replay'){
    const sv=mtSaved();
    acts.insertAdjacentHTML('beforeend','<button class="btn" id="a-fam" type="button">'+t('fm_b')+'</button>'
      +'<button class="btn'+(sv?' on':'')+'" id="a-save" type="button" aria-pressed="'+sv+'">'+(sv?'★ '+t('mt_saved'):'☆ '+t('mt_save'))+'</button>');
  }
};
document.addEventListener('click',e=>{
  const c=e.target.closest('#a-save,#a-fam,#a-where,[data-mt-open],[data-mt-del]');if(!c)return;
  if(c.id==='a-save')mtSave();
  else if(c.id==='a-fam')showFamily();
  else if(c.id==='a-where')showWhere();
  else if(c.dataset.mtOpen!=null){const x=MY[+c.dataset.mtOpen];if(!x)return;st.from=x.from;st.to=x.to;st.date=x.date;st.dateIdx=parseDate(x.date);st.dep=x.dep;st.pick=null;st.tab='route';render();window.scrollTo(0,0);}
  else if(c.dataset.mtDel!=null){MY.splice(+c.dataset.mtDel,1);lsSet('pp_trips',MY);render();}
});
