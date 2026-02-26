// import {react} from 'react';import React from 'react';
// import { motion } from 'framer-motion';
// import { 
//   FiCode, 
//   FiLayout, 
//   FiDatabase, 
//   FiSmartphone,
//   FiPenTool,
//   FiSettings,
//   FiArrowRight
// } from 'react-icons/fi';
// import { Icon } from '@iconify/react';

// function Services() {
//   const services = [
//     {
//       title: 'Frontend Development',
//       description: 'Building responsive, interactive user interfaces with modern frameworks like React and Next.js.',
//       icon: <FiLayout className="w-8 h-8" />,
//       color: 'from-cyan-400 to-blue-400',
//       technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
//       price: 'Starting at $X'
//     },
//     {
//       title: 'Backend Development',
//       description: 'Creating scalable server-side applications, RESTful APIs, and database architecture.',
//       icon: <FiDatabase className="w-8 h-8" />,
//       color: 'from-green-400 to-emerald-400',
//       technologies: ['Node.js', 'Express', 'Python', 'PHP', 'MongoDB', 'MySQL'],
//       price: 'Starting at $X'
//     },
//     {
//       title: 'UI/UX Design',
//       description: 'Designing intuitive user experiences with beautiful interfaces that users love to interact with.',
//       icon: <FiPenTool className="w-8 h-8" />,
//       color: 'from-purple-400 to-pink-400',
//       technologies: ['Figma', 'Adobe XD', 'Wireframing', 'Prototyping'],
//       price: 'Starting at $X'
//     },
//     {
//       title: 'Full Stack Development',
//       description: 'End-to-end web application development from concept to deployment.',
//       icon: <FiCode className="w-8 h-8" />,
//       color: 'from-orange-400 to-red-400',
//       technologies: ['MERN Stack', 'JAMstack', 'Progressive Web Apps'],
//       price: 'Starting at $X'
//     },
//     {
//       title: 'Responsive Design',
//       description: 'Making sure your website looks perfect on all devices - from mobile to desktop.',
//       icon: <FiSmartphone className="w-8 h-8" />,
//       color: 'from-pink-400 to-rose-400',
//       technologies: ['Mobile-First', 'Cross-browser', 'Responsive Layouts'],
//       price: 'Starting at $X'
//     },
//     {
//       title: 'Maintenance & Support',
//       description: 'Ongoing support, bug fixes, and updates to keep your applications running smoothly.',
//       icon: <FiSettings className="w-8 h-8" />,
//       color: 'from-yellow-400 to-amber-400',
//       technologies: ['Performance Optimization', 'Security Updates', 'Bug Fixes'],
//       price: 'Custom pricing'
//     }
//   ];

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
//             <Icon icon="mdi:briefcase-outline" className="w-4 h-4 text-cyan-400" />
//             <span className="text-sm text-gray-300">What I offer</span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
//               SERVICES
//             </span>
//           </h2>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             Professional web development and design services tailored to your needs
//           </p>
//         </motion.div>

//         {/* Services Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
//         >
//           {services.map((service, index) => (
//             <motion.div
//               key={service.title}
//               variants={itemVariants}
//               whileHover={{ y: -8 }}
//               className="group relative"
//             >
//               {/* Background glow on hover */}
//               <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
//               {/* Main card */}
//               <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 group-hover:border-cyan-400/50 transition-all duration-300 h-full flex flex-col">
                
//                 {/* Icon with gradient background */}
//                 <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} bg-opacity-10 mb-6 w-fit`}>
//                   <div className="text-white">
//                     {service.icon}
//                   </div>
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all">
//                   {service.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
//                   {service.description}
//                 </p>

//                 {/* Technologies used */}
//                 <div className="mb-6">
//                   <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">TECHNOLOGIES</p>
//                   <div className="flex flex-wrap gap-2">
//                     {service.technologies.map((tech) => (
//                       <span
//                         key={tech}
//                         className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/10"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Price and CTA */}
//                 <div className="flex items-center justify-between pt-4 border-t border-white/10">
//                   <span className="text-sm text-gray-400">{service.price}</span>
//                   <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group/btn">
//                     Learn more
//                     <FiArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
//                   </button>
//                 </div>

//                 {/* Decorative corner accent */}
//                 <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-cyan-400/0 group-hover:border-cyan-400/50 rounded-tr-3xl transition-all duration-300"></div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* CTA Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.8 }}
//           className="mt-16 text-center"
//         >
//           <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-white/5 backdrop-blur-sm px-8 py-6 rounded-3xl border border-white/10">
//             <div>
//               <p className="text-gray-300 text-lg mb-2">Have a project in mind?</p>
//               <p className="text-gray-400">Let's discuss how I can help bring your ideas to life</p>
//             </div>
//             <a
//               href="#contact"
//               className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold text-lg whitespace-nowrap hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
//             >
//               Start a conversation
//             </a>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// export default Services;


import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCode, 
  FiLayout, 
  FiDatabase, 
  FiSmartphone,
  FiPenTool,
  FiSettings,
  FiArrowRight
} from 'react-icons/fi';
import { Icon } from '@iconify/react';

function Services() {
  const services = [
    {
      title: 'Frontend Development',
      description: 'Building responsive, interactive user interfaces with modern frameworks like React and Next.js.',
      icon: <FiLayout className="w-8 h-8" />,
      color: 'from-cyan-400 to-blue-400',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
      title: 'Backend Development',
      description: 'Creating scalable server-side applications, RESTful APIs, and database architecture.',
      icon: <FiDatabase className="w-8 h-8" />,
      color: 'from-green-400 to-emerald-400',
      technologies: ['Node.js', 'Express', 'Python', 'PHP', 'MongoDB', 'MySQL'],
    },
    {
      title: 'UI/UX Design',
      description: 'Designing intuitive user experiences with beautiful interfaces that users love to interact with.',
      icon: <FiPenTool className="w-8 h-8" />,
      color: 'from-purple-400 to-pink-400',
      technologies: ['Figma', 'Adobe XD', 'Wireframing', 'Prototyping'],
    },
    {
      title: 'Full Stack Development',
      description: 'End-to-end web application development from concept to deployment.',
      icon: <FiCode className="w-8 h-8" />,
      color: 'from-orange-400 to-red-400',
      technologies: ['MERN Stack', 'JAMstack', 'Progressive Web Apps'],
    },
    {
      title: 'Mobile App Development',
      description: 'Building cross-platform mobile applications for iOS and Android using Flutter and React Native.',
      icon: <FiSmartphone className="w-8 h-8" />,
      color: 'from-pink-400 to-rose-400',
      technologies: ['Flutter', 'React Native', 'Expo', 'Mobile UI', 'App Store Deployment'],
    },
    {
      title: 'Maintenance & Support',
      description: 'Ongoing support, bug fixes, and updates to keep your applications running smoothly.',
      icon: <FiSettings className="w-8 h-8" />,
      color: 'from-yellow-400 to-amber-400',
      technologies: ['Performance Optimization', 'Security Updates', 'Bug Fixes'],
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="bg-[#0A0A0F] text-white min-h-screen relative overflow-hidden py-16 lg:py-24">
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
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 mb-4">
            <Icon icon="mdi:briefcase-outline" className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-gray-300">What I offer</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              SERVICES
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional web and mobile development services tailored to your needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Main card */}
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 group-hover:border-cyan-400/50 transition-all duration-300 h-full flex flex-col">
                
                {/* Icon with gradient background */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} bg-opacity-10 mb-6 w-fit`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Technologies used */}
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">TECHNOLOGIES</p>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button - Removed price, kept only Learn more */}
                <div className="flex justify-end pt-4 border-t border-white/10">
                  <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group/btn">
                    Learn more
                    <FiArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-cyan-400/0 group-hover:border-cyan-400/50 rounded-tr-3xl transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-white/5 backdrop-blur-sm px-8 py-6 rounded-3xl border border-white/10">
            <div>
              <p className="text-gray-300 text-lg mb-2">Have a project in mind?</p>
              <p className="text-gray-400">Let's discuss how I can help bring your ideas to life</p>
            </div>
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold text-lg whitespace-nowrap hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Start a conversation
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Services;