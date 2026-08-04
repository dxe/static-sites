import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/section";

import volunteersImg from "@/public/images/community-support-for-measure-j-1/yes-on-j-volunteers.jpg";

export const metadata: Metadata = {
  title: "Community Support for Measure J",
};

function Letter({
  name,
  intro,
  quote,
  href,
}: {
  name: string;
  intro: ReactNode;
  quote: ReactNode;
  href: string;
}) {
  return (
    <div className="mt-5">
      <p>
        <strong>{name}</strong> {intro}
      </p>
      <p className="mt-5">
        <em>{quote}</em> Read the letter{" "}
        <a href={href} target="_blank" rel="noopener" className="underline">
          here
        </a>
        .
      </p>
    </div>
  );
}

export default function CommunitySupportForMeasureJPage() {
  return (
    <Section>
      <div className="pt-28 lg:pt-20">
        <Image src={volunteersImg} alt="" className="w-full object-cover" />

        <h1 className="mt-10 text-center">Community Support for Measure J</h1>

        <div className="mt-5 space-y-5">
          <p>
            Residents of Sonoma County have the historic opportunity to vote
            on{" "}
            <Link href="/measure-text" className="underline">
              Measure J
            </Link>
            <strong>,</strong> a first-of-its-kind initiative to stop
            Concentrated Animal Feeding Operations (CAFOs), also called
            factory farms.
          </p>

          <p>
            If adopted, Measure J will require about{" "}
            <Link href="/cafos" className="underline">
              20 large CAFOs
            </Link>{" "}
            in the county to either close down or downsize over a 3-year
            period and prevent any new CAFOs from moving in. If passed,
            Measure J would prevent the suffering of millions of animals,
            protect our local waterways from massive amounts of untreated
            animal waste, and reduce greenhouse gas emissions.
          </p>

          <p>
            These past few months, Yes on J volunteers have been having
            conversations with local residents - and we&rsquo;ve connected
            with so many compassionate people who are excited to vote yes on
            Measure J! We&rsquo;re especially thrilled to see new supporters
            stepping up to spread the word and even joining us at volunteer
            events.
          </p>

          <p>
            One of the most meaningful ways newcomers are getting involved is
            through Letters to the Editor - notes to press outlets where
            everyday people can express their concerns and opinions. Here
            are some notable highlights from recent LTEs:
          </p>
        </div>

        <Letter
          name="Jeremy Hill (Santa Rosa)"
          intro={
            <>
              learned more about Measure J after a volunteer knocked on his
              door and explained how animals in CAFOs are deprived of the
              ability to exhibit natural behaviors, and often mutilated and
              forced into overcrowded conditions. Jeremy shared:
            </>
          }
          quote={
            <>
              I do not want such barbaric practices to be perpetrated in my
              backyard. I urge all of my neighbors and community members to
              vote yes on Measure J to take a strong step toward eradicating
              animal cruelty in Sonoma County.{" "}
            </>
          }
          href="https://www.pressdemocrat.com/article/opinion/sonoma-county-health-rivera-climate/"
        />

        <Letter
          name="Peter Henriksen (Occidental)"
          intro={
            <>
              , a local veterinarian, spoke up for the animals and the small
              farmers that get pushed out by large CAFOs.
            </>
          }
          quote={
            <>
              I grew up on a small family farm in Iowa in the 1950s&hellip;
              The last time I was there the small farmers were nearly gone,
              replaced by huge acreages for crops and factory farms. Animals
              suffered from the day they were born till the day they died.
              In the process their waste contaminated the land and the
              water. So when I saw Measure J, I was happy to see there was
              something I could do about that not happening in Sonoma
              County.{" "}
            </>
          }
          href="https://www.pressdemocrat.com/article/opinion/santa-rosa-farming-measure-cellphones-capitol-riot/"
        />

        <Letter
          name="Anna Narbutovskih (Guerneville)"
          intro={
            <>
              called out the Board of Supervisors for their unprecedented
              decision to change the language in the opening statement of
              our ballot measure. This move is only one of many that the
              BOS has made against Measure J.
            </>
          }
          quote={
            <>
              The point of the measure is to eliminate concentrated animal
              feeding operations and, thus, promote animal welfare and water
              quality. Please put the words back into Measure J. Voters
              deserve a fair description to make an informed choice.{" "}
            </>
          }
          href="https://www.pressdemocrat.com/article/opinion/santa-rosa-biden-cannabis-appellations/"
        />

        <Letter
          name="Larry Hanson (Forestville)"
          intro={
            <>
              addressed some of the misinformation that the opposition is
              spreading about alleged consequences of Measure J.
            </>
          }
          quote={
            <>
              I remember when California asked chicken producers not to
              confine their animals in tiny cages. Chicken producers did not
              disappear, and consumers still get their California eggs
              albeit by being cage-free.{" "}
            </>
          }
          href="https://www.pressdemocrat.com/article/opinion/santa-rosa-medal-freedom-honor-trump-gaza-israel/"
        />

        <p className="mt-10">
          Interested in advocating for Measure J? We&rsquo;re always excited
          to welcome new volunteers to our events! No prior campaigning
          experience is necessary. <strong>See our calendar</strong>{" "}
          <Link href="/calendar" className="underline">
            <strong>here</strong>
          </Link>
          .
        </p>
      </div>
    </Section>
  );
}
