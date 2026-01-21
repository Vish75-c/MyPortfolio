import React, { useEffect, useState } from "react";
import { FiMenu, FiX, FiGithub, FiLinkedin } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItem = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
   
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  // Detect scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler
  const handleClick = (id) => {
    setActiveSection(id);
    setIsOpen(false);

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300
      px-[7vw] md:px-[7vw] lg:px-[20vw]
      ${
        isScrolled
          ? "bg-[#050414]/70 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between py-5">

        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
  <div
    className="w-10 h-10 rounded-full
    bg-linear-to-br from-[#8245ec] to-purple-600
    flex items-center justify-center shadow-lg"
  >
    <span className="text-white font-bold">V</span>
  </div>
  <span className="text-white text-lg font-semibold">
    Vishal
  </span>
</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItem.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer transition-all duration-300
              ${
                activeSection === item.id
                  ? "text-[#8245ec] scale-105"
                  : "hover:text-[#8245ec] hover:scale-105"
              }`}
            >
              <button onClick={() => handleClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/vish_75"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FiGithub size={22} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FiLinkedin size={22} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-gray-300 text-3xl cursor-pointer">
          {isOpen ? (
            <FiX onClick={toggleOpen} />
          ) : (
            <FiMenu onClick={toggleOpen} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul
          className="md:hidden absolute top-full left-1/2 -translate-x-1/2
          w-4/5 mt-3 text-center flex flex-col
          bg-gray-900/90 backdrop-blur-lg
          shadow-lg rounded-lg text-gray-300"
        >
          {menuItem.map((item) => (
            <li
              key={item.id}
              className={`py-3 cursor-pointer transition-all duration-300
              ${
                activeSection === item.id
                  ? "text-[#8245ec]"
                  : "hover:text-[#8245ec]"
              }`}
            >
              <button onClick={() => handleClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
