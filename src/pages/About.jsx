import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Target, Zap, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Chatbot from '../components/Chatbot';

const About = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans overflow-hidden">
      <Navbar />
      
      {/* Background Glow */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/10 blur-[120px] rounded-full -z-10" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-600/5 blur-[120px] rounded-full -z-10" />

      <main className="pt-24 sm:pt-40 pb-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 sm:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-[10px] font-black tracking-widest uppercase mb-4">
              <Sparkles size={12} /> Mission Control
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase">
              EMPOWERING <br/> <span className="text-slate-500">INDIVIDUALS.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl">
              Lunar Voyager is the next-gen discovery platform for government schemes, using AI to bridge the gap between complex policy and eligible citizens.
            </p>
            <div className="flex gap-4 pt-4">
               <button className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-white text-black font-black uppercase tracking-widest text-[10px] sm:text-xs rounded-2xl hover:bg-slate-200 transition-all active:scale-95 shadow-2xl shadow-white/5 flex items-center justify-center gap-2">
                 Join the Mission <ChevronRight size={16} />
               </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-white/5 border border-white/10 rounded-[40px] sm:rounded-[60px] p-6 sm:p-8 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full relative z-10">
                <ValueCard icon={<Shield className="text-indigo-400" />} title="Transparency" desc="Direct links to verified government sources." />
                <ValueCard icon={<Target className="text-emerald-400" />} title="Precision" desc="AI-driven eligibility matching system." />
                <ValueCard icon={<Zap className="text-amber-400" />} title="Speed" desc="Instant access to document checklists." />
                <ValueCard icon={<Sparkles className="text-pink-400" />} title="Innovation" desc="Premium user experience for everyone." />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Vision Section */}
        <section className="py-16 sm:py-24 border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            <div>
              <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-4 overflow-hidden relative">The Vision</h3>
              <p className="text-2xl sm:text-3xl font-bold tracking-tighter leading-tight text-white uppercase">
                Eliminating bureaucratic complexity through intelligent automation.
              </p>
            </div>
            <div className="md:col-span-2 text-base sm:text-lg text-slate-400 leading-relaxed space-y-6">
              <p>
                In a country as vast as India, thousands of government schemes go unused simply because of a lack of awareness or the complexity of the application process. Lunar Voyager addresses this by centralizing knowledge.
              </p>
              <p>
                Our platform doesn't just list schemes; it guides you through them. From calculating income eligibility to providing a detailed task list for your local tehsil visit, we ensure you never miss a benefit you are entitled to.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Chatbot />
    </div>
  );
};

const ValueCard = ({ icon, title, desc }) => (
  <div className="bg-[#020617] p-6 rounded-3xl border border-white/10 shadow-sm hover:border-indigo-500/30 transition-colors">
    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6">{icon}</div>
    <h4 className="text-white font-black uppercase text-xs tracking-widest mb-2">{title}</h4>
    <p className="text-slate-500 text-[11px] leading-relaxed uppercase font-bold tracking-wider">{desc}</p>
  </div>
);

export default About;
