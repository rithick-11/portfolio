import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import LoginCard from "../LoginCard/LoginCard";
import UserData from "../UserData/UserData";
import { ease } from "../../lib/animations";

const navLinks = [
  { label: "Home",           id: "home" },
  { label: "About",          id: "about" },
  { label: "Education",      id: "education" },
  { label: "Skills",         id: "skills" },
  { label: "Projects",       id: "project" },
  { label: "Certifications", id: "certifications" },
  { label: "Contact",        id: "contact" },
];

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const Navbar = () => {
  const { scrollY } = useScroll();
  const [toggle, setToggle]     = useState(false);
  const [navShow, setNavShow]   = useState(true);
  const [showLogin, setShowLogin] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > scrollY.getPrevious() && latest > 150) {
      setNavShow(false);
      setToggle(false);
    } else {
      setNavShow(true);
    }
  });

  return (
    <>
      {/* ── Main nav bar ── */}
      <motion.header
        variants={{ visible: { y: 0, opacity: 1 }, hidden: { y: "-110%", opacity: 0 } }}
        animate={navShow ? "visible" : "hidden"}
        transition={{ duration: 0.4, ease }}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-10 md:px-20 py-4"
      >
        <nav className="flex items-center justify-between px-5 py-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg shadow-black/30">

          {/* Logo */}
          <button
            onClick={() => scrollTo("home")}
            className="text-xl font-bold tracking-tight cursor-pointer text-white"
          >
            Rithic<span className="text-orange-500">K</span>
          </button>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className="relative px-3 py-1.5 text-sm text-white/55 hover:text-white transition-colors rounded-lg hover:bg-white/5 group cursor-pointer"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-orange-500 group-hover:w-[60%] transition-all duration-300 rounded-full" />
                </button>
              </li>
            ))}
          </ul>

          {/* Right: auth + hamburger */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <UserData setShowLogin={setShowLogin} />
            </div>
            <button
              onClick={() => setToggle((p) => !p)}
              className="lg:hidden h-9 w-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:border-orange-500/40 transition-all"
              aria-label="Toggle menu"
            >
              {toggle ? <HiX className="text-lg" /> : <HiMenuAlt3 className="text-lg" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* ── Mobile full-screen drawer ── */}
      <AnimatePresence>
        {toggle && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="fixed inset-0 bg-black/65 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setToggle(false)}
            />

            {/* Side panel */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease }}
              className="fixed right-0 top-0 h-full w-72 bg-neutral-950 border-l border-white/10 z-50 flex flex-col lg:hidden"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <span className="font-bold text-lg">
                  Rithic<span className="text-orange-500">K</span>
                </span>
                <button
                  onClick={() => setToggle(false)}
                  className="h-8 w-8 rounded-lg border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
                >
                  <HiX />
                </button>
              </div>

              {/* Links */}
              <ul className="flex flex-col gap-1 px-4 py-6 flex-1 overflow-y-auto">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.25, ease }}
                  >
                    <button
                      onClick={() => { scrollTo(link.id); setToggle(false); }}
                      className="w-full text-left px-4 py-3 rounded-xl text-white/60 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all text-sm"
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>

              {/* Drawer footer */}
              <div className="px-6 py-5 border-t border-white/10">
                <UserData setShowLogin={setShowLogin} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {showLogin && <LoginCard close={() => setShowLogin(false)} />}
    </>
  );
};

export default Navbar;
