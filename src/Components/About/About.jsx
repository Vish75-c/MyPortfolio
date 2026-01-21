import React from "react";
import ReactTypingEffect from "../../ReactTypingEffect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile2.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-10"
    >
      <div className="flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
            Hi, I am
          </h1>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Vishal Gola
          </h1>

          {/* Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4">
            I am a{" "}
            <ReactTypingEffect texts={["Fullstack Developer", "Coder"]} />
          </h3>

          {/* About paragraph */}
          <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed max-w-xl mb-10 mx-auto md:mx-0">
            I am a computer science student with strong knowledge of advanced
            Data Structures and Algorithms, SQL, and full-stack web development.
            I enjoy solving problems, building scalable applications, and
            continuously learning modern technologies.
          </p>

          {/* Resume Button */}
          <a
            href=""
            target="_blank"
            className="inline-block text-white py-3 px-8 rounded-full text-base sm:text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg,#8245ec,#8245dc)",
              boxShadow: "0 0 10px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-44 h-44 sm:w-56 sm:h-56 md:w-80 md:h-80 lg:w-104 lg:h-104
              border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Vishal Logo"
              className="w-full h-full rounded-full object-cover
                drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
