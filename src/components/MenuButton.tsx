
import React from 'react';
import { Icon } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface MenuButtonProps {
  label: string;
  icon: LucideIcon;
  angle: number;
  distance: number;
  onClick: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ 
  label, 
  icon: IconComponent,
  angle, 
  distance,
  onClick 
}) => {
  // Calculate position based on angle and distance
  const radians = (angle * Math.PI) / 180;
  const x = Math.cos(radians) * distance;
  const y = Math.sin(radians) * distance;
  
  return (
    <button
      className="menu-button w-24 h-24 flex flex-col hover:bg-dark-bg"
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
      onClick={onClick}
      aria-label={label}
    >
      <IconComponent className="text-turquoise mb-1" size={28} />
      <span className="menu-text text-sm">{label}</span>
    </button>
  );
};

export default MenuButton;
