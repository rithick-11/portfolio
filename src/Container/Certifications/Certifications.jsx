import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaAward } from "react-icons/fa";
import Tittle from "../../components/Tittle/Tittle";
import { certifications } from "../../lib/data";
import { ease } from "../../lib/animations";

const CertificationCard = ({ cert, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.5, ease, delay }}
    className="group relative flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-orange-500/40 hover:bg-orange-500/5 transition-all"
  >
    {/* ── Thumbnail ── */}
    <div className="relative overflow-hidden aspect-video bg-black/40 flex-shrink-0">
      <img
        src={cert.imageUrl}
        alt={cert.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      {/* Hover overlay with CTA */}
      <div className="absolute inset-0 bg-black/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold transition-colors shadow-lg shadow-orange-500/30"
          onClick={(e) => e.stopPropagation()}
        >
          View Certificate
          <FaExternalLinkAlt className="text-[9px]" />
        </a>
      </div>
    </div>

    {/* ── Card body ── */}
    <div className="p-4 flex flex-col gap-3 flex-1">
      {/* Title row */}
      <div className="flex items-start justify-between gap-2">
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
  </motion.div>
);

const Certifications = () => {
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((cert, i) => (
          <CertificationCard key={cert.name} cert={cert} delay={i * 0.12} />
        ))}
      </div>
    </section>
  );
};

export default Certifications;
