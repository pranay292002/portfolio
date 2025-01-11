import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import GlowingHeading from "../glowingHeading";
import Skill from "../skill/Skill";
import Css from "@/assets/logos/css.svg";
import Html from "@/assets/logos/html.svg";
import Java from "@/assets/logos/java.svg";
import Javascript from "@/assets/logos/javascript.svg";
import Nodejs from "@/assets/logos/nodejs.svg";
import Nextjs from "@/assets/logos/nextjs.svg";
import Reactjs from "@/assets/logos/reactjs.svg";
import Typescript from "@/assets/logos/typescript.svg";
import Mongodb from "@/assets/logos/mongodb.svg";
import Mysql from "@/assets/logos/mysql.svg";


const Skills = () => {
  const frontendData = [
    { title: "HTML", avatar: Html },
    { title: "CSS", avatar: Css },
    { title: "Javascript", avatar: Javascript },
    { title: "ReactJS", avatar: Reactjs },
    { title: "NextJS", avatar: Nextjs },
    { title: "Typescript", avatar: Typescript },
  ];

  const backendData = [
    { title: "Java", avatar: Java },
    { title: "NodeJS", avatar: Nodejs },
    { title: "Javascript", avatar: Javascript },
    { title: "Typescript", avatar: Typescript },
  ];

  const databaseData = [
    { title: "MongoDB", avatar: Mongodb },
    { title: "Mysql", avatar: Mysql },
  ];

  const [activeTab, setActiveTab] = useState("frontend");
  const [skillData, setSkillData] = useState(frontendData);

  const skillsRef = useRef(null);
  const isInView = useInView(skillsRef, { once: false, margin: "-100px" });
  const controls = useAnimation();

  const randomPositions = useMemo(
    () =>
      Array.from({ length: skillData.length }).map(() => ({
        x: Math.random() * 200 - 100,
        y: Math.random() * 200 - 100,
      })),
    [skillData]
  );

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      x: randomPositions[index]?.x || 0,
      y: randomPositions[index]?.y || 0,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };


  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls, skillData]);


  useEffect(() => {
    controls.start("hidden"); 
    setTimeout(() => controls.start("visible"), 200); 
  }, [activeTab, controls]);

  return (
    <div
      ref={skillsRef}
      id="skills"
      className="flex flex-col items-center overflow-hidden py-2"
    >
      <GlowingHeading title="skills" />

   
      <div className="relative flex justify-center text-[#ffaa40] bg-[#7667D7] gap-5 rounded-2xl overflow-hidden w-fit p-3">
       
        <motion.div
          className="absolute top-2 left-0 h-full bg-[#2E073F] rounded-xl"
          style={{ width: 90, height: 45 }} // Adjust the width to match tab size
          initial={{ x: 0 }}
          animate={{
            x:
              activeTab === "frontend"
                ? 7
                : activeTab === "backend"
                ? 105
                : 205, 
          }}
          transition={{ type: "spring", stiffness: 80, damping: 12 }}
        />

    
        <div
          onClick={() => {
            setActiveTab("frontend");
            setSkillData(frontendData);
          }}
          className={`relative z-10 p-2 rounded-xl cursor-pointer ${
            activeTab === "frontend" && "text-white"
          }`}
        >
          Frontend
        </div>
        <div
          onClick={() => {
            setActiveTab("backend");
            setSkillData(backendData);
          }}
          className={`relative z-10 p-2 rounded-xl cursor-pointer ${
            activeTab === "backend" && "text-white"
          }`}
        >
          Backend
        </div>
        <div
          onClick={() => {
            setActiveTab("database");
            setSkillData(databaseData);
          }}
          className={`relative z-10 p-2 rounded-xl cursor-pointer ${
            activeTab === "database" && "text-white"
          }`}
        >
          Database
        </div>
      </div>

   
      <motion.div
        key={skillData.length}
        className="grid grid-cols-2 gap-5 mt-8 max-w-4xl px-4 py-2 sm:grid-cols-3 md:grid-cols-4 overflow-hidden"
        style={{ minHeight: "320px" }}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {skillData.map((item, index) => (
          <motion.div key={item.title} variants={itemVariants} custom={index}>
            <Skill title={item.title} icon={item.avatar} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
