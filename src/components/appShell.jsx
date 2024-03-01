"use client";

import { NextUIProvider } from "@nextui-org/react";
const AppShell = ({ children }) => {
  return (
    <NextUIProvider>
      <div className="w-full bg-gradient-to-b from-blue-50 to-[#AEE2FF]">
        {children}
      </div>
    </NextUIProvider>
  );
};
export default AppShell;
