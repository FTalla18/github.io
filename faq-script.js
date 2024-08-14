document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('h2');
        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
});