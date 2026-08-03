import type { Metadata } from "next";
import { Archivo, Oswald } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-oswald",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: {
    default: "Coalition to End Factory Farming",
    template: "%s — Coalition to End Factory Farming",
  },
  description:
    "The Coalition to End Factory Farming is a network of numerous animal advocacy, environmental, and social justice organizations working to end factory farming in Sonoma County and beyond.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${archivo.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
