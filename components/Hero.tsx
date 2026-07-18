"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  return (
    <section className="max-w-5xl mx-auto px-6 sm:px-8 pt-24 pb-20 sm:pt-36 sm:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <p className="text-sm font-medium tracking-widest uppercase text-muted mb-5">
          Oluwademilade Ala — Frontend Engineer
        </p>

        <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05] max-w-3xl">
          I build fast, conversion&#8209;focused storefronts and dashboards.
        </h1>

        <p className="text-muted text-lg sm:text-xl leading-relaxed max-w-2xl mt-7">
          Frontend engineer behind the vendor dashboard and marketplace
          storefront of a fast-growing e-commerce platform. Merchants run their
          entire businesses on interfaces I built. React · Next.js · TypeScript.
          Pages load in about a second, because slow stores lose sales.
        </p>

        <div className="flex flex-wrap items-center gap-4 mt-10">
          <Link
            href="#case-studies"
            className="px-6 py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent-dark transition-colors"
          >
            See how I work
          </Link>
          <Link
            href="mailto:demiladeala@gmail.com?subject=Project%20inquiry"
            className="px-6 py-3 rounded-lg border border-line font-medium text-ink hover:border-ink transition-colors"
          >
            Email me
          </Link>
          <Link
            href="https://docs.google.com/document/d/1LbafwukEPuOpLDcQ0dcUP4ejLXRa6MWFzms7gW0lkB0/edit?tab=t.0"
            target="_blank"
            className="text-muted hover:text-ink font-medium underline underline-offset-4 decoration-line hover:decoration-ink transition-colors"
          >
            Resume
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
