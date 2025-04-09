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
  return <div className="min-h-screen flex flex-col relative">
      <CodeBackground />
      
      <header className="fixed top-0 w-full p-4 z-20 flex justify-between items-center">
        <div className="text-turquoise font-bold text-xl">JGDev Portfolio</div>
        <div className="flex space-x-4">
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
      
      <main className="flex-1 flex items-center justify-center">
        {selectedProject ? <div className="circle-menu-container">
            <ProjectCard project={selectedProject} onBack={() => setSelectedProject(null)} />
          </div> : <div className="circle-menu-container">
            <CircleMenu onSelectProject={setSelectedProject} />
          </div>}
      </main>
      
      <footer className="p-4 text-center text-white/60 text-sm">
        © 2025 JG Developer Portfolio
      </footer>
    </div>;
};

export default Index;
