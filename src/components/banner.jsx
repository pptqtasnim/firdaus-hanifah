"use client";

import Image from "next/image";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Button } from "@nextui-org/react";
import Link from "next/link";
const Banner = ({ name }) => {
  const [text] = useTypewriter({
    words: ["tarhib ramadhan", "Haflah Akhirus sannah"],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 30,
    delaySpeed: 2000,
  });
  return (
    <div className="min-h-screen w-full flex items-center justify-center text-black ">
      <div className="space-y-5 ">
        <p
          className="text-xl uppercase text-center font-bold text-blue-800"
          style={{ textShadow: "2px 2px 4px #ffff" }}
        >
          Undangan Pernikahan
        </p>

        <div className="w-full flex flex-col justify-center items-center">
          <Image
            src={"/savethedate.png"}
            alt="Logo"
            width={500}
            height={500}
            className="w-[50%]"
            priority={true}
          />
        </div>

        <div className="text-center">
          <div className="text-xl capitalize font-semibold text-primary">
            <p>Sepdiana Miftahul firdaus</p>
            <p>&</p>
            <p>Hanifah Al Hanun </p>
          </div>
        </div>
        <div className="space-y-5 text-center">
          <span>Kepada Yth,</span>
          <p className="text-2xl font-[500]">{name}</p>
          <Link href={"/undangan"}>
            <Button color="primary" className="text-white mt-5">
              Buka Undangan
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Banner;
