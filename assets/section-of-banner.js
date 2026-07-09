const menu = document.getElementById("of-menu");
const dropdown = document.getElementById("of-dropdown");
const header = document.getElementById("of-header");

document.addEventListener("DOMContentLoaded", function () {
  menu.addEventListener("click", function () {
    header.classList.toggle("open");
  });
});
