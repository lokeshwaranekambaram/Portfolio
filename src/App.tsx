import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
      </div>

      <div className="relative z-10">
        {/* <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Lokeshwaran E
              </h1>
              <div className="hidden md:flex gap-8">
                <a href="#about" className="text-slate-300 hover:text-cyan-400 transition-colors">About</a>
                <a href="#projects" className="text-slate-300 hover:text-cyan-400 transition-colors">Projects</a>
                <a href="#experience" className="text-slate-300 hover:text-cyan-400 transition-colors">Experience</a>
                <a href="#skills" className="text-slate-300 hover:text-cyan-400 transition-colors">Skills</a>
                <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </nav> */}
        
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Achievements />
        <Contact />

        <footer className="bg-slate-950 border-t border-slate-800 text-white py-8">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-slate-400">© 2025 Lokeshwaran E. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
