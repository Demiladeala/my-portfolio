"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

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

      {/* Animated engineer visual (replaces profile photo) */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 mb-8 max-md:mt-12 w-[180px] h-[180px] flex items-center justify-center"
      >
        {/* Rotating gradient ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full p-[3px] bg-[conic-gradient(from_0deg,#fbbf24,#ec4899,#a855f7,#fbbf24)]"
        >
          <div className="w-full h-full rounded-full bg-[#15151a]" />
        </motion.div>

        {/* Counter-rotating dashed orbit */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-4 rounded-full border border-dashed border-amber-400/40"
        >
          <span className="absolute -top-1 left-1/2 w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
          <span className="absolute top-1/2 -right-1 w-2 h-2 rounded-full bg-pink-500 shadow-[0_0_8px_rgba(236,72,153,0.8)]" />
          <span className="absolute -bottom-1 left-1/3 w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
        </motion.div>

        {/* Glowing core */}
        <motion.div
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-tr from-gray-800 to-gray-700 border border-white/10 flex items-center justify-center shadow-lg shadow-amber-500/20"
        >
          <span className="text-3xl font-bold bg-gradient-to-r from-amber-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            {"</>"}
          </span>
        </motion.div>
      </motion.div>

      {/* Name & Headline */}
      <div className="relative z-10">
        <p className="text-amber-400 text-sm sm:text-base font-medium tracking-widest uppercase mb-3">
          Oluwademilade Ala — Frontend Engineer
        </p>

        <h1 className="text-2xl sm:text-4xl font-bold text-white mb-3 max-w-3xl mx-auto leading-tight">
          I build fast,{" "}
          <span className="text-amber-400">conversion-focused</span>{" "}
          storefronts and dashboards.
        </h1>

        <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mt-4">
          Frontend engineer behind the vendor dashboard and marketplace
          storefront of a fast-growing e-commerce platform — merchants run
          their entire businesses on interfaces I built. React · Next.js ·
          TypeScript. Pages load in about a second, because slow stores lose
          sales.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-10 relative z-10">
        <Link href="#case-studies">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-7 py-2.5 text-sm sm:text-base font-bold rounded-full bg-amber-400 text-black hover:bg-amber-300 shadow-lg shadow-amber-500/20 transition-all"
          >
            See how I work
          </motion.button>
        </Link>

        <Link href="mailto:demiladeala@gmail.com?subject=Project%20inquiry">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-7 py-2.5 text-sm sm:text-base font-medium rounded-full border border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-black transition-all"
          >
            Email me
          </motion.button>
        </Link>

        <Link
          href="https://docs.google.com/document/d/1LbafwukEPuOpLDcQ0dcUP4ejLXRa6MWFzms7gW0lkB0/edit?tab=t.0"
          target="_blank"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-7 py-2.5 text-sm sm:text-base font-medium rounded-full border border-white/20 text-gray-400 hover:border-gray-300 hover:text-gray-200 transition-all"
          >
            Resume
          </motion.button>
        </Link>
      </div>
    </motion.section>
  );
}
