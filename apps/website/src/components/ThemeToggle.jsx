import React, { useState, useEffect } from 'react';
import Icon from './ui/icons';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      style={{
        background: 'transparent',
        border: '1px solid var(--gray-300)',
        borderRadius: 'var(--radius-md)',
        padding: 'var(--space-2)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all var(--transition-fast)',
        width: '40px',
        height: '40px'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.backgroundColor = 'var(--gray-100)';
        e.currentTarget.style.borderColor = 'var(--primary-blue)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.backgroundColor = 'transparent';
        e.currentTarget.style.borderColor = 'var(--gray-300)';
      }}
    >
      <span className="animate-gradient" style={{ display: 'inline-flex', borderRadius: 8 }}>
        {isDark ? <Icon name="sun" size={16} /> : <Icon name="moon" size={16} />}
      </span>
    </button>
  );
};

export default ThemeToggle;