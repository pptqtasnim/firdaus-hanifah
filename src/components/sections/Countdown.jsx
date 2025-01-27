"use client";
import Countdown from "@/components/countdown";
import { motion } from "framer-motion";
const CountdownPage = () => {
  return (
    <div
    //   initial={{ opacity: 0 }}
    //   whileInView={{ opacity: 1 }}
    //   transition={{ duration: 1 }}
    >
      <Countdown />
    </div>
  );
};
export default CountdownPage;
