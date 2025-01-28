import { Poppins } from "next/font/google";

import "./globals.css";
import AppShell from "@/components/appShell";
import Hubungi from "@/components/hubungi";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700", "800"],
});

export const metadata = {
  title: "Firdaus & Hanifah ",
  description:
    "Undangan Pernikahan Putra pertama dari bapak Yudi Taqiyuddin dan Ibu Unah Tursinah / Putri keenam dari bapak Herman Agus dan ibu Mulyani",
  icons: {
    icon: "/ilustrasion2.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} `}>
        <AppShell>
          <div className="max-w-full md:max-w-[90%] xl:max-w-[50%]  shadow-lg shadow-blue-500 bg-opacity-65 bg-bgCoverImage bg-no-repeat bg-center bg-cover mx-auto min-h-screen relative">
            {children}
            {/* <Hubungi /> */}
          </div>
        </AppShell>
      </body>
    </html>
  );
}
