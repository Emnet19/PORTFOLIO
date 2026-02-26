
// import React from 'react';
// import { FaPhoneAlt } from 'react-icons/fa';
// import { HiOutlineMail } from 'react-icons/hi';

// import Footer from './Footer';

// function Contact() {
//   return (
//     <div className='text-white max-w-6xl mx-auto  px-4 py-15'>
//       <h1 className='text-3xl text-center mb-10 font-bold'>CONTACT ME</h1>
//       <div className='flex flex-col md:flex-row gap-10'>
//         <div className='md:w-1/2 space-y-6'>
//           <h3 className='text-2xl font-semibold'>Let's Build Together </h3>
//           <p className='  text-gray-400 leading-relaxed'>
//             As a dedicated full-stack developer, I specialize in crafting seamless, 
//             end-to-end solutions  from intuitive user interfaces to robust server-side logic. 
            
//             With experience across a variety of technologies and languages, 
//             I'm always excited to take on new challenges and create meaningful 
//             digital experiences.
            
//             Whether you're looking to collaborate on a project, have an idea in mind, 
//             or simply want to connect, let's make it happen!
//           </p>

//           <div className='space-y-4'>
//             <p className='flex items-center gap-2'>
//               <FaPhoneAlt className="text-cyan-500 " /> 
//               <span>+251 966157244</span>
//             </p>
            
//             <p className='flex items-center gap-2'>
//               <HiOutlineMail className="text-cyan-400 " /> 
//               <span>emnbef234@gmail.com</span>
//             </p>
            
//             <p className='flex items-center gap-2'>
//               <span>📍</span>
//               <span>Addis Ababa, Ethiopia</span>
//             </p>
//           </div>
//         </div>

//         <div className='md:w-1/2'>
//           <form className='space-y-6'>
//             <input 
//               type="text" 
//               placeholder='Name' 
//               className='w-full p-3 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500'
//             />
            
//             <input 
//               type="email" 
//               placeholder='Email' 
//               className='w-full p-3 rounded-lg  bg-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500'
//             />
            
//             <textarea 
//               placeholder='Message' 
//               rows="5"
//               className='w-full p-3 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500'
//             ></textarea>
            
//             <button 
//               type="submit"
//               className='px-6 py-3 bg-cyan-500 text-black rounded hover:bg-cyan-600 transition-colors font-medium'
//             >
//               Send
//             </button>
//           </form>
//         </div>
//       </div>
//      <Footer/>
//     </div>
//   );
// }

// export default Contact;









import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsStars } from 'react-icons/bs';
import Footer from './Footer';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple mailto link
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );
    
    window.location.href = `mailto:emnbef234@gmail.com?subject=${subject}&body=${body}`;
    
    // Optional: Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    { 
      icon: <FaPhoneAlt className="text-cyan-400" />, 
      value: '+251 966157244',
      label: 'Phone',
      link: 'tel:+251966157244'
    },
    { 
      icon: <HiOutlineMail className="text-purple-400" />, 
      value: 'emnbef234@gmail.com',
      label: 'Email',
      link: 'mailto:emnbef234@gmail.com'
    },
    { 
      icon: <FaMapMarkerAlt className="text-pink-400" />, 
      value: 'Addis Ababa, Ethiopia',
      label: 'Location',
      link: null
    },
  ];

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
            <BsStars className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-gray-300">Get in touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              CONTACT ME
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's turn your ideas into reality
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Intro Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Let's Build Together
                </span>
              </h3>
              
              <p className="text-gray-400 leading-relaxed mb-4">
                As a dedicated full-stack developer, I specialize in crafting seamless, 
                end-to-end solutions from intuitive user interfaces to robust server-side logic. 
              </p>
              
              <p className="text-gray-400 leading-relaxed">
                Whether you're looking to collaborate on a project, have an idea in mind, 
                or simply want to connect, let's make it happen!
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="group"
                >
                  {info.link ? (
                    <a 
                      href={info.link}
                      className="flex items-center gap-4 bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{info.label}</p>
                        <p className="text-white font-medium">{info.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
                      <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{info.label}</p>
                        <p className="text-white font-medium">{info.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-4 rounded-2xl border border-green-500/20"
            >
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300">Available for freelance work</span>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe" 
                    required
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all text-white placeholder-gray-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com" 
                    required
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all text-white placeholder-gray-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..." 
                    rows="5"
                    required
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all text-white placeholder-gray-500 resize-none"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold text-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-[1.02]"
                >
                  Send Message
                </button>
              </form>

              {/* Simple note */}
              <p className="text-center text-gray-500 text-sm mt-6">
                This will open your default email app
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Contact;