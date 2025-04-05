
import React, { useState } from 'react';
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

  return (
    <div className="circle-menu animate-float">
      {/* Center profile avatar */}
      <Profile name="DEV" title="Game Developer" />
      
      {/* Menu buttons positioned in a circle */}
      <MenuButton
        label="Python"
        icon={Code}
        angle={270} // top
        distance={180}
        onClick={() => handleTechnology('python')}
      />
      
      <MenuButton
        label="C#"
        icon={FileCode}
        angle={30} // right-bottom
        distance={180}
        onClick={() => handleTechnology('csharp')}
      />
      
      <MenuButton
        label="Unity"
        icon={Gamepad2}
        angle={150} // left-bottom
        distance={180}
        onClick={() => handleTechnology('unity')}
      />
      
      {/* Optional: you can add an outer ring of elements or effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border border-turquoise/20 animate-rotate-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-turquoise/10" />
    </div>
  );
};

export default CircleMenu;
