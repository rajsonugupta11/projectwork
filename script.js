// Sticky Header
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

// Slider
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.slider-dot');
let currentSlide = 0;
let slideInterval;

function clearSlideAnimations() {
  slides.forEach(slide => {
    slide.classList.remove('fade-zoom-in');
    const img = slide.querySelector('img');
    if (img) img.style.animation = '';
  });
  dots.forEach(dot => dot.classList.remove('active'));
}

function animateSlide(index) {
  clearSlideAnimations();
  const slide = slides[index];
  const img = slide.querySelector('img');
  slide.classList.add('active');
  dots[index].classList.add('active');

  // Add fadeZoomIn animation to slide
  slide.style.animation = 'fadeZoomIn 1s ease forwards';

  // Add slow zoom animation to image
  if (img) {
    img.style.animation = 'slowZoom 8s ease forwards';
  }
}

function showSlide(index) {
  currentSlide = index;
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
  animateSlide(index);
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

dots.forEach((dot, idx) => {
  dot.addEventListener('click', () => {
    clearInterval(slideInterval);
    showSlide(idx);
    slideInterval = setInterval(nextSlide, 8000);
  });
});

slideInterval = setInterval(nextSlide, 8000);
showSlide(currentSlide);

// Menu Toggle for Mobile
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Scroll-triggered animations
const animElements = document.querySelectorAll(
  'section, .hero-content, .about-text, .service-card, .project-card, footer'
);

function animateOnScroll() {
  animElements.forEach(el => {
    const elTop = el.getBoundingClientRect().top;
    const elBottom = el.getBoundingClientRect().bottom;
    if (elTop < window.innerHeight - 100 && elBottom > 0) {
      el.classList.add('scrolled');
      // Animate hero content text separately with stagger
      if (el.classList.contains('hero-content')) {
        const h1 = el.querySelector('h1');
        const p = el.querySelector('p');
        const btn = el.querySelector('.hero-btn');
        if (h1) {
          h1.style.animation = 'fadeInUp 1s ease forwards';
          h1.style.animationDelay = '0.2s';
          h1.style.opacity = '1';
          h1.style.transform = 'translateY(0)';
        }
        if (p) {
          p.style.animation = 'fadeInUp 1s ease forwards';
          p.style.animationDelay = '0.5s';
          p.style.opacity = '1';
          p.style.transform = 'translateY(0)';
        }
        if (btn) {
          btn.style.animation = 'bounceIn 1s ease forwards';
          btn.style.animationDelay = '0.8s';
          btn.style.opacity = '1';
          btn.style.transform = 'translateY(0)';
        }
      }
    } else {
      el.classList.remove('scrolled');
      // Reset hero content animations on scroll out
      if (el.classList.contains('hero-content')) {
        const h1 = el.querySelector('h1');
        const p = el.querySelector('p');
        const btn = el.querySelector('.hero-btn');
        if (h1) {
          h1.style.animation = '';
          h1.style.opacity = '0';
          h1.style.transform = 'translateY(30px)';
        }
        if (p) {
          p.style.animation = '';
          p.style.opacity = '0';
          p.style.transform = 'translateY(30px)';
        }
        if (btn) {
          btn.style.animation = '';
          btn.style.opacity = '0';
          btn.style.transform = 'translateY(30px)';
        }
      }
    }
  });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Rain Effect
const canvas = document.getElementById('rain-canvas');
const ctx = canvas.getContext('2d');
let w = (canvas.width = window.innerWidth);
let h = (canvas.height = window.innerHeight);
let drops = [];

function initRain() {
  drops = [];
  for (let i = 0; i < 500; i++) {
    drops.push({
      x: Math.random() * w,
      y: Math.random() * h,
      length: Math.random() * 20 + 10,
      xs: -2 + Math.random() * 4,
      ys: Math.random() * 10 + 10,
      opacity: Math.random() * 0.5 + 0.3,
    });
  }
}

function drawRain() {
  ctx.clearRect(0, 0, w, h);
  ctx.strokeStyle = 'rgba(174,194,224,0.5)';
  ctx.lineWidth = 1;
  ctx.lineCap = 'round';
  for (let i = 0; i < drops.length; i++) {
    let d = drops[i];
    ctx.beginPath();
    ctx.moveTo(d.x, d.y);
    ctx.lineTo(d.x + d.xs, d.y + d.ys);
    ctx.strokeStyle = `rgba(174,194,224,${d.opacity})`;
    ctx.stroke();
    d.x += d.xs;
    d.y += d.ys;
    if (d.x > w || d.y > h) {
      d.x = Math.random() * w;
      d.y = -20;
    }
  }
  requestAnimationFrame(drawRain);
}

window.addEventListener('resize', () => {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  initRain();
});

initRain();
drawRain();
