import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">
          Let's Connect
        </h2>
        <p className="text-slate-300 text-center mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <a
            href="mailto:lokesh22905@gmail.com"
            className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all border-2 border-slate-700/50 hover:border-blue-500"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                <Mail className="text-blue-400 group-hover:text-white transition-colors" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Email</h3>
                <p className="text-slate-300 text-sm">lokesh22905@gmail.com</p>
              </div>
            </div>
          </a>

          {/* <a
            href="tel:+918098963050"
            className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl hover:shadow-green-500/20 transition-all border-2 border-slate-700/50 hover:border-green-500"
          > */}
          <a
            href="wa.me/918098963050"
            className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl hover:shadow-green-500/20 transition-all border-2 border-slate-700/50 hover:border-green-500"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:bg-green-500 transition-colors">
                <Phone className="text-green-400 group-hover:text-white transition-colors" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Phone</h3>
                {/* <p className="text-slate-300 text-sm">+91 8098963050</p> */}
              </div>
            </div>
          </a>

          <a
            href="https://github.com/lokeshwaranekambaram"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl hover:shadow-slate-500/20 transition-all border-2 border-slate-700/50 hover:border-slate-500"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-500/20 rounded-lg flex items-center justify-center group-hover:bg-slate-500 transition-colors">
                <Github className="text-slate-400 group-hover:text-white transition-colors" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">GitHub</h3>
                <p className="text-slate-300 text-sm">lokeshwaranekambaram</p>
              </div>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/lokeshwaranekambaram"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all border-2 border-slate-700/50 hover:border-blue-500"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                <Linkedin className="text-blue-400 group-hover:text-white transition-colors" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">LinkedIn</h3>
                <p className="text-slate-300 text-sm">lokeshwaranekambaram</p>
              </div>
            </div>
          </a>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-center text-white shadow-2xl shadow-blue-500/20">
          <Send className="mx-auto mb-4" size={48} />
          <h3 className="text-2xl font-bold mb-2">Ready to Collaborate?</h3>
          <p className="mb-6 opacity-90">
            Whether it's a project, internship, or just a conversation about tech, I'd love to hear from you!
          </p>
          <a
            href="mailto:lokesh22905@gmail.com"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-slate-100 transition-colors shadow-lg"
          >
            Send Message
          </a>
        </div>
      </div>
    </section>
  );
}