export function initSkillsCarousel() {
  const track = document.querySelector(".skills-track");
  const skills = track?.querySelector(".skills-set");

  if (!skills || track.querySelector('[aria-hidden="true"]')) return;

  // A segunda sequência mantém a animação contínua sem duplicar o conteúdo fonte.
  const copy = skills.cloneNode(true);
  copy.setAttribute("aria-hidden", "true");
  copy.querySelectorAll("img").forEach((image) => {
    image.alt = "";
  });
  track.append(copy);
  track.classList.add("is-ready");
}
