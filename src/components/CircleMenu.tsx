
import React, { useState, useRef, useEffect } from 'react';
import MenuButton from './MenuButton';
import Profile from './Profile';
import { Code, FileCode, Gamepad2, TestTube2 } from 'lucide-react';
import './CircleMenu.css'; // Importujemy plik CSS
import { useIsMobile } from '@/hooks/use-mobile';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  sourceUrl?: string; // GitHub lub inne repo
  liveUrl?: string;   // Link do działającej wersji (jeśli istnieje)
}

interface CircleMenuProps {
  onSelectProject: (project: Project) => void;
}
const CircleMenu: React.FC<CircleMenuProps> = ({
  onSelectProject
}) => {
  const [rotation, setRotation] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const lastPosition = useRef({ x: 0, y: 0 });
  const isMobile = useIsMobile();

  // Example projects
  const projects: Record<string, Project[]> = {
    python: [{
      id: 'py1',
      title: 'Authentication System',
      description: 'simple authentication system built using Python. The system allows users to sign up and log in securely using email and password authentication. The project incorporates encryption and hashing techniques to protect sensitive data, and uses PostgreSQL to store user credentials instead of a text file',
      technologies: ['Python', 'Fernet', 'bcrypt salt', 'UUID', 'psycopg2']
    }, {
      id: 'py2',
      title: 'Machine Learning API',
      description: 'REST API for image classification using PyTorch and FastAPI.',
      technologies: ['Python']
    }],
    csharp: [{
      id: 'cs1',
      title: 'Enterprise Web App',
      description: 'Full-stack web application built with ASP.NET Core and Angular.',
      technologies: ['C#']
    }, {
      id: 'cs2',
      title: 'Desktop Utility Tool',
      description: 'Windows desktop application for file management and processing.',
      technologies: ['C#']
    }],
    unity: [{
      id: 'un1',
      title: '3D Run-and-Jump Game for Children',
      description: 'Co-developed a 3D platformer game designed for young children, featuring immersive environments, five thematic worlds, and increasing difficulty across five levels. My primary responsibility was level design and development, including terrain sculpting, obstacle layout, and gameplay pacing. I also contributed to UI integration and scripted some behavioral elements using C#. The game was successfully ported to Nintendo Switch.',
      technologies: ['Unity']
    }, {
      id: 'un2',
      title: 'VR Experience',
      description: 'Virtual reality training simulation for industrial applications.',
      technologies: ['Unity']
    }],
    testing: [{
      id: 'test1',
      title: 'Automated Test Suite',
      description: 'Selenium-based test automation framework built with C#, xUnit, and Page Object Model. Supports cross-browser testing, parallel execution, detailed logging via log4net, and flexible browser configuration through appsettings.json. Designed for robust and maintainable UI regression testing.',
      technologies: ['C#', 'Selenium', 'xUnit', 'log4net'],
      sourceUrl: 'https://github.com/JuliaGlocka/SwagLab'
    }, {
      id: 'test2',
      title: 'Performance Testing Tool',
      description: 'Load and stress testing tool for evaluating application performance.',
      technologies: ['Testing']
    }]
  };
  
  const handleTechnology = (tech: 'python' | 'csharp' | 'unity' | 'testing') => {
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
  
  // Setup drag event handlers
  useEffect(() => {
    const menuElement = menuRef.current;
    if (!menuElement) return;
    
    const handleMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      lastPosition.current = { x: e.clientX, y: e.clientY };
      menuElement.style.cursor = 'grabbing';
    };
    
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging.current = true;
        lastPosition.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      
      const dx = e.clientX - lastPosition.current.x;
      const dy = e.clientY - lastPosition.current.y;
      
      // Calculate rotation based on drag direction and angle with increased sensitivity
      const angle = calculateRotationAngle(dx, dy) * 2.5; // Increased sensitivity multiplier
      setRotation(prev => prev + angle);
      
      lastPosition.current = { x: e.clientX, y: e.clientY };
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging.current || e.touches.length !== 1) return;
      
      const dx = e.touches[0].clientX - lastPosition.current.x;
      const dy = e.touches[0].clientY - lastPosition.current.y;
      
      // Calculate rotation based on drag direction and angle with increased sensitivity
      const angle = calculateRotationAngle(dx, dy) * 2.5; // Increased sensitivity multiplier
      setRotation(prev => prev + angle);
      
      lastPosition.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };
    
    const handleMouseUp = () => {
      isDragging.current = false;
      menuElement.style.cursor = 'grab';
    };
    
    const handleTouchEnd = () => {
      isDragging.current = false;
    };
    
    // Calculate rotation angle based on drag movement
    const calculateRotationAngle = (dx: number, dy: number): number => {
      // Get center of the menu
      const rect = menuElement.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate angle from center to previous and current points
      const previousAngle = Math.atan2(
        lastPosition.current.y - centerY, 
        lastPosition.current.x - centerX
      );
      const currentAngle = Math.atan2(
        lastPosition.current.y + dy - centerY, 
        lastPosition.current.x + dx - centerX
      );
      
      // Convert to degrees
      return ((currentAngle - previousAngle) * 180) / Math.PI;
    };
    
    // Add event listeners
    menuElement.addEventListener('mousedown', handleMouseDown);
    menuElement.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleTouchEnd);
    
    // Cleanup
    return () => {
      menuElement.removeEventListener('mousedown', handleMouseDown);
      menuElement.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);
  
  const menuItems = [{
    label: "Python",
    icon: Code,
    angle: 45,
    onClick: () => handleTechnology('python')
  }, {
    label: "C#",
    icon: FileCode,
    angle: 135,
    onClick: () => handleTechnology('csharp')
  }, {
    label: "Unity",
    icon: Gamepad2,
    angle: 225,
    onClick: () => handleTechnology('unity')
  }, {
    label: "Testing",
    icon: TestTube2,
    angle: 315,
    onClick: () => handleTechnology('testing')
  }];
  
  return (
    <div className="circle-menu-wrapper">
      <div 
        ref={menuRef}
        className="circle-menu bg-transparent"
        style={{ cursor: 'grab' }}
      >
        {/* Large outer circle (main orbit) */}
        <div className="main-orbit" />

        {/* Container for rotating menu items */}
        <div className={`menu-items-container ${isRotating ? 'rotating' : ''}`} style={{
          transform: `rotate(${rotation}deg)`
        }}>
          {menuItems.map((item, index) => <MenuButton key={index} label={item.label} icon={item.icon} angle={item.angle} distance={isMobile ? 160 : 230} // Adjust distance based on screen size
          onClick={item.onClick} rotation={-rotation} // Counter-rotate the buttons to keep text upright
          />)}
        </div>

        {/* Central avatar container */}
        <div className="avatar-container">
          <Profile name="" title="" imagePath="/lovable-uploads/9ceb2a1f-aece-4ba4-9e4f-59252130eabb.png" />
        </div>
      </div>
      
      {/* Rotation control buttons - now outside the circle */}
      <div className="rotation-controls">
        <button onClick={() => rotateMenu('counterclockwise')} className="rotate-btn" aria-label="Rotate menu counterclockwise">
          ⟲
        </button>
        <button onClick={() => rotateMenu('clockwise')} className="rotate-btn" aria-label="Rotate menu clockwise">
          ⟳
        </button>
      </div>
    </div>
  );
};

export default CircleMenu;
