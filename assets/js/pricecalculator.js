var basePrice = 25;

/* Added the getColour function as I was previously using the values to calculate the price. This meant however that the values couldnt describe the colour for the email. A switch statement allowed me to keep the colour values and still do the appropriate calulations */
function getColour() {
  var colour = $("#dropdown-calculator").val();
  switch (colour) {
    case "Blaze Red": colourIndex = 1.0;
    break;
    case "Azure Blue": colourIndex = 1.0;
    break;
    case "Jewel Green": colourIndex = 1.1;
    break;
    case "Passion Purple": colourIndex = 1.3;
    break;
    case "Vivid Pink": colourIndex = 1.3;
    break;
    case "Sunburnt Orange": colourIndex = 1.2;
    break;
    case "Calming Teal": colourIndex = 1.25;
    break;
    default: colourIndex = "Error";
  }
  return colourIndex;
  }
/*Takes the base price, squarefootage and the colour value price to calculate a total price in £, dynamically for the user.*/
function calculatePrice() {
  getColour();
  var sqFeet = $("#square-feet").val();
  var price = "£" + Math.floor((basePrice + (sqFeet * colourIndex)));
  $("#priceBox").val(price);
}
/*Uses the current date and time to generate a unique ID for the quotes.*/
function generateID() {
  if ($("#quoteBox").val() == "") {
    var id = Date.now();
    $("#quoteBox").val(id);
  }
}



/* was using .change however the selection was not dynamically updating - managed to use .on to remedy:
https://stackoverflow.com/questions/13418963/jquery-onchange-function-not-triggering-for-dynamically-created-inputs */

$("#dropdown-calculator, #square-feet").on('change', function() {
  calculatePrice();
  generateID();
});

