const toggle = document.getElementById("theme-toggle");
const body = document.body;

// Set initial state
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-theme");
  toggle.checked = true;
}

toggle.addEventListener("change", () => {
  const isDark = toggle.checked;
  body.classList.toggle("dark-theme", isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
