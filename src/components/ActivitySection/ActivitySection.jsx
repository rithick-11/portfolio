import React from "react";
import { motion } from "framer-motion";
import Tittle from "../Tittle/Tittle";
import { activitys } from "../../lib/data";

const ActivitySection = () => {
  return (
    <section className="py-4">
      <Tittle>Activity's</Tittle>
      <ul className="flex overflow-y-hidden gap-5 px-3 py-8 pb-10 project-list">
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
      </ul>
    </section>
  );
};

export default ActivitySection;
