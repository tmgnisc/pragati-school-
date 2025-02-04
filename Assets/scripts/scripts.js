const carousel = document.getElementById('carousel-slides');
  const slides = document.querySelectorAll('#carousel-slides > div');
  const prevButton = document.getElementById('prev-button');
  const nextButton = document.getElementById('next-button');
  let currentIndex = 0;

  const updateCarousel = () => {
    const width = slides[0].clientWidth;
    carousel.style.transform = `translateX(-${currentIndex * width}px)`;
  };


  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  });


  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  });


  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  }, 5000); 