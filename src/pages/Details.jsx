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
import DocumentFormModal from '../components/DocumentFormModal';
import { useLanguage } from '../context/LanguageContext';

const Details = () => {
  const { t, translateScheme } = useLanguage();
  const { id } = useParams();
  const { isLoggedIn, user } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const schemeRaw = schemes.find(s => s.id === Number(id));
  const scheme = schemeRaw ? translateScheme(schemeRaw) : null;

  const [requestStatus, setRequestStatus] = useState(null);
  const [showDocModal, setShowDocModal] = useState(false);

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
        <p className="text-xl text-slate-400">{t('Scheme not found.', 'योजना नहीं मिली।')}</p>
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
    setShowDocModal(true);
  };

  const handleSubmitDocs = (formData) => {
    // Create new request
    const newRequest = {
      id: `req_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
      userId: user.email,
      userName: user.name,
      schemeId: scheme.id,
      schemeName: scheme.name,
      status: 'Pending',
      timestamp: new Date().toISOString(),
      documents: formData // Store the submitted document data
    };

    const savedRequests = JSON.parse(localStorage.getItem('schemeRequests') || '[]');
    savedRequests.push(newRequest);
    localStorage.setItem('schemeRequests', JSON.stringify(savedRequests));
    
    setRequestStatus('Pending');
    setShowDocModal(false);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans">
      <Navbar />
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />

      <main className="pt-24 sm:pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Back Link */}
        <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors group text-sm">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> {t('Back to Discover', 'डिस्कवर पर वापस जाएं')}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-8 md:space-y-12">
            <section>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-3 sm:px-4 py-1.5 bg-indigo-500/20 text-indigo-300 rounded-full text-[10px] font-black tracking-widest uppercase border border-indigo-500/20">
                  {scheme.type} {t('Scheme', 'योजना')}
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
                  <UserCheck className="text-indigo-400" size={20} /> {t('Why are you eligible?', 'आप पात्र क्यों हैं?')}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {t('Based on your profile, you meet the requirement of', 'आपकी प्रोफ़ाइल के आधार पर, आप')} <span className="text-indigo-300 font-semibold">{scheme.eligibility}</span> {t('This scheme matches your category as a', 'की आवश्यकता को पूरा करते हैं। यह योजना आपकी श्रेणी')} {scheme.category} {t('matches.', 'से मेल खाती है।')}
                </p>
              </div>
              <div className="bg-[#0F172A] p-8 rounded-3xl border border-white/10 border-l-4 border-l-emerald-500 shadow-sm">
                <h4 className="flex items-center gap-2 text-white font-bold mb-4">
                  <ShieldCheck className="text-emerald-400" size={20} /> {t('Trust Indicators', 'विश्वास संकेतक')}
                </h4>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li className="flex gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500 mt-1 shrink-0" />
                    {t('Verified by Government Database', 'सरकारी डेटाबेस द्वारा सत्यापित')}
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500 mt-1 shrink-0" />
                    {t('Direct Benefit Transfer (DBT)', 'प्रत्यक्ष लाभ हस्तांतरण (DBT)')}
                  </li>
                </ul>
              </div>
            </div>

            {/* Application Steps */}
            <section className="space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-black text-white">{t('Application Guide', 'आवेदन गाइड')}</h2>
                <div className="flex items-center gap-2 text-amber-300 text-sm font-bold bg-amber-500/10 px-4 py-2 rounded-xl border border-amber-500/20 uppercase tracking-tighter">
                  <AlertCircle size={16} /> {t('Avoid common mistakes', 'सामान्य गलतियों से बचें')}
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
                <h4 className="text-xl font-black text-white">{t('Application Summary', 'आवेदन सारांश')}</h4>
                
                <div className="space-y-4">
                  <SummaryItem icon={<Calendar size={18}/>} label={t('Time Estimate', 'समय अनुमान')} value={scheme.time_estimate} />
                  <SummaryItem icon={<Banknote size={18}/>} label={t('Income Limit', 'आय सीमा')} value={scheme.income_limit} />
                  <SummaryItem icon={<AlertCircle size={18}/>} label={t('Complexity', 'कठिनाई')} value={scheme.difficulty} />
                </div>

                <div className="pt-6 border-t border-white/10">
                  <h5 className="text-sm font-bold text-slate-300 mb-4 uppercase tracking-widest overflow-hidden relative">
                    {t('Required Documents', 'आवश्यक दस्तावेज़')}
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
                    {t('Apply for Scheme', 'योजना के लिए आवेदन करें')} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  {requestStatus ? (
                    <div className="w-full bg-slate-800/50 border border-white/10 text-white py-4 rounded-2xl flex flex-col items-center justify-center gap-2">
                       <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t('Support Request Status', 'समर्थन अनुरोध स्थिति')}</p>
                       <div className="flex items-center gap-2 font-black">
                         {requestStatus === 'Pending' && <><Clock className="text-amber-400" size={18} /> <span className="text-amber-400">{t('Pending', 'लंबित')}</span></>}
                         {requestStatus === 'Under Review' && <><ShieldAlert className="text-blue-400" size={18} /> <span className="text-blue-400">{t('Under Review', 'समीक्षा के तहत')}</span></>}
                         {requestStatus === 'Approved' && <><CheckCircle2 className="text-emerald-400" size={18} /> <span className="text-emerald-400">{t('Approved', 'स्वीकृत')}</span></>}
                         {requestStatus === 'Rejected' && <><XCircle className="text-red-400" size={18} /> <span className="text-red-400">{t('Rejected', 'अस्वीकृत')}</span></>}
                       </div>
                    </div>
                  ) : (
                    <button 
                      onClick={handleRequestSupport}
                      className="w-full bg-white/5 hover:bg-white/10 text-white font-bold uppercase tracking-widest py-4 rounded-2xl border border-white/10 transition-all flex items-center justify-center gap-2 active:scale-95 group text-sm"
                    >
                      <HelpCircle size={18} /> {t('Request Support to Apply', 'आवेदन करने के लिए समर्थन का अनुरोध करें')}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <DocumentFormModal 
        isOpen={showDocModal} 
        onClose={() => setShowDocModal(false)}
        onSubmit={handleSubmitDocs}
        schemeName={scheme.name}
      />
      <Chatbot schemeData={scheme} />
    </div>
  );
};

const SummaryItem = ({ icon, label, value }) => {
  return (
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
};

export default Details;
