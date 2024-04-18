import type { Metadata } from "next";
import { Catamaran } from "next/font/google";
import "./globals.scss";
import { AuthProvider } from "@/Providers/AuthProvider";
import { QueryProvider } from "@/Providers/QueryProvider";

const catamaran = Catamaran({ subsets: ["latin"], weight: ["100", "200", "400", "900"] });

export const metadata: Metadata = {
  title: "Cartridge App",
  description: "Application cartridge",
};

const session = await auth();

if (!session) redirect("/api/auth/signin");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={catamaran.className}>
        <QueryProvider>
          <AuthProvider>{children}</AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
