

function saveDetails() {
  var firstname = $("#fname").val();
  var lastname = $("#lname").val();
  var emailadd = $("#emailaddress").val();
  var colour = $("#dropdown-calculator").val();
  var sqFeet = $("#square-feet").val();
  var price = $("#priceBox").val();
  var quoteID = $("#quoteBox").val();

  localStorage.setItem("firstname", firstname);
  localStorage.setItem("lastname", lastname);
  localStorage.setItem("emailaddress", emailadd);
  localStorage.setItem("colourchoice", colour);
  localStorage.setItem("sqFeet", sqFeet);
  localStorage.setItem("price", price);
  localStorage.setItem("quoteID", quoteID);

  console.log("Details saved");
  alert("Your choices have been saved.");
}

$(document).ready(function() {
  var firstname = localStorage.getItem("firstname");
  var lastname = localStorage.getItem("lastname"); 
  var emailadd = localStorage.getItem("emailaddress");
  var colour = localStorage.getItem("colourchoice");
  var sqFeet = localStorage.getItem("sqFeet");
  var price = localStorage.getItem("price");
  var quoteID = localStorage.getItem("quoteID");

  $("#fname").val(firstname);
  $("#lname").val(lastname);
  $("#emailaddress").val(emailadd);
  $("#dropdown-calculator").val(colour);
  $("#square-feet").val(sqFeet);
  $("#priceBox").val(price);
  $("#quoteBox").val(quoteID);
  
});