import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import Tittle from "../../components/Tittle/Tittle";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { DotLoader } from "react-spinners";

import useDataStore from "../../store/useDataStore";

const Projects = () => {
  const projectContainer = useRef();
  const { isProjectLoading, projectList } = useDataStore();

  useEffect(() => {
    if (projectContainer.current) {
      console.log(projectContainer.current);
    }
  }, []);

  return (
    <section id="project" className="pb-10 pt-[5.5rem]">
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
            <ul
              ref={projectContainer}
              className="flex overflow-y-hidden gap-5 px-3 py-8 pb-10 project-list"
            >
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
