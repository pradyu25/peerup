import React from 'react';
import { useTheme } from '../../context/ThemeContext';

interface BrandLogoProps {
  variant?: 'header' | 'footer' | 'nav-modal' | 'emblem-only';
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'header',
  className = ''
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // High-res transparent emblem asset
  const logoSrc = '/images/peerup-emblem.png';

  const logoStyle: React.CSSProperties = {
    filter: isDark
      ? 'brightness(1.1) drop-shadow(0 0 8px rgba(197, 155, 39, 0.35))'
      : 'contrast(1.05) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.12))',
    objectFit: 'contain'
  };

  if (variant === 'nav-modal') {
    return (
      <div className={`inline-flex items-center transition-opacity hover:opacity-90 ${className}`}>
        <img
          src={logoSrc}
          alt="PeerUp Collective Emblem"
          className="h-14 sm:h-18 w-auto max-h-20 object-contain"
          style={logoStyle}
        />
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={`inline-flex items-center w-full ${className}`}>
        <img
          src={logoSrc}
          alt="PeerUp Collective Emblem"
          className="w-3/4 max-w-[480px] h-auto object-contain"
          style={logoStyle}
        />
      </div>
    );
  }

  // Header, emblem-only or default variant: logo emblem by itself, sharp & transparent
  return (
    <div className={`inline-flex items-center transition-opacity hover:opacity-90 ${className}`}>
      <img
        src={logoSrc}
        alt="PeerUp Collective Emblem"
        className="h-12 sm:h-16 md:h-20 w-auto max-h-20 object-contain"
        style={logoStyle}
      />
    </div>
  );
};

