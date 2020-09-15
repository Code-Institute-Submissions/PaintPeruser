/*$("#dropdown").change(function() {
  $("select option:selected").each
}) */

$(document).ready(function() {

  var $doc = $(this);
  var azure_blue = $doc.find(".azure-blue");
  var passion_purple =  $doc.find(".passion-purple");
  var blaze_red = $doc.find(".blaze-red");

  $("#dropdown").change(function() {
    var target = $(this).val();
    if (target == "blaze_red") blaze_red.css();
    if (target == "azure_blue") azure_blue.css();
    if (target == "passion_purple") passion_purple.css();

  });
});

