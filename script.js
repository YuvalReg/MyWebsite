document.addEventListener("DOMContentLoaded", function() {
  // Select the navigation menu
  var navMenu = document.querySelector("nav");

  // Add a click event listener to the menu button
  navMenu.querySelector(".menu-button").addEventListener("click", function() {
    // Toggle the "menu-open" class on the nav menu
    navMenu.classList.toggle("menu-open");
  });
});
