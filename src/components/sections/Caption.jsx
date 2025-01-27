"use client";
import { motion } from "framer-motion";

const Caption = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-black font-[600] text-[10px] text-center">
        Dengan hormat kami mengundang Bapak/Ibu/Saudara/i yang telah turut serta
        mendukung serta berperan dalam kebahagiaan kami, baik melalui doa,
        dukungan moral, maupun bantuan dalam berbagai bentuk lainnya. Kehadiran
        dan partisipasi Bapak/Ibu/Saudara/i di acara pernikahan kami akan
        menjadi suatu kehormatan dan kebahagiaan bagi kami yang akan di
        laksanakan pada :
      </h1>
    </motion.div>
  );
};
export default Caption;
