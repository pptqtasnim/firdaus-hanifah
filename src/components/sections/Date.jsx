"use client";
import { Waktu, Kalender, Lokasi } from "@/components/assets/icons";
import { motion } from "framer-motion";

const DatePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-primary font-bold space-y-5"
    >
      <div className="flex items-center text-xl">
        <Kalender /> <span>Ahad, 09 Februari 2025</span>
      </div>
      <div className="flex items-center text-xl">
        <div>
          <Waktu />
        </div>
        <span>08.00 WIB s/d 11:30 WIB</span>
      </div>
      <div className="flex items-center ">
        <div className="">
          <Lokasi />
        </div>
        <div>
          <span className="text-xl">Masjid Nurul Huda</span>
          <p className="text-sm">
            Jl. Kesadaran Raya rt02/01 Cipinang muara, Jatinegara, Jakarta Timur
          </p>
        </div>
      </div>
    </motion.div>
  );
};
export default DatePage;
