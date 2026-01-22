import React, { useEffect, useState } from "react";
import { FiMenu, FiX, FiGithub, FiLinkedin } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItem = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    {id:'contact',label:'Contact'}
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = menuItem.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    setIsOpen(false);
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-500
      px-[7vw] lg:px-[15vw]
      ${isScrolled 
        ? "py-3 bg-[#050414]/70 backdrop-blur-xl border-b border-white/5" 
        : "py-6 bg-transparent"}`}
    >
      <div className="flex items-center justify-between">
        
        {/* PREMIUM LOGO: Geometric Hexagon Abstract */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="relative w-11 h-11 flex items-center justify-center">
            {/* Spinning background glow */}
            <div className="absolute inset-0 bg-[#8245ec]/20 rounded-xl blur-md group-hover:bg-[#8245ec]/40 transition-all duration-500" />
            
            {/* The SVG Icon */}
            <svg 
              width="40" height="40" viewBox="0 0 100 100" fill="none" 
              className="relative z-10 transition-transform duration-700 group-hover:rotate-360"
            >
              <path 
                d="M50 5L89 27.5V72.5L50 95L11 72.5V27.5L50 5Z" 
                stroke="#8245ec" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"
              />
              <path 
                d="M50 25V75M30 40L50 25L70 40M30 60L50 75L70 60" 
                stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-white text-lg font-black tracking-tighter leading-none">VISHAL</span>
            <span className="text-[#8245ec] text-[10px] font-bold tracking-[0.3em] leading-none mt-1">GOLA</span>
          </div>
        </motion.div>

        {/* Desktop Menu - Modern Minimalist */}
        <div className="hidden md:flex items-center bg-white/5 border border-white/5 px-6 py-2 rounded-full backdrop-blur-md">
          <ul className="flex items-center space-x-8">
            {menuItem.map((item) => (
              <li key={item.id} className="relative">
                <button
                  onClick={() => handleClick(item.id)}
                  className={`text-[13px] font-bold uppercase tracking-widest transition-all duration-300 ${
                    activeSection === item.id ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-4.5 left-0 right-0 h-.75 bg-[#8245ec] rounded-full shadow-[0_0_10px_#8245ec]"
                  />
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Social Icons - Premium Pill Style */}
        <div className="hidden md:flex items-center space-x-3">
          {[
            { icon: <FiGithub size={18} />, url: "https://github.com/vish_75" },
            { icon: <FiLinkedin size={18} />, url: "https://linkedin.com" }
          ].map((social, idx) => (
            <motion.a
              key={idx}
              whileHover={{ y: -3, backgroundColor: "rgba(130, 69, 236, 0.2)", borderColor: "rgba(130, 69, 236, 0.5)" }}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-300 transition-all duration-300"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Mobile Toggle with Pulse */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#8245ec]/10 text-[#8245ec] border border-[#8245ec]/20"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="md:hidden overflow-hidden bg-[#050414]/95 backdrop-blur-2xl rounded-3xl mt-4 border border-white/10 shadow-2xl"
          >
            <ul className="flex flex-col p-3">
              {menuItem.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleClick(item.id)}
                    className={`w-full text-left py-4 px-6 rounded-2xl transition-all ${
                      activeSection === item.id 
                      ? "bg-[#8245ec] text-white font-bold" 
                      : "text-gray-400 hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;