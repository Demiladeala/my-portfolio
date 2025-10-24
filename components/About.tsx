"use client";
import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import laptopAnimation from "../public/animations/laptop.json";

type Props = {};

export default function About({}: Props) {
  return (
    <section className="relative w-full py-20 px-6 sm:px-12 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-black opacity-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1.5 }}
      />

      {/* Floating gradient orb */}
      <motion.div
        className="absolute -top-10 left-10 w-72 h-72 bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-[1] text-center text-3xl sm:text-4xl font-bold text-white mb-12"
      >
        What I do /{">"}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-12 sm:gap-20 max-w-6xl mx-auto"
      >
        {/* Left side – animation */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="basis-1/2 flex justify-center"
        >
          <div className="w-[220px] sm:w-[280px] md:w-[320px] lg:w-[380px] drop-shadow-xl rounded-3xl bg-gradient-to-tr from-gray-800 to-gray-700 p-4 sm:p-6 backdrop-blur-lg border border-white/10">
            <Lottie animationData={laptopAnimation} loop={true} />
          </div>
        </motion.div>

        {/* Right side – text */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="basis-1/2 text-gray-200 text-center sm:text-left"
        >
          <p className="font-SpaceGrotesk text-lg sm:text-xl leading-relaxed">
            A Software Engineer passionate about creating high-quality,
            user-focused digital experiences. I specialize in building
            performant softwares using modern technologies like{" "}
            <span className="text-pink-400">React</span>,{" "}
            <span className="text-purple-400">React Native</span>,
            <span className="text-pink-400"> TypeScript</span>, and
            <span className="text-blue-400"> Next.Js</span>.
          </p>

          <p className="mt-6 font-SpaceGrotesk text-lg sm:text-xl leading-relaxed">
            I thrive on solving challenging problems, designing intuitive
            interfaces, and collaborating with teams to bring bold ideas to
            life. My goal is to craft software that's not only functional but
            delightful to use.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
