document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const popupFormContainer = document.getElementById('popup-form-container');
    const closePopupButton = document.querySelector('.close-popup');
    const showPopUpButton = document.querySelector('.show-popup');

    //show popup when show popup button is clicked
    showPopUpButton.addEventListener("click", function(){
        popupFormContainer.style.display = "";
    })

    // Close popup when close button is clicked
    closePopupButton.addEventListener('click', function() {
        popupFormContainer.style.display = 'none';
    });

    // Submit form via AJAX
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const formData = new FormData(contactForm);

        // You can replace this with your own server-side script URL
        const url = 'maxencio50mbewe@gmail.com';

        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Clear form fields and show success message
                contactForm.reset();
                alert('Message sent successfully!');
            } else {
                // Show error message
                alert('Error: ' + data.message);
            }
        })
        .catch(error => {
            // Show error message
            alert('Error: ' + error.message);
        });
    });
});