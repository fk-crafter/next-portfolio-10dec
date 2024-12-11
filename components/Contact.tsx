"use client";

import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-20 z-20 px-4"
    >
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#7b92b4] to-[#6f87ae] mb-10 text-center"
      >
        Contact Me
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-between items-start max-w-6xl w-full gap-10"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
          }}
          className="w-full md:w-1/2 flex flex-col justify-start relative text-gray-300 space-y-4 text-center md:text-left -mt-2"
        >
          <p className="text-lg leading-relaxed">
            To contact me, please use the form below. I am committed to
            responding to your inquiry as quickly as possible.
          </p>
          <p className="flex items-center gap-2 text-lg font-semibold text-[#7b92b4]">
            📍 Based in Paris
          </p>
        </motion.div>

        <motion.form
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
          }}
          className="w-full md:w-1/2 space-y-4 bg-[#1a1c2b] p-6 rounded-lg shadow-lg"
        >
          <div>
            <label className="block text-gray-300 mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 bg-[#2b2d42] text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#7b92b4]"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 bg-[#2b2d42] text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#7b92b4]"
              placeholder="Your email"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full px-4 py-2 bg-[#2b2d42] text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#7b92b4]"
              placeholder="Your message"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-[#7b92b4] text-white font-semibold rounded hover:bg-[#6f87ae] transition-all duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
