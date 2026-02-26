// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   FiAward, 
//   FiExternalLink, 
//   FiX, 
//   FiDownload,
//   FiCalendar,
//   FiMapPin
// } from 'react-icons/fi';
// import { BsStars } from 'react-icons/bs';
// import { Icon } from '@iconify/react';

// function Certificates() {
//   const [selectedCert, setSelectedCert] = useState(null);
//   const [filter, setFilter] = useState('all');

//   const certificates = [
//     {
//       id: 1,
//       title: "Hackathon 2nd Place",
//       issuer: "GDG Ethiopia",
//       date: "2025",
//       location: "Addis Ababa",
//       image: "TechFest.jpg", // Add your certificate image
//       category: "achievement",
//       description: "Secured 2nd place in a competitive 24-hour hackathon, building a innovative solution for healthcare access.",
//       skills: ["Team Collaboration", "Problem Solving", "Rapid Prototyping"],
//       link: "#" // Optional: link to credential
//     },
//     {
//       id: 2,
//       title: "ProDev Frontend Development",
//       issuer: "ALX Africa",
//       date: "2025",
//       location: "Online",
//       image: "/certificates/ProDev.png", // Add your certificate image
//       category: "course",
//       description: "Comprehensive full stack development bootcamp covering MERN stack, databases, and deployment.",
//       skills: ["React", "Next.js", "GraphQL", "React Native","Tailwind CSS"],
//       link: "#"
//     },
//     {
//       id: 3,
//       title: "HerCommerce Hackathon",
//       issuer: "ALX Africa",
//       date: "2025",
//       location: "Remote",
//       image: "/certificates/HerCommerce.png", // Add your certificate image
//       category: "achievement",
//       description: "Participated in a 1 week hachaton to solve womens problem by E-commerce concept that stayed in the house",
//       skills: ["React", "Next.js"],
//       link: "#"
//     },
//     {
//       id: 4,
//       title: "Internship Completion",
//       issuer: "Kuraz Technologies",
//       date: "2025",
//       location: "Remote",
//       image: "/certificates/kurazinternship_Certificate.jpg", // Add your certificate image
//       category: "certification",
//       description: "Advanced JavaScript concepts, data structures, and algorithm problem-solving.",
//       skills: ["JavaScript", " PHP", "TailwindCSS"],
//       link: "#"
//     },
//     {
//       id: 5,
//       title: "Programming  Fundamentals",
//       issuer: "Udacity",
//       date: "2024",
//       location: "Addis Ababa",
//       image: "/certificates/ProgrammingFun.png", // Add your certificate image
//       category: "Course",
//       description: "Recognized for contributions to the developer community and organizing tech events.",
//       skills: ["Leadership", "Community Building", "Event Organization"],
//       link: "#"
//     },
//     {
//       id: 6,
//       title: "Data Analysis",
//       issuer: "Udacity",
//       date: "2024",
//       location: "Online",
//       image: "/certificates/DataAnalysis.png", // Add your certificate image
//       category: "course",
//       description: "Cross-platform mobile development with React Native and Expo.",
//       skills: ["React Native", "Mobile Development", "Expo"],
//       link: "#"
//     }
//   ];

//   const filters = [
//     { id: 'all', label: 'All', icon: 'mdi:view-grid' },
//     { id: 'course', label: 'Courses', icon: 'mdi:book-open' },
//     { id: 'achievement', label: 'Achievements', icon: 'mdi:trophy' },
//     { id: 'certification', label: 'Certifications', icon: 'mdi:certificate' },
//   ];

//   const filteredCertificates = filter === 'all' 
//     ? certificates 
//     : certificates.filter(cert => cert.category === filter);

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

//   return (
//     <div className="bg-[#0A0A0F] text-white min-h-screen relative overflow-hidden py-16 lg:py-24">
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
//           className="text-center mb-16"
//         >
//           <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 mb-4">
//             <FiAward className="w-4 h-4 text-yellow-400" />
//             <span className="text-sm text-gray-300">My achievements</span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
//               CERTIFICATES
//             </span>
//           </h2>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             Recognition and achievements from my learning journey and professional growth
//           </p>
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
//               onClick={() => setFilter(f.id)}
//               className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 ${
//                 filter === f.id
//                   ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
//                   : 'bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 hover:text-white hover:border-cyan-400/50'
//               }`}
//             >
//               <Icon icon={f.icon} className="w-4 h-4" />
//               <span className="text-sm font-medium">{f.label}</span>
//             </button>
//           ))}
//         </motion.div>

//         {/* Certificates Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
//         >
//           {filteredCertificates.map((cert) => (
//             <motion.div
//               key={cert.id}
//               variants={itemVariants}
//               whileHover={{ y: -8 }}
//               className="group relative cursor-pointer"
//               onClick={() => setSelectedCert(cert)}
//             >
//               {/* Background glow */}
//               <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
//               {/* Certificate Card */}
//               <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 group-hover:border-cyan-400/50 transition-all duration-300 overflow-hidden">
                
//                 {/* Certificate Image */}
//                 <div className="relative h-48 overflow-hidden bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
//                   <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] to-transparent z-10"></div>
//                   <img
//                     src={cert.image}
//                     alt={cert.title}
//                     className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
//                   />
                  
//                   {/* Category Badge */}
//                   <div className="absolute top-4 right-4 z-20">
//                     <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
//                       cert.category === 'achievement' 
//                         ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
//                         : cert.category === 'course'
//                         ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
//                         : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
//                     }`}>
//                       {cert.category}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all">
//                     {cert.title}
//                   </h3>
                  
//                   <p className="text-sm text-gray-400 mb-4 line-clamp-2">
//                     {cert.description}
//                   </p>

//                   {/* Issuer and Date */}
//                   <div className="space-y-2 mb-4">
//                     <div className="flex items-center gap-2 text-sm text-gray-400">
//                       <Icon icon="mdi:domain" className="w-4 h-4 text-cyan-400" />
//                       <span>{cert.issuer}</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-sm text-gray-400">
//                       <FiCalendar className="w-4 h-4 text-purple-400" />
//                       <span>{cert.date}</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-sm text-gray-400">
//                       <FiMapPin className="w-4 h-4 text-pink-400" />
//                       <span>{cert.location}</span>
//                     </div>
//                   </div>

//                   {/* Skills Tags */}
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {cert.skills.slice(0, 3).map((skill, i) => (
//                       <span
//                         key={i}
//                         className="px-2 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/10"
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                     {cert.skills.length > 3 && (
//                       <span className="px-2 py-1 bg-white/5 rounded-full text-xs text-gray-300">
//                         +{cert.skills.length - 3}
//                       </span>
//                     )}
//                   </div>

//                   {/* View Button */}
//                   <div className="flex items-center justify-between pt-4 border-t border-white/10">
//                     <span className="text-xs text-gray-500">Click to view</span>
//                     <FiExternalLink className="text-cyan-400 group-hover:translate-x-1 transition-transform" />
//                   </div>
//                 </div>

//                 {/* Decorative corner */}
//                 <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-cyan-400/0 group-hover:border-cyan-400/50 rounded-tr-3xl transition-all duration-300"></div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* No results message */}
//         {filteredCertificates.length === 0 && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-center py-20"
//           >
//             <Icon icon="mdi:certificate-outline" className="text-6xl text-gray-600 mx-auto mb-4" />
//             <p className="text-gray-400">No certificates found in this category</p>
//           </motion.div>
//         )}

//         {/* Modal for certificate view */}
//         <AnimatePresence>
//           {selectedCert && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
//               onClick={() => setSelectedCert(null)}
//             >
//               <motion.div
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.9, opacity: 0 }}
//                 className="relative max-w-4xl w-full bg-[#0A0A0F] rounded-3xl border border-white/10 overflow-hidden"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 {/* Close button */}
//                 <button
//                   onClick={() => setSelectedCert(null)}
//                   className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 hover:border-cyan-400/50 transition-colors"
//                 >
//                   <FiX className="text-gray-400" />
//                 </button>

//                 <div className="grid md:grid-cols-2 gap-6">
//                   {/* Certificate Image */}
//                   <div className="relative h-64 md:h-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 p-6 flex items-center">
//                     <img
//                       src={selectedCert.image}
//                       alt={selectedCert.title}
//                       className="w-full h-auto object-contain rounded-xl shadow-2xl"
//                     />
//                   </div>

//                   {/* Certificate Details */}
//                   <div className="p-8">
//                     <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10 mb-4">
//                       <BsStars className="w-3 h-3 text-yellow-400" />
//                       <span className="text-xs text-gray-300">{selectedCert.category}</span>
//                     </div>

//                     <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
//                       {selectedCert.title}
//                     </h2>

//                     <div className="space-y-3 mb-6">
//                       <div className="flex items-center gap-3 text-gray-300">
//                         <Icon icon="mdi:domain" className="w-5 h-5 text-cyan-400" />
//                         <span>{selectedCert.issuer}</span>
//                       </div>
//                       <div className="flex items-center gap-3 text-gray-300">
//                         <FiCalendar className="w-5 h-5 text-purple-400" />
//                         <span>{selectedCert.date}</span>
//                       </div>
//                       <div className="flex items-center gap-3 text-gray-300">
//                         <FiMapPin className="w-5 h-5 text-pink-400" />
//                         <span>{selectedCert.location}</span>
//                       </div>
//                     </div>

//                     <p className="text-gray-400 mb-6 leading-relaxed">
//                       {selectedCert.description}
//                     </p>

//                     <div className="mb-8">
//                       <h4 className="text-sm font-medium text-gray-300 mb-3">Skills acquired:</h4>
//                       <div className="flex flex-wrap gap-2">
//                         {selectedCert.skills.map((skill, i) => (
//                           <span
//                             key={i}
//                             className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 border border-white/10"
//                           >
//                             {skill}
//                           </span>
//                         ))}
//                       </div>
//                     </div>

//                     <div className="flex gap-4">
//                       {selectedCert.link && selectedCert.link !== '#' && (
//                         <a
//                           href={selectedCert.link}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold text-center hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
//                         >
//                           View Credential
//                         </a>
//                       )}
//                       <button
//                         onClick={() => window.print()} // You can implement download functionality
//                         className="flex items-center justify-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-cyan-400/50 transition-all"
//                       >
//                         <FiDownload className="text-cyan-400" />
//                         <span>Download</span>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Stats Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.8 }}
//           className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
//         >
//           <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10">
//             <div className="text-3xl font-bold text-cyan-400 mb-2">{certificates.length}+</div>
//             <div className="text-sm text-gray-400">Total Certificates</div>
//           </div>
//           <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10">
//             <div className="text-3xl font-bold text-purple-400 mb-2">
//               {certificates.filter(c => c.category === 'course').length}
//             </div>
//             <div className="text-sm text-gray-400">Courses</div>
//           </div>
//           <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10">
//             <div className="text-3xl font-bold text-yellow-400 mb-2">
//               {certificates.filter(c => c.category === 'achievement').length}
//             </div>
//             <div className="text-sm text-gray-400">Achievements</div>
//           </div>
//           <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10">
//             <div className="text-3xl font-bold text-pink-400 mb-2">
//               {certificates.filter(c => c.category === 'certification').length}
//             </div>
//             <div className="text-sm text-gray-400">Certifications</div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// export default Certificates;




// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   FiAward, 
//   FiExternalLink, 
//   FiX, 
//   FiDownload,
//   FiCalendar,
//   FiMapPin
// } from 'react-icons/fi';
// import { BsStars } from 'react-icons/bs';
// import { Icon } from '@iconify/react';

// function Certificates() {
//   const [selectedCert, setSelectedCert] = useState(null);
//   const [filter, setFilter] = useState('all');
//   const [showAll, setShowAll] = useState(false);

//   const certificates = [
//     {
//       id: 1,
//       title: "ProDev Frontend Development",
//       issuer: "ALX Africa",
//       date: "2025",
//       location: "Online",
//       image: "/certificates/ProDev.png",
//       category: "course",
//       description: "Comprehensive frontend development program covering modern web technologies. Mastered React, Next.js, and Tailwind CSS while building real-world projects and collaborating with peers.",
//       skills: ["React", "Next.js", "GraphQL", "React Native", "Tailwind CSS"],
//       link: "#"
//     },
//     {
//       id: 2,
//       title: "Hackathon 2nd Place",
//       issuer: "GDG Ethiopia",
//       date: "2025",
//       location: "Addis Ababa",
//       image: "/certificates/TechFest.jpg",
//       category: "achievement",
//       description: "Secured 2nd place in a competitive 24-hour hackathon, building an innovative solution for healthcare access. Collaborated with a team of 4 developers to create a functional prototype that impressed the judges.",
//       skills: ["Team Collaboration", "Problem Solving", "Rapid Prototyping", "Presentation Skills"],
//       link: "#"
//     },
//     {
//       id: 3,
//       title: "HerCommerce Hackathon",
//       issuer: "ALX Africa",
//       date: "2025",
//       location: "Remote",
//       image: "/certificates/HerCommerce.png",
//       category: "achievement",
//       description: "Participated in a week-long hackathon focused on solving women's challenges through e-commerce. Developed a concept that advanced to the final round, addressing real problems faced by women entrepreneurs.",
//       skills: ["React", "Next.js", "E-commerce", "Problem Solving", "Team Collaboration"],
//       link: "#"
//     },
//     {
//       id: 4,
//       title: "Internship Completion",
//       issuer: "Kuraz Technologies",
//       date: "2025",
//       location: "Remote",
//       image: "/certificates/kurazinternship_Certificate.jpg",
//       category: "certification",
//       description: "Successfully completed a 3-month internship at Kuraz Technologies, working on real-world projects and contributing to the development of web applications using modern technologies.",
//       skills: ["JavaScript", "PHP", "Tailwind CSS", "Team Collaboration", "Agile Methodology"],
//       link: "#"
//     },
//     {
//       id: 5,
//       title: "Programming Fundamentals",
//       issuer: "Udacity",
//       date: "2024",
//       location: "Online",
//       image: "/certificates/ProgrammingFun.png",
//       category: "course",
//       description: "Completed a comprehensive programming fundamentals course covering core computer science concepts, problem-solving techniques, and introductory programming skills.",
//       skills: ["Python", "Algorithms", "Data Structures", "Problem Solving"],
//       link: "#"
//     },
//     {
//       id: 6,
//       title: "Data Analysis",
//       issuer: "Udacity",
//       date: "2024",
//       location: "Online",
//       image: "/certificates/DataAnalysis.png",
//       category: "course",
//       description: "Mastered data analysis techniques including data cleaning, visualization, and interpretation. Learned to extract meaningful insights from complex datasets using industry-standard tools.",
//       skills: ["Python", "Pandas", "Data Visualization", "Statistical Analysis", "Jupyter Notebooks"],
//       link: "#"
//     },
//      {
//       id: 7,
//       title: "Prompt Engineering",
//       issuer: "Learn Prompting",
//       date: "2025",
//       location: "Online",
//       image: "/certificates/ChatGpt.png",
//       category: "Certification",
//       description: "Mastered prompt engineering techniques for effective interaction with AI models. Learned to craft precise and efficient prompts for various applications.",
//       skills: ["Prompt Engineering", "AI Interaction", "Natural Language Processing", "Critical Thinking"],
//       link: "#"
//     },
//      {
//       id: 8,
//       title: "Professional  Foundation",
//       issuer: "Alx Africa",
//       date: "2025",
//       location: "Online",
//       image: "/certificates/ProfesionalFoun.png",
//       category: "course",
//       description: "Mastered professional foundation skills including communication, teamwork, and project management. Gained insights into industry best practices and career development strategies.",
//       skills: ["Communication", "Teamwork", "Project Management", "Career Development"],
//       link: "#"
//     }
//   ];

//   const filters = [
//     { id: 'all', label: 'All', icon: 'mdi:view-grid' },
//     { id: 'course', label: 'Courses', icon: 'mdi:book-open' },
//     { id: 'achievement', label: 'Achievements', icon: 'mdi:trophy' },
//     { id: 'certification', label: 'Certifications', icon: 'mdi:certificate' },
//   ];

//   // Filter certificates based on selected filter
//   const filteredByCategory = filter === 'all' 
//     ? certificates 
//     : certificates.filter(cert => cert.category === filter);

//   // Show only first 3 if showAll is false
//   const visibleCertificates = showAll ? filteredByCategory : filteredByCategory.slice(0, 3);

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
//     // Smooth scroll back to certificates section
//     setTimeout(() => {
//       document.getElementById('certificates').scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }, 300);
//   };

//   return (
//     <div id="certificates" className="bg-[#0A0A0F] text-white min-h-screen relative overflow-hidden py-16 lg:py-24">
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
//           className="text-center mb-16"
//         >
//           <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 mb-4">
//             <FiAward className="w-4 h-4 text-yellow-400" />
//             <span className="text-sm text-gray-300">My achievements</span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
//               CERTIFICATES
//             </span>
//           </h2>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             Recognition and achievements from my learning journey and professional growth
//           </p>
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
//               <Icon icon={f.icon} className="w-4 h-4" />
//               <span className="text-sm font-medium">{f.label}</span>
//             </button>
//           ))}
//         </motion.div>

//         {/* Certificates Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
//         >
//           {visibleCertificates.map((cert) => (
//             <motion.div
//               key={cert.id}
//               variants={itemVariants}
//               whileHover={{ y: -8 }}
//               className="group relative cursor-pointer"
//               onClick={() => setSelectedCert(cert)}
//             >
//               {/* Background glow */}
//               <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
//               {/* Certificate Card */}
//               <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 group-hover:border-cyan-400/50 transition-all duration-300 overflow-hidden">
                
//                 {/* Certificate Image */}
//                 <div className="relative h-48 overflow-hidden bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
//                   <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] to-transparent z-10"></div>
//                   <img
//                     src={cert.image}
//                     alt={cert.title}
//                     className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
//                   />
                  
//                   {/* Category Badge */}
//                   <div className="absolute top-4 right-4 z-20">
//                     <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
//                       cert.category === 'achievement' 
//                         ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
//                         : cert.category === 'course'
//                         ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
//                         : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
//                     }`}>
//                       {cert.category}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all">
//                     {cert.title}
//                   </h3>
                  
//                   <p className="text-sm text-gray-400 mb-4 line-clamp-2">
//                     {cert.description}
//                   </p>

//                   {/* Issuer and Date */}
//                   <div className="space-y-2 mb-4">
//                     <div className="flex items-center gap-2 text-sm text-gray-400">
//                       <Icon icon="mdi:domain" className="w-4 h-4 text-cyan-400" />
//                       <span>{cert.issuer}</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-sm text-gray-400">
//                       <FiCalendar className="w-4 h-4 text-purple-400" />
//                       <span>{cert.date}</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-sm text-gray-400">
//                       <FiMapPin className="w-4 h-4 text-pink-400" />
//                       <span>{cert.location}</span>
//                     </div>
//                   </div>

//                   {/* Skills Tags */}
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {cert.skills.slice(0, 3).map((skill, i) => (
//                       <span
//                         key={i}
//                         className="px-2 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/10"
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                     {cert.skills.length > 3 && (
//                       <span className="px-2 py-1 bg-white/5 rounded-full text-xs text-gray-300">
//                         +{cert.skills.length - 3}
//                       </span>
//                     )}
//                   </div>

//                   {/* View Button */}
//                   <div className="flex items-center justify-between pt-4 border-t border-white/10">
//                     <span className="text-xs text-gray-500">Click to view</span>
//                     <FiExternalLink className="text-cyan-400 group-hover:translate-x-1 transition-transform" />
//                   </div>
//                 </div>

//                 {/* Decorative corner */}
//                 <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-cyan-400/0 group-hover:border-cyan-400/50 rounded-tr-3xl transition-all duration-300"></div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Show More / Show Less Button */}
//         {filteredByCategory.length > 3 && (
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
//               {showAll ? 'Show Less' : 'Show More Certificates'}
//             </button>
//           </motion.div>
//         )}

//         {/* No results message */}
//         {filteredByCategory.length === 0 && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-center py-20"
//           >
//             <Icon icon="mdi:certificate-outline" className="text-6xl text-gray-600 mx-auto mb-4" />
//             <p className="text-gray-400">No certificates found in this category</p>
//           </motion.div>
//         )}

//         {/* Modal for certificate view */}
//         <AnimatePresence>
//           {selectedCert && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
//               onClick={() => setSelectedCert(null)}
//             >
//               <motion.div
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.9, opacity: 0 }}
//                 className="relative max-w-4xl w-full bg-[#0A0A0F] rounded-3xl border border-white/10 overflow-hidden"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 {/* Close button */}
//                 <button
//                   onClick={() => setSelectedCert(null)}
//                   className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 hover:border-cyan-400/50 transition-colors"
//                 >
//                   <FiX className="text-gray-400" />
//                 </button>

//                 <div className="grid md:grid-cols-2 gap-6">
//                   {/* Certificate Image */}
//                   <div className="relative h-64 md:h-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 p-6 flex items-center">
//                     <img
//                       src={selectedCert.image}
//                       alt={selectedCert.title}
//                       className="w-full h-auto object-contain rounded-xl shadow-2xl"
//                     />
//                   </div>

//                   {/* Certificate Details */}
//                   <div className="p-8">
//                     <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10 mb-4">
//                       <BsStars className="w-3 h-3 text-yellow-400" />
//                       <span className="text-xs text-gray-300">{selectedCert.category}</span>
//                     </div>

//                     <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
//                       {selectedCert.title}
//                     </h2>

//                     <div className="space-y-3 mb-6">
//                       <div className="flex items-center gap-3 text-gray-300">
//                         <Icon icon="mdi:domain" className="w-5 h-5 text-cyan-400" />
//                         <span>{selectedCert.issuer}</span>
//                       </div>
//                       <div className="flex items-center gap-3 text-gray-300">
//                         <FiCalendar className="w-5 h-5 text-purple-400" />
//                         <span>{selectedCert.date}</span>
//                       </div>
//                       <div className="flex items-center gap-3 text-gray-300">
//                         <FiMapPin className="w-5 h-5 text-pink-400" />
//                         <span>{selectedCert.location}</span>
//                       </div>
//                     </div>

//                     <p className="text-gray-400 mb-6 leading-relaxed">
//                       {selectedCert.description}
//                     </p>

//                     <div className="mb-8">
//                       <h4 className="text-sm font-medium text-gray-300 mb-3">Skills acquired:</h4>
//                       <div className="flex flex-wrap gap-2">
//                         {selectedCert.skills.map((skill, i) => (
//                           <span
//                             key={i}
//                             className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 border border-white/10"
//                           >
//                             {skill}
//                           </span>
//                         ))}
//                       </div>
//                     </div>

//                     <div className="flex gap-4">
//                       {selectedCert.link && selectedCert.link !== '#' && (
//                         <a
//                           href={selectedCert.link}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold text-center hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
//                         >
//                           View Credential
//                         </a>
//                       )}
//                       <button
//                         onClick={() => window.print()}
//                         className="flex items-center justify-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-cyan-400/50 transition-all"
//                       >
//                         <FiDownload className="text-cyan-400" />
//                         <span>Download</span>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }

// export default Certificates;






import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiAward, 
  FiExternalLink, 
  FiX, 
  FiDownload,
  FiCalendar,
  FiMapPin
} from 'react-icons/fi';
import { BsStars } from 'react-icons/bs';
import { Icon } from '@iconify/react';

function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [filter, setFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const certificates = [
    {
      id: 1,
      title: "ProDev Frontend Development",
      issuer: "ALX Africa",
      date: "2025",
      location: "Online",
      image: "/certificates/ProDev.png",
      category: "course",
      description: "Comprehensive frontend development program covering modern web technologies. Mastered React, Next.js, and Tailwind CSS while building real-world projects and collaborating with peers.",
      skills: ["React", "Next.js", "GraphQL", "React Native", "Tailwind CSS"],
      link: "#"
    },
    {
      id: 2,
      title: "Hackathon 2nd Place",
      issuer: "GDG Ethiopia",
      date: "2025",
      location: "Addis Ababa",
      image: "/certificates/TechFest.jpg",
      category: "achievement",
      description: "Secured 2nd place in a competitive 24-hour hackathon, building an innovative solution for healthcare access. Collaborated with a team of 4 developers to create a functional prototype that impressed the judges.",
      skills: ["Team Collaboration", "Problem Solving", "Rapid Prototyping", "Presentation Skills"],
      link: "#"
    },
    {
      id: 3,
      title: "HerCommerce Hackathon",
      issuer: "ALX Africa",
      date: "2025",
      location: "Remote",
      image: "/certificates/HerCommerce.png",
      category: "achievement",
      description: "Participated in a week-long hackathon focused on solving women's challenges through e-commerce. Developed a concept that advanced to the final round, addressing real problems faced by women entrepreneurs.",
      skills: ["React", "Next.js", "E-commerce", "Problem Solving", "Team Collaboration"],
      link: "#"
    },
    {
      id: 4,
      title: "Internship Completion",
      issuer: "Kuraz Technologies",
      date: "2025",
      location: "Remote",
      image: "/certificates/kurazinternship_Certificate.jpg",
      category: "certification",
      description: "Successfully completed a 3-month internship at Kuraz Technologies, working on real-world projects and contributing to the development of web applications using modern technologies.",
      skills: ["JavaScript", "PHP", "Tailwind CSS", "Team Collaboration", "Agile Methodology"],
      link: "#"
    },
    {
      id: 5,
      title: "Programming Fundamentals",
      issuer: "Udacity",
      date: "2024",
      location: "Online",
      image: "/certificates/ProgrammingFun.png",
      category: "course",
      description: "Completed a comprehensive programming fundamentals course covering core computer science concepts, problem-solving techniques, and introductory programming skills.",
      skills: ["Python", "Algorithms", "Data Structures", "Problem Solving"],
      link: "#"
    },
    {
      id: 6,
      title: "Data Analysis",
      issuer: "Udacity",
      date: "2024",
      location: "Online",
      image: "/certificates/DataAnalysis.png",
      category: "course",
      description: "Mastered data analysis techniques including data cleaning, visualization, and interpretation. Learned to extract meaningful insights from complex datasets using industry-standard tools.",
      skills: ["Python", "Pandas", "Data Visualization", "Statistical Analysis", "Jupyter Notebooks"],
      link: "#"
    },
    {
      id: 7,
      title: "Prompt Engineering",
      issuer: "Learn Prompting",
      date: "2025",
      location: "Online",
      image: "/certificates/ChatGpt.png",
      category: "certification",
      description: "Mastered prompt engineering techniques for effective interaction with AI models. Learned to craft precise and efficient prompts for various applications.",
      skills: ["Prompt Engineering", "AI Interaction", "Natural Language Processing", "Critical Thinking"],
      link: "#"
    },
    {
      id: 8,
      title: "Professional Foundation",
      issuer: "Alx Africa",
      date: "2025",
      location: "Online",
      image: "/certificates/ProfesionalFoun.png",
      category: "course",
      description: "Mastered professional foundation skills including communication, teamwork, and project management. Gained insights into industry best practices and career development strategies.",
      skills: ["Communication", "Teamwork", "Project Management", "Career Development"],
      link: "#"
    }
  ];

  const filters = [
    { id: 'all', label: 'All', icon: 'mdi:view-grid' },
    { id: 'course', label: 'Courses', icon: 'mdi:book-open' },
    { id: 'achievement', label: 'Achievements', icon: 'mdi:trophy' },
    { id: 'certification', label: 'Certifications', icon: 'mdi:certificate' },
  ];

  // Filter certificates based on selected filter
  const filteredByCategory = filter === 'all' 
    ? certificates 
    : certificates.filter(cert => cert.category === filter);

  // Show only first 3 if showAll is false
  const visibleCertificates = showAll ? filteredByCategory : filteredByCategory.slice(0, 3);

  // Faster animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Reduced from 0.1
        duration: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 } // Reduced from 0.5
    }
  };
 
  const handleShowMore = () => {
    setIsLoading(true);
    setShowAll(!showAll);
    
    // Small delay to show loading state
    setTimeout(() => {
      setIsLoading(false);
      document.getElementById('certificates').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
  };

  const handleFilterChange = (filterId) => {
    setIsLoading(true);
    setFilter(filterId);
    setShowAll(false);
    
    // Small delay to show loading state
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  return (
    <div id="certificates" className="bg-[#0A0A0F] text-white min-h-screen relative overflow-hidden py-16 lg:py-24">
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
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 mb-4">
            <FiAward className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-gray-300">My achievements</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              CERTIFICATES
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Recognition and achievements from my learning journey and professional growth
          </p>
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
              <Icon icon={f.icon} className="w-4 h-4" />
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

        {/* Certificates Grid */}
        {!isLoading && (
          <AnimatePresence mode="wait">
            <motion.div
              key={filter + (showAll ? '-all' : '-limited')}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {visibleCertificates.map((cert) => (
                <motion.div
                  key={cert.id}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="group relative cursor-pointer"
                  onClick={() => setSelectedCert(cert)}
                >
                  {/* Background glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Certificate Card */}
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 group-hover:border-cyan-400/50 transition-all duration-300 overflow-hidden">
                    
                    {/* Certificate Image */}
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] to-transparent z-10"></div>
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 right-4 z-20">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                          cert.category === 'achievement' 
                            ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                            : cert.category === 'course'
                            ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                            : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                        }`}>
                          {cert.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all">
                        {cert.title}
                      </h3>
                      
                      <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                        {cert.description}
                      </p>

                      {/* Issuer and Date */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Icon icon="mdi:domain" className="w-4 h-4 text-cyan-400" />
                          <span>{cert.issuer}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <FiCalendar className="w-4 h-4 text-purple-400" />
                          <span>{cert.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <FiMapPin className="w-4 h-4 text-pink-400" />
                          <span>{cert.location}</span>
                        </div>
                      </div>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {cert.skills.slice(0, 3).map((skill, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/10"
                          >
                            {skill}
                          </span>
                        ))}
                        {cert.skills.length > 3 && (
                          <span className="px-2 py-1 bg-white/5 rounded-full text-xs text-gray-300">
                            +{cert.skills.length - 3}
                          </span>
                        )}
                      </div>

                      {/* View Button */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <span className="text-xs text-gray-500">Click to view</span>
                        <FiExternalLink className="text-cyan-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-cyan-400/0 group-hover:border-cyan-400/50 rounded-tr-3xl transition-all duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        )}

        {/* Show More / Show Less Button */}
        {!isLoading && filteredByCategory.length > 3 && (
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
              {showAll ? 'Show Less' : 'Show More Certificates'}
            </button>
          </motion.div>
        )}

        {/* No results message */}
        {!isLoading && filteredByCategory.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <Icon icon="mdi:certificate-outline" className="text-6xl text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400">No certificates found in this category</p>
          </motion.div>
        )}

        {/* Modal for certificate view */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-4xl w-full bg-[#0A0A0F] rounded-3xl border border-white/10 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 hover:border-cyan-400/50 transition-colors"
                >
                  <FiX className="text-gray-400" />
                </button>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Certificate Image */}
                  <div className="relative h-64 md:h-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 p-6 flex items-center">
                    <img
                      src={selectedCert.image}
                      alt={selectedCert.title}
                      className="w-full h-auto object-contain rounded-xl shadow-2xl"
                    />
                  </div>

                  {/* Certificate Details */}
                  <div className="p-8">
                    <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10 mb-4">
                      <BsStars className="w-3 h-3 text-yellow-400" />
                      <span className="text-xs text-gray-300">{selectedCert.category}</span>
                    </div>

                    <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      {selectedCert.title}
                    </h2>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-gray-300">
                        <Icon icon="mdi:domain" className="w-5 h-5 text-cyan-400" />
                        <span>{selectedCert.issuer}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <FiCalendar className="w-5 h-5 text-purple-400" />
                        <span>{selectedCert.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <FiMapPin className="w-5 h-5 text-pink-400" />
                        <span>{selectedCert.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {selectedCert.description}
                    </p>

                    <div className="mb-8">
                      <h4 className="text-sm font-medium text-gray-300 mb-3">Skills acquired:</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedCert.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 border border-white/10"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      {selectedCert.link && selectedCert.link !== '#' && (
                        <a
                          href={selectedCert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold text-center hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                        >
                          View Credential
                        </a>
                      )}
                      <button
                        onClick={() => window.print()}
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-cyan-400/50 transition-all"
                      >
                        <FiDownload className="text-cyan-400" />
                        <span>Download</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Certificates;