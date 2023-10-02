import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light' | 'system';

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
};
const IS_SERVER = typeof window === 'undefined';
const STORAGE_KEY = 'tiptop-theme';

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

function getInitialThemeState(defaultTheme: Theme): Theme {
  if (IS_SERVER) return defaultTheme;
  try {
    const persistedColorPreference = window.localStorage.getItem(STORAGE_KEY);
    if (persistedColorPreference) return persistedColorPreference as Theme;
    return defaultTheme;
  } catch (_e) {
    return defaultTheme;
  }
}

export function ThemeProvider({ children, defaultTheme = 'system', ...props }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => getInitialThemeState(defaultTheme));

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(STORAGE_KEY, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};
