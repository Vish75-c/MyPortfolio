import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 pb-20 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans relative overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-[#8245ec]/5 blur-[120px] -z-10 rounded-full" />

      {/* Section Title */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Get In Touch <span className="inline-block animate-bounce">🔗</span>
        </h2>
        <p className="text-gray-400 mt-4 text-md md:text-lg font-medium max-w-2xl mx-auto">
          Have a project in mind or just want to chat? My inbox is always open.
          I'll get back to you as soon as possible!
        </p>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "8rem" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1 bg-[#8245ec] mx-auto mt-6 rounded-full shadow-[0_0_10px_#8245ec]" 
        />
      </motion.div>

      {/* Contact Form Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto bg-gray-900/40 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-white/10 relative"
      >
        <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent rounded-3xl pointer-events-none" />
        
        <form className="relative flex flex-col space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 ml-1">Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full bg-black/40 border border-gray-700/50 rounded-xl py-3 px-4 text-white placeholder:text-gray-600 outline-none focus:border-[#8245ec] focus:ring-1 focus:ring-[#8245ec] transition-all duration-300"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 ml-1">Email</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full bg-black/40 border border-gray-700/50 rounded-xl py-3 px-4 text-white placeholder:text-gray-600 outline-none focus:border-[#8245ec] focus:ring-1 focus:ring-[#8245ec] transition-all duration-300"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 ml-1">Subject</label>
            <input
              type="text"
              placeholder="Project Collaboration"
              className="w-full bg-black/40 border border-gray-700/50 rounded-xl py-3 px-4 text-white placeholder:text-gray-600 outline-none focus:border-[#8245ec] focus:ring-1 focus:ring-[#8245ec] transition-all duration-300"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 ml-1">Message</label>
            <textarea
              rows={5}
              placeholder="Tell me about your idea..."
              className="w-full bg-black/40 border border-gray-700/50 rounded-xl py-3 px-4 text-white placeholder:text-gray-600 outline-none focus:border-[#8245ec] focus:ring-1 focus:ring-[#8245ec] transition-all duration-300 resize-none"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(130, 69, 236, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 rounded-xl bg-linear-to-r from-[#8245ec] to-[#6a34cc] text-white font-bold text-lg transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group"
          >
            Send Message
            <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">🚀</span>
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;