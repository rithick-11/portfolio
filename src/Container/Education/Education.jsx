import React from "react";
import { motion } from "framer-motion";
import {
  IoSchoolOutline,
  IoLocationOutline,
} from "react-icons/io5";

import { FaGraduationCap, FaBook } from "react-icons/fa";
import Tittle from "../../components/Tittle/Tittle";
import { ease } from "../../lib/animations";

const educationData = [
  {
    degree: "B.E. Cyber Security",
    institute: "Mahendra Engineering College",
    location: "Namakkal, Tamil Nadu",
    duration: "2022 – 2026",
    type: "Bachelor's Degree",
    icon: <FaGraduationCap className="text-orange-500 text-xl" />,
    highlights: ["MERN Stack", "Cyber Security", "Data Structures"],
    current: true,
  },
  {
    degree: "HSC — Maths & Computer Science",
    institute: "Model School, Karimangalam",
    location: "Dharmapuri, Tamil Nadu",
    duration: "2019 – 2022",
    type: "Higher Secondary",
    icon: <FaBook className="text-sky-400 text-xl" />,
    highlights: ["Mathematics", "Computer Science", "Physics"],
    current: false,
  },
];

const Education = () => {
  return (
    <section id="education" className="h-auto pb-12 pt-[5.5rem]">
      <Tittle>Education</Tittle>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease }}
        className="text-white/40 text-sm mt-2 mb-10"
      >
        My academic journey and the foundations that shaped my technical mind.
      </motion.p>

      {/* ── Timeline wrapper ── */}
      <div className="relative">
        {/* Vertical line — visible on md+ */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500/50 via-white/10 to-transparent" />

        <div className="flex flex-col gap-8">
          {educationData.map((edu, i) => (
            <motion.div
              key={edu.institute}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease, delay: i * 0.15 }}
              className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* ── Card ── */}
              <div
                className={`w-full md:w-[calc(50%-2.5rem)] group relative rounded-2xl p-5 border transition-all
                  ${
                    edu.current
                      ? "bg-orange-500/5 border-orange-500/30 hover:border-orange-500/60"
                      : "bg-white/5 border-white/10 hover:border-white/25"
                  }`}
              >
                {/* Current badge */}
                {edu.current && (
                  <span className="absolute top-4 right-4 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-orange-400 bg-orange-500/10 border border-orange-500/25 rounded-full px-2.5 py-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse" />
                    Current
                  </span>
                )}

                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className={`p-2.5 rounded-xl flex-shrink-0 ${
                      edu.current ? "bg-orange-500/10" : "bg-sky-500/10"
                    }`}
                  >
                    {edu.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                      <p className="text-[11px] text-white/35 font-semibold uppercase tracking-widest">
                        {edu.type}
                      </p>
                      <span className="text-[10px] text-orange-400 font-bold bg-orange-500/10 border border-orange-500/20 rounded-full px-2 py-0.5">
                        {edu.duration}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white/95 leading-snug">
                      {edu.degree}
                    </h3>
                  </div>
                </div>

                {/* Institute + meta */}
                <div className="flex flex-col gap-1.5 mb-4">
                  <div className="flex items-center gap-1.5 text-sm text-white/70 font-medium">
                    <IoSchoolOutline className="text-orange-500 flex-shrink-0" />
                    {edu.institute}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-white/40">
                    <IoLocationOutline className="flex-shrink-0" />
                    {edu.location}
                  </div>

                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {edu.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-white/8 border border-white/10 text-white/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* ── Timeline dot (desktop only) ── */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 h-5 w-5 rounded-full border-2 border-orange-500 bg-neutral-950 items-center justify-center">
                <div
                  className={`h-2 w-2 rounded-full ${
                    edu.current ? "bg-orange-500 animate-pulse" : "bg-orange-500/50"
                  }`}
                />
              </div>

              {/* Spacer for the other half on desktop */}
              <div className="hidden md:block w-[calc(50%-2.5rem)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
