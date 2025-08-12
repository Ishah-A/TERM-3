window.onload = function () {
    let slideIndex = 1;
    showSlides(slideIndex);

    // Make these functions available to your HTML buttons
    window.plusDivs = function (n) {
        showSlides(slideIndex += n);
    };

    window.currentDiv = function (n) {
        showSlides(slideIndex = n);
    };

    function showSlides(n) {
        const slides = document.getElementsByClassName("mySlides");
        const dots = document.getElementsByClassName("slide-dot");

        // Wrap around if out of range
        if (n > slides.length) { slideIndex = 1; }
        if (n < 1) { slideIndex = slides.length; }

        // Hide all slides
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        // Remove 'active' class from all dots
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove("active");
        }

        // Show the correct slide and activate the corresponding dot
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].classList.add("active");
    }
};


const images = document.querySelectorAll('.fade-image');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible'); // fade out again when leaving view
    }
  });
}, {
  threshold: 0.1 // Trigger when 10% of the image is visible
});

images.forEach(img => observer.observe(img));



//  FOR THE FADE ON THE NAVIGATION BAR  //
let lastScrollY = window.scrollY;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    // Scrolling down → hide nav
    nav.classList.add('hide');
  } else {
    // Scrolling up → show nav
    nav.classList.remove('hide');
  }
  lastScrollY = window.scrollY;
});
