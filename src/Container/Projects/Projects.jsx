import React, { useState } from "react";
import { delay, motion } from "framer-motion";

import { mrProjectList } from "../../Asserts/content";
import Tittle from "../../components/Tittle/Tittle";

const Projects = () => {
  const [page, setPage] = useState(2);

  console.log(mrProjectList);

  return (
    <section id="project" className="min-h-screen pb-7 pt-[5.5rem]">
      <Tittle>Project's</Tittle>
      <motion.h1
        whileInView={{ opacity: [0, 1], x: [100, 0] }}
        transition={{ duration: 0.5 }}
        className="text-right my-5 mr-10 font-medium text-lg"
      >
        Design. Develop. Deliver.
      </motion.h1>
      <ul className="flex flex-wrap gap-8 justify-center mb-5">
        {mrProjectList.slice(0, page).map((each, i) => (
          <motion.li
            whileInView={{ opacity: [0, 1], y: [150, 0] }}
            transition={{ duration: 0.35, delay: i * 0.1 }}
            className="w-80 flex flex-col gap-3 p-4 bg-white/10 backdrop-blur-md border-[.5px] border-orange-400 rounded-2xl shadow-xl shadow-white/10"
          >
            <img
              src={each.projectImg}
              alt={each.name}
              className="h-44 w-72 rounded-md"
            />
            <h1 className="text-md font-semibold">{each.name}</h1>
            <p className="text-sm font-thin">{each.desc}</p>
            <a href={each.siteLink} target="_blank">
              <button className="relative my-2 py-1 inline-flex items-center justify-center rounded-md bg-orange-500  px-3 font-medium text-white text-sm transition-colors focus:outline-none ">
                <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur" />
                Vist
              </button>
            </a>
          </motion.li>
        ))}
      </ul>
      <div className="flex items-center">
      <motion.button
        whileInView={{ opacity: [0, 1], y: [150, 0] }}
        transition={{ duration: 0.35}}
        type="button"
        className="inline-flex mx-auto h-full animate-background-shine cursor-pointer items-center justify-center rounded-full border border-gray-800 bg-[linear-gradient(110deg,#000,45%,#4D4B4B,55%,#000)] bg-[length:250%_100%] px-3 py-1 text-md font-medium text-gray-300"
        onClick={() => setPage(pre => pre >= mrProjectList.length ? pre -2 : pre + 2)}
        >
        {page >= mrProjectList.length ? "Less..." : "Show..."}
      </motion.button>
      </div>
    </section>
  );
};

export default Projects;
