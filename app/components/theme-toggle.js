'use client';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const stored = window.localStorage.getItem('theme');
    const preferred =
      stored || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    setTheme(preferred);
    document.documentElement.setAttribute('data-theme', preferred);
  }, []);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    window.localStorage.setItem('theme', next);
  };

  return (
    <button className="theme-toggle" onClick={toggle} aria-label="Toggle color theme">
      {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
};

export default ThemeToggle;
