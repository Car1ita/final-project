// Add JavaScript below
let currentIndex = 0;
const slides = document.querySelectorAll('#slideshow .slide');

function showNextSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
}
slides[currentIndex].classList.add('active');


setInterval(showNextSlide, 3000); 
showNextSlide(); 

