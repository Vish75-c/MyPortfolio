import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Experience from "./Components/Experience/Experience";
import Work from "./Components/Work/Work";
import Skills from "./Components/Skills/Skills";
import About from "./Components/About/About";
import Educations from "./Components/Education/Educations";
import Contact from "./Components/Contact/Contact";

const App = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#050414]">

      {/* Ellipse Glow */}
      <div className="pointer-events-none absolute top-[-200px] left-1/2 h-[500px] w-[800px]
        -translate-x-1/2 rounded-full
        bg-[radial-gradient(ellipse_at_center,#7c7cff40,transparent_70%)]
        blur-3xl"
      />

      {/* Subtle Grid */}
      <div className="pointer-events-none absolute inset-0
        bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),
            linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)]
        bg-[size:32px_32px]"
      />

      {/* Content */}
      <div className="relative z-10 py-5">
        <Navbar />
        <About />
        <Skills />
        <Work />
        <Educations />
        <Contact />
        <Footer />
      </div>

    </div>
  );
};



export default App;
