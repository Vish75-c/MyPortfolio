import React, { use, useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FiGithub, FiLinkedin } from "react-icons/fi";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const menuItem = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "project", label: "Project" },
    { id: "education", label: "Education" },
  ];
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  const handleClick = (id) => {
    setActiveSection(id);
    setIsOpen(!isOpen);
  };
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${isScrolled ? "bg-[#050414 bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"}`}
    >
      <div className="flex flex-col md:flex-row items-center justify-between py-5 mx-auto">
        <div className="font-semibold flex justify-between w-full md:w-0 items-center text-xl cursor-pointer text-white">
          <div>
            <span>&lt;</span>
            <span>Vishal</span>/<span>&gt;</span>
          </div>
          <div className="md:hidden text-gray-300 text-3xl hover-text-[#8245ec]">
            {isOpen ? (
              <FiMenu onClick={() => toggleOpen()} />
            ) : (
              <FiX onClick={() => toggleOpen()} />
            )}
          </div>
        </div>
        {/* For Desktop navigation */}
        <ul className=" hidden md:flex space-x-8 text-gray-300">
          {menuItem.map((item) => (
            <li
              key={item.id}
              className={`hover:text-blue-500 hover:scale-105 transition-all duration-300 ${activeSection === item.id ? "text-blue-500 scale-105" : "text-gray-300"}`}
            >
              <button onClick={() => handleClick(item.id)}>{item.label}</button>
            </li>
          ))}
        </ul>
        {/* For Mobile Navigation */}
        {!isOpen && (
          <ul
            className="
      md:hidden
      absolute top-16 left-1/2 -translate-x-1/2
      w-4/5 text-center flex flex-col
      s
      backdrop-blur-lg
      z-50 shadow-lg rounded-lg
      text-gray-300
    
    "
          >
            {menuItem.map((item) => (
              <li
                key={item.id}
                className={`hover:text-blue-500 py-2 hover:scale-105 transition-all duration-300 ${activeSection === item.id ? "text-blue-500 scale-105" : "text-gray-300"}`}
              >
                <button onClick={() => handleClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* Social Media Icons */}
        <div className="hidden  md:flex space-x-4">
          <a
            href="https://github.com/vish_75"
            target="_black"
            rel="nooopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]  "
          >
            <FiGithub size={24} />
          </a>
          <a
            href="https://github.com/vish_75"
            target="_black"
            rel="nooopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]  "
          >
            <FiLinkedin size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
