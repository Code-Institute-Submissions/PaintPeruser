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
        $("#main-image").removeClass("passion-purple").removeClass("jewel-green").removeClass("azure-blue").removeClass("calming-teal").removeClass("sunburnt-orange").removeClass("vivid-pink").removeClass("default-hue").addClass("blaze-red");
    });
    $("#azure-blue").click(function(){
        $("#main-image").removeClass("passion-purple").removeClass("jewel-green").removeClass("blaze-red").removeClass("calming-teal").removeClass("sunburnt-orange").removeClass("vivid-pink").removeClass("default-hue").addClass("azure-blue");
    });
    $("#jewel-green").click(function(){
        $("#main-image").removeClass("passion-purple").removeClass("blaze-red").removeClass("azure-blue").removeClass("calming-teal").removeClass("sunburnt-orange").removeClass("vivid-pink").removeClass("default-hue").addClass("jewel-green");
    });
    $("#passion-purple").click(function(){
        $("#main-image").removeClass("blaze-red").removeClass("jewel-green").removeClass("azure-blue").removeClass("calming-teal").removeClass("sunburnt-orange").removeClass("vivid-pink").removeClass("default-hue").addClass("passion-purple");
    });
    $("#vivid-pink").click(function(){
        $("#main-image").removeClass("passion-purple").removeClass("jewel-green").removeClass("azure-blue").removeClass("calming-teal").removeClass("sunburnt-orange").removeClass("blaze-red").removeClass("default-hue").addClass("vivid-pink");
    });
    $("#calming-teal").click(function(){
        $("#main-image").removeClass("passion-purple").removeClass("jewel-green").removeClass("azure-blue").removeClass("blaze-red").removeClass("sunburnt-orange").removeClass("vivid-pink").removeClass("default-hue").addClass("calming-teal");
    });
    $("#sunburnt-orange").click(function(){
        $("#main-image").removeClass("passion-purple").removeClass("jewel-green").removeClass("azure-blue").removeClass("calming-teal").removeClass("blaze-red").removeClass("vivid-pink").removeClass("default-hue").addClass("sunburnt-orange");
    });
});


/* Experiment with if statements to remove the classes

https://forum.jquery.com/topic/combination-of-addclass-hasclass-and-removeclass

Perhaps toggleClass

https://api.jquery.com/toggleclass/ */
