import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion"; // Add this for smooth animations
import { SkillsInfo } from "../../data";

const Skills = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2, // This makes cards appear one after another
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section
      id="skills"
      className="py-24 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans skills-color clip-wave overflow-hidden"
    >
      {/* Heading with Motion */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide">
          SKILLS
        </h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-[#8245ec] mx-auto mt-3 rounded-full" 
        />
        <p className="text-gray-400 mt-5 text-base sm:text-lg max-w-xl mx-auto">
          A collection of my technical skills and expertise
        </p>
      </motion.div>

      {/* Skills Cards Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-wrap gap-8 justify-center"
      >
        {SkillsInfo.map((category, idx) => (
          <motion.div 
            key={category.title} 
            variants={itemVariants}
            className="w-full lg:w-[48%] flex"
          >
            <Tilt
              className="w-full"
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.02}
              transitionSpeed={1500}
              gyroscope={true}
            >
              <div
                className="relative w-full h-full flex flex-col rounded-2xl
                  bg-gray-900/60 backdrop-blur-xl border border-white/10
                  px-6 sm:px-10 py-8
                  shadow-[0_0_20px_rgba(130,69,236,0.15)]
                  hover:border-[#8245ec]/50 transition-colors duration-500
                  group"
              >
                {/* Subtle Gradient Glow behind card on hover */}
                <div className="absolute inset-0 bg-[#8245ec]/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />

                <h3 className="text-2xl sm:text-3xl font-semibold text-gray-200 mb-8 text-center">
                  {category.title}
                </h3>

                <div className="flex flex-wrap justify-center gap-3 grow">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center gap-2
                        px-4 py-2 rounded-xl
                        border border-gray-700/50
                        bg-black/40
                        text-gray-300 text-xs sm:text-sm
                        cursor-default
                        hover:border-[#8245ec]
                        hover:text-white
                        hover:shadow-[0_0_20px_rgba(130,69,236,0.3)]
                        transition-all duration-300"
                    >
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                      />
                      <span className="font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;