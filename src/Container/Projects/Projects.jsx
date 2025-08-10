import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import Tittle from "../../components/Tittle/Tittle";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { DotLoader } from "react-spinners";

import useDataStore from "../../store/useDataStore";

const Projects = () => {
  const listRef = useRef();
  const { isProjectLoading, projectList } = useDataStore();
  const [isPaused, setIsPaused] = useState(false);

  // useEffect(() => {
  //   const list = listRef.current;
  //   let scrollAmount = 0;
  //   const scrollStep = 1; // px per frame
  //   const scrollInterval = 16; // ms (~60fps)

  //   const interval = setInterval(() => {
  //     if (!isPaused && list) {
  //       scrollAmount = list.scrollLeft + scrollStep;
  //       if (scrollAmount >= list.scrollWidth - list.clientWidth) {
  //         scrollAmount = 0; // restart
  //       }
  //       list.scrollLeft = scrollAmount;
  //     }
  //   }, scrollInterval);

  //   return () => clearInterval(interval);
  // }, [isPaused]);

  // useEffect(() => {
  //   const list = listRef.current;

  //   const pause = () => setIsPaused(true);
  //   const resume = () => setIsPaused(false);

  //   // Pause on drag/touch
  //   list.addEventListener("mousedown", pause);
  //   list.addEventListener("touchstart", pause);
  //   list.addEventListener("mouseup", resume);
  //   list.addEventListener("mouseleave", resume);
  //   list.addEventListener("touchend", resume);

  //   return () => {
  //     list.removeEventListener("mousedown", pause);
  //     list.removeEventListener("touchstart", pause);
  //     list.removeEventListener("mouseup", resume);
  //     list.removeEventListener("mouseleave", resume);
  //     list.removeEventListener("touchend", resume);
  //   };
  // }, []);

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
              ref={listRef}
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
