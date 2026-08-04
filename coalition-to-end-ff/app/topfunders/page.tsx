import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import heroImg from "@/public/images/topfunders/factory-farm-grayscale.jpg";

export const metadata: Metadata = {
  title: "Top Funders",
};

export default function TopFundersPage() {
  return (
    <>
      <PageHero title="Top Funders" image={heroImg} imageAlt="" />

      <Section>
        <div className="space-y-5 text-center">
          <p>
            <a
              href="https://drive.google.com/file/d/1uON8sTvKaH21mX8t854l0Lwws2BZhDCZ/view?usp=sharing"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              Click here to see an Official Top Funders sheet.
            </a>
          </p>
          <p>
            <Link href="/measure-text" className="underline">
              Click here to read the full text of ordinance.
            </Link>
          </p>
        </div>
      </Section>
    </>
  );
}
