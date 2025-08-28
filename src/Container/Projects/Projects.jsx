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

<<<<<<< HEAD
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
=======
  useEffect(() => {
    if (projectContainer.current) {
      console.log(projectContainer.current);
    }
  }, []);
>>>>>>> parent of e2e8a68 (fix issue)

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
<<<<<<< HEAD
            <ul ref={listRef} className="w-full flex overflow-hidden">
=======
            <ul
              ref={projectContainer}
              className="flex overflow-y-hidden gap-5 px-3 py-8 pb-10 project-list"
            >
>>>>>>> parent of e2e8a68 (fix issue)
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
