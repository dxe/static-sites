import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { LinkButton } from "@/components/link-button";
import { SquarespaceEmbed } from "@/components/squarespace-embed";
import { readEmbed } from "@/lib/embeds";

export const metadata: Metadata = {
  title: "Events",
};

export default function CalendarPage() {
  const calendarEmbedHtml = readEmbed("calendar.txt");

  return (
    <>
      <PageHero title="Calendar & Events" />

      <Section>
        <SquarespaceEmbed html={calendarEmbedHtml} />

        <div className="mt-10 flex justify-center">
          <LinkButton href="https://www.facebook.com/coalitiontoendfactoryfarming/events">
            View Facebook events
          </LinkButton>
        </div>
      </Section>
    </>
  );
}
