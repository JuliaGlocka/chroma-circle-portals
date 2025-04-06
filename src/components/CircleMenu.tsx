
import React, { useState } from 'react';
import MenuButton from './MenuButton';
import Profile from './Profile';
import { Code, FileCode, Gamepad2 } from 'lucide-react';
import './CircleMenu.css';

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
    if (projects[tech] && projects[tech].length > 0) {
      onSelectProject(projects[tech][0]);
    }
  };

  // Handle manual rotation
  const rotateMenu = (direction: 'clockwise' | 'counterclockwise') => {
    setIsRotating(true);
    const rotateAmount = direction === 'clockwise' ? 30 : -30;
    setRotation(prev => prev + rotateAmount);

    setTimeout(() => {
      setIsRotating(false);
    }, 500);
  };

  // Calculate the distance for buttons - exactly on the orbit circle
  const calculateDistance = () => {
    return 42.5; // This places the buttons exactly on the middle orbit
  };

  const menuItems = [
    { label: "Python", icon: Code, angle: 0, onClick: () => handleTechnology('python') },
    { label: "C#", icon: FileCode, angle: 120, onClick: () => handleTechnology('csharp') },
    { label: "Unity", icon: Gamepad2, angle: 240, onClick: () => handleTechnology('unity') },
  ];

  const distance = calculateDistance();

  return (
    <div className="circle-menu">
      {/* Large outer circle (main orbit) */}
      <div className="main-orbit" />

      {/* Container for rotating menu items */}
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
            distance={distance}
            onClick={item.onClick}
            rotation={-rotation} // Counter-rotate the buttons to keep text upright
          />
        ))}
      </div>

      {/* Central avatar container */}
      <div className="avatar-container">
        <Profile name="DEV" title="Game Developer" />
      </div>

      {/* Rotation control buttons */}
      <div className="rotation-controls">
        <button 
          onClick={() => rotateMenu('counterclockwise')}
          className="rotate-btn"
          aria-label="Rotate menu counterclockwise"
        >
          ⟲
        </button>
        <button 
          onClick={() => rotateMenu('clockwise')}
          className="rotate-btn"
          aria-label="Rotate menu clockwise"
        >
          ⟳
        </button>
      </div>
    </div>
  );
};

export default CircleMenu;
