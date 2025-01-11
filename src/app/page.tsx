"use client";
import { useState, useEffect } from "react";
import Contact from "@/components/contact/Contact";
import Education from "@/components/education/Education";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Marquee from "@/components/marquee/Marquee";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Loader from "@/components/loader/Loader"; 

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
        
      ) : (
        <>
        
         <Hero />
          <Skills />
          <Projects />
          <Education />
          <Marquee />
          <Contact />
          <Footer />  
        </>
      )}
    </>
  );
}
