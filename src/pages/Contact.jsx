
import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

import Footer from './Footer';

function Contact() {
  return (
    <div className='text-white max-w-6xl mx-auto  px-4 py-15'>
      <h1 className='text-3xl text-center mb-10 font-bold'>CONTACT ME</h1>
      <div className='flex flex-col md:flex-row gap-10'>
        <div className='md:w-1/2 space-y-6'>
          <h3 className='text-2xl font-semibold'>Let's Build Together </h3>
          <p className='  text-gray-400 leading-relaxed'>
            As a dedicated full-stack developer, I specialize in crafting seamless, 
            end-to-end solutions  from intuitive user interfaces to robust server-side logic. 
            
            With experience across a variety of technologies and languages, 
            I'm always excited to take on new challenges and create meaningful 
            digital experiences.
            
            Whether you're looking to collaborate on a project, have an idea in mind, 
            or simply want to connect, let's make it happen!
          </p>

          <div className='space-y-4'>
            <p className='flex items-center gap-2'>
              <FaPhoneAlt className="text-cyan-500 " /> 
              <span>+251 966157244</span>
            </p>
            
            <p className='flex items-center gap-2'>
              <HiOutlineMail className="text-cyan-400 " /> 
              <span>emnbef234@gmail.com</span>
            </p>
            
            <p className='flex items-center gap-2'>
              <span>📍</span>
              <span>Addis Ababa, Ethiopia</span>
            </p>
          </div>
        </div>

        <div className='md:w-1/2'>
          <form className='space-y-6'>
            <input 
              type="text" 
              placeholder='Name' 
              className='w-full p-3 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500'
            />
            
            <input 
              type="email" 
              placeholder='Email' 
              className='w-full p-3 rounded-lg  bg-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500'
            />
            
            <textarea 
              placeholder='Message' 
              rows="5"
              className='w-full p-3 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500'
            ></textarea>
            
            <button 
              type="submit"
              className='px-6 py-3 bg-cyan-500 text-black rounded hover:bg-cyan-600 transition-colors font-medium'
            >
              Send
            </button>
          </form>
        </div>
      </div>
     <Footer/>
    </div>
  );
}

export default Contact;