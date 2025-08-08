import React from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink, Users, TrendingUp, Code, Database } from 'lucide-react';

const Internships = () => {
  const internships = [
    {
      id: 1,
      title: 'Full-Stack Development Intern',
      company: 'TechCorp Solutions',
      location: 'Remote',
      period: 'Jun 2024 - Aug 2024',
      duration: '3 months',
      type: 'Remote Internship',
      description: 'Worked on developing and maintaining web applications for enterprise clients',
      responsibilities: [
        'Developed responsive web applications using React.js and Node.js',
        'Collaborated with senior developers to implement new features',
        'Optimized database queries resulting in 40% faster load times',
        'Participated in code reviews and agile development processes',
        'Created comprehensive documentation for API endpoints'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Git', 'Docker'],
      achievements: [
        'Reduced application load time by 40%',
        'Implemented 5+ new features',
        'Received excellent performance review',
        'Mentored 2 junior interns'
      ],
      icon: Code,
      companyLogo: '🚀'
    },
    {
      id: 2,
      title: 'Machine Learning Research Intern',
      company: 'AI Innovations Lab',
      location: 'Bangalore, India',
      period: 'Dec 2023 - Feb 2024',
      duration: '3 months',
      type: 'On-site Internship',
      description: 'Conducted research on natural language processing and computer vision applications',
      responsibilities: [
        'Developed sentiment analysis models with 89% accuracy',
        'Implemented computer vision algorithms for image classification',
        'Conducted literature review on latest ML techniques',
        'Presented research findings to senior researchers',
        'Collaborated on research paper for publication'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'Pandas', 'Jupyter'],
      achievements: [
        'Achieved 89% accuracy in sentiment analysis',
        'Co-authored research paper',
        'Presented at internal research symposium',
        'Developed reusable ML pipeline'
      ],
      icon: TrendingUp,
      companyLogo: '🧠'
    },
    {
      id: 3,
      title: 'Backend Development Intern',
      company: 'StartupXYZ',
      location: 'Mumbai, India',
      period: 'May 2023 - Jul 2023',
      duration: '3 months',
      type: 'Hybrid Internship',
      description: 'Built scalable backend systems and APIs for a growing fintech startup',
      responsibilities: [
        'Designed and implemented RESTful APIs using Python Flask',
        'Optimized database schemas and queries for better performance',
        'Implemented authentication and authorization systems',
        'Set up CI/CD pipelines for automated deployment',
        'Worked closely with frontend team for API integration'
      ],
      technologies: ['Python', 'Flask', 'PostgreSQL', 'Redis', 'AWS', 'Docker'],
      achievements: [
        'Built 10+ API endpoints',
        'Improved system performance by 35%',
        'Implemented secure authentication',
        'Zero downtime deployments'
      ],
      icon: Database,
      companyLogo: '💰'
    }
  ];

  const skills_gained = [
    'Full-Stack Development',
    'Machine Learning',
    'API Development',
    'Database Optimization',
    'Cloud Deployment',
    'Team Collaboration',
    'Agile Methodology',
    'Code Review',
    'Technical Documentation',
    'Problem Solving'
  ];

  return (
    <section id="internships" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Internship Experience</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hands-on industry experience that shaped my professional development
          </p>
        </div>

        {/* Internships Timeline */}
        <div className="relative mb-16">
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-teal-500 to-orange-500"></div>

          {internships.map((internship, index) => (
            <div
              key={internship.id}
              className={`relative flex items-start mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-teal-500 to-orange-500 rounded-full border-4 border-gray-800 z-10"></div>

              {/* Content card */}
              <div className={`ml-20 md:ml-0 md:w-5/12 ${
                index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
              }`}>
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 hover:bg-gray-900/70 transition-all duration-300 hover:scale-105 border border-gray-700/50">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">{internship.companyLogo}</div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{internship.title}</h3>
                        <p className="text-teal-400 font-medium">{internship.company}</p>
                        <div className="flex flex-wrap items-center gap-3 text-gray-400 text-sm mt-2">
                          <span className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{internship.period}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{internship.location}</span>
                          </span>
                          <span className="bg-teal-500/20 text-teal-400 px-2 py-1 rounded-full text-xs">
                            {internship.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                    <internship.icon className="h-8 w-8 text-teal-400 flex-shrink-0" />
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {internship.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                      <Briefcase className="h-4 w-4 mr-2 text-orange-400" />
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-1">
                      {internship.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="text-gray-300 text-sm flex items-start">
                          <span className="text-teal-400 mr-2 mt-1.5 block w-1 h-1 bg-teal-400 rounded-full flex-shrink-0"></span>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {internship.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-700/50 text-teal-400 px-2 py-1 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                      <Users className="h-4 w-4 mr-2 text-orange-400" />
                      Key Achievements
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {internship.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="bg-gradient-to-r from-teal-500/10 to-orange-500/10 p-2 rounded text-sm">
                          <span className="text-gray-300">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Gained Section */}
        <div className="bg-gray-900/30 backdrop-blur-sm rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Skills Gained Through Internships</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skills_gained.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-700/50 text-center py-3 px-4 rounded-lg text-gray-300 hover:text-teal-400 hover:bg-gray-700/70 transition-all duration-300 hover:scale-105"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-teal-500/20 to-orange-500/20 backdrop-blur-sm rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Looking for Internship Opportunities</h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6">
              I'm actively seeking summer internships for 2025 in software development, machine learning, 
              or related fields where I can contribute to innovative projects and continue growing professionally.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-teal-500 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internships;