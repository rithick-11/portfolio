import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { DotLoader } from "react-spinners";

import Tittle from "../../components/Tittle/Tittle";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import useDataStore from "../../store/useDataStore";
import { ease } from "../../lib/animations";

// ── Pagination dots (same as LinkedIn Posts section) ──
const Dots = ({ total, active, onChange }) => (
  <div className="flex justify-center gap-2">
    {Array.from({ length: total }).map((_, i) => (
      <button
        key={i}
        onClick={() => onChange(i)}
        className={`rounded-full transition-all ${
          i === active
            ? "w-5 h-2 bg-orange-500"
            : "w-2 h-2 bg-white/25 hover:bg-white/50"
        }`}
      />
    ))}
  </div>
);

const Projects = () => {
  const { isProjectLoading, projectList } = useDataStore();
  const projects = projectList?.projects ?? [];

  const [page, setPage] = useState(0);

  const DESKTOP = 3;
  const TABLET  = 2;
  const MOBILE  = 1;

  const totalDesktop = Math.max(1, Math.ceil(projects.length / DESKTOP));
  const totalTablet  = Math.max(1, Math.ceil(projects.length / TABLET));
  const totalMobile  = Math.max(1, Math.ceil(projects.length / MOBILE));

  const sliceDesktop = projects.slice(page * DESKTOP, page * DESKTOP + DESKTOP);
  const sliceTablet  = projects.slice(page * TABLET,  page * TABLET  + TABLET);
  const sliceMobile  = projects.slice(page * MOBILE,  page * MOBILE  + MOBILE);

  const prev = (total) => setPage((p) => (p - 1 + total) % total);
  const next = (total) => setPage((p) => (p + 1) % total);

  // Arrow / nav row shared between all breakpoints
  const NavRow = ({ total }) => (
    <div className="flex items-center justify-between mt-6">
      <button
        onClick={() => prev(total)}
        className="h-9 w-9 rounded-full border border-white/15 hover:border-orange-500/60 hover:bg-orange-500/10 flex items-center justify-center transition-colors"
      >
        <FaChevronLeft className="text-sm text-white/60" />
      </button>
      <Dots total={total} active={page % total} onChange={setPage} />
      <button
        onClick={() => next(total)}
        className="h-9 w-9 rounded-full border border-white/15 hover:border-orange-500/60 hover:bg-orange-500/10 flex items-center justify-center transition-colors"
      >
        <FaChevronRight className="text-sm text-white/60" />
      </button>
    </div>
  );

  return (
    <section id="project" className="pb-16 pt-[5.5rem]">
      {/* ── Header row ── */}
      <div className="flex items-center justify-between mb-2">
        <Tittle>Project's</Tittle>
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
        >
          <Link
            to="/project"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-orange-500/40 text-orange-400 text-xs font-medium hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all"
          >
            View all →
          </Link>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0, x: 16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease, delay: 0.08 }}
        className="text-right my-5 font-medium text-lg"
      >
        Design. Develop. Deliver.
      </motion.p>

      {/* ── Loading ── */}
      {isProjectLoading && (
        <div className="flex justify-center items-center h-[300px]">
          <DotLoader color="#f97316" size={50} />
        </div>
      )}

      {/* ── DESKTOP: 3 cards ── */}
      {!isProjectLoading && (
        <div className="hidden lg:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={page + "desktop"}
              initial={{ opacity: 0, x: 36 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -36 }}
              transition={{ duration: 0.32, ease }}
              className="grid grid-cols-3 gap-5 items-stretch"
            >
              {sliceDesktop.map((project) => (
                <ProjectCard data={project} key={project._id} />
              ))}
            </motion.div>
          </AnimatePresence>
          <NavRow total={totalDesktop} />
        </div>
      )}

      {/* ── TABLET: 2 cards ── */}
      {!isProjectLoading && (
        <div className="hidden sm:block lg:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={page + "tablet"}
              initial={{ opacity: 0, x: 36 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -36 }}
              transition={{ duration: 0.32, ease }}
              className="grid grid-cols-2 gap-4 items-stretch"
            >
              {sliceTablet.map((project) => (
                <ProjectCard data={project} key={project._id} />
              ))}
            </motion.div>
          </AnimatePresence>
          <NavRow total={totalTablet} />
        </div>
      )}

      {/* ── MOBILE: 1 card ── */}
      {!isProjectLoading && (
        <div className="block sm:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={page + "mobile"}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3, ease }}
            >
              {sliceMobile[0] && <ProjectCard data={sliceMobile[0]} key={sliceMobile[0]._id} />}
            </motion.div>
          </AnimatePresence>
          <NavRow total={totalMobile} />
        </div>
      )}

      {/* Mobile "View all" link */}
      {!isProjectLoading && (
        <div className="flex justify-end mt-6 sm:hidden">
          <Link
            to="/project"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-orange-500/40 text-orange-400 text-xs font-medium hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all"
          >
            View all →
          </Link>
        </div>
      )}
    </section>
  );
};

export default Projects;
