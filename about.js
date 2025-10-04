// ScrollReveal animations
ScrollReveal().reveal('.reveal-top', {
  origin: 'top',
  distance: '50px',
  duration: 1000,
  easing: 'ease-in-out',
  reset: true
});

ScrollReveal().reveal('.reveal-left', {
  origin: 'left',
  distance: '60px',
  duration: 1000,
  reset: true
});

ScrollReveal().reveal('.reveal-zoom', {
  scale: 0.85,
  duration: 1000,
  easing: 'ease-in-out',
  reset: true
});

// Lightbox Logic
const cards = document.querySelectorAll('.card img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close');

cards.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.classList.remove('hidden');
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.classList.add('hidden');
  lightboxImg.src = "";
});

lightbox.addEventListener('click', (e) => {
  if (e.target !== lightboxImg) {
    lightbox.classList.add('hidden');
    lightboxImg.src = "";
  }
});
ScrollReveal().reveal('.reveal-top', {
  origin: 'top',
  distance: '50px',
  duration: 1000,
  easing: 'ease-in-out',
  reset: false // ✅ Change this
});
