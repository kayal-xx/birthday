const FIRST_PASSWORD = "0812";
const SECOND_PASSWORD = "1225";

function createFloatingHearts() {
  const container = document.getElementById("hearts");
  if (!container) return;
  for (let i = 0; i < 22; i++) {
    const heart = document.createElement("span");
    heart.className = "float-heart";
    heart.textContent = Math.random() > .35 ? "♥" : "♡";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = `${10 + Math.random() * 18}px`;
    heart.style.animationDuration = `${8 + Math.random() * 9}s`;
    heart.style.animationDelay = `${Math.random() * 8}s`;
    container.appendChild(heart);
  }
}
function createSparkles() {
  const container = document.getElementById("sparkles");
  if (!container) return;
  for (let i = 0; i < 34; i++) {
    const spark = document.createElement("span");
    spark.className = "spark";
    spark.style.left = `${Math.random() * 100}%`;
    spark.style.top = `${Math.random() * 100}%`;
    spark.style.animationDelay = `${Math.random() * 2}s`;
    spark.style.animationDuration = `${1.5 + Math.random() * 2}s`;
    container.appendChild(spark);
  }
}
function setupReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
    });
  }, {threshold:.12});
  items.forEach(item => observer.observe(item));
}
function setupCinematicIntro() {
  const begin = document.getElementById("beginBtn");
  const intro = document.getElementById("introScene");
  const secret = document.getElementById("secretScene");
  const left = document.querySelector(".cinema-curtain.left");
  const right = document.querySelector(".cinema-curtain.right");
  if (!begin || !intro || !secret) return;
  begin.addEventListener("click", () => {
    left?.classList.add("open"); right?.classList.add("open");
    intro.style.transition = "opacity .8s ease, transform .8s ease";
    intro.style.opacity = "0"; intro.style.transform = "scale(1.04)";
    setTimeout(() => {
      intro.classList.add("hidden");
      secret.classList.remove("hidden");
      secret.scrollIntoView({behavior:"smooth", block:"center"});
      typeText();
    }, 850);
  });
}

function typeText() {
  const target = document.getElementById("typingText");
  if (!target) return;
  const text = "Before your surprise begins... there is one little date only we should know.";
  let i = 0;
  const type = () => {
    if (i <= text.length) { target.textContent = text.slice(0,i++); setTimeout(type, 34); }
  };
  type();
}
function setupFirstGate() {
  const input = document.getElementById("loveDate"), unlock = document.getElementById("unlockBtn");
  const hintBtn = document.getElementById("hintBtn"), hint = document.getElementById("hint"), error = document.getElementById("error");
  if (!input || !unlock) return;
  hintBtn?.addEventListener("click", () => hint?.classList.toggle("hidden"));
  const check = () => {
    if (input.value === FIRST_PASSWORD) {
      error.textContent = "You remembered ❤️ Opening your surprise...";
      error.style.color = "#9ef0b9";
      setTimeout(() => location.href = "memories.html", 750);
    } else {
      error.textContent = "Our love isn't complete without this date 😜❤️";
      input.animate([{transform:"translateX(0)"},{transform:"translateX(-7px)"},{transform:"translateX(7px)"},{transform:"translateX(0)"}],{duration:280});
    }
  };
  unlock.addEventListener("click", check);
  input.addEventListener("keydown", e => {if(e.key==="Enter")check()});
}
function setupMemories() {
  const button = document.getElementById("wishBtn");
  if (button) button.addEventListener("click", () => location.href="wish.html");
}
function typeWishLetter() {
  const target = document.getElementById("wishTyping");
  if (!target || target.dataset.started) return;
  target.dataset.started = "1";
  const text = `Happy Birthday to the person who makes my life a little more beautiful every day. ❤️

You are not just my best friend, but someone very special to me.

I hope this birthday brings you everything your heart wishes for, and I hope every new memory we make becomes something you can smile about forever.

Thank you for being part of my life. Today, tomorrow, and in all the little moments in between.`;
  let i = 0;
  const write = () => {
    if (i <= text.length) {
      target.textContent = text.slice(0, i++);
      setTimeout(write, text[i-1] === "\n" ? 420 : 28);
    }
  };
  write();
}

function setupFinalGate() {
  const input=document.getElementById("licenceDate"), button=document.getElementById("finalUnlockBtn"), gate=document.getElementById("secretGate"), content=document.getElementById("birthdayContent"), error=document.getElementById("finalError");
  if(!input||!button)return;
  const unlock=()=>{
    if(input.value===SECOND_PASSWORD){
      gate.classList.add("hidden"); content.classList.remove("hidden");
      launchConfetti(); burstHearts(); startMusic();
      setTimeout(typeWishLetter, 500);
      window.scrollTo({top:0,behavior:"smooth"});
    }else{
      error.textContent="Hmm... that special date is not right yet ❤️";
      input.animate([{transform:"translateX(0)"},{transform:"translateX(-7px)"},{transform:"translateX(7px)"},{transform:"translateX(0)"}],{duration:280});
    }
  };
  button.addEventListener("click",unlock); input.addEventListener("keydown",e=>{if(e.key==="Enter")unlock()});
}
function burstHearts(){
  const container=document.getElementById("hearts"); if(!container)return;
  for(let i=0;i<35;i++){const h=document.createElement("span");h.className="float-heart";h.textContent="♥";h.style.left=`${35+Math.random()*30}%`;h.style.bottom=`${30+Math.random()*20}%`;h.style.fontSize=`${12+Math.random()*24}px`;h.style.animationDuration=`${3+Math.random()*3}s`;container.appendChild(h);setTimeout(()=>h.remove(),6500)}
}
function launchConfetti(){
  const canvas=document.getElementById("confetti"); if(!canvas)return;
  const ctx=canvas.getContext("2d");let pieces=[];const resize=()=>{canvas.width=innerWidth;canvas.height=innerHeight};resize();addEventListener("resize",resize);
  for(let i=0;i<190;i++)pieces.push({x:Math.random()*canvas.width,y:Math.random()*-canvas.height,w:5+Math.random()*7,h:8+Math.random()*10,vx:(Math.random()-.5)*2.5,vy:2+Math.random()*4,rot:Math.random()*6.28,vr:(Math.random()-.5)*.15,color:["#ff5c8a","#ffd166","#c084fc","#7dd3fc","#fff1f5"][Math.floor(Math.random()*5)]});
  function frame(){ctx.clearRect(0,0,canvas.width,canvas.height);pieces.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.rot+=p.vr;if(p.y>canvas.height+20){p.y=-20;p.x=Math.random()*canvas.width}ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.rot);ctx.fillStyle=p.color;ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h);ctx.restore()});requestAnimationFrame(frame)}frame();
}
function startMusic(){
  const audio=document.getElementById("bgMusic"), toggle=document.getElementById("musicToggle"); if(!audio)return;
  audio.volume=.28; audio.play().then(()=>{if(toggle)toggle.classList.add("playing")}).catch(()=>{});
}
function setupMusic() {

    const audio = document.getElementById("bgMusic");
    const toggle = document.getElementById("musicToggle");

    if (!audio) return;

    audio.volume = 0.28;

    audio.play()
        .then(() => {
            if (toggle) {
                toggle.classList.add("playing");
            }
        })
        .catch(() => {
            console.log("Autoplay blocked by browser.");
        });

    if (toggle) {

        toggle.addEventListener("click", () => {

            if (audio.paused) {

                audio.play();

                toggle.classList.add("playing");

            } else {

                audio.pause();

                toggle.classList.remove("playing");

            }

        });

    }
}
document.addEventListener("DOMContentLoaded", () => {

    createFloatingHearts();
    createSparkles();
    setupReveal();
    setupFirstGate();
    setupMemories();
    setupFinalGate();
    setupMusic();
    setupCinematicIntro();

});