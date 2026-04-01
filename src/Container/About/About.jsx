import React from "react";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { FaCode, FaShieldAlt, FaLaptopCode, FaTrophy } from "react-icons/fa";
import Tittle from "../../components/Tittle/Tittle";
import { ease } from "../../lib/animations";

const highlights = [
  {
    icon: <FaLaptopCode className="text-orange-500 text-lg" />,
    label: "Degree",
    value: "B.E. Cyber Security",
    sub: "Mahendra Engineering · 2022–2026",
  },
  {
    icon: <FaCode className="text-sky-400 text-lg" />,
    label: "Stack",
    value: "MERN Stack",
    sub: "React · Node · Express · MongoDB",
  },
  {
    icon: <FaShieldAlt className="text-emerald-400 text-lg" />,
    label: "Interest",
    value: "Cyber Security",
    sub: "Security, Ethical Hacking",
  },
  {
    icon: <FaTrophy className="text-yellow-400 text-lg" />,
    label: "Achievement",
    value: "3rd @ CATCH '25",
    sub: "Competitive Coding Contest",
  },
];

const About = () => {
  return (
    <section id="about" className="h-auto pb-10 pt-[5.5rem]">
      <Tittle>About Me</Tittle>

      {/* Sub-heading quote */}
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease, delay: 0.05 }}
        className="text-white/40 text-sm italic mt-2 mb-10"
      >
        "Passionate about crafting secure, scalable software — one line at a time."
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        {/* ── Left: Text + highlight cards ── */}
        <div className="flex flex-col gap-6">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease }}
            className="text-sm text-white/70 leading-relaxed indent-6"
          >
            Hello! I'm <span className="text-orange-400 font-semibold">Rithickroshan S</span>, a
            dedicated software developer with a strong foundation in JavaScript, React JS, and Python.
            I thrive on solving complex problems and continuously learning new technologies to build
            efficient and scalable web applications.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease, delay: 0.12 }}
            className="text-sm text-white/55 leading-relaxed indent-6"
          >
            My curiosity for how things work behind the scenes led me to explore various programming
            languages and frameworks, eventually honing my skills in the MERN stack. I enjoy building
            dynamic, interactive user interfaces alongside secure, robust back-end systems.
          </motion.p>

          {/* ── Highlight cards grid ── */}
          <div className="grid grid-cols-2 gap-3 mt-2">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, ease, delay: i * 0.1 }}
                className="flex flex-col gap-2 p-4 rounded-2xl bg-white/5 border border-white/8 hover:border-orange-500/30 hover:bg-orange-500/5 transition-all group"
              >
                <div className="flex items-center gap-2">
                  {h.icon}
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/35">
                    {h.label}
                  </span>
                </div>
                <p className="text-sm font-semibold text-white/90 leading-tight">{h.value}</p>
                <p className="text-[11px] text-white/40 leading-snug">{h.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Right: Lottie ── */}
        <motion.div
          initial={{ opacity: 0, x: 36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease, delay: 0.08 }}
          className="flex items-center justify-center"
        >
          <DotLottieReact
            src="https://lottie.host/b1565cf9-d7b3-4ff0-b77f-559b6843d71f/gbhNN8Jvao.lottie"
            loop
            autoplay
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
