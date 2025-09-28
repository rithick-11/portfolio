import React from "react";
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Tittle from "../Tittle/Tittle";
import { activitys } from "../../lib/data";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 2, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 640, min: 640 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ActivitySection = () => {
  return (
    <section className="py-4">
      <Tittle>Activity's</Tittle>
      {/* <ul className="flex overflow-y-hidden gap-5 px-3 py-8 pb-10 project-list">
        {activitys.map((data, i) => (
          <motion.li
            whileInView={{ opacity: [0, 1], y: [150, 0] }}
            transition={{ duration: 0.35, delay: i * 0.1 }}
            key={data.i}
            className="flex-shrink-0 p-2 bg-white/10 backdrop-blur-md border-[.5px] border-orange-400 rounded shadow-xl shadow-white/10"
          >
            <data.Embeded />
          </motion.li>
        ))}
      </ul> */}
      <Carousel
        // additionalTransfrom={0}
        draggable
        focusOnSelect={false}
        itemClass="mx-3"
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={3000}
        className="mt-5"
      >
        {activitys.map((data, i) => (
          <motion.li
            whileInView={{ opacity: [0, 1], y: [150, 0] }}
            transition={{ duration: 0.35, delay: i * 0.1 }}
            key={data.i}
            className="flex-shrink-0 p-2 bg-white/10 backdrop-blur-md border-[.5px] border-orange-400 rounded shadow-xl shadow-white/10"
          >
            <data.Embeded />
          </motion.li>
        ))}
      </Carousel>
    </section>
  );
};

export default ActivitySection;
