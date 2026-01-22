import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { education } from "../../data";

const Educations = () => {
  // Line drawing animation logic
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section
      id="education"
      className="py-24 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans skills-color clip-wave-2 overflow-hidden"
    >
      {/* Section Title */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl font-bold text-white tracking-tight">EDUCATION</h2>
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          My education has been a journey of learning and development. 
          Here are the details of my academic background.
        </p>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "8rem" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1 bg-[#8245ec] mx-auto mt-4 rounded-full" 
        />
      </motion.div>

      {/* Timeline Wrapper */}
      <div className="relative max-w-6xl mx-auto">
        
        {/* Animated Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-white/10 -translate-x-1/2 hidden sm:block" />
        <motion.div 
          style={{ scaleY }}
          className="absolute left-1/2 top-0 h-full w-.5 bg-[#8245ec] origin-top -translate-x-1/2 hidden sm:block shadow-[0_0_15px_#8245ec]"
        />

        {/* Timeline Items */}
        <div className="flex flex-col gap-12 sm:gap-20">
          {education.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={item.id}
                className={`relative flex items-center justify-between w-full ${
                  isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Desktop Center Dot */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="absolute hidden sm:flex left-1/2 -translate-x-1/2 z-20 bg-gray-900 border-4 border-[#8245ec] w-12 h-12 rounded-full items-center justify-center shadow-[0_0_15px_rgba(130,69,236,0.5)]"
                >
                   <img
                    src={item.img}
                    alt=""
                    className="w-full h-full rounded-full object-cover p-1"
                  />
                </motion.div>

                {/* Card Container */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                  className="w-full sm:w-[42%]"
                >
                  <div
                    className="group relative bg-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 
                    shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:border-[#8245ec]/50 transition-all duration-500"
                  >
                    {/* Inner Content */}
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl overflow-hidden bg-white/10 p-1 shrink-0">
                          <img
                            src={item.img}
                            alt={item.school}
                            className="w-full h-full object-contain rounded-lg"
                          />
                        </div>
                        <div className="overflow-hidden">
                          <h3 className="text-white font-bold text-lg leading-tight truncate">
                            {item.school}
                          </h3>
                          <p className="text-[#8245ec] text-sm font-medium">{item.degree}</p>
                          <p className="text-gray-500 text-xs mt-1">{item.date}</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="inline-block px-3 py-1 rounded-md bg-[#8245ec]/10 border border-[#8245ec]/20">
                           <p className="text-[#8245ec] text-xs font-bold">Grade: {item.grade}</p>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-[#8245ec]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </div>
                </motion.div>

                {/* Spacer for Desktop Grid layout */}
                <div className="hidden sm:block w-[42%]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Educations;