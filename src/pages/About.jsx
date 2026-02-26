// import React from 'react';

// function About() {
//   return (
//     <div className="text-white px-4 py-8 md:px-20 md:py-12  min-h-screen">
//       <h1 className="font-bold text-4xl md:text-5xl mb-10 text-center">ABOUT ME</h1>
      

//       <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        

//            <div className="w-full md:w-1/2 flex justify-center relative">
//           <div className="absolute top-6 right-6 w-[80%] h-[100%] border-4 border-cyan-500 rounded-md z-0 hidden md:block"></div>
//           <img 
//             src="/profile.png" 
//             alt="Emnet Befkadu" 
//             className="relative z-10 w-[300px] md:w-[500px] rounded-lg shadow-lg object-cover" 
//           />
//         </div>
//         {/* Text Section */}
//         <div className="w-full md:w-1/2">
//           <p className="text-gray-300 text-justify leading-relaxed text-base md:text-lg">
//             I’m Emnet Befkadu, a dedicated full stack developer with a strong foundation in both
//             frontend and backend technologies. I build responsive and dynamic applications using HTML, CSS, 
//             JavaScript, and React on the frontend, and Java, PHP, and MySQL on the backend. My passion for 
//             development has driven me to constantly learn and build real-world projects, both independently 
//             and in team settings. I’ve also taken part in tech communities like GDG, where I enhanced my skills
//             and participated in a hackathon where my team placed second. Through these experiences, I’ve grown 
//             not only as a developer but also as a collaborator who values teamwork, problem-solving, and delivering
//             high-quality solutions.
//           </p>
//         </div>

//         {/* Image Section with border */}
       

//       </div>
//     </div>
//   );
// }

// export default About;






// import React from 'react';
// import { motion } from 'framer-motion';
// import { FiUser, FiCode, FiHeart, FiAward, FiMapPin, FiCalendar } from 'react-icons/fi';
// import { BsStars } from 'react-icons/bs';

// function About() {
//   const stats = [
//     { icon: FiCode, label: 'Projects', value: '15+' },
//     { icon: FiAward, label: 'Hackathon', value: '2nd Place' },
//     { icon: FiCalendar, label: 'Experience', value: '2+ Years' },
//     { icon: FiHeart, label: 'Communities', value: 'GDG Member' },
//   ];

//   const interests = ['React', 'UI/UX', 'Problem Solving', 'Team Collaboration', 'Hackathons', 'Open Source'];

//   return (
//     <div className="bg-[#0A0A0F] text-white min-h-screen relative overflow-hidden">
//       {/* Animated background matching Home page */}
//       <div className="absolute inset-0">
//         <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-[100px]"></div>
//         <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-[100px]"></div>
//       </div>

//       <div className="relative container mx-auto px-4 sm:px-6 py-12 lg:py-20 max-w-7xl">
        
//         {/* Section Header with matching style */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 mb-4">
//             <FiUser className="w-4 h-4 text-cyan-400" />
//             <span className="text-sm text-gray-300">Get to know me</span>
//           </div>
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
//             <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
//               ABOUT ME
//             </span>
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mt-4 rounded-full"></div>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
//           {/* Left Column - Image with modern frame */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="relative flex justify-center"
//           >
//             <div className="relative w-[300px] sm:w-[350px] lg:w-[400px]">
//               {/* Decorative elements matching Home page */}
//               <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-cyan-400/20 rounded-full"></div>
//               <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-purple-400/20 rounded-full"></div>
              
//               {/* Image frame with gradient border */}
//               <div className="relative z-10 p-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-[2rem]">
//                 <div className="relative rounded-[1.9rem] overflow-hidden bg-[#0A0A0F]">
//                   <img
//                     src="/profile.png"
//                     alt="Emnet Befkadu"
//                     className="w-full h-auto object-cover"
//                   />
//                   {/* Subtle overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-cyan-900/30 mix-blend-overlay"></div>
//                 </div>
//               </div>

//               {/* Floating stats badges - repositioned */}
//               <motion.div
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.8 }}
//                 className="absolute -right-8 top-12 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 hidden lg:block"
//               >
//                 <div className="flex items-center gap-2">
//                   <BsStars className="text-yellow-400" />
//                   <span className="text-sm">Passionate Developer</span>
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>

//           {/* Right Column - Content */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="space-y-8"
//           >
//             {/* Quick info badges */}
//             <div className="flex flex-wrap gap-3">
//               <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
//                 <FiMapPin className="text-cyan-400" />
//                 <span className="text-gray-300">Based in Ethiopia</span>
//               </div>
//               <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
//                 <FiCalendar className="text-purple-400" />
//                 <span className="text-gray-300">Open to opportunities</span>
//               </div>
//             </div>

//             {/* Bio with highlighted style */}
//             <div className="space-y-4">
//               <h3 className="text-2xl font-semibold text-white">
//                 Full Stack Developer with a passion for{' '}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
//                   building solutions
//                 </span>
//               </h3>
              
//               <p className="text-gray-400 text-lg leading-relaxed">
//                 I'm Emnet Befkadu, a dedicated full stack developer with a strong foundation in both
//                 frontend and backend technologies. I build responsive and dynamic applications that 
//                 solve real-world problems.
//               </p>
              
//               <p className="text-gray-400 text-lg leading-relaxed">
//                 My passion for development has driven me to constantly learn and build real-world projects, 
//                 both independently and in team settings. Through communities like{' '}
//                 <span className="text-cyan-400 font-medium">GDG</span>, I've enhanced my skills and 
//                 participated in hackathons where my team secured{' '}
//                 <span className="text-purple-400 font-medium">2nd place</span>.
//               </p>
//             </div>

//             {/* Stats Grid */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
//               {stats.map((stat, index) => (
//                 <motion.div
//                   key={stat.label}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.6 + index * 0.1 }}
//                   className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-cyan-400/30 transition-all group"
//                 >
//                   <stat.icon className="w-5 h-5 text-cyan-400 mb-2 group-hover:scale-110 transition-transform" />
//                   <div className="text-xl font-bold text-white">{stat.value}</div>
//                   <div className="text-xs text-gray-400">{stat.label}</div>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Interests/Tech Tags */}
//             <div className="space-y-3">
//               <h4 className="text-sm uppercase tracking-wider text-gray-400 font-mono">Interests & Focus</h4>
//               <div className="flex flex-wrap gap-2">
//                 {interests.map((interest, index) => (
//                   <motion.span
//                     key={interest}
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: 0.8 + index * 0.05 }}
//                     whileHover={{ scale: 1.05, y: -2 }}
//                     className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full text-sm border border-white/10 hover:border-cyan-400/50 transition-all"
//                   >
//                     {interest}
//                   </motion.span>
//                 ))}
//               </div>
//             </div>

//             {/* Decorative quote */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 1.2 }}
//               className="relative p-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl border border-white/10 mt-6"
//             >
//               <p className="text-gray-300 italic text-lg">
//                 "I believe in writing clean code that not only works well but also tells a story."
//               </p>
//               <div className="absolute -top-2 left-6 text-4xl text-cyan-400/20">"</div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;








// import React from 'react';
// import { motion } from 'framer-motion';
// import { FiUser, FiMapPin, FiCalendar, FiHeart } from 'react-icons/fi';
// import { BsStars } from 'react-icons/bs';

// function About() {
//   return (
//     <div className="bg-[#0A0A0F] text-white min-h-screen relative overflow-hidden">
//       {/* Animated background matching Home page */}
//       <div className="absolute inset-0">
//         <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-[100px]"></div>
//         <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-[100px]"></div>
//       </div>

//       <div className="relative container mx-auto px-4 sm:px-6 py-12 lg:py-20 max-w-7xl">
        
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 mb-4">
//             <FiUser className="w-4 h-4 text-cyan-400" />
//             <span className="text-sm text-gray-300">Get to know me</span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold">
//             <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
//               ABOUT ME
//             </span>
//           </h2>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
//           {/* Left Column - Image */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="relative flex justify-center"
//           >
//             <div className="relative w-[300px] sm:w-[350px] lg:w-[400px]">
//               {/* Decorative elements */}
//               <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-cyan-400/20 rounded-full"></div>
//               <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-purple-400/20 rounded-full"></div>
              
//               {/* Image frame */}
//               <div className="relative z-10 p-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-[2rem]">
//                 <div className="relative rounded-[1.9rem] overflow-hidden bg-[#0A0A0F]">
//                   <img
//                     src="/profile.png"
//                     alt="Emnet Befkadu"
//                     className="w-full h-auto object-cover"
//                   />
//                   {/* Subtle overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-cyan-900/30 mix-blend-overlay"></div>
//                 </div>
//               </div>

//               {/* Simple location badge */}
//               <motion.div
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.8 }}
//                 className="absolute -right-8 top-12 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 hidden lg:flex items-center gap-1"
//               >
//                 <FiMapPin className="text-cyan-400 text-sm" />
//                 <span className="text-xs">Ethiopia</span>
//               </motion.div>
//             </div>
//           </motion.div>

//           {/* Right Column - Content (Simplified) */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="space-y-6"
//           >
//             {/* Quick intro */}
//             <div className="space-y-4">
//               <h3 className="text-2xl font-semibold text-white">
//                 Full Stack Developer based in{' '}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
//                   Ethiopia
//                 </span>
//               </h3>
              
//               <p className="text-gray-400 text-lg leading-relaxed">
//                 I'm Emnet Befkadu, a passionate developer who loves building web applications 
//                 that make a difference. My journey in tech started with curiosity and has grown 
//                 into a career focused on creating meaningful digital experiences.
//               </p>
              
//               <p className="text-gray-400 text-lg leading-relaxed">
//                 Beyond coding, I'm actively involved in tech communities like{' '}
//                 <span className="text-cyan-400 font-medium">GDG</span>, where I've collaborated 
//                 on projects and participated in hackathons. These experiences have shaped me into 
//                 a developer who values teamwork and continuous learning.
//               </p>
//             </div>

//             {/* Key highlights - minimal */}
//             <div className="flex flex-wrap gap-4 pt-2">
//               <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
//                 <FiCalendar className="text-cyan-400" />
//                 <span className="text-gray-300">2+ Years Coding</span>
//               </div>
//               <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
//                 <FiHeart className="text-purple-400" />
//                 <span className="text-gray-300">GDG Member</span>
//               </div>
//             </div>

//             {/* Simple personal touch */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 1 }}
//               className="relative p-5 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-xl border border-white/5 mt-4"
//             >
//               <p className="text-gray-300 italic">
//                 "I believe great software comes from understanding both people and technology."
//               </p>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;






import React from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiMapPin, FiCoffee, FiUsers, FiCode } from 'react-icons/fi';
import { BsStars } from 'react-icons/bs';

function About() {
  // Timeless attributes that don't need updating
  const qualities = [
    { icon: FiCode, text: "Clean Code Advocate" },
    { icon: FiUsers, text: "Team Collaborator" },
    { icon: FiCoffee, text: "Problem Solver" },
  ];

  return (
    <div className="bg-[#0A0A0F] text-white min-h-screen relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 py-12 lg:py-20 max-w-7xl">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 mb-4">
            <FiUser className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-gray-300">Get to know me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              ABOUT ME
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative w-[300px] sm:w-[350px] lg:w-[400px]">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-cyan-400/20 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-purple-400/20 rounded-full"></div>
              
              {/* Image frame */}
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

              {/* Location badge - MOVED OUTSIDE THE IMAGE CONTAINER */}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Location badge - NOW HERE, VISIBLE AND SEPARATE */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10"
            >
              <FiMapPin className="text-cyan-400" />
              <span className="text-gray-300">Based in Ethiopia</span>
            </motion.div>

            {/* Intro */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">
                Full Stack Developer who turns ideas into{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  digital experiences
                </span>
              </h3>
              
              <p className="text-gray-400 text-lg leading-relaxed">
                I'm Emnet Befkadu, a developer passionate about building web applications 
                that make a difference. My journey in tech started with curiosity and has grown 
                into a career focused on creating meaningful digital solutions.
              </p>
              
              <p className="text-gray-400 text-lg leading-relaxed">
                I'm actively involved in tech communities like{' '}
                <span className="text-cyan-400 font-medium">GDG</span>, where I've collaborated 
                on projects and participated in hackathons. These experiences have shaped me into 
                a developer who values teamwork and continuous learning.
              </p>
            </div>

            {/* Timeless qualities - no dates needed! */}
            <div className="flex flex-wrap gap-3 pt-2">
              {qualities.map((quality, index) => (
                <motion.div
                  key={quality.text}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 hover:border-cyan-400/30 transition-all"
                >
                  <quality.icon className="text-cyan-400 text-sm" />
                  <span className="text-gray-300 text-sm">{quality.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Hackathon achievement - evergreen because it's a specific achievement */}
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="relative p-5 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-xl border border-white/5 mt-4"
            >
              <div className="flex items-start gap-3">
                <BsStars className="text-yellow-400 text-xl flex-shrink-0 mt-1" />
                <p className="text-gray-300">
                  <span className="font-semibold text-white">Hackathon Achievement:</span> Secured 2nd place in a 
                  competitive hackathon, working with a team to build a solution in 24 hours.
                </p>
              </div>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;



// import React from 'react';
// import { motion } from 'framer-motion';
// import { FiUser, FiMapPin, FiCoffee, FiUsers, FiCode } from 'react-icons/fi';
// import { BsStars } from 'react-icons/bs';

// function About({ isDark }) {
//   // Timeless attributes that don't need updating
//   const qualities = [
//     { icon: FiCode, text: "Clean Code Advocate" },
//     { icon: FiUsers, text: "Team Collaborator" },
//     { icon: FiCoffee, text: "Problem Solver" },
//   ];

//   return (
//     <div className={`min-h-screen relative overflow-hidden transition-colors duration-300 ${
//       isDark ? 'bg-[#0A0A0F] text-white' : 'bg-gray-50 text-gray-900'
//     }`}>
//       {/* Animated background - adjusted for light mode */}
//       <div className="absolute inset-0">
//         <div className={`absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[100px] transition-colors duration-300 ${
//           isDark 
//             ? 'bg-gradient-to-r from-purple-500/10 to-cyan-500/10' 
//             : 'bg-gradient-to-r from-purple-500/20 to-cyan-500/20'
//         }`}></div>
//         <div className={`absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[100px] transition-colors duration-300 ${
//           isDark 
//             ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10' 
//             : 'bg-gradient-to-r from-blue-500/20 to-purple-500/20'
//         }`}></div>
//       </div>

//       <div className="relative container mx-auto px-4 sm:px-6 py-12 lg:py-20 max-w-7xl">
        
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <div className={`inline-flex items-center gap-2 backdrop-blur-sm px-4 py-2 rounded-full border transition-colors duration-300 ${
//             isDark 
//               ? 'bg-white/5 border-white/10' 
//               : 'bg-black/5 border-black/10'
//           }`}>
//             <FiUser className={`w-4 h-4 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />
//             <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Get to know me</span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold mt-4">
//             <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
//               ABOUT ME
//             </span>
//           </h2>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
//           {/* Left Column - Image */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="relative flex justify-center"
//           >
//             <div className="relative w-[300px] sm:w-[350px] lg:w-[400px]">
//               {/* Decorative elements - adjusted for light mode */}
//               <div className={`absolute -top-4 -right-4 w-20 h-20 border-2 rounded-full transition-colors duration-300 ${
//                 isDark ? 'border-cyan-400/20' : 'border-cyan-600/20'
//               }`}></div>
//               <div className={`absolute -bottom-4 -left-4 w-32 h-32 border-2 rounded-full transition-colors duration-300 ${
//                 isDark ? 'border-purple-400/20' : 'border-purple-600/20'
//               }`}></div>
              
//               {/* Image frame */}
//               <div className="relative z-10 p-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-[2rem]">
//                 <div className={`relative rounded-[1.9rem] overflow-hidden transition-colors duration-300 ${
//                   isDark ? 'bg-[#0A0A0F]' : 'bg-white'
//                 }`}>
//                   <img
//                     src="/profile.png"
//                     alt="Emnet Befkadu"
//                     className="w-full h-auto object-cover"
//                   />
//                   {/* Subtle overlay - adjusted for light mode */}
//                   <div className={`absolute inset-0 bg-gradient-to-t transition-colors duration-300 ${
//                     isDark 
//                       ? 'from-purple-900/30 via-transparent to-cyan-900/30' 
//                       : 'from-purple-500/10 via-transparent to-cyan-500/10'
//                   } mix-blend-overlay`}></div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Right Column - Content */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="space-y-6"
//           >
//             {/* Location badge */}
//             <motion.div
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6 }}
//               className={`inline-flex items-center gap-2 backdrop-blur-sm px-4 py-2 rounded-full border transition-colors duration-300 ${
//                 isDark 
//                   ? 'bg-white/5 border-white/10' 
//                   : 'bg-black/5 border-black/10'
//               }`}
//             >
//               <FiMapPin className={`${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />
//               <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>Based in Ethiopia</span>
//             </motion.div>

//             {/* Intro */}
//             <div className="space-y-4">
//               <h3 className={`text-2xl font-semibold transition-colors duration-300 ${
//                 isDark ? 'text-white' : 'text-gray-900'
//               }`}>
//                 Full Stack Developer who turns ideas into{' '}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
//                   digital experiences
//                 </span>
//               </h3>
              
//               <p className={`text-lg leading-relaxed transition-colors duration-300 ${
//                 isDark ? 'text-gray-400' : 'text-gray-600'
//               }`}>
//                 I'm Emnet Befkadu, a developer passionate about building web applications 
//                 that make a difference. My journey in tech started with curiosity and has grown 
//                 into a career focused on creating meaningful digital solutions.
//               </p>
              
//               <p className={`text-lg leading-relaxed transition-colors duration-300 ${
//                 isDark ? 'text-gray-400' : 'text-gray-600'
//               }`}>
//                 I'm actively involved in tech communities like{' '}
//                 <span className={`font-medium ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>GDG</span>, where I've collaborated 
//                 on projects and participated in hackathons. These experiences have shaped me into 
//                 a developer who values teamwork and continuous learning.
//               </p>
//             </div>

//             {/* Timeless qualities */}
//             <div className="flex flex-wrap gap-3 pt-2">
//               {qualities.map((quality, index) => (
//                 <motion.div
//                   key={quality.text}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 0.7 + index * 0.1 }}
//                   className={`flex items-center gap-2 backdrop-blur-sm px-4 py-2 rounded-full border transition-all duration-300 hover:border-cyan-400/30 ${
//                     isDark 
//                       ? 'bg-white/5 border-white/10' 
//                       : 'bg-black/5 border-black/10'
//                   }`}
//                 >
//                   <quality.icon className={`text-sm ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />
//                   <span className={`text-sm transition-colors duration-300 ${
//                     isDark ? 'text-gray-300' : 'text-gray-700'
//                   }`}>{quality.text}</span>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Hackathon achievement */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 1 }}
//               className={`relative p-5 rounded-xl border mt-4 transition-colors duration-300 ${
//                 isDark 
//                   ? 'bg-gradient-to-r from-cyan-500/5 to-purple-500/5 border-white/5' 
//                   : 'bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-black/5'
//               }`}
//             >
//               <div className="flex items-start gap-3">
//                 <BsStars className="text-yellow-400 text-xl flex-shrink-0 mt-1" />
//                 <p className={`transition-colors duration-300 ${
//                   isDark ? 'text-gray-300' : 'text-gray-700'
//                 }`}>
//                   <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Hackathon Achievement:</span> Secured 2nd place in a 
//                   competitive hackathon, working with a team to build a solution in 24 hours.
//                 </p>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;