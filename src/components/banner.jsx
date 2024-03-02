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
        <div className="w-full flex flex-col justify-center items-center">
          <Image
            src={"/Logo.png"}
            alt="Logo"
            width={500}
            height={500}
            className="w-[50%]"
            priority={true}
          />
          <p className="text-xl">undangan</p>
        </div>
        <div className="uppercase text-[22px] text-center font-bold flex justify-center">
          <h1>{text}</h1>{" "}
          <Cursor cursorBlinking cursorStyle="|" cursorColor="#2A528A" />
        </div>
        <div className="space-y-5 text-center">
          <span>Kepada Yth,</span>
          <p className="text-2xl font-[500]">{name}</p>
          <Link href={"/undangan"}>
            <Button color="primary" className="text-white mt-5">
              Buka Undangan
            </Button>
          </Link>
          <p className="text-lg italic">Pondok Pesantren Tahaffuzul Qur'an</p>
          <p className="text-3xl font-[500]">(PPTQ) TASNIM</p>
        </div>
      </div>
    </div>
  );
};
export default Banner;
