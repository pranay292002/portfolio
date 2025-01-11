"use client";

import React, { useState, useEffect, useRef } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";

const Navbar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setToggleMenu(false);
      }
    };

    if (toggleMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleMenu]);

  return (
    <>
      <nav
        className="flex fixed top-0 w-full text-sm font-[family-name:var(--font-geist-mono)] justify-between items-center px-3 py-1.5 bg-[#2E073F]"
        ref={navRef}
      >
        <div>
          <AnimatedGradientText className="bg-transparent">
            <span
              className={cn(
                `animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent `
              )}
            >
              {`<Pranay/>`}
            </span>
          </AnimatedGradientText>
        </div>

        <ul
          className={`${toggleMenu && "max-tablet:left-[50%]"} transition-all ease-in-out duration-500 flex gap-8 text-[#ffaa40] max-tablet:flex-col max-tablet:absolute max-tablet:top-8 max-tablet:left-[110%] max-tablet:bg-[#2E073F] max-tablet:w-[50vw] max-tablet:p-5 max-tablet:h-[100vh] `}
        >
          <li onClick={() => {setActiveTab("home"); setToggleMenu(false)}}>
            <a
              className={`${
                activeTab === "home" && "text-white "
              } hover:bg-[#07011e] hover:text-white rounded-xl p-2`}
              href="#home"
            >
              Home
            </a>
          </li>
          <li onClick={() => {setActiveTab("skills"); setToggleMenu(false)}}>
            <a
              className={`${
                activeTab === "skills" && "text-white "
              } hover:bg-[#07011e] hover:text-white  rounded-xl p-2`}
              href="#skills"
            >
              Skills
            </a>
          </li>
          <li onClick={() => {setActiveTab("projects"); setToggleMenu(false)}}>
            <a
              className={`${
                activeTab === "projects" && "text-white "
              } hover:bg-[#07011e] hover:text-white  rounded-xl p-2`}
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li onClick={() => {setActiveTab("education"); setToggleMenu(false)}}>
            <a
              className={`${
                activeTab === "education" && "text-white "
              } hover:bg-[#07011e] hover:text-white  rounded-xl p-2`}
              href="#education"
            >
              Education
            </a>
          </li>
          
          <li onClick={() => {setActiveTab("contact"); setToggleMenu(false)}}>
            <a
              className={`${
                activeTab === "contact" && "text-white "
              } hover:bg-[#07011e] hover:text-white  rounded-xl p-2`}
              href="#contact"
            >
              Contact
            </a>
          </li>
          <li>
            <button
              className="hidden max-tablet:inline-block relative inline-flex items-center justify-center p-0.5 py-[5px] overflow-hidden text-xs font-medium text-[#ffaa40] rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 "
              onClick={() =>
                (document.location =
                  "https://drive.google.com/file/d/1FkJnfjSK8H9xpbLe0KGrkm1UohWBQfCT/view?usp=sharing")
              }
            >
              <span className="relative py-1 px-2 transition-all ease-in duration-75 bg-[#111827] rounded-md group-hover:bg-opacity-0">
                Download CV
              </span>
            </button>
          </li>
        </ul>
        <div className="tablet:hidden text-[#ffaa40]">
          <span
            className={`${
              toggleMenu ? "hidden" : "visible"
            } cursor-pointer`}
            onClick={() => setToggleMenu(true)}
          >
            <CgMenuRightAlt size={30} />
          </span>
          <span
            className={`${
              toggleMenu ? "visible" : "hidden"
            } cursor-pointer`}
            onClick={() => setToggleMenu(false)}
          >
            <IoClose size={30} />
          </span>
        </div>

        <button
          className="max-tablet:hidden relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-medium text-[#ffaa40] rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 text-nowrap"
          onClick={() =>
            (document.location =
              "https://drive.google.com/file/d/1am1nM6MQvhUvq9YXamP7Uav7CQbly4xs/view?usp=sharing")
          }
        >
          <span className="relative py-1 px-2 transition-all ease-in duration-75 bg-[#111827] rounded-md group-hover:bg-opacity-0 text-nowrap">
            Download CV
          </span>
        </button>
      </nav>
    </>
  );
};

export default Navbar;
