import type { Metadata } from "next";
import { readEmbed } from "@/lib/embeds";
import { SquarespaceEmbed } from "@/components/squarespace-embed";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Forms",
};

export default function Page() {
  const html = readEmbed("form-page-embed.txt");
  return (
    <Section>
      <div className="pt-28 lg:pt-20">
        <SquarespaceEmbed html={html} />
      </div>
    </Section>
  );
}
