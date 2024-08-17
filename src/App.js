import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Toaster } from "sonner";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./Container/About/About";
import Education from "./Container/Education/Education";
import Skills from "./Container/Skills/Skills";
import Projects from "./Container/Projects/Projects";
import Contact from "./Container/Contact/Contact";

import PortfolioContext from "./Context/PortfolioContext";

import { mrProjectList } from "./Asserts/content";

const domainUrl = {
  loaclHost: "http://localhost:3010",
  cloud: "https://portfolio-server-9ly0.onrender.com",
};

const App = () => {
  const [userDetail, setUserData] = useState({});
  const [projectListState, setProjectList] = useState({
    isLoading: false,
    projectList: [],
  });

  const getUserData = async () => {
    if (Cookies.get("user_token") !== undefined) {
      const url = `${domainUrl.cloud}/user/data`;
      const option = {
        method: "get",
        headers: {
          Authoriaztion: `Bearer ${Cookies.get("user_token")}`,
        },
      };
      try {
        const res = await fetch(url, option);
        const user = await res.json();
        setUserData(user);
      } catch (err) {
        console.log("cannot fetch user data");
        setUserData({ name: "user", username: "" });
      }
    }
  };

  const getProjectList = async () => {
    setProjectList((pre) => ({ ...pre, isLoading: true }));
    const url = `${domainUrl.cloud}/user/project`;
    const option = {
      method: "get",
      headers: {
        Authoriaztion: `Bearer ${Cookies.get("user_token")}`,
      },
    };
    try {
      const res = await fetch(url, option);
      const projectList = await res.json();
      setProjectList({ isLoading: false, projectList });
    } catch (err) {
      setProjectList({ isLoading: false, projectList: mrProjectList });
    }
  };

  useEffect(() => {
    getUserData();
    getProjectList();
  }, []);

  return (
    <PortfolioContext.Provider
      value={{projectListState, userDetail, getUserData, getProjectList}}
    >
      <Navbar />
      <div className="top-0 right-0 left-0 h-screen text-white px-4 sm:px-16 md:px-24 scroll-smooth">
        <Home />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <div class="fixed top-0 right-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      <Toaster position="bottom-center" />
    </PortfolioContext.Provider>
  );
};

export default App;
