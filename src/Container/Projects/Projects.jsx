import React, { useState } from "react";
import { motion } from "framer-motion";
import Cookies from "js-cookie";


import { mrProjectList } from "../../Asserts/content";
import Tittle from "../../components/Tittle/Tittle";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const domainUrl = {loaclHost:"http://localhost:3010", cloud:"https://portfolio-server-9ly0.onrender.com"};

const Projects = () => {
  const [page, setPage] = useState(2);
  const [dbProjectList, setDbProjectList] = useState([]);

  useState(async () => {
    const url = `${domainUrl.cloud}/user/project`;
    const option = {
      method: "get",
      headers: {
        Authoriaztion: `Bearer ${Cookies.get("user_token")}`,
      },
    };
    const res = await fetch(url, option);
    const projectList = await res.json();
    setDbProjectList(projectList);
  }, []);



  return (
    <section id="project" className="min-h-screen pb-10 pt-[5.5rem]">
      <Tittle>Project's</Tittle>
      <motion.h1
        whileInView={{ opacity: [0, 1], x: [10, 0] }}
        transition={{ duration: 0.5 }}
        className="text-right my-5  font-medium text-lg"
      >
        Design. Develop. Deliver.
      </motion.h1>
      <ul className="flex flex-wrap gap-8 justify-center mb-5">
        {dbProjectList.slice(0, page).map((each, i) => (
          <ProjectCard each={each} key={i+"project"} i = {i} />
        ))}
      </ul>
      <div className="flex items-center">
        <motion.button
          whileInView={{ opacity: [0, 1], y: [150, 0] }}
          transition={{ duration: 0.35 }}
          type="button"
          className="inline-flex mx-auto h-full animate-background-shine cursor-pointer items-center justify-center rounded-full border border-gray-800 bg-[linear-gradient(110deg,#000,45%,#4D4B4B,55%,#000)] bg-[length:250%_100%] px-3 py-1 text-md font-medium text-gray-300"
          onClick={() =>
            setPage((pre) => (pre >= mrProjectList.length ? pre - 2 : pre + 2))
          }
        >
          {page >= mrProjectList.length ? "Less..." : "Show..."}
        </motion.button>
      </div>
    </section>
  );
};

export default Projects;
