import React from "react";
import { motion } from "framer-motion";
import Tittle from "../../components/Tittle/Tittle";
import { certifications } from "../../lib/data";

const CertificateSection = () => {
  return (
    <div className="mt-10">
      <Tittle>Certification's</Tittle>
      <ul className="flex overflow-y-hidden gap-5 px-3 py-8 pb-10 project-list">
        {certifications.map((data, i) => (
          <motion.li
            whileInView={{ opacity: [0, 1], y: [150, 0] }}
            transition={{ duration: 0.35, delay: i * 0.1 }}
            key={i}
            className="p-3 bg-white/10 backdrop-blur-md border-[.5px] border-orange-400 rounded-2xl shadow-xl shadow-white/10"
          >
            
            <img className="w-96 h-full" src={data.imageUrl} alt={data.name} />
            <h1>{data.name}</h1>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default CertificateSection;
