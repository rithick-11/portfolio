import React from "react";
import { motion } from "framer-motion";
import { ease } from "../../lib/animations";

const Tittle = ({ children }) => {
  return (
    <div className="w-fit">
      <motion.h1
        className="text-xl font-medium drop-shadow-lg w-fit"
        initial={{ opacity: 0, x: 28 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.55, ease }}
      >
        <span className="text-2xl font-bold text-orange-500">
          {children[0]}
        </span>
        {children.slice(1)}
      </motion.h1>
      <motion.hr
        className="border-2 border-emerald-50 w-[70%]"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        style={{ originX: 0 }}
        transition={{ duration: 0.5, ease, delay: 0.18 }}
      />
    </div>
  );
};

export default Tittle;
