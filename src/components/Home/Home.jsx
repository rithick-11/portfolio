import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaInstagram, FaGithub, FaArrowDown } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import nodeLogo from "../../Asserts/node.png";
import reactLogo from "../../Asserts/react.png";
import pythonLogo from "../../Asserts/python.png";
import { ease } from "../../lib/animations";

const socialLinks = [
  { href: "https://www.linkedin.com/in/rithickroshan-s", icon: <FaLinkedinIn />, label: "LinkedIn" },
  { href: "https://github.com/rithick-11", icon: <FaGithub />, label: "GitHub" },
  { href: "https://www.instagram.com/s.ri_thick", icon: <FaInstagram />, label: "Instagram" },
  { href: "https://twitter.com/rithick__11", icon: <FaXTwitter />, label: "Twitter" },
];

const stats = [
  { value: "8+", label: "Projects" },
  { value: "200+", label: "DSA Solved" },
  { value: "4", label: "Certifications" },
];

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row md:items-center
                 min-h-screen
                 pt-24 pb-12
                 md:pt-0 md:pb-0 md:h-screen"
    >
      {/* ── Subtle grid background ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right,rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.03) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* ── Orange glow orb ── */}
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* ════ INNER LAYOUT ════ */}
      <div className="relative z-10 flex flex-col md:grid md:grid-cols-2 items-center gap-8 md:gap-16 w-full">

        {/* ════ RIGHT COLUMN: Profile visual (shows first on mobile) ════ */}
        <div className="flex items-center justify-center order-1 md:order-2">

          {/* Profile + badges wrapper */}
          <div className="relative py-7 px-2 sm:px-14">

            {/* Decorative spinning ring — grows with image */}
            <motion.div
              className="absolute rounded-full border border-dashed border-orange-500/15"
              style={{ height: 240, width: 240, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            />

            {/* Profile image — 160px mobile / 200px md / 270px lg */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, ease, delay: 0.1 }}
              className="rounded-full overflow-hidden border-2 border-white/10 h-40 w-40 md:h-52 md:w-52 lg:h-[270px] lg:w-[270px]"
              style={{ boxShadow: "0 0 60px rgba(249,115,22,0.22), 0 0 0 1px rgba(249,115,22,0.22)" }}
            >
              <img
                src="https://res.cloudinary.com/dwpmsw2i4/image/upload/v1745361996/profile_pic_v1_jv5lvw.jpg"
                alt="RithickRoshan S"
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* ── Floating tech badges — hidden on xs, shown sm+ ── */}
            {/* React — top right */}
            <motion.div
              className="hidden sm:flex absolute items-center gap-1.5 bg-white/7 backdrop-blur-md border border-white/12 rounded-xl px-2.5 py-1.5 shadow-lg"
              style={{ top: 0, right: -10 }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, ease, delay: 0.65 }}
            >
              <motion.img
                src={reactLogo}
                alt="React"
                className="h-4 w-4"
                animate={{ rotate: 360 }}
                transition={{ duration: 7, ease: "linear", repeat: Infinity }}
              />
              <span className="text-xs text-white/70 font-medium">React</span>
            </motion.div>

            {/* Node.js — middle left */}
            <motion.div
              className="hidden sm:flex absolute items-center gap-1.5 bg-white/7 backdrop-blur-md border border-white/12 rounded-xl px-2.5 py-1.5 shadow-lg"
              style={{ top: "50%", left: -20, transform: "translateY(-50%)" }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, ease, delay: 0.77 }}
            >
              <img src={nodeLogo} alt="Node.js" className="h-4 w-4" />
              <span className="text-xs text-white/70 font-medium">Node.js</span>
            </motion.div>

            {/* Python — bottom right */}
            <motion.div
              className="hidden sm:flex absolute items-center gap-1.5 bg-white/7 backdrop-blur-md border border-white/12 rounded-xl px-2.5 py-1.5 shadow-lg"
              style={{ bottom: 0, right: -4 }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, ease, delay: 0.89 }}
            >
              <img src={pythonLogo} alt="Python" className="h-4 w-4" />
              <span className="text-xs text-white/70 font-medium">Python</span>
            </motion.div>

            {/* ── Mobile-only: compact tech icons row (no overlap) ── */}
            <div className="flex sm:hidden justify-center gap-2 mt-4 absolute -bottom-10 left-1/2 -translate-x-1/2">
              {[
                { logo: reactLogo, name: "React" },
                { logo: nodeLogo, name: "Node" },
                { logo: pythonLogo, name: "Python" },
              ].map((t) => (
                <div
                  key={t.name}
                  className="flex items-center gap-1 bg-white/7 border border-white/12 backdrop-blur-md rounded-full px-2 py-1"
                >
                  <img src={t.logo} alt={t.name} className="h-3.5 w-3.5" />
                  <span className="text-[10px] text-white/60">{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ════ LEFT COLUMN: Text content ════ */}
        <div className="flex flex-col gap-4 text-center md:text-left order-2 md:order-1 mt-8 sm:mt-12 md:mt-0">


          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.08 }}
            className="text-white/45 text-sm"
          >
            👋 Hi, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.15 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight"
          >
            <span className="text-orange-500">R</span>ithickRoshan
            <span className="block text-white/60 text-2xl sm:text-3xl md:text-4xl font-semibold">S</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-orange-400 font-medium text-base"
            style={{ minHeight: "1.75rem" }}
          >
            <Typewriter
              options={{
                strings: ["MERN Stack Developer", "Cyber Security Enthusiast", "Open Source Builder"],
                autoStart: true,
                loop: true,
                deleteSpeed: 35,
                delay: 65,
              }}
            />
          </motion.div>

          {/* Available badge — lives below name/role for better visual hierarchy */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease, delay: 0.34 }}
            className="inline-flex self-center md:self-start"
          >
            <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/25 backdrop-blur-md rounded-full px-3 py-1.5">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-green-400 font-medium">Open to opportunities</span>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease, delay: 0.38 }}
            className="text-sm text-white/50 leading-relaxed max-w-sm mx-auto md:mx-0"
          >
            Building secure, scalable web apps with React, Node.js & Python.
            Passionate about problem-solving and clean code.
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.44 }}
            className="flex items-center gap-6 justify-center md:justify-start"
          >
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col items-center md:items-start">
                <span className="text-xl font-bold text-orange-500">{s.value}</span>
                <span className="text-xs text-white/40">{s.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.5 }}
            className="flex items-center gap-3 flex-wrap justify-center md:justify-start"
          >
            <button
              onClick={() => scrollTo("project")}
              className="px-6 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold transition-colors shadow-lg shadow-orange-500/30 cursor-pointer"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="px-6 py-2.5 rounded-full border border-white/15 hover:border-orange-500/50 hover:bg-orange-500/10 text-white/65 hover:text-white text-sm font-semibold transition-all cursor-pointer"
            >
              Get in touch
            </button>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.58 }}
            className="flex items-center gap-2 justify-center md:justify-start pb-2"
          >
            {socialLinks.map((s, i) => (
              <motion.a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease, delay: 0.62 + i * 0.07 }}
                className="h-9 w-9 rounded-full border border-white/12 bg-white/5 hover:bg-orange-500/15 hover:border-orange-500/50 flex items-center justify-center text-white/55 hover:text-orange-400 transition-all text-sm"
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator — desktop only ── */}
      <motion.button
        onClick={() => scrollTo("about")}
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 text-white/25 hover:text-orange-400 transition-colors cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <FaArrowDown className="text-xs" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Home;
