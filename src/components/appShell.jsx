"use client";

import { NextUIProvider } from "@nextui-org/react";
const AppShell = ({ children }) => {
  return (
    <NextUIProvider>
      <div className="w-full bg-white">{children}</div>
    </NextUIProvider>
  );
};
export default AppShell;
