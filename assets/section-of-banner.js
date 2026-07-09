document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("of-menu");
  const header = document.getElementById("of-header");

  menu.addEventListener("click", () => {
    header.classList.toggle("open");
  });
});