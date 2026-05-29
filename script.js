emailjs.init("bCTL83qfM7pkPKk6E");

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    emailjs.send("service_esqvaya", "template_pvd7prs", {
        name: document.querySelector('input[type="text"]').value,
        email: document.querySelector('input[type="email"]').value,
        message: document.querySelector('textarea').value
    })

    .then(function() {

        alert("Message Sent Successfully!");

        form.reset();

    })

    .catch(function(error) {

        alert("Failed to Send Message");

        console.log(error);

    });

});