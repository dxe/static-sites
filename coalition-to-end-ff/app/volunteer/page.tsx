import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { LinkButton } from "@/components/link-button";
import volunteersImg from "@/public/images/volunteer/signature-volunteers-3panes.png";

export const metadata: Metadata = {
  title: "Volunteer",
};

export default function VolunteerPage() {
  return (
    <>
      <PageHero title="Help Pass Measure J" />

      <Section>
        <div className="space-y-5">
          <p>
            We are relying on volunteers to reach as many of the 300,000
            voters in Sonoma County as possible with our message about the
            importance of Measure J! We need people to help knock on doors,
            make phone calls, do outreach in the community, and more. Please
            sign up to volunteer if you can help either remotely or in
            person. Or you can check out our calendar of events and join us
            for an upcoming event any time.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <LinkButton href="https://docs.google.com/forms/d/e/1FAIpQLSe9zqqX6fxxSGkAyjqIqLfNtgab80LodzIlZk1lDuq38Q772w/viewform">
            Sign up to volunteer
          </LinkButton>
          <LinkButton href="/calendar">Calendar of events</LinkButton>
        </div>

        <div className="mt-10">
          <Image src={volunteersImg} alt="" />
        </div>
      </Section>
    </>
  );
}
