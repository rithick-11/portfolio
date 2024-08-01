import React from "react";
import { motion } from "framer-motion";
import Tittle from "../../components/Tittle/Tittle";

const aboutMe = [
  "Hello! I’m Rithickroshan S, a passionate and dedicated software developer with a strong background in JavaScript, React JS, and Python. With a keen interest in creating efficient and scalable web applications, I thrive on solving complex problems and continuously learning new technologies.",
  "My journey in the tech world began with a fascination for how things work behind the scenes. This curiosity led me to explore various programming languages and frameworks, eventually honing my skills in JavaScript and React JS. I enjoy building dynamic and interactive user interfaces that provide seamless user experiences.",
];

const About = () => {
  return (
    <section id="about" className="min-h-screen pb-6 pt-[5.5rem]">
      <Tittle>About </Tittle>
      <div className="flex flex-col md:flex-row gap-6 h-full items-center">
        <div className="px-4 mt-8 flex flex-col md:flex-1 gap-4">
          {aboutMe.map((each, i) => (
            <motion.p
              key={"id" + i}
              className="text-sm font-light indent-7"
              whileInView={{ y: [50, 0] }}
              transition={{ duration: 0.5, delay: i * 0.25 }}
            >
              {each}
            </motion.p>
          ))}
        </div>
        <div className="md:flex-1">
          <motion.img
            src="https://res.cloudinary.com/dwpmsw2i4/image/upload/v1681579190/Picsart_23-04-12_17-16-14-867_1_bjy8rt.jpg"
            className="h-[210px] md:h-[280px] mx-auto border-2 border-orange-500 rounded-2xl backdrop-blur-lg"
            alt="rithck img 2"
            whileInView={{ y: [100, 0], x: [100, 0], opacity: [0, 0.35, 1] }}
            transition={{ duration: 0.75, delay: 0.25 }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
