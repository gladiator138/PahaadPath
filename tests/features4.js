// v6 checks: saved trips are re-scored, family SMS text, where am I from GPS with no data, fuel cost, house style of the new screens.
const {chromium}=require('playwright');
const F=process.argv[2];
const fails=[];const ok=(c,m)=>{if(!c)fails.push(m);};
const style=s=>[/—/,/–/,/\S - \S/,/, (and|or|और|या) /].filter(re=>re.test(s)).map(String);
(async()=>{
 const b=await chromium.launch();
 const ctx=await b.newContext({viewport:{width:412,height:900},permissions:['geolocation'],geolocation:{latitude:30.1462,longitude:78.5986}});
 await ctx.route(/^https?:\/\//,r=>r.abort());
 const p=await ctx.newPage();const errs=[];p.on('pageerror',e=>errs.push(String(e)));
 await p.goto('file://'+F+'?tiles=0&scn=monsoon&from=dehradun&to=badrinath');await p.waitForFunction(()=>window.PP&&PP.st.series);
 // 1. save a trip, then pretend it was safer when saved: the list must say the risk went up
 await p.click('#a-save');
 const saved=await p.evaluate(()=>JSON.parse(localStorage.getItem('pp_trips')));
 ok(saved.length===1&&saved[0].to==='badrinath'&&typeof saved[0].score==='number','trip saved '+JSON.stringify(saved));
 await p.evaluate(()=>{const s=JSON.parse(localStorage.getItem('pp_trips'));s[0].level=0;s[0].score=1;localStorage.setItem('pp_trips',JSON.stringify(s));});
 await p.reload();await p.waitForFunction(()=>window.PP&&PP.st.series);
 const now=await p.evaluate(()=>PP.st.M.cur.level);
 const mt=await p.innerText('#mytrips');
 ok(now>0&&/Risk went up/.test(mt),'risk change shown: level '+now+' | '+mt);
 // the screen's own trip is not disturbed by checking saved trips
 await p.evaluate(()=>{PP.st.from='delhi';PP.st.to='nainital';PP.render();});
 const t2=await p.evaluate(()=>[PP.st.from,PP.st.to,PP.st.M.trip.to]);
 ok(t2.join()==='delhi,nainital,nainital','screen trip kept '+t2);
 await p.click('[data-mt-open="0"]');
 ok(await p.evaluate(()=>PP.st.to)==='badrinath','open a saved trip');
 // 2. family SMS: the plan goes in the body, to the typed number
 await p.click('#a-fam');await p.fill('#fm-num','98765 43210');
 const href=await p.evaluate(()=>{const a=document.querySelector('[data-fm="plan"]');a.addEventListener('click',e=>e.preventDefault());a.click();return decodeURIComponent(a.href);});
 ok(/^sms:9876543210\?body=PahaadPath trip: Dehradun → Badrinath\. Leaving /.test(href)&&/Road risk: /.test(href),'sms link '+href);
 ok(href.length<400,'sms short enough '+href.length);
 await p.click('#modal-x');
 // 3. where am I: a point on the Rishikesh to Devprayag road, no network
 await p.click('#a-where');await p.waitForFunction(()=>!/Finding/.test(document.getElementById('modal-body').innerText),null,{timeout:8000});
 const wh=await p.innerText('#modal-body');
 ok(/On .+ → .+/.test(wh)&&/km left to Badrinath/.test(wh)&&/Landslide risk here now/.test(wh),'where am I: '+wh);
 await p.click('#modal-x');
 // 4. fuel from the user's numbers
 await p.fill('#fu-mil','10');await p.fill('#fu-pr','100');
 const km=await p.evaluate(()=>Math.round(PP.st.M.cur.totalKm)),fu=await p.innerText('#fu-out');
 ok(fu.includes('about ₹'+(Math.round(km/10*100/50)*50).toLocaleString('en-IN')),'fuel '+fu+' for '+km+' km');
 // 5. house style on the new screens, both languages
 for(const lang of ['en','hi']){
  await p.click(lang==='en'?'#b-en':'#b-hi');
  let txt=await p.innerText('body');
  await p.click('#a-fam');txt+=await p.innerText('#modal-body')+await p.evaluate(()=>document.querySelector('[data-fm="plan"]').href);await p.click('#modal-x');
  await p.click('#a-where');await p.waitForTimeout(800);txt+=await p.innerText('#modal-body');await p.click('#modal-x');
  await p.evaluate(()=>{PP.st.tab='safety';PP.render();});txt+=await p.innerText('#panel');await p.evaluate(()=>{PP.st.tab='route';PP.render();});
  const bad=style(decodeURIComponent(txt));ok(!bad.length,'house style '+lang+' '+bad);
 }
 ok(!errs.length,'page errors '+errs);
 await b.close();
 if(fails.length){console.log('FAIL\n'+fails.join('\n'));process.exit(1);}
 console.log('all v6 checks passed');
})();
