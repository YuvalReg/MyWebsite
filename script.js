document.addEventListener("DOMContentLoaded", function() {
  // Select the navigation menu and the menu-toggle button
  const navMenu = document.querySelector("nav");
  const toggleButton = document.getElementById('menu-toggle');
  const sideMenu = document.querySelector('aside');

  toggleButton.addEventListener('click', () => {
    sideMenu.classList.toggle('open');
  });
});
