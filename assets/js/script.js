
/*Main code for the main image functionality - removes default hue amongst any others on the main image and adds the class of the colour that is chosen. */
$(document).ready(function() {
    $("#blaze-red-btn").click(function(){
        $("#main-image").removeClass("passion-purple jewel-green azure-blue calming-teal sunburnt-orange vivid-pink default-hue").addClass("blaze-red");
    });
    $("#azure-blue-btn").click(function(){
        $("#main-image").removeClass("passion-purple jewel-green blaze-red calming-teal sunburnt-orange vivid-pink default-hue").addClass("azure-blue");
    });
    $("#jewel-green-btn").click(function(){
        $("#main-image").removeClass("passion-purple blaze-red azure-blue calming-teal sunburnt-orange vivid-pink default-hue").addClass("jewel-green");
    });
    $("#passion-purple-btn").click(function(){
        $("#main-image").removeClass("blaze-red jewel-green azure-blue calming-teal sunburnt-orange vivid-pink default-hue").addClass("passion-purple");
    });
    $("#vivid-pink-btn").click(function(){
        $("#main-image").removeClass("passion-purple jewel-green azure-blue calming-teal sunburnt-orange blaze-red default-hue").addClass("vivid-pink");
    });
    $("#calming-teal-btn").click(function(){
        $("#main-image").removeClass("passion-purple jewel-green azure-blue blaze-red sunburnt-orange vivid-pink default-hue").addClass("calming-teal");
    });
    $("#sunburnt-orange-btn").click(function(){
        $("#main-image").removeClass("passion-purple jewel-green azure-blue calming-teal blaze-red vivid-pink default-hue").addClass("sunburnt-orange");
    });
});

/*Controls the button under the main image which stores the exisiting colour choice and pushes it to the dropdown in the quote box. There is also a calculate price call here too so that the user does not make the mistake that all the colours cost the same. */
$('#pick-me-btn').on('click', function() {
  var current_choice = $("#main-image").attr("class");
  switch (current_choice) {
  case "blaze-red": current_choice = "Blaze Red";
  break;
  case "azure-blue": current_choice = "Azure Blue";
  break;
  case "jewel-green": current_choice = "Jewel Green";
  break;
  case "passion-purple": current_choice = "Passion Purple";
  break;
  case "vivid-pink": current_choice = "Vivid Pink";
  break;
  case "sunburnt-orange": current_choice = "Sunburnt Orange";
  break;
  case "calming-teal": current_choice = "Calming Teal";
  break;
  default: current_choice = "Error";
  }
  $('#dropdown-calculator').val(current_choice);
  console.log(current_choice);
  calculatePrice();
});

