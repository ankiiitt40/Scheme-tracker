import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, CheckCircle2, Calendar, Banknote, ShieldCheck, 
  ArrowRight, UserCheck, AlertCircle, HelpCircle, Clock, XCircle, ShieldAlert 
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Stepper from '../components/Stepper';
import Chatbot from '../components/Chatbot';
import AuthModal from '../components/AuthModal';
import { schemes } from '../data/schemes';
import { useAuth } from '../context/AuthContext';

const Details = () => {
  const { id } = useParams();
  const { isLoggedIn, user } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const scheme = schemes.find(s => s.id === Number(id));

  const [requestStatus, setRequestStatus] = useState(null);

  React.useEffect(() => {
    if (isLoggedIn && user && scheme) {
      const savedRequests = JSON.parse(localStorage.getItem('schemeRequests') || '[]');
      const userRequest = savedRequests.find(r => r.userId === user.email && r.schemeId === scheme.id);
      if (userRequest) {
        setRequestStatus(userRequest.status);
      }
    } else {
      setRequestStatus(null);
    }
  }, [id, isLoggedIn, user, scheme]);

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

  const handleRequestSupport = () => {
    if (!isLoggedIn) {
      setShowAuthModal(true);
      return;
    }
    
    // Create new request
    const newRequest = {
      id: `req_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
      userId: user.email,
      userName: user.name,
      schemeId: scheme.id,
      schemeName: scheme.name,
      status: 'Pending',
      timestamp: new Date().toISOString()
    };

    const savedRequests = JSON.parse(localStorage.getItem('schemeRequests') || '[]');
    savedRequests.push(newRequest);
    localStorage.setItem('schemeRequests', JSON.stringify(savedRequests));
    
    setRequestStatus('Pending');
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans">
      <Navbar />
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />

      <main className="pt-24 sm:pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Back Link */}
        <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors group text-sm">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Discover
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-8 md:space-y-12">
            <section>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-3 sm:px-4 py-1.5 bg-indigo-500/20 text-indigo-300 rounded-full text-[10px] font-black tracking-widest uppercase border border-indigo-500/20">
                  {scheme.type} Scheme
                </span>
                <span className="px-3 sm:px-4 py-1.5 bg-white/5 text-slate-400 rounded-full text-[10px] font-black tracking-widest uppercase border border-white/10">
                  {scheme.category}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-[1.1] text-white uppercase">
                {scheme.name}
              </h1>
              <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl">
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

                <div className="space-y-3">
                  <button 
                    onClick={handleApply}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black uppercase tracking-widest py-5 rounded-2xl shadow-xl shadow-indigo-500/20 transition-all flex items-center justify-center gap-2 active:scale-95 group"
                  >
                    Apply for Scheme <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  {requestStatus ? (
                    <div className="w-full bg-slate-800/50 border border-white/10 text-white py-4 rounded-2xl flex flex-col items-center justify-center gap-2">
                       <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Support Request Status</p>
                       <div className="flex items-center gap-2 font-black">
                         {requestStatus === 'Pending' && <><Clock className="text-amber-400" size={18} /> <span className="text-amber-400">Pending</span></>}
                         {requestStatus === 'Under Review' && <><ShieldAlert className="text-blue-400" size={18} /> <span className="text-blue-400">Under Review</span></>}
                         {requestStatus === 'Approved' && <><CheckCircle2 className="text-emerald-400" size={18} /> <span className="text-emerald-400">Approved</span></>}
                         {requestStatus === 'Rejected' && <><XCircle className="text-red-400" size={18} /> <span className="text-red-400">Rejected</span></>}
                       </div>
                    </div>
                  ) : (
                    <button 
                      onClick={handleRequestSupport}
                      className="w-full bg-white/5 hover:bg-white/10 text-white font-bold uppercase tracking-widest py-4 rounded-2xl border border-white/10 transition-all flex items-center justify-center gap-2 active:scale-95 group text-sm"
                    >
                      <HelpCircle size={18} /> Request Support to Apply
                    </button>
                  )}
                </div>
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
