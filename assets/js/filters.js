/**
 * filters.js
 * Filtrado de tarjetas (proyectos, publicaciones, etc.) en el cliente,
 * a partir de atributos data-category / data-year / data-province en cada
 * tarjeta y selects con [data-filter="category|year|province"].
 */
(function () {
  const filterEls = document.querySelectorAll("[data-filter]");
  const cards = document.querySelectorAll("[data-filterable]");
  if (!filterEls.length || !cards.length) return;

  function applyFilters() {
    const active = {};
    filterEls.forEach((el) => {
      const key = el.getAttribute("data-filter");
      if (el.value) active[key] = el.value;
    });

    cards.forEach((card) => {
      const matches = Object.entries(active).every(
        ([key, value]) => card.getAttribute(`data-${key}`) === value
      );
      card.style.display = matches ? "" : "none";
    });
  }

  filterEls.forEach((el) => el.addEventListener("change", applyFilters));
})();
