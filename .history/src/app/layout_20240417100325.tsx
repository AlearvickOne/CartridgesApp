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
  return (
    <html lang="en">
      <body className={catamaran.className}>
        <div className="">{process.env.GITHUB_CLIENT_ID}</div>
        {children}
      </body>
    </html>
  );
}
