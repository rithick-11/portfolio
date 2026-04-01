import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tittle from "../../components/Tittle/Tittle";
import { ease } from "../../lib/animations";
import bootstapLogo  from "../../Asserts/bootstrap.png";
import cssLogo       from "../../Asserts/css.png";
import htmlLogo      from "../../Asserts/html.png";
import javaLogo      from "../../Asserts/java.png";
import jasvascriptLogo from "../../Asserts/javascript.png";
import mongoDbLogo   from "../../Asserts/mangoDB.png";
import nodeLogo      from "../../Asserts/node.png";
import pythonLogo    from "../../Asserts/python.png";
import reactLogo     from "../../Asserts/react.png";
import expressLogo   from "../../Asserts/express.png";
import sqlLogo       from "../../Asserts/sql.png";
import tailwindLogo  from "../../Asserts/tailwind.png";

// ── Category config ──
const CATS = ["All", "Frontend", "Backend", "Database", "Language"];

// Proficiency level → colour
const levelStyle = {
  Expert:       "text-orange-400  bg-orange-400/10  border-orange-400/25",
  Advanced:     "text-sky-400     bg-sky-400/10      border-sky-400/25",
  Intermediate: "text-emerald-400 bg-emerald-400/10  border-emerald-400/25",
};

const skillsList = [
  { name: "HTML",       logo: htmlLogo,        category: "Frontend",  level: "Expert"       },
  { name: "CSS",        logo: cssLogo,         category: "Frontend",  level: "Expert"       },
  { name: "JavaScript", logo: jasvascriptLogo, category: "Frontend",  level: "Advanced"     },
  { name: "React",      logo: reactLogo,       category: "Frontend",  level: "Advanced"     },
  { name: "Tailwind",   logo: tailwindLogo,    category: "Frontend",  level: "Advanced"     },
  { name: "Bootstrap",  logo: bootstapLogo,    category: "Frontend",  level: "Intermediate" },
  { name: "Node.js",    logo: nodeLogo,        category: "Backend",   level: "Advanced"     },
  { name: "Express",    logo: expressLogo,     category: "Backend",   level: "Advanced"     },
  { name: "Python",     logo: pythonLogo,      category: "Language",  level: "Advanced"     },
  { name: "Java",       logo: javaLogo,        category: "Language",  level: "Intermediate" },
  { name: "MySQL",      logo: sqlLogo,         category: "Database",  level: "Intermediate" },
  { name: "MongoDB",    logo: mongoDbLogo,     category: "Database",  level: "Intermediate" },
];

// ── Skill card ──
const SkillCard = ({ skill, delay }) => (
  <motion.div
    layout
    key={skill.name}
    initial={{ opacity: 0, scale: 0.88 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.88 }}
    transition={{ duration: 0.3, ease, delay }}
    className="group flex flex-col items-center gap-2 p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/8 hover:border-orange-500/40 hover:bg-orange-500/5 transition-all cursor-default"
  >
    <div className="p-2.5 rounded-xl bg-white/10 group-hover:bg-orange-500/10 transition-colors">
      <img src={skill.logo} alt={skill.name} className="h-8 w-8 sm:h-10 sm:w-10 drop-shadow-md" />
    </div>
    <span className="text-xs font-semibold text-center text-white/80 leading-snug">{skill.name}</span>
  </motion.div>
);

const Skills = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? skillsList : skillsList.filter((s) => s.category === active);

  return (
    <section id="skills" className="min-h-screen pb-12 pt-[5.5rem]">
      <Tittle>Skills</Tittle>

      {/* Sub-heading */}
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease, delay: 0.05 }}
        className="text-white/45 text-sm mt-2 mb-8"
      >
        My technical toolkit — built through building, breaking, and learning.
      </motion.p>

      {/* ── Category filter tabs ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease }}
        className="flex flex-wrap gap-2 mb-8"
      >
        {CATS.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all border ${
              active === cat
                ? "bg-orange-500 border-orange-500 text-white shadow-md shadow-orange-500/30"
                : "bg-white/5 border-white/10 text-white/50 hover:text-white hover:border-white/25"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* ── Skills grid ── */}
      <motion.div layout className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} delay={i * 0.05} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Skills;
