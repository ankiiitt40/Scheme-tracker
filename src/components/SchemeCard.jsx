import { motion } from 'framer-motion';
import { ArrowRight, Star, Clock, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const SchemeCard = ({ scheme }) => {
  const { t } = useLanguage();
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-[#0F172A] group rounded-3xl overflow-hidden border border-white/10 hover:border-indigo-500/50 transition-all duration-300 shadow-xl"
    >
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-bold tracking-wider uppercase">
            {scheme.category}
          </span>
          {scheme.isRecommended && (
            <span className="flex items-center gap-1 px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-xs font-bold tracking-wider uppercase border border-amber-500/30">
              <Star size={12} fill="currentColor" /> {t('Top Recommended', 'शीर्ष अनुशंसित')}
            </span>
          )}
        </div>

        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
          {scheme.name}
        </h3>
        
        <p className="text-slate-400 line-clamp-2 mb-6 text-sm">
          {scheme.benefits}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2 text-slate-500 text-xs">
            <Layers size={14} className="text-indigo-500" />
            <span>{scheme.difficulty} {t('Difficulty', 'कठिनाई')}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-500 text-xs">
            <Clock size={14} className="text-indigo-500" />
            <span>{scheme.time_estimate}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
          <div className="flex items-center gap-1">
            <Star size={16} className="text-amber-400 fill-amber-400" />
            <span className="text-white font-bold">{scheme.rating}</span>
          </div>
          <Link 
            to={`/scheme/${scheme.id}`}
            className="flex items-center gap-2 text-indigo-400 font-semibold group/link hover:text-indigo-300 transition-colors"
          >
            {t('Details', 'विवरण')} <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default SchemeCard;
