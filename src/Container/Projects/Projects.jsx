import React, { useState, useContext } from "react";
import { motion } from "framer-motion";


import Tittle from "../../components/Tittle/Tittle";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { DotLoader } from "react-spinners";

import PortfolioContext from "../../Context/PortfolioContext";

const Projects = () => {
  const [page, setPage] = useState(2);
  const {projectListState} = useContext(PortfolioContext)

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
      {projectListState.isLoading ? (
        <div className="flex items-center justify-center h-[70vh]">
          <DotLoader color="#F97316" />
        </div>
      ) : (
        <>
          <ul className="flex flex-wrap gap-8 justify-center mb-5">
            {projectListState.projectList.slice(0, page).map((each, i) => (
              <ProjectCard
                data={each}
                key={each._id}
                i={i}
              />
            ))}
          </ul>
          <div className="flex items-center">
            <motion.button
              whileInView={{ opacity: [0, 1], y: [150, 0] }}
              transition={{ duration: 0.35 }}
              type="button"
              className="inline-flex mx-auto h-full animate-background-shine cursor-pointer items-center justify-center rounded-full border border-gray-800 bg-[linear-gradient(110deg,#000,45%,#4D4B4B,55%,#000)] bg-[length:250%_100%] px-3 py-1 text-md font-medium text-gray-300"
              onClick={() =>
                setPage((pre) =>
                  pre < projectListState.projectList.length ? pre + 2 : pre - 2
                )
              }
            >
              {page > projectListState.projectList.length ? "Less..." : "Show..."}
            </motion.button>
          </div>
        </>
      )}
    </section>
  );
};

export default Projects;
