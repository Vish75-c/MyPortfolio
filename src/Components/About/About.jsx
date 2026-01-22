import React from "react";
import ReactTypingEffect from "../../ReactTypingEffect";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion"; // Essential for the entrance feel
import profileImage from "../../assets/jin.jpeg";

const roles = ["Fullstack Developer", "Coder", "Problem Solver"];

const About = () => {
  return (
    <section
      id="about"
      className="relative py-16 px-[7vw] lg:px-[20vw] font-sans mt-10 overflow-hidden"
    >
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-600/10 blur-[120px] -z-10" />
      
      <div className="flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* LEFT CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/2 text-center md:text-left space-y-6"
        >
          <div className="space-y-2">
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl sm:text-4xl md:text-5xl font-bold text-white"
            >
              Hi, I am
            </motion.h1>

            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight"
            >
              Vishal <span className="text-[#8245ec]">Gola</span>
            </motion.h2>

            <motion.h3 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-purple-400 min-h-10"
            >
              I am a{" "}
              <span className="border-b-2 border-purple-500 pb-1">
                <ReactTypingEffect
                  texts={roles}
                  speed={100}
                  eraseSpeed={60}
                  typingDelay={500}
                  eraseDelay={1500}
                />
              </span>
            </motion.h3>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed max-w-xl mx-auto md:mx-0"
          >
            I am a computer science student with strong knowledge of advanced
            Data Structures and Algorithms, SQL, and full-stack web development.
            I enjoy solving problems, building scalable applications, and
            continuously learning modern technologies.
          </motion.p>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex justify-center md:justify-start gap-4 pt-6"
          >
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-3.5 font-bold text-white transition-all duration-300 bg-[#8245ec] rounded-full hover:bg-[#935cf0] hover:shadow-[0_0_30px_rgba(130,69,236,0.6)]"
            >
              <span className="relative">DOWNLOAD CV</span>
              {/* Subtle moving shine effect on the button */}
              <div className="absolute inset-0 w-full h-full rounded-full bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT - Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="md:w-1/2 flex justify-center md:justify-end"
        >
          <div className="relative group">
            {/* Animated Halo/Ring Background */}
            <div className="absolute -inset-1 bg-linear-to-r from-[#8245ec] to-blue-500 rounded-full blur opacity-40 group-hover:opacity-100 animate-pulse transition duration-1000"></div>
            
            <Tilt
              className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-85 md:h-85
                border-2 border-white/20 rounded-full overflow-hidden"
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              scale={1.05}
              transitionSpeed={2000}
              gyroscope
            >
              <motion.img
                src={profileImage}
                alt="Vishal Gola"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full rounded-full object-cover shadow-2xl"
                loading="eager" // Hero images should load fast
              />
            </Tilt>
            
            {/* Floating Badge (Optional addition for flair) */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-2 -right-2 bg-gray-900 border border-white/10 p-3 rounded-2xl shadow-2xl hidden md:block"
            >
              <span className="text-2xl">🚀</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;