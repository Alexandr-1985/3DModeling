(()=>{"use strict";(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),o=t.querySelectorAll("ul>li>a"),l=document.querySelector("a[href='#service-block']");console.dir(l.getAttribute),console.log(l.getAttribute("href"));const r=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",(()=>{r()})),n.addEventListener("click",(e=>{e.preventDefault(),r()}));const c=e=>{let t;t=e.getAttribute("href"),document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"})};l.addEventListener("click",(e=>{e.preventDefault(),c(l)})),o.forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault(),r(),c(e)}))}))})(),(e=>{console.log(e);const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds");let l=e=>e<10?"0"+e:e;const r=setInterval((()=>{let c=(()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,hours:Math.floor(t/60/60),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}})();t.textContent=l(c.hours),n.textContent=l(c.minutes),o.textContent=l(c.seconds),c.timeRemaining<=0&&(clearInterval(r),t.textContent="00",t.style.color="red",n.textContent="00",n.style.color="red",o.textContent="00",o.style.color="red")}),1e3)})("25 december 2021"),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=e.querySelector(".popup-close");let o,l=0;t.forEach((e=>{e.addEventListener("click",(()=>{r()}))})),n.addEventListener("click",(()=>{e.style.display="none"}));const r=()=>{(e.style.display="none")&&(e.style.display="block",e.style.transform="translateX(0)",document.documentElement.offsetWidth>=768&&c())},c=()=>{o=requestAnimationFrame(c),l+=5,l<=100?e.style.transform=`translateX(${100-l}%)`:(cancelAnimationFrame(o),e.style.display="block",l=0)}})()})();