document.addEventListener('DOMContentLoaded', function() {
    // Get a reference to the contact form
    const contactForm = document.getElementById('contactForm');

    // Add a submit event listener to the form
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get user input from the form
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // You can add your own code here to send the form data to your server or perform other actions
        // For now, let's display the form data in an alert
        alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

        // Clear the form fields
        contactForm.reset();
    });
});
