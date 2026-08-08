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
              I build production frontends for e-commerce: storefronts,
              dashboards, and the state, payment, and performance layers behind
              them. React, Next.js, TypeScript, React Native.
            </p>
            <p>
              Most of my work has been ownership-heavy — taking a surface from
              an empty repo to something merchants use every day, then keeping
              it fast as it grows. I work async, ship in small reviewable
              pieces, and write code meant to be maintained by someone who
              isn&apos;t me.
            </p>
            <p>
              Based in Lagos (UTC+1). Open to remote frontend roles, and to
              freelance work alongside them.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
