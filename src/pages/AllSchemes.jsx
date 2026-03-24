import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, LayoutGrid, List as ListIcon, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import SchemeCard from '../components/SchemeCard';
import Chatbot from '../components/Chatbot';
import { schemes } from '../data/schemes';

const AllSchemes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [view, setView] = useState('grid'); // grid or list

  const categories = ['All', 'Student', 'Farmer', 'Business', 'Women', 'Health', 'Welfare', 'Housing', 'Pension', 'Education'];

  const filteredSchemes = useMemo(() => {
    return schemes.filter(s => {
      const matchSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchCategory = category === 'All' || s.category === category;
      return matchSearch && matchCategory;
    });
  }, [searchTerm, category]);

  return (
    <div className="min-h-screen bg-[#020617] text-white pt-32 pb-24 overflow-hidden">
      <Navbar />
      
      {/* Background Glow */}
      <div className="fixed top-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 blur-[120px] rounded-full -z-10" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6">
        <header className="mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-tight mb-8">
            ALL <span className="text-indigo-500">SCHEMES</span>
          </h1>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
            <div className="flex-1 min-w-0 relative group">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-500 transition-colors" size={18} />
               <input 
                 type="text"
                 placeholder="Search by name..."
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}
                 className="w-full bg-[#0F172A] border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-black uppercase tracking-widest placeholder:text-slate-600"
               />
            </div>
            
            <div className="flex items-center gap-2 p-1.5 bg-[#0F172A] border border-white/10 rounded-2xl shrink-0 justify-center">
               <button 
                 onClick={() => setView('grid')}
                 className={`flex-1 sm:flex-none p-3 rounded-xl transition-all ${view === 'grid' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:text-white'}`}
               >
                 <LayoutGrid size={18} />
               </button>
               <button 
                 onClick={() => setView('list')}
                 className={`flex-1 sm:flex-none p-3 rounded-xl transition-all ${view === 'list' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:text-white'}`}
               >
                 <ListIcon size={18} />
               </button>
            </div>
          </div>
        </header>

        {/* Categories Bar */}
        <div className="flex flex-wrap gap-4 mb-16 overflow-x-auto pb-4 scrollbar-hide no-scrollbar">
           {categories.map((cat) => (
             <button
               key={cat}
               onClick={() => setCategory(cat)}
               className={`whitespace-nowrap px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] border transition-all ${
                 category === cat 
                   ? 'bg-white text-black border-white shadow-xl shadow-white/5' 
                   : 'bg-transparent text-slate-500 border-white/10 hover:border-white/30 hover:text-white'
               }`}
             >
               {cat}
             </button>
           ))}
        </div>

        {/* Results Container */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredSchemes.length > 0 ? (
              <motion.div 
                layout
                className={view === 'grid' ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-4"}
              >
                {filteredSchemes.map((scheme, index) => (
                  <motion.div
                    key={scheme.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {view === 'grid' ? (
                      <SchemeCard scheme={scheme} />
                    ) : (
                       <ListRow scheme={scheme} />
                    )}
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-32 space-y-4">
                <Search className="mx-auto text-slate-800" size={60} />
                <p className="text-slate-500 font-black uppercase tracking-widest">No matching schemes found.</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <Chatbot />
    </div>
  );
};

const ListRow = ({ scheme }) => (
  <div className="flex flex-wrap items-center justify-between gap-6 bg-[#0F172A] p-6 rounded-3xl border border-white/10 hover:border-indigo-500/30 transition-all group">
     <div className="flex-1 min-w-[200px] flex items-center gap-6">
        <div className="w-14 h-14 bg-indigo-600/10 rounded-2xl flex items-center justify-center text-indigo-400 font-black text-xl shink-0">
          {scheme.name.charAt(0)}
        </div>
        <div>
           <div className="flex gap-2 mb-1">
             <span className="text-[10px] uppercase font-black text-indigo-500 tracking-widest">{scheme.type}</span>
             <span className="text-[10px] text-slate-500">•</span>
             <span className="text-[10px] uppercase font-black text-slate-500 tracking-widest">{scheme.category}</span>
           </div>
           <h4 className="text-white font-black uppercase text-sm tracking-tight">{scheme.name}</h4>
        </div>
     </div>
     <div className="flex items-center gap-12 text-center hidden md:flex">
        <div>
           <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mb-1">Rating</p>
           <p className="text-xs font-black text-white">{scheme.rating}</p>
        </div>
        <div>
           <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest mb-1">Time</p>
           <p className="text-xs font-black text-white">{scheme.time_estimate}</p>
        </div>
     </div>
     <a 
       href={`/scheme/${scheme.id}`}
       className="bg-white/5 p-4 rounded-xl text-indigo-500 hover:bg-white/10 transition-all group-hover:scale-110"
     >
       <ChevronRight size={20} />
     </a>
  </div>
);

export default AllSchemes;
