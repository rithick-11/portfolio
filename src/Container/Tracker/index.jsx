import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode, FaFire, FaStar } from "react-icons/fa";
import Tittle from "../../components/Tittle/Tittle";
import { ease } from "../../lib/animations";

const GITHUB_USER = "rithick-11";

// ── Lazy image with error fallback ──
const StatImg = ({ src, alt, delay = 0, className = "", fallbackText = "" }) => {
  const [broken, setBroken] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, ease, delay }}
      className={`rounded-xl overflow-hidden border border-white/10 bg-black/30 ${className}`}
    >
      {broken ? (
        <div className="flex items-center justify-center h-32 text-white/30 text-sm gap-2">
          <FaGithub />
          <span>{fallbackText || alt} — temporarily unavailable</span>
        </div>
      ) : (
        <>
          {!loaded && (
            <div className="h-32 w-full animate-pulse bg-white/5 rounded-xl" />
          )}
          <img
            src={src}
            alt={alt}
            onLoad={() => setLoaded(true)}
            onError={() => setBroken(true)}
            className={`w-full h-auto transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0 h-0"}`}
            loading="lazy"
          />
        </>
      )}
    </motion.div>
  );
};

const Tracker = () => {
  // Use cache_seconds=86400 to reduce rate-limit chance on vercel stats
  const statsUrl   = `https://github-readme-stats.vercel.app/api?username=${GITHUB_USER}&show_icons=true&count_private=true&theme=react&hide_border=true&bg_color=0d0d0d&title_color=f97316&text_color=c9d1d9&icon_color=f97316&cache_seconds=86400`;
  const streakUrl  = `https://streak-stats.demolab.com/?user=${GITHUB_USER}&theme=radical&hide_border=true&background=0d0d0d&ring=f97316&fire=f97316&currStreakLabel=f97316&sideLabels=c9d1d9&dates=c9d1d9&sideNums=f97316&currStreakNum=ffffff`;
  const langsUrl   = `https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USER}&layout=compact&theme=react&hide_border=true&bg_color=0d0d0d&title_color=f97316&text_color=c9d1d9&cache_seconds=86400`;
  const graphUrl   = `https://github-readme-activity-graph.vercel.app/graph?username=${GITHUB_USER}&theme=react-dark&hide_border=true&bg_color=0d0d0d&color=f97316&line=f97316&point=ffffff&area=true&area_color=f97316&hide_title=false`;
  const heatmapUrl = `https://ghchart.rshah.org/${GITHUB_USER}`;

  return (
    <section id="github-stats" className="h-auto pb-10 pt-[5.5rem]">
      {/* ── Header ── */}
      <div className="flex items-center justify-between mb-8">
        <Tittle>GitHub Stats</Tittle>
        <motion.a
          href={`https://github.com/${GITHUB_USER}`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease }}
          className="hidden sm:flex items-center gap-2 text-xs border border-white/15 hover:border-orange-500/50 hover:bg-orange-500/10 text-white/60 hover:text-white transition-all px-3 py-1.5 rounded-full"
        >
          <FaGithub />
          @{GITHUB_USER}
          <FaExternalLinkAlt className="text-[10px]" />
        </motion.a>
      </div>

      {/* ── Activity Graph (full width) ── */}
      <StatImg
        src={graphUrl}
        alt="GitHub Activity Graph"
        fallbackText="Activity Graph"
        delay={0}
        className="mb-5"
      />

      {/* ── Contribution Heatmap ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.55, ease, delay: 0.08 }}
        className="mb-5 rounded-xl border border-white/10 bg-black/30 px-4 py-5"
      >
        <p className="text-xs text-white/40 uppercase tracking-widest font-semibold mb-4 flex items-center gap-2">
          <FaGithub className="text-orange-500" />
          Contribution Calendar
        </p>
        <ContributionHeatmap url={heatmapUrl} />
        <div className="flex items-center justify-end gap-1.5 mt-3">
          <span className="text-xs text-white/30">Less</span>
          {["bg-[#161b22]", "bg-[#0e4429]", "bg-[#006d32]", "bg-[#26a641]", "bg-[#39d353]"].map((c, i) => (
            <span key={i} className={`inline-block h-3 w-3 rounded-sm ${c}`} />
          ))}
          <span className="text-xs text-white/30">More</span>
        </div>
      </motion.div>

      {/* ── Stats Row ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <StatImg src={statsUrl}  alt="GitHub Stats"  fallbackText="GitHub Stats"  delay={0.12} />
        <StatImg src={streakUrl} alt="GitHub Streak" fallbackText="Streak Stats"  delay={0.2} />
      </div>

      {/* ── Top Languages ── */}
      <StatImg
        src={langsUrl}
        alt="Top Languages"
        fallbackText="Top Languages"
        delay={0.28}
        className="sm:w-1/2"
      />
    </section>
  );
};

// Separate heatmap component with its own error state
const ContributionHeatmap = ({ url }) => {
  const [broken, setBroken]   = useState(false);
  const [loaded, setLoaded]   = useState(false);

  if (broken) {
    return (
      <div className="flex items-center justify-center h-24 text-white/30 text-sm gap-2">
        <FaGithub /> Contribution heatmap — temporarily unavailable
      </div>
    );
  }

  return (
    <>
      {!loaded && <div className="h-24 animate-pulse bg-white/5 rounded-lg mb-2" />}
      <img
        src={url}
        alt="GitHub Contribution Calendar"
        onLoad={() => setLoaded(true)}
        onError={() => setBroken(true)}
        className={`w-full h-auto rounded transition-opacity duration-300 ${loaded ? "opacity-90" : "opacity-0 h-0"}`}
        loading="lazy"
      />
    </>
  );
};

export default Tracker;