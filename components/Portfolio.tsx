"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "./Projectsdata";

const categories = [
  "All",
  "Web Apps",
  "Admin Dashboards",
  "Mobile Apps",
  "Technical writing",
  "Fullstack",
  "Web3",
];

export default function Projects() {
  const [active, setActive] = useState("All");
  const [page, setPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const perPage = 5;

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  const totalPages = Math.ceil(filtered.length / perPage);
  const displayed = isMobile
    ? filtered.slice((page - 1) * perPage, page * perPage)
    : filtered;

  const nextPage = () => setPage((p) => (p < totalPages ? p + 1 : p));
  const prevPage = () => setPage((p) => (p > 1 ? p - 1 : p));

  return (
    <div className="border-t border-line bg-surface">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center font-display text-3xl sm:text-4xl font-bold tracking-tight"
        >
          More projects
        </motion.h2>

        <p className="text-center text-muted text-base sm:text-lg mt-4 mb-10 max-w-2xl mx-auto">
          Everything else I&apos;ve shipped — {projects.length} projects across
          web apps, dashboards, mobile, and more.
        </p>

        {!expanded && (
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded(true)}
              className="px-7 py-3 rounded-lg border border-line font-medium text-ink hover:border-ink transition-colors"
            >
              Show all {projects.length} projects
            </button>
          </div>
        )}

        {expanded && (
          <>
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-2.5 mb-14">
              {categories.map((cat) => (
                <button
                  type="button"
                  key={cat}
                  onClick={() => {
                    setActive(cat);
                    setPage(1);
                  }}
                  className={`px-4 py-2 text-xs sm:text-sm rounded-full border transition-colors duration-200
                    ${
                      active === cat
                        ? "bg-ink text-paper border-ink"
                        : "border-line text-muted hover:border-ink hover:text-ink"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence>
                {displayed.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => window.open(project.link, "_blank")}
                    className="w-full flex items-stretch cursor-pointer"
                  >
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.4 }}
                      className="relative bg-paper w-full h-full border border-line rounded-2xl overflow-hidden hover:shadow-md hover:shadow-ink/5 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <div className="relative w-full h-48 overflow-hidden border-b border-line">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={600}
                          height={400}
                          className={`${
                            project.contain
                              ? "object-contain bg-surface"
                              : "object-cover"
                          } w-full h-full`}
                        />
                      </div>
                      <div className="p-6 flex flex-col justify-between min-h-[220px]">
                        <div>
                          <h3 className="font-display text-lg font-bold mb-2">
                            {project.title}
                          </h3>
                          <p className="text-muted text-sm leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {project?.tech?.length ? (
                            project.tech.map((t, i) => (
                              <span
                                key={i}
                                className="px-2.5 py-1 text-xs rounded-full border border-line text-muted"
                              >
                                {t}
                              </span>
                            ))
                          ) : (
                            <span className="text-muted text-xs"></span>
                          )}
                        </div>

                        <div className="mt-5 flex gap-5">
                          <a
                            href={project.link}
                            target="_blank"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1.5 text-accent hover:text-accent-dark font-medium text-sm transition-colors"
                          >
                            <ExternalLink size={15} /> Live
                          </a>
                          {project.source ? (
                            <a
                              href={project.source}
                              target="_blank"
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center gap-1.5 text-muted hover:text-ink font-medium text-sm transition-colors"
                            >
                              <Github size={15} /> Code
                            </a>
                          ) : null}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Pagination for mobile */}
            {isMobile && totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-10">
                <button
                  type="button"
                  onClick={prevPage}
                  disabled={page === 1}
                  className="px-3 py-1.5 border border-line text-muted rounded-lg disabled:opacity-40"
                >
                  Prev
                </button>
                <span className="text-muted text-sm">
                  {page} / {totalPages}
                </span>
                <button
                  type="button"
                  onClick={nextPage}
                  disabled={page === totalPages}
                  className="px-3 py-1.5 border border-line text-muted rounded-lg disabled:opacity-40"
                >
                  Next
                </button>
              </div>
            )}

            <div className="flex justify-center mt-12">
              <button
                type="button"
                onClick={() => setExpanded(false)}
                className="px-6 py-2 rounded-lg border border-line text-muted hover:text-ink hover:border-ink text-sm transition-colors"
              >
                Hide projects
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
