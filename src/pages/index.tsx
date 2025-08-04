
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/pages/components/Header";
import { Footer } from "@/pages/components/Footer";
import Top from "./Top";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Top/>
    </>
  );
}
