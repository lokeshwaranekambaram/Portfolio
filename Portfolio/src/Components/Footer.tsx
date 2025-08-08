import React from 'react';
import { Code2, Heart, Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Code2 className="h-6 w-6 text-teal-400" />
            <span className="text-white font-bold text-lg">LOKESHWARAN E</span>
          </div>

          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-400" />
            <span>and</span>
            <Coffee className="h-4 w-4 text-yellow-400" />
            <span>by  Loki © {currentYear}</span>
          </div>

          <div className="mt-4 md:mt-0">
            <p className="text-gray-500 text-xs">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            This portfolio showcases my journey as a Computer Science Engineering student. 
            All projects and achievements are representative of my actual work and experience.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;