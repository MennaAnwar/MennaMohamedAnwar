document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("of-menu");
  const header = document.getElementById("of-header");
  const headerButton = header.querySelector(".of-nav .of-button");

  menu.addEventListener("click", () => {
    header.classList.toggle("open");
    headerButton.classList.toggle("hide-on-mobile-menu");
  });
});