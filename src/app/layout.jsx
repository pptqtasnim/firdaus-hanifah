import { Inter } from "next/font/google";

import "./globals.css";
import AppShell from "@/components/appShell";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} `}>
        <AppShell>
          <div className="max-w-full md:max-w-[50%] bg-gradient-to-b from-red-400 shadow-lg shadow-red-400 to-blue-200 mx-auto min-h-screen">
            {children}
          </div>
        </AppShell>
      </body>
    </html>
  );
}
