import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";

export const metadata: Metadata = {
  title: "Yes on Measure J | End Factory Farming in Sonoma County",
  description:
    "Measure J is a citizen-initiated ballot measure in Sonoma County to prohibit factory farms in our community.",
};

// The live site serves the same page at / and /home.
export default function Home() {
  return <HomePage />;
}
