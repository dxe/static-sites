import type { Metadata } from "next";
import { Section } from "@/components/section";
import { SquarespaceEmbed } from "@/components/squarespace-embed";
import { readEmbed } from "@/lib/embeds";

export const metadata: Metadata = {
  title: "Metrics Dashboard",
};

export default function DashboardPage() {
  const dashboardEmbedHtml = readEmbed("metrics-dashboard.txt");

  return (
    <Section>
      <div className="pt-28 lg:pt-20">
        <SquarespaceEmbed html={dashboardEmbedHtml} />
      </div>
    </Section>
  );
}
