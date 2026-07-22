/**
 * lazy-load.js
 * Carga diferida de imágenes con [loading="lazy"] como respaldo + fade-in
 * cuando la imagen ya está en el DOM con data-src.
 */
(function () {
  const imgs = document.querySelectorAll("img[data-src]");
  if (!imgs.length) return;

  if (!("IntersectionObserver" in window)) {
    imgs.forEach((img) => { img.src = img.dataset.src; img.classList.add("loaded"); });
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.addEventListener("load", () => img.classList.add("loaded"));
        obs.unobserve(img);
      }
    });
  });

  imgs.forEach((img) => observer.observe(img));
})();
