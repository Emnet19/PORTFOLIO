// import React from 'react'
// import { useState } from 'react'
// // const[skill,NewSkill]=useState();
// import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiGithub ,SiPython,
//     SiGit,SiNodedotjs,SiMongodb,SiCplusplus,SiMysql} from 'react-icons/si'
//   import { FaJava,FaPhp ,} from 'react-icons/fa';
//   import { Icon } from '@iconify/react';
// function Skills(){
//     const skills=[
//         { name: 'C++', icon: <Icon icon="devicon:cplusplus" width="64" /> },
//         { name: 'Java', icon: <Icon icon="logos:java" width="64" /> },
//         {name:'HTML',icon:<SiHtml5 className='text-orange-500 text-6xl'/>},
//         {name:'CSS', icon:<SiCss3 className='text-blue-400 text-6xl'/>},
//         { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400 text-6xl" /> },
//         { name: 'React', icon: <SiReact className="text-cyan-400 text-6xl" /> },
//         { name: 'TypeScript', icon: <img src="https://cdn.simpleicons.org/typescript" alt="TypeScript" className="h-16 w-16" /> },
//         { name: 'Tailwind CSS', icon: <img src="https://cdn.simpleicons.org/tailwindcss" alt="Tailwind CSS" className="h-16 w-16" /> },
//         { name: 'Next.js', icon: <img src="https://cdn.simpleicons.org/nextdotjs" alt="Next.js" className="h-16 w-16 bg-white rounded-full p-2" /> },
//         { name: 'Node.js', icon: <img src="https://cdn.simpleicons.org/nodedotjs" alt="Node.js" className="h-16 w-16" /> },
//         { name: 'PHP', icon: <img src="https://cdn.simpleicons.org/php" alt="PHP" className="h-16 w-16" /> },
//         { name: 'Python', icon: <Icon icon="logos:python" width="64" /> },
//         // { name: 'MongoDB', icon: <SiMongodb className="text-green-500 text-6xl" /> },
//         { name: 'MySQL', icon: <Icon icon="logos:mysql" width="64" /> },
//         {name:'GitHub',icon:<SiGithub className="text-white text-6xl" />},
//         { name: 'Git', icon: <SiGit className="text-red-500 text-6xl" /> },

        
    

//     ];
//     return(
//         <div className='text-white mt-10  p-10 bg-[#0b1120] backdrop-blur-sm'>
//            <h2 className='text-center text-5xl  font-extrabold mt-3 mr-10'>
//             MY SKILLS -  <span className='text-cyan-500 '>Technologies I use</span> </h2>
//            {/* backdrop-blur-lg bg-black/10<p className=' text-center text-xl text-cyan-500 mt-2 mb-8 font-bold'> Testimonials</p> */}

//            <div className=' mt-25 grid grid-col-3  sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6  gap-4  justify-items-center'>{skills.map((skills,index)=>(
//                 <div key={index} className='flex flex-col items-center w-full hover:scale-110 transition-transform duration-300' >
//                    <div className='p-6 bg-white/5 rounded-lg hover:bg-white/20 `{skill.name}` transition-colors duration-300 flex items-center justify-center '>
                   
//                    {skills.icon}
//                    </div>
//                    <p className='mt-2 text-center font-semibold'>{skills.name}</p>
//                 </div>
//            ))}

//            </div>
//       </div>
//     )
// }
// export default Skills







// import React from 'react';
// import { useState } from 'react';
// import {
//   SiHtml5,
//   SiCss3,
//   SiJavascript,
//   SiReact,
//   SiTailwindcss,
//   SiGithub,
//   SiPython,
//   SiGit,
//   SiNodedotjs,
//   SiMongodb,
//   SiCplusplus,
//   SiMysql
// } from 'react-icons/si';
// import { FaJava, FaPhp } from 'react-icons/fa';
// import { Icon } from '@iconify/react';

// function Skills() {
//   const skills = [
//     { name: 'C++', icon: <Icon icon="devicon:cplusplus" width="64" /> },
//     { name: 'Java', icon: <Icon icon="logos:java" width="64" /> },
//     { name: 'HTML', icon: <SiHtml5 className='text-orange-500 text-6xl' /> },
//     { name: 'CSS', icon: <SiCss3 className='text-blue-400 text-6xl' /> },
//     { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400 text-6xl" /> },
//     { name: 'React', icon: <SiReact className="text-cyan-400 text-6xl" /> },
//     { name: 'TypeScript', icon: <img src="https://cdn.simpleicons.org/typescript" alt="TypeScript" className="h-16 w-16" /> },
//     { name: 'Tailwind CSS', icon: <img src="https://cdn.simpleicons.org/tailwindcss" alt="Tailwind CSS" className="h-16 w-16" /> },
//     { name: 'Next.js', icon: <img src="https://cdn.simpleicons.org/nextdotjs" alt="Next.js" className="h-16 w-16 bg-white rounded-full p-2" /> },
//     { name: 'Node.js', icon: <img src="https://cdn.simpleicons.org/nodedotjs" alt="Node.js" className="h-16 w-16" /> },
//     { name: 'PHP', icon: <img src="https://cdn.simpleicons.org/php" alt="PHP" className="h-16 w-16" /> },
//     { name: 'Python', icon: <Icon icon="logos:python" width="64" /> },
//     { name: 'MySQL', icon: <Icon icon="logos:mysql" width="64" /> },
//     { name: 'GitHub', icon: <SiGithub className="text-white text-6xl" /> },
//     { name: 'Git', icon: <SiGit className="text-red-500 text-6xl" /> },
//   ];

//   return (
//     <div className='text-white mt-10 p-6 sm:p-10 bg-[#0b1120] backdrop-blur-sm'>
//       <h2 className='text-center text-3xl sm:text-5xl font-extrabold mt-3'>
//         MY SKILLS - <span className='text-cyan-500'>Technologies I use</span>
//       </h2>

//       <div className='mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 sm:gap-8 justify-items-center'>
//         {skills.map((skill, index) => (
//           <div key={index} className='flex flex-col items-center w-full hover:scale-110 transition-transform duration-300'>
//             <div className='p-4 sm:p-6 bg-white/5 rounded-lg hover:bg-white/20 transition-colors duration-300 flex items-center justify-center'>
//               {skill.icon}
//             </div>
//             <p className='mt-2 text-center font-semibold'>{skill.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Skills;







import React from 'react';
import { motion } from 'framer-motion';
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiNextdotjs,
  SiExpress,
  SiPython,
  SiPhp,
  SiMysql,
  SiFigma
} from 'react-icons/si';
import { Icon } from '@iconify/react';

function Skills() {
  // Core technologies for today's job market
  const skills = [
    { name: 'React', icon: <SiReact className="text-cyan-400 text-3xl" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-white text-3xl" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400 text-3xl" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-400 text-3xl" /> },
    { name: 'Node.js', icon: <SiNodedotjs className="text-green-500 text-3xl" /> },
    { name: 'Express', icon: <SiExpress className="text-white text-3xl" /> },
    { name: 'Python', icon: <SiPython className="text-yellow-400 text-3xl" /> },
    { name: 'PHP', icon: <SiPhp className="text-purple-400 text-3xl" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-400 text-3xl" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-400 text-3xl" /> },
    { name: 'Tailwind', icon: <SiTailwindcss className="text-cyan-400 text-3xl" /> },
    { name: 'Figma', icon: <SiFigma className="text-purple-400 text-3xl" /> },
    { name: 'Git', icon: <SiGit className="text-orange-500 text-3xl" /> },
    { name: 'GitHub', icon: <SiGithub className="text-white text-3xl" /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div className="bg-[#0A0A0F] text-white min-h-screen relative overflow-hidden py-16 lg:py-24">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 max-w-5xl">
        
        {/* Simple Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              SKILLS
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies I work with regularly
          </p>
        </motion.div>

        {/* Simple Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 md:gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group flex flex-col items-center"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-cyan-400/50 group-hover:bg-white/10 transition-all duration-300">
                {skill.icon}
              </div>
              <p className="mt-2 text-xs md:text-sm text-gray-400 group-hover:text-white transition-colors text-center">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Simple Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center text-gray-500 text-sm mt-12"
        >
          Always exploring new technologies
        </motion.p>
      </div>
    </div>
  );
}

export default Skills;