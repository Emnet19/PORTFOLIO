import React, { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { ThemeContext } from '../App';

function Nav() {
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext) || { theme: 'dark', toggleTheme: () => {} };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = navItems.map(item => item.id);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navigation - Hidden on mobile */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block"
      >
        <div className="relative">
          {/* Main glass panel */}
          <div className="relative backdrop-blur-xl rounded-[2rem] border border-white/10 bg-white/5 overflow-hidden shadow-xl shadow-black/20">
            {/* Navigation items */}
            <div className="relative flex items-center px-4 py-2 gap-1">
              {/* Nav text items - NO ICONS */}
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  onHoverStart={() => setHoveredItem(item.id)}
                  onHoverEnd={() => setHoveredItem(null)}
                  className="relative px-4 py-2 rounded-2xl transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Active indicator */}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activePill"
                      className={`absolute inset-0 rounded-2xl ${
                        theme === 'light'
                          ? 'bg-gradient-to-r from-rose-500/20 to-pink-500/20 border border-rose-400/50'
                          : 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30'
                      }`}
                      transition={{ type: "spring", duration: 0.4 }}
                    />
                  )}

                  {/* Label */}
                  <span className={`relative z-10 text-sm font-medium tracking-wide whitespace-nowrap transition-colors duration-300 ${
                    activeSection === item.id
                      ? theme === 'light' ? 'text-rose-600 font-semibold' : 'text-cyan-400 font-semibold'
                      : hoveredItem === item.id
                        ? theme === 'light' ? 'text-rose-800' : 'text-white'
                        : theme === 'light' ? 'text-rose-900/70' : 'text-white/70'
                  }`}>
                    {item.label}
                  </span>
                </motion.button>
              ))}

              {/* Theme Toggle Button */}
              <div className="ml-2 pl-2 border-l border-white/10 flex items-center">
                <motion.button
                  onClick={toggleTheme}
                  whileHover={{ scale: 1.15, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                  title={theme === 'dark' ? "Switch to Light Pink Theme" : "Switch to Dark Theme"}
                  aria-label="Toggle Theme"
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                    theme === 'light'
                      ? 'bg-rose-100/80 text-rose-600 border border-rose-300 shadow-sm'
                      : 'bg-white/10 text-amber-300 border border-white/15'
                  }`}
                >
                  {theme === 'dark' ? (
                    <FiSun className="w-4 h-4 text-amber-300 animate-pulse" />
                  ) : (
                    <FiMoon className="w-4 h-4 text-rose-600" />
                  )}
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Navigation - Only visible on mobile */}
      <div className="md:hidden fixed top-4 left-4 right-4 z-50 flex items-center justify-between pointer-events-none">
        {/* Mobile Theme Toggle */}
        <motion.button
          onClick={toggleTheme}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle theme"
          className={`pointer-events-auto w-11 h-11 backdrop-blur-xl rounded-2xl border flex items-center justify-center shadow-lg ${
            theme === 'light'
              ? 'bg-white/80 border-rose-300 text-rose-600'
              : 'bg-white/5 border-white/10 text-amber-300'
          }`}
        >
          {theme === 'dark' ? (
            <FiSun className="w-5 h-5 text-amber-300" />
          ) : (
            <FiMoon className="w-5 h-5 text-rose-600" />
          )}
        </motion.button>

        {/* Mobile menu button */}
        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
          aria-label="Menu"
          className={`pointer-events-auto w-11 h-11 backdrop-blur-xl rounded-2xl border flex items-center justify-center ml-auto shadow-lg ${
            theme === 'light'
              ? 'bg-white/80 border-rose-300 text-rose-900'
              : 'bg-white/5 border-white/10 text-white'
          }`}
        >
          {isMobileMenuOpen ? (
            <FiX className="w-5 h-5" />
          ) : (
            <FiMenu className="w-5 h-5" />
          )}
        </motion.button>

        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="pointer-events-auto absolute top-14 right-0 w-52"
            >
              <div className={`relative backdrop-blur-xl rounded-3xl border overflow-hidden p-2 shadow-2xl ${
                theme === 'light'
                  ? 'bg-white/90 border-rose-200 shadow-rose-900/10'
                  : 'bg-black/80 border-white/10 shadow-black/80'
              }`}>
                <div className="space-y-1">
                  {navItems.map((item) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full px-4 py-2.5 rounded-xl text-left text-sm font-medium transition-all ${
                        activeSection === item.id
                          ? theme === 'light'
                            ? 'bg-rose-500/20 text-rose-700 font-semibold'
                            : 'bg-cyan-500/20 text-cyan-400 font-semibold'
                          : theme === 'light'
                            ? 'text-rose-900/80 hover:bg-rose-100/50'
                            : 'text-white/80 hover:bg-white/5'
                      }`}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Spacer */}
      <div className="h-20 md:h-24 pointer-events-none" />
    </>
  );
}

export default Nav;