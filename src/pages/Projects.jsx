// import React, { useState } from 'react';
// import {
//   SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiGithub, SiPython,
//   SiGit, SiNodedotjs, SiMongodb, SiCplusplus, SiMysql
// } from 'react-icons/si';
// import { FaJava, FaPhp } from 'react-icons/fa';
// import { Icon } from '@iconify/react';

// function Projects() {
//   const [showAll, setShowAll] = useState(false);

//   const projects = [
//     {
//       title: "Healthcare Plus ",
//       desc: `HealthCare Plus is a modern web application built with React and TypeScript that allows users to connect with certified doctors, book appointments instantly, and securely manage their health records in one place. It features a clean, responsive interface, smooth navigation, and emphasizes data privacy while ensuring a seamless healthcare booking experience.`,
//       image: "/hospital.png",
//       techs: [<SiReact />, <img src="https://cdn.simpleicons.org/tailwindcss" alt="Tailwind CSS" className="h-6 w-6" />],
//       link: "https://ehealth-chi.vercel.app/",
//       reverse: true,
//       tag: "PROJECT 1"
//     },
//     {
//       title: "Time Bank",
//       desc: `Time Bank is an innovative platform designed to promote skill-sharing through time exchange. Users can connect with others who possess the skills they’re seeking and offer their own expertise in return — no money involved, just mutual learning.`,
//       image: "/Time Bank.png",
//       techs: [<SiReact />, <img src="https://cdn.simpleicons.org/tailwindcss" className="h-6 w-6" />, <img src="https://cdn.simpleicons.org/typescript" className="h-6 w-6" />, <Icon icon="logos:python" className="h-6 w-6" />],
//       link: "https://github.com/wende12github/Silent-Coders",
//       reverse: false,
//       tag: "PROJECT 2"
//     },
//     {
//       title: "Random Chat App",
//       desc: `Random Chat App is an interactive web application that connects people based on shared interests and current moods, making conversations more engaging and personal. Built with React and TypeScript, it integrates external APIs and utilizes WebSocket technology to enable real-time chatting and smooth user interaction.`,
//       image: "/chatapp.png",
//       techs: [<SiReact />, <img src="https://cdn.simpleicons.org/tailwindcss" className="h-6 w-6" />, <Icon icon="logos:laravel" className="h-6 w-6" />],
//       link: "https://github.com/Hybrid-team-2/web_chatapp",
//       reverse: true,
//       tag: "PROJECT 3"
//     },
//     {
//       title: "Foodie Finder",
//       desc: `Foodie Finder is a modern React-based web application that lets users explore delicious meals from around the world. Whether you’re searching by meal name, ingredients, or exploring random dishes, this app makes discovering new recipes easy and fun.`,
//       image: "/foodie-finder.png",
//       techs: [<SiReact />, <img src="https://cdn.simpleicons.org/tailwindcss" alt="Tailwind CSS" className="h-6 w-6" />],
//       link: "https://github.com/Emnet19/foodie-finder",
//       reverse: false,
//       tag: "PROJECT 4"
//     },
//     {
//       title: "Resource For Software Engineering Students",
//       desc: `A comprehensive and well-organized platform designed to support Software Engineering students throughout their academic journey. Built with React, TypeScript, and Tailwind CSS.`,
//       image: "/Book1.png",
//       techs: [<SiReact />, <img src="https://cdn.simpleicons.org/tailwindcss" className="h-6 w-6" />, <img src="https://cdn.simpleicons.org/typescript" className="h-6 w-6" />, <img src="https://cdn.simpleicons.org/php" className="h-6 w-6" />],
//       link: "https://github.com/Elleni-Bisrat/GROUP4_IPII_PROJECT",
//       reverse: true,
//       tag: "PROJECT 5"
//     },
//     {
//       title: "Supermarket Management System",
//       desc: `A complete and intuitive Supermarket Management System designed to streamline daily operations. Built using Java and MySQL with a user-friendly GUI.`,
//       image: "/Supermarket.png",
//       techs: [<Icon icon="logos:java" className='h-6 w-6' />, <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" width="30" />],
//       link: "https://github.com/Emnet19/SuperMarketMgt-Java",
//       reverse: false,
//       tag: "PROJECT 6"
//     },
//     {
//       title: "E Commerce Website For Girls",
//       desc: `A user-friendly and visually appealing platform for girls to shop for products matching their lifestyle. Built with React, TypeScript, and Tailwind CSS.`,
//       image: "GirlsWeb.png",
//       techs: [<SiReact />, <img src="https://cdn.simpleicons.org/tailwindcss" className="h-6 w-6" />, <img src="https://cdn.simpleicons.org/typescript" className="h-6 w-6" />],
//       link: "#",
//       reverse: true,
//       tag: "PROJECT 7"
//     },
//     {
//       title: "Image Gallery Web App",
//       desc: `A visually engaging and responsive Image Gallery Web App built to deliver an immersive browsing experience. Developed using React and Tailwind CSS.`,
//       image: "/Image Gallary.png",
//       techs: [<SiReact />, <img src="https://cdn.simpleicons.org/tailwindcss" className="h-6 w-6" />, <img src="https://cdn.simpleicons.org/typescript" className="h-6 w-6" />],
//       link: "https://github.com/Emnet19/ImageGallary",
//       reverse: false,
//       tag: "PROJECT 8"
//     },
//   ];

//   // ✅ Only show first 3 projects if "showAll" is false
//   const visibleProjects = showAll ? projects : projects.slice(0, 3);

//   return (
//     <section className="bg-[#0b1120] text-white px-6 py-20">
//       <h1 className="font-bold text-5xl text-center mb-20">PROJECTS</h1>

//       {visibleProjects.map(({ title, desc, image, techs, link, reverse, tag }, index) => (
//         <div
//           key={index}
//           className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-between gap-10 max-w-7xl mx-auto mb-24`}
//         >
//           <div className="relative flex-1 w-full max-w-md sm:max-w-xl md:max-w-2xl">
//             <img src={image} alt={title} className="relative z-10 rounded-lg shadow-2xl w-full object-cover hover:shadow-2xl transition-shadow duration-300" />
//           </div>

//           <div className="flex-1">
//             <h2 className="text-cyan-400 text-lg tracking-wide mb-2">{tag}</h2>
//             <h1 className="text-3xl font-bold mb-4">{title}</h1>
//             <p className="text-gray-400 text-sm leading-relaxed mb-4">{desc}</p>

//             <div className="flex flex-wrap gap-4 items-center">
//               {techs.map((tech, i) => (
//                 <div key={i} className="h-10 w-10 rounded-full bg-black border border-gray-700 flex items-center justify-center">
//                   {tech}
//                 </div>
//               ))}
//               <a href={link} target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-800 gap-10 font-medium text-sm">
//                 Check Live Site
//               </a>
//             </div>
//           </div>
//         </div>
//       ))}

//       {/* ✅ Show More / Show Less Button */}
//       <div className="text-center mt-10">
//         <button
//           onClick={() => setShowAll(!showAll)}
//           className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full font-semibold transition duration-300"
//         >
//           {showAll ? 'Show Less' : 'Show More'}
//         </button>
//       </div>
//     </section>
//   );
// }

// export default Projects;





// import React, { useState } from 'react';
// import {
//   SiReact,
//   SiTailwindcss,
//   SiTypescript,
//   SiGithub
// } from 'react-icons/si';
// import { Icon } from '@iconify/react';

// function Projects() {
//   const [showAll, setShowAll] = useState(false);

//   const projects = [
//     {
//       title: "Healthcare Plus",
//       desc: `HealthCare Plus is a modern web application built with React and TypeScript that allows users to connect with certified doctors, book appointments instantly, and securely manage their health records in one place. It features a clean, responsive interface, smooth navigation, and emphasizes data privacy while ensuring a seamless healthcare booking experience.`,
//       image: "/hospital.png",
//       techs: [<SiReact className="text-cyan-400" />, <SiTailwindcss className="text-cyan-400" />],
//       link: "https://ehealth-chi.vercel.app/",
//       reverse: true,
//       tag: "PROJECT 1"
//     },
//     {
//       title: "Time Bank",
//       desc: `Time Bank is an innovative platform designed to promote skill-sharing through time exchange. Users can connect with others who possess the skills they're seeking and offer their own expertise in return — no money involved, just mutual learning.`,
//       image: "/Time Bank.png",
//       techs: [<SiReact className="text-cyan-400" />, <SiTailwindcss className="text-cyan-400" />, <SiTypescript className="text-blue-400" />, <Icon icon="logos:python" className="h-6 w-6" />],
//       link: "https://github.com/wende12github/Silent-Coders",
//       reverse: false,
//       tag: "PROJECT 2"
//     },
//     {
//       title: "Random Chat App",
//       desc: `Random Chat App is an interactive web application that connects people based on shared interests and current moods, making conversations more engaging and personal. Built with React and TypeScript, it integrates external APIs and utilizes WebSocket technology to enable real-time chatting and smooth user interaction.`,
//       image: "/chatapp.png",
//       techs: [<SiReact className="text-cyan-400" />, <SiTailwindcss className="text-cyan-400" />, <Icon icon="logos:laravel" className="h-6 w-6" />],
//       link: "https://github.com/Hybrid-team-2/web_chatapp",
//       reverse: true,
//       tag: "PROJECT 3"
//     },
//     {
//       title: "Foodie Finder",
//       desc: `Foodie Finder is a modern React-based web application that lets users explore delicious meals from around the world. Whether you're searching by meal name, ingredients, or exploring random dishes, this app makes discovering new recipes easy and fun.`,
//       image: "/foodie-finder.png",
//       techs: [<SiReact className="text-cyan-400" />, <SiTailwindcss className="text-cyan-400" />],
//       link: "https://github.com/Emnet19/foodie-finder",
//       reverse: false,
//       tag: "PROJECT 4"
//     },
//     {
//       title: "Resource For Software Engineering Students",
//       desc: `A comprehensive and well-organized platform designed to support Software Engineering students throughout their academic journey. Built with React, TypeScript, and Tailwind CSS.`,
//       image: "/Book1.png",
//       techs: [<SiReact className="text-cyan-400" />, <SiTailwindcss className="text-cyan-400" />, <SiTypescript className="text-blue-400" />],
//       link: "https://github.com/Elleni-Bisrat/GROUP4_IPII_PROJECT",
//       reverse: true,
//       tag: "PROJECT 5"
//     },
//     {
//       title: "Supermarket Management System",
//       desc: `A complete and intuitive Supermarket Management System designed to streamline daily operations. Built using Java and MySQL with a user-friendly GUI.`,
//       image: "/Supermarket.png",
//       techs: [<Icon icon="logos:java" className='h-6 w-6' />],
//       link: "https://github.com/Emnet19/SuperMarketMgt-Java",
//       reverse: false,
//       tag: "PROJECT 6"
//     },
//     {
//       title: "E Commerce Website For Girls",
//       desc: `A user-friendly and visually appealing platform for girls to shop for products matching their lifestyle. Built with React, TypeScript, and Tailwind CSS.`,
//       image: "/GirlsWeb.png",
//       techs: [<SiReact className="text-cyan-400" />, <SiTailwindcss className="text-cyan-400" />, <SiTypescript className="text-blue-400" />],
//       link: "https://github.com/Emnet19/ecommerce-girls", // Fixed link
//       reverse: true,
//       tag: "PROJECT 7"
//     },
//     {
//       title: "Image Gallery Web App",
//       desc: `A visually engaging and responsive Image Gallery Web App built to deliver an immersive browsing experience. Developed using React and Tailwind CSS.`,
//       image: "/Image Gallary.png",
//       techs: [<SiReact className="text-cyan-400" />, <SiTailwindcss className="text-cyan-400" />, <SiTypescript className="text-blue-400" />],
//       link: "https://github.com/Emnet19/ImageGallary",
//       reverse: false,
//       tag: "PROJECT 8"
//     },
//   ];

//   // Only show first 3 projects if "showAll" is false
//   const visibleProjects = showAll ? projects : projects.slice(0, 3);

//   const handleShowMore = () => {
//     setShowAll(!showAll);
//     // Smooth scroll to projects section after state update
//     setTimeout(() => {
//       document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
//     }, 100);
//   };

//   return (
//     <section id="projects" className="bg-[#0A0A0F] text-white min-h-screen relative overflow-hidden py-16 lg:py-24">
//       {/* Animated background matching other pages */}
//       <div className="absolute inset-0">
//         <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-[100px]"></div>
//         <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-[100px]"></div>
//       </div>

//       <div className="relative container mx-auto px-4 sm:px-6 max-w-7xl">
        
//         {/* Header matching other pages */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 mb-4">
//             <Icon icon="mdi:code-braces" className="w-4 h-4 text-cyan-400" />
//             <span className="text-sm text-gray-300">My work</span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold">
//             <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
//               PROJECTS
//             </span>
//           </h2>
//         </div>

//         {/* Projects */}
//         {visibleProjects.map(({ title, desc, image, techs, link, reverse, tag }, index) => (
//           <div
//             key={index}
//             className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-between gap-10 max-w-7xl mx-auto mb-24`}
//           >
//             {/* Image Section */}
//             <div className="relative flex-1 w-full max-w-md sm:max-w-xl md:max-w-2xl group">
//               <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//               <div className="relative z-10 p-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl">
//                 <div className="relative rounded-xl overflow-hidden bg-[#0A0A0F]">
//                   <img 
//                     src={image} 
//                     alt={title} 
//                     className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-cyan-900/30 mix-blend-overlay"></div>
//                 </div>
//               </div>
//             </div>

//             {/* Content Section */}
//             <div className="flex-1 space-y-4">
//               <span className="text-sm text-cyan-400 font-mono tracking-wider">{tag}</span>
//               <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//                 {title}
//               </h3>
//               <p className="text-gray-400 text-base leading-relaxed">
//                 {desc}
//               </p>

//               {/* Tech Stack */}
//               <div className="flex flex-wrap items-center gap-3 pt-2">
//                 {techs.map((tech, i) => (
//                   <div key={i} className="w-10 h-10 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 flex items-center justify-center hover:border-cyan-400/50 transition-all">
//                     {tech}
//                   </div>
//                 ))}
//               </div>

//               {/* Links - FIXED */}
//               <div className="flex items-center gap-6 pt-4">
//                 <a 
//                   href={link} 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="group flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     window.open(link, '_blank', 'noopener,noreferrer');
//                   }}
//                 >
//                   <span>Live Demo</span>
//                   <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//                   </svg>
//                 </a>
//                 <a 
//                   href={link} 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     window.open(link, '_blank', 'noopener,noreferrer');
//                   }}
//                 >
//                   <SiGithub className="w-4 h-4" />
//                   <span>Source Code</span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}

//         {/* Show More / Show Less Button - FIXED */}
//         <div className="text-center mt-12">
//           <button
//             onClick={handleShowMore}
//             className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold text-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105"
//           >
//             {showAll ? 'Show Less' : 'Show More Projects'}
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Projects;








// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   SiReact,
//   SiTailwindcss,
//   SiTypescript,
//   SiGithub,
//   SiNodedotjs,
//   SiMongodb,
//   SiPython,
//   SiPhp,
//   SiMysql,
//   SiFlutter,
//   SiFigma
// } from 'react-icons/si';
// import { Icon } from '@iconify/react';
// import { 
//   FiCode, 
//   FiLayout, 
//   FiSmartphone, 
//   FiPenTool,
//   FiFilter
// } from 'react-icons/fi';

// function Projects() {
//   const [showAll, setShowAll] = useState(false);
//   const [filter, setFilter] = useState('all');

//   const projects = [
//     // Frontend Projects
//     {
//       title: "Healthcare Plus",
//       desc: `HealthCare Plus is a modern web application built with React and TypeScript that allows users to connect with certified doctors, book appointments instantly, and securely manage their health records in one place.`,
//       image: "/hospital.png",
//       techs: [<SiReact className="text-cyan-400" />, <SiTailwindcss className="text-cyan-400" />, <SiTypescript className="text-blue-400" />],
//       link: "https://ehealth-chi.vercel.app/",
//       category: "frontend",
//       tag: "FRONTEND"
//     },
//     {
//       title: "Foodie Finder",
//       desc: `Foodie Finder is a modern React-based web application that lets users explore delicious meals from around the world. Whether you're searching by meal name, ingredients, or exploring random dishes.`,
//       image: "/foodie-finder.png",
//       techs: [<SiReact className="text-cyan-400" />, <SiTailwindcss className="text-cyan-400" />],
//       link: "https://github.com/Emnet19/foodie-finder",
//       category: "frontend",
//       tag: "FRONTEND"
//     },
//     {
//       title: "Image Gallery Web App",
//       desc: `A visually engaging and responsive Image Gallery Web App built to deliver an immersive browsing experience. Developed using React and Tailwind CSS.`,
//       image: "/Image Gallary.png",
//       techs: [<SiReact className="text-cyan-400" />, <SiTailwindcss className="text-cyan-400" />, <SiTypescript className="text-blue-400" />],
//       link: "https://github.com/Emnet19/ImageGallary",
//       category: "frontend",
//       tag: "FRONTEND"
//     },
//     {
//       title: "E Commerce Website For Girls",
//       desc: `A user-friendly and visually appealing platform for girls to shop for products matching their lifestyle. Built with React, TypeScript, and Tailwind CSS.`,
//       image: "/GirlsWeb.png",
//       techs: [<SiReact className="text-cyan-400" />, <SiTailwindcss className="text-cyan-400" />, <SiTypescript className="text-blue-400" />],
//       link: "https://github.com/Emnet19/ecommerce-girls",
//       category: "frontend",
//       tag: "FRONTEND"
//     },

//     // Backend Projects
//     {
//       title: "Supermarket Management System",
//       desc: `A complete and intuitive Supermarket Management System designed to streamline daily operations. Built using Java and MySQL with a user-friendly GUI.`,
//       image: "/Supermarket.png",
//       techs: [<Icon icon="logos:java" className='h-6 w-6' />, <SiMysql className="text-blue-400" />],
//       link: "https://github.com/Emnet19/SuperMarketMgt-Java",
//       category: "backend",
//       tag: "BACKEND"
//     },
//     {
//       title: "Time Bank API",
//       desc: `Backend API for Time Bank platform designed to promote skill-sharing through time exchange. Handles user authentication, skill matching, and transaction logging.`,
//       image: "/Time Bank.png",
//       techs: [<SiPython className="text-yellow-400" />, <SiMongodb className="text-green-400" />, <SiNodedotjs className="text-green-500" />],
//       link: "https://github.com/wende12github/Silent-Coders",
//       category: "backend",
//       tag: "BACKEND"
//     },
//     {
//       title: "Resource Platform Backend",
//       desc: `Backend system for Software Engineering students resource platform. Manages user data, resource uploads, and search functionality.`,
//       image: "/Book1.png",
//       techs: [<SiPhp className="text-purple-400" />, <SiMysql className="text-blue-400" />],
//       link: "https://github.com/Elleni-Bisrat/GROUP4_IPII_PROJECT",
//       category: "backend",
//       tag: "BACKEND"
//     },

//     // Full Stack Projects (both frontend & backend)
//     {
//       title: "Time Bank",
//       desc: `Time Bank is an innovative platform designed to promote skill-sharing through time exchange. Users can connect with others who possess the skills they're seeking and offer their own expertise in return.`,
//       image: "/Time Bank.png",
//       techs: [<SiReact className="text-cyan-400" />, <SiTailwindcss className="text-cyan-400" />, <SiTypescript className="text-blue-400" />, <SiPython className="text-yellow-400" />],
//       link: "https://github.com/wende12github/Silent-Coders",
//       category: "fullstack",
//       tag: "FULL STACK"
//     },
//     {
//       title: "Resource For Software Engineering Students",
//       desc: `A comprehensive and well-organized platform designed to support Software Engineering students throughout their academic journey.`,
//       image: "/Book1.png",
//       techs: [<SiReact className="text-cyan-400" />, <SiTailwindcss className="text-cyan-400" />, <SiTypescript className="text-blue-400" />, <SiPhp className="text-purple-400" />],
//       link: "https://github.com/Elleni-Bisrat/GROUP4_IPII_PROJECT",
//       category: "fullstack",
//       tag: "FULL STACK"
//     },

//     // Mobile Projects
//     {
//       title: "Random Chat App",
//       desc: `Random Chat App is an interactive mobile application that connects people based on shared interests and current moods. Built with React Native and WebSocket for real-time chatting.`,
//       image: "/chatapp.png",
//       techs: [<SiReact className="text-cyan-400" />, <Icon icon="logos:laravel" className="h-6 w-6" />, <Icon icon="logos:flutter" className="h-6 w-6" />],
//       link: "https://github.com/Hybrid-team-2/web_chatapp",
//       category: "mobile",
//       tag: "MOBILE"
//     },

//     // UI/UX Projects
//     {
//       title: "Healthcare Plus UI/UX",
//       desc: `Complete UI/UX design for Healthcare Plus platform including user flows, wireframes, and high-fidelity prototypes. Designed for optimal patient-doctor interaction.`,
//       image: "/hospital.png",
//       techs: [<SiFigma className="text-purple-400" />, <Icon icon="logos:adobe-xd" className="h-6 w-6" />],
//       link: "#",
//       category: "uiux",
//       tag: "UI/UX"
//     }
//   ];

//   const filters = [
//     { id: 'all', label: 'All Projects', icon: <FiCode /> },
//     { id: 'frontend', label: 'Frontend', icon: <FiLayout /> },
//     { id: 'backend', label: 'Backend', icon: <FiCode /> },
//     { id: 'fullstack', label: 'Full Stack', icon: <FiCode /> },
//     { id: 'mobile', label: 'Mobile', icon: <FiSmartphone /> },
//     { id: 'uiux', label: 'UI/UX', icon: <FiPenTool /> },
//   ];

//   // Filter projects based on selected category
//   const filteredProjects = filter === 'all' 
//     ? projects 
//     : projects.filter(project => project.category === filter);

//   // Show only first 3 if showAll is false
//   const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5 }
//     }
//   };

//   const handleShowMore = () => {
//     setShowAll(!showAll);
//     setTimeout(() => {
//       document.getElementById('projects').scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }, 100);
//   };

//   return (
//     <section id="projects" className="bg-[#0A0A0F] text-white min-h-screen relative overflow-hidden py-16 lg:py-24">
//       {/* Animated background */}
//       <div className="absolute inset-0">
//         <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-[100px]"></div>
//         <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-[100px]"></div>
//       </div>

//       <div className="relative container mx-auto px-4 sm:px-6 max-w-7xl">
        
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 mb-4">
//             <FiFilter className="w-4 h-4 text-cyan-400" />
//             <span className="text-sm text-gray-300">My work</span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold">
//             <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
//               PROJECTS
//             </span>
//           </h2>
//         </motion.div>

//         {/* Filter Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="flex flex-wrap justify-center gap-3 mb-12"
//         >
//           {filters.map((f) => (
//             <button
//               key={f.id}
//               onClick={() => {
//                 setFilter(f.id);
//                 setShowAll(false); // Reset show all when filter changes
//               }}
//               className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 ${
//                 filter === f.id
//                   ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
//                   : 'bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 hover:text-white hover:border-cyan-400/50'
//               }`}
//             >
//               <span className="text-lg">{f.icon}</span>
//               <span className="text-sm font-medium">{f.label}</span>
//             </button>
//           ))}
//         </motion.div>

//         {/* Projects Grid */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={filter}
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             exit={{ opacity: 0 }}
//             className="space-y-16"
//           >
//             {visibleProjects.length > 0 ? (
//               visibleProjects.map((project, index) => (
//                 <motion.div
//                   key={project.title}
//                   variants={itemVariants}
//                   className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-between gap-10 max-w-7xl mx-auto`}
//                 >
//                   {/* Image Section */}
//                   <div className="relative flex-1 w-full max-w-md sm:max-w-xl md:max-w-2xl group">
//                     <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                     <div className="relative z-10 p-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl">
//                       <div className="relative rounded-xl overflow-hidden bg-[#0A0A0F]">
//                         <img 
//                           src={project.image} 
//                           alt={project.title} 
//                           className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-cyan-900/30 mix-blend-overlay"></div>
//                       </div>
//                     </div>
                    
//                     {/* Category Tag on Image */}
//                     <div className="absolute top-4 left-4 z-20">
//                       <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
//                         project.category === 'frontend' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' :
//                         project.category === 'backend' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
//                         project.category === 'fullstack' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
//                         project.category === 'mobile' ? 'bg-pink-500/20 text-pink-400 border border-pink-500/30' :
//                         'bg-purple-500/20 text-purple-400 border border-purple-500/30'
//                       }`}>
//                         {project.tag}
//                       </span>
//                     </div>
//                   </div>

//                   {/* Content Section */}
//                   <div className="flex-1 space-y-4">
//                     <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//                       {project.title}
//                     </h3>
//                     <p className="text-gray-400 text-base leading-relaxed">
//                       {project.desc}
//                     </p>

//                     {/* Tech Stack */}
//                     <div className="flex flex-wrap items-center gap-3 pt-2">
//                       {project.techs.map((tech, i) => (
//                         <div key={i} className="w-10 h-10 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 flex items-center justify-center hover:border-cyan-400/50 transition-all">
//                           {tech}
//                         </div>
//                       ))}
//                     </div>

//                     {/* Links */}
//                     <div className="flex items-center gap-6 pt-4">
//                       <a 
//                         href={project.link} 
//                         target="_blank" 
//                         rel="noopener noreferrer"
//                         className="group flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
//                       >
//                         <span>Live Demo</span>
//                         <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//                         </svg>
//                       </a>
//                       <a 
//                         href={project.link} 
//                         target="_blank" 
//                         rel="noopener noreferrer"
//                         className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
//                       >
//                         <SiGithub className="w-4 h-4" />
//                         <span>Source Code</span>
//                       </a>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))
//             ) : (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 className="text-center py-20"
//               >
//                 <Icon icon="mdi:folder-outline" className="text-6xl text-gray-600 mx-auto mb-4" />
//                 <p className="text-gray-400">No projects found in this category</p>
//               </motion.div>
//             )}
//           </motion.div>
//         </AnimatePresence>

//         {/* Show More / Show Less Button */}
//         {filteredProjects.length > 3 && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//             className="text-center mt-12"
//           >
//             <button
//               onClick={handleShowMore}
//               className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold text-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105"
//             >
//               {showAll ? 'Show Less' : 'Show More Projects'}
//             </button>
//           </motion.div>
//         )}
//       </div>
//     </section>
//   );
// }

// export default Projects;






// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   SiReact,
//   SiTailwindcss,
//   SiTypescript,
//   SiGithub,
//   SiNodedotjs,
//   SiMongodb,
//   SiPython,
//   SiPhp,
//   SiMysql,
//   SiFlutter,
//   SiFigma
// } from 'react-icons/si';
// import { Icon } from '@iconify/react';
// import { 
//   FiCode, 
//   FiLayout, 
//   FiSmartphone, 
//   FiPenTool,
//   FiFilter
// } from 'react-icons/fi';
// import { source } from 'framer-motion/client';

// function Projects() {
//   const [showAll, setShowAll] = useState(false);
//   const [filter, setFilter] = useState('all');
//   const [isLoading, setIsLoading] = useState(false);

//   // Original project order preserved exactly as requested
//   const allProjects = [
//     {
//       title: "Healthcare Plus",
//       desc: `HealthCare Plus is a modern web application built with React and TypeScript that allows users to connect with certified doctors, book appointments instantly, and securely manage their health records in one place.`,
//       image: "/hospital.png",
//       techs: [<SiReact className="text-cyan-400" />, <SiTailwindcss className="text-cyan-400" />, <SiTypescript className="text-blue-400" />],
//       source:"https://github.com/Emnet19/e_health",
//       link: "https://ehealth-chi.vercel.app/",
//       category: "Frontend",
//       tag: "FRONTEND"
//     },
//       {
//       title: "Foodie Finder",
//       desc: `Foodie Finder is a modern React-based web application that lets users explore delicious meals from around the world. Whether you're searching by meal name, ingredients, or exploring random dishes.`,
//       image: "/foodie-finder.png",
//       techs: [<SiReact className="text-cyan-400" />, <SiTailwindcss className="text-cyan-400" />],
//       source:"https://github.com/Emnet19/foodie-finder",
//       link: "https://foodie-finder-weld.vercel.app/",
//       category: "Frontend",
//       tag: "FRONTEND"
//     },
//     {
//       title: "Time Bank",
//       desc: `Time Bank is an innovative platform designed to promote skill-sharing through time exchange. Users can connect with others who possess the skills they're seeking and offer their own expertise in return.`,
//       image: "/Time Bank.png",
//       techs: [<SiReact className="text-cyan-400" />, <SiTailwindcss className="text-cyan-400" />, <SiTypescript className="text-blue-400" />, <SiPython className="text-yellow-400" />],
//       source:"https://github.com/wende12github/Silent-Coders",
//       link: "https://github.com/wende12github/Silent-Coders",
//       category: "Fullstack",
//       tag: "FULL STACK"
//     },
  
//     {
//       title: "Random Chat App",
//       desc: `Random Chat App is an interactive mobile application that connects people based on shared interests and current moods. Built with React Native and WebSocket for real-time chatting.`,
//       image: "/chatapp.png",
//       techs: [<SiReact className="text-cyan-400" />, <Icon icon="logos:laravel" className="h-6 w-6" />,<Icon icon="logos:flutter" className="h-6 w-6" />],
//       source:"https://github.com/Hybrid-team-2/web_chatapp",
//       link: "https://github.com/Hybrid-team-2/web_chatapp",
//       category: ["Mobile", "Frontend", "Backend", "Fullstack"],
//       tag: "MOBILE"
//     },
//     {
//       title: "Resource For Software Engineering Students",
//       desc: `A comprehensive and well-organized platform designed to support Software Engineering students throughout their academic journey.`,
//       image: "/Book1.png",
//       techs: [<SiReact className="text-cyan-400" />, <SiTailwindcss className="text-cyan-400" />, <SiTypescript className="text-blue-400" />, <SiPhp className="text-purple-400" />],
//       source:"https://github.com/Elleni-Bisrat/GROUP4_IPII_PROJECT",
//       link: "https://github.com/Elleni-Bisrat/GROUP4_IPII_PROJECT",
//       category: "Fullstack",
//       tag: "FULL STACK"
//     },
//     {
//       title: "Supermarket Management System",
//       desc: `A complete and intuitive Supermarket Management System designed to streamline daily operations. Built using Java and MySQL with a user-friendly GUI.`,
//       image: "/Supermarket.png",
//       techs: [<Icon icon="logos:java" className='h-6 w-6' />, <SiMysql className="text-blue-400" />],
//       source:"https://github.com/Emnet19/SuperMarketMgt-Java",
//       link: "https://github.com/Emnet19/SuperMarketMgt-Java",
//       category: "Backend",
//       tag: "BACKEND"
//     },
//     {
//       title: "E Commerce Website For Girls",
//       desc: `A user-friendly and visually appealing platform for girls to shop for products matching their lifestyle. Built with React, TypeScript, and Tailwind CSS.`,
//       image: "/GirlsWeb.png",
//       techs: [<SiReact className="text-cyan-400" />, <SiTailwindcss className="text-cyan-400" />, <SiTypescript className="text-blue-400" />],
//       source:"https://github.com/Emnet19/ecommerce-girls",
//       link: "https://github.com/Emnet19/ecommerce-girls",
//       category: "Frontend",
//       tag: "FRONTEND"
//     },
//     {
//       title: "Image Gallery Web App",
//       desc: `A visually engaging and responsive Image Gallery Web App built to deliver an immersive browsing experience. Developed using React and Tailwind CSS.`,
//       image: "/Image Gallary.png",
//       techs: [<SiReact className="text-cyan-400" />, <SiTailwindcss className="text-cyan-400" />, <SiTypescript className="text-blue-400" />],
//       source:"https://github.com/Emnet19/ImageGallary",
//       link: "https://github.com/Emnet19/ImageGallary",
//       category: "Frontend",
//       tag: "FRONTEND"
//     }
//   ];

//   const filters = [
//     { id: 'All', label: 'All Projects', icon: <FiCode /> },
//     { id: 'Frontend', label: 'Frontend', icon: <FiLayout /> },
//     { id: 'Backend', label: 'Backend', icon: <FiCode /> },
//     { id: 'Fullstack', label: 'Full Stack', icon: <FiCode /> },
//     { id: 'Mobile', label: 'Mobile', icon: <FiSmartphone /> },
//     { id: 'UI/UX', label: 'UI/UX', icon: <FiPenTool /> },

//   ];

//   // Filter projects based on selected category
//   const filteredProjects = filter === 'All' 
//     ? allProjects // Keep original order for "all"
//     : allProjects.filter(project => project.category === filter);

//   // Show only first 3 if showAll is false
//   const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

//   const handleShowMore = () => {
//     setIsLoading(true);
//     setShowAll(!showAll);
    
//     // Small delay to show loading state, then scroll
//     setTimeout(() => {
//       setIsLoading(false);
//       document.getElementById('projects').scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }, 300);
//   };

//   const handleFilterChange = (filterId) => {
//     setIsLoading(true);
//     setFilter(filterId);
//     setShowAll(false);
    
//     // Small delay to show loading state
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 300);
//   };

//   // Container variants with faster animation
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.05, // Reduced from 0.1 to 0.05 for faster appearance
//         duration: 0.3
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.3 } // Reduced from 0.5 to 0.3
//     }
//   };

//   return (
//     <section id="projects" className="bg-[#0A0A0F] text-white min-h-screen relative overflow-hidden py-16 lg:py-24">
//       {/* Animated background */}
//       <div className="absolute inset-0">
//         <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-[100px]"></div>
//         <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-[100px]"></div>
//       </div>

//       <div className="relative container mx-auto px-4 sm:px-6 max-w-7xl">
        
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4 }}
//           className="text-center mb-12"
//         >
//           <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 mb-4">
//             <FiFilter className="w-4 h-4 text-cyan-400" />
//             <span className="text-sm text-gray-300">My work</span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold">
//             <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
//               PROJECTS
//             </span>
//           </h2>
//         </motion.div>

//         {/* Filter Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.1 }}
//           className="flex flex-wrap justify-center gap-3 mb-12"
//         >
//           {filters.map((f) => (
//             <button
//               key={f.id}
//               onClick={() => handleFilterChange(f.id)}
//               className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 ${
//                 filter === f.id
//                   ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
//                   : 'bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 hover:text-white hover:border-cyan-400/50'
//               }`}
//             >
//               <span className="text-lg">{f.icon}</span>
//               <span className="text-sm font-medium">{f.label}</span>
//             </button>
//           ))}
//         </motion.div>

//         {/* Loading State */}
//         {isLoading && (
//           <div className="flex justify-center items-center py-20">
//             <div className="w-10 h-10 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
//           </div>
//         )}

//         {/* Projects Grid */}
//         {!isLoading && (
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={filter + (showAll ? '-all' : '-limited')}
//               variants={containerVariants}
//               initial="hidden"
//               animate="visible"
//               exit={{ opacity: 0 }}
//               className="space-y-16"
//             >
//               {visibleProjects.length > 0 ? (
//                 visibleProjects.map((project, index) => (
//                   <motion.div
//                     key={project.title}
//                     variants={itemVariants}
//                     className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-between gap-10 max-w-7xl mx-auto`}
//                   >
//                     {/* Image Section */}
//                     <div className="relative flex-1 w-full max-w-md sm:max-w-xl md:max-w-2xl group">
//                       <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                       <div className="relative z-10 p-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl">
//                         <div className="relative rounded-xl overflow-hidden bg-[#0A0A0F]">
//                           <img 
//                             src={project.image} 
//                             alt={project.title} 
//                             className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700"
//                           />
//                           <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-cyan-900/30 mix-blend-overlay"></div>
//                         </div>
//                       </div>
                      
//                       {/* Category Tag on Image */}
//                       <div className="absolute top-4 left-4 z-20">
//                         <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
//                           project.category === 'frontend' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' :
//                           project.category === 'backend' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
//                           project.category === 'fullstack' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
//                           project.category === 'mobile' ? 'bg-pink-500/20 text-pink-400 border border-pink-500/30' :
//                           'bg-purple-500/20 text-purple-400 border border-purple-500/30'
//                         }`}>
//                           {project.tag}
//                         </span>
//                       </div>
//                     </div>

//                     {/* Content Section */}
//                     <div className="flex-1 space-y-4">
//                       <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//                         {project.title}
//                       </h3>
//                       <p className="text-gray-400 text-base leading-relaxed">
//                         {project.desc}
//                       </p>

//                       {/* Tech Stack */}
//                       <div className="flex flex-wrap items-center gap-3 pt-2">
//                         {project.techs.map((tech, i) => (
//                           <div key={i} className="w-10 h-10 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 flex items-center justify-center hover:border-cyan-400/50 transition-all">
//                             {tech}
//                           </div>
//                         ))}
//                       </div>

//                       {/* Links */}
//                       <div className="flex items-center gap-6 pt-4">
//                         <a 
//                           href={project.link} 
//                           target="_blank" 
//                           rel="noopener noreferrer"
//                           className="group flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
//                         >
//                           <span>Live Demo</span>
//                           <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//                           </svg>
//                         </a>
//                         <a 
//                           href={project.source} 
//                           target="_blank" 
//                           rel="noopener noreferrer"
//                           className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
//                         >
//                           <SiGithub className="w-4 h-4" />
//                           <span>Source Code</span>
//                         </a>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))
//               ) : (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className="text-center py-20"
//                 >
//                   <Icon icon="mdi:folder-outline" className="text-6xl text-gray-600 mx-auto mb-4" />
//                   <p className="text-gray-400">No projects found in this category</p>
//                 </motion.div>
//               )}
//             </motion.div>
//           </AnimatePresence>
//         )}

//         {/* Show More / Show Less Button */}
//         {!isLoading && filteredProjects.length > 3 && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="text-center mt-12"
//           >
//             <button
//               onClick={handleShowMore}
//               className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold text-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105"
//             >
//               {showAll ? 'Show Less' : 'Show More Projects'}
//             </button>
//           </motion.div>
//         )}
//       </div>
//     </section>
//   );
// }

// export default Projects;



import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiGithub,
  SiNodedotjs,
  SiMongodb,
  SiPython,
  SiPhp,
  SiMysql,
  SiFlutter,
  SiFigma
} from 'react-icons/si';
import { Icon } from '@iconify/react';
import { 
  FiCode, 
  FiLayout, 
  FiSmartphone, 
  FiPenTool,
  FiFilter
} from 'react-icons/fi';

function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  // Original project order preserved
  const allProjects = [
    {
      title: "Healthcare Plus",
      desc: `HealthCare Plus is a modern web application built with React and TypeScript that allows users to connect with certified doctors, book appointments instantly, and securely manage their health records in one place.`,
      image: "/hospital.png",
      techs: [<SiReact className="text-cyan-400" />, <SiTailwindcss className="text-cyan-400" />, <SiTypescript className="text-blue-400" />],
      source:"https://github.com/Emnet19/e_health",
      link: "https://ehealth-chi.vercel.app/",
      categories: ["frontend"], // Appears in both Frontend and UI/UX
      tag: "FRONTEND"
    },
    {
      title: "Time Bank",
      desc: `Time Bank is an innovative platform designed to promote skill-sharing through time exchange. Users can connect with others who possess the skills they're seeking and offer their own expertise in return.`,
      image: "/Time Bank.png",
      techs: [<SiReact className="text-cyan-400" />, <SiTailwindcss className="text-cyan-400" />, <SiTypescript className="text-blue-400" />, <SiPython className="text-yellow-400" />],
      source:"https://github.com/wende12github/Silent-Coders",
      link: "https://github.com/wende12github/Silent-Coders",
      categories: ["fullstack", "frontend", "backend"], // Appears in Full Stack, Frontend, and Backend
      tag: "FULL STACK"
    },
    {
      title: "Foodie Finder",
      desc: `Foodie Finder is a modern React-based web application that lets users explore delicious meals from around the world. Whether you're searching by meal name, ingredients, or exploring random dishes.`,
      image: "/foodie-finder.png",
      techs: [<SiReact className="text-cyan-400" />, <SiTailwindcss className="text-cyan-400" />],
      source:"https://github.com/Emnet19/foodie-finder",
      link: "https://foodie-finder-weld.vercel.app/",
      categories: ["frontend"],
      tag: "FRONTEND"
    },
     {
      title: "Africa Restourant",
      desc: `Africa Restourant is a modern web application that showcases the rich culinary traditions of Africa. It features a responsive design and interactive elements to enhance user engagement.`,
      image: "/africaRestourant.png",
      techs: [<SiReact className="text-cyan-400" />, <SiTailwindcss className="text-cyan-400" />, <SiTypescript className="text-blue-400" />],
      source:"https://github.com/Emnet19/africaresturants",
      link: "https://africaresturants.vercel.app/",
      categories: ["frontend",],
      tag: "Frontend"
    },
    {
      title: "Random Chat App",
      desc: `Random Chat App is an interactive mobile application that connects people based on shared interests and current moods. Built with React Native and WebSocket for real-time chatting.`,
      image: "/chatapp.png",
      techs: [<SiReact className="text-cyan-400" />, <Icon icon="logos:laravel" className="h-6 w-6" />,<Icon icon="logos:flutter" className="h-6 w-6" />],
      source:"https://github.com/Hybrid-team-2/web_chatapp",
      link: "https://github.com/Hybrid-team-2/web_chatapp",
      categories: ["mobile", "fullstack"], // Appears in Mobile and Full Stack
      tag: "MOBILE & FULL STACK"
    },
    {
      title: "RecycleX",
      desc: `RecycleX is a sustainable web application that helps users track and manage their recycling efforts. It provides insights into recycling habits and promotes eco-friendly practices.`,
      image: "/RecycleX.png",
      techs: [<SiFigma className="text-purple-400" />,<Icon icon="logos:flutter" className="h-6 w-6" />],
      source:"https://github.com/Emnet19/Recycle_X",
      link: "https://www.figma.com/design/4nagfFboOQvOwTmFGJF95D/RecycleX?node-id=0-1&p=f&t=O81IX6jHNOA8Vv0R-0",
      categories: ["uiux","mobile"],
      tag: "UI/UX & MOBILE"
    },
    
    {
      title: "Resource For Software Engineering Students",
      desc: `A comprehensive and well-organized platform designed to support Software Engineering students throughout their academic journey.`,
      image: "/Book1.png",
      techs: [<SiReact className="text-cyan-400" />, <SiTailwindcss className="text-cyan-400" />, <SiTypescript className="text-blue-400" />, <SiPhp className="text-purple-400" />],
      source:"https://github.com/Elleni-Bisrat/GROUP4_IPII_PROJECT",
      link: "https://github.com/Elleni-Bisrat/GROUP4_IPII_PROJECT",
      categories: ["fullstack", "frontend", "backend"], // Appears in Full Stack, Frontend, and Backend
      tag: "FULL STACK"
    },
     {
      title: "Movie Recommendation",
      desc: `Movie Recommendation is a web application that suggests movies based on user preferences and viewing history. It features a clean UI and integrates with movie databases for real-time updates.`,
      image: "/movie.png",
      techs: [<SiFigma className="text-purple-400" />,],
      source: "https://www.figma.com/design/hw54ZWHV99nFTBiBCC9lTG/Movie-Recommendation?node-id=0-1&p=f&t=O81IX6jHNOA8Vv0R-0",
      link: "https://www.figma.com/design/hw54ZWHV99nFTBiBCC9lTG/Movie-Recommendation?node-id=0-1&p=f&t=O81IX6jHNOA8Vv0R-0",
      categories: ["uiux"],
      tag: "UI/UX"
    },
    {
      title: "chatApp UI/UX Design",
      desc: `chatApp UI/UX Design is a comprehensive design system for a chat application. It features a modern and intuitive interface with a focus on user experience and accessibility.`,
      image: "/chatUi.png",
      techs: [<SiFigma className="text-purple-400" />,],
      source: "https://www.figma.com/design/SijdtOGL0N4229qCM1ctVy/Chat-app?node-id=0-1&p=f&t=u62DMO339gBJOX40-0",
      link: "https://www.figma.com/design/SijdtOGL0N4229qCM1ctVy/Chat-app?node-id=0-1&p=f&t=u62DMO339gBJOX40-0",
      categories: ["uiux"],
      tag: "UI/UX"
    },
    {
      title: "Supermarket Management System",
      desc: `A complete and intuitive Supermarket Management System designed to streamline daily operations. Built using Java and MySQL with a user-friendly GUI.`,
      image: "/Supermarket.png",
      techs: [<Icon icon="logos:java" className='h-6 w-6' />, <SiMysql className="text-blue-400" />],
      source:"https://github.com/Emnet19/SuperMarketMgt-Java",
      link: "https://github.com/Emnet19/SuperMarketMgt-Java",
      categories: ["backend"],
      tag: "BACKEND"
    },
    {
      title: "E Commerce Website For Girls",
      desc: `A user-friendly and visually appealing platform for girls to shop for products matching their lifestyle. Built with React, TypeScript, and Tailwind CSS.`,
      image: "/GirlsWeb.png",
      techs: [<SiReact className="text-cyan-400" />, <SiTailwindcss className="text-cyan-400" />, <SiTypescript className="text-blue-400" />],
      source:"https://github.com/Emnet19/ecommerce-girls",
      link: "https://github.com/Emnet19/ecommerce-girls",
      categories: ["frontend"], // Appears in Frontend and UI/UX
      tag: "FRONTEND "
    },
    {
      title: "Image Gallery Web App",
      desc: `A visually engaging and responsive Image Gallery Web App built to deliver an immersive browsing experience. Developed using React and Tailwind CSS.`,
      image: "/Image Gallary.png",
      techs: [<SiReact className="text-cyan-400" />, <SiTailwindcss className="text-cyan-400" />, <SiTypescript className="text-blue-400" />],
      source:"https://github.com/Emnet19/ImageGallary",
      link: "https://github.com/Emnet19/ImageGallary",
      categories: ["frontend"],
      tag: "FRONTEND"
    },
    
  ];

  const filters = [
    { id: 'all', label: 'All Projects', icon: <FiCode /> },
    { id: 'frontend', label: 'Frontend', icon: <FiLayout /> },
    { id: 'backend', label: 'Backend', icon: <FiCode /> },
    { id: 'fullstack', label: 'Full Stack', icon: <FiCode /> },
    { id: 'mobile', label: 'Mobile', icon: <FiSmartphone /> },
    { id: 'uiux', label: 'UI/UX', icon: <FiPenTool /> },
  ];

  // Filter projects based on selected category (now checking if categories array includes the filter)
  const filteredProjects = filter === 'all' 
    ? allProjects // Keep original order for "all"
    : allProjects.filter(project => project.categories.includes(filter));

  // Show only first 3 if showAll is false
  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  const handleShowMore = () => {
    setIsLoading(true);
    setShowAll(!showAll);
    
    setTimeout(() => {
      setIsLoading(false);
      document.getElementById('projects').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
  };

  const handleFilterChange = (filterId) => {
    setIsLoading(true);
    setFilter(filterId);
    setShowAll(false);
    
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  // Faster animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        duration: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 }
    }
  };

  // Function to get tag color based on categories
  const getTagColor = (categories) => {
    if (categories.includes('fullstack')) return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
    if (categories.includes('frontend') && categories.includes('uiux')) return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
    if (categories.includes('frontend')) return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30';
    if (categories.includes('backend')) return 'bg-green-500/20 text-green-400 border-green-500/30';
    if (categories.includes('mobile')) return 'bg-pink-500/20 text-pink-400 border-pink-500/30';
    if (categories.includes('uiux')) return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
    return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  };

  return (
    <section id="projects" className="bg-[#0A0A0F] text-white min-h-screen relative overflow-hidden py-16 lg:py-24">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 mb-4">
            <FiFilter className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-gray-300">My work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              PROJECTS
            </span>
          </h2>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => handleFilterChange(f.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 ${
                filter === f.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 hover:text-white hover:border-cyan-400/50'
              }`}
            >
              <span className="text-lg">{f.icon}</span>
              <span className="text-sm font-medium">{f.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <div className="w-10 h-10 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {/* Projects Grid */}
        {!isLoading && (
          <AnimatePresence mode="wait">
            <motion.div
              key={filter + (showAll ? '-all' : '-limited')}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              className="space-y-16"
            >
              {visibleProjects.length > 0 ? (
                visibleProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    variants={itemVariants}
                    className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-between gap-10 max-w-7xl mx-auto`}
                  >
                    {/* Image Section */}
                    <div className="relative flex-1 w-full max-w-md sm:max-w-xl md:max-w-2xl group">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10 p-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl">
                        <div className="relative rounded-xl overflow-hidden bg-[#0A0A0F]">
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-cyan-900/30 mix-blend-overlay"></div>
                        </div>
                      </div>
                      
                      {/* Category Tag on Image - Now handles multiple categories */}
                      <div className="absolute top-4 left-4 z-20">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${getTagColor(project.categories)}`}>
                          {project.tag}
                        </span>
                      </div>

                      {/* Additional category indicators */}
                      {project.categories.length > 1 && (
                        <div className="absolute bottom-4 left-4 z-20 flex gap-1">
                          {project.categories.map((cat, i) => (
                            <span key={i} className="w-2 h-2 rounded-full bg-cyan-400/50"></span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 space-y-4">
                      <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-base leading-relaxed">
                        {project.desc}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        {project.techs.map((tech, i) => (
                          <div key={i} className="w-10 h-10 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 flex items-center justify-center hover:border-cyan-400/50 transition-all">
                            {tech}
                          </div>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex items-center gap-6 pt-4">
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="group flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                        >
                          <span>Live Demo</span>
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                        <a 
                          href={project.source} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                        >
                          <SiGithub className="w-4 h-4" />
                          <span>Source Code</span>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20"
                >
                  <Icon icon="mdi:folder-outline" className="text-6xl text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-400">No projects found in this category</p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        )}

        {/* Show More / Show Less Button */}
        {!isLoading && filteredProjects.length > 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mt-12"
          >
            <button
              onClick={handleShowMore}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold text-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105"
            >
              {showAll ? 'Show Less' : 'Show More Projects'}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Projects;