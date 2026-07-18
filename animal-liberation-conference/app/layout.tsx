import type { Metadata } from "next";
import { Abel, Oswald, Poppins, Rubik } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-oswald",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-poppins",
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-rubik",
});

const abel = Abel({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-abel",
});

export const metadata: Metadata = {
  title: {
    default: "Animal Liberation Conference",
    template: "%s — Animal Liberation Conference",
  },
  description:
    "Where grassroots animal rights activists come together for change.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${poppins.variable} ${rubik.variable} ${abel.variable}`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
