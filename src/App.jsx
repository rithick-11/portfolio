import React, { useEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster } from "react-hot-toast";
import { pageVariants, pageTransition } from "./lib/animations";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./Container/About/About";
import Education from "./Container/Education/Education";
import Skills from "./Container/Skills/Skills";
import Projects from "./Container/Projects/Projects";
import useDataStore from "./store/useDataStore";
import Contact from "./Container/Contact/Contact";
import ActivitySection from "./components/ActivitySection/ActivitySection";
import Tracker from "./Container/Tracker";
import Certifications from "./Container/Certifications/Certifications";

import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";

// ── Smooth page transition wrapper ──
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={pageTransition}
        style={{ minHeight: "100vh" }}
      >
        <Routes location={location}>
          <Route path="/" element={<PortfolioHome />} />
          <Route path="/project" element={<ProjectsPage />} />
          <Route path="/project/:id" element={<ProjectDetailPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const PortfolioHome = () => (
  <div className="overflow-x-hidden">
    <Navbar />
    <div className="text-white px-4 sm:px-16 md:px-24 overflow-x-hidden">
      <Home />
      <About />
      <Education />
      <Skills />
      <Tracker />
      <Projects />
      <Certifications />
      <ActivitySection />
      <Contact />
    </div>
    <div className="fixed top-0 right-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
    <Toaster position="bottom-center" />
  </div>
);

const App = () => {
  const { getProject, getUserData, isAuthenticated } = useDataStore();

  useEffect(() => {
    getUserData();
    getProject();
  }, [isAuthenticated]);

  return (
    <HashRouter>
      <Toaster position="bottom-center" />
      <AnimatedRoutes />
    </HashRouter>
  );
};

export default App;
