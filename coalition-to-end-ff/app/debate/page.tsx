import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Section } from "@/components/section";
import hero from "@/public/images/debate/hero-debate.png";
import lewisKristina from "@/public/images/debate/lewis-kristina.png";
import weberNewell from "@/public/images/debate/weber-newell.png";

export const metadata: Metadata = {
  title: "Here's What Happened at the Measure J Debate",
};

export default function DebatePage() {
  return (
    <Section>
      <div className="pt-28 lg:pt-20">
        <Image
          src={hero}
          alt="Kristina Garfinkel speaking at the podium during the Measure J debate, hosted by KRCB 104.9 FM"
          priority
          className="w-full"
        />

        <h1 className="mt-10 text-center">
          Here&rsquo;s What Happened at the Measure J Debate
        </h1>

        <div className="mt-6 space-y-5">
          <p>
            Last week, Yes on J representatives faced opponents in a{" "}
            <a
              href="https://www.youtube.com/watch?v=4zfIqQjin7Y"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              livestreamed debate
            </a>{" "}
            hosted by the local NPR station, KRCB.
          </p>
          <p>
            <strong>Kristina Garfinkel</strong>, a lead organizer with the
            Coalition to End Factory Farming, and{" "}
            <strong>Lewis Bernier</strong>, a factory farm investigator,
            shared the truth about the 21 Concentrated Animal Feeding
            Operations (CAFOs) in Sonoma County and how they are impairing
            local waterways with waste runoff, harming animals, outcompeting
            smaller farms, and spreading dangerous pathogens like salmonella.
          </p>
        </div>

        <Image
          src={lewisKristina}
          alt="Lewis Bernier and Kristina Garfinkel speaking at the Measure J debate"
          className="mx-auto mt-10 w-full md:max-w-[760px]"
        />

        <div className="mt-10 space-y-5">
          <p>
            The opposition, which included factory farm owner Mike Weber and
            attorney Brent Newell, denied these facts and insisted that the
            large CAFOs in Sonoma County are different from large CAFOs in
            other parts of the country despite the fact that they meet the
            same EPA definition, for example by confining over 125,000
            chickens raised for meat or 700 mature dairy cows.
          </p>
        </div>

        <Image
          src={weberNewell}
          alt="Mike Weber and Brent Newell speaking in opposition at the Measure J debate"
          className="mx-auto mt-10 w-full md:max-w-[760px]"
        />

        <div className="mt-10 space-y-5">
          <p>
            Weber&rsquo;s company,{" "}
            <Link href="/sunrise" className="underline">
              Sunrise Farms
            </Link>
            , operates 7 of{" "}
            <Link href="/cafos#cafo-map" className="underline">
              the 21 CAFOs in Sonoma County
            </Link>{" "}
            including one with over half a million chickens who never step
            foot outside. During the debate, Weber said &ldquo;I do operate
            an operation that has over 500,000 chickens&hellip;size
            doesn&rsquo;t matter.&rdquo; He told the public that the size of
            commercial animal farms has nothing to do with animal welfare.
          </p>
          <p>
            But he was momentarily speechless when the Yes on J side pointed
            out that his company also told us hens are happier in cages back
            when Sunrise Farms fought against California&rsquo;s Proposition
            2, which banned the most intensive confinement of egg-laying
            hens, veal calves, and pregnant mother pigs. You can{" "}
            <a
              href="https://www.instagram.com/p/DATqc6IvE8q/"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              watch this clip from the debate here
            </a>
            .
          </p>
          <h4>
            <a
              href="https://www.youtube.com/watch?v=4zfIqQjin7Y"
              target="_blank"
              rel="noopener"
            >
              You can watch the full Measure J debate on KRCB&rsquo;s YouTube
              here.
            </a>
          </h4>
          <p>
            Both Weber and Newell said Measure J was a solution to a
            non-existent problem, denying the evidence presented to them
            about the many harms CAFOs cause, including here in Sonoma
            County.
          </p>
          <p>
            <strong>
              Measure J is the top issue on Sonoma County&rsquo;s ballot.
            </strong>{" "}
            It&rsquo;s sparking thousands of important conversations across
            the county (and beyond) and exposing factory farms that have long
            tried to hide their real conditions behind &ldquo;humane&rdquo;
            marketing. Help us share the truth with voters by joining one of
            our{" "}
            <Link href="/calendar" className="underline">
              upcoming outreach events
            </Link>
            .
          </p>
        </div>
      </div>
    </Section>
  );
}
