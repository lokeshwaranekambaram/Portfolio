import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = ['Full-Stack Developer', 'AI/ML Enthusiast', 'Problem Solver', 'Tech Innovator'];

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < texts[currentIndex].length) {
          setCurrentText(texts[currentIndex].substring(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-orange-500/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Hi, I'm </span>
            <span className="bg-gradient-to-r from-teal-400 to-orange-500 bg-clip-text text-transparent">
              LOKESHWARAN E
            </span>
          </h1>
          
          <div className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 h-12">
            <span>I'm a </span>
            <span className="text-teal-400 font-semibold">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            Final year Computer Science Engineering student passionate about creating innovative 
            solutions through code. Specialized in full-stack development and artificial intelligence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <button className="bg-gradient-to-r from-teal-500 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              View My Work
            </button>
            
            <button className="flex items-center space-x-2 border border-teal-400 text-teal-400 px-8 py-3 rounded-lg font-semibold hover:bg-teal-400/10 transition-all duration-300">
              <Download className="h-5 w-5" />
              <span>Download CV</span>
            </button>
          </div>

          <div className="flex items-center justify-center space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:lokesh22905@gmail.com"
              className="text-gray-400 hover:text-teal-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-teal-400 transition-colors duration-300 animate-bounce"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default Hero;