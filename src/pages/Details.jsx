import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, CheckCircle2, Calendar, Banknote, ShieldCheck, 
  ArrowRight, UserCheck, AlertCircle 
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Stepper from '../components/Stepper';
import Chatbot from '../components/Chatbot';
import AuthModal from '../components/AuthModal';
import { schemes } from '../data/schemes';
import { useAuth } from '../context/AuthContext';

const Details = () => {
  const { id } = useParams();
  const { isLoggedIn } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const scheme = schemes.find(s => s.id === Number(id));

  if (!scheme) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#020617] text-white">
        <p className="text-xl text-slate-400">Scheme not found.</p>
      </div>
    );
  }

  const handleApply = () => {
    if (!isLoggedIn) {
      setShowAuthModal(true);
    } else {
      window.open(scheme.apply_link, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans">
      <Navbar />
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />

      <main className="pt-32 pb-24 max-w-7xl mx-auto px-6">
        {/* Back Link */}
        <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Discover
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-12">
            <section>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-black tracking-widest uppercase border border-indigo-500/20">
                  {scheme.type} Scheme
                </span>
                <span className="px-4 py-1.5 bg-white/5 text-slate-400 rounded-full text-xs font-black tracking-widest uppercase border border-white/10">
                  {scheme.category}
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-tight text-white">
                {scheme.name}
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed max-w-3xl">
                {scheme.benefits}
              </p>
            </section>

            {/* Why Eligible & Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#0F172A] p-8 rounded-3xl border border-white/10 border-l-4 border-l-indigo-500 shadow-sm">
                <h4 className="flex items-center gap-2 text-white font-bold mb-4">
                  <UserCheck className="text-indigo-400" size={20} /> Why are you eligible?
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Based on your profile, you meet the requirement of <span className="text-indigo-300 font-semibold">{scheme.eligibility}</span>. 
                  This scheme matches your category as a {scheme.category}.
                </p>
              </div>
              <div className="bg-[#0F172A] p-8 rounded-3xl border border-white/10 border-l-4 border-l-emerald-500 shadow-sm">
                <h4 className="flex items-center gap-2 text-white font-bold mb-4">
                  <ShieldCheck className="text-emerald-400" size={20} /> Trust Indicators
                </h4>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li className="flex gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500 mt-1 shrink-0" />
                    Verified by Government Database
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500 mt-1 shrink-0" />
                    Direct Benefit Transfer (DBT)
                  </li>
                </ul>
              </div>
            </div>

            {/* Application Steps */}
            <section className="space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-black text-white">Application Guide</h2>
                <div className="flex items-center gap-2 text-amber-300 text-sm font-bold bg-amber-500/10 px-4 py-2 rounded-xl border border-amber-500/20 uppercase tracking-tighter">
                  <AlertCircle size={16} /> Avoid common mistakes
                </div>
              </div>
              
              <div className="bg-[#0F172A] p-10 rounded-[40px] border border-white/10 shadow-sm">
                <Stepper steps={scheme.steps} />
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-6">
            <div className="bg-[#0F172A] p-8 rounded-[40px] border border-white/10 shadow-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-indigo-600/5 group-hover:bg-indigo-600/10 transition-colors"></div>
              <div className="relative z-10 space-y-6">
                <h4 className="text-xl font-black text-white">Application Summary</h4>
                
                <div className="space-y-4">
                  <SummaryItem icon={<Calendar size={18}/>} label="Time Estimate" value={scheme.time_estimate} />
                  <SummaryItem icon={<Banknote size={18}/>} label="Income Limit" value={scheme.income_limit} />
                  <SummaryItem icon={<AlertCircle size={18}/>} label="Complexity" value={scheme.difficulty} />
                </div>

                <div className="pt-6 border-t border-white/10">
                  <h5 className="text-sm font-bold text-slate-300 mb-4 uppercase tracking-widest overflow-hidden relative">
                    Required Documents
                  </h5>
                  <ul className="space-y-3">
                    {scheme.documents.map((doc, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-400 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={handleApply}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black uppercase tracking-widest py-5 rounded-2xl shadow-xl shadow-indigo-500/20 transition-all flex items-center justify-center gap-2 active:scale-95 group"
                >
                  Apply for Scheme <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Chatbot schemeData={scheme} />
    </div>
  );
};

const SummaryItem = ({ icon, label, value }) => (
  <div className="flex items-center gap-4">
    <div className="w-10 h-10 rounded-xl bg-indigo-600/5 flex items-center justify-center text-indigo-600">
      {icon}
    </div>
    <div>
      <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{label}</p>
      <p className="text-sm font-black text-white">{value}</p>
    </div>
  </div>
);

export default Details;
