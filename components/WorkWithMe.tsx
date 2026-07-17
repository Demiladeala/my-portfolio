"use client";
import React from "react";
import { motion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";

type Props = {};

export default function WorkWithMe({}: Props) {
  return (
    <section className="relative w-full py-20 px-6 sm:px-12 overflow-hidden bg-gradient-to-b from-gray-800 via-gray-900 to-black">
      {/* Floating gradient orb */}
      <motion.div
        className="absolute -top-10 right-10 w-72 h-72 bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center text-3xl sm:text-4xl font-bold text-white mb-12"
      >
        Work With Me /{">"}
      </motion.h2>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Agencies card */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="bg-gray-800/40 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-amber-400/40 transition-all duration-500"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-amber-400 mb-4">
            For agencies
          </h3>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            I take on white-label builds. You send the Figma, I return
            production-ready code. Your clients never know I exist. Typical
            turnaround: 1–3 weeks depending on scope.
          </p>
        </motion.div>

        {/* Founders card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="bg-gray-800/40 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-pink-500/40 transition-all duration-500"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-pink-400 mb-4">
            For founders
          </h3>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            I build MVPs and storefronts fast, using modern tooling and
            AI-assisted workflows, so you can launch and test without a full dev
            team.
          </p>
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center gap-5 mt-12"
      >
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          href="mailto:demiladeala@gmail.com?subject=Project%20inquiry"
          className="flex items-center gap-3 py-3 px-8 bg-amber-400 text-black font-bold text-base sm:text-lg rounded-full transition-all duration-300 hover:bg-amber-300 shadow-lg shadow-amber-500/20"
        >
          <AiOutlineMail size={22} />
          Email me — I reply within 24 hours
        </motion.a>

        {/* Availability */}
        <p className="flex items-center gap-2 text-gray-300 text-sm sm:text-base">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
          </span>
          Currently taking on 1–2 new projects for August 2026.
        </p>
      </motion.div>
    </section>
  );
}
