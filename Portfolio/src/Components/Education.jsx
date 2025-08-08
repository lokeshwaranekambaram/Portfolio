import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Trophy } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology - Computer Science Engineering',
      institution: 'XYZ University',
      location: 'Mumbai, India',
      period: '2021 - 2025',
      cgpa: '8.7/10',
      description: 'Specializing in Software Engineering and Artificial Intelligence',
      coursework: [
        'Data Structures & Algorithms',
        'Database Management Systems',
        'Machine Learning',
        'Software Engineering',
        'Computer Networks',
        'Operating Systems',
        'Web Technologies',
        'Artificial Intelligence'
      ],
      achievements: [
        'Dean\'s List for 6 consecutive semesters',
        'Best Project Award for AI-based Code Review System',
        'Technical Lead - University Coding Club',
        'Winner - Inter-University Programming Contest'
      ]
    },
    {
      degree: 'Higher Secondary Certificate (XII)',
      institution: 'ABC Senior Secondary School',
      location: 'Mumbai, India',
      period: '2019 - 2021',
      cgpa: '92.5%',
      description: 'Science Stream with Computer Science',
      coursework: [
        'Physics',
        'Chemistry',
        'Mathematics',
        'Computer Science',
        'English'
      ],
      achievements: [
        'School Topper in Computer Science',
        'State Level Science Olympiad - Gold Medal',
        'Head Boy - Student Council',
        'Best Student Award 2021'
      ]
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2024',
      icon: '☁️'
    },
    {
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2024',
      icon: '🌐'
    },
    {
      name: 'Machine Learning Specialization',
      issuer: 'Stanford University (Coursera)',
      date: '2023',
      icon: '🤖'
    },
    {
      name: 'Full Stack Web Development',
      issuer: 'freeCodeCamp',
      date: '2023',
      icon: '💻'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My academic journey and continuous learning path in computer science
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative mb-16">
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-teal-500 to-orange-500"></div>

          {education.map((edu, index) => (
            <div
              key={index}
              className={`relative flex items-start mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-teal-500 to-orange-500 rounded-full border-4 border-gray-900 z-10"></div>

              {/* Content card */}
              <div className={`ml-20 md:ml-0 md:w-5/12 ${
                index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
              }`}>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-gray-800/70 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                      <p className="text-teal-400 font-medium mb-1">{edu.institution}</p>
                      <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm mb-2">
                        <span className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{edu.period}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{edu.location}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Award className="h-4 w-4" />
                          <span>{edu.cgpa}</span>
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm mb-4">{edu.description}</p>
                    </div>
                    <GraduationCap className="h-8 w-8 text-teal-400 flex-shrink-0 ml-4" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-white font-semibold mb-2 flex items-center">
                        <BookOpen className="h-4 w-4 mr-2 text-teal-400" />
                        Key Coursework
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {edu.coursework.map((course, courseIndex) => (
                          <span
                            key={courseIndex}
                            className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-2 flex items-center">
                        <Trophy className="h-4 w-4 mr-2 text-orange-400" />
                        Achievements
                      </h4>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-gray-300 text-xs flex items-start">
                            <span className="text-orange-400 mr-2 mt-1.5 block w-1 h-1 bg-orange-400 rounded-full flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center">
            <Award className="h-6 w-6 mr-2 text-teal-400" />
            Certifications & Online Learning
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-700/50 p-6 rounded-lg text-center hover:bg-gray-700/70 transition-all duration-300 hover:scale-105"
              >
                <div className="text-3xl mb-3">{cert.icon}</div>
                <h4 className="text-white font-semibold mb-2 text-sm">{cert.name}</h4>
                <p className="text-teal-400 text-xs mb-1">{cert.issuer}</p>
                <p className="text-gray-400 text-xs">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;