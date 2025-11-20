import { Github, Linkedin, Mail, Phone, Download } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-2xl shadow-blue-500/50 ring-4 ring-blue-500/20">
                LE
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Lokeshwaran E
            </h1>

            <p className="text-xl md:text-2xl text-cyan-400 mb-6">
              Final Year CSE Student | AI Enthusiast | Full Stack Developer
            </p>

            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
              Bachelor of Engineering in Computer Science with Honours in Artificial Intelligence
              <br />
              R.M.D. Engineering College | Expected May 2026 | CGPA: 8.16/10
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a
                href="mailto:lokesh22905@gmail.com"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40"
              >
                <Mail size={20} />
                Get In Touch
              </a>
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 bg-slate-800/80 backdrop-blur-sm text-slate-100 rounded-lg hover:bg-slate-700/80 transition-all shadow-lg border border-slate-700"
              >
                View Projects
              </a>
            </div>

            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/lokeshwaranekambaram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Github size={28} />
              </a>
              <a
                href="https://linkedin.com/in/lokeshwaranekambaram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="mailto:lokesh22905@gmail.com"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Mail size={28} />
              </a>
              <a
                href="tel:+918098963050"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Phone size={28} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}