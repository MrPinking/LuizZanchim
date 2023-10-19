document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slider li input[type="radio"]');
    const slider = document.querySelector('.slider');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let currentIndex = 0;

   
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].checked = true;
    }

    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        slides[currentIndex].checked = true;
    }

    
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    slides.forEach((slide, index) => {
        slide.addEventListener('change', () => {
            currentIndex = index;
            slider.style.transform = `translateX(-${index * 100}%)`;
        });
    });
});
