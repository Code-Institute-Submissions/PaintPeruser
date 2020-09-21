function sendMail(contactForm) {
    emailjs.send("service_26ufq5f", "template_w42ccsw", {
        "first_name": contactForm.fname.value,
        "emailaddress": contactForm.emailaddress.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        });
        return false;
}