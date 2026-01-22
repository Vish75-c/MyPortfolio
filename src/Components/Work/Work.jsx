import React, { useState } from "react";
import { projects } from "../../data";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion"; // Added AnimatePresence for the modal

const Work = () => {
  const [selected, setSelected] = useState(null);

  const handleOpenModel = (project) => setSelected(project);
  const handleCloseModel = () => setSelected(null);

  return (
    <section
      id="work"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative overflow-hidden"
    >
      {/* Heading Animation */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide">
          PROJECTS
        </h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "7rem" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1 bg-[#8245ec] mx-auto mt-3 rounded-full" 
        />
        <p className="text-gray-400 mt-5 text-base sm:text-lg max-w-2xl mx-auto">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies.
        </p>
      </motion.div>

      {/* Project Grid with Staggered Children */}
      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
          }
        }}
        className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={{
              hidden: { opacity: 0, scale: 0.9, y: 20 },
              show: { opacity: 1, scale: 1, y: 0 }
            }}
          >
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.03}
              transitionSpeed={1500}
              className="h-full"
            >
              <div
                onClick={() => handleOpenModel(project)}
                className="group h-full flex flex-col cursor-pointer
                  rounded-2xl bg-gray-900/80 backdrop-blur-xl
                  border border-white/10 shadow-[0_0_25px_rgba(130,69,236,0.15)]
                  transition-all duration-500 overflow-hidden
                  hover:border-[#8245ec]/50 hover:shadow-[0_0_40px_rgba(130,69,236,0.3)]"
              >
                {/* Image Container with Zoom Effect */}
                <div className="p-4 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="flex flex-col grow px-6 pb-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#8245ec] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider
                          bg-black/40 border border-gray-800 text-[#8245ec]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal with AnimatePresence */}
      <AnimatePresence>
        {selected && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md px-4"
            onClick={handleCloseModel} // Close on backdrop click
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking modal content
              className="relative w-full max-w-xl rounded-3xl bg-gray-900 border border-white/10
                shadow-[0_0_50px_rgba(130,69,236,0.5)] overflow-hidden"
            >
              <button
                onClick={handleCloseModel}
                className="absolute top-4 right-5 text-gray-400 hover:text-white text-3xl z-10 transition"
              >
                &times;
              </button>

              <div className="p-5 bg-black/40">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full max-h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>

              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">{selected.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{selected.description}</p>
                
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {selected.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 rounded-full text-xs font-semibold bg-black/50 border border-gray-700 text-[#8245ec]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center gap-6">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={selected.github}
                    target="_blank"
                    className="px-8 py-2.5 rounded-full text-sm font-bold border border-[#8245ec] text-white hover:bg-[#8245ec]/10 transition"
                  >
                    Source Code
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={selected.webapp}
                    target="_blank"
                    className="px-8 py-2.5 rounded-full text-sm font-bold bg-[#8245ec] text-white shadow-lg shadow-[#8245ec]/20"
                  >
                    View Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;