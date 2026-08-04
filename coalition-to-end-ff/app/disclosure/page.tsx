import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";

import heroImg from "@/public/images/disclosure/factory-farm-grayscale.jpg";

export const metadata: Metadata = {
  title: "Disclosure",
};

export default function DisclosurePage() {
  return (
    <>
      <PageHero
        title="Disclosure"
        image={heroImg}
        imageAlt=""
        overlayOpacity={15}
      />

      <Section>
        <p>
          Ad paid for by{" "}
          <span className="underline">
            Coalition to End Factory Farming, Yes on Measure J, Sponsored by
            animal rights and environmental justice organizations
          </span>
        </p>
      </Section>
    </>
  );
}
