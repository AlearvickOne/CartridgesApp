import type { Metadata } from "next";
import { Catamaran, Inter, Reddit_Mono } from "next/font/google";
import "./globals.scss";

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
  console.log(process.env.GITHUB_CLIENT_ID);
  return (
    <html lang="en">
      <body className={catamaran.className}>{children}</body>
    </html>
  );
}
