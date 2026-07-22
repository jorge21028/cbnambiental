/**
 * back-to-top.js
 * Muestra un botón para volver arriba tras hacer scroll y lo desplaza suave.
 */
(function () {
  const btn = document.querySelector("[data-back-to-top]");
  if (!btn) return;

  window.addEventListener(
    "scroll",
    () => {
      btn.classList.toggle("visible", window.scrollY > 480);
    },
    { passive: true }
  );

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();
