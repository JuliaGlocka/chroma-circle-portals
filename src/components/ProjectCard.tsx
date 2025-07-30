
import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  technology: string;
}

interface ProjectCardProps {
  project: Project;
  onBack: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onBack }) => {
  return (
    <div className="w-full max-w-md mx-auto bg-card rounded-xl shadow-xl overflow-hidden p-6 border border-primary/30 animate-fade-in">
      <button 
        onClick={onBack}
        className="mb-4 flex items-center text-primary hover:text-white transition-colors"
      >
        <ArrowLeft size={16} className="mr-1" /> Back to menu
      </button>
      
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
          <span className="text-primary font-bold">{project.technology.charAt(0)}</span>
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">{project.title}</h2>
          <p className="text-sm text-primary">{project.technology}</p>
        </div>
      </div>
      
      <p className="text-gray-300 mb-6">{project.description}</p>
      
      <div className="grid grid-cols-2 gap-4">
        <button className="bg-primary hover:bg-primary/80 text-background font-bold py-2 px-4 rounded-lg transition-colors">
          View Project
        </button>
        <button className="border border-primary text-primary hover:bg-primary/10 font-bold py-2 px-4 rounded-lg transition-colors">
          Source Code
        </button>
      </div>
      
      <div className="mt-6">
        <h3 className="text-white font-semibold mb-2">Technologies</h3>
        <div className="flex flex-wrap gap-2">
          {project.technology === 'Python' && (
            <>
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Python</span>
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Flask</span>
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">PyTorch</span>
            </>
          )}
          
          {project.technology === 'C#' && (
            <>
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">C#</span>
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">.NET</span>
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Entity Framework</span>
            </>
          )}
          
          {project.technology === 'Unity' && (
            <>
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Unity</span>
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">C#</span>
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">3D Modeling</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
