import React from 'react';
import { GraduationCap, Award, Users, Code } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '15+' },
    { icon: GraduationCap, label: 'CGPA', value: '8.7' },
    { icon: Award, label: 'Certifications', value: '8' },
    { icon: Users, label: 'Team Projects', value: '6' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate about technology and innovation, I'm dedicated to creating impactful solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-teal-500/20 to-orange-500/20 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a final year Computer Science Engineering student at XYZ University with a passion 
                for developing innovative software solutions. My journey in tech started with curiosity 
                about how things work and evolved into a deep love for creating digital experiences 
                that make a difference.
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-500/20 to-teal-500/20 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-4">What Drives Me</h3>
              <p className="text-gray-300 leading-relaxed">
                I believe in the power of technology to solve real-world problems. Whether it's 
                developing web applications, exploring AI/ML algorithms, or collaborating on 
                team projects, I approach every challenge with enthusiasm and a growth mindset.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-700/50 backdrop-blur-sm p-6 rounded-lg text-center hover:bg-gray-700/70 transition-all duration-300 hover:scale-105"
              >
                <stat.icon className="h-8 w-8 text-teal-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;