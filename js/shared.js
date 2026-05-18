// Background canvas
const bgCanvas = document.getElementById('bg-canvas');
const bgCtx = bgCanvas.getContext('2d');
function resizeBg() { bgCanvas.width = innerWidth; bgCanvas.height = innerHeight; }
resizeBg();
window.addEventListener('resize', resizeBg);
function drawBg() {
  const W = bgCanvas.width, H = bgCanvas.height;
  bgCtx.clearRect(0, 0, W, H);
  const g = bgCtx.createLinearGradient(0, 0, W, H);
  g.addColorStop(0, '#dde8ef'); g.addColorStop(0.4, '#e8eef3');
  g.addColorStop(0.7, '#eaece9'); g.addColorStop(1, '#dce8e2');
  bgCtx.fillStyle = g; bgCtx.fillRect(0, 0, W, H);
}
drawBg();
window.addEventListener('resize', drawBg);

// Mobile nav
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('main-nav');
if (hamburger && mainNav) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mainNav.classList.toggle('open');
  });
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mainNav.classList.remove('open');
    });
  });
}

// Custom cursor
const dot  = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');
if (dot && ring) {
  let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;
  document.addEventListener('mousemove', e => {
    mouseX = e.clientX; mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top  = mouseY + 'px';
  });
  (function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = ringX + 'px';
    ring.style.top  = ringY + 'px';
    requestAnimationFrame(animateRing);
  })();
  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
  document.addEventListener('mousedown', () => document.body.classList.add('cursor-click'));
  document.addEventListener('mouseup',   () => document.body.classList.remove('cursor-click'));
}
