/*function toggleMenu() {
    var navbar = document.getElementById('navbar');
    if (navbar.style.display === 'block') {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'block';
    }
}*/

document.addEventListener('DOMContentLoaded', function() {
    // Carousel functionality
    const carousel = document.querySelector('.carousel-container');
    let isDown = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => {
        isDown = false;
    });

    carousel.addEventListener('mouseup', () => {
        isDown = false;
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        carousel.scrollLeft = scrollLeft - walk;
    });

    // Image slider functionality
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const slides = carousel.children;
    let index = 0;

    function showSlide(n) {
        if (n >= slides.length) {
            index = 0;
        } else if (n < 0) {
            index = slides.length - 1;
        } else {
            index = n;
        }
        const offset = -index * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        showSlide(index + 1);
    }

    function prevSlide() {
        showSlide(index - 1);
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    showSlide(index); // Initial display

    // Form submission handling
    const form = document.getElementById('reservation-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Form submitted');
        console.log('Pickup date:', document.getElementById('pickup-date').value);
        console.log('Return date:', document.getElementById('return-date').value);
        console.log('Car type:', document.getElementById('car-type').value);
        alert('Reservation submitted! We will contact you shortly.');
    });
});

