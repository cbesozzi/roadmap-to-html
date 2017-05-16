$(function() {
  $("#js-toggle-menu").on("click", function() {
    $("body").toggleClass("menu-active");
  });
  if (!Modernizr.svg) {
  $("#menu").css("background-image", "url(navicon.png)");
}
});