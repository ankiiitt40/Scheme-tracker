import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Target, Zap, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Chatbot from '../components/Chatbot';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();
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
              <Sparkles size={12} /> {t('Mission Control', 'मिशन नियंत्रण')}
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase">
              {t('EMPOWERING', 'सशक्तीकरण')} <br/> <span className="text-slate-500">{t('INDIVIDUALS.', 'व्यक्तिगत')}</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl">
              {t('SchemeSathi is the next-gen discovery platform for government schemes, using AI to bridge the gap between complex policy and eligible citizens.', 'स्कीमसाथी सरकारी योजनाओं के लिए अगली पीढ़ी का डिस्कवरी प्लेटफॉर्म है, जो एआई का उपयोग करके जटिल नीति और योग्य नागरिकों के बीच की खाई को पाटता है।')}
            </p>
            <div className="flex gap-4 pt-4">
               <button className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-white text-black font-black uppercase tracking-widest text-[10px] sm:text-xs rounded-2xl hover:bg-slate-200 transition-all active:scale-95 shadow-2xl shadow-white/5 flex items-center justify-center gap-2">
                 {t('Join the Mission', 'मिशन में शामिल हों')} <ChevronRight size={16} />
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
                <ValueCard icon={<Shield className="text-indigo-400" />} title={t('Transparency', 'पारदर्शिता')} desc={t('Direct links to verified government sources.', 'सत्यापित सरकारी स्रोतों के सीधे लिंक।')} />
                <ValueCard icon={<Target className="text-emerald-400" />} title={t('Precision', 'सटीकता')} desc={t('AI-driven eligibility matching system.', 'एआई-संचालित पात्रता मिलान प्रणाली।')} />
                <ValueCard icon={<Zap className="text-amber-400" />} title={t('Speed', 'गति')} desc={t('Instant access to document checklists.', 'दस्तावेज़ चेकलिस्ट तक तुरंत पहुंच।')} />
                <ValueCard icon={<Sparkles className="text-pink-400" />} title={t('Innovation', 'नवाचार')} desc={t('Premium user experience for everyone.', 'सभी के लिए प्रीमियम उपयोगकर्ता अनुभव।')} />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Vision Section */}
        <section className="py-16 sm:py-24 border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            <div>
              <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-4 overflow-hidden relative">{t('The Vision', 'विजन')}</h3>
              <p className="text-2xl sm:text-3xl font-bold tracking-tighter leading-tight text-white uppercase">
                {t('Eliminating bureaucratic complexity through intelligent automation.', 'बुद्धिमान स्वचालन के माध्यम से नौकरशाही जटिलता को खत्म करना।')}
              </p>
            </div>
            <div className="md:col-span-2 text-base sm:text-lg text-slate-400 leading-relaxed space-y-6">
              <p>
                {t('In a country as vast as India, thousands of government schemes go unused simply because of a lack of awareness or the complexity of the application process. SchemeSathi addresses this by centralizing knowledge.', 'भारत जैसे विशाल देश में, जागरूकता की कमी या आवेदन प्रक्रिया की जटिलता के कारण हजारों सरकारी योजनाएं अप्रयुक्त रह जाती हैं। स्कीमसाथी ज्ञान का केंद्रीकरण करके इसे संबोधित करता है।')}
              </p>
              <p>
                {t('Our platform doesn\'t just list schemes; it guides you through them. From calculating income eligibility to providing a detailed task list for your local tehsil visit, we ensure you never miss a benefit you are entitled to.', 'हमारा प्लेटफ़ॉर्म केवल योजनाओं को सूचीबद्ध नहीं करता है; यह आपका मार्गदर्शन करता है। आय पात्रता की गणना करने से लेकर आपकी स्थानीय तहसील यात्रा के लिए एक विस्तृत कार्य सूची प्रदान करने तक, हम सुनिश्चित करते हैं कि आप कभी भी किसी भी लाभ से न चूकें जिसके आप हकदार हैं।')}
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
