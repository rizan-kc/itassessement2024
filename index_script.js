let current_slide = 0;
const slides = document.querySelectorAll('.pics');

function slideshow(index) {
  slides.forEach((pics, i) => {
    pics.style.display = i === index ? 'block' : 'none';
  });
}

function slidenext() {
  current_slide = (current_slide + 1) % slides.length;
  slideshow(current_slide);
}

function slidepre() {
  current_slide = (current_slide - 1 + slides.length) % slides.length;
  slideshow(current_slide);
}

slideshow(current_slide);