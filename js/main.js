/* =========================================================================
   MAIN — wires up the whole invitation from window.WEDDING config.
   ========================================================================= */
(function(){
  "use strict";
  var W = window.WEDDING, I18N = window.I18N;
  var $  = function(s,c){return (c||document).querySelector(s);};
  var $$ = function(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s));};

  /* ---------- Loader ---------- */
  window.addEventListener("load", function(){
    setTimeout(function(){ $("#loader").classList.add("hide"); }, 650);
  });

  /* ---------- Curtain intro ---------- */
  var envelope = $("#envelope");
  var seal = $("#envelopeSeal");
  if(envelope && seal){
    document.body.style.overflow = "hidden";

    // Floating gold sparkle particles
    var eCanvas = $("#envParticles");
    var envAnimId;
    if(eCanvas && !matchMedia("(prefers-reduced-motion:reduce)").matches){
      var ectx = eCanvas.getContext("2d");
      var sparks = [];
      function resizeEnvCanvas(){eCanvas.width=innerWidth;eCanvas.height=innerHeight;}
      resizeEnvCanvas();
      window.addEventListener("resize",resizeEnvCanvas);
      for(var i=0;i<50;i++) sparks.push({
        x:Math.random()*innerWidth,
        y:Math.random()*innerHeight,
        r:0.8+Math.random()*2,
        dx:-0.1+Math.random()*0.2,
        dy:-0.2-Math.random()*0.4,
        o:Math.random()*0.4+0.05,
        phase:Math.random()*Math.PI*2
      });
      (function sparkLoop(){
        ectx.clearRect(0,0,eCanvas.width,eCanvas.height);
        var t=Date.now()*0.001;
        sparks.forEach(function(s){
          s.x+=s.dx+Math.sin(t*0.8+s.phase)*0.15;
          s.y+=s.dy;
          if(s.y<-10){s.y=eCanvas.height+10;s.x=Math.random()*eCanvas.width;}
          if(s.x<-10)s.x=eCanvas.width+10;
          if(s.x>eCanvas.width+10)s.x=-10;
          var flicker = 0.5+0.5*Math.sin(t*1.5+s.phase);
          ectx.globalAlpha = s.o*flicker;
          ectx.fillStyle="#c6a15b";
          ectx.beginPath();
          ectx.arc(s.x,s.y,s.r,0,Math.PI*2);
          ectx.fill();
          // soft glow
          ectx.globalAlpha = s.o*flicker*0.2;
          ectx.beginPath();
          ectx.arc(s.x,s.y,s.r*4,0,Math.PI*2);
          ectx.fill();
        });
        ectx.globalAlpha=1;
        envAnimId=requestAnimationFrame(sparkLoop);
      })();
    }

    seal.addEventListener("click", function(e){
      e.stopPropagation();
      openEnvelope();
    });

    function openEnvelope(){
      if(envelope.classList.contains("opening")) return;
      envelope.classList.add("opening");
      setTimeout(function(){
        envelope.classList.add("hide");
        document.body.style.overflow = "";
        if(envAnimId) cancelAnimationFrame(envAnimId);
      }, 2600);
    }
  }

  /* ---------- Inject config into DOM ---------- */
  function applyConfig(){
    // hero background & couple photos
    $(".hero__bg").style.backgroundImage = "url('"+W.heroImage+"')";
    var g=$('[data-photo="groom"]'), b=$('[data-photo="bride"]');
    if(g) g.style.backgroundImage="url('"+W.groomPhoto+"')";
    if(b) b.style.backgroundImage="url('"+W.bridePhoto+"')";

    // venue links
    $("#directionsBtn").href = W.mapsLink;
    $(".venue__map iframe").src = "https://www.google.com/maps?q="+encodeURIComponent(W.mapsQuery)+"&output=embed";

    // contacts
    $("#cPhone").href = "tel:"+W.phone;
    $("#cPhone .contact__val").textContent = W.phone;
    var waLink = "https://wa.me/"+W.whatsapp;
    if($("#cWa")) $("#cWa").href = waLink;
    if($("#fabWa")) $("#fabWa").href = waLink;
    if($("#cMail")) { $("#cMail").href = "mailto:"+W.email; $("#cMail .contact__val").textContent = W.email; }
    $("#cIg").href = W.instagram;

    // gift bank details
    var dd = $$(".gift__bank dd");
    if(dd.length>=4){dd[0].textContent=W.bankName;dd[1].textContent=W.bankAcc;dd[2].textContent=W.bankIfsc;dd[3].textContent=W.upiId;}
  }

  /* ---------- Events cards ---------- */
  function buildEvents(){
    var grid=$("#eventsGrid"), lang=state.lang;
    grid.innerHTML = W.events.map(function(e){
      var title = (I18N[lang]["ev_"+e.key]) || e.title;
      return '<article class="event-card reveal">'+
        '<div class="event-card__icon">'+e.icon+'</div>'+
        '<h3>'+title+'</h3>'+
        '<dl>'+
          '<div class="row"><dt>📅</dt><dd>'+e.date+'</dd></div>'+
          '<div class="row"><dt>🕒</dt><dd>'+e.time+'</dd></div>'+
          '<div class="row"><dt>📍</dt><dd>'+e.place+'</dd></div>'+
        '</dl></article>';
    }).join("");
    observeReveals();
  }

  /* ---------- Gallery + lightbox ---------- */
  function buildGallery(){
    var grid=$("#galleryGrid");
    grid.innerHTML = W.gallery.map(function(src,i){
      return '<figure class="gallery__item" data-i="'+i+'">'+
        '<img loading="lazy" src="'+src+'" alt="Wedding memory '+(i+1)+'" '+
        'srcset="'+src+' 800w, '+src.replace("w=800","w=400")+' 400w" sizes="(max-width:600px) 90vw, 30vw"></figure>';
    }).join("");
    $$(".gallery__item").forEach(function(it){
      it.addEventListener("click", function(){ openLightbox(+it.dataset.i); });
    });
  }
  var lbIndex=0;
  function openLightbox(i){lbIndex=i;$("#lbImg").src=W.gallery[i];$("#lbImg").alt="Wedding memory "+(i+1);
    var lb=$("#lightbox");lb.classList.add("open");lb.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";}
  function closeLightbox(){var lb=$("#lightbox");lb.classList.remove("open");lb.setAttribute("aria-hidden","true");document.body.style.overflow="";}
  function lbStep(d){lbIndex=(lbIndex+d+W.gallery.length)%W.gallery.length;$("#lbImg").src=W.gallery[lbIndex];}
  $("#lbClose").addEventListener("click",closeLightbox);
  $("#lbPrev").addEventListener("click",function(){lbStep(-1);});
  $("#lbNext").addEventListener("click",function(){lbStep(1);});
  $("#lightbox").addEventListener("click",function(e){if(e.target===this)closeLightbox();});
  document.addEventListener("keydown",function(e){
    if(!$("#lightbox").classList.contains("open"))return;
    if(e.key==="Escape")closeLightbox();
    if(e.key==="ArrowLeft")lbStep(-1);
    if(e.key==="ArrowRight")lbStep(1);
  });

  /* ---------- i18n ---------- */
  var state={ lang: localStorage.getItem("wed_lang") || "en",
              theme: localStorage.getItem("wed_theme") || "light" };
  function applyLang(){
    var dict=I18N[state.lang];
    $$("[data-i18n]").forEach(function(el){var k=el.getAttribute("data-i18n");if(dict[k]!=null)el.textContent=dict[k];});
    document.documentElement.lang = state.lang==="mr"?"mr":"en";
    $("#langLabel").textContent = state.lang==="en"?"EN":"मरा";
    buildEvents(); // event titles are translated
  }
  $("#langToggle").addEventListener("click",function(){
    state.lang = state.lang==="en"?"mr":"en";
    localStorage.setItem("wed_lang",state.lang);
    applyLang();
  });

  /* ---------- Theme ---------- */
  function applyTheme(){document.documentElement.setAttribute("data-theme",state.theme);
    $("#themeToggle").setAttribute("aria-label", state.theme==="dark"?"Switch to light mode":"Switch to dark mode");}
  $("#themeToggle").addEventListener("click",function(){
    state.theme = state.theme==="dark"?"light":"dark";
    localStorage.setItem("wed_theme",state.theme);
    applyTheme();
  });

  /* ---------- Countdown ---------- */
  var target=new Date(W.weddingISO).getTime();
  function tick(){
    var now=Date.now(), diff=target-now;
    if(diff<=0){
      $("#cd").style.display="none";if($("#calBtn"))$("#calBtn").style.display="none";
      $("#cdDone").hidden=false;return;
    }
    var d=Math.floor(diff/864e5),h=Math.floor(diff%864e5/36e5),
        m=Math.floor(diff%36e5/6e4),s=Math.floor(diff%6e4/1e3);
    $("#cdDays").textContent=String(d).padStart(2,"0");
    $("#cdHours").textContent=String(h).padStart(2,"0");
    $("#cdMins").textContent=String(m).padStart(2,"0");
    $("#cdSecs").textContent=String(s).padStart(2,"0");
  }
  tick(); setInterval(tick,1000);

  /* ---------- Add to Google Calendar ---------- */
  function gcalUrl(){
    function fmt(iso){return new Date(iso).toISOString().replace(/[-:]/g,"").replace(/\.\d{3}/,"");}
    var params = new URLSearchParams({
      action:"TEMPLATE",
      text:"Wedding of "+W.groomName+" & "+W.brideName,
      dates:fmt(W.weddingISO)+"/"+fmt(W.weddingEndISO),
      details:"Join us to celebrate! "+location.href,
      location:W.venueName+", "+W.address
    });
    return "https://calendar.google.com/calendar/render?"+params.toString();
  }
  if($("#calBtn")) $("#calBtn").addEventListener("click",function(){window.open(gcalUrl(),"_blank","noopener");});

  /* ---------- Nav: scroll state, burger, active link ---------- */
  var nav=$("#nav"), links=$("#navLinks"), burger=$("#burger");
  window.addEventListener("scroll",function(){
    nav.classList.toggle("scrolled", window.scrollY>60);
    $("#fabTop").classList.toggle("show", window.scrollY>500);
    updateActive();
  },{passive:true});
  burger.addEventListener("click",function(){
    var open=links.classList.toggle("open");
    burger.setAttribute("aria-expanded",open);
    burger.setAttribute("aria-label",open?"Close menu":"Open menu");
  });
  $$("#navLinks a").forEach(function(a){a.addEventListener("click",function(){
    links.classList.remove("open");burger.setAttribute("aria-expanded","false");
  });});
  var sections=$$("main section[id]");
  function updateActive(){
    var y=window.scrollY+120,cur="";
    sections.forEach(function(sec){if(sec.offsetTop<=y)cur=sec.id;});
    $$("#navLinks a").forEach(function(a){a.classList.toggle("active",a.getAttribute("href")==="#"+cur);});
  }

  /* ---------- Scroll reveal ---------- */
  var io;
  function observeReveals(){
    if(!("IntersectionObserver" in window)){$$(".reveal").forEach(function(el){el.classList.add("in");});return;}
    if(!io) io=new IntersectionObserver(function(entries){
      entries.forEach(function(en){if(en.isIntersecting){en.target.classList.add("in");io.unobserve(en.target);}});
    },{threshold:.15});
    $$(".reveal:not(.in)").forEach(function(el){io.observe(el);});
  }

  /* ---------- RSVP validation + confetti ---------- */
  var form=$("#rsvpForm");
  if(form){
  function setErr(field,msg){var f=field.closest(".field");f.classList.toggle("invalid",!!msg);
    var e=f.querySelector(".field__err");if(e)e.textContent=msg||"";}
  form.addEventListener("submit",function(e){
    e.preventDefault();
    var ok=true;
    var name=$("#rName"),email=$("#rEmail"),phone=$("#rPhone"),guests=$("#rGuests"),attend=$("#rAttend");
    if(!name.value.trim()){setErr(name,"Please enter your name");ok=false;}else setErr(name);
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)){setErr(email,"Enter a valid email");ok=false;}else setErr(email);
    if(!/^[\d +()-]{7,}$/.test(phone.value)){setErr(phone,"Enter a valid phone number");ok=false;}else setErr(phone);
    if(!(guests.value>=1)){setErr(guests,"At least one guest");ok=false;}else setErr(guests);
    if(!attend.value){setErr(attend,"Please choose");ok=false;}else setErr(attend);
    if(!ok){var bad=form.querySelector(".field.invalid input,.field.invalid select");if(bad)bad.focus();return;}
    form.querySelectorAll("input,select,textarea,button").forEach(function(el){el.disabled=true;});
    $("#rsvpSuccess").hidden=false;
    /* In production, POST to your endpoint here. For now we celebrate. */
    launchConfetti();
  });
  }

  /* ---------- Confetti ---------- */
  var cCanvas=$("#confetti"), cx=cCanvas.getContext("2d"), parts=[], confRAF;
  function launchConfetti(){
    if(matchMedia("(prefers-reduced-motion:reduce)").matches)return;
    resizeConf();cCanvas.classList.add("on");
    var colors=["#C6A15B","#D9BE86","#1E3A2F","#2C5544","#E8C7C1","#FBF7EF"];
    parts=[];
    for(var i=0;i<160;i++)parts.push({
      x:Math.random()*cCanvas.width, y:-20-Math.random()*cCanvas.height*0.3,
      w:6+Math.random()*7, h:8+Math.random()*8,
      c:colors[i%colors.length], vy:2+Math.random()*3.5, vx:-1.5+Math.random()*3,
      rot:Math.random()*6.28, vr:-0.2+Math.random()*0.4
    });
    cancelAnimationFrame(confRAF);
    var start=Date.now();
    (function frame(){
      cx.clearRect(0,0,cCanvas.width,cCanvas.height);
      parts.forEach(function(p){p.y+=p.vy;p.x+=p.vx;p.rot+=p.vr;
        cx.save();cx.translate(p.x,p.y);cx.rotate(p.rot);cx.fillStyle=p.c;
        cx.fillRect(-p.w/2,-p.h/2,p.w,p.h);cx.restore();});
      if(Date.now()-start<4200)confRAF=requestAnimationFrame(frame);
      else{cx.clearRect(0,0,cCanvas.width,cCanvas.height);cCanvas.classList.remove("on");}
    })();
  }
  function resizeConf(){cCanvas.width=innerWidth;cCanvas.height=innerHeight;}

  /* ---------- Hero heart particles ---------- */
  var hCanvas=$("#hearts"), hx=hCanvas.getContext("2d"), hearts=[];
  function initHearts(){
    if(matchMedia("(prefers-reduced-motion:reduce)").matches)return;
    var hero=$(".hero");hCanvas.width=hero.offsetWidth;hCanvas.height=hero.offsetHeight;
    hearts=[];for(var i=0;i<26;i++)hearts.push(newHeart(true));
    (function loop(){
      hx.clearRect(0,0,hCanvas.width,hCanvas.height);
      hearts.forEach(function(h){h.y-=h.sp;h.x+=Math.sin(h.y*0.01+h.ph)*0.4;h.o=Math.max(0,h.o-0.0009);
        if(h.y<-20||h.o<=0)Object.assign(h,newHeart(false));drawHeart(h);});
      requestAnimationFrame(loop);
    })();
  }
  function newHeart(rand){return {x:Math.random()*hCanvas.width,
    y:rand?Math.random()*hCanvas.height:hCanvas.height+20,
    s:6+Math.random()*10, sp:0.3+Math.random()*0.8, o:0.15+Math.random()*0.4, ph:Math.random()*6.28};}
  function drawHeart(h){hx.save();hx.globalAlpha=h.o;hx.fillStyle="#C6A15B";hx.translate(h.x,h.y);hx.scale(h.s/16,h.s/16);
    hx.beginPath();hx.moveTo(0,4);hx.bezierCurveTo(-8,-4,-8,-12,0,-8);hx.bezierCurveTo(8,-12,8,-4,0,4);hx.closePath();hx.fill();hx.restore();}
  window.addEventListener("resize",function(){resizeConf();
    var hero=$(".hero");if(hero){hCanvas.width=hero.offsetWidth;hCanvas.height=hero.offsetHeight;}});

  /* ---------- Music toggle ---------- */
  var audio=$("#bgMusic"), mBtn=$("#musicToggle"), playing=false;
  mBtn.addEventListener("click",function(){
    if(playing){audio.pause();mBtn.classList.remove("playing");mBtn.setAttribute("aria-pressed","false");playing=false;}
    else{audio.play().then(function(){mBtn.classList.add("playing");mBtn.setAttribute("aria-pressed","true");playing=true;})
      .catch(function(){showToast("Add a track to /assets/music/theme.mp3");});}
  });

  /* ---------- Share ---------- */
  $("#fabShare").addEventListener("click",function(){
    var data={title:document.title,text:"You're invited to "+W.groomName+" & "+W.brideName+"'s wedding!",url:location.href};
    if(navigator.share){navigator.share(data).catch(function(){});}
    else{navigator.clipboard.writeText(location.href).then(function(){showToast(I18N[state.lang].share_copied);});}
  });

  /* ---------- Download as PDF (uses print dialog → Save as PDF) ---------- */
  if($("#fabPdf")) $("#fabPdf").addEventListener("click",function(){window.print();});

  /* ---------- Back to top ---------- */
  $("#fabTop").addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"});});

  /* ---------- Toast ---------- */
  var toastEl;
  function showToast(msg){
    if(!toastEl){toastEl=document.createElement("div");toastEl.className="toast";document.body.appendChild(toastEl);}
    toastEl.textContent=msg;toastEl.classList.add("show");
    clearTimeout(toastEl._t);toastEl._t=setTimeout(function(){toastEl.classList.remove("show");},2600);
  }

  /* ---------- QR codes (map + UPI) ---------- */
  function buildQRs(){
    if($("#mapQr")){
      var mapC=document.createElement("canvas");
      QRCode.toCanvas(mapC, W.mapsLink, {width:120,dark:"#1E3A2F"});
      $("#mapQr").innerHTML="";$("#mapQr").appendChild(mapC);
    }
    var upiC=document.createElement("canvas");
    var upiStr="upi://pay?pa="+W.upiId+"&pn="+encodeURIComponent(W.bankName)+"&cu=INR";
    QRCode.toCanvas(upiC, upiStr, {width:150,dark:"#1E3A2F"});
    $("#upiQr").innerHTML="";$("#upiQr").appendChild(upiC);
  }

  /* ---------- Init ---------- */
  applyConfig();
  applyTheme();
  applyLang();      // also builds events
  buildGallery();
  buildQRs();
  observeReveals();
  initHearts();
  updateActive();
})();
