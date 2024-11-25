import React from "react";
import {motion} from "framer-motion"
import { IoSchoolOutline } from "react-icons/io5";
import Tittle from "../../components/Tittle/Tittle";

const educationData = [
  {
    institute: "Mahendra Engineering College.",
    location: "Namakkal",
    course: "B.E. Cyber Security",
    duration: "2022 - 2026",
  },
  {
    institute: "Model School, Karimangalam.",
    course: "HSC Maths & Computer Science",
    location: "Dharmapuri",
    duration: "2019 - 2022",
  },
  {
    institute: "Nxtwave",
    course: "MERN Stack development",
    location: "online",
    duration: "2 Years",
  },
];

const Education = () => {
  return (
    <section id="education" className="h-auto pb-4 pt-[5.5rem]">
      <Tittle>Education</Tittle>
      <ul className="grid md:grid-cols-2 mt-10 gap-8">
        {educationData.map((data, i) => (
          <motion.li
            key={i+"education"}
            className="bg-white/5 backdrop-blur-md p-3 flex gap-3 border-[.5px] border-orange-400 rounded-2xl shadow-xl shadow-white/10"
            whileInView={{scale:[.5,1], opacity:[0,1]}}
            transition={{duration:.5, delay:i*.20}}
        >
            <div className="flex flex-col items-center gap-1">
              <IoSchoolOutline className="text-3xl font-bold text-orange-500" />
              <span className="p-[1px] h-full bg-white" />
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <div>
                <h1 className="font-semibold">
                  <span className="font-bold text-orange-500">
                    {data.institute[0]}
                  </span>
                  {data.institute.slice(1)}
                </h1>
                <p className="font-light">{data.location}</p>
              </div>
              <span >{data.course}</span>
              <p className="font-extralight">{data.duration}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Education;
