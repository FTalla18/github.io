document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Here you would typically send the form data to a server
        // For now, we'll just log it to the console
        console.log('Form submitted');
        console.log('Name:', document.getElementById('name').value);
        console.log('Email:', document.getElementById('email').value);
        console.log('Subject:', document.getElementById('subject').value);
        console.log('Message:', document.getElementById('message').value);

        alert('Thank you for your message. We will get back to you soon!');
        contactForm.reset();
    });
});