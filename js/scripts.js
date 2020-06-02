$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
  $(".clickable2").click(function() {
    $("#animal-showing").fadeToggle();
    $("#animal-hidden").fadeToggle();
  });
  $(".clickable3").click(function() {
    $("#lobster-showing").fadeToggle();
    $("#lobster-hidden").fadeToggle();
  });
});