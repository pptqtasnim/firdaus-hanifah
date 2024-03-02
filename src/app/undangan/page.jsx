import Countdown from "@/components/countdown";
import TableAcara from "@/components/tableAcara";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import {
  MdOutlineDateRange,
  MdOutlineAccessTime,
  MdOutlineLocationOn,
} from "react-icons/md";

const page = () => {
  return (
    <div className="p-5 space-y-5">
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
      <div className=" text-black flex w-[95%] mx-auto">
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
      </div>
      <div className="w-full bg-black h-[0.5px]"></div>
      {/* h2  */}
      <div>
        <h1 className="text-black font-[600] text-[10px] text-center">
          Dengan hormat kami mengundang Bapak/Ibu/Saudara/i yang telah turut
          serta mendukung serta berperan dalam kemajuan pondok pesantren kami,
          baik melalui bantuan finansial, moral, maupun dukungan dalam berbagai
          bentuk lainnya. Kehadiran dan partisipasi Bapak/Ibu/Saudara/i di acara
          ini akan menjadi suatu kehormatan bagi kami.
        </h1>
      </div>
      {/* Countdown */}
      <div>
        <Countdown />
      </div>
      {/* Date */}
      <div className="text-primary font-bold space-y-5">
        <div className="flex items-center text-2xl">
          <MdOutlineDateRange size={50} /> <span>Sabtu, 09 Maret 2024</span>
        </div>
        <div className="flex items-center text-2xl">
          <MdOutlineAccessTime size={50} /> <span>09.00 WIB s/d selesai</span>
        </div>
        <div className="flex items-center ">
          <MdOutlineLocationOn size={50} />{" "}
          <div>
            <span className="text-2xl">Masjid Al-Ikhwan</span>
            <p className="text-sm">perumahan bukit cengkeh 1</p>
          </div>
        </div>
      </div>
      {/* Link Map */}
      <div className="flex justify-center">
        <Link href={"https://maps.app.goo.gl/cvJ2zeQ2jygkrUuHA"}>
          <Button color="primary" size="lg">
            Link Maps
          </Button>
        </Link>
      </div>
      {/* Description */}
      <div className="space-y-5 text-black">
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
      </div>
      {/* Susunan Acara */}
      <div className="space-y-5">
        <h1 className=" font-bold text-3xl text-center text-black">
          SUSUNAN ACARA
        </h1>
        <TableAcara />
      </div>
    </div>
  );
};
export default page;
