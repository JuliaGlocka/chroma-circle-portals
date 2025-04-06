
import React, { useState } from 'react';
import CircleMenu from '../components/CircleMenu';
import ProjectCard from '../components/ProjectCard';
import CodeBackground from '../components/Background';
import { Github, Linkedin, Mail } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  technology: string;
}

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen flex flex-col relative bg-dark-bg">
      {/* Animated background */}
      <CodeBackground />
      
      {/* Header with social links */}
      <header className="fixed top-0 w-full p-4 z-20 flex justify-between items-center bg-dark-bg/70 backdrop-blur-sm">
        <div className="text-turquoise font-bold text-xl ml-4">GameDev Portfolio</div>
        <div className="flex space-x-4 mr-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-turquoise transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-turquoise transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:contact@example.com" className="text-white hover:text-turquoise transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </header>
      
      {/* Main content */}
      <main className="flex-1 flex items-center justify-center w-full p-4 pt-16 pb-16">
        {selectedProject ? (
          <div className="w-full max-w-3xl mx-auto p-4">
            <ProjectCard 
              project={selectedProject} 
              onBack={() => setSelectedProject(null)} 
            />
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center p-2">
            <CircleMenu onSelectProject={setSelectedProject} />
          </div>
        )}
      </main>
      
      {/* Footer */}
      <footer className="p-4 text-center text-white/60 text-sm bg-dark-bg/70 backdrop-blur-sm">
        © 2025 Game Developer Portfolio
      </footer>
    </div>
  );
};

export default Index;
