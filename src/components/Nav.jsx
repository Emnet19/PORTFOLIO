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




import React from 'react';

function Nav() {
  return (
    <div className="fixe w-full top-0 left-0 z-50   flex justify-center">
      <nav className="backdrop-blur-md  bg-white/5 border border-gray-600/30 my-9 px-10 py-4 rounded-4xl max-w-2xl shadow-lg">
        <div className="flex justify-center gap-14 ">
          <a href="#home" className="text-cyan-400 hover:text-orange-300 transition-colors duration-300 text-lg">
            Home
          </a>
          <a href="#about" className="text-cyan-400 hover:text-orange-300 transition-colors duration-300 text-lg">
            About
          </a>
          <a href="#skills" className="text-cyan-400 hover:text-orange-300 transition-colors duration-300 text-lg">
            Skills
          </a>
          <a href="#projects" className="text-cyan-400 hover:text-orange-300 transition-colors duration-300 text-lg">
            Projects
          </a>
          <a href="#contact" className="text-cyan-400 hover:text-orange-300 transition-colors duration-300 text-lg">
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Nav;