import React from 'react';
import { Briefcase, Calendar, MapPin, Award, Users, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Machine Learning Research Assistant',
      company: 'University Research Lab',
      location: 'XYZ University',
      period: 'Jan 2024 - May 2024',
      type: 'project',
      description: [
        'Conducted research on natural language processing algorithms',
        'Developed sentiment analysis models with 89% accuracy using Python and TensorFlow',
        'Published findings in university research journal',
        'Presented research at student conference with 200+ attendees'
      ],
      skills: ['Python', 'TensorFlow', 'NLP', 'Research', 'Data Analysis'],
      icon: TrendingUp
    },
    {
      id: 2,
      title: 'Technical Team Lead',
      company: 'Coding Club - XYZ University',
      location: 'XYZ University',
      period: 'Aug 2023 - Present',
      type: 'achievement',
      description: [
        'Leading a team of 15 developers in organizing hackathons and workshops',
        'Mentored 50+ junior students in programming and development',
        'Organized 5 successful technical events with 500+ participants',
        'Established partnerships with tech companies for sponsorships and internships'
      ],
      skills: ['Leadership', 'Event Management', 'Mentoring', 'Team Building'],
      icon: Users
    },
    {
      id: 3,
      title: 'Winner - National Hackathon',
      company: 'CodeFest 2024',
      location: 'New Delhi, India',
      period: 'Mar 2024',
      type: 'achievement',
      description: [
        'Won first place among 200+ teams in 48-hour hackathon',
        'Developed AI-powered accessibility tool for visually impaired users',
        'Received recognition from industry experts and potential investors',
        'Featured in tech publications and university newsletter'
      ],
      skills: ['Innovation', 'AI/ML', 'Accessibility', 'Rapid Prototyping'],
      icon: Award
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'internship': return 'from-blue-500 to-blue-600';
      case 'project': return 'from-green-500 to-green-600';
      case 'achievement': return 'from-orange-500 to-orange-600';
      default: return 'from-teal-500 to-teal-600';
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'internship': return 'Internship';
      case 'project': return 'Research';
      case 'achievement': return 'Achievement';
      default: return 'Experience';
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Experience & Achievements</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey, research work, and notable accomplishments
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-teal-500 to-orange-500"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-teal-500 to-orange-500 rounded-full border-4 border-gray-900 z-10"></div>

                {/* Content card */}
                <div className={`ml-20 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <span className={`bg-gradient-to-r ${getTypeColor(experience.type)} text-white px-2 py-1 rounded-full text-xs font-semibold`}>
                            {getTypeLabel(experience.type)}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {experience.title}
                        </h3>
                        <p className="text-teal-400 font-medium">{experience.company}</p>
                        <div className="flex items-center space-x-4 text-gray-400 text-sm mt-2">
                          <span className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{experience.period}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{experience.location}</span>
                          </span>
                        </div>
                      </div>
                      <experience.icon className="h-8 w-8 text-teal-400 flex-shrink-0" />
                    </div>

                    <ul className="text-gray-300 space-y-2 mb-4">
                      {experience.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="text-teal-400 mr-2 mt-1.5 block w-1 h-1 bg-teal-400 rounded-full flex-shrink-0"></span>
                          <span className="text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-gray-700/50 text-teal-400 px-2 py-1 rounded text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Looking for Opportunities</h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6">
              I'm actively seeking full-time opportunities in software development, machine learning, 
              or related fields where I can contribute to innovative projects and continue growing 
              as a developer.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-teal-500 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;