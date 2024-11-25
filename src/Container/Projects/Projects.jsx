import React from "react";
import { motion } from "framer-motion";

import Tittle from "../../components/Tittle/Tittle";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { DotLoader } from "react-spinners";

import useDataStore from "../../store/useDataStore";

const Projects = () => {
  const { isProjectLoading, projectList } = useDataStore();

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
      {isProjectLoading ? (
        <div className="flex items-center justify-center h-[70vh]">
          <DotLoader color="#F97316" />
        </div>
      ) : (
        <>
          <div className="flex justify-center">
            <ul className="w-[80vw] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {projectList.map((each, i) => (
                <ProjectCard data={each} key={each._id} i={i} />
              ))}
            </ul>
          </div>
        </>
      )}
    </section>
  );
};

export default Projects;
