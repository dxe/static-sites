import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Yard signs",
};

export default function YardSignPage() {
  return (
    <>
      <PageHero title="Request a Yard Sign" />
      <Section>
        <div className="mx-auto max-w-[650px]">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdTxwRVBaha0G2y_kBu1OHj90I9FrSEa_S_VH4czOB4tM_7qQ/viewform?embedded=true"
            width="100%"
            height={3000}
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            title="Yard sign / poster request for Yes on Measure J"
          >
            Loading…
          </iframe>
        </div>
      </Section>
    </>
  );
}
