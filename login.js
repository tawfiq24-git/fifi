document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("themeToggle");
  const icon = document.getElementById("toggleIcon");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const loginButton = document.getElementById("loginButton");

  function updateLoginButtonState() {
    const hasUsername = usernameInput.value.trim().length > 0;
    const hasPassword = passwordInput.value.trim().length > 0;
    loginButton.disabled = !(hasUsername && hasPassword);
  }

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

  usernameInput.addEventListener("input", updateLoginButtonState);
  passwordInput.addEventListener("input", updateLoginButtonState);
  updateLoginButtonState();
});
