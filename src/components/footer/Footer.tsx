import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }} 
      transition={{ duration: 0.5 }}
      className="bg-[#2E073F] text-white py-8 mt-16"
    >
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm sm:text-base mb-4">© 2025 Pranay Parbate. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mb-4">
          {/* Social Icons */}
          <a href="https://github.com/pranay292002" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-purple-300">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/pranay-parbate" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-purple-300">
            LinkedIn
          </a>
          <a href="mailto:pranayparbate2002@gmail.com" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-purple-300">
            Email
          </a>
        </div>
        <p className="text-xs sm:text-sm text-gray-400">Made with ❤️ using React, Next.js, and Tailwind CSS</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
