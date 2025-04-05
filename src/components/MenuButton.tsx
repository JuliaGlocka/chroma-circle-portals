
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MenuButtonProps {
  label: string;
  icon: LucideIcon;
  angle: number;
  distance: number;
  onClick: () => void;
  rotation?: number; // Added to counter-rotate the button
}

const MenuButton: React.FC<MenuButtonProps> = ({ 
  label, 
  icon: IconComponent,
  angle, 
  distance,
  onClick,
  rotation = 0 
}) => {
  // Calculate position based on angle and distance
  const radians = (angle * Math.PI) / 180;
  const x = Math.cos(radians) * distance;
  const y = Math.sin(radians) * distance;
  
  return (
    <button
      className="menu-button"
      style={{
        transform: `translate(${x}px, ${y}px) rotate(${rotation}deg)`,
        transition: 'transform 0.5s ease-in-out',
      }}
      onClick={onClick}
      aria-label={label}
    >
      <IconComponent className="text-turquoise mb-1" size={24} />
      <span className="menu-text">{label}</span>
    </button>
  );
};

export default MenuButton;
