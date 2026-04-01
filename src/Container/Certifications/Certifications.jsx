import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaAward, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Tittle from "../../components/Tittle/Tittle";
import { certifications } from "../../lib/data";
import { ease } from "../../lib/animations";

// ── Pagination dots (identical to Projects & LinkedIn Posts) ──
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

// ── Cert card ──
const CertCard = ({ cert }) => (
  <div className="group relative flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-orange-500/40 hover:bg-orange-500/5 transition-all h-full">
    {/* Thumbnail */}
    <div className="relative overflow-hidden aspect-video bg-black/40 flex-shrink-0">
      <img
        src={cert.imageUrl}
        alt={cert.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold transition-colors shadow-lg shadow-orange-500/30"
          onClick={(e) => e.stopPropagation()}
        >
          View Certificate <FaExternalLinkAlt className="text-[9px]" />
        </a>
      </div>
    </div>

    {/* Body */}
    <div className="p-4 flex flex-col gap-3 flex-1">
      {/* Title row */}
      <div className="flex items-start justify-between gap-2 flex-wrap">
        <div className="flex items-start gap-2">
          <div className="p-1.5 rounded-lg bg-orange-500/10 flex-shrink-0 mt-0.5">
            <FaAward className="text-orange-500 text-xs" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white/90 leading-snug">{cert.name}</h3>
            <p className="text-xs text-white/40 mt-0.5">{cert.provider}</p>
          </div>
        </div>
        <span className="text-[10px] text-orange-400 font-semibold bg-orange-500/10 border border-orange-500/20 rounded-full px-2 py-1 whitespace-nowrap flex-shrink-0">
          {cert.receivedDate}
        </span>
      </div>

      {/* Skill tags */}
      <div className="flex flex-wrap gap-1.5">
        {cert.skills.map((skill) => (
          <span
            key={skill}
            className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-white/8 border border-white/10 text-white/50"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Footer link */}
      <a
        href={cert.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto flex items-center gap-1.5 text-xs text-orange-400/70 hover:text-orange-400 transition-colors font-medium pt-1"
      >
        Verify credential <FaExternalLinkAlt className="text-[9px]" />
      </a>
    </div>
  </div>
);

// ── Nav row (identical to Projects section) ──
const NavRow = ({ total, page, setPage, prev, next }) => (
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

// ── Section ──
const Certifications = () => {
  const [page, setPage] = useState(0);

  const DESKTOP = 3;
  const TABLET  = 2;
  const MOBILE  = 1;

  const totalDesktop = Math.max(1, Math.ceil(certifications.length / DESKTOP));
  const totalTablet  = Math.max(1, Math.ceil(certifications.length / TABLET));
  const totalMobile  = Math.max(1, Math.ceil(certifications.length / MOBILE));

  const sliceDesktop = certifications.slice(page * DESKTOP, page * DESKTOP + DESKTOP);
  const sliceTablet  = certifications.slice(page * TABLET,  page * TABLET  + TABLET);
  const sliceMobile  = certifications.slice(page * MOBILE,  page * MOBILE  + MOBILE);

  const prev = (total) => setPage((p) => (p - 1 + total) % total);
  const next = (total) => setPage((p) => (p + 1) % total);

  const navProps = { page, setPage, prev, next };

  return (
    <section id="certifications" className="pb-12 pt-[5.5rem]">
      <Tittle>Certifications</Tittle>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease }}
        className="text-white/40 text-sm mt-2 mb-10"
      >
        Industry-recognised credentials that validate my technical expertise.
      </motion.p>

      {/* ── DESKTOP: 3 cards ── */}
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
            {sliceDesktop.map((cert) => (
              <CertCard key={cert.name} cert={cert} />
            ))}
          </motion.div>
        </AnimatePresence>
        <NavRow total={totalDesktop} {...navProps} />
      </div>

      {/* ── TABLET: 2 cards ── */}
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
            {sliceTablet.map((cert) => (
              <CertCard key={cert.name} cert={cert} />
            ))}
          </motion.div>
        </AnimatePresence>
        <NavRow total={totalTablet} {...navProps} />
      </div>

      {/* ── MOBILE: 1 card ── */}
      <div className="block sm:hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={page + "mobile"}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3, ease }}
          >
            {sliceMobile[0] && <CertCard cert={sliceMobile[0]} />}
          </motion.div>
        </AnimatePresence>
        <NavRow total={totalMobile} {...navProps} />
      </div>
    </section>
  );
};

export default Certifications;
