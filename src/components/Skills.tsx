import { Code, Database, Brain, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: ['C++', 'C', 'Java', 'Python'],
    color: 'blue',
  },
  {
    title: 'Web Development',
    icon: Wrench,
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js', 'Spring Boot'],
    color: 'green',
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MySQL', 'PostgreSQL', 'MongoDB'],
    color: 'purple',
  },
  {
    title: 'Machine Learning',
    icon: Brain,
    skills: ['NumPy', 'Pandas', 'NLTK', 'Scikit-learn', 'TensorFlow'],
    color: 'orange',
  },
];

const colorClasses = {
  blue: {
    bg: 'bg-blue-600',
    gradient: 'from-blue-50 to-cyan-50',
    text: 'text-blue-700',
    badge: 'bg-blue-100',
  },
  green: {
    bg: 'bg-green-600',
    gradient: 'from-green-50 to-emerald-50',
    text: 'text-green-700',
    badge: 'bg-green-100',
  },
  purple: {
    bg: 'bg-purple-600',
    gradient: 'from-purple-50 to-pink-50',
    text: 'text-purple-700',
    badge: 'bg-purple-100',
  },
  orange: {
    bg: 'bg-orange-600',
    gradient: 'from-orange-50 to-amber-50',
    text: 'text-orange-700',
    badge: 'bg-orange-100',
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">
          Technical Skills
        </h2>
        <p className="text-slate-300 text-center mb-12 max-w-2xl mx-auto">
          A comprehensive toolkit spanning modern development technologies and AI frameworks
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const colors = colorClasses[category.color as keyof typeof colorClasses];

            return (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-600 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 bg-gradient-to-br ${colors.bg} rounded-lg flex items-center justify-center shadow-lg`}>
                    <Icon className="text-white" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-slate-700/50 text-slate-200 rounded-lg font-medium text-sm border border-slate-600/50 hover:border-slate-500 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}