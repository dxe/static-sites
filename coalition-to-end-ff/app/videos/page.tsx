import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { VideoEmbed } from "@/components/video-embed";

export const metadata: Metadata = {
  title: "Videos",
};

export default function VideosPage() {
  return (
    <>
      <PageHero title="VIDEOS" />
      <Section>
        <div className="space-y-16">
          <div className="space-y-5">
            <p className="text-xl md:text-2xl"><strong>Measure J’s impact and importance explained in 4 minutes</strong></p>
            <VideoEmbed
              src="https://www.youtube.com/embed/1ksmM09t2TA"
              title="Measure J in Sonoma County, Explained"
            />
            <p>
              Measure J is a citizen-initiated ballot measure to prohibit
              Concentrated Animal Feeding Operations (CAFOs), commonly
              referred to as factory farms. If adopted, Measure J will
              require approximately 21 large CAFOs in the county to either
              close down or downsize, and it will prevent any new CAFOs from
              opening in the county. It would also set a precedent as the
              first time a U.S. county prohibits factory farms! Factory
              farms are poisoning the environment, hoarding the limited
              water supply, spreading disease, and confining animals in
              deplorable conditions. Measure J could be a major turning
              point in the movement to stop factory farming.
            </p>
          </div>

          <div className="space-y-5">
            <p className="text-xl md:text-2xl"><strong>Hear from a veterinarian supporting Measure J</strong></p>
            <VideoEmbed
              src="https://www.youtube.com/embed/ivHRsdUP6_s"
              title="Vote Yes on Measure J to Protect Animals"
            />
            <p>
              Dr. Brenda Forsythe has treated cattle, sheep, horses, dogs,
              cats and many other animals. She knows that farm animals are
              capable of suffering just like companion animals, and factory
              farms do not provide the level of care that animals require.
              That’s why she supports Measure J to stop factory farming
              by setting moderate limits on the number of animals confined
              in a commercial facility.
            </p>
          </div>

          <div className="space-y-5">
            <p className="text-xl md:text-2xl"><strong>Hear from a nurse supporting Measure J</strong></p>
            <VideoEmbed
              src="https://www.youtube.com/embed/S6TD-91UBbI"
              title="Factory Farms Threaten Public Health - Vote YES on Measure J"
            />
            <p>
              Many local nurses like Pam are speaking up in support of
              Measure J to protect our community from the negative health
              impacts of factory farming. Health professionals agree that
              large, animal factory farms pose serious risks to public
              health, including the spread of zoonotic diseases from
              animals to humans. That’s why the American Public Health
              Association has called for a moratorium on Concentrated
              Animal Feeding Operations (CAFOs).
            </p>
          </div>

          <div className="space-y-5">
            <p className="text-xl md:text-2xl"><strong>Hear from a factory farm investigator supporting Measure J</strong></p>
            <VideoEmbed
              src="https://www.youtube.com/embed/P2CnFIwE_js"
              title="Look Inside Sonoma County Factory Farms - Vote Yes on J to Protect Animals"
            />
            <p>
              Factory farm investigators have documented egregious animal
              cruelty in Sonoma County, CA. We have a chance to stop this
              cruelty by voting YES on Measure J to stop factory farming in
              Sonoma County.
            </p>
          </div>

          <div className="space-y-5">
            <p className="text-xl md:text-2xl"><strong>Yes on Measure J Community Town Hall</strong></p>
            <VideoEmbed
              src="https://www.youtube.com/embed/RzIrRWqtzv4"
              title="Yes on Measure J Town Hall"
            />
            <p>
              During our Yes on J Community Town Hall on Sunday, Oct 6th,
              organizers with the Yes on J campaign gave a presentation on
              Measure J and answered questions from Sonoma County voters.
              Watch the video to learn more about the impact of Measure J
              and the impetus for this historic initiative to stop factory
              farming in Sonoma County.
            </p>
          </div>

          <div className="space-y-5">
            <p className="text-xl md:text-2xl"><strong>Measure J Debate hosted by KRCB</strong></p>
            <VideoEmbed
              src="https://www.youtube.com/embed/4zfIqQjin7Y"
              title="KRCB’s Town-hall Debate on Measure J"
            />
            <p>
              Yes on J representatives faced opponents in a{" "}
              <a
                href="https://www.youtube.com/watch?v=4zfIqQjin7Y"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                livestreamed debate
              </a>{" "}
              hosted by the local NPR station, KRCB. Kristina Garfinkel, a
              lead organizer with the Coalition to End Factory Farming, and
              Lewis Bernier, a factory farm investigator, shared the truth
              about the 21 Concentrated Animal Feeding Operations (CAFOs)
              in Sonoma County and how they are impairing local waterways
              with waste runoff, harming animals, outcompeting smaller
              farms, and spreading dangerous pathogens like salmonella.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
