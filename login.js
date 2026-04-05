document.addEventListener("DOMContentLoaded", function () {

  const toggle = document.getElementById("themeToggle");
  const icon = document.getElementById("toggleIcon");

  toggle.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      icon.textContent = "☾";
      icon.style.color = "#00bfff";
    } else {
      icon.textContent = "☀";
      icon.style.color = "orange";

    }
  });

});