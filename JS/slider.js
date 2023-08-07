const slides = document.querySelectorAll('.slide');
const sliderMenuItems = document.querySelectorAll('.slider-menu-item');

let currentSlide = 0;

// Ocultar todas las diapositivas excepto la primera
for (let i = 1; i < slides.length; i++) {
  slides[i].style.opacity = 0;
}

function changeSlide(index) {
  if (index === currentSlide) {
    return;
  }

  slides[currentSlide].style.opacity = 0;
  sliderMenuItems[currentSlide].classList.remove('active');

  currentSlide = index;

  slides[currentSlide].style.opacity = 1;
  sliderMenuItems[currentSlide].classList.add('active');
}

// Automáticamente cambiar las diapositivas cada 5 segundos (opcional)
setInterval(() => {
  let nextSlide = currentSlide + 1;
  if (nextSlide === slides.length) {
    nextSlide = 0;
  }
  changeSlide(nextSlide);
}, 5000);