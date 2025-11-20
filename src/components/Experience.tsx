import { Briefcase, Book, Award } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Experience & Certifications
        </h2>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/30">
              <Briefcase className="text-white" size={20} />
            </div>
            <h3 className="text-2xl font-bold text-white">Internship Experience</h3>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-sm rounded-xl p-8 border-l-4 border-blue-500 border border-blue-500/20">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-bold text-white">Web Developer Intern</h4>
                  <p className="text-cyan-400 font-semibold">Learn Fusion</p>
                </div>
                <div className="text-slate-300">
                  <p>Jun 2024 – Jul 2024</p>
                  <p className="text-sm">Remote</p>
                </div>
              </div>
              <ul className="space-y-2 text-slate-300">
                <li className="flex gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Developed and maintained responsive, user-friendly, and visually appealing websites</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Collaborated with cross-functional teams to optimize website performance, user experience, and SEO</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-sm rounded-xl p-8 border-l-4 border-green-500 border border-green-500/20">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-bold text-white">Software Development Intern</h4>
                  <p className="text-green-400 font-semibold">TechVenture Solutions</p>
                </div>
                <div className="text-slate-300">
                  <p>Jan 2024 – Mar 2024</p>
                  <p className="text-sm">Hybrid</p>
                </div>
              </div>
              <ul className="space-y-2 text-slate-300">
                <li className="flex gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Developed RESTful APIs using Spring Boot and integrated with frontend React applications</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Implemented authentication and authorization features using JWT and Spring Security</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Participated in code reviews and agile development processes, improving code quality by 25%</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-900/30 to-amber-900/30 backdrop-blur-sm rounded-xl p-8 border-l-4 border-orange-500 border border-orange-500/20">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-bold text-white">Machine Learning Intern</h4>
                  <p className="text-orange-400 font-semibold">DataMinds AI</p>
                </div>
                <div className="text-slate-300">
                  <p>Aug 2023 – Oct 2023</p>
                  <p className="text-sm">Remote</p>
                </div>
              </div>
              <ul className="space-y-2 text-slate-300">
                <li className="flex gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Built and trained machine learning models for sentiment analysis and classification tasks</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Performed data preprocessing, feature engineering, and model evaluation using scikit-learn</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Collaborated with data engineers to deploy models in production environments using Flask</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center shadow-lg shadow-green-500/30">
              <Book className="text-white" size={20} />
            </div>
            <h3 className="text-2xl font-bold text-white">Publications</h3>
          </div>

          <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-sm rounded-xl p-6 border-l-4 border-green-500 border border-green-500/20">
            <h4 className="text-lg font-bold text-white mb-2">
              Mental Health Chatbot Using Sentiment Analysis
            </h4>
            <p className="text-green-400 font-semibold">Published at RING'25</p>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/30">
              <Award className="text-white" size={20} />
            </div>
            <h3 className="text-2xl font-bold text-white">Certifications</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Software Engineer Role Certification', org: 'HackerRank', date: 'Feb 2025', level: 'Professional' },
              { title: 'REST API (Intermediate)', org: 'HackerRank', date: 'Jan 2025', level: 'Intermediate' },
              { title: 'SQL (Intermediate)', org: 'HackerRank', date: 'Jan 2025', level: 'Intermediate' },
              { title: 'Python Foundation Certification', org: 'Infosys SpringBoard', date: 'Dec 2024', level: 'Foundation' },
              { title: 'SQL (Basic)', org: 'HackerRank', date: 'Nov 2024', level: 'Basic' },
              { title: 'Python (Basic)', org: 'HackerRank', date: 'Sep 2024', level: 'Basic' },
              { title: 'Java Programming Masterclass', org: 'Udemy', date: 'Aug 2024', level: 'Advanced' },
              { title: 'React - The Complete Guide', org: 'Udemy', date: 'Jul 2024', level: 'Advanced' },
              { title: 'Machine Learning A-Z', org: 'Udemy', date: 'Jun 2024', level: 'Intermediate' },
              { title: 'AWS Cloud Practitioner', org: 'Amazon Web Services', date: 'May 2024', level: 'Foundation' },
              { title: 'Git & GitHub Complete Guide', org: 'Coursera', date: 'Apr 2024', level: 'Intermediate' },
              { title: 'Data Structures & Algorithms', org: 'Coursera', date: 'Mar 2024', level: 'Advanced' },
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10 transition-all group"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-white group-hover:text-orange-400 transition-colors">{cert.title}</h4>
                  <span className={`text-xs px-2 py-1 rounded ${
                    cert.level === 'Advanced' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                    cert.level === 'Professional' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                    cert.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                    'bg-green-500/20 text-green-400 border border-green-500/30'
                  }`}>
                    {cert.level}
                  </span>
                </div>
                <p className="text-sm text-orange-400 font-medium">{cert.org}</p>
                <p className="text-xs text-slate-400 mt-1">Completed: {cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}