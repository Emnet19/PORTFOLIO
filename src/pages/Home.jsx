




// import { motion } from 'framer-motion';
// import Nav from '../components/Nav';

// function Home() {
//   const textVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.3,
//         duration: 0.8,
//         ease: "easeOut",
//       },
//     }),
//   };

//   const imageVariants = {
//     hidden: { opacity: 0, y: -50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: 0.9,
//         duration: 0.8,
//         ease: "easeOut",
//       },
//     },
//   };
// const resumeUrl = '/Emnet-Befkadu-Woldekidan-FlowCV-Resume.pdf'; // Update with your actual resume URL
  
//   return (
//     <div className="bg-[#0b1120] text-white min-h-screen">
//       <Nav />

//       <div className="container mx-auto px-6 py-12 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
//         {/* Text Section */}
//         <div className="w-full md:w-1/2 text-center md:text-left">
//           <motion.h2
//             className="text-3xl sm:text-4xl font-bold"
//             initial="hidden"
//             animate="visible"
//             custom={0}
//             variants={textVariants}
//           >
//             HI! I'M <span className="text-cyan-400">EMNET BEFKADU,</span>
//           </motion.h2>

//           <motion.h2
//             className="mt-4 text-lg sm:text-2xl font-medium"
//             initial="hidden"
//             animate="visible"
//             custom={1}
//             variants={textVariants}
//           >
//             a Full Stack Developer passionate about building clean, responsive, and user-friendly web applications.
//           </motion.h2>

//           <motion.h2
//             className="mt-4 text-lg sm:text-2xl font-medium"
//             initial="hidden"
//             animate="visible"
//             custom={2}
//             variants={textVariants}
//           >
//             I enjoy solving problems and bringing ideas to life through code.
//           </motion.h2>

//           <motion.div
//             initial="hidden"
//             animate="visible"
//             custom={3}
//             variants={textVariants}
//           >

//             <a
//   href={resumeUrl}
//   target="_blank"
//   rel="noopener noreferrer"
//   className="rounded-full px-8 py-3 mt-6 bg-cyan-500 text-black font-bold text-lg shadow-md hover:bg-cyan-600 transition-all duration-300 inline-block"
// >
//   Resume
// </a>

//             {/* <button className="rounded-full px-8 py-3 mt-6 bg-cyan-500 text-black font-bold text-lg shadow-md hover:bg-cyan-600 transition-all duration-300"
//                onClick={()=>window.open(encodeURI(resumeUrl), '_blank')}
//             >
//               Resume
//             </button> */}
//           </motion.div>
//         </div>

//         {/* Image Section */}
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={imageVariants}
//           whileHover={{ scale: 1.02 }}
//           className="w-full md:w-1/2 flex justify-center relative"
//         >
//           <div className="absolute top-6 right-6 w-[80%] h-[80%] border-4 border-cyan-500 rounded-lg z-0 hidden md:block"></div>
//           <img
//             src="/profile.png"
//             alt="Emnet Befkadu"
//             className="relative z-10 rounded-lg shadow-lg w-[280px] sm:w-[350px] md:w-[400px] object-cover"
//           />
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// export default Home;





// import { motion } from 'framer-motion';
// import { useState, useEffect } from 'react';
// import Nav from '../components/Nav';
// import { 
//   FiGithub, 
//   FiLinkedin, 
//   FiTwitter, 
//   FiMail, 
//   FiExternalLink,
//   FiDownload,
//   FiChevronRight
// } from 'react-icons/fi';
// import { SiLeetcode, SiMedium } from 'react-icons/si';

// function Home() {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [cursorVariant, setCursorVariant] = useState("default");

//   useEffect(() => {
//     const mouseMove = (e) => {
//       setMousePosition({
//         x: e.clientX,
//         y: e.clientY
//       });
//     };

//     window.addEventListener("mousemove", mouseMove);

//     return () => {
//       window.removeEventListener("mousemove", mouseMove);
//     };
//   }, []);

//   const variants = {
//     default: {
//       x: mousePosition.x - 16,
//       y: mousePosition.y - 16,
//     },
//     text: {
//       height: 150,
//       width: 150,
//       x: mousePosition.x - 75,
//       y: mousePosition.y - 75,
//       backgroundColor: "rgba(6, 182, 212, 0.1)",
//       mixBlendMode: "screen"
//     }
//   };

//   const textVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.15,
//         duration: 0.8,
//         ease: [0.6, -0.05, 0.01, 0.99],
//       },
//     }),
//   };

//   const imageVariants = {
//     hidden: { opacity: 0, scale: 0.8, rotate: -5 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       rotate: 0,
//       transition: {
//         delay: 0.5,
//         duration: 1,
//         ease: "easeOut",
//       },
//     },
//   };

//   const floatingIcons = [
//     { icon: FiGithub, delay: 0, angle: 0, url: "https://github.com/emnet-befkadu", label: "GitHub" },
//     { icon: FiLinkedin, delay: 0.2, angle: 45, url: "https://linkedin.com/in/emnet-befkadu", label: "LinkedIn" },
//     { icon: FiTwitter, delay: 0.4, angle: 90, url: "https://twitter.com/emnet_befkadu", label: "Twitter" },
//     { icon: FiMail, delay: 0.6, angle: 135, url: "mailto:emnet.befkadu@example.com", label: "Email" },
//     { icon: SiLeetcode, delay: 0.8, angle: 180, url: "https://leetcode.com/emnet-befkadu", label: "LeetCode" },
//     { icon: SiMedium, delay: 1, angle: 225, url: "https://medium.com/@emnet-befkadu", label: "Medium" },
//   ];

//   const techStack = [
//     { name: "React", color: "#61DAFB", level: 90 },
//     { name: "Next.js", color: "#FFFFFF", level: 85 },
//     { name: "Node.js", color: "#339933", level: 88 },
//     { name: "TypeScript", color: "#3178C6", level: 82 },
//     { name: "MongoDB", color: "#47A248", level: 80 },
//     { name: "Tailwind", color: "#06B6D4", level: 95 },
//   ];

//   const resumeUrl = '/Emnet-Befkadu-Woldekidan-FlowCV-Resume.pdf';

//   return (
//     <div className="bg-[#030014] text-white min-h-screen overflow-hidden relative">
//       {/* Animated background gradient */}
//       <div className="fixed inset-0">
//         <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-[100px] animate-pulse"></div>
//         <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
//       </div>

//       {/* Custom cursor (optional - can be removed if not desired) */}
//       <motion.div
//         className="fixed top-0 left-0 w-8 h-8 border-2 border-cyan-400 rounded-full pointer-events-none z-50 hidden lg:block"
//         variants={variants}
//         animate={cursorVariant}
//       />

//       <Nav />

//       <main className="relative container mx-auto px-6 py-8 lg:py-16">
//         {/* Status badge */}
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.2 }}
//           className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 mb-8"
//         >
//           <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
//           <span className="text-sm text-gray-300">Available for work</span>
//         </motion.div>

//         <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          
//           {/* Text Section */}
//           <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
//             <motion.div
//               custom={0}
//               initial="hidden"
//               animate="visible"
//               variants={textVariants}
//               className="space-y-2"
//             >
//               <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
//                 <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
//                   Emnet Befkadu
//                 </span>
//               </h2>
//               <div className="text-xl lg:text-2xl text-gray-300 font-light">
//                 Full Stack Developer & UI/UX Designer
//               </div>
//             </motion.div>

//             <motion.p
//               custom={1}
//               initial="hidden"
//               animate="visible"
//               variants={textVariants}
//               className="text-gray-400 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed"
//             >
//               Crafting beautiful digital experiences with modern web technologies. 
//               Specialized in building scalable applications that solve real-world problems 
//               with elegant design and robust architecture.
//             </motion.p>

//             {/* Tech stack pills */}
//             <motion.div
//               custom={2}
//               initial="hidden"
//               animate="visible"
//               variants={textVariants}
//               className="flex flex-wrap gap-3 justify-center lg:justify-start"
//             >
//               {techStack.map((tech, index) => (
//                 <motion.span
//                   key={tech.name}
//                   whileHover={{ scale: 1.1, y: -2 }}
//                   className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full text-sm font-medium border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
//                   style={{ borderColor: `${tech.color}20` }}
//                 >
//                   {tech.name}
//                 </motion.span>
//               ))}
//             </motion.div>

//             {/* CTA Buttons */}
//             <motion.div
//               custom={3}
//               initial="hidden"
//               animate="visible"
//               variants={textVariants}
//               className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4"
//             >
//               <motion.a
//                 href="#work"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold text-lg overflow-hidden"
//               >
//                 <span className="relative z-10 flex items-center gap-2">
//                   View My Work
//                   <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
//                 </span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </motion.a>

//               <motion.a
//                 href={resumeUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 py-4 bg-white/5 backdrop-blur-sm rounded-full font-semibold text-lg border border-white/10 hover:border-cyan-400/50 transition-all duration-300 flex items-center gap-2 group"
//               >
//                 Download Resume
//                 <FiDownload className="group-hover:translate-y-1 transition-transform" />
//               </motion.a>
//             </motion.div>
//           </div>

//           {/* Image Section with Floating Icons */}
//           <div className="w-full lg:w-1/2 relative">
//             <motion.div
//               initial="hidden"
//               animate="visible"
//               variants={imageVariants}
//               className="relative flex justify-center"
//             >
//               {/* Main image container */}
//               <div className="relative w-[300px] sm:w-[350px] lg:w-[400px]">
//                 {/* Gradient orb background */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                
//                 {/* Image frame */}
//                 <div className="relative z-10 p-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-[2rem]">
//                   <div className="relative overflow-hidden rounded-[1.8rem] bg-[#030014]">
//                     <img
//                       src="/profile.png"
//                       alt="Emnet Befkadu"
//                       className="w-full h-auto object-cover transform hover:scale-110 transition-transform duration-700"
//                     />
                    
//                     {/* Overlay gradient */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent mix-blend-overlay"></div>
//                   </div>
//                 </div>

//                 {/* Floating social icons */}
//                 {floatingIcons.map(({ icon: Icon, delay, angle, url, label }) => (
//                   <motion.a
//                     key={label}
//                     href={url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="absolute top-1/2 left-1/2 w-12 h-12 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 hover:border-cyan-400 hover:bg-cyan-500/20 transition-all duration-300 group z-20"
//                     initial={{ scale: 0, opacity: 0 }}
//                     animate={{ scale: 1, opacity: 1 }}
//                     whileHover={{ scale: 1.2 }}
//                     transition={{
//                       delay: 1.2 + delay,
//                       type: "spring",
//                       stiffness: 260,
//                       damping: 20
//                     }}
//                     style={{
//                       transform: `rotate(${angle}deg) translateX(120px) rotate(-${angle}deg)`,
//                       transformOrigin: '0 0'
//                     }}
//                   >
//                     <Icon className="w-5 h-5 text-gray-300 group-hover:text-cyan-400 transition-colors" />
//                     <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
//                       {label}
//                     </span>
//                   </motion.a>
//                 ))}

//                 {/* Decorative elements */}
//                 <motion.div
//                   className="absolute -top-4 -right-4 w-20 h-20 border-2 border-cyan-400/30 rounded-full"
//                   animate={{ rotate: 360 }}
//                   transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                 />
//                 <motion.div
//                   className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-purple-400/30 rounded-full"
//                   animate={{ rotate: -360 }}
//                   transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//                 />
//               </div>
//             </motion.div>
//           </div>
//         </div>

//         {/* Scroll indicator */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 2, duration: 1 }}
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
//         >
//           <div className="flex flex-col items-center gap-2">
//             <span className="text-sm text-gray-400">Scroll to explore</span>
//             <motion.div
//               animate={{ y: [0, 10, 0] }}
//               transition={{ duration: 2, repeat: Infinity }}
//               className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1"
//             >
//               <div className="w-1 h-2 bg-cyan-400 rounded-full"></div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </main>
//     </div>
//   );
// }

// export default Home;





// import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
// import { useState, useEffect, useRef } from 'react';
// import Nav from '../components/Nav';
// import { BsStars } from 'react-icons/bs'; // Add this import

// // Then use:
// {/* <BsStars className="w-4 h-4 text-yellow-400 animate-pulse" /> */}
// import { 
//   FiGithub, 
//   FiLinkedin, 
//   FiTwitter, 
//   FiMail, 
//   FiInstagram,
//   FiCodepen,
//   FiDribbble,
//   FiDownload,
//   FiArrowRight,
//   FiStar,
//   FiActivity,
//   FiAward , 
//   FiZap
// } from 'react-icons/fi';
// import { SiLeetcode, SiMedium, SiDevdotto } from 'react-icons/si';

// function Home() {
//   const [isHovering, setIsHovering] = useState(false);
//   const containerRef = useRef(null);
  
//   // 3D tilt effect for the image
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
  
//   const mouseXSpring = useSpring(x);
//   const mouseYSpring = useSpring(y);
  
//   const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
//   const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

//   const handleMouseMove = (e) => {
//     const rect = containerRef.current.getBoundingClientRect();
//     const width = rect.width;
//     const height = rect.height;
//     const mouseX = e.clientX - rect.left;
//     const mouseY = e.clientY - rect.top;
//     const xPct = mouseX / width - 0.5;
//     const yPct = mouseY / height - 0.5;
//     x.set(xPct);
//     y.set(yPct);
//   };

//   const handleMouseLeave = () => {
//     x.set(0);
//     y.set(0);
//   };

//   // Text reveal animation
//   const textVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.1,
//         duration: 0.6,
//         ease: [0.2, 0.65, 0.3, 0.9],
//       },
//     }),
//   };

//   // Floating icons orbiting the image
//   const socialLinks = [
//     { icon: FiGithub, delay: 0, angle: 0, url: "https://github.com/emnet-befkadu", label: "GitHub", color: "#fff" },
//     { icon: FiLinkedin, delay: 0.1, angle: 51.4, url: "https://linkedin.com/in/emnet-befkadu", label: "LinkedIn", color: "#0A66C2" },
//     { icon: FiTwitter, delay: 0.2, angle: 102.8, url: "https://twitter.com/emnet_befkadu", label: "Twitter", color: "#1DA1F2" },
//     { icon: FiInstagram, delay: 0.3, angle: 154.2, url: "https://instagram.com/emnet_befkadu", label: "Instagram", color: "#E4405F" },
//     // { icon: FiCodepen, delay: 0.4, angle: 205.6, url: "https://codepen.io/emnet-befkadu", label: "CodePen", color: "#fff" },
//     // { icon: FiDribbble, delay: 0.5, angle: 257, url: "https://dribbble.com/emnet_befkadu", label: "Dribbble", color: "#EA4C89" },
//     // { icon: SiDevdotto, delay: 0.6, angle: 308.4, url: "https://dev.to/emnet_befkadu", label: "Dev.to", color: "#0A0A0A" },
//   ];

//   // Skills with animated progress
//   const skills = [
//     { name: "Frontend Development", level: 92, icon: "" },
//     { name: "Backend Development", level: 88, icon: "" },
//     { name: "UI/UX Design", level: 85, icon: "" },
//     { name: "Database Design", level: 82, icon: "" },
//   ];

//   const technologies = [
//     { name: "React", icon: "⚛️", color: "#61DAFB" },
//     { name: "Next.js", icon: "▲", color: "#fff" },
//     { name: "Node.js", icon: "🟢", color: "#339933" },
//     { name: "TypeScript", icon: "🔷", color: "#3178C6" },
//     { name: "MongoDB", icon: "🍃", color: "#47A248" },
//     { name: "Tailwind", icon: "🌊", color: "#06B6D4" },
//     { name: "GraphQL", icon: "◢", color: "#E10098" },
//     { name: "Figma", icon: "🎨", color: "#F24E1E" },
//   ];

//   const resumeUrl = '/Emnet-Befkadu-Woldekidan-FlowCV-Resume.pdf';

//   return (
//     <div className="bg-[#0A0A0F] text-white min-h-screen overflow-hidden relative font-sans">
//       {/* Modern animated background with particles */}
//       <div className="fixed inset-0 overflow-hidden">
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        
//         {/* Animated grid lines */}
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse"></div>
//           <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse"></div>
//           <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-pulse"></div>
//           <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent animate-pulse"></div>
//         </div>

//         {/* Floating particles */}
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 bg-white/10 rounded-full"
//             initial={{
//               x: Math.random() * window.innerWidth,
//               y: Math.random() * window.innerHeight,
//             }}
//             animate={{
//               x: Math.random() * window.innerWidth,
//               y: Math.random() * window.innerHeight,
//               transition: {
//                 duration: Math.random() * 20 + 10,
//                 repeat: Infinity,
//                 ease: "linear",
//               },
//             }}
//           />
//         ))}
//       </div>

//       <Nav />

//       <main ref={containerRef} className="relative container mx-auto px-4 sm:px-6 py-8 lg:py-16 max-w-7xl">
//         {/* Modern status badge with sparkle */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.2 }}
//           className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-2xl border border-white/10 mb-8 group hover:bg-white/10 transition-all cursor-default"
//         >
//          <FiStar className="w-4 h-4 text-yellow-400 animate-pulse" />
//           {/* <FiSparkles className="w-4 h-4 text-yellow-400 animate-pulse" /> */}
//           {/* <span className="text-sm text-gray-300">Open for opportunities</span> */}
//           <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-ping absolute -top-0.5 -right-0.5"></span>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
//           {/* Left Column - Text Content */}
//           <div className="space-y-8 order-2 lg:order-1">
//             {/* Greeting with animated line */}
//             <motion.div
//               custom={0}
//               initial="hidden"
//               animate="visible"
//               variants={textVariants}
//               className="space-y-4"
//             >
//               <div className="flex items-center gap-3 text-cyan-400">
//                 <FiZap className="w-5 h-5" />
//                 <span className="text-sm font-mono tracking-wider">CREATING DIGITAL MAGIC</span>
//               </div>
              
//               <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1]">
//                 <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent bg-300% animate-gradient">
//                   Emnet 
//                 </span>
//                 {/* <br /> */}
//                 <span className="relative ml-8">
//                    Befkadu
//                    <motion.span 
//                     className="absolute -bottom-2 right-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
//                     initial={{ width: 0 }}
//                     animate={{ width: "195%" }}
//                     transition={{ delay: 1, duration: 0.8 }}
//                   />
//                 </span>
                 
//               </h1>
              
//               <div className="text-2xl text-gray-300 font-light flex items-center gap-2 flex-wrap">
//                 <span>Full Stack Developer</span>
//                 <span className="text-cyan-400 text-3xl">✦</span>
//                 <span>UI/UX Designer</span>
//               </div>
//             </motion.div>

//             {/* Description with animated border */}
//             <motion.div
//               custom={1}
//               initial="hidden"
//               animate="visible"
//               variants={textVariants}
//               className="relative p-6 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-cyan-400/30 transition-all group"
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
//               <p className="text-gray-300 text-lg leading-relaxed relative z-10">
//                 Crafting beautiful digital experiences with modern web technologies. 
//                 Specialized in building scalable applications that solve real-world problems 
//                 with elegant design and robust architecture.
//               </p>
//             </motion.div>

//             {/* Skills with animated progress bars */}
//             <motion.div
//               custom={2}
//               initial="hidden"
//               animate="visible"
//               variants={textVariants}
//               className="space-y-4"
//             >
//               <h3 className="text-sm uppercase tracking-wider text-gray-400 font-mono">Expertise Level</h3>
//               <div className="space-y-3">
//                 {skills.map((skill, index) => (
//                   <div key={skill.name} className="space-y-1">
//                     <div className="flex justify-between text-sm">
//                       <span className="text-gray-300">{skill.icon} {skill.name}</span>
//                       <span className="text-cyan-400">{skill.level}%</span>
//                     </div>
//                     <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
//                       <motion.div
//                         className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
//                         initial={{ width: 0 }}
//                         animate={{ width: `${skill.level}%` }}
//                         transition={{ delay: 1.2 + index * 0.1, duration: 1, ease: "easeOut" }}
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Tech tags with hover effects */}
//             <motion.div
//               custom={3}
//               initial="hidden"
//               animate="visible"
//               variants={textVariants}
//               className="flex flex-wrap gap-2"
//             >
//               {technologies.map((tech, index) => (
//                 <motion.span
//                   key={tech.name}
//                   whileHover={{ scale: 1.05, y: -2 }}
//                   className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-xl text-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300 flex items-center gap-1 cursor-default group"
//                   style={{ borderColor: `${tech.color}30` }}
//                 >
//                   <span className="text-lg">{tech.icon}</span>
//                   <span className="text-gray-300 group-hover:text-white transition-colors">{tech.name}</span>
//                 </motion.span>
//               ))}
//             </motion.div>

//             {/* CTA Buttons with modern design */}
//             <motion.div
//               custom={4}
//               initial="hidden"
//               animate="visible"
//               variants={textVariants}
//               className="flex flex-wrap gap-4 pt-4"
//             >
//               <motion.a
//                 href="#work"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl font-semibold text-lg overflow-hidden inline-flex items-center gap-2 shadow-lg shadow-cyan-500/25"
//               >
//                 <span className="relative z-10 flex items-center gap-2">
//                   View Portfolio
//                   <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
//                 </span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </motion.a>

//               <motion.a
//                 href={resumeUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 py-4 bg-white/5 backdrop-blur-sm rounded-2xl font-semibold text-lg border border-white/10 hover:border-cyan-400/50 transition-all duration-300 inline-flex items-center gap-2 group"
//               >
//                 Get Resume
//                 <FiDownload className="group-hover:translate-y-1 transition-transform" />
//               </motion.a>
//             </motion.div>
//           </div>

//           {/* Right Column - Image with Floating Icons */}
//           <div className="relative order-1 lg:order-2">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8 }}
//               className="relative"
//               onMouseMove={handleMouseMove}
//               onMouseLeave={handleMouseLeave}
//               onHoverStart={() => setIsHovering(true)}
//               onHoverEnd={() => setIsHovering(false)}
//             >
//               {/* Main image container with 3D tilt */}
//               <motion.div
//                 style={{
//                   rotateX: rotateX,
//                   rotateY: rotateY,
//                   transformStyle: "preserve-3d",
//                 }}
//                 className="relative w-[300px] sm:w-[350px] lg:w-[420px] mx-auto"
//               >
//                 {/* Animated background rings */}
//                 <motion.div
//                   className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 blur-3xl opacity-30"
//                   animate={{
//                     scale: isHovering ? 1.2 : 1,
//                   }}
//                   transition={{ duration: 0.5 }}
//                 />
                
//                 {/* Main image with geometric frame */}
//                 <div className="relative z-10">
//                   {/* Decorative geometric shapes */}
//                   <div className="absolute -top-6 -left-6 w-12 h-12 border-2 border-cyan-400/30 rounded-lg rotate-12"></div>
//                   <div className="absolute -bottom-6 -right-6 w-16 h-16 border-2 border-purple-400/30 rounded-full"></div>
//                   <div className="absolute top-1/2 -right-8 w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg rotate-45 opacity-50"></div>
                  
//                   {/* Image with unique frame design */}
//                   <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-cyan-500 to-purple-500 p-1">
//                     <div className="relative rounded-[2.3rem] overflow-hidden bg-[#0A0A0F] p-2">
//                       <div className="relative rounded-[2rem] overflow-hidden">
//                         <img
//                           src="/profile.png"
//                           alt="Emnet Befkadu"
//                           className="w-full h-auto object-cover"
//                         />
                        
//                         {/* Modern overlay effects */}
//                         <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-cyan-900/30 mix-blend-overlay"></div>
                        
//                         {/* Scanning line effect */}
//                         {/* <motion.div
//                           className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
//                           animate={{
//                             top: ["0%", "100%"],
//                           }}
//                           transition={{
//                             duration: 3,
//                             repeat: Infinity,
//                             ease: "linear",
//                           }}
//                         /> */}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Floating action badges */}
//                   {/* <motion.div
//                     className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20 flex items-center gap-2"
//                     initial={{ x: -20, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ delay: 1.5 }}
//                   >
//                     <span className="w-2 h-2 bg-green-400 rounded-full"></span>
//                     <span className="text-sm">Active</span>
//                   </motion.div> */}

//                   {/* <motion.div
//                     className="absolute -top-4 -right-4 bg-gradient-to-r from-cyan-500 to-purple-500 px-4 py-2 rounded-2xl shadow-lg"
//                     initial={{ x: 20, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ delay: 1.7 }}
//                   >
//                     <span className="text-sm font-bold">2+ Years</span>
//                   </motion.div> */}
//                 </div>

//                 {/* Orbiting social links - FIXED POSITIONING */}
//                 {socialLinks.map(({ icon: Icon, delay, angle, url, label }) => {
//                   // Calculate position using trigonometry
//                   const radius = 170; // Distance from center
//                   const radian = (angle * Math.PI) / 180;
//                   const left = 50 + (radius * Math.cos(radian)) / 2.5; // Adjust for container width
//                   const top = 50 + (radius * Math.sin(radian)) / 2.5; // Adjust for container height
                  
//                   return (
//                     <motion.a
//                       key={label}
//                       href={url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="absolute w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 hover:border-cyan-400 hover:bg-cyan-500/20 transition-all duration-300 group z-30"
//                       style={{
//                         left: `${left}%`,
//                         top: `${top}%`,
//                         transform: 'translate(-50%, -50%)',
//                       }}
//                       initial={{ scale: 0, opacity: 0 }}
//                       animate={{ scale: 1, opacity: 1 }}
//                       whileHover={{ 
//                         scale: 1.2,
//                         rotate: 360,
//                         transition: { duration: 0.5 }
//                       }}
//                       whileTap={{ scale: 0.9 }}
//                       transition={{
//                         delay: 1 + delay,
//                         type: "spring",
//                         stiffness: 260,
//                         damping: 20,
//                       }}
//                     >
//                       <Icon className="w-5 h-5 text-gray-300 group-hover:text-cyan-400 transition-colors" />
                      
//                       {/* Tooltip */}
//                       <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs bg-black/50 backdrop-blur-sm px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10">
//                         {label}
//                       </span>
//                     </motion.a>
//                   );
//                 })}
//               </motion.div>

//               {/* Floating stats cards */}
//               {/* <motion.div
//                 className="absolute -right-4 top-20 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 hidden lg:block"
//                 initial={{ x: 50, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ delay: 2, duration: 0.5 }}
//               >
//                 <div className="text-sm text-gray-300">Projects</div>
//                 <div className="text-2xl font-bold text-cyan-400">25+</div>
//               </motion.div> */}

//               {/* <motion.div
//                 className="absolute -left-4 bottom-20 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 hidden lg:block"
//                 initial={{ x: -50, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ delay: 2.2, duration: 0.5 }}
//               >
//                 {/* <div className="text-sm text-gray-300">Clients</div> */}
//                 {/* <div className="text-2xl font-bold text-purple-400">15+</div> */}
//               {/* </motion.div> */} 
//             </motion.div>
//           </div>
//         </div>

//         {/* Modern scroll indicator */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 2.5 }}
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
//         >
//           <div className="flex flex-col items-center gap-2">
//             <span className="text-xs text-gray-400 font-mono tracking-wider">EXPLORE</span>
//             <motion.div
//               animate={{ y: [0, 8, 0] }}
//               transition={{ duration: 2, repeat: Infinity }}
//               className="w-5 h-8 border border-white/20 rounded-full flex justify-center p-1"
//             >
//               <motion.div 
//                 animate={{ y: [0, 12, 0] }}
//                 transition={{ duration: 2, repeat: Infinity }}
//                 className="w-1 h-2 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full"
//               />
//             </motion.div>
//           </div>
//         </motion.div>
//       </main>

//       {/* Add custom keyframes for gradient animation */}
//       <style jsx>{`
//         @keyframes gradient {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//         .animate-gradient {
//           background-size: 300% 300%;
//           animation: gradient 6s ease infinite;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default Home;



// import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
// import { useRef, useState } from 'react';
// import Nav from '../components/Nav';
// import { 
//   FiGithub, 
//   FiLinkedin, 
//   FiTwitter, 
//   FiMail, 
//   FiInstagram,
//   FiDownload,
//   FiArrowRight
// } from 'react-icons/fi';
// import { BsStars } from 'react-icons/bs';

// function Home() {
//   const [isHovering, setIsHovering] = useState(false);
//   const containerRef = useRef(null);
  
//   // 3D tilt effect for the image
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
  
//   const mouseXSpring = useSpring(x);
//   const mouseYSpring = useSpring(y);
  
//   const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
//   const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

//   const handleMouseMove = (e) => {
//     const rect = containerRef.current.getBoundingClientRect();
//     const width = rect.width;
//     const height = rect.height;
//     const mouseX = e.clientX - rect.left;
//     const mouseY = e.clientY - rect.top;
//     const xPct = mouseX / width - 0.5;
//     const yPct = mouseY / height - 0.5;
//     x.set(xPct);
//     y.set(yPct);
//   };

//   const handleMouseLeave = () => {
//     x.set(0);
//     y.set(0);
//   };

//   // Function to handle smooth scrolling to sections
//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   // Floating icons orbiting the image
//   const socialLinks = [
//     { icon: FiGithub, delay: 0, angle: 0, url: "https://github.com/emnet-befkadu", label: "GitHub" },
//     { icon: FiLinkedin, delay: 0.1, angle: 90, url: "https://linkedin.com/in/emnet-befkadu", label: "LinkedIn" },
//     { icon: FiTwitter, delay: 0.2, angle: 180, url: "https://twitter.com/emnet_befkadu", label: "Twitter" },
//     { icon: FiInstagram, delay: 0.3, angle: 270, url: "https://instagram.com/emnet_befkadu", label: "Instagram" },
//   ];

//   const resumeUrl = '/Emnet-Befkadu-Woldekidan-FlowCV-Resume.pdf';

//   const textVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.1,
//         duration: 0.6,
//       },
//     }),
//   };

//   return (
//     <div className="bg-[#0A0A0F] text-white min-h-screen overflow-hidden relative">
//       {/* Simple animated background */}
//       <div className="fixed inset-0">
//         <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-[100px]"></div>
//         <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-[100px]"></div>
//       </div>

//       <Nav />

//       <main ref={containerRef} className="relative container mx-auto px-6 py-8 lg:py-16 max-w-7xl min-h-screen flex items-center">
        
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
          
//           {/* Left Column - Text Content */}
//           <div className="space-y-6 order-2 lg:order-1">
            
//             {/* Status badge */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.2 }}
//               className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10"
//             >
//               <BsStars className="w-4 h-4 text-yellow-400" />
//               <span className="text-sm text-gray-300">Available for work</span>
//             </motion.div>
            
//             {/* Name and Title */}
//             <motion.div
//               custom={0}
//               initial="hidden"
//               animate="visible"
//               variants={textVariants}
//             >
//               <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
//                 <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
//                   Emnet Befkadu
//                 </span>
//               </h1>
              
//               <div className="text-xl lg:text-2xl text-gray-300 mt-2">
//                 Full Stack Developer & UI/UX Designer
//               </div>
//             </motion.div>

//             {/* Short Bio */}
//             <motion.p
//               custom={1}
//               initial="hidden"
//               animate="visible"
//               variants={textVariants}
//               className="text-gray-400 text-lg max-w-xl leading-relaxed"
//             >
//               Crafting beautiful digital experiences with modern web technologies. 
//               Specialized in building scalable applications that solve real-world problems.
//             </motion.p>

//             {/* CTA Buttons */}
//             <motion.div
//               custom={2}
//               initial="hidden"
//               animate="visible"
//               variants={textVariants}
//               className="flex flex-wrap gap-4 pt-4"
//             >
//               {/* View Resume button - scrolls to about/skills section */}
//               <motion.button
//                 onClick={() => scrollToSection('projects')}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold text-lg overflow-hidden inline-flex items-center gap-2 shadow-lg shadow-cyan-500/25"
//               >
//                 <span className="relative z-10 flex items-center gap-2">
//                   Explore My Work
//                   <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
//                 </span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </motion.button>

//               <motion.a
//                 href={resumeUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 py-4 bg-white/5 backdrop-blur-sm rounded-full font-semibold text-lg border border-white/10 hover:border-cyan-400/50 transition-all duration-300 inline-flex items-center gap-2 group"
//               >
//                 Download CV
//                 <FiDownload className="group-hover:translate-y-1 transition-transform" />
//               </motion.a>
//             </motion.div>

//             {/* Tech Stack - Simplified */}
//             {/* <motion.div
//               custom={3}
//               initial="hidden"
//               animate="visible"
//               variants={textVariants}
//               className="flex flex-wrap gap-2 pt-2"
//             >
//               {['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'Tailwind'].map((tech) => (
//                 <span
//                   key={tech}
//                   className="px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full text-sm text-gray-300 border border-white/10"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </motion.div> */}
//           </div>

//           {/* Right Column - Image with Floating Icons */}
//           <div className="relative order-1 lg:order-2 flex justify-center">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8 }}
//               className="relative"
//               onMouseMove={handleMouseMove}
//               onMouseLeave={handleMouseLeave}
//               onHoverStart={() => setIsHovering(true)}
//               onHoverEnd={() => setIsHovering(false)}
//             >
//               {/* Image Container with 3D tilt */}
//               <motion.div
//                 style={{
//                   rotateX: rotateX,
//                   rotateY: rotateY,
//                   transformStyle: "preserve-3d",
//                 }}
//                 className="relative w-[280px] sm:w-[320px] lg:w-[380px]"
//               >
//                 {/* Background glow */}
//                 <motion.div
//                   className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 blur-3xl opacity-30"
//                   animate={{ scale: isHovering ? 1.2 : 1 }}
//                   transition={{ duration: 0.5 }}
//                 />
                
//                 {/* Image Frame */}
//                 <div className="relative z-10 p-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-[2rem]">
//                   <div className="relative rounded-[1.9rem] overflow-hidden bg-[#0A0A0F]">
//                     <img
//                       src="/profile.png"
//                       alt="Emnet Befkadu"
//                       className="w-full h-auto object-cover"
//                     />
                    
//                     {/* Subtle overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-cyan-900/30 mix-blend-overlay"></div>
//                   </div>
//                 </div>

//                 {/* Simple decorative elements */}
//                 <div className="absolute -top-4 -right-4 w-16 h-16 border border-cyan-400/20 rounded-full"></div>
//                 <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-purple-400/20 rounded-full"></div>

//                 {/* Floating social icons - Orbiting around image */}
//                 {socialLinks.map(({ icon: Icon, delay, angle, url, label }) => {
//                   const radius = 140;
//                   const radian = (angle * Math.PI) / 180;
//                   const left = 50 + (radius * Math.cos(radian)) / 2.5;
//                   const top = 50 + (radius * Math.sin(radian)) / 2.5;
                  
//                   return (
//                     <motion.a
//                       key={label}
//                       href={url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="absolute w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:border-cyan-400 hover:bg-cyan-500/20 transition-all duration-300 group z-20"
//                       style={{
//                         left: `${left}%`,
//                         top: `${top}%`,
//                         transform: 'translate(-50%, -50%)',
//                       }}
//                       initial={{ scale: 0, opacity: 0 }}
//                       animate={{ scale: 1, opacity: 1 }}
//                       whileHover={{ scale: 1.2 }}
//                       transition={{
//                         delay: 1 + delay,
//                         type: "spring",
//                         stiffness: 260,
//                         damping: 20,
//                       }}
//                     >
//                       <Icon className="w-4 h-4 text-gray-300 group-hover:text-cyan-400 transition-colors" />
                      
//                       {/* Tooltip */}
//                       <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
//                         {label}
//                       </span>
//                     </motion.a>
//                   );
//                 })}
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>

//         {/* Simple scroll indicator */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 2 }}
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
//         >
//           <div className="flex flex-col items-center gap-2">
//             <span className="text-xs text-gray-500">Scroll</span>
//             <motion.div
//               animate={{ y: [0, 8, 0] }}
//               transition={{ duration: 1.5, repeat: Infinity }}
//               className="w-5 h-8 border border-white/20 rounded-full flex justify-center p-1"
//             >
//               <div className="w-1 h-2 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full"></div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </main>
//     </div>
//   );
// }

// export default Home;








import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import Nav from '../components/Nav';
import { 
  FiGithub, 
  FiLinkedin, 
  FiTwitter, 
  FiMail, 
  FiInstagram,
  FiDownload,
  FiArrowRight
} from 'react-icons/fi';
import { BsStars } from 'react-icons/bs';

function Home() {
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);
  
  // 3D tilt effect for the image
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Social icons - now all on the right side
  const socialLinks = [
    { icon: FiGithub, delay: 0, url: "https://github.com/emnet-befkadu", label: "GitHub", color: "#fff" },
    { icon: FiLinkedin, delay: 0.1, url: "https://linkedin.com/in/emnet-befkadu", label: "LinkedIn", color: "#0A66C2" },
    { icon: FiTwitter, delay: 0.2, url: "https://twitter.com/emnet_befkadu", label: "Twitter", color: "#1DA1F2" },
    { icon: FiInstagram, delay: 0.3, url: "https://instagram.com/emnet_befkadu", label: "Instagram", color: "#E4405F" },
    { icon: FiMail, delay: 0.4, url: "mailto:emnbef234@gmail.com", label: "Email", color: "#EA4335" },
  ];

  const resumeUrl = '/Emnet-Befkadu-Woldekidan-FlowCV-Resume.pdf';

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
      },
    }),
  };

  return (
    <div className="bg-[#0A0A0F] text-white min-h-screen overflow-hidden relative">
      {/* Simple animated background */}
      <div className="fixed inset-0">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-[100px]"></div>
      </div>

      <Nav />

      <main ref={containerRef} className="relative container mx-auto px-6 py-8 lg:py-16 max-w-7xl min-h-screen flex items-center">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
          
          {/* Left Column - Text Content */}
          <div className="space-y-6 order-2 lg:order-1">
            
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10"
            >
              <BsStars className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-gray-300">Available for work</span>
            </motion.div>
            
            {/* Name and Title */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Emnet Befkadu
                </span>
              </h1>
              
              <div className="text-xl lg:text-2xl text-gray-300 mt-2">
                Full Stack Developer & UI/UX Designer
              </div>
            </motion.div>

            {/* Short Bio */}
            <motion.p
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-gray-400 text-lg max-w-xl leading-relaxed"
            >
              Crafting beautiful digital experiences with modern web technologies. 
              Specialized in building scalable applications that solve real-world problems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              custom={2}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              {/* Explore My Work button */}
              <motion.button
                onClick={() => scrollToSection('projects')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold text-lg overflow-hidden inline-flex items-center gap-2 shadow-lg shadow-cyan-500/25"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore My Work
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>

              <motion.a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 backdrop-blur-sm rounded-full font-semibold text-lg border border-white/10 hover:border-cyan-400/50 transition-all duration-300 inline-flex items-center gap-2 group"
              >
                Download CV
                <FiDownload className="group-hover:translate-y-1 transition-transform" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column - Image with Social Icons on Right */}
          <div className="relative order-1 lg:order-2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative flex items-center gap-4"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onHoverStart={() => setIsHovering(true)}
              onHoverEnd={() => setIsHovering(false)}
            >
              {/* Social Icons - Vertical Stack on Right */}
              <div className="flex flex-col gap-3 order-2">
                {socialLinks.map(({ icon: Icon, delay, url, label }) => (
                  <motion.a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + delay }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Icon Container */}
                    <div className="w-12 h-12 bg-white/5 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/10 hover:border-cyan-400 hover:bg-cyan-500/20 transition-all duration-300">
                      <Icon className="w-5 h-5 text-gray-300 group-hover:text-cyan-400 transition-colors" />
                    </div>
                    
                    {/* Tooltip */}
                    <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-black/50 backdrop-blur-sm text-xs text-white rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                      {label}
                    </span>
                  </motion.a>
                ))}
              </div>

              {/* Image Container with 3D tilt */}
              <motion.div
                style={{
                  rotateX: rotateX,
                  rotateY: rotateY,
                  transformStyle: "preserve-3d",
                }}
                className="relative w-[280px] sm:w-[320px] lg:w-[380px] order-1"
              >
                {/* Background glow */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 blur-3xl opacity-30"
                  animate={{ scale: isHovering ? 1.2 : 1 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Image Frame */}
                <div className="relative z-10 p-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-[2rem]">
                  <div className="relative rounded-[1.9rem] overflow-hidden bg-[#0A0A0F]">
                    <img
                      src="/profile.png"
                      alt="Emnet Befkadu"
                      className="w-full h-auto object-cover"
                    />
                    
                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-cyan-900/30 mix-blend-overlay"></div>
                  </div>
                </div>

                {/* Simple decorative elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 border border-cyan-400/20 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-purple-400/20 rounded-full"></div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Simple scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-gray-500">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-5 h-8 border border-white/20 rounded-full flex justify-center p-1"
            >
              <div className="w-1 h-2 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full"></div>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

export default Home;