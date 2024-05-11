import type { Metadata } from "next";
import { QueryProvider } from "@/Providers/QueryProvider";
import { PayPalProvider } from "@/Providers/PayPalProvider";

import "./globals.scss";
import stylesAnims from "@/styles/anims/anims.module.scss";
import { PT_SERIF_FONT } from "@/constants/constants";

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
        className={`${stylesAnims.leftRightWalking} ${PT_SERIF_FONT.className} max-w-screen  max-h-screen overflow-hidden bg-image`}
      >
        <PayPalProvider>
          <QueryProvider>{children}</QueryProvider>
        </PayPalProvider>
      </body>
    </html>
  );
}
