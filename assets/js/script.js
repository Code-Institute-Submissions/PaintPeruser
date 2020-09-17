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
    $("#azure-blue").click(function(){
        $("#main-image").removeClass("passion-purple").removeClass("jewel-green").addClass("azure-blue");
    });
    $("#jewel-green").click(function(){
        $("#main-image").removeClass("azure-blue").removeClass("passion-purple").addClass("jewel-green");
    });
    $("#passion-purple").click(function(){
        $("#main-image").removeClass("jewel-green").removeClass("azure-blue").addClass("passion-purple");
    });
});
