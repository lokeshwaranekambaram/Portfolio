import React from 'react';
import { ExternalLink, Github, Calendar, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'EcoTrack - Sustainability Platform',
      description: 'A comprehensive platform for tracking environmental impact and promoting sustainable practices',
      longDescription: 'Full-stack web application that helps users track their carbon footprint, discover eco-friendly alternatives, and connect with sustainability communities.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Chart.js'],
      image: 'https://images.pexels.com/photos/3850512/pexels-photo-3850512.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com',
      demo: 'https://ecotrack-demo.vercel.app',
      featured: true,
      date: '2024'
    },
    {
      id: 2,
      title: 'AI-Powered Code Review Assistant',
      description: 'Machine learning model that analyzes code quality and suggests improvements',
      longDescription: 'Developed using Python and TensorFlow, this tool uses natural language processing to analyze code patterns and provide intelligent suggestions for code optimization.',
      tech: ['Python', 'TensorFlow', 'NLP', 'Flask', 'Docker'],
      image: 'https://images.pexels.com/photos/5474293/pexels-photo-5474293.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com',
      demo: 'https://code-assistant-demo.herokuapp.com',
      featured: true,
      date: '2024'
    },
    {
      id: 3,
      title: 'Real-time Chat Application',
      description: 'Modern chat app with real-time messaging, file sharing, and video calls',
      longDescription: 'Built with React and Socket.io, featuring real-time messaging, file sharing, user authentication, and WebRTC integration for video calls.',
      tech: ['React', 'Socket.io', 'Node.js', 'WebRTC', 'Redis'],
      image: 'https://images.pexels.com/photos/7008047/pexels-photo-7008047.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com',
      demo: 'https://chat-app-demo.netlify.app',
      featured: false,
      date: '2023'
    },
    {
      id: 4,
      title: 'Smart Campus Management System',
      description: 'Comprehensive platform for managing campus resources and student services',
      longDescription: 'Full-stack application for university administration, including student registration, course management, facility booking, and resource allocation.',
      tech: ['Java', 'Spring Boot', 'MySQL', 'Angular', 'Bootstrap'],
      image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com',
      demo: 'https://campus-management-demo.vercel.app',
      featured: false,
      date: '2023'
    },
    {
      id: 5,
      title: 'Blockchain Voting System',
      description: 'Secure and transparent voting platform using blockchain technology',
      longDescription: 'Decentralized voting application built on Ethereum blockchain, ensuring transparency, security, and immutability of voting records.',
      tech: ['Solidity', 'Web3.js', 'React', 'MetaMask', 'Ganache'],
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com',
      demo: 'https://blockchain-voting-demo.netlify.app',
      featured: false,
      date: '2023'
    },
    {
      id: 6,
      title: 'Personal Finance Tracker',
      description: 'Mobile-responsive app for tracking expenses and financial goals',
      longDescription: 'Progressive web application with data visualization, budget planning, expense categorization, and financial goal tracking features.',
      tech: ['Vue.js', 'PWA', 'Firebase', 'Chart.js', 'Tailwind CSS'],
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com',
      demo: 'https://finance-tracker-demo.vercel.app',
      featured: false,
      date: '2022'
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const ProjectCard = ({ project, featured = false }) => (
    <div className={`bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl group ${
      featured ? 'lg:col-span-2' : ''
    }`}>
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 left-4 flex space-x-2">
          {project.featured && (
            <span className="bg-gradient-to-r from-teal-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
              <Star className="h-3 w-3" />
              <span>Featured</span>
            </span>
          )}
          <span className="bg-gray-900/80 text-gray-300 px-2 py-1 rounded-full text-xs flex items-center space-x-1">
            <Calendar className="h-3 w-3" />
            <span>{project.date}</span>
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
          {featured ? project.longDescription : project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="bg-gray-700/50 text-teal-400 px-2 py-1 rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-400 hover:text-teal-400 transition-colors duration-300"
          >
            <Github className="h-4 w-4" />
            <span className="text-sm">Code</span>
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-400 hover:text-orange-400 transition-colors duration-300"
          >
            <ExternalLink className="h-4 w-4" />
            <span className="text-sm">Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my technical skills
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Star className="h-6 w-6 text-teal-400 mr-2" />
            Featured Projects
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured={true} />
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Github className="h-5 w-5" />
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;