import React from "react";
import { education } from "../../data";

const Educations = () => {
  return (
    <section
      id="education"
      className="py-24 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans skills-color"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-[#8245ec] mx-auto mt-4 rounded-full" />
      </div>

      {/* Timeline Wrapper */}
      <div className="relative">

        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-[3px] bg-white/30 -translate-x-1/2" />

        {/* Timeline Items */}
        <div className="flex flex-col gap-20">
          {education.map((item, index) => (
            <div
              key={item.id}
              className={`relative flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Dot */}
              <div className="absolute hidden sm:flex left-1/2 -translate-x-1/2 z-20 bg-gray-900 border-4 border-[#8245ec] w-14 h-14 rounded-full  items-center justify-center">
                <img
                  src={item.img}
                  alt={item.school}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>

              {/* Card */}
              <div
                className={`w-full sm:w-[45%] bg-gray-900/90 backdrop-blur-md
                border border-white/10 rounded-2xl p-6 shadow-xl
                transition-transform duration-300 hover:scale-105`}
              >
                <div className="flex flex-col gap-2">
                  {/* Header */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-md overflow-hidden bg-white">
                      <img
                        src={item.img}
                        alt={item.school}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">
                        {item.school}
                      </h3>
                      <p className="text-gray-400 text-sm">{item.degree}</p>
                      <p className="text-gray-500 text-xs">{item.date}</p>
                      <p className="text-gray-500 text-xs">Grade: {item.grade}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mt-4">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Educations;
