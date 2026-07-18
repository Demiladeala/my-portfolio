"use client";
import React from "react";
import { motion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";

type Props = {};

const services = [
  "E-commerce storefronts & landing pages (Next.js)",
  "Admin dashboards & internal tools",
  "Payment integrations (Stripe, Paystack, Flutterwave)",
  "Performance rescue: making slow React sites fast",
];

export default function WorkWithMe({}: Props) {
  return (
    <div className="border-t border-line">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl font-bold tracking-tight"
        >
          Work with me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
        >
          <div className="bg-surface border border-line rounded-2xl p-7 sm:p-8">
            <h3 className="font-display text-lg sm:text-xl font-bold mb-3">
              For agencies
            </h3>
            <p className="text-ink/85 text-base sm:text-lg leading-relaxed">
              I take on white-label builds. You send the Figma, I return
              production-ready code. Your clients never know I exist. Typical
              turnaround: 1–3 weeks depending on scope.
            </p>
          </div>

          <div className="bg-surface border border-line rounded-2xl p-7 sm:p-8">
            <h3 className="font-display text-lg sm:text-xl font-bold mb-3">
              For founders
            </h3>
            <p className="text-ink/85 text-base sm:text-lg leading-relaxed">
              I build MVPs and storefronts fast, using modern tooling and
              AI-assisted workflows, so you can launch and test without a full
              dev team.
            </p>
          </div>
        </motion.div>

        {/* What I'm best at */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <h3 className="font-semibold text-sm tracking-widest uppercase text-muted mb-5">
            What I&apos;m best at
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {services.map((service) => (
              <div
                key={service}
                className="flex items-center gap-3 bg-surface border border-line rounded-xl px-5 py-4 text-ink/85 text-sm sm:text-base"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                {service}
              </div>
            ))}
          </div>
        </motion.div>

        {/* How I work */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-14 p-6 sm:p-8 rounded-2xl bg-accent-tint border-l-4 border-accent"
        >
          <h3 className="font-display text-lg sm:text-xl font-bold mb-3">
            How I work
          </h3>
          <p className="text-ink/85 text-base sm:text-lg leading-relaxed max-w-3xl">
            Clear communication, daily updates if you want them, and I ship in
            small reviewable pieces — no month-long silence then a big reveal.
            I record short Loom walkthroughs of everything I deliver so you
            always know what you got.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-5 mt-14"
        >
          <a
            href="mailto:demiladeala@gmail.com?subject=Project%20inquiry"
            className="flex items-center gap-3 px-7 py-3.5 bg-accent text-white font-medium rounded-lg hover:bg-accent-dark transition-colors"
          >
            <AiOutlineMail size={20} />
            Email me — I reply within 24 hours
          </a>

          <p className="flex items-center gap-2 text-muted text-sm sm:text-base">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            Currently taking on 1–2 new projects for August 2026.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
