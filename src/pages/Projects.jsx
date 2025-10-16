import React, { useState } from 'react';
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiGithub, SiPython,
  SiGit, SiNodedotjs, SiMongodb, SiCplusplus, SiMysql
} from 'react-icons/si';
import { FaJava, FaPhp } from 'react-icons/fa';
import { Icon } from '@iconify/react';

function Projects() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "Healthcare Plus ",
      desc: `HealthCare Plus is a modern web application built with React and TypeScript that allows users to connect with certified doctors, book appointments instantly, and securely manage their health records in one place. It features a clean, responsive interface, smooth navigation, and emphasizes data privacy while ensuring a seamless healthcare booking experience.`,
      image: "/hospital.png",
      techs: [<SiReact />, <img src="https://cdn.simpleicons.org/tailwindcss" alt="Tailwind CSS" className="h-6 w-6" />],
      link: "https://ehealth-chi.vercel.app/",
      reverse: true,
      tag: "PROJECT 1"
    },
    {
      title: "Time Bank",
      desc: `Time Bank is an innovative platform designed to promote skill-sharing through time exchange. Users can connect with others who possess the skills they’re seeking and offer their own expertise in return — no money involved, just mutual learning.`,
      image: "/Time Bank.png",
      techs: [<SiReact />, <img src="https://cdn.simpleicons.org/tailwindcss" className="h-6 w-6" />, <img src="https://cdn.simpleicons.org/typescript" className="h-6 w-6" />, <Icon icon="logos:python" className="h-6 w-6" />],
      link: "https://github.com/wende12github/Silent-Coders",
      reverse: false,
      tag: "PROJECT 2"
    },
    {
      title: "Random Chat App",
      desc: `Random Chat App is an interactive web application that connects people based on shared interests and current moods, making conversations more engaging and personal. Built with React and TypeScript, it integrates external APIs and utilizes WebSocket technology to enable real-time chatting and smooth user interaction.`,
      image: "/chatapp.png",
      techs: [<SiReact />, <img src="https://cdn.simpleicons.org/tailwindcss" className="h-6 w-6" />, <Icon icon="logos:laravel" className="h-6 w-6" />],
      link: "https://github.com/Hybrid-team-2/web_chatapp",
      reverse: true,
      tag: "PROJECT 3"
    },
    {
      title: "Foodie Finder",
      desc: `Foodie Finder is a modern React-based web application that lets users explore delicious meals from around the world. Whether you’re searching by meal name, ingredients, or exploring random dishes, this app makes discovering new recipes easy and fun.`,
      image: "/foodie-finder.png",
      techs: [<SiReact />, <img src="https://cdn.simpleicons.org/tailwindcss" alt="Tailwind CSS" className="h-6 w-6" />],
      link: "https://github.com/Emnet19/foodie-finder",
      reverse: false,
      tag: "PROJECT 4"
    },
    {
      title: "Resource For Software Engineering Students",
      desc: `A comprehensive and well-organized platform designed to support Software Engineering students throughout their academic journey. Built with React, TypeScript, and Tailwind CSS.`,
      image: "/Book1.png",
      techs: [<SiReact />, <img src="https://cdn.simpleicons.org/tailwindcss" className="h-6 w-6" />, <img src="https://cdn.simpleicons.org/typescript" className="h-6 w-6" />, <img src="https://cdn.simpleicons.org/php" className="h-6 w-6" />],
      link: "https://github.com/Elleni-Bisrat/GROUP4_IPII_PROJECT",
      reverse: true,
      tag: "PROJECT 5"
    },
    {
      title: "Supermarket Management System",
      desc: `A complete and intuitive Supermarket Management System designed to streamline daily operations. Built using Java and MySQL with a user-friendly GUI.`,
      image: "/Supermarket.png",
      techs: [<Icon icon="logos:java" className='h-6 w-6' />, <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" width="30" />],
      link: "https://github.com/Emnet19/SuperMarketMgt-Java",
      reverse: false,
      tag: "PROJECT 6"
    },
    {
      title: "E Commerce Website For Girls",
      desc: `A user-friendly and visually appealing platform for girls to shop for products matching their lifestyle. Built with React, TypeScript, and Tailwind CSS.`,
      image: "GirlsWeb.png",
      techs: [<SiReact />, <img src="https://cdn.simpleicons.org/tailwindcss" className="h-6 w-6" />, <img src="https://cdn.simpleicons.org/typescript" className="h-6 w-6" />],
      link: "#",
      reverse: true,
      tag: "PROJECT 7"
    },
    {
      title: "Image Gallery Web App",
      desc: `A visually engaging and responsive Image Gallery Web App built to deliver an immersive browsing experience. Developed using React and Tailwind CSS.`,
      image: "/Image Gallary.png",
      techs: [<SiReact />, <img src="https://cdn.simpleicons.org/tailwindcss" className="h-6 w-6" />, <img src="https://cdn.simpleicons.org/typescript" className="h-6 w-6" />],
      link: "https://github.com/Emnet19/ImageGallary",
      reverse: false,
      tag: "PROJECT 8"
    },
  ];

  // ✅ Only show first 3 projects if "showAll" is false
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section className="bg-[#0b1120] text-white px-6 py-20">
      <h1 className="font-bold text-5xl text-center mb-20">PROJECTS</h1>

      {visibleProjects.map(({ title, desc, image, techs, link, reverse, tag }, index) => (
        <div
          key={index}
          className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-between gap-10 max-w-7xl mx-auto mb-24`}
        >
          <div className="relative flex-1 w-full max-w-md sm:max-w-xl md:max-w-2xl">
            <img src={image} alt={title} className="relative z-10 rounded-lg shadow-2xl w-full object-cover hover:shadow-2xl transition-shadow duration-300" />
          </div>

          <div className="flex-1">
            <h2 className="text-cyan-400 text-lg tracking-wide mb-2">{tag}</h2>
            <h1 className="text-3xl font-bold mb-4">{title}</h1>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">{desc}</p>

            <div className="flex flex-wrap gap-4 items-center">
              {techs.map((tech, i) => (
                <div key={i} className="h-10 w-10 rounded-full bg-black border border-gray-700 flex items-center justify-center">
                  {tech}
                </div>
              ))}
              <a href={link} target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-800 gap-10 font-medium text-sm">
                Check Live Site
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* ✅ Show More / Show Less Button */}
      <div className="text-center mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full font-semibold transition duration-300"
        >
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </section>
  );
}

export default Projects;

