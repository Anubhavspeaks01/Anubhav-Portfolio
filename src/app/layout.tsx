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
  title: "Anubhav Singh — AI/ML Portfolio",
  description: "Futuristic portfolio showcasing AI/ML, Computer Vision, and Gen AI projects by Anubhav Singh.",
  metadataBase: new URL("https://Anubhav-portfolio-pied.vercel.app"),
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Anubhav Singh — AI/ML Portfolio",
    description: "Futuristic portfolio showcasing AI/ML, Computer Vision, and Gen AI projects by Anubhav Singh.",
    url: "/",
    siteName: "Anubhav Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anubhav Singh — AI/ML Portfolio",
    description: "Futuristic portfolio showcasing AI/ML, Computer Vision, and Gen AI projects by Anubhav Singh.",
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
