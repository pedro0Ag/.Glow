const sliderWrapper = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function updateSlider() {
  sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevBtn.addEventListener('click', () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
  updateSlider();
});

nextBtn.addEventListener('click', () => {
  currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
  updateSlider();
});
