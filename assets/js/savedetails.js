
/*Stores the values in the quote box and sets them as a local storage entity until deleted.*/
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

/*Asks the user for a response as to whether they want to proceed. On yes, any local storage key:value pairs are removed.*/
function resetDetails() {
  var response;
  var confirmation = confirm("Are you sure? All details will be lost.");
  if (confirmation == true) {
    localStorage.clear();

    $("#fname").val("");
    $("#lname").val("");
    $("#emailaddress").val("");
    $("#dropdown-calculator").val("");
    $("#square-feet").val("");
    $("#priceBox").val("");
    $("#quoteBox").val("");

    console.log("Local Storage Cleared");
    alert("Your details have been reset.");
  }
}

/*This function grabs existing stored values and loads them into the appropriate form boxes on page load - for return customers. */
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