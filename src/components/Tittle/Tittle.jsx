import React from "react";
import { motion } from "framer-motion";

const Tittle = ({ children }) => {
  return (
    <div className="w-fit">
      <motion.h1
        className="text-xl font-medium drop-shadow-lg w-fit"
        whileInView={{x:[30,0]}}
        transition={{duration:.5}}
      >
        <span className="text-2xl font-bold text-orange-500">
          {children[0]}
        </span>
        {children.slice(1)}
      </motion.h1>
      <motion.hr
        className="border-2 border-emerald-50 w-[70%]"
        whileInView={{opacity:[0,1], y:[-10,0]}}
        transition={{duration:.75, delay:.25}}
      />
    </div>
  );
};

export default Tittle;
