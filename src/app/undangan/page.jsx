"use client";
import TableAcara from "@/components/tableAcara";
import Image from "next/image";
import { motion } from "framer-motion";
import ButtonLagu from "@/components/buttonMusic";
import Header from "@/components/sections/Header";
import Caption from "@/components/sections/Caption";
import CountdownPage from "@/components/sections/Countdown";
import DatePage from "@/components/sections/Date";
import LinkMap from "@/components/sections/LinkMap";
import SpiritInspiration from "@/components/sections/SpiritInspiration";
import Footer from "@/components/sections/Footer";

const page = () => {
  return (
    <div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="p-5 space-y-5"
    >
      <ButtonLagu />
      <div className="w-full flex justify-center ">
        <Image
          src={"/Bismillah.png"}
          alt="Logo"
          width={500}
          height={500}
          className={"w-[50%] filter drop-shadow-2xl"}
        />
      </div>
      {/* Header */}
      <Header />
      <div className="w-full bg-black h-[0.5px]"></div>
      {/* h2  */}
      {/* <Caption /> */}
      {/* countdown */}
      <CountdownPage />
      {/* Date */}
      <DatePage />
      {/* Link Map */}
      <LinkMap />
      {/* Spirit Inspiration */}
      <SpiritInspiration />

      {/* Footer */}
      <Footer />
    </div>
  );
};
export default page;
