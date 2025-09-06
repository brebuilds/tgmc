import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add mouse tracking for card-gradient and bg-gray-100 elements
document.addEventListener('DOMContentLoaded', () => {
  const addMouseTracking = () => {
    const cardElements = document.querySelectorAll('.card-gradient');
    const bgElements = document.querySelectorAll('.bg-gray-100');
    
    [...cardElements, ...bgElements].forEach((element) => {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        (element as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (element as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
      };
      
      element.addEventListener('mousemove', handleMouseMove);
    });
  };
  
  // Initial setup
  addMouseTracking();
  
  // Re-run when new content is added (for dynamic content)
  const observer = new MutationObserver(() => {
    addMouseTracking();
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
});

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
