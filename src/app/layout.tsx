import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Devinche",
  description: "Reimagining Digital Experiences with Innovation and Excellence",
  openGraph: {
    title: "Devinche",
    description: "Reimagining Digital Experiences with Innovation and Excellence",
    url: "https://devinche.de", // Update this with your actual domain
    siteName: "Devinche",
    images: [
      {
        url: "/og-image.png", // OG image path
        width: 1200,
        height: 630,
        alt: "Devinche Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devinche",
    description: "Reimagining Digital Experiences with Innovation and Excellence",
    images: ["/og-image.png"], // Twitter card image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="pt-14 sm:pt-16">
          {children}
        </main>
          <Footer/>
      </body>
    </html>
  );
}
