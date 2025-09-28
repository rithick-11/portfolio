import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";

import Tittle from "../../components/Tittle/Tittle";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { DotLoader } from "react-spinners";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import useDataStore from "../../store/useDataStore";

const Projects = () => {
  const projectContainer = useRef();
  const { isProjectLoading, projectList } = useDataStore();

  useEffect(() => {
    if (projectContainer.current) {
      console.log(projectContainer.current);
    }
  }, []);

  const RenderProjectsList = () => (
    <ul className="flex overflow-x-scroll" ref={projectContainer}  >
      {projectList?.map((project, index) => (
        <ProjectCard key={`project-${index}`} data={project} />
      ))}
    </ul>
  );

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
        <div className="flex justify-center items-center h-40">
          <DotLoader color="#36d7b7" size={50} />
        </div>
      ) : (
        <RenderProjectsList />
      )}
    </section>
  );
};

export default Projects;
