import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Tittle from "../../components/Tittle/Tittle";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { DotLoader } from "react-spinners";

import useDataStore from "../../store/useDataStore";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Projects = () => {
  const projectContainer = useRef();
  const { isProjectLoading, projectList } = useDataStore();

  const { projects } = projectList;

  console.log(projectList, isProjectLoading);

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
      {isProjectLoading && (
        <div className="flex justify-center items-center h-[300px]">
          <DotLoader color="#36d7b7" size={50} />
        </div>
      )}
      {!isProjectLoading && (
        <Carousel
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          transitionDuration={500}
          containerClass="carousel-container h-full"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {projects?.map((project) => (
            <ProjectCard data={project} key={project._id} />
          ))}
        </Carousel>
      )}
    </section>
  );
};

export default Projects;
