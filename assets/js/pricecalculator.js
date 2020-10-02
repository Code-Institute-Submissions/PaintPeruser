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

function calculatePrice() {
  getColour();
  var sqFeet = $("#square-feet").val();
  var price = "£" + Math.floor((basePrice + (sqFeet * colourIndex)));
  $("#priceBox").val(price);
}

function generateID() {
  if ($("#quoteBox").val() == "") {
    var id = Date.now()
    $("#quoteBox").val(id);
  };
};

/* Do we need to generate a new ID when the quote is sent?
Maybe once the email is sent, the local storage for the quote ID is removed? That however would remove their saved details... Maybe leave the quote switching all the time and we only save the ones that are emailed through?? */


/* was using .change however the selection was not dynamically updating - attempting to use .on to remedy:
https://stackoverflow.com/questions/13418963/jquery-onchange-function-not-triggering-for-dynamically-created-inputs */

$("#dropdown-calculator, #square-feet").on('change', function() {
  calculatePrice();
  generateID();
});

