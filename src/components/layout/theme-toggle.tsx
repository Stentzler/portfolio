"use client";

import { useEffect, useRef } from "react";

type ThemeToggleProps = {
  switchToDark: string;
  switchToLight: string;
};

function MoonIcon() {
  return (
    <svg aria-hidden="true" className="size-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewBox="0 0 24 24">
      <path d="M20.5 14.8A8.5 8.5 0 0 1 9.2 3.5 8.5 8.5 0 1 0 20.5 14.8Z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg aria-hidden="true" className="size-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2.5v2M12 19.5v2M21.5 12h-2M4.5 12h-2M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4M18.7 18.7l-1.4-1.4M6.7 6.7 5.3 5.3" />
    </svg>
  );
}

export function ThemeToggle({ switchToDark, switchToLight }: ThemeToggleProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const isDark = window.localStorage.getItem("theme") !== "light";
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
    updateButtonLabel(buttonRef.current, isDark, switchToDark, switchToLight);
  }, [switchToDark, switchToLight]);

  function toggleTheme() {
    const nextIsDark = document.documentElement.dataset.theme !== "dark";
    document.documentElement.dataset.theme = nextIsDark ? "dark" : "light";
    window.localStorage.setItem("theme", nextIsDark ? "dark" : "light");
    updateButtonLabel(buttonRef.current, nextIsDark, switchToDark, switchToLight);
  }

  return (
    <button aria-label={switchToLight} className="theme-toggle inline-flex size-8 items-center justify-center text-ink hover:text-accent" onClick={toggleTheme} ref={buttonRef} title={switchToLight} type="button">
      <span className="theme-toggle__moon"><MoonIcon /></span>
      <span className="theme-toggle__sun"><SunIcon /></span>
    </button>
  );
}

function updateButtonLabel(button: HTMLButtonElement | null, isDark: boolean, switchToDark: string, switchToLight: string) {
  if (!button) return;

  const label = isDark ? switchToLight : switchToDark;
  button.ariaLabel = label;
  button.title = label;
}
