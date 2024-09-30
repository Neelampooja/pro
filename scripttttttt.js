let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Initialize the slider
showSlide(currentSlide);

// Optional: Allow cursor hovering to change slides
document.querySelector('.slider').addEventListener('mouseenter', () => {
});

document.querySelector('.slider').addEventListener('mouseleave', () => {
    document.removeEventListener('mousemove', onMouseMove);
});

function onMouseMove(event) {
    const { clientX, target } = event;
    const rect = target.getBoundingClientRect();
    
    if (clientX < rect.left + rect.width / 2) {
        changeSlide(-1);
    } else {
        changeSlide(1);
    }
}
