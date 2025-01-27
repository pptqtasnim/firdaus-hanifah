"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const SpiritInspiration = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="space-y-5 text-black flex flex-col md:flex-row items-center"
    >
      <div className="flex justify-center md:w-[45%] w-full">
        <Image
          src={"/ilustrasion1.png"}
          alt="Logo"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="md:w-[50%] w-full space-y-2">
        <p className="text-[11px]">
          <span className="font-bold text-[12px] text-primary">Pernikahan</span>{" "}
          adalah sebuah perjalanan suci yang mengikat dua hati dalam cinta dan
          komitmen. Ini adalah momen yang tidak hanya merayakan cinta antara dua
          individu, tetapi juga menguatkan ikatan keluarga dan komunitas. Dalam
          setiap langkah yang diambil, pernikahan mengajarkan kita tentang arti
          pengorbanan, kesetiaan, dan saling mendukung dalam suka dan duka.
        </p>

        <p className="text-[11px]">
          Mari kita sambut hari bahagia ini dengan penuh rasa syukur dan
          harapan, bahwa cinta yang terjalin akan selalu membawa berkah dan
          kebahagiaan dalam kehidupan kita. Semoga setiap langkah yang diambil
          dalam perjalanan ini dipenuhi dengan cinta, kebahagiaan, dan
          keberkahan dari Sang Pencipta.
        </p>
      </div>
    </motion.div>
  );
};
export default SpiritInspiration;
