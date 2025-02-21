import type { Metadata } from "next";
import { Petit_Formal_Script, Poppins, Space_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"]
});

const petit = Petit_Formal_Script({
  variable: "--font-petit",
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata: Metadata = {
  title: "StellarWorks",
  description: "Web and Mobile App Development"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body
        className={`${poppins.variable} ${spaceMono.variable} ${petit.variable} antialiased no-scrollbar`}
      >
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
