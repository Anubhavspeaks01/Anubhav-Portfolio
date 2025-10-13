import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Durgesh Singh — AI/ML Portfolio",
  description: "Futuristic portfolio showcasing AI/ML, Computer Vision, and Gen AI projects by Durgesh Singh.",
  metadataBase: new URL("https://durgesh-portfolio-pied.vercel.app"),
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Durgesh Singh — AI/ML Portfolio",
    description: "Futuristic portfolio showcasing AI/ML, Computer Vision, and Gen AI projects by Durgesh Singh.",
    url: "/",
    siteName: "Durgesh Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Durgesh Singh — AI/ML Portfolio",
    description: "Futuristic portfolio showcasing AI/ML, Computer Vision, and Gen AI projects by Durgesh Singh.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div id="cursor-ring" className="cursor-ring" />
        {children}
      </body>
    </html>
  );
}
