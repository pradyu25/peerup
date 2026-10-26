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
        border border-[#E3E8F0] dark:border-[#293451]
        bg-transparent hover:bg-[#F2F4F8] dark:hover:bg-[#10182F]
        text-[#0F1221] dark:text-[#F5F7FF]
        hover:border-[#075BFF] dark:hover:border-[#00D9F5]
        transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D9F5]
        cursor-pointer ${sizeClasses} ${className}
      `}
    >
      <div className="relative w-full h-full flex items-center justify-center transition-transform duration-500 transform">
        {isDark ? (
          <Sun size={iconSize} className="transition-all duration-300 transform rotate-0 scale-100 text-[#00D9F5]" strokeWidth={1.5} />
        ) : (
          <Moon size={iconSize} className="transition-all duration-300 transform rotate-0 scale-100 text-[#0F1221]" strokeWidth={1.5} />
        )}
      </div>
    </button>
  );
};
