/**
 * dark-mode.js
 * Alterna entre modo claro y oscuro, y recuerda la preferencia del usuario.
 */
(function () {
  const STORAGE_KEY = "cbn-theme";
  const root = document.documentElement;
  const toggleBtn = document.querySelector("[data-theme-toggle]");

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (toggleBtn) {
      toggleBtn.setAttribute("aria-pressed", theme === "dark");
    }
  }

 function getPreferredTheme() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) return stored;
  return "light"; // Tema claro por defecto, sin importar la preferencia del sistema
 }

  applyTheme(getPreferredTheme());

  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      const current = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(current);
      localStorage.setItem(STORAGE_KEY, current);
    });
  }
})();
