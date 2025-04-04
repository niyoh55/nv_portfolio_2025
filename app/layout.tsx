import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Roboto,
  Noto_Sans,
  DM_Sans,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "NV Portfolio",
  description: "Niyoh Edwyn Villanueva - Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${notoSans.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
