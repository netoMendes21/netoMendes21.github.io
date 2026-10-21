const REVEAL_SELECTOR = [
  ".hero-content",
  ".hero-portrait-wrap",
  ".section-heading",
  ".sobre-copy > p",
  ".skills-window",
  ".projetos-card",
  ".contact-panel",
  ".site-footer",
].join(", ");
const REVEAL_THRESHOLD = 0.12;
const CARD_DELAY_MS = 180;

function updateRevealVisibility(entries) {
  entries.forEach(({ target, isIntersecting, intersectionRatio }) => {
    if (!isIntersecting) {
      if (!target.contains(document.activeElement)) {
        target.classList.remove("is-visible");
      }
      return;
    }

    if (intersectionRatio >= REVEAL_THRESHOLD) {
      target.classList.add("is-visible");
    }
  });
}

export function initScrollReveal() {
  if (!("IntersectionObserver" in window)) return;

  const elements = document.querySelectorAll(REVEAL_SELECTOR);
  if (!elements.length) return;

  const observer = new IntersectionObserver(updateRevealVisibility, {
    threshold: [0, REVEAL_THRESHOLD],
  });

  elements.forEach((element) => {
    element.classList.add("scroll-reveal");
  });

  document.querySelectorAll(".projetos-card").forEach((card, index) => {
    card.style.setProperty("--reveal-delay", `${index * CARD_DELAY_MS}ms`);
  });

  // Aguarda a pintura inicial para animar também o conteúdo que já está na tela.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      elements.forEach((element) => observer.observe(element));
    });
  });

  document.addEventListener("focusin", ({ target }) => {
    const element = target.closest(".scroll-reveal");
    if (!element) return;
    element.classList.add("is-visible");
  });
}
