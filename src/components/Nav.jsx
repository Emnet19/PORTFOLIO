// import React from 'react'

// function Nav(){
//      return(
//         <div className='p-8 ml-10'>
         
//      <nav className='flex gap-15 justify-center mb-10  backdrop-blur-2xl bg-black/10 border  rounded-2xl border-white/20 '>
//       {/* <h5 className='mr-auto text-cyan-500'>EB</h5>  */}
//                 <a href="#home" className='text-cyan-500 hover:text-orange-400'>Home</a>
//                  <a href="#about"  className='text-cyan-500 hover:text-orange-400'>About</a>
//                   <a href="#skills"  className='text-cyan-500 hover:text-orange-400'>Skills</a>
//                    <a href="#contact"  className='text-cyan-500 hover:text-orange-400'>Contact</a>
//     </nav>
            
//         </div>
//      )
// }
// export default Nav;



// import React from 'react';

// function Nav() {
//   return (
//     <nav className="fixed w-screen top-0 left-0 z-50 backdrop-blur-3xl bg-black/10 px-4 py-3 border-b border-gray-800/50">
//       <div className="max-w-7xl mx-auto flex gap-20 justify-center">
        

//         {/* Navigation Links - Centered */}
//         <a href="#home" className='text-cyan-500 hover:text-orange-400'>Home</a>     <a href="#about"  className='text-cyan-500 hover:text-orange-400'>About</a>
//       <a href="#skills"  className='text-cyan-500 hover:text-orange-400'>Skills</a>
//     <a href="#contact"  className='text-cyan-500 hover:text-orange-400'>Contact</a>

//         {/* Empty div for right-side balance (optional) */}
//         <div className="w-[100px]"></div>
//       </div>
//     </nav>
//   );
// }

// export default Nav;



// import React from 'react';

// function Nav() {
//   return (
//     <nav className="fixed w-full top-0 left-0 z-50 backdrop-blur-lg bg-black/10 px-4 py-3 border-b border-gray-800/50">
//       <div className="max-w-7xl mx-auto flex items-center justify-center gap-12">
//         {/* Navigation Links - Centered with equal spacing */}
//         <a href="#home" className="text-cyan-500 hover:text-orange-400 transition-colors duration-200">
//           Home
//         </a>
//         <a href="#about" className="text-cyan-500 hover:text-orange-400 transition-colors duration-200">
//           About
//         </a>
//         <a href="#skills" className="text-cyan-500 hover:text-orange-400 transition-colors duration-200">
//           Skills
//         </a>
//         <a href="#contact" className="text-cyan-500 hover:text-orange-400 transition-colors duration-200">
//           Contact
//         </a>
//       </div>
//     </nav>
//   );
// }

// export default Nav;



// import React from 'react';

// function Nav() {
//   return (
//     <div className="fixed w-full top-0 left-0 z-50 flex justify-center">
//       <nav className="backdrop-blur-lg bg-black/10 border-b border-gray-800/50 my-4 px-8 py-3 rounded-lg max-w-xl">
//         <div className="flex justify-center gap-12">
//           <a href="#home" className="text-cyan-500 hover:text-orange-400 transition-colors duration-200">
//             Home
//           </a>
//           <a href="#about" className="text-cyan-500 hover:text-orange-400 transition-colors duration-200">
//             About
//           </a>
//           <a href="#skills" className="text-cyan-500 hover:text-orange-400 transition-colors duration-200">
//             Skills
//           </a>
//           <a href="#contact" className="text-cyan-500 hover:text-orange-400 transition-colors duration-200">
//             Contact
//           </a>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Nav;




// import React from 'react';

// function Nav() {
//   return (
//     <div className="fixe w-full top-0 left-0 z-50   flex justify-center">
//       <nav className="backdrop-blur-md  bg-white/5 border border-gray-600/30 my-9 px-10 py-4 rounded-4xl max-w-2xl shadow-lg">
//         <div className="flex justify-center gap-14 ">
//           <a href="#home" className="text-cyan-400 hover:text-orange-300 transition-colors duration-300 text-lg">
//             Home
//           </a>
//           <a href="#about" className="text-cyan-400 hover:text-orange-300 transition-colors duration-300 text-lg">
//             About
//           </a>
//           <a href="#skills" className="text-cyan-400 hover:text-orange-300 transition-colors duration-300 text-lg">
//             Skills
//           </a>
//           <a href="#projects" className="text-cyan-400 hover:text-orange-300 transition-colors duration-300 text-lg">
//             Projects
//           </a>
//           <a href="#contact" className="text-cyan-400 hover:text-orange-300 transition-colors duration-300 text-lg">
//             Contact
//           </a>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Nav;







// import { useState, useEffect } from 'react';
// import Home from './pages/Home';
// import About from './pages/About';
// import Skills from './pages/Skills';
// import Projects from './pages/Projects';
// import Certificates from './pages/Certificates';
// import Services from './pages/Services';
// import Contact from './pages/Contact';
// import Nav from './components/Nav';
// import './App.css';

// function App() {
//   const [isDark, setIsDark] = useState(true);

//   useEffect(() => {
//     // Apply theme to html element
//     if (isDark) {
//       document.documentElement.classList.add('dark');
//       document.documentElement.classList.remove('light');
//     } else {
//       document.documentElement.classList.add('light');
//       document.documentElement.classList.remove('dark');
//     }
//   }, [isDark]);

//   const toggleTheme = () => {
//     setIsDark(!isDark);
//   };

//   return (
//     <div className={`min-h-screen transition-colors duration-300 ${
//       isDark ? 'bg-[#0A0A0F]' : 'bg-gray-50'
//     }`}>
//       <Nav isDark={isDark} toggleTheme={toggleTheme} />
      
//       <main>
//         <section id="home"><Home isDark={isDark} /></section>
//         <section id="about"><About isDark={isDark} /></section>
//         <section id="skills"><Skills isDark={isDark} /></section>
//         <section id="projects"><Projects isDark={isDark} /></section>
//         <section id="certificates"><Certificates isDark={isDark} /></section>
//         <section id="services"><Services isDark={isDark} /></section>
//         <section id="contact"><Contact isDark={isDark} /></section>
//       </main>
//     </div>
//   );
// }

// export default App;






// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Icon } from '@iconify/react';

// function Nav() {
//   const [activeSection, setActiveSection] = useState('home');
//   const [hoveredItem, setHoveredItem] = useState(null);

//   const navItems = [
//     { id: 'home', label: 'Home', icon: 'ph:house-duotone' },
//     { id: 'about', label: 'About', icon: 'ph:user-duotone' },
//     { id: 'skills', label: 'Skills', icon: 'ph:code-duotone' },
//     { id: 'projects', label: 'Projects', icon: 'ph:folder-duotone' },
//     { id: 'certificates', label: 'Certificates', icon: 'ph:crown-duotone' },
//     { id: 'services', label: 'Services', icon: 'ph:briefcase-duotone' },
//     { id: 'contact', label: 'Contact', icon: 'ph:envelope-duotone' },
//   ];

//   // Handle scroll effect to update active section
//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = navItems.map(item => item.id);
//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           if (rect.top <= 150 && rect.bottom >= 150) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Smooth scroll to section
//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//       setActiveSection(sectionId);
//     }
//   };

//   return (
//     <>
//       {/* Minimal floating navbar */}
//       <motion.div 
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
//       >
//         {/* Main container with glass effect */}
//         <div className="relative">
//           {/* Background with ultra-thin glass */}
//           <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl"></div>
          
//           {/* Inner glow */}
//           <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-purple-500/0"></div>
          
//           {/* Navigation items */}
//           <div className="relative flex items-center gap-1 px-2 py-1.5">
//             {navItems.map((item) => (
//               <motion.button
//                 key={item.id}
//                 onClick={() => scrollToSection(item.id)}
//                 onHoverStart={() => setHoveredItem(item.id)}
//                 onHoverEnd={() => setHoveredItem(null)}
//                 className="relative px-3 py-2 rounded-xl group"
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 {/* Active indicator - subtle dot */}
//                 {activeSection === item.id && (
//                   <motion.div
//                     layoutId="activeDot"
//                     className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400"
//                     transition={{ type: "spring", duration: 0.5 }}
//                   />
//                 )}

//                 {/* Hover background - extremely subtle */}
//                 {(hoveredItem === item.id || activeSection === item.id) && (
//                   <motion.div
//                     layoutId="hoverBg"
//                     className="absolute inset-0 rounded-xl bg-white/5"
//                     transition={{ type: "spring", duration: 0.3 }}
//                   />
//                 )}

//                 {/* Icon and label container */}
//                 <div className="relative flex items-center gap-2 px-1">
//                   {/* Icon */}
//                   <Icon 
//                     icon={item.icon} 
//                     className={`w-4 h-4 transition-all duration-300 ${
//                       activeSection === item.id
//                         ? 'text-cyan-400'
//                         : hoveredItem === item.id
//                           ? 'text-white'
//                           : 'text-white/40'
//                     }`}
//                   />
                  
//                   {/* Label - appears on hover */}
//                   <motion.span 
//                     className={`text-xs font-light tracking-wider overflow-hidden whitespace-nowrap ${
//                       activeSection === item.id ? 'text-white/90' : 'text-white/60'
//                     }`}
//                     initial={{ width: 0, opacity: 0 }}
//                     animate={{ 
//                       width: hoveredItem === item.id ? 'auto' : 0,
//                       opacity: hoveredItem === item.id ? 1 : 0,
//                       marginLeft: hoveredItem === item.id ? '0.25rem' : 0
//                     }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     {item.label}
//                   </motion.span>
//                 </div>
//               </motion.button>
//             ))}
//           </div>
//         </div>

//         {/* Subtle corner decorations */}
//         <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-cyan-400/30 rounded-tl-lg"></div>
//         <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-purple-400/30 rounded-tr-lg"></div>
//         <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-purple-400/30 rounded-bl-lg"></div>
//         <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-cyan-400/30 rounded-br-lg"></div>
//       </motion.div>

//       {/* Very subtle spacer - barely noticeable */}
//       <div className="h-20 pointer-events-none"></div>
//     </>
//   );
// }

// export default Nav;











import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

function Nav() {
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: 'ph:planet-duotone', symbol: '🌌' },
    { id: 'about', label: 'About', icon: 'ph:sparkle-duotone', symbol: '✨' },
    { id: 'skills', label: 'Skills', icon: 'ph:magic-wand-duotone', symbol: '⚡' },
    { id: 'projects', label: 'Projects', icon: 'ph:stack-duotone', symbol: '🎯' },
    { id: 'certificates', label: 'Certificates', icon: 'ph:star-four-duotone', symbol: '🏆' },
    { id: 'services', label: 'Services', icon: 'ph:gear-six-duotone', symbol: '⚙️' },
    { id: 'contact', label: 'Contact', icon: 'ph:paper-plane-duotone', symbol: '✉️' },
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
    }
  };

  return (
    <>
      {/* Floating artistic navbar */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
      >
        {/* Main container with artistic design */}
        <div className="relative">
          {/* Animated gradient orbs background */}
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl"
          />
          
          {/* Main glass panel with unique shape */}
          <div className="relative backdrop-blur-xl rounded-[2rem] border border-white/10 overflow-hidden">
            {/* Animated flowing gradient line */}
            <motion.div
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent w-1/2"
            />
            
            {/* Background with noise texture */}
            <div className="absolute inset-0 bg-white/5"></div>
            
            {/* Navigation items with artistic layout */}
            <div className="relative flex items-center px-4 py-2">
              {/* Decorative left symbol */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="hidden lg:block w-8 h-8 mr-2 text-cyan-400/30"
              >
                <Icon icon="ph:star-four-duotone" className="w-full h-full" />
              </motion.div>

              {/* Nav items with always visible labels */}
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  onHoverStart={() => setHoveredItem(item.id)}
                  onHoverEnd={() => setHoveredItem(null)}
                  className="relative group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  custom={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {/* Artistic active indicator */}
                  {activeSection === item.id && (
                    <>
                      <motion.div
                        layoutId="activeGlow"
                        className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-md"
                        transition={{ type: "spring", duration: 0.5 }}
                      />
                      <motion.div
                        layoutId="activeBorder"
                        className="absolute inset-0 border border-cyan-400/30 rounded-2xl"
                        transition={{ type: "spring", duration: 0.5 }}
                      />
                    </>
                  )}

                  {/* Hover effect with floating particles */}
                  {hoveredItem === item.id && (
                    <>
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 0, x: 0 }}
                          animate={{
                            opacity: [0, 1, 0],
                            y: -20,
                            x: (i - 1) * 10,
                          }}
                          transition={{ duration: 0.8, delay: i * 0.1 }}
                          className="absolute -top-2 left-1/2 w-1 h-1 bg-cyan-400 rounded-full"
                        />
                      ))}
                    </>
                  )}

                  {/* Main content container with always visible label */}
                  <div className="relative px-3 py-2 flex items-center gap-2">
                    {/* Icon with artistic animation */}
                    <motion.div
                      animate={{
                        rotate: hoveredItem === item.id ? [0, 5, -5, 0] : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      <Icon 
                        icon={item.icon} 
                        className={`w-5 h-5 transition-all duration-300 ${
                          activeSection === item.id
                            ? 'text-cyan-400'
                            : hoveredItem === item.id
                              ? 'text-white'
                              : 'text-white/70'
                        }`}
                      />
                      
                      {/* Tiny decorative dot */}
                      <motion.div
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={`absolute -top-1 -right-1 w-1 h-1 rounded-full ${
                          activeSection === item.id ? 'bg-cyan-400' : 'bg-transparent'
                        }`}
                      />
                    </motion.div>

                    {/* Label - Always visible */}
                    <motion.span
                      className={`text-xs font-medium tracking-wide whitespace-nowrap transition-all duration-300 ${
                        activeSection === item.id
                          ? 'text-white'
                          : hoveredItem === item.id
                            ? 'text-white/90'
                            : 'text-white/60'
                      }`}
                    >
                      {item.label}
                    </motion.span>
                  </div>
                </motion.button>
              ))}

              {/* Decorative right symbol */}
              <motion.div
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="hidden lg:block w-8 h-8 ml-2 text-purple-400/30"
              >
                <Icon icon="ph:sparkle-duotone" className="w-full h-full" />
              </motion.div>
            </div>
          </div>

          {/* Floating particles around navbar */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -10, 0],
                x: [0, (i % 2 === 0 ? 5 : -5), 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              className="absolute -top-2 -left-2 w-1 h-1 bg-cyan-400/30 rounded-full"
              style={{
                left: `${i * 20}%`,
                top: i % 2 === 0 ? -5 : 5,
              }}
            />
          ))}
        </div>

        {/* Artistic corner decorations */}
        <motion.div
          animate={{ rotate: [0, 90, 180, 270, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400/40 rounded-tl-xl"
        />
        <motion.div
          animate={{ rotate: [0, -90, -180, -270, -360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-purple-400/40 rounded-tr-xl"
        />
        <motion.div
          animate={{ rotate: [0, -90, -180, -270, -360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-purple-400/40 rounded-bl-xl"
        />
        <motion.div
          animate={{ rotate: [0, 90, 180, 270, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-400/40 rounded-br-xl"
        />
      </motion.div>

      {/* Spacer */}
      <div className="h-24 pointer-events-none" />
    </>
  );
}

export default Nav;