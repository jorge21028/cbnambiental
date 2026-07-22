/**
 * search.js
 * Buscador interno del sitio (blog / proyectos / publicaciones).
 * Consume un índice JSON generado por Jekyll (ver /assets/js/search-index.json)
 * y filtra en el cliente sin necesidad de backend.
 */
(function () {
  const input = document.querySelector("[data-search-input]");
  const resultsBox = document.querySelector("[data-search-results]");
  if (!input || !resultsBox) return;

  let index = [];
  const indexUrl = input.getAttribute("data-search-index") || "/assets/js/search-index.json";

  fetch(indexUrl)
    .then((res) => res.json())
    .then((data) => { index = data; })
    .catch(() => { index = []; });

  function render(items) {
    if (!items.length) {
      resultsBox.innerHTML = '<p class="text-muted">No se encontraron resultados.</p>';
      return;
    }
    resultsBox.innerHTML = items
      .slice(0, 10)
      .map(
        (item) => `
        <a class="search-result-item" href="${item.url}">
          <strong>${item.title}</strong>
          <span class="text-muted">${item.excerpt || ""}</span>
        </a>`
      )
      .join("");
  }

  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    resultsBox.style.display = q ? "block" : "none";
    if (!q) return;
    const filtered = index.filter((item) =>
      (item.title + " " + (item.tags || []).join(" ") + " " + (item.excerpt || ""))
        .toLowerCase()
        .includes(q)
    );
    render(filtered);
  });

  document.addEventListener("click", (e) => {
    if (!resultsBox.contains(e.target) && e.target !== input) {
      resultsBox.style.display = "none";
    }
  });
})();
