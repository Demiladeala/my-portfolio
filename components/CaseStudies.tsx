"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github, CheckCircle2 } from "lucide-react";

type CaseStudy = {
  id: string;
  eyebrow: string;
  title: string;
  context: string;
  built: string[];
  engineering?: string[];
  hardestProblem?: { title: string; body: string };
  result: string;
  stack: string[];
  image?: string;
  imageAlt?: string;
  links: { label: string; href: string; icon: "live" | "code" }[];
};

const caseStudies: CaseStudy[] = [
  {
    id: "vendor-dashboard",
    eyebrow: "Case Study 01 — Admin Dashboard",
    title: "Building a vendor dashboard from zero to 18+ pages — solo",
    context:
      "Zent is an e-commerce platform that lets African businesses launch online stores, take payments in 20+ currencies, and manage inventory and deliveries. Vendors needed one place to run their entire business: orders, products, analytics, payouts. I was handed this from scratch.",
    built: [
      "Sole frontend engineer on the dashboard — architecture, component system, and every page (18+) from empty repo to production",
      "Payment flows integrating Paystack, Nomba, Stripe, and Flutterwave",
      "Order management, inventory, analytics, and payout views consumed by real merchants daily",
      "State architecture with Redux / RTK Query designed so new pages ship fast without rewrites",
    ],
    engineering: [
      "~1 second page loads with proper skeleton loading states — no blank screens, no jank",
      "Fully responsive; merchants run their stores from their phones",
      "Built to be maintained: consistent design system, typed end-to-end with TypeScript",
    ],
    result:
      "In production today. Merchants log in every day to manage orders, inventory, and payouts on pages I designed and built — and features shaped by their feedback have shipped and stuck.",
    stack: [
      "Next.js",
      "TypeScript",
      "Redux / RTK Query",
      "Tailwind",
      "Paystack / Stripe / Flutterwave / Nomba APIs",
    ],
    image: "/zent-vendor.png",
    imageAlt: "Zent vendor dashboard — products view (demo store)",
    links: [
      {
        label: "joinzent.com",
        href: "https://www.joinzent.com/",
        icon: "live",
      },
      {
        label: "Demo store",
        href: "https://demilade.zentstore.com/",
        icon: "live",
      },
    ],
  },
  {
    id: "marketplace-storefront",
    eyebrow: "Case Study 02 — E-commerce Storefront",
    title: "The storefront where every millisecond is revenue",
    context:
      "A storefront is the money page — it's where a merchant's customers actually buy. I currently lead the build of Zent's marketplace storefront, and previously shipped edits and new features across the existing storefront system.",
    built: [
      "New features and iterations on the storefront serving live stores",
      "Currently building the marketplace storefront end-to-end",
      "Performance-first approach: fast loads, skeleton states, mobile-first — because storefront speed converts directly to sales",
    ],
    hardestProblem: {
      title: "The hardest problem: one app, every store, no flash.",
      body: "Every merchant's storefront — subdomain or custom domain — is served by a single Next.js codebase that has to figure out which store you're visiting on every request. I built the tenant resolution and SSR hydration layer: the server identifies the merchant from the hostname, fetches their store data, theme, and template in parallel, and pre-seeds the client-side cache before first paint — so shoppers land on a fully branded store instantly, with no logo flash, no skeleton pop, and no client-side fetch waterfall. Not-found, suspended, and maintenance states are all resolved server-side too.",
    },
    result:
      "Live stores run on it right now — real customers checking out on storefronts I engineered.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind"],
    image: "/zent-storefront.png",
    imageAlt: "Zent storefront — demo store",
    links: [
      {
        label: "Demo store",
        href: "https://demilade.zentstore.com/",
        icon: "live",
      },
    ],
  },
  {
    id: "transaction-monitoring",
    eyebrow: "Case Study 03 — Open Source",
    title:
      "A fintech-grade transaction monitoring dashboard, architected to scale",
    context:
      "Fintech and payments teams need to spot risky transactions fast. I built a complete transaction monitoring interface — the kind of tool a compliance or operations team would live in all day, as a demonstration of how I architect production frontend applications.",
    built: [
      "Authentication flow with validation, loading and error states",
      "KPI dashboard: total transactions, flagged transactions, customers, and risk score summary with charts",
      "Transactions table with search, status/risk filtering, and pagination",
      "Click-through transaction detail drawer: customer profile, transaction history, risk indicators, and activity timeline",
      "Loading skeletons throughout — no blank screens",
    ],
    engineering: [
      "Feature-driven architecture: each domain (auth, analytics, transactions, theming) owns its components, hooks, services, API layer, schemas, and types — the structure agencies use for codebases meant to grow",
      "Clean separation of presentation-only UI components from feature logic",
      "Server state separated from client/UI state (React Query + Zustand)",
      "Fully responsive, typed end-to-end with TypeScript",
    ],
    result:
      'Open source with a documented architecture — clients can read exactly how I think before hiring me. It\'s also my answer when a client asks "can I see your code?"',
    stack: [
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind",
      "React Query",
      "Zustand",
    ],
    links: [
      {
        label: "Live demo",
        href: "https://transaction-monitoring-dashboard-swart.vercel.app/",
        icon: "live",
      },
      {
        label: "Source code",
        href: "https://github.com/Demiladeala/transaction-monitoring-dashboard",
        icon: "code",
      },
    ],
  },
];

function StudyLinks({ links }: { links: CaseStudy["links"] }) {
  return (
    <div className="flex flex-wrap gap-4 mt-6">
      {links.map((l) => (
        <a
          key={l.href + l.label}
          href={l.href}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-amber-400 hover:text-amber-300 hover:underline text-sm sm:text-base font-medium"
        >
          {l.icon === "code" ? (
            <Github size={17} />
          ) : (
            <ExternalLink size={17} />
          )}
          {l.label}
        </a>
      ))}
    </div>
  );
}

export default function CaseStudies() {
  return (
    <section className="relative w-full py-24 px-6 sm:px-12 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-950 to-black">
      {/* Floating gradient orb */}
      <motion.div
        className="absolute top-20 -right-20 w-72 h-72 bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center text-3xl sm:text-4xl font-bold text-white mb-4"
      >
        Featured Case Studies /{">"}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative z-10 text-center text-gray-400 text-base sm:text-lg mb-16 max-w-2xl mx-auto"
      >
        Three builds that show how I work — production dashboards, storefronts,
        and open-source architecture you can read yourself.
      </motion.p>

      <div className="relative z-10 flex flex-col gap-20 max-w-5xl mx-auto">
        {caseStudies.map((study, i) => (
          <motion.article
            key={study.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true, amount: 0.15 }}
            className="bg-gray-800/40 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden hover:border-amber-400/30 transition-all duration-500"
          >
            {study.image && (
              <div className="relative w-full h-56 sm:h-80 overflow-hidden border-b border-white/10">
                <Image
                  src={study.image}
                  alt={study.imageAlt || study.title}
                  width={1200}
                  height={640}
                  className="object-cover object-top w-full h-full opacity-90"
                />
              </div>
            )}

            <div className="p-8 sm:p-10">
              <p className="text-amber-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
                {study.eyebrow}
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-snug">
                {study.title}
              </h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
                {study.context}
              </p>

              <div
                className={`grid grid-cols-1 ${
                  study.engineering ? "md:grid-cols-2" : ""
                } gap-8`}
              >
                <div>
                  <h4 className="text-white font-semibold mb-3">
                    What I built
                  </h4>
                  <ul className="space-y-2.5">
                    {study.built.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2.5 text-gray-300 text-sm sm:text-base leading-relaxed"
                      >
                        <CheckCircle2
                          size={18}
                          className="text-amber-400 shrink-0 mt-1"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {study.engineering && (
                  <div>
                    <h4 className="text-white font-semibold mb-3">
                      The engineering details clients care about
                    </h4>
                    <ul className="space-y-2.5">
                      {study.engineering.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2.5 text-gray-300 text-sm sm:text-base leading-relaxed"
                        >
                          <CheckCircle2
                            size={18}
                            className="text-pink-400 shrink-0 mt-1"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {study.hardestProblem && (
                <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-amber-400/10 to-pink-500/5 border border-amber-400/20">
                  <h4 className="text-amber-400 font-semibold mb-2">
                    {study.hardestProblem.title}
                  </h4>
                  <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                    {study.hardestProblem.body}
                  </p>
                </div>
              )}

              <div className="mt-8 p-5 rounded-2xl bg-gray-900/60 border border-white/5">
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                  <span className="text-amber-400 font-semibold">Result: </span>
                  {study.result}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {study.stack.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs sm:text-sm rounded-full bg-gray-700/70 text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <StudyLinks links={study.links} />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
