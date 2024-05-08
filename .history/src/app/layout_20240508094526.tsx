import type { Metadata } from "next";
import { PT_Serif } from "next/font/google";
import { QueryProvider } from "@/Providers/QueryProvider";
import { PayPalProvider } from "@/Providers/PayPalProvider";

import "./globals.scss";
import stylesAnims from "@/styles/anims/anims.module.scss";

export const metadata: Metadata = {
  title: "Cartridge App",
  description: "Application cartridge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${
          (catamaran.className, stylesAnims.leftRightWalking)
        } max-w-screen  max-h-screen overflow-hidden bg-image`}
      >
        <PayPalProvider>
          <QueryProvider>{children}</QueryProvider>
        </PayPalProvider>
      </body>
    </html>
  );
}
