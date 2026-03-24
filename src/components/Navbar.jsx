import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { User, LogOut, ShieldCheck } from 'lucide-react';
import AuthModal from './AuthModal';

const Navbar = () => {
  const { user, logout, isLoggedIn } = useAuth();
  const location = useLocation();
  const [showAuthModal, setShowAuthModal] = useState(false);

  const navLinks = [
    { name: 'Discover', path: '/' },
    { name: 'All Schemes', path: '/schemes' },
    { name: 'About', path: '/about' }
  ];

  return (
    <>
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#020617]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform">
            <span className="text-white font-black text-xl">L</span>
          </div>
          <span className="text-2xl font-black text-white tracking-tighter">
            LUNAR<span className="text-indigo-500">VOYAGER</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`text-xs font-black uppercase tracking-[0.2em] transition-all relative py-2 ${
                location.pathname === link.path ? 'text-white' : 'text-slate-500 hover:text-white'
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div 
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500 rounded-full"
                />
              )}
            </Link>
          ))}
        </div>

        {/* User Auth */}
        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <div className="flex items-center gap-4">
               <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/10 hidden sm:flex">
                 <User size={16} className="text-indigo-400" />
                 <span className="text-xs font-black text-white uppercase tracking-wider">{user.name}</span>
               </div>
               <button 
                 onClick={logout}
                 className="p-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-red-500/10 hover:text-red-500 transition-all text-slate-500"
                 title="Logout"
               >
                 <LogOut size={18} />
               </button>
            </div>
          ) : (
            <>
              <button 
                onClick={() => setShowAuthModal(true)}
                className="hidden sm:block text-xs font-black text-slate-500 hover:text-white uppercase tracking-widest px-6 py-3 transition-colors"
              >
                Sign In
              </button>
              <button 
                onClick={() => setShowAuthModal(true)}
                className="text-xs font-bold text-white bg-indigo-600 px-6 py-3 rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20 border border-indigo-500/50 active:scale-95"
              >
                GET STARTED
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
