"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className=" text-black flex flex-row mx-auto "
    >
      <div className=" w-full space-y-3 px-5 ">
        <div className="text-[12px] text-center space-y-2">
          <p>
            Mahasuci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan{" "}
          </p>
          <p>
            Ya Allah semoga ridho-Mu tercurahkah mengiringin pernikahan
            putra-putri kami
          </p>
          <p>
            {" "}
            وَمِنۡ ءَایَـٰتِهِۦۤ أَنۡ خَلَقَ لَكُم مِّنۡ أَنفُسِكُمۡ
            أَزۡوَ ٰ⁠جࣰا لِّتَسۡكُنُوۤا۟ إِلَیۡهَا وَجَعَلَ بَیۡنَكُم مَّوَدَّةࣰ
            وَرَحۡمَةًۚ إِنَّ فِی ذَ ٰ⁠لِكَ لَـَٔایَـٰتࣲ لِّقَوۡمࣲ
            یَتَفَكَّرُونَ
          </p>
          <p>
            Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
            pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
            dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
            kasih dan sayang. Sungguh, pada yang demikian itu benar-benar
            terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
          </p>
        </div>
        <div className="text-center">
          <div>
            <p className="text-xl capitalize font-semibold text-primary">
              Sepdiana Miftahul firdaus
            </p>
            <p className="text-[10px] italic text-slate-600">
              Putra pertama dari bapak Yudi Tahyudin dan ibu Unah Tursinah
            </p>
          </div>
          <p className="text-xl  font-semibold text-primary">&</p>
          <div>
            <p className="text-xl capitalize font-semibold text-primary">
              Hanifah Al Hanun{" "}
            </p>
            <p className="text-[10px] italic text-slate-600">
              Putri keenam dari bapak Herman Agus dan ibu Mulyani
            </p>
          </div>
        </div>
        <div className="text-[12px] text-center">
          <p>
            Untuk mengikuti sunnah Rosul-Mu dalam membentuk keluarga yang
            sakinah, mawaddah, warahmah
          </p>
          <p>Maka izinkanlah kami untuk menikahkannya</p>
        </div>
      </div>
      {/* <div className="md:w-1/3 hidden md:block w-full ">
        <Image
          src={"/ilustrasion1.png"}
          alt="Logo"
          width={600}
          height={500}
          className="w-full h-full object-cover"
          priority={true}
        />
      </div> */}
    </motion.div>
  );
};
export default Header;
