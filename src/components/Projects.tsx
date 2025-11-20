import { Brain, Hotel, Users, ShoppingCart, ListChecks, Cpu, GraduationCap } from 'lucide-react';

const projects = [
  {
    title: 'Mental Health Chatbot',
    icon: Brain,
    description: 'Developed an AI Mental Health Chatbot using sentiment analysis with 78.22% emotion classification accuracy using a BiLSTM model.',
    tech: ['Flutter', 'NLTK', 'NumPy', 'Pandas', 'Flask', 'React', 'Python'],
    gradient: 'from-purple-500 to-pink-500',
    published: 'Published research paper at RING\'25',
  },
  {
    title: 'Hotel Reservation API',
    icon: Hotel,
    description: 'Built a comprehensive backend for hotel booking with user management, room availability, booking handling, and payment integration.',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'Hibernate', 'MySQL', 'REST API'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Mingle - Group Study App',
    icon: Users,
    description: 'Created a collaborative web application for students to join study groups, attend virtual meetings, take quizzes, and access shared resources.',
    tech: ['React.js', 'JavaScript', 'Spring Boot', 'REST APIs', 'Git'],
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'E-Commerce Platform',
    icon: ShoppingCart,
    description: 'Full-stack e-commerce solution with product catalog, shopping cart, secure checkout, order tracking, and admin dashboard for inventory management.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'JWT'],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: 'Task Management API',
    icon: ListChecks,
    description: 'RESTful API for task management with user authentication, role-based access control, real-time notifications, and comprehensive project tracking.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'WebSocket', 'Docker'],
    gradient: 'from-teal-500 to-cyan-500',
  },
  {
    title: 'ML Image Classifier',
    icon: Cpu,
    description: 'Deep learning model for multi-class image classification achieving 92% accuracy using CNN architecture with data augmentation and transfer learning.',
    tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'NumPy', 'Matplotlib'],
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    title: 'Learning Management System',
    icon: GraduationCap,
    description: 'Comprehensive LMS platform with course management, video streaming, assignments, quizzes, progress tracking, and student-teacher interaction features.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'AWS S3', 'Tailwind'],
    gradient: 'from-yellow-500 to-orange-500',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">
          Featured Projects
        </h2>
        <p className="text-slate-300 text-center mb-12 max-w-2xl mx-auto">
          A showcase of my technical work spanning AI, full-stack development, and collaborative platforms
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-slate-600 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />
                <div className="p-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="text-white" size={24} />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {project.published && (
                    <div className="mb-4 px-3 py-1 bg-green-500/20 border border-green-500/30 text-green-400 text-xs rounded-full inline-block">
                      {project.published}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-md border border-slate-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}