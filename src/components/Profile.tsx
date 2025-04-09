
import React from 'react';

interface ProfileProps {
  name: string;
  title: string;
  imagePath?: string;
}

const Profile: React.FC<ProfileProps> = ({ name, title, imagePath }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-gradient-to-br from-dark-bg to-dark-card animate-pulse-soft">
      {imagePath ? (
        <div className="w-full h-full flex items-center justify-center">
          <img 
            src={imagePath} 
            alt="Profile" 
            className="max-w-full max-h-full object-contain"
          />
        </div>
      ) : (
        <>
          {/* Circular avatar with initials */}
          <div className="w-24 h-24 rounded-full bg-dark-bg flex items-center justify-center border-2 border-turquoise">
            <span className="text-3xl font-bold text-turquoise">{name.charAt(0)}</span>
          </div>
          
          {/* Profile text */}
          <div className="mt-2 text-center">
            <div className="text-sm font-semibold text-turquoise">{name}</div>
            <div className="text-xs text-white/80">{title}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
