import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import nodeLogo from "../../Asserts/node.png";
import reactLogo from "../../Asserts/react.png";
import pythonLogo from "../../Asserts/python.png";

const Home = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center gap-5">
      <div className="text-center flex flex-col gap-2">
        <h1 className="text-lg">
          <span>👋</span>
          Hi i am
        </h1>
        <h1 className="text-2xl">
          RithickRoshan <span>s</span>
        </h1>
        <span className="text-sm">
          <Typewriter
            options={{
              strings: ["MERN Stack developer", "Cyber Security Student"],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dwpmsw2i4/image/upload/v1680781580/rithickImg.jpg"
          alt="profile img"
          className="h-[220px] rounded-full"
        />
        <ul className="flex items-start justify-evenly">
          <motion.li
            className="h-14 w-14 bg-white/90 flex justify-center items-center rounded-full"
            whileInView={{
              opacity:[0,1],
              y:[30, 0]
            }}
            transition={{duration:1}}          
          >
            <img
              src={nodeLogo}
              alt="react logo"
              className="h-[70%] drop-shadow-lg"
            />
          </motion.li>
          <motion.li
            className="h-20 w-20 mt-10 bg-white/90 flex justify-center items-center rounded-full"
            animate={{ rotate: 180 }}
            transition={{duration:1, damping: 400, loop: Infinity, delay:.5 }}
            whileInView={{
              opacity:[0,1],
              y:[30, 0]
            }}
          >
            <img
              src={reactLogo}
              alt="react logo"
              className="h-[70%] drop-shadow-lg"
            />
          </motion.li>
          <motion.li 
            className="h-14 w-14 bg-white/90 flex justify-center items-center rounded-full"
            whileInView={{
              opacity:[0,1],
              y:[30, 0],
            }}
            transition={{duration:1, delay:1}} 
          >
            <img
              src={pythonLogo}
              alt="react logo"
              className="h-[70%] drop-shadow-lg"
            />
          </motion.li>
        </ul>
      </div>
    </section>
  );
};

export default Home;
