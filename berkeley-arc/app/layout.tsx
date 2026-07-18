import type { Metadata } from "next";
import { Montserrat, Oswald, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-roboto-condensed",
});

export const metadata: Metadata = {
  title: {
    default: "Berkeley Animal Rights Center",
    template: "%s — Berkeley Animal Rights Center",
  },
  description:
    "The Berkeley Animal Rights Center (ARC) is the first community center for animal rights in the US.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      id="top"
      data-scroll-behavior="smooth"
      className={`${oswald.variable} ${montserrat.variable} ${robotoCondensed.variable} antialiased`}
    >
      <body className="min-h-screen bg-arc-orange font-body">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
