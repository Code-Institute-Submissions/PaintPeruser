$(window).scroll(function() {
if ($(".navbar").offset().top > 50) {
    $('#brand').text('P.');
    $(".navbar").removeClass("navbar-expand-lg");
    $(".navbar").addClass("translucent-nav");
} else {
    $('#brand').text('PaintPeruser');
    $(".navbar").addClass("navbar-expand-lg");
    $(".navbar").removeClass("translucent-nav");
}   
});

var icon = document.getElementsByClassName("navbar-toggler-icon");
var pushDown = document.getElementById("push");

/*$(document).ready(function(){
  $(icon[0]).click(function(){
    if($(pushDown).hasClass("push")){
      pushDown.className = "pushUp";
    }
    else{
      pushDown.className = "push";
    }
  })
});*/