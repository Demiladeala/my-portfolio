"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="border-t border-line bg-surface">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
            What I do
          </h2>

          <div className="text-ink/85 text-lg leading-relaxed space-y-6">
            <p>
              I specialize in building performant software with React, React
              Native, TypeScript, and Next.js storefronts, dashboards, and the
              systems behind them.
            </p>
            <p>
              I thrive on solving challenging problems, designing intuitive
              interfaces, and collaborating with teams to bring bold ideas to
              life. My goal is to craft software that&apos;s not only functional
              but delightful to use.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
