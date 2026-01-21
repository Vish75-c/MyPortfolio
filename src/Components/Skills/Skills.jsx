import React from "react";
import Tilt from "react-parallax-tilt";
import { SkillsInfo } from "../../data";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans skills-color clip-wave"
    >
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide">
          SKILLS
        </h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3 rounded-full" />
        <p className="text-gray-400 mt-5 text-base sm:text-lg max-w-xl mx-auto">
          A collection of my technical skills and expertise
        </p>
      </div>

      {/* Skills Cards */}
      <div className="flex flex-wrap gap-8">
        {SkillsInfo.map((category) => (
          <Tilt
            key={category.title}
            className="w-full sm:w-[48%] flex"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1200}
            scale={1.04}
            transitionSpeed={800}
            gyroscope={true}
            tiltReverse={true}
          >
            <div
              className="relative w-full h-full flex flex-col rounded-2xl
                bg-gray-900/80 backdrop-blur-xl border border-white/10
                px-6 sm:px-10 py-8
                shadow-[0_0_25px_rgba(130,69,236,0.25)]
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-[0_0_45px_rgba(130,69,236,0.45)]"
            >
              {/* Card Title */}
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-6 text-center">
                {category.title}
              </h3>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 grow">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-center gap-2
                      px-3 py-2 rounded-full
                      border border-gray-700
                      bg-black/30
                      text-gray-300 text-xs sm:text-sm
                      transition-all duration-300
                      hover:border-[#8245ec]
                      hover:text-white
                      hover:shadow-[0_0_15px_rgba(130,69,236,0.6)]"
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Skills;
