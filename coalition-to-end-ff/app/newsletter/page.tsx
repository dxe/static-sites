import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { SquarespaceEmbed } from "@/components/squarespace-embed";
import { readEmbed } from "@/lib/embeds";

export const metadata: Metadata = {
  title: "Subscribe",
};

export default function NewsletterPage() {
  const embedHtml = readEmbed("newsletter-subscribe.txt");

  return (
    <>
      <PageHero title="Stay informed" />

      <Section>
        <div className="flex justify-center py-6 lg:py-10">
          <SquarespaceEmbed html={embedHtml} />
        </div>
      </Section>
    </>
  );
}
