let mainNav = document.getElementById("js-menu");

$("#js-navbar-toggle").on("click", function() {
  mainNav.classList.toggle("navar-active");
});

$(function() {
  var navMain = $("#js-menu"); // avoid dependency on #id
  // "a:not([data-toggle])" - to avoid issues caused
  // when you have dropdown inside navbar
  navMain.on("click", "a", null, function() {
    $("#js-navbar-toggle").click();
    mainNav.classList.toggle("navar-active");
    $(".rotate").click();
  });
});

$(".rotate").click(function() {
  $(this).toggleClass("down");
});

function socialMediaRedirect(url) {
  window.open(url);
}
