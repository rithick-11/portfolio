import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./Container/About/About";
import Education from "./Container/Education/Education";
import Skills from "./Container/Skills/Skills";
import Projects from "./Container/Projects/Projects";

import useDataStore from "./store/useDataStore";
import Contact from "./Container/Contact/Contact";
import ActivitySection from "./components/ActivitySection/ActivitySection";
import CertificateSection from "./Container/CertificateSection/CertificateSection";

const App = () => {
  const { getProject, getUserData, isAuthenticated, countUser } =
    useDataStore();

  useEffect(() => {
    console.log(process.env.REACT_APP_MODE);
    countUser();
  }, []);

  useEffect(() => {
    getUserData();
    getProject();
  }, [isAuthenticated]);

  return (
    <div>
      <Navbar />
      <div className="top-0 right-0 left-0 h-screen text-white px-4 sm:px-16 md:px-24 scroll-smooth">
        <Home />
        <About />
        <Education />
        <Skills />
        <Projects />
        <ActivitySection />
        {/* <CertificateSection /> */}
        <Contact />
      </div>
      <div class="fixed top-0 right-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      <Toaster position="bottom-center" />
    </div>
  );
};

export default App;
