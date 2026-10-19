const STORAGE_KEY = "portfolio-theme";

function readSavedTheme() {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "light"
      ? "light"
      : "dark";
  } catch {
    return "dark";
  }
}

export function initTheme() {
  const root = document.documentElement;
  const toggle = document.querySelector("#theme-toggle");
  const themeColor = document.querySelector('meta[name="theme-color"]');

  function applyTheme(theme) {
    const isLight = theme === "light";
    const label = isLight ? "Ativar modo escuro" : "Ativar modo claro";

    root.dataset.theme = theme;
    toggle?.setAttribute("aria-label", label);
    toggle?.setAttribute("title", label);
    toggle?.setAttribute("aria-pressed", String(isLight));
    themeColor?.setAttribute("content", isLight ? "#e5e6ee" : "#0b1020");
  }

  applyTheme(readSavedTheme());

  toggle?.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "light" ? "dark" : "light";
    applyTheme(nextTheme);

    try {
      window.localStorage.setItem(STORAGE_KEY, nextTheme);
    } catch {
      // A troca de tema funciona mesmo com armazenamento bloqueado.
    }
  });
}
