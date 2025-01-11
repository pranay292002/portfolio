"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import GlowingHeading from "../glowingHeading";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";


const projects = [
  {
    id: 1,
    title: "Sticky Notes",
    description: "Organize tasks efficiently with customizable and responsive notes.",
    image:
      "https://res.cloudinary.com/dun3jnqjp/image/upload/v1736593671/sticky-notes-screenshot_dmcjhs.png",
    github: "https://github.com/pranay292002/sticky-notes",
    demo: "https://sticky-notes-teal.vercel.app/",
  },
  {
    id: 2,
    title: "Hotel Management Dashboard",
    description: "Streamline hotel operations with an intuitive and responsive dashboard.",
    image:
      "https://res.cloudinary.com/dun3jnqjp/image/upload/v1736594026/Screenshot_2024-09-21_155213_ow4roc.png",
    github: "https://github.com/pranay292002/hotel-management-frontend",
    demo: "https://project-two.demo.com",
  },
  {
    id: 3,
    title: "Guess The Word Game",
    description: "Challenge your vocabulary skills with an interactive word game.",
    image:
      "https://res.cloudinary.com/dun3jnqjp/image/upload/v1736594772/Screenshot_2025-01-11_165339_hniizs.png",
    github: "https://github.com/pranay292002/Guess-The-Word",
    demo: "https://guesswheword.w3spaces.com",
  },
  {
    id: 4,
    title: "Transactions Dashboard",
    description: "Track and analyze transactions with a dynamic, data-driven dashboard.",
    image: "https://res.cloudinary.com/dun3jnqjp/image/upload/v1736595066/Screenshot_2025-01-11_170024_pojbdg.png",
    github: "https://github.com/pranay292002/transaction-dashboard-frontend",
    demo: "https://transaction-dashboard-frontend-nu.vercel.app/",
  },
  {
    id: 5,
    title: "DetectWell",
    description: "Monitor health metrics effortlessly with a user-friendly wellness app",
    image:
      "https://res.cloudinary.com/dun3jnqjp/image/upload/v1736595348/WhatsApp_Image_2025-01-11_at_5.03.49_PM_ud25sa.jpg",
    github: "https://github.com/pranay292002/DetectWell",
    demo: "https://project-five.demo.com",
  },
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
  });

  const getVisibleProjects = () => {
    const total = projects.length;

    const leftIndex = (activeIndex - 1 + total) % total;
    const rightIndex = (activeIndex + 1) % total;

    return [projects[leftIndex], projects[activeIndex], projects[rightIndex]];
  };

  return (
    <div
      id="projects"
      className="h-[100vh]  mt-20"
      ref={containerRef}
    >
      <GlowingHeading title="Projects" />
      <div
        className="relative w-full max-w-6xl mx-auto overflow-hidden py-14"
        {...swipeHandlers}
      >
       
        <motion.div
          className="flex items-center justify-center "
          initial={{ opacity: 0, y: 170 , scale: 0.8}}
          animate={isInView ? { opacity: 1, y: 0 , scale: 1} : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {getVisibleProjects().map((project, index) => {
            const isCenter = index === 1;

            return (
              <motion.div
                key={project.id}
                className={`${
                  isCenter ? "z-20" : "z-10 opacity-70"
                } flex-shrink-0 transition-all`}
                initial={{
                  x: 100 * (index - 1),
                  opacity: 0.8,
                  scale: 0.9,
                }}
                animate={{
                  x: isCenter ? 0 : 100 * (index - 1), 
                  opacity: 1,
                  scale: isCenter ? 1 : 0.9,
                }}
                transition={{
                  duration: 0.3, 
                  ease: "easeInOut", 
                }}
                style={{ willChange: "transform" }} 
              >
             
                <div className="relative w-[300px] mb-5 shadow-lg border border-transparent rounded-xl overflow-hidden from-white/10 to-white/5 bg-[#2E073F]">
                 
                  <div className="relative p-4 z-10">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 object-cover rounded-lg shadow-md"
                      width={500}
                      height={40}
                      loading="lazy"
        priority={false} 
                    />
                    <h3 className="mt-4 text-white font-semibold text-lg text-center">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-300 mt-2 text-center">
                      {project.description}
                    </p>
                    <div className="flex mt-4 justify-center space-x-36">
                      <button
                        className="relative inline-flex w-[57px] items-center justify-center p-0.5 overflow-hidden text-xs font-medium text-[#ffaa40] rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative py-1 px-2 transition-all ease-in duration-75 bg-[#111827] rounded-md group-hover:bg-opacity-0"
                        >
                          GitHub
                        </a>
                      </button>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#111827] text-white text-xs px-3 py-1.5 rounded-lg w-[57px] hover:outline hover:text-[#111827] outline-2 bg-gradient-to-br from-purple-500 to-pink-500"
                      >
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/70 hover:bg-gray-700 text-white w-10 h-10 flex items-center justify-center rounded-full z-30"
          onClick={handlePrev}
        >
          ◀
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/70 hover:bg-gray-700 text-white w-10 h-10 flex items-center justify-center rounded-full z-30"
          onClick={handleNext}
        >
          ▶
        </button>

       
        <div className="flex justify-center mt-10 space-x-4">
          {projects.map((_, index) => (
            <motion.div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === activeIndex
                  ? "bg-purple-500 border-2 border-purple-300 scale-125"
                  : "bg-gray-400 border border-gray-600"
              } cursor-pointer`}
              whileHover={{ scale: 1.3 }}
              transition={{ type: "spring", stiffness: 150, damping: 10 }}
            ></motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
