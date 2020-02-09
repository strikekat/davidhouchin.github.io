var toggle = document.getElementById("theme-toggle");
var lightTheme = document.getElementById("light-mode");
var darkTheme = document.getElementById("dark-mode");

var savedTheme = localStorage.getItem("selected-theme") || "dark";
setTheme(savedTheme);

toggle.addEventListener("click", () => {
  if (toggle.className === "fas fa-moon") {
    setTheme("dark");
  } else if (toggle.className === "fas fa-sun") {
    setTheme("light");
  }
});

function setTheme(mode) {
  localStorage.setItem("selected-theme", mode);

  if (mode === "light") {
    lightTheme.disabled = false;
    darkTheme.disabled = true;
    toggle.className = "fas fa-moon";
  } else if (mode === "dark") {
    lightTheme.disabled = true;
    darkTheme.disabled = false;
    toggle.className = "fas fa-sun";
  }
}
