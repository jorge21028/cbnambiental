/**
 * navbar.js
 * Controla el menú móvil (apertura/cierre) y el estado del enlace activo.
 */
(function () {
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");
  const backdrop = document.querySelector("[data-mobile-backdrop]");
  const closeBtn = document.querySelector("[data-menu-close]");

  function openMenu() {
    mobileMenu?.classList.add("open");
    backdrop?.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    mobileMenu?.classList.remove("open");
    backdrop?.classList.remove("open");
    document.body.style.overflow = "";
  }

  menuToggle?.addEventListener("click", openMenu);
  closeBtn?.addEventListener("click", closeMenu);
  backdrop?.addEventListener("click", closeMenu);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
})();
