import React from "react";
import { motion } from "framer-motion";
import GlowingHeading from "../glowingHeading";


const Education = () => {
  const milestones = [
    {
      year: "2020-2024",
      title: "BE. Computer Engineering",
      institution: "Savitribai Phule Pune University",
      percentage: "74%",
    },
    {
      year: "2019-2020",
      title: "12th Grade",
      institution: "Maharashtra State Board",
      percentage: "64.31%",
    },
    {
      year: "2017-2018",
      title: "10th Grade",
      institution: "Maharashtra State Board",
      percentage: "89.40%",
    },
  ];

  return (
    <div id="education" className="h-[100vh] flex flex-col items-center pull-up mt-7">
      <GlowingHeading title="Education" />

      <div className="relative w-full max-w-2xl mt-8">
      
        <div className="absolute left-1/2 w-0.5 bg-purple-500 h-full transform -translate-x-1/2"></div>
        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }} 
              whileInView={{
                opacity: 1, 
                transition: { duration: 0.5, delay: index * 0.2 },
              }}
              viewport={{ once: false }} 
              className={`relative flex items-center ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
             
              <div
                className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-purple-600 rounded-full hide-dots"
                style={{ top: "50%", transform: "translate(-50%, -50%)" }}
              ></div>
            
              <motion.div
                whileHover={{
                  scale: 1.25,
                  transition: { duration: 0.2 },
                }}
                className={`text-purple-500 p-3 rounded-lg w-52 shadow-lg border border-transparent rounded-xl overflow-hidden from-white/10 to-white/5 bg-[#2E073F] cursor-pointer ${
                  index % 2 === 0
                    ? "ml-6 sm:ml-16 text-left pull-right"
                    : "mr-6 sm:mr-6 lg:mr-8 text-right pull-left"
                }`}
              >
                <h3 className="text-purple-500 text-sm sm:text-md font-semibold">
                  {milestone.title}
                </h3>
                <p className="text-xs sm:text-sm">{milestone.institution}</p>
                {milestone.percentage && (
                  <p className="text-xs sm:text-sm">Percentage: {milestone.percentage}</p>
                )}
                <p className="text-xs text-gray-500">{milestone.year}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
