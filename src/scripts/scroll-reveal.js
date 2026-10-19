const REVEAL_SELECTOR =
  ".section-heading, .sobre-layout, .skills-window, .projetos-card, .contact-panel, .site-footer";

export function initScrollReveal() {
  if (
    !("IntersectionObserver" in window) ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        target.classList.toggle("is-visible", isIntersecting);
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
  );

  document.querySelectorAll(REVEAL_SELECTOR).forEach((element) => {
    element.classList.add("scroll-reveal");
    observer.observe(element);
  });
}
