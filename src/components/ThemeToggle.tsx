import { useTheme } from "../hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const dark = theme === "dark";

  return (
    <button
      type="button"
      className="toggle"
      onClick={toggle}
      aria-label={dark ? "Turn the lights on" : "Turn the lights off"}
      title={dark ? "Lights on" : "Lights off"}
    >
      <span className="toggle__track" aria-hidden="true">
        <span className="toggle__dot" />
      </span>
      <span className="toggle__label">Lights {dark ? "off" : "on"}</span>
    </button>
  );
}
