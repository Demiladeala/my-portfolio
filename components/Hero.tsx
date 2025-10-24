"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Typed from "react-typed";
import Link from "next/link";
import heroimage from "../public/demmy.jpg";

type Props = {};

export default function Hero({}: Props) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="h-screen pb-16 flex flex-col justify-center items-center text-center px-6 relative overflow-hidden"
    >
      {/* Subtle animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-gray-800 opacity-60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.5 }}
      />

      {/* Floating decorative gradient blob */}
      <motion.div
        className="absolute top-[-10%] left-[10%] w-72 h-72 bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 mb-8 max-md:mt-12"
      >
        <Image
          src={heroimage}
          alt="Oluwademilade Ala - Software Engineer"
          width={180}
          height={180}
          priority
          className="rounded-full border-4 border-amber-400 shadow-lg shadow-amber-500/20 object-cover"
        />
      </motion.div>

      {/* Name & Title */}
      <div className="relative z-10">
        <h1 className="text-2xl sm:text-4xl font-bold text-white mb-3">
          <Typed
            strings={[
              "Hi, I'm Oluwademilade 👋",
              "I'm a Software Engineer",
              "A lifelong Innovator",
            ]}
            typeSpeed={70}
            backSpeed={40}
            loop
          />
        </h1>

        <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto mt-4">
          Results-driven engineer with a passion for developing
          high-performance, scalable web and mobile applications. Skilled at
          solving complex technical challenges through clean, efficient, and
          modern coding practices that deliver measurable value.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-10 relative z-10">
        <Link href="#about">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-2 text-sm sm:text-base font-medium rounded-full border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black transition-all"
          >
            About
          </motion.button>
        </Link>

        <Link
          href="https://docs.google.com/document/d/1LbafwukEPuOpLDcQ0dcUP4ejLXRa6MWFzms7gW0lkB0/edit?tab=t.0"
          target="_blank"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-2 text-sm sm:text-base font-medium rounded-full border border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-black transition-all"
          >
            Resume
          </motion.button>
        </Link>

        <Link href="#portfolio">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-2 text-sm sm:text-base font-medium rounded-full border border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white transition-all"
          >
            Projects 📁
          </motion.button>
        </Link>

        <Link href="#contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-2 text-sm sm:text-base font-medium rounded-full border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black transition-all"
          >
            Contact
          </motion.button>
        </Link>
      </div>
    </motion.section>
  );
}
