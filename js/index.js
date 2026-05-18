// Slide 1 particle canvas
(function () {
  const c = document.getElementById('slideCanvas1');
  if (!c) return;
  const ctx = c.getContext('2d');
  let pts = [];
  function init() {
    c.width = c.offsetWidth; c.height = c.offsetHeight; pts = [];
    for (let i = 0; i < 55; i++) pts.push({ x: Math.random() * c.width, y: Math.random() * c.height, r: Math.random() * 1.5 + 0.3, vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.2, a: Math.random() });
  }
  function draw() {
    ctx.clearRect(0, 0, c.width, c.height);
    pts.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.a += 0.008;
      if (p.x < 0 || p.x > c.width) p.vx *= -1;
      if (p.y < 0 || p.y > c.height) p.vy *= -1;
      const alpha = 0.15 + Math.abs(Math.sin(p.a)) * 0.45;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(197,160,89,${alpha})`; ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  init(); draw(); window.addEventListener('resize', init);
})();

// Hero billboard slider
(function () {
  var cur = 0, total = 5;
  var inner = document.getElementById('bbHeroInner');
  var dots = document.querySelectorAll('.bb-sdot');
  window.bbHeroGo = function (n) {
    cur = (n + total) % total;
    inner.style.transform = 'translateX(-' + (cur * 100) + '%)';
    dots.forEach(function (d, i) { d.classList.toggle('on', i === cur); });
  };
  setInterval(function () { bbHeroGo(cur + 1); }, 4500);
})();

// Splash screen
function dismissSplash() {
  setTimeout(() => {
    const s = document.getElementById('splash');
    if (s) s.classList.add('hidden');
    document.body.classList.remove('no-scroll');
  }, 1600);
}
if (document.readyState === 'complete') { dismissSplash(); }
else {
  window.addEventListener('load', dismissSplash);
  setTimeout(() => {
    const s = document.getElementById('splash');
    if (s) s.classList.add('hidden');
    document.body.classList.remove('no-scroll');
  }, 5000);
}

// Portfolio photo/video toggle
function showPhoto(btn) {
  const card = btn.closest('.port-item');
  card.classList.remove('playing');
  card.querySelector('video').pause();
  btn.classList.add('active');
  btn.nextElementSibling.classList.remove('active');
}
function showVideo(btn) {
  const card = btn.closest('.port-item');
  card.classList.add('playing');
  card.querySelector('video').play();
  btn.classList.add('active');
  btn.previousElementSibling.classList.remove('active');
}

// FAQ accordion
function toggleFaq(btn) {
  const item = btn.parentElement;
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

// Billboard carousel
(function () {
  var track = document.getElementById('bbTrack2');
  if (!track) return;
  var dots = document.querySelectorAll('#bbDots2 .bb-dot');
  var total = dots.length, current = 0, autoTimer;
  function goTo(n) {
    current = (n + total) % total;
    track.style.transform = 'translateX(-' + (current * 100) + '%)';
    dots.forEach(function (d, i) { d.classList.toggle('active', i === current); });
  }
  document.getElementById('bbPrev2').addEventListener('click', function () { clearInterval(autoTimer); goTo(current - 1); startAuto(); });
  document.getElementById('bbNext2').addEventListener('click', function () { clearInterval(autoTimer); goTo(current + 1); startAuto(); });
  dots.forEach(function (d, i) { d.addEventListener('click', function () { clearInterval(autoTimer); goTo(i); startAuto(); }); });
  function startAuto() { autoTimer = setInterval(function () { goTo(current + 1); }, 3500); }
  startAuto();
})();
