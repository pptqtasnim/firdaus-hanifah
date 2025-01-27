"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { motion } from "framer-motion";

const LinkMap = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex justify-center"
    >
      <Link href={"https://maps.app.goo.gl/cbnDZH1p7psDBLN38"} target="_blank">
        <Button color="primary" size="lg">
          Link Maps
        </Button>
      </Link>
    </motion.div>
  );
};
export default LinkMap;
