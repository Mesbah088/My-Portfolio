import { createContext, useContext, useState, useEffect } from 'react';
import { themes } from '../data/themes';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  const [currentTheme, setCurrentTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved || 'green';
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem('theme', currentTheme);
    const theme = themes.find(t => t.id === currentTheme);
    if (theme) {
      document.documentElement.style.setProperty('--color-primary', theme.primary);
      document.documentElement.style.setProperty('--color-primary-dark', theme.primaryDark);
      document.documentElement.style.setProperty('--color-primary-light', theme.primaryLight);
      document.documentElement.style.setProperty('--color-accent', theme.accent);
    }
  }, [currentTheme]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  const changeTheme = (themeId) => {
    setCurrentTheme(themeId);
  };

  const value = {
    isDarkMode,
    toggleDarkMode,
    currentTheme,
    changeTheme,
    themes
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
