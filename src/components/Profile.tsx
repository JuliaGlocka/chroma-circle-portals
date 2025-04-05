
import React from 'react';

interface ProfileProps {
  name: string;
  title: string;
}

const Profile: React.FC<ProfileProps> = ({ name, title }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-gradient-to-br from-dark-bg to-dark-card animate-pulse-soft">
      {/* Circular avatar with initials */}
      <div className="w-16 h-16 rounded-full bg-dark-bg flex items-center justify-center border-2 border-turquoise">
        <span className="text-3xl font-bold text-turquoise">{name.charAt(0)}</span>
      </div>
      
      {/* Profile text */}
      <div className="mt-2 text-center">
        <div className="text-sm font-semibold text-turquoise">{name}</div>
        <div className="text-xs text-white/80">{title}</div>
      </div>
    </div>
  );
};

export default Profile;
