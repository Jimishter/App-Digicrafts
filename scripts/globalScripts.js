$(document).ready(function () {
const slide = document.getElementById('carouselSlide');
    const dotsContainer = document.getElementById('dotsContainer');
    const totalSlides = slide.children.length;
    let currentIndex = 0;
    let intervalId;

    function createDots() {
      for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
          moveToSlide(i);
          resetAutoSlide();
        });
        dotsContainer.appendChild(dot);
      }
    }

    function moveToSlide(index) {
      slide.style.transform = `translateX(-${index * 100}%)`;
      document.querySelector('.dot.active')?.classList.remove('active');
      dotsContainer.children[index].classList.add('active');
      currentIndex = index;
    }

    function autoSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      moveToSlide(currentIndex);
    }

    function startAutoSlide() {
      intervalId = setInterval(autoSlide, 5000);
    }

    function resetAutoSlide() {
      clearInterval(intervalId);
      startAutoSlide();
    }

    // Initialize
    createDots();
    startAutoSlide();
})