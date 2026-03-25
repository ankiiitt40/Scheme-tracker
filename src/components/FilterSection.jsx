import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Briefcase } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const FilterSection = ({ filters, setFilters }) => {
  const { t } = useLanguage();
  const categories = ['All', 'Student', 'Farmer', 'Business', 'Women', 'Health', 'Welfare', 'Housing', 'Pension', 'Education'];
  const types = ['All', 'Central', 'State'];
  const states = [
    'All India', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 
    'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 
    'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 
    'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
  ];
  const categoryTranslations = {
    'All': t('All Categories', 'सभी श्रेणियां'),
    'Student': t('Student', 'छात्र'),
    'Farmer': t('Farmer', 'किसान'),
    'Business': t('Business', 'व्यापार'),
    'Women': t('Women', 'महिलाएं'),
    'Health': t('Health', 'स्वास्थ्य'),
    'Welfare': t('Welfare', 'कल्याण'),
    'Housing': t('Housing', 'आवास'),
    'Pension': t('Pension', 'पेंशन'),
    'Education': t('Education', 'शिक्षा')
  };

  const typeTranslations = {
    'All': t('All Types', 'सभी प्रकार'),
    'Central': t('Central Government', 'केंद्र सरकार'),
    'State': t('State Government', 'राज्य सरकार')
  };

  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="max-w-4xl mx-auto -mt-16 relative z-10 px-4"
    >
      <div className="bg-[#0F172A] rounded-3xl p-8 shadow-2xl border border-white/10 backdrop-blur-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Category Filter */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-indigo-300 uppercase tracking-wider flex items-center gap-2">
              <Briefcase size={14} /> {t('Category', 'श्रेणी')}
            </label>
            <select 
              value={filters.category}
              onChange={(e) => setFilters({ ...filters, category: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
            >
              {categories.map(cat => <option key={cat} value={cat} className="bg-[#0F172A]">{categoryTranslations[cat] || cat}</option>)}
            </select>
          </div>

          {/* Type Filter */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-indigo-300 uppercase tracking-wider flex items-center gap-2">
              <Search size={14} /> {t('Scheme Type', 'योजना के प्रकार')}
            </label>
            <select 
              value={filters.type}
              onChange={(e) => setFilters({ ...filters, type: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
            >
              {types.map(type => <option key={type} value={type} className="bg-[#0F172A]">{typeTranslations[type] || type}</option>)}
            </select>
          </div>

          {/* State Filter */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-indigo-300 uppercase tracking-wider flex items-center gap-2">
              <MapPin size={14} /> {t('State', 'राज्य')}
            </label>
            <select 
              value={filters.state}
              onChange={(e) => setFilters({ ...filters, state: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
            >
              {states.map(state => <option key={state} value={state} className="bg-[#0F172A]">{state}</option>)}
            </select>
          </div>
        </div>
        
        <div className="mt-8 flex justify-center">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-12 rounded-2xl shadow-lg shadow-indigo-500/30 transition-all transform hover:scale-105 active:scale-95">
            {t('Find Schemes', 'योजनाएं खोजें')}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default FilterSection;
