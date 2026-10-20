const REVEAL_SELECTOR =
  ".hero-content, .hero-portrait-wrap, .section-heading, .sobre-copy > p, .skills-window, .projetos-card, .contact-panel, .site-footer";

export function initScrollReveal() {
  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(({ target, isIntersecting, intersectionRatio }) => {
        if (!isIntersecting) {
          if (!target.contains(document.activeElement)) {
            target.classList.remove("is-visible");
          }
          return;
        }
        if (intersectionRatio >= 0.12) {
          target.classList.add("is-visible");
        }
      });
    },
    { threshold: [0, 0.12] },
  );

  const elements = document.querySelectorAll(REVEAL_SELECTOR);
  elements.forEach((element) => {
    element.classList.add("scroll-reveal");
  });

  // Paint the starting state before revealing elements already in view.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      elements.forEach((element) => observer.observe(element));
    });
  });

  document.querySelectorAll(".projetos-card").forEach((card, index) => {
    card.style.setProperty("--reveal-delay", `${index * 180}ms`);
  });

  document.addEventListener("focusin", ({ target }) => {
    const element = target.closest(".scroll-reveal");
    if (!element) return;
    element.classList.add("is-visible");
  });
}
