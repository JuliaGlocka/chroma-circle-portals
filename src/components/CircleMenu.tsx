
import React, { useState, useEffect } from 'react';
import MenuButton from './MenuButton';
import Profile from './Profile';
import { Code, FileCode, Gamepad2 } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  technology: string;
}

interface CircleMenuProps {
  onSelectProject: (project: Project) => void;
}

const CircleMenu: React.FC<CircleMenuProps> = ({ onSelectProject }) => {
  const [rotation, setRotation] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  
  // Example projects
  const projects: Record<string, Project[]> = {
    python: [
      { id: 'py1', title: 'Data Visualization Tool', description: 'An interactive data visualization dashboard using Python and Dash.', technology: 'Python' },
      { id: 'py2', title: 'Machine Learning API', description: 'REST API for image classification using PyTorch and FastAPI.', technology: 'Python' },
    ],
    csharp: [
      { id: 'cs1', title: 'Enterprise Web App', description: 'Full-stack web application built with ASP.NET Core and Angular.', technology: 'C#' },
      { id: 'cs2', title: 'Desktop Utility Tool', description: 'Windows desktop application for file management and processing.', technology: 'C#' },
    ],
    unity: [
      { id: 'un1', title: '2D Platformer Game', description: 'Side-scrolling adventure game with procedural level generation.', technology: 'Unity' },
      { id: 'un2', title: 'VR Experience', description: 'Virtual reality training simulation for industrial applications.', technology: 'Unity' },
    ],
  };

  const handleTechnology = (tech: 'python' | 'csharp' | 'unity') => {
    // Select the first project of the technology for demonstration
    if (projects[tech] && projects[tech].length > 0) {
      onSelectProject(projects[tech][0]);
    }
  };

  // Handle manual rotation
  const rotateMenu = (direction: 'clockwise' | 'counterclockwise') => {
    setIsRotating(true);
    const rotateAmount = direction === 'clockwise' ? 30 : -30;
    setRotation(prev => prev + rotateAmount);
    
    // Stop rotation animation after completed
    setTimeout(() => {
      setIsRotating(false);
    }, 500);
  };

  // Define button positions with angles
  const menuItems = [
    { label: "Python", icon: Code, angle: 270, onClick: () => handleTechnology('python') },
    { label: "C#", icon: FileCode, angle: 30, onClick: () => handleTechnology('csharp') },
    { label: "Unity", icon: Gamepad2, angle: 150, onClick: () => handleTechnology('unity') },
  ];

  return (
    <div className="circle-menu animate-float">
      {/* Center profile avatar */}
      <Profile name="DEV" title="Game Developer" />
      
      {/* Menu buttons positioned in a circle */}
      <div 
        className={`menu-items-container ${isRotating ? 'rotating' : ''}`}
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {menuItems.map((item, index) => (
          <MenuButton
            key={index}
            label={item.label}
            icon={item.icon}
            angle={item.angle}
            distance={180}
            onClick={item.onClick}
            rotation={-rotation} // Counter-rotate the buttons to keep text upright
          />
        ))}
      </div>
      
      {/* Rotation control buttons */}
      <div className="rotation-controls">
        <button 
          onClick={() => rotateMenu('counterclockwise')}
          className="rotate-btn rotate-left"
          aria-label="Rotate menu counterclockwise"
        >
          ⟲
        </button>
        <button 
          onClick={() => rotateMenu('clockwise')}
          className="rotate-btn rotate-right"
          aria-label="Rotate menu clockwise"
        >
          ⟳
        </button>
      </div>
      
      {/* Decorative circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border border-turquoise/20 animate-rotate-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-turquoise/10" />
    </div>
  );
};

export default CircleMenu;
