import type { Metadata } from "next";
import { PT_Serif } from "next/font/google";
import "./globals.scss";

import { QueryProvider } from "@/Providers/QueryProvider";
import { PayPalProvider } from "@/Providers/PayPalProvider";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const catamaran = PT_Serif({ subsets: ["latin"], weight: ["400", "700"] });

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
        className={`${catamaran.className} bg-slate-50 max-w-[1366px] max-h-full overflow-hidden `}
      >
        <PayPalScriptProvider
          options={{
            clientId:
              "ASzdWRosy6BcupeB1NuwUql31dX5DhKuSJ2xwRx-Ua0sCsqrWhPj-v-8kiHI24HRSz5TZr1nJS4DQr1L",
          }}
        >
          <QueryProvider>{children}</QueryProvider>
        </PayPalScriptProvider>
      </body>
    </html>
  );
}
