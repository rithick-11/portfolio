import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaGlobe, FaSearch, FaArrowLeft, FaRegHeart, FaHeart } from "react-icons/fa";
import { DotLoader } from "react-spinners";

import useDataStore from "../store/useDataStore";
import Navbar from "../components/Navbar/Navbar";

const ProjectsPage = () => {
  const { projectList, isProjectLoading } = useDataStore();
  const { projects = [] } = projectList;

  const [search, setSearch] = useState("");
  const [activeTech, setActiveTech] = useState("All");

  // Collect all unique tech tags across projects
  const allTechs = useMemo(() => {
    const techs = new Set();
    projects.forEach((p) => p.techStack?.forEach((t) => techs.add(t)));
    return ["All", ...Array.from(techs)];
  }, [projects]);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.desc?.toLowerCase().includes(search.toLowerCase());
      const matchesTech =
        activeTech === "All" || p.techStack?.includes(activeTech);
      return matchesSearch && matchesTech;
    });
  }, [projects, search, activeTech]);

  return (
    <div className="min-h-screen text-white">
      <Navbar />

      {/* ── Background ── */}
      <div className="fixed top-0 right-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

      {/* ── Hero Header ── */}
      <div className="pt-28 pb-10 px-4 sm:px-16 md:px-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white/50 hover:text-orange-400 transition-colors text-sm mb-8 group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to portfolio
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold">
            <span className="text-orange-500">All</span> Projects
          </h1>
          <p className="text-white/50 mt-2 text-sm">
            {projects.length} project{projects.length !== 1 ? "s" : ""} built with passion
          </p>
        </motion.div>

        {/* ── Search ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 relative max-w-md"
        >
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 text-sm" />
          <input
            type="text"
            placeholder="Search projects…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm placeholder-white/30 outline-none focus:border-orange-500/50 transition-colors"
          />
        </motion.div>

        {/* ── Tech filter chips ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap gap-2 mt-4"
        >
          {allTechs.map((tech) => (
            <button
              key={tech}
              onClick={() => setActiveTech(tech)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all border ${
                activeTech === tech
                  ? "bg-orange-500 border-orange-500 text-white"
                  : "bg-white/5 border-white/10 text-white/60 hover:border-orange-500/50 hover:text-white"
              }`}
            >
              {tech}
            </button>
          ))}
        </motion.div>
      </div>

      {/* ── Loading ── */}
      {isProjectLoading && (
        <div className="flex justify-center items-center h-64">
          <DotLoader color="#f97316" size={50} />
        </div>
      )}

      {/* ── Projects Grid ── */}
      {!isProjectLoading && (
        <div className="px-4 sm:px-16 md:px-24 pb-24">
          {filtered.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-white/40 py-20 text-lg"
            >
              No projects found matching "<span className="text-orange-400">{search}</span>"
            </motion.div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence>
                {filtered.map((project, i) => (
                  <motion.div
                    key={project._id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="flex flex-col rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-lg shadow-black/30 group"
                  >
                    {/* Image */}
                    <Link to={`/project/${project._id}`} className="block w-full aspect-video overflow-hidden">
                      <img
                        src={project.projectImg}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </Link>

                    {/* Body */}
                    <div className="flex flex-col flex-1 p-4 gap-3">
                      <Link to={`/project/${project._id}`}>
                        <h2 className="text-base font-semibold hover:text-orange-400 transition-colors leading-snug">
                          {project.name}
                        </h2>
                      </Link>

                      <p className="text-xs text-white/60 font-light line-clamp-2 flex-1">
                        {project.desc}
                      </p>

                      {/* Tech Tags */}
                      <ul className="flex flex-wrap gap-1">
                        {project.techStack?.map((tech, j) => (
                          <li
                            key={j}
                            className="bg-orange-500/10 border border-orange-500/20 text-orange-300 px-2 py-0.5 rounded-full text-xs"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>

                      {/* Footer */}
                      <div className="flex justify-between items-center pt-3 border-t border-white/10 mt-auto">
                        <div className="flex items-center gap-3">
                          <a
                            href={project.sourceCode}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1.5 text-white/60 hover:text-white transition-colors text-xs"
                          >
                            <FaGithub className="text-sm" />
                            Code
                          </a>
                          <a
                            href={project.siteLink}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1.5 text-white/60 hover:text-orange-400 transition-colors text-xs"
                          >
                            <FaGlobe className="text-sm" />
                            Live
                          </a>
                        </div>
                        <Link
                          to={`/project/${project._id}`}
                          className="text-xs px-3 py-1 rounded-full border border-orange-500/40 text-orange-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all"
                        >
                          View →
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
