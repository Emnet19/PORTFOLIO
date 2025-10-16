




import { motion } from 'framer-motion';
import Nav from '../components/Nav';

function Home() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  const imageVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.9,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
const resumeUrl = '/Emnet-Befkadu-Woldekidan-FlowCV-Resume.pdf'; // Update with your actual resume URL
  
  return (
    <div className="bg-[#0b1120] text-white min-h-screen">
      <Nav />

      <div className="container mx-auto px-6 py-12 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={textVariants}
          >
            HI! I'M <span className="text-cyan-400">EMNET BEFKADU,</span>
          </motion.h2>

          <motion.h2
            className="mt-4 text-lg sm:text-2xl font-medium"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={textVariants}
          >
            a Full Stack Developer passionate about building clean, responsive, and user-friendly web applications.
          </motion.h2>

          <motion.h2
            className="mt-4 text-lg sm:text-2xl font-medium"
            initial="hidden"
            animate="visible"
            custom={2}
            variants={textVariants}
          >
            I enjoy solving problems and bringing ideas to life through code.
          </motion.h2>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={3}
            variants={textVariants}
          >

            <a
  href={resumeUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full px-8 py-3 mt-6 bg-cyan-500 text-black font-bold text-lg shadow-md hover:bg-cyan-600 transition-all duration-300 inline-block"
>
  Resume
</a>

            {/* <button className="rounded-full px-8 py-3 mt-6 bg-cyan-500 text-black font-bold text-lg shadow-md hover:bg-cyan-600 transition-all duration-300"
               onClick={()=>window.open(encodeURI(resumeUrl), '_blank')}
            >
              Resume
            </button> */}
          </motion.div>
        </div>

        {/* Image Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          whileHover={{ scale: 1.02 }}
          className="w-full md:w-1/2 flex justify-center relative"
        >
          <div className="absolute top-6 right-6 w-[80%] h-[80%] border-4 border-cyan-500 rounded-lg z-0 hidden md:block"></div>
          <img
            src="/profile.png"
            alt="Emnet Befkadu"
            className="relative z-10 rounded-lg shadow-lg w-[280px] sm:w-[350px] md:w-[400px] object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
