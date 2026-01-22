import React, { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Work from "./Components/Work/Work";
import Skills from "./Components/Skills/Skills";
import About from "./Components/About/About";
import Educations from "./Components/Education/Educations";
import Contact from "./Components/Contact/Contact";

const App = () => {
  // Reading scroll progress for the top progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Custom Mouse Spotlight Effect Logic
  useEffect(() => {
    const moveSpotlight = (e) => {
      const spotlight = document.getElementById("spotlight");
      if (spotlight) {
        spotlight.style.backgroundImage = `radial-gradient(
          circle at ${e.clientX}px ${e.clientY}px, 
          rgba(130, 69, 236, 0.15) 0%, 
          transparent 80%
        )`;
      }
    };
    window.addEventListener("mousemove", moveSpotlight);
    return () => window.removeEventListener("mousemove", moveSpotlight);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#050414] selection:bg-[#8245ec]/30">
      
      {/* 1. Top Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-linear-to-r from-[#8245ec] to-[#3b82f6] z-60 origin-left"
        style={{ scaleX }}
      />

      {/* 2. Dynamic Background Layer */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Subtle Grid with Radial Fade */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" 
        />
        
        {/* Interactive Mouse Spotlight */}
        <div id="spotlight" className="absolute inset-0 z-0 transition-opacity duration-300" />

        {/* Floating Background Blobs (Slower & Larger for Premium Feel) */}
        <motion.div 
          animate={{ 
            x: [0, 100, 0], 
            y: [0, 50, 0],
            scale: [1, 1.2, 1] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] left-[-10%] w-[40vw] h-[40vw] bg-purple-600/10 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 0], 
            y: [0, -50, 0],
            scale: [1, 1.1, 1] 
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] right-[-5%] w-[35vw] h-[35vw] bg-blue-600/10 blur-[120px] rounded-full"
        />
      </div>

      {/* 3. Content Wrapper */}
      <main className="relative z-10">
        <Navbar />
        
        {/* Section Spacing with Intersection Animations handles inside components */}
        <div className="space-y-0"> 
          <About />
          <Skills />
          <Work />
          <Educations />
          <Contact />
        </div>

        <Footer />
      </main>

      {/* 4. Ambient Noise Overlay (Adds texture to the dark bg) */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

    </div>
  );
};

export default App;