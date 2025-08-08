import React, { useState, useEffect, useRef } from 'react';

interface Skill {
  name: string;
  percentage: number;
  color: string;
}

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const technicalSkills: Skill[] = [
    { name: 'JavaScript/TypeScript', percentage: 90, color: 'bg-gradient-to-r from-yellow-400 to-yellow-600' },
    { name: 'React/Next.js', percentage: 85, color: 'bg-gradient-to-r from-blue-400 to-blue-600' },
    { name: 'Node.js/Express', percentage: 80, color: 'bg-gradient-to-r from-green-400 to-green-600' },
    { name: 'Python', percentage: 88, color: 'bg-gradient-to-r from-blue-500 to-yellow-500' },
    { name: 'Java', percentage: 75, color: 'bg-gradient-to-r from-red-400 to-orange-500' },
    { name: 'SQL/MongoDB', percentage: 82, color: 'bg-gradient-to-r from-purple-400 to-purple-600' },
  ];

  const otherSkills: Skill[] = [
    { name: 'Machine Learning', percentage: 78, color: 'bg-gradient-to-r from-teal-400 to-teal-600' },
    { name: 'Data Structures & Algorithms', percentage: 85, color: 'bg-gradient-to-r from-indigo-400 to-indigo-600' },
    { name: 'Git/GitHub', percentage: 88, color: 'bg-gradient-to-r from-gray-600 to-gray-800' },
    { name: 'AWS/Cloud', percentage: 70, color: 'bg-gradient-to-r from-orange-400 to-orange-600' },
    { name: 'Docker', percentage: 65, color: 'bg-gradient-to-r from-blue-500 to-cyan-500' },
    { name: 'System Design', percentage: 72, color: 'bg-gradient-to-r from-pink-400 to-pink-600' },
  ];

  const tools = [
    'VS Code', 'IntelliJ IDEA', 'Postman', 'Figma', 'Jupyter Notebook', 
    'Git', 'Docker', 'AWS', 'Firebase', 'Vercel'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const SkillBar: React.FC<{ skill: Skill; delay: number }> = ({ skill, delay }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-medium">{skill.name}</span>
        <span className="text-teal-400 font-semibold">{skill.percentage}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
        <div
          className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
          style={{
            width: isVisible ? `${skill.percentage}%` : '0%',
            transitionDelay: `${delay}ms`,
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Programming & Frameworks</h3>
            {technicalSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} delay={index * 100} />
            ))}
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Technologies & Concepts</h3>
            {otherSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} delay={(index + 6) * 100} />
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gray-800/30 backdrop-blur-sm rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Tools & Platforms</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {tools.map((tool, index) => (
              <div
                key={tool}
                className="bg-gray-700/50 text-center py-3 px-4 rounded-lg text-gray-300 hover:text-teal-400 hover:bg-gray-700/70 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;