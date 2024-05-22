import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import waves from "../public/waves.svg";
import Image from "next/image";
import ThemeProvider from "./utils/client side utils/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weather-Reza-Astaraki",
  description: "front-end test created by NextJs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body className="text-white rlt">
        <ThemeProvider>{children}</ThemeProvider>
        <div className="bottom-0 hidden md:block fixed w-full">
          <Image src={waves} alt="waves" className=" w-full" />
        </div>
      </body>
    </html>
  );
}
