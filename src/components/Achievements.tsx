import { Trophy, Users, Target } from 'lucide-react';

export default function Achievements() {
  return (
    <section className="py-20 px-6 bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Achievements & Leadership
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 backdrop-blur-sm rounded-xl p-8 border-l-4 border-yellow-500 border border-yellow-500/20 hover:shadow-lg hover:shadow-yellow-500/10 transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-yellow-500/30">
              <Trophy className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Competitive Success
            </h3>
            <p className="text-slate-300">
              Ranked in the <span className="font-semibold text-yellow-400">Top 46</span> in the VIT Coding Competition
              conducted by VIT University, demonstrating strong problem-solving abilities.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-sm rounded-xl p-8 border-l-4 border-blue-500 border border-blue-500/20 hover:shadow-lg hover:shadow-blue-500/10 transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-blue-500/30">
              <Users className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Team Leadership
            </h3>
            <p className="text-slate-300">
              Led teams in hackathons, paper presentations, and capstone projects,
              demonstrating strong leadership and collaboration skills across diverse technical challenges.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-sm rounded-xl p-8 border-l-4 border-green-500 border border-green-500/20 hover:shadow-lg hover:shadow-green-500/10 transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-green-500/30">
              <Target className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Event Management
            </h3>
            <p className="text-slate-300">
              Coordinated symposium events and managed support and registration,
              ensuring smooth execution through effective cross-functional team collaboration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}