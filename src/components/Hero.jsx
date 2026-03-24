import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-40 overflow-hidden bg-[#020617]">
      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,#6366F120,transparent_50%)]"></div>

      <div className="absolute inset-0 -z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-indigo-300 text-sm font-medium mb-8"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
          </span>
          Next-gen Discovery Engine
        </motion.div>
        
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-6xl md:text-8xl font-black text-white leading-tight mb-8 tracking-tighter"
        >
          Find the Right <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-blue-400">
            Government Scheme
          </span>
        </motion.h1>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Discover eligibility, benefits, and step-by-step guides for hundreds of schemes using our AI-driven search and recommendation engine.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
