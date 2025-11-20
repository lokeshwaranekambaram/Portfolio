import { GraduationCap, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <GraduationCap className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Education</h3>
            <p className="text-slate-600">
              Pursuing B.E. in CSE with Honours in AI at R.M.D. Engineering College with 8.16 CGPA
            </p>
          </div>

          <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
              <Award className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Achievements</h3>
            <p className="text-slate-600">
              Top 46 in VIT Coding Competition and published research paper on Mental Health AI
            </p>
          </div>

          <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl">
            <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
              <Users className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Leadership</h3>
            <p className="text-slate-600">
              Led teams in hackathons, coordinated symposium events, and managed cross-functional projects
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-slate-600 leading-relaxed">
            I'm a passionate final year Computer Science student specializing in Artificial Intelligence.
            With a strong foundation in full-stack development and machine learning, I've built impactful
            projects ranging from AI-powered chatbots to comprehensive web applications. I thrive in
            collaborative environments and have demonstrated leadership through hackathons, research
            publications, and team projects.
          </p>
        </div>
      </div>
    </section>
  );
}