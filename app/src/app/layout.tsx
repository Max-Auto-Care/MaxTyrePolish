import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MetaPixel from "./MetaPixel";
import OrderOnlineTracker from "@/components/OrderOnlineTracker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Max Tyre Polish",
  description:
    "Pilihan praktis untuk perawatan tampilan ban kendaraan sehari-hari.",
  icons: "/icon.png",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <MetaPixel />
        <OrderOnlineTracker />
        {children}
      </body>
    </html>
  );
}
