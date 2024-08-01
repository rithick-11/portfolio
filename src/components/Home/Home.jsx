import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaInstagram, FaGithub} from "react-icons/fa";
import { FaXTwitter, FaSnapchat } from "react-icons/fa6";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import nodeLogo from "../../Asserts/node.png";
import reactLogo from "../../Asserts/react.png";
import pythonLogo from "../../Asserts/python.png";

const Home = () => {
  const [showIcon, setShowIcon] = useState(false);

  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center gap-5 md:flex-row-reverse md:gap-16"
    >
      <motion.div
        className="text-center flex flex-col gap-2"
        whileInView={{ opacity: [0, 1], x: [-20, 0] }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-lg">
          <span>👋</span>
          Hi i am
        </h1>
        <motion.h1
          className="text-2xl"
          whileInView={{ x: [30, 0] }}
          transition={{ duration: 1, delay: 0.25 }}
        >
          RithickRoshan <span>s</span>
        </motion.h1>
        <span className="text-sm">
          <Typewriter
            options={{
              strings: ["MERN Stack developer", "Cyber Security Student"],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </motion.div>
      <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-3 md:gap-7">
        <motion.img
          whileInView={{ opacity: [0, 1], scale: [0.9, 1] }}
          transition={{ duration: 1.5 }}
          src="https://res.cloudinary.com/dwpmsw2i4/image/upload/v1680781580/rithickImg.jpg"
          alt="profile img"
          className="h-[210px] md:h-[260px] rounded-full"
        />
        <ul className="flex items-start justify-evenly md:flex-col md:items-end gap-3 md:gap-7">
          <motion.li
            className="h-14 w-14 bg-white/90 flex justify-center items-center rounded-full md:h-16 md:w-16 md:-mr-4"
            whileInView={{
              opacity: [0, 1],
              y: [30, 0],
            }}
            transition={{ duration: 1 }}
          >
            <img
              src={nodeLogo}
              alt="react logo"
              className="h-[70%] drop-shadow-lg"
            />
          </motion.li>
          <motion.li
            className="h-20 w-20 mt-10 bg-white/90 flex justify-center items-center rounded-full md:h-24 md:w-24 md:mt-0"
            animate={{ rotate: 180 }}
            transition={{
              duration: 1,
              damping: 400,
              loop: Infinity,
              delay: 0.5,
            }}
            whileInView={{
              opacity: [0, 1],
              y: [30, 0],
            }}
          >
            <img
              src={reactLogo}
              alt="react logo"
              className="h-[70%] drop-shadow-lg"
            />
          </motion.li>
          <motion.li
            className="h-14 w-14 bg-white/90 flex justify-center items-center rounded-full md:-mr-5"
            whileInView={{
              opacity: [0, 1],
              y: [30, 0],
            }}
            transition={{ duration: 1, delay: 1 }}
          >
            <img
              src={pythonLogo}
              alt="react logo"
              className="h-[70%] drop-shadow-lg mx-auto"
            />
          </motion.li>
        </ul>
      </div>
      <ul className="absolute flex flex-col gap-3 bottom-16 left-0">
        <motion.li
          className="h-8 w-8 cursor-pointer border-[1px] border-white rounded-full flex items-center justify-center font-md hover:bg-white/25 hover:border-2"
          whileInView={{ y: [-30, 0] }}
          transition={{ duration: 0.5 }}
        >
          <a href="https://www.linkedin.com/in/rithickroshan-s" target="_blank">
            <FaLinkedinIn />
          </a>
        </motion.li>
        <motion.li
          className="h-8 w-8 cursor-pointer border-[1px] border-white rounded-full flex items-center justify-center font-md hover:bg-white/25 hover:border-2"
          whileInView={{ x: [-30, 0] }}
          transition={{ duration: 0.5 }}
        >
          <a href="https://www.instagram.com/s.ri_thick" target="_blank">
            <FaInstagram />
          </a>
        </motion.li>
        <motion.li
          className="h-8 w-8 cursor-pointer border-[1px] border-white rounded-full flex items-center justify-center font-md hover:bg-white/25 hover:border-2"
          whileInView={{ x: [30, 0] }}
          transition={{ duration: 0.5 }}
        >
          <a href="https://github.com/rithick-11" target="_blank">
            <FaGithub />
          </a>
        </motion.li>
        {showIcon && (
          <>
            <motion.li
              className="h-8 w-8 cursor-pointer border-[1px] border-white rounded-full flex items-center justify-center font-md hover:bg-white/25 hover:border-2"
              whileInView={{ x: [-30, 0] }}
              transition={{ duration: 0.5 }}
            >
              <a href="https://twitter.com/rithick__11" target="_blank">
                <FaXTwitter />
              </a>
            </motion.li>
            <motion.li
              className="h-8 w-8 cursor-pointer border-[1px] border-white rounded-full flex items-center justify-center font-md hover:bg-white/25 hover:border-2"
              whileInView={{ x: [30, 0] }}
              transition={{ duration: 0.5 }}
            >
              <a href="https://www.snapchat.com/add/ri_thick11?share_id=WJ9TQ4uEy10&locale=en-US" target="_blank">
                <FaSnapchat />
              </a>
            </motion.li>
          </>
        )}
        <motion.li
          className="h-8 w-8 cursor-pointer border-[1px] border-white rounded-full flex items-center justify-center font-md hover:bg-white/25 hover:border-2"
          whileInView={{ y: [30, 0] }}
          transition={{ duration: 0.5 }}
          onClick={() => {setShowIcon(pre => ! pre)}}
        >
          {showIcon?  <MdExpandMore className="text-md" /> : <MdExpandLess className="text-md" />}
        </motion.li>
      </ul>
    </section>
  );
};

export default Home;
