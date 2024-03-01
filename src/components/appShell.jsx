"use client";

import { NextUIProvider } from "@nextui-org/react";
const AppShell = ({ children }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};
export default AppShell;
