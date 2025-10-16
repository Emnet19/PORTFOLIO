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







import React from 'react';
import { useState } from 'react';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGithub,
  SiPython,
  SiGit,
  SiNodedotjs,
  SiMongodb,
  SiCplusplus,
  SiMysql
} from 'react-icons/si';
import { FaJava, FaPhp } from 'react-icons/fa';
import { Icon } from '@iconify/react';

function Skills() {
  const skills = [
    { name: 'C++', icon: <Icon icon="devicon:cplusplus" width="64" /> },
    { name: 'Java', icon: <Icon icon="logos:java" width="64" /> },
    { name: 'HTML', icon: <SiHtml5 className='text-orange-500 text-6xl' /> },
    { name: 'CSS', icon: <SiCss3 className='text-blue-400 text-6xl' /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400 text-6xl" /> },
    { name: 'React', icon: <SiReact className="text-cyan-400 text-6xl" /> },
    { name: 'TypeScript', icon: <img src="https://cdn.simpleicons.org/typescript" alt="TypeScript" className="h-16 w-16" /> },
    { name: 'Tailwind CSS', icon: <img src="https://cdn.simpleicons.org/tailwindcss" alt="Tailwind CSS" className="h-16 w-16" /> },
    { name: 'Next.js', icon: <img src="https://cdn.simpleicons.org/nextdotjs" alt="Next.js" className="h-16 w-16 bg-white rounded-full p-2" /> },
    { name: 'Node.js', icon: <img src="https://cdn.simpleicons.org/nodedotjs" alt="Node.js" className="h-16 w-16" /> },
    { name: 'PHP', icon: <img src="https://cdn.simpleicons.org/php" alt="PHP" className="h-16 w-16" /> },
    { name: 'Python', icon: <Icon icon="logos:python" width="64" /> },
    { name: 'MySQL', icon: <Icon icon="logos:mysql" width="64" /> },
    { name: 'GitHub', icon: <SiGithub className="text-white text-6xl" /> },
    { name: 'Git', icon: <SiGit className="text-red-500 text-6xl" /> },
  ];

  return (
    <div className='text-white mt-10 p-6 sm:p-10 bg-[#0b1120] backdrop-blur-sm'>
      <h2 className='text-center text-3xl sm:text-5xl font-extrabold mt-3'>
        MY SKILLS - <span className='text-cyan-500'>Technologies I use</span>
      </h2>

      <div className='mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 sm:gap-8 justify-items-center'>
        {skills.map((skill, index) => (
          <div key={index} className='flex flex-col items-center w-full hover:scale-110 transition-transform duration-300'>
            <div className='p-4 sm:p-6 bg-white/5 rounded-lg hover:bg-white/20 transition-colors duration-300 flex items-center justify-center'>
              {skill.icon}
            </div>
            <p className='mt-2 text-center font-semibold'>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
