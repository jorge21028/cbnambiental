/**
 * scroll-animations.js
 * Anima elementos con [data-animate] al entrar en el viewport usando
 * IntersectionObserver (rendimiento óptimo, sin listeners de scroll).
 */
(function () {
  const items = document.querySelectorAll("[data-animate]");
  if (!items.length || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("in-view"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  items.forEach((el) => observer.observe(el));
})();
