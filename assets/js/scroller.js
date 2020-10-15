/*Controlling script for the navbar, ensuring that the logo reduces in size and the menu collapses as you scroll down. This means the top bar is less intrusive on the page, as the content is centered allowing the logo and three bar icon to sit either side of the content. The translucent navbar is also controlled here. */

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


