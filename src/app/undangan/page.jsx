"use client";
import Countdown from "@/components/countdown";
import TableAcara from "@/components/tableAcara";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { Waktu, Kalender, Lokasi } from "@/components/assets/icons";

import { motion } from "framer-motion";
import ButtonLagu from "@/components/buttonMusic";

const page = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
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
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className=" text-black flex w-[95%] mx-auto"
      >
        <div className="w-2/3">
          <div className="uppercase text-[14px] text-center font-bold">
            <h1>tarhib ramadhan</h1> <span>&</span>
            <h2>Haflah Akhirus sannah</h2>
          </div>
          <p className="text-[8px] ml-3">
            Acara pondok pesantren yang bekerjasama dengan pihak masjid guna
            menyambut datangnya bulan suci Ramadhan dengan meriah yang
            menghadirkan rasa kebahagiaan, juga menghadirkan apresiasi terhadap
            perjuangan yang telah dilewati para santri dalam menjaga hafalan
            al-qur’an mereka.
          </p>
        </div>
        <div className="w-1/3">
          <Image
            src={"/Logo.png"}
            alt="Logo"
            width={600}
            height={500}
            className="w-full h-full object-cover"
            priority={true}
          />
        </div>
      </motion.div>
      <div className="w-full bg-black h-[0.5px]"></div>
      {/* h2  */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-black font-[600] text-[10px] text-center">
          Dengan hormat kami mengundang Bapak/Ibu/Saudara/i yang telah turut
          serta mendukung serta berperan dalam kemajuan pondok pesantren kami,
          baik melalui bantuan finansial, moral, maupun dukungan dalam berbagai
          bentuk lainnya. Kehadiran dan partisipasi Bapak/Ibu/Saudara/i di acara
          ini akan menjadi suatu kehormatan bagi kami.
        </h1>
      </motion.div>
      {/* Countdown */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Countdown />
      </motion.div>
      {/* Date */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-primary font-bold space-y-5"
      >
        <div className="flex items-center text-xl">
          <Kalender /> <span>Sabtu, 09 Maret 2024</span>
        </div>
        <div className="flex items-center text-xl">
          <div>
            <Waktu />
          </div>
          <span>09.00 WIB s/d selesai</span>
        </div>
        <div className="flex items-center ">
          <div className="">
            <Lokasi />
          </div>
          <div>
            <span className="text-xl">Masjid Al-Ikhwan</span>
            <p className="text-sm">perumahan bukit cengkeh 1</p>
          </div>
        </div>
      </motion.div>
      {/* Link Map */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex justify-center"
      >
        <Link href={"https://maps.app.goo.gl/cvJ2zeQ2jygkrUuHA"}>
          <Button color="primary" size="lg">
            Link Maps
          </Button>
        </Link>
      </motion.div>
      {/* Description */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="space-y-5 text-black"
      >
        <div className="flex justify-center">
          <Image
            src={"/Hero.png"}
            alt="Logo"
            width={500}
            height={500}
            className="w-1/2 h-full object-cover"
          />
        </div>
        <h1 className=" font-bold text-3xl text-center">SPIRIT INSPIRATION</h1>
        <p className="text-[10px]">
          Bulan Ramadhan sebagai bulan qur’an menjadi mementum untuk umat islam
          melatih diri jauh dari hawa nafsu. Guna menjalani hidup yang lebih
          tenang dan senang karena disibukkan untuk mendekat diri kepada Sang
          Pencipta.
        </p>
        <p className="text-[10px]">
          Namun, di zaman yang makin jauh dari masa keemasan yaitu masa hidupnya
          Rosullullah, banyak kalangan muslim yang beranggapan biasa saja tanpa
          ada rasa meriah saat datangnya bulan Ramadhan, terutama bagi kalangan
          muda-mudi. Tragisnya sebagian lagi menggunakan untuk memperlancar aksi
          jahatnya.
        </p>
        <p className="text-[10px]">
          Justru PPTQ Tasnim menggunakan momen ini untuk pembiasaan bagi para
          santri menyambut bulan suci dengan meriah juga menjalaninya dengan
          penuh usaha amal kebaikan. Bentuk dari pendidikan yang kami hadirkan
          untuk enerasi masa depan.
        </p>
      </motion.div>
      {/* Susunan Acara */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="space-y-5 pb-10"
      >
        <h1 className=" font-bold text-3xl text-center text-black">
          SUSUNAN ACARA
        </h1>
        <TableAcara />
      </motion.div>
    </motion.div>
  );
};
export default page;
