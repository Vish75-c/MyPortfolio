import React from "react";
import { projects } from "../../data";
import Tilt from "react-parallax-tilt";
import { useState } from "react";
const Work = () => {
  const [selected,setSelected]=useState(null);
  const handleOpenModel=(project)=>{
    setSelected(project);
  }
  const handleCloseModel=(project)=>{
    setSelected(null);
  }
  return (
    <section
      id="work"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide">
          PROJECTS
        </h2>
        <div className="w-28 h-1 bg-[#8245ec] mx-auto mt-3 rounded-full" />
        <p className="text-gray-400 mt-5 text-base sm:text-lg max-w-2xl mx-auto">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Tilt
            key={project.id}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
            className="h-full"
          >
            <div
            onClick={()=>handleOpenModel(project)}
              className="h-full flex flex-col
                rounded-2xl
                bg-gray-900/80 backdrop-blur-xl
                border border-white/10
                shadow-[0_0_25px_rgba(130,69,236,0.25)]
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-[0_0_45px_rgba(130,69,236,0.45)]
                overflow-hidden"
            >
              {/* Image */}
              <div className="p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col grow px-6 pb-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-xs font-semibold
                        bg-black/30
                        border border-gray-700
                        text-[#8245ec]
                        transition-all duration-300
                        hover:border-[#8245ec]
                        hover:shadow-[0_0_12px_rgba(130,69,236,0.6)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
      {selected && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
    <div
      className="relative
      w-full max-w-xl
      rounded-2xl
      bg-gray-900/90 backdrop-blur-xl
      border border-white/10
      shadow-[0_0_35px_rgba(130,69,236,0.45)]
      overflow-hidden"
    >
      {/* Close Button */}
      <button
        onClick={handleCloseModel}
        className="absolute top-3 right-4 text-white text-2xl font-bold
        hover:text-[#8245ec] transition"
      >
        &times;
      </button>

      {/* Image */}
      <div className="p-4 bg-black/30 flex justify-center">
        <img
          src={selected.image}
          alt={selected.title}
          className="w-full max-h-[200px]
          object-cover rounded-xl
          shadow-[0_0_20px_rgba(130,69,236,0.4)]"
        />
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-white mb-3">
          {selected.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {selected.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-5">
          {selected.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full text-xs font-semibold
              bg-black/30 border border-gray-700
              text-[#8245ec]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <a
            href={selected.github}
            target="_blank"
            className="px-5 py-2 rounded-full text-sm font-semibold
            border border-[#8245ec]
            text-white
            hover:bg-[#8245ec]
            hover:shadow-[0_0_15px_rgba(130,69,236,0.7)]
            transition"
          >
            Code
          </a>

          <a
            href={selected.webapp}
            target="_blank"
            className="px-5 py-2 rounded-full text-sm font-semibold
            bg-[#8245ec]
            text-white
            hover:shadow-[0_0_20px_rgba(130,69,236,0.8)]
            transition"
          >
            Live
          </a>
        </div>
      </div>
    </div>
  </div>
)}

    </section>
  );
};

export default Work;
