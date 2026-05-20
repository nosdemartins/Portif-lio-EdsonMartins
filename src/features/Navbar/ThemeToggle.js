import React, { useState, useEffect } from 'react';
import './Navbar.css'; 

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button 
      className="theme-toggle-btn" 
      onClick={() => setIsDark(!isDark)}
    >
      {isDark ? '☀️ Modo Claro' : '🌙 Modo Escuro'}
    </button>
  );
}