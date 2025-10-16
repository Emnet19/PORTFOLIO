import React from 'react';

function About() {
  return (
    <div className="text-white px-4 py-8 md:px-20 md:py-12  min-h-screen">
      <h1 className="font-bold text-4xl md:text-5xl mb-10 text-center">ABOUT ME</h1>
      

      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        

           <div className="w-full md:w-1/2 flex justify-center relative">
          <div className="absolute top-6 right-6 w-[80%] h-[100%] border-4 border-cyan-500 rounded-md z-0 hidden md:block"></div>
          <img 
            src="/profile.png" 
            alt="Emnet Befkadu" 
            className="relative z-10 w-[300px] md:w-[500px] rounded-lg shadow-lg object-cover" 
          />
        </div>
        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <p className="text-gray-300 text-justify leading-relaxed text-base md:text-lg">
            I’m Emnet Befkadu, a dedicated full stack developer with a strong foundation in both
            frontend and backend technologies. I build responsive and dynamic applications using HTML, CSS, 
            JavaScript, and React on the frontend, and Java, PHP, and MySQL on the backend. My passion for 
            development has driven me to constantly learn and build real-world projects, both independently 
            and in team settings. I’ve also taken part in tech communities like GDG, where I enhanced my skills
            and participated in a hackathon where my team placed second. Through these experiences, I’ve grown 
            not only as a developer but also as a collaborator who values teamwork, problem-solving, and delivering
            high-quality solutions.
          </p>
        </div>

        {/* Image Section with border */}
       

      </div>
    </div>
  );
}

export default About;
