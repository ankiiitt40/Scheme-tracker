import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, Mail, User, ShieldCheck, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';

const dummyUsers = [
  { email: 'admin@gmail.com', password: '12345678', name: 'Admin', role: 'admin' },
  { email: 'ankitvishwakarma@gmail.com', password: '12345678', name: 'Ankit Vishwakarma' },
  { email: 'anirudha@gmail.com', password: '12345678', name: 'Anirudha' },
  { email: 'arti@gmail.com', password: '12345678', name: 'Arti' },
  { email: 'ayush@gmail.com', password: '12345678', name: 'Ayush' },
  { email: 'nimi@gmail.com', password: '12345678', name: 'Nimi' },
];

const AuthModal = ({ isOpen, onClose }) => {
  const { login } = useAuth();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    const foundUser = dummyUsers.find(
      (u) => u.email === formData.email && u.password === formData.password
    );

    if (foundUser) {
      login({ name: formData.name || foundUser.name, email: foundUser.email, role: foundUser.role || 'user' });
      setFormData({ email: '', password: '', name: '' }); // reset form
      onClose();
    } else {
      setError(t('Invalid email or password.', 'अमान्य ईमेल या पासवर्ड।'));
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          {/* Backdrop (clickable) */}
          <div 
            className="absolute inset-0" 
            onClick={onClose}
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative bg-[#0F172A] w-full max-w-lg rounded-[48px] border border-white/10 shadow-[0_35px_100px_-15px_rgba(0,0,0,0.8)] overflow-hidden z-10"
          >
            <div className="p-10">
              <div className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-600/20">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white">{t('Verification', 'सत्यापन')}</h3>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{t('Identify yourself to proceed', 'आगे बढ़ने के लिए अपनी पहचान करें')}</p>
                  </div>
                </div>
                <button 
                  onClick={onClose} 
                  className="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/5 rounded-full transition-all"
                >
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="flex items-center gap-2 p-3 text-sm text-red-500 bg-red-500/10 border border-red-500/20 rounded-xl">
                    <AlertCircle size={16} />
                    <p>{error}</p>
                  </div>
                )}
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 block">{t('Full Name', 'पूरा नाम')}</label>
                  <div className="relative group">
                    <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-500 transition-colors" size={18} />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-semibold placeholder:text-slate-700"
                      placeholder="e.g. Rahul Sharma"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 block">{t('Identity Email', 'पहचान ईमेल')}</label>
                  <div className="relative group">
                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-500 transition-colors" size={18} />
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-semibold placeholder:text-slate-700"
                      placeholder="rahul@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 block">{t('Security Token', 'सुरक्षा टोकन')}</label>
                  <div className="relative group">
                    <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-500 transition-colors" size={18} />
                    <input
                      required
                      type="password"
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-semibold placeholder:text-slate-700"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black uppercase tracking-widest py-5 rounded-2xl shadow-2xl shadow-indigo-600/30 transition-all active:scale-[0.98] border border-indigo-500/20"
                  >
                    {t('Confirm Identity', 'पहचान की पुष्टि करें')}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;
