import type { Metadata } from "next";
import { Catamaran } from "next/font/google";
import "./globals.scss";

import { QueryProvider } from "@/Providers/QueryProvider";

const catamaran = Catamaran({ subsets: ["latin"], weight: ["100", "200", "400", "900"] });

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
      <body className={`${catamaran.className} bg-slate-50 `}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
