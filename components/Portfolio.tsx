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
  const perPage = 5;

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  const totalPages = Math.ceil(filtered.length / perPage);
  const displayed =
    typeof window !== "undefined" && window.innerWidth < 640
      ? filtered.slice((page - 1) * perPage, page * perPage)
      : filtered;

  const nextPage = () => setPage((p) => (p < totalPages ? p + 1 : p));
  const prevPage = () => setPage((p) => (p > 1 ? p - 1 : p));

  return (
    <section
      id="projects"
      className="relative w-full py-24 px-6 sm:px-12 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-gray-950"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center text-3xl sm:text-4xl font-bold text-white mb-12"
      >
        My Projects 🚀
      </motion.h2>

      {/* Category Tabs */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {categories.map((cat) => (
          <button
            type="button"
            key={cat}
            onClick={() => {
              setActive(cat);
              setPage(1);
            }}
            className={`px-4 py-2 text-xs sm:text-base rounded-full border transition-all duration-300 
              ${
                active === cat
                  ? "bg-amber-400 text-black border-amber-400"
                  : "border-gray-600 text-gray-300 hover:border-amber-400 hover:text-amber-400"
              }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto"
      >
        <AnimatePresence>
          {displayed.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              className="flex items-center gap-1"
            >
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                className="relative bg-gray-800/40 backdrop-blur-lg border border-white/10 rounded-2xl overflow-scroll hover:-translate-y-1 hover:shadow-amber-400/20 transition-all duration-500"
              >
                <div className="relative w-full h-52 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className={`${
                      project.contain
                        ? "object-contain bg-gray-900"
                        : "object-cover"
                    } w-full h-full opacity-90 hover:opacity-100 transition`}
                  />
                </div>
                <div className="p-6 flex flex-col justify-between h-[230px]">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project?.tech?.length ? (
                      project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs rounded-full bg-gray-700 text-gray-300"
                        >
                          {t}
                        </span>
                      ))
                    ) : (
                      <span className="text-gray-500 text-xs"></span>
                    )}
                  </div>

                  <div className="mt-5 flex gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      className="flex items-center gap-1 text-amber-400 hover:underline"
                    >
                      <ExternalLink size={16} /> Live
                    </a>
                    {project.source ? (
                      <a
                        href={project.source}
                        target="_blank"
                        className="flex items-center gap-1 text-gray-400 hover:text-gray-200"
                      >
                        <Github size={16} /> Code
                      </a>
                    ) : (
                      <span className="flex items-center gap-1 text-gray-600 cursor-not-allowed opacity-50">
                        <Github size={16} /> Code
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </a>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Pagination for mobile */}
      {typeof window !== "undefined" &&
        window.innerWidth < 640 &&
        totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-10">
            <button
              type="button"
              onClick={prevPage}
              disabled={page === 1}
              className="px-3 py-1 border border-gray-600 text-gray-300 rounded-md disabled:opacity-40"
            >
              Prev
            </button>
            <span className="text-gray-400 text-sm">
              {page} / {totalPages}
            </span>
            <button
              type="button"
              onClick={nextPage}
              disabled={page === totalPages}
              className="px-3 py-1 border border-gray-600 text-gray-300 rounded-md disabled:opacity-40"
            >
              Next
            </button>
          </div>
        )}
    </section>
  );
}
