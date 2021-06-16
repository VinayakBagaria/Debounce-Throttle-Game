import { useState, useRef, useEffect } from 'react';

export enum ThemeVariant {
  Light = 'light',
  Dark = 'dark',
}

function getSystemTheme() {
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return ThemeVariant.Dark;
  }
  return ThemeVariant.Light;
}

export function useTheme() {
  const [theme, setTheme] = useState<ThemeVariant>(() => getSystemTheme());
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = wrapperRef.current;
    if (!node) {
      return;
    }
    node.dataset.theme = theme;
  }, [theme]);

  function inverseTheme() {
    if (theme === ThemeVariant.Light) {
      setTheme(ThemeVariant.Dark);
    } else {
      setTheme(ThemeVariant.Light);
    }
  }

  return {
    wrapperRef,
    theme,
    inverseTheme,
  };
}
