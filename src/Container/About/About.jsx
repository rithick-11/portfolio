import React from "react";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Tittle from "../../components/Tittle/Tittle";

const aboutMe = [
  "Hello! I’m Rithickroshan S, a passionate and dedicated software developer with a strong background in JavaScript, React JS, and Python. With a keen interest in creating efficient and scalable web applications, I thrive on solving complex problems and continuously learning new technologies.",
  "My journey in the tech world began with a fascination for how things work behind the scenes. This curiosity led me to explore various programming languages and frameworks, eventually honing my skills in JavaScript and React JS. I enjoy building dynamic and interactive user interfaces that provide seamless user experiences.",
];

const About = () => {
  return (
    <section id="about" className="h-auto pb-6 pt-[5.5rem]">
      <Tittle>About </Tittle>
      <div className="grid grid-cols-12 gap-5">
        <div className="px-4 mt-8 h-full justify-center flex flex-col md:flex-1 gap-4 col-span-12 md:col-span-6">
          {aboutMe.map((each, i) => (
            <motion.p
              key={"id" + i}
              className="text-sm font-light indent-7"
              whileInView={{ y: [50, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5, delay: i * 0.25 }}
            >
              {each}
            </motion.p>
          ))}
        </div>
        <div className="col-span-12 md:col-span-6">
          {/* <motion.img
            src="https://res.cloudinary.com/dwpmsw2i4/image/upload/v1738609375/profile_pic_afswaa.jpg"
            className="h-[210px] md:h-[280px] mx-auto border-2 border-orange-500 rounded-2xl backdrop-blur-lg"
            alt="rithck img 2"
            whileInView={{ y: [100, 0], opacity: [0, 0.35, 1], scale:[.2,1]}}
            transition={{ duration: 0.5, delay: 0.15 }}
          /> */}

          <DotLottieReact
            src="https://lottie.host/b1565cf9-d7b3-4ff0-b77f-559b6843d71f/gbhNN8Jvao.lottie"
            loop
            autoplay
          />
        </div>
      </div>
    </section>
  );
};

export default About;
