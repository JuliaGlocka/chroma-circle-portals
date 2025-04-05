
import React, { useEffect, useState } from 'react';

// Code particles for the animated background
interface CodeParticle {
  id: number;
  x: number;
  y: number;
  text: string;
  opacity: number;
  speed: number;
}

const codeSnippets = [
  'def hello():', 
  'print("Hello")',
  'class Game',
  'int main()',
  'return 0;',
  'public void Start()',
  '#include <iostream>',
  'GameObject.Find()',
  'using System;',
  'Transform.position',
  'Vector3.up',
  'import numpy',
  'if __name__ == "__main__":',
  'useState()',
  'useEffect()',
  'await async',
  '<transform>',
];

const CodeBackground: React.FC = () => {
  const [particles, setParticles] = useState<CodeParticle[]>([]);
  
  useEffect(() => {
    // Create initial particles
    const initialParticles: CodeParticle[] = [];
    const particleCount = Math.min(30, Math.floor(window.innerWidth / 50));
    
    for (let i = 0; i < particleCount; i++) {
      initialParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        opacity: 0.1 + Math.random() * 0.2,
        speed: 0.2 + Math.random() * 0.5,
      });
    }
    
    setParticles(initialParticles);
    
    // Animation loop for floating effect
    const interval = setInterval(() => {
      setParticles(prev => 
        prev.map(particle => {
          // Move particles upward
          let newY = particle.y - particle.speed;
          
          // Reset position if it goes off screen
          if (newY < -50) {
            newY = window.innerHeight + 20;
            return {
              ...particle,
              y: newY,
              x: Math.random() * window.innerWidth,
              text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
            };
          }
          
          return {
            ...particle,
            y: newY,
          };
        })
      );
    }, 50);
    
    // Clean up on unmount
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map(particle => (
        <div 
          key={particle.id}
          className="code-particle"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            opacity: particle.opacity,
          }}
        >
          {particle.text}
        </div>
      ))}
    </div>
  );
};

export default CodeBackground;
