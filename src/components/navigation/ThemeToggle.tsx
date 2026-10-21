import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  className?: string;
  size?: 'sm' | 'md';
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', size = 'md' }) => {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === 'dark';
  const sizeClasses = size === 'sm' ? 'w-8 h-8' : 'w-9 h-9';
  const iconSize = size === 'sm' ? 14 : 16;

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`
        relative inline-flex items-center justify-center rounded-full
        border border-neutral-300 dark:border-neutral-700
        bg-transparent hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50
        text-[#111110] dark:text-[#F2F0E9]
        transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400
        cursor-pointer ${sizeClasses} ${className}
      `}
    >
      <div className="relative w-full h-full flex items-center justify-center transition-transform duration-500 transform">
        {isDark ? (
          <Sun size={iconSize} className="transition-all duration-300 transform rotate-0 scale-100 text-[#F2F0E9]" strokeWidth={1.5} />
        ) : (
          <Moon size={iconSize} className="transition-all duration-300 transform rotate-0 scale-100 text-[#111110]" strokeWidth={1.5} />
        )}
      </div>
    </button>
  );
};
