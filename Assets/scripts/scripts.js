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


  const testimonialSlides = document.getElementById("testimonial-slides");
  let index = 0;

  setInterval(() => {
    index = (index + 1) % 2; // Adjust based on the number of testimonials
    testimonialSlides.style.transform = `translateX(-${index * 100}%)`;
  }, 3000); // Change slide every 3 seconds


  // JavaScript function to show the corresponding event image
  function showEventImage(eventId) {
    // Hide all images
    document.querySelectorAll("#event-image img").forEach((img) => {
      img.classList.add("hidden");
    });
    // Show the selected image
    const selectedImage = document.getElementById(eventId);
    if (selectedImage) {
      selectedImage.classList.remove("hidden");
    }
  }

  // Initialize with the first image visible
  showEventImage('event1');


  function toggleMenu() {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
  }


  window.addEventListener("scroll", function () {
    let navbar = document.getElementById("navbar");
  
    if (window.scrollY > 50) {
      navbar.classList.add("bg-white", "shadow-lg");
      navbar.classList.remove("bg-transparent");
      navbar.querySelectorAll("a").forEach(link => {
        link.classList.add("text-black");
        link.classList.remove("text-white");
      });
    } else {
      navbar.classList.add("bg-transparent");
      navbar.classList.remove("bg-white", "shadow-lg");
      navbar.querySelectorAll("a").forEach(link => {
        link.classList.add("text-white");
        link.classList.remove("text-black");
      });
    }
  });
  