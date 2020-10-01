/*$("#dropdown").change(function() {
  $("select option:selected").each
}) */

/*$(document).ready(function() {

  var $doc = $(this);
  var azure_blue = $doc.find(".azure-blue");
  var passion_purple =  $doc.find(".passion-purple");
  var blaze_red = $doc.find(".blaze-red");

  $("#dropdown").change(function() {
    var target = $(this).val();
    if (target == "blaze-red") .addClass("blaze-red");
    if (target == "azure-blue") .addClass("azure-blue");
    if (target == "passion_purple").addClass("passion-purple");

  });
});
*/

$(document).ready(function() {
    $("#blaze-red").click(function(){
        $("#main-image").removeClass("passion-purple jewel-green azure-blue calming-teal sunburnt-orange vivid-pink default-hue").addClass("blaze-red");
    });
    $("#azure-blue").click(function(){
        $("#main-image").removeClass("passion-purple jewel-green blaze-red calming-teal sunburnt-orange vivid-pink default-hue").addClass("azure-blue");
    });
    $("#jewel-green").click(function(){
        $("#main-image").removeClass("passion-purple blaze-red azure-blue calming-teal sunburnt-orange vivid-pink default-hue").addClass("jewel-green");
    });
    $("#passion-purple").click(function(){
        $("#main-image").removeClass("blaze-red jewel-green azure-blue calming-teal sunburnt-orange vivid-pink default-hue").addClass("passion-purple");
    });
    $("#vivid-pink").click(function(){
        $("#main-image").removeClass("passion-purple jewel-green azure-blue calming-teal sunburnt-orange blaze-red default-hue").addClass("vivid-pink");
    });
    $("#calming-teal").click(function(){
        $("#main-image").removeClass("passion-purple jewel-green azure-blue blaze-red sunburnt-orange vivid-pink default-hue").addClass("calming-teal");
    });
    $("#sunburnt-orange").click(function(){
        $("#main-image").removeClass("passion-purple jewel-green azure-blue calming-teal blaze-red vivid-pink default-hue").addClass("sunburnt-orange");
    });
});


/* Experiment with if statements to remove the classes

https://forum.jquery.com/topic/combination-of-addclass-hasclass-and-removeclass

Perhaps toggleClass

https://api.jquery.com/toggleclass/ */
