"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github, Check } from "lucide-react";

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
      "Sole frontend engineer on the dashboard architecture, component system, and every page (18+) from empty repo to production",
      "Payment flows integrating Paystack, Nomba, Stripe, and Flutterwave",
      "Order management, inventory, analytics, and payout views consumed by real merchants daily",
      "State architecture with Redux / RTK Query designed so new pages ship fast without rewrites",
    ],
    engineering: [
      "~1 second page loads with proper skeleton loading states, no blank screens, no jank",
      "Fully responsive; merchants run their stores from their phones",
      "Built to be maintained: consistent design system, typed end-to-end with TypeScript",
    ],
    result:
      "In production today. Merchants log in every day to manage orders, inventory, and payouts on pages I designed and built, and features shaped by their feedback have shipped and stuck.",
    stack: [
      "Next.js",
      "TypeScript",
      "Redux / RTK Query",
      "Tailwind",
      "Paystack / Stripe / Flutterwave / Nomba APIs",
    ],
    image: "/case-vendor-dashboard.png",
    imageAlt: "Zent vendor dashboard — overview with sales, orders, and payouts",
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
      "A storefront is the money page. It's where a merchant's customers actually buy. I currently lead the build of Zent's marketplace storefront, and previously shipped edits and new features across the existing storefront system.",
    built: [
      "New features and iterations on the storefront serving live stores",
      "Currently building the marketplace storefront end-to-end",
      "Performance-first approach: fast loads, skeleton states, mobile-first because storefront speed converts directly to sales",
    ],
    hardestProblem: {
      title: "The hardest problem: one app, every store, no flash.",
      body: "Every merchant's storefront, subdomain or custom domain is served by a single Next.js codebase that has to figure out which store you're visiting on every request. I built the tenant resolution and SSR hydration layer: the server identifies the merchant from the hostname, fetches their store data, theme, and template in parallel, and pre-seeds the client-side cache before first paint, so shoppers land on a fully branded store instantly, with no logo flash, no skeleton pop, and no client-side fetch waterfall. Not-found, suspended, and maintenance states are all resolved server-side too.",
    },
    result:
      "Live stores run on it right now, real customers checking out on storefronts I engineered.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind"],
    image: "/case-storefront.png",
    imageAlt: "Zent marketplace storefront — live store homepage",
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
      "Fintech and payments teams need to spot risky transactions fast. I built a complete transaction monitoring interface. The kind of tool a compliance or operations team would live in all day, as a demonstration of how I architect production frontend applications.",
    built: [
      "Authentication flow with validation, loading and error states",
      "KPI dashboard: total transactions, flagged transactions, customers, and risk score summary with charts",
      "Transactions table with search, status/risk filtering, and pagination",
      "Click-through transaction detail drawer: customer profile, transaction history, risk indicators, and activity timeline",
      "Loading skeletons throughout, no blank screens",
    ],
    engineering: [
      "Feature-driven architecture: each domain (auth, analytics, transactions, theming) owns its components, hooks, services, API layer, schemas, and types. The structure agencies use for codebases meant to grow",
      "Clean separation of presentation-only UI components from feature logic",
      "Server state separated from client/UI state (React Query + Zustand)",
      "Fully responsive, typed end-to-end with TypeScript",
    ],
    result:
      'Open source with a documented architecture, clients can read exactly how I think before hiring me. It\'s also my answer when a client asks "can I see your code?"',
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
    <div className="flex flex-wrap gap-5 mt-7">
      {links.map((l) => (
        <a
          key={l.href + l.label}
          href={l.href}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-accent hover:text-accent-dark font-medium text-sm sm:text-base transition-colors"
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

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-2.5 text-ink/85 text-sm sm:text-base leading-relaxed"
        >
          <Check size={17} className="text-accent shrink-0 mt-1" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function CaseStudies() {
  return (
    <div className="border-t border-line bg-surface">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
            Selected case studies
          </h2>
          <p className="text-muted text-lg leading-relaxed mt-4 max-w-2xl">
            Three builds that show how I work. Production dashboards,
            storefronts, and open-source architecture you can read yourself.
          </p>
        </motion.div>

        <div className="flex flex-col gap-16 mt-14">
          {caseStudies.map((study) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.1 }}
              className="border border-line rounded-2xl overflow-hidden bg-paper"
            >
              {study.image && (
                <div className="relative w-full h-56 sm:h-80 overflow-hidden border-b border-line bg-surface">
                  <Image
                    src={study.image}
                    alt={study.imageAlt || study.title}
                    width={1200}
                    height={640}
                    className="object-cover object-top w-full h-full"
                  />
                </div>
              )}

              <div className="p-7 sm:p-10">
                <p className="text-accent text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
                  {study.eyebrow}
                </p>
                <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight leading-snug mb-4">
                  {study.title}
                </h3>
                <p className="text-ink/85 text-base sm:text-lg leading-relaxed mb-8 max-w-3xl">
                  {study.context}
                </p>

                <div
                  className={`grid grid-cols-1 ${
                    study.engineering ? "md:grid-cols-2" : ""
                  } gap-8`}
                >
                  <div>
                    <h4 className="font-semibold mb-3">What I built</h4>
                    <BulletList items={study.built} />
                  </div>

                  {study.engineering && (
                    <div>
                      <h4 className="font-semibold mb-3">
                        The engineering details clients care about
                      </h4>
                      <BulletList items={study.engineering} />
                    </div>
                  )}
                </div>

                {study.hardestProblem && (
                  <div className="mt-8 p-5 sm:p-6 rounded-xl bg-accent-tint border-l-4 border-accent">
                    <h4 className="font-semibold text-accent-dark mb-2">
                      {study.hardestProblem.title}
                    </h4>
                    <p className="text-ink/85 text-sm sm:text-base leading-relaxed">
                      {study.hardestProblem.body}
                    </p>
                  </div>
                )}

                <div className="mt-8 p-5 rounded-xl bg-surface border border-line">
                  <p className="text-ink/85 text-sm sm:text-base leading-relaxed">
                    <span className="font-semibold text-ink">Result: </span>
                    {study.result}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {study.stack.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs sm:text-sm rounded-full border border-line text-muted bg-surface"
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
      </div>
    </div>
  );
}
