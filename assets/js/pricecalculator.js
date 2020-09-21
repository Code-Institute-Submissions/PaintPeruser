var basePrice = 25;

function calculatePrice() {
  /*var price = */
  var colour = $("#dropdown-calculator").val();
  var sqFeet = $("#square-feet").val();
  var price = "£" + (basePrice + (sqFeet * colour));
  $("#priceBox").val(price);
}

/* was using .change however the selection was not dynamically updating - attempting to use .on to remedy:
https://stackoverflow.com/questions/13418963/jquery-onchange-function-not-triggering-for-dynamically-created-inputs */

$("#dropdown-calculator, #square-feet").on('change', function() {
  calculatePrice();
});

