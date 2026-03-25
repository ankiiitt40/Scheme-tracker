import React, { useState, useMemo } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FilterSection from '../components/FilterSection';
import SchemeCard from '../components/SchemeCard';
import Chatbot from '../components/Chatbot';
import { useLanguage } from '../context/LanguageContext';
import { schemes } from '../data/schemes';

const Home = () => {
  const { t, translateScheme } = useLanguage();
  const [filters, setFilters] = useState({
    category: 'All',
    type: 'All',
    state: 'All India'
  });

  const filteredSchemes = useMemo(() => {
    return schemes.filter(scheme => {
      const categoryMatch = filters.category === 'All' || scheme.category === filters.category;
      const typeMatch = filters.type === 'All' || scheme.type === filters.type;
      const stateMatch = filters.state === 'All India' || scheme.state === filters.state || scheme.state === 'All India';
      return categoryMatch && typeMatch && stateMatch;
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans selection:bg-indigo-500/30">
      <Navbar />
      
      <main>
        <Hero />
        
        <FilterSection filters={filters} setFilters={setFilters} />

        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tighter uppercase">{t('Available Schemes', 'उपलब्ध योजनाएं')}</h2>
              <p className="text-slate-400 text-sm">{t(`Showing ${filteredSchemes.length} schemes based on your filters`, `आपके फ़िल्टर के आधार पर ${filteredSchemes.length} योजनाएं दिखा रहे हैं`)}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSchemes.map(scheme => (
              <SchemeCard key={scheme.id} scheme={translateScheme(scheme)} />
            ))}
          </div>
          
          {filteredSchemes.length === 0 && (
            <div className="text-center py-20 bg-white/5 rounded-[40px] border border-dashed border-white/10">
              <p className="text-slate-400 text-lg">{t('No schemes found matching your criteria.', 'आपके मानदंड से मेल खाने वाली कोई योजना नहीं मिली।')}</p>
              <button 
                onClick={() => setFilters({ category: 'All', type: 'All', state: 'All India' })}
                className="mt-4 text-indigo-400 font-bold hover:underline"
              >
                {t('Clear all filters', 'सभी फ़िल्टर साफ़ करें')}
              </button>
            </div>
          )}
        </section>
      </main>

      <Chatbot />
    </div>
  );
};

export default Home;
