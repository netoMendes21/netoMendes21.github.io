const THEME_STORAGE_KEY = "portfolio-theme";
const root = document.documentElement;
const themeToggle = document.querySelector("#theme-toggle");
const currentYear = document.querySelector("#current-year");
const themeColor = document.querySelector('meta[name="theme-color"]');

function readSavedTheme() {
  try {
    return window.localStorage.getItem(THEME_STORAGE_KEY) === "light"
      ? "light"
      : "dark";
  } catch {
    return "dark";
  }
}

function applyTheme(theme) {
  const isLight = theme === "light";

  root.dataset.theme = isLight ? "light" : "dark";
  themeToggle?.setAttribute(
    "aria-label",
    isLight ? "Ativar modo escuro" : "Ativar modo claro",
  );
  themeToggle?.setAttribute(
    "title",
    isLight ? "Ativar modo escuro" : "Ativar modo claro",
  );
  themeToggle?.setAttribute("aria-pressed", String(isLight));
  themeColor?.setAttribute("content", isLight ? "#e5e6ee" : "#0b1020");
}

applyTheme(readSavedTheme());

themeToggle?.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "light" ? "dark" : "light";

  applyTheme(nextTheme);

  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  } catch {
    // O tema continua alternando mesmo se o navegador bloquear o armazenamento.
  }
});

if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}
