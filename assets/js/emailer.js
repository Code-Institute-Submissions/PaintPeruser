/*This JS controls the link between the site and EmailJS. It pulls the names of the form boxes and passes them as values to the emailjs template. The template is controlled on the EmailJs website.
The final code logs to the console whether the email has successfully been sent, and informs the user as such. */

function validateForm() {
  var fname = document.forms["email-form"].fname.value;
  var lname = document.forms["email-form"].lname.value;
  var email = document.forms["email-form"].emailaddress.value;
  var colour = document.forms["email-form"].choose_colour_two.value;
  var sqFt = document.forms["email-form"].square_feet.value;
  if (fname == "") {
    alert("First Name must be filled out");
    return false;
  }
  else if (lname == "") {
    alert("Last Name must be filled out");
    return false;
  }
  else if (email == "") {
    alert("Email Address must be filled out");
    return false;
  }
  else if (colour == "") {
    alert("Please choose a colour");
    return false;
  }
  else if (sqFt == "") {
    alert("Please choose your paint quantity");
    return false;
  }
  else {
    return true;
  }
} 

function sendMail(contactForm) {
    emailjs.send("service_26ufq5f", "template_w42ccsw", {
        "first_name": contactForm.fname.value,
        "emailaddress": contactForm.emailaddress.value,
        "paintcolour": contactForm.choose_colour_two.value,
        "quantity": contactForm.square_feet.value,
        "price": contactForm.price.value,
        "quote": contactForm.quote.value

    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            alert("Email sent successfully!");
        },
        function(error) {
            console.log("FAILED", error);
            alert("Email was unsucessful, we apologise but please try again.");
        });
        return false;
}