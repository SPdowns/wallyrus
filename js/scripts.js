$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
  $(".clickable2").click(function() {
    $("#animal-showing").toggle();
    $("#animal-hidden").toggle();
  });
});