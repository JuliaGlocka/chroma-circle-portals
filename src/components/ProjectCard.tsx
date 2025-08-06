
import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  technology: string;
  liveUrl?: string;
  sourceUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  onBack: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onBack }) => {
  return (
    <div className="w-full max-w-md mx-auto bg-dark-card rounded-xl shadow-xl overflow-hidden p-6 border border-turquoise/30 animate-fade-in">
      <button 
        onClick={onBack}
        className="mb-4 flex items-center text-turquoise hover:text-white transition-colors"
      >
        <ArrowLeft size={16} className="mr-1" /> Back to menu
      </button>
      
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-turquoise/20 flex items-center justify-center mr-4">
          <span className="text-turquoise font-bold">{project.technology.charAt(0)}</span>
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">{project.title}</h2>
          <p className="text-sm text-turquoise">{project.technology}</p>
        </div>
      </div>
      
      <p className="text-gray-300 mb-6">{project.description}</p>
      
      <div className="grid grid-cols-2 gap-4">
        
  {project.liveUrl ? (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-turquoise hover:bg-turquoise/80 text-dark-bg font-bold py-2 px-4 rounded-lg transition-colors text-center"
    >
      View Project
    </a>
  ) : (
    <button
      disabled
      className="bg-gray-300 text-gray-500 font-bold py-2 px-4 rounded-lg transition-colors text-center cursor-not-allowed opacity-50"
    >
      View Project
    </button>
  )}

  {project.sourceUrl ? (
    <a
      href={project.sourceUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="border border-turquoise text-turquoise hover:bg-turquoise/10 font-bold py-2 px-4 rounded-lg transition-colors text-center"
    >
      Source Code
    </a>
  ) : (
    <button
      disabled
      className="border border-gray-300 text-gray-500 font-bold py-2 px-4 rounded-lg text-center cursor-not-allowed opacity-50"
    >
      Source Code
    </button>
  )}
</div>

      
      <div className="mt-6">
        <h3 className="text-white font-semibold mb-2">Technologies</h3>
        <div className="flex flex-wrap gap-2">
          {project.technology === 'Python' && (
            <>
              <span className="px-2 py-1 bg-turquoise/10 text-turquoise text-xs rounded-full">Python</span>
              <span className="px-2 py-1 bg-turquoise/10 text-turquoise text-xs rounded-full">Flask</span>
              <span className="px-2 py-1 bg-turquoise/10 text-turquoise text-xs rounded-full">PyTorch</span>
            </>
          )}
          
          {project.technology === 'C#' && (
            <>
              <span className="px-2 py-1 bg-turquoise/10 text-turquoise text-xs rounded-full">C#</span>
              <span className="px-2 py-1 bg-turquoise/10 text-turquoise text-xs rounded-full">.NET</span>
              <span className="px-2 py-1 bg-turquoise/10 text-turquoise text-xs rounded-full">Entity Framework</span>
            </>
          )}
          
          {project.technology === 'Unity' && (
            <>
              <span className="px-2 py-1 bg-turquoise/10 text-turquoise text-xs rounded-full">Unity</span>
              <span className="px-2 py-1 bg-turquoise/10 text-turquoise text-xs rounded-full">C#</span>
              <span className="px-2 py-1 bg-turquoise/10 text-turquoise text-xs rounded-full">3D Modeling</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
