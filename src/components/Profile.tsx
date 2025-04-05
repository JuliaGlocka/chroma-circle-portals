
import React from 'react';

interface ProfileProps {
  name: string;
  title: string;
}

const Profile: React.FC<ProfileProps> = ({ name, title }) => {
  return (
    <div className="avatar-container flex flex-col items-center justify-center bg-gradient-to-br from-dark-bg to-dark-card animate-pulse-soft">
      {/* Avatar placeholder - in a real app, you'd use an actual image */}
      <div className="relative w-full h-full">
        <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-turquoise">
          {name.charAt(0)}
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-1 text-center">
          <div className="text-xs font-semibold text-turquoise">
            {name}
          </div>
          <div className="text-xs text-white/80">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
