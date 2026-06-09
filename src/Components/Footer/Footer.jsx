import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiArrowUp, FiCode } from "react-icons/fi";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socials = [
    {
      icon: <FiGithub />,
      link: "https://github.com/Vish75-c",
      color: "#f0f6fc",
      shadow: "rgba(240, 246, 252, 0.3)",
    },
    {
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/vishal-gola-240a24348/",
      color: "#0077b5",
      shadow: "rgba(0, 119, 181, 0.3)",
    },
    {
      icon: <SiLeetcode />,
      link: "https://leetcode.com/u/Vish_75/",
      color: "#ffa116",
      shadow: "rgba(255, 161, 22, 0.3)",
    },
    {
      icon: <SiGeeksforgeeks />,
      link: "https://www.geeksforgeeks.org/profile/vish75",
      color: "#2f8d46",
      shadow: "rgba(47, 141, 70, 0.3)",
    },
  ];

  return (
    <footer className="relative mt-40 overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-[#8245ec]/50 to-transparent" />
      <div className="absolute bottom-[-10%] left-[-10%] w-80 h-80 bg-purple-600/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute top-[-10%] right-[-10%] w-80 h-80 bg-blue-600/5 blur-[120px] rounded-full -z-10" />

      <div className="relative bg-[#050414]/90 backdrop-blur-2xl">
        <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col items-center">
          
          {/* Back to Top / Name */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center mb-10 group cursor-pointer"
            onClick={scrollToTop}
          >
            <motion.div 
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-[#8245ec] mb-2 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <FiArrowUp size={24} />
            </motion.div>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-[0.2em] uppercase">
              Vishal <span className="text-[#8245ec]">Kumar Gola</span>
            </h2>
          </motion.div>

          {/* Social Icons Grid */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            className="flex space-x-5 md:space-x-8 mb-12"
          >
            {socials.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  y: -8, 
                  scale: 1.1,
                  boxShadow: `0 10px 25px -5px ${item.shadow}`
                }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 text-2xl p-4 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm transition-colors hover:text-white"
                style={{ '--hover-color': item.color }}
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Slogan & Info */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-24 h-1 bg-linear-to-r from-transparent via-[#8245ec] to-transparent rounded-full" />
            
            <p className="text-gray-400 text-sm font-medium tracking-wide">
              Crafted with <span className="text-red-500">❤️</span> & Precision
            </p>

            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-gray-500 text-xs mt-4">
              <p>© {new Date().getFullYear()} Vishal Kumar Gola</p>
              <span className="hidden md:inline-block w-1 h-1 bg-gray-700 rounded-full" />
              <p>Built with React & Tailwind</p>
              <span className="hidden md:inline-block w-1 h-1 bg-gray-700 rounded-full" />
              <p>Open for Opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;