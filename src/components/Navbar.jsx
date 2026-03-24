import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { User, LogOut, Menu, X } from 'lucide-react';
import AuthModal from './AuthModal';

const Navbar = () => {
  const { user, logout, isLoggedIn } = useAuth();
  const location = useLocation();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Discover', path: '/' },
    { name: 'All Schemes', path: '/schemes' },
    { name: 'About', path: '/about' }
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform">
              <span className="text-white font-black text-xl">L</span>
            </div>
            <span className="text-xl md:text-2xl font-black text-white tracking-tighter">
              LUNAR<span className="text-indigo-500">VOYAGER</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all relative py-2 ${
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

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Desktop User Info */}
            <div className="hidden md:flex items-center gap-4">
              {isLoggedIn ? (
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/10">
                    <User size={16} className="text-indigo-400" />
                    <span className="text-[10px] font-black text-white uppercase tracking-wider">{user.name}</span>
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
                    className="text-[10px] font-black text-slate-500 hover:text-white uppercase tracking-widest px-4 py-3 transition-colors"
                  >
                    Sign In
                  </button>
                  <button 
                    onClick={() => setShowAuthModal(true)}
                    className="text-[10px] font-bold text-white bg-indigo-600 px-6 py-3 rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20 border border-indigo-500/50 active:scale-95"
                  >
                    GET STARTED
                  </button>
                </>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={toggleMobileMenu}
              className="p-2 md:hidden bg-white/5 border border-white/10 rounded-xl text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#020617] border-b border-white/5 overflow-hidden"
            >
              <div className="px-6 py-8 space-y-6">
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-sm font-black uppercase tracking-widest py-3 ${
                        location.pathname === link.path ? 'text-indigo-400' : 'text-slate-400'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                
                <div className="pt-6 border-t border-white/5 flex flex-col gap-4">
                  {isLoggedIn ? (
                    <>
                      <div className="flex items-center gap-3 px-4 py-3 bg-white/5 rounded-xl border border-white/10">
                        <User size={18} className="text-indigo-400" />
                        <span className="text-xs font-black text-white uppercase tracking-wider">{user.name}</span>
                      </div>
                      <button 
                        onClick={() => { logout(); setIsMobileMenuOpen(false); }}
                        className="w-full py-4 bg-red-500/10 text-red-500 rounded-xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2"
                      >
                        <LogOut size={16} /> Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <button 
                        onClick={() => { setShowAuthModal(true); setIsMobileMenuOpen(false); }}
                        className="w-full py-4 bg-white/5 text-white rounded-xl font-black uppercase tracking-widest text-xs"
                      >
                        Sign In
                      </button>
                      <button 
                        onClick={() => { setShowAuthModal(true); setIsMobileMenuOpen(false); }}
                        className="w-full py-4 bg-indigo-600 text-white rounded-xl font-black uppercase tracking-widest text-xs shadow-lg shadow-indigo-500/20"
                      >
                        Get Started
                      </button>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
