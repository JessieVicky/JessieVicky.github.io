$(document ).ready(function() {

$( ".hamburger" ).hide();
$( ".cross" ).click(function() {
$( ".navBar" ).slideToggle( "medium", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});

$( ".hamburger" ).click(function() {
$( ".navBar" ).slideToggle( "medium", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

});

