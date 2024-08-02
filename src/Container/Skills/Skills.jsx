import React, { useState } from "react";
import { motion } from "framer-motion";
import Tittle from "../../components/Tittle/Tittle";
import bootstapLogo from "../../Asserts/bootstrap.png";
import cssLogo from "../../Asserts/css.png";
import htmlLogo from "../../Asserts/html.png";
import javaLogo from "../../Asserts/java.png";
import jasvascriptLogo from "../../Asserts/javascript.png";
import mongoDbLogo from "../../Asserts/mangoDB.png";
import nodeLogo from "../../Asserts/node.png";
import pythonLogo from "../../Asserts/python.png";
import reactLogo from "../../Asserts/react.png";
import expressLogo from "../../Asserts/express.png";
import sqlLogo from "../../Asserts/sql.png";
import tailwindLogo from "../../Asserts/tailwind.png";

const categoryConstans = {
  programingLang: "Programing",
  frontEnd: "Web Dev",
  dataBase: "Database",
  framerWork: "Framer Work",
  library: "Library",
};

const skillsList = [
  {
    name: "Html",
    logo: htmlLogo,
    category: categoryConstans.frontEnd,
  },
  {
    name: "CSS",
    logo: cssLogo,
    category: categoryConstans.frontEnd,
  },
  {
    name: "Javascript",
    logo: jasvascriptLogo,
    category: categoryConstans.frontEnd,
  },
  {
    name: "python",
    logo: pythonLogo,
    category: categoryConstans.programingLang,
  },
  {
    name: "Node Js",
    logo: nodeLogo,
    category: categoryConstans.programingLang,
  },
  {
    name: "React Js",
    logo: reactLogo,
    category: categoryConstans.framerWork,
  },
  {
    name: "Express",
    logo: expressLogo,
    category: categoryConstans.framerWork,
  },
  {
    name: "Java",
    logo: javaLogo,
    category: categoryConstans.programingLang,
  },
  {
    name: "MySql",
    logo: sqlLogo,
    category: categoryConstans.dataBase,
  },
  {
    name: "MongoDB",
    logo: mongoDbLogo,
    category: categoryConstans.dataBase,
  },
  {
    name: "Tailwind",
    logo: tailwindLogo,
    category: categoryConstans.library,
  },
  {
    name: "Bootstrap",
    logo: bootstapLogo,
    category: categoryConstans.library,
  },
];

const SkillsPara = [
    "I can build a responsive website and am very familiar with backend development.",
    "I have solved more than 200+ problems using Python and JavaScript.",
    "Skilled in backend development, including database management and server-side scripting."
]

const categoryArr = Array.from(
  new Set(skillsList.map((each) => each.category))
);

const Skills = () => {

    const [catState, setCatState] = useState("All")

    const fillteredSkills = catState === "All" ? skillsList : skillsList.filter(each => each.category === catState)

  return (
    <section id="skills" className="min-h-screen pb-4 pt-[5.5rem]">
      <Tittle>Skills</Tittle>
      <ul className="flex items-center gap-2 w-[80%] mt-5 flex-wrap">
        {["All", ...categoryArr].map((each, i) => (
          <motion.li
            key={each + i}
            whileInView={{ y: [30, 0], opacity: [0, 1] }}
            transition={{ duration: 0.25, delay: i * 0.10 }}
          >
            <button className="relative inline-flex h-auto overflow-hidden rounded-full p-[1px] -gray-50" onClick={() => setCatState(each)}>
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full ${catState === each ? "bg-white/75 font-bold text-orange-600" : "bg-gray-950 font-medium"} px-2 py-1 text-sm text-gray-50 backdrop-blur-3xl`}>
                {each}
              </span>
            </button>
          </motion.li>
        ))}
      </ul>
      <ul className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 justify-around mt-8 md:w-[60%] mx-auto">
        {fillteredSkills.map((each, i) => (
          <motion.li
            key={each+i}
            className="h-28 w-28 sm:h-[8rem] sm:w-[8rem] flex flex-col items-center justify-evenly bg-white/10 backdrop-blur-md border-[.5px] border-orange-400 rounded-2xl shadow-xl shadow-white/10"
            whileInView={{ opacity: [0, 1], y:[30,0] }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <motion.img
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 2 }}
              src={each.logo}
              alt={each.name}
              className="h-12 sm:h-14 md:h-16 drop-shadow-md"
            />
            <h1>{each.name}</h1>
          </motion.li>
        ))}
      </ul>
      <div className="mt-10 flex flex-col gap-3">
        {SkillsPara.map((each, i) => (
            <motion.p
              key={i+"para"}
              className="text-sm font-light"
              whileInView={{opacity:[0,1], y:[40,0]}}
              transition={{duration:.35, ease:"circOut", delay:i*.25}}
            >{each}</motion.p>
        )) }
      </div>
    </section>
  );
};

export default Skills;
