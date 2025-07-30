import React from 'react';

interface ProfileProps {
  name: string;
  title: string;
  imagePath?: string; // np. "lovable-uploads/image.png"
}

const Profile: React.FC<ProfileProps> = ({ name, title, imagePath }) => {
  const base = import.meta.env.BASE_URL;
  const fullImagePath = imagePath ? `${base}${imagePath}` : null;

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-gradient-to-br from-background to-card animate-pulse-soft">
      {fullImagePath ? (
        <div className="w-full h-full flex items-center justify-center">
          <img 
            src={fullImagePath}
            alt="Profile"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      ) : (
        <>
          {/* Circular avatar with initials */}
          <div className="w-24 h-24 rounded-full bg-background flex items-center justify-center border-2 border-primary">
            <span className="text-3xl font-bold text-primary">{name.charAt(0)}</span>
          </div>

          {/* Profile text */}
          <div className="mt-2 text-center">
            <div className="text-sm font-semibold text-primary">{name}</div>
            <div className="text-xs text-white/80">{title}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
