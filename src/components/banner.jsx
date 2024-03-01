"use client";

import Image from "next/image";

const Banner = ({ name }) => {
  return (
    <div className="min-h-screen w-full flex items-center text-black">
      <div className="space-y-5">
        <div className="w-full flex flex-col justify-center items-center">
          <Image
            src={"/Logo.png"}
            alt="Logo"
            width={500}
            height={500}
            className="w-1/3"
          />
          <p className="text-xl">undangan</p>
        </div>
        <div className="uppercase text-[26px] text-center font-bold">
          <h1>tarhib ramadhan</h1> <span>&</span>
          <h2>Haflah Akhirus sannah</h2>
        </div>
        <div className="space-y-5 text-center">
          <span>Kepada Yth,</span>
          <p className="text-2xl uppercase font-[500]">{name}</p>
          <p className="text-lg italic">Pondok Pesantren Tahaffuzul Qur'an</p>
          <p className="text-3xl font-[500]">(PPTQ) TASNIM</p>
        </div>
      </div>
    </div>
  );
};
export default Banner;
