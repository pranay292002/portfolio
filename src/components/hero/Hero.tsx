
import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import avatar from "@/assets/header-img.svg";
import Image from "next/image";


const Hero = () => {
  return (
    <>
      <div
        id="home"
        className="h-[95vh] flex flex-wrap-reverse justify-around items-center mx-5 "
      >
        <div className="flex flex-col font-[family-name:var(--font-geist-mono)] text-lg ">
          <div id="wrapper" className="flex max-mobile:justify-center text-[#7667D7] h-fit overflow-y-hidden">
            <motion.h2
              initial={{ y: 100, overflowY: "hidden" }}
              animate={{ y: 0 }}
              transition={{
                duration: 2,
              }}
              id="greet"
            >
              Hello There <span>&#128075;</span>,
            </motion.h2>
          </div>

          <div id="wrapper" className="flex text-nowrap max-mobile:justify-center text-[#7667D7] mobile:text-2xl font-bold h-fit overflow-y-hidden">
            <motion.h2
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{
                duration: 2,
              }}
              id="intro"
            >
              My Name is{" "}
              <span className="text-[#ffaa40]" id="name">
                Pranay Parbate
              </span>
            </motion.h2>
          </div>

          <div>
            <motion.h4
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 2.5,
                delay: 1,
              }}
              id="subheading"
              className="text-[#B053EC] mb-3 max-mobile:text-center"
            >
              I am a{" "}
              <span className="text-white  max-mobile:flex max-mobile:justify-center" id="typewriter">
                {" "}
                <Typewriter
                  words={[
                    "Computer Engineer",
                    "Web Developer",
                    "Software Engineer",
                    "App Developer",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={60}
                  deleteSpeed={20}
                  delaySpeed={1950}
                />
              </span>
            </motion.h4>
          </div>

          <div className="flex space-x-5 mb-6 flex max-mobile:justify-center">
            <motion.button
              animate={{ x: [-100, 0], opacity: [0.5, 1] }}
              transition={{ duration: 1 }}
              className="relative inline-flex w-[100px] items-center justify-center p-0.5  overflow-hidden text-xs font-medium text-[#ffaa40] rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 "
              onClick={() =>
                (document.location =
                  "https://drive.google.com/file/d/1FkJnfjSK8H9xpbLe0KGrkm1UohWBQfCT/view?usp=drive_link")
              }
            >
              <span className="relative py-1 px-2 transition-all ease-in duration-75 bg-[#111827] rounded-md group-hover:bg-opacity-0">
                Download CV
              </span>
            </motion.button>
            <motion.button
              animate={{ x: [100, 0], opacity: [0.5, 1] }}
              transition={{ duration: 1 }}
              className="bg-[#111827] text-white text-xs px-3 py-1.5 rounded-lg w-[100px] hover:outline  hover:text-[#111827]  outline-2 bg-gradient-to-br from-purple-500 to-pink-500"
            >
              <a href="#contact">Hire Me</a>
              
            </motion.button>
          </div>

          <motion.div
            animate={{ scale: [0.5, 1], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className="flex space-x-10 text-2xl text-[#7667D7] flex max-mobile:justify-center"
          >
            <a
              className="hover:text-[#ffaa40] hover:scale-150 transition ease-in-out duration-500"
              href="https://www.instagram.com/pranay_2903"
              target="_blank"
            >
              <FaInstagram />
            </a>
            <a
              className="hover:text-[#ffaa40] hover:scale-150 transition ease-in-out duration-500"
              href="https://www.github.com/pranay292002"
              target="_blank"
            >
              <FaGithub />
            </a>
            <a
              className="hover:text-[#ffaa40] hover:scale-150 transition ease-in-out duration-500"
              href="https://www.linkedin.com/in/pranay-parbate"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a
              className="hover:text-[#ffaa40] hover:scale-150 transition ease-in-out duration-500"
              href="mailto:pranayparbate2002@gmail.com"
              target="_blank"
            >
              <MdEmail />
            </a>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 26, -26, 26, -26, -0.5] }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="section2"
        >
          <Image src={avatar} width={250} height={400} alt="Avatar" loading="lazy"
        priority={false} />
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
