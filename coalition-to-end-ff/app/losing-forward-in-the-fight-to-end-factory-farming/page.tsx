import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/section";
import weWontStop from "@/public/images/losing-forward-in-the-fight-to-end-factory-farming/we-wont-stop.jpg";

export const metadata: Metadata = {
  title: "Losing Forward in the Fight to End Factory Farming",
};

export default function LosingForwardPage() {
  return (
    <>
      <div className="pt-28 lg:pt-20">
        <Image
          src={weWontStop}
          alt="Coalition to End Factory Farming volunteers holding a &ldquo;We Won&rsquo;t Stop&rdquo; banner"
          priority
          className="w-full"
        />
      </div>

      <Section width="narrow">
        <h1 className="text-center">
          Losing Forward in the Fight to End Factory Farming
        </h1>

        <div className="mt-10 space-y-5">
          <p>
            History shows us that most important reforms succeeded only after
            initial defeats. These defeats spread awareness of the issue,
            coalesced support around a specific objective, and taught movement
            organizers valuable lessons.
          </p>
          <p>
            The movement to end factory farming faces a long, uphill road to
            victory, but with the loss of Measure J this November in Sonoma
            County, the movement is one step further along the path. Success
            is built on failure.
          </p>
          <p>
            In September of 2023, volunteers with the Coalition to End Factory
            Farming began collecting signatures to get a bold factory farm
            ban on the ballot in Sonoma County. There are dozens of factory
            farms in Sonoma County, including some owned by national poultry
            giant Perdue Farms, as well as a massive duck factory farm that
            has been exposed for{" "}
            <a
              href="https://abc7news.com/i-team-reichardt-duck-farm-petaluma-animal-cruelty/362336/"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              criminally abusing animals
            </a>{" "}
            and{" "}
            <a
              href="https://casetext.com/case/californians-for-alternatives-to-toxics-v-reichardt-duck-farm-inc"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              polluting local waterways with animal waste
            </a>
            .
          </p>
          <p>
            After the proposed factory farm ban qualified for the ballot in
            March 2024, it was named Measure J. Industry opposition to Measure
            J was fierce. The opposition spent millions of dollars
            fearmongering about the measure; they outspent the Yes on J
            campaign by a ratio of 8-to-1. This is because the factory farming
            industry knows that the public cares deeply about protecting
            animals and our environment and they were desperate to obscure the
            truth with their own green-washed and humane-washed depiction of
            the largest animal farms in Sonoma County.
          </p>
          <p>
            The industry also had powerful elected leaders on their side. The
            County Board of Supervisors went to unprecedented lengths to
            hinder Measure J&rsquo;s chances, including{" "}
            <a
              href="https://www.pressdemocrat.com/article/news/sonoma-county-factory-farm-ballot-measure/"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              removing critical language from the ballot question
            </a>{" "}
            and{" "}
            <a
              href="https://www.pressdemocrat.com/article/news/cotati-votes-measure-j-factory-farms/"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              pressuring elected officials
            </a>{" "}
            in every city in the county to oppose Measure J. This led some
            councilmembers to{" "}
            <a
              href="https://www.youtube.com/watch?v=ugARsRGSwiQ&t=4758s"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              speak out about the pressure campaign.
            </a>
          </p>
          <p>
            As a result of these strong attacks on Measure J and our own
            shortcomings responding effectively with enough credibility,
            Measure J lost decisively at the ballot box.
          </p>
          <p>
            While it&rsquo;s incredibly disappointing that this opportunity to
            alleviate animal suffering and protect our environment fell
            short, we&rsquo;ve always known that ending factory farming will
            take time -- and losses -- along the way.
          </p>
          <p>
            <strong>
              As celebrated gay rights activist Evan Wolfson describes it, we
              must{" "}
            </strong>
            <a
              href="https://s3-us-west-2.amazonaws.com/ftm-assets/ftm/Scarywork.pdf"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              <strong>&ldquo;lose forward.&rdquo;</strong>
            </a>{" "}
            During the fight for marriage equality, Wolfson says that even
            losing campaigns created &ldquo;the opportunity to enlist more
            support, build more coalitions, and make it possible for more
            candidates and non-gay opinion-leaders to move toward
            fairness.&rdquo;
          </p>
          <p>
            We saw many of these types of wins in the Measure J campaign, from
            generating{" "}
            <a
              href="https://www.instagram.com/p/DCHoOTayqk4/?img_index=1"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              over 100 news articles
            </a>{" "}
            about Sonoma County factory farms to bringing out new volunteers
            who have been inspired and transformed by the experience. Measure
            J also formed connections between new coalition partners,
            including some who are now working together on environmental
            litigation against Sonoma County factory farms to stop water
            pollution. As for helping leaders move toward fairness, the
            campaign motivated some local elected leaders to call for better
            enforcement of existing animal cruelty laws and more transparency
            in the food system.
          </p>
          <p>
            For example, Sebastopol city councilmember Stephen Zollman{" "}
            <a
              href="https://www.pressdemocrat.com/article/news/sebastopol-measure-j-opposition/"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              said
            </a>
            , &ldquo;What is the big secret? If everything is hunky dory in
            our farms, then let&rsquo;s see. Open the doors. Let us see.&rdquo;
          </p>
          <p>
            Evan Wolfson says{" "}
            <a
              href="https://s3-us-west-2.amazonaws.com/ftm-assets/ftm/Scarywork.pdf"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              losing forward is about ending in a better place for the
              inevitable next battle.
            </a>{" "}
            The awareness, education, and momentum we created through the
            Measure J campaign has laid an important foundation that we can
            build on going forward. Individuals, community groups,
            journalists, and elected leaders are all more informed about the
            harms factory farms are causing in our community. Internally, all
            of us involved learned so much about how to run an effective
            political campaign, making us much more prepared for the next
            one.
          </p>
          <p>Some key learnings include:</p>
          <ul className="list-disc space-y-3 pl-6">
            <li>
              <strong>
                The campaign&rsquo;s initial stages needed more time
              </strong>{" "}
              than we gave them in our hurry to address an urgent problem.
              This includes building coalitions, identifying the best
              spokespeople, and fine-tuning the measure text for clarity.
            </li>
            <li>
              <strong>Simplicity is critical in the policy.</strong> A more
              complicated measure text creates more confusion and gives more
              footholds for misinformation. If the measure text is
              self-explanatory, it can quickly dispel misinformation that is
              being spread about what the measure does. In the case of
              Measure J, we used the{" "}
              <a
                href="https://www.epa.gov/sites/default/files/2015-08/documents/sector_table.pdf"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                U.S. Environmental Protection Agency&rsquo;s definition
              </a>{" "}
              for a Concentrated Animal Feeding Operation (CAFO), which is the
              only government definition for what is commonly called a
              factory farm. There are multiple sizes of CAFOs and the smaller
              sizes must meet additional criteria to be deemed a CAFO. The
              multi-part definition is based on the confinement area and
              length of confinement, the number of animals confined, and for
              medium CAFOs, the way that animal waste is handled. While it is
              clear-cut and objective, this multi-pronged definition left a
              lot of room for confusion because of its complexity and some
              terminology that isn&rsquo;t self-explanatory to the average
              voter. We may have been able to write a clearer definition
              ourselves, using plain language, but it would not have had the
              objectivity and credibility of the EPA behind it.
            </li>
            <li>
              Face-to-face conversations are one of the most effective
              tactics for building support for a measure and even changing
              people&rsquo;s preconceptions, <u>BUT</u> rather than jumping
              directly into deeper tactics like one-on-one deep canvassing,{" "}
              <strong>
                it is highly important to establish a widespread,
                public-facing presence to help shape people&rsquo;s first
                impression of the measure.
              </strong>{" "}
              If you don&rsquo;t, you leave that key first impression for most
              of the public available for the opposition to take.
            </li>
            <li>
              <strong>
                The opposition&rsquo;s playbook is full of dirty tactics
                including spreading blatant lies with no factual basis, and we
                must respond by calling out their deception.
              </strong>{" "}
              We can still run a clean and fact-based campaign while strongly
              and swiftly condemning the opposition for lying, fearmongering,
              and even paying tens of thousands of dollars to an environmental
              group for their support. The public deserves to know about
              these dirty tactics.
            </li>
          </ul>
          <p>
            Knowing what we know now, and with the concrete skills we
            developed through this campaign, we will only be stronger in
            future work, whether it&rsquo;s through the ballot box or other
            tactics. Many community leaders have already come together to
            discuss possible legislative solutions to pursue next.
          </p>
          <p>
            How do we make sure this loss is a step in the right direction? We
            must face it head on, learn from it, and build off of it. We have
            to acknowledge the disappointment of this loss and recognize where
            we fell short, while also celebrating the many wins that came from
            this campaign. We must bring people together to reflect on what we
            learned, hear feedback from the community, build trust through
            connection and strengthen our coalitions with groups who share
            similar concerns to us.
          </p>
          <p>We must keep moving forward.</p>
          <p>
            Gay marriage lost at the ballot box in states across the country{" "}
            <em>over 30 times</em> before it finally succeeded. These
            so-called failures aren&apos;t historical footnotes – they&apos;re
            blueprints for success. Each campaign cycle educates voters,
            refines proposals, and builds broader coalitions.
          </p>
          <p>
            Before the 19th Amendment was ratified,{" "}
            <a
              href="https://ballotpedia.org/State_women%27s_suffrage_ballot_measures"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              there were 54 ballot measures
            </a>{" "}
            to adopt women&rsquo;s suffrage in 30 states. Most lost. Women
            obviously weren&rsquo;t allowed to vote on this question.
            Similarly, with Measure J, the animals who are most harmed by
            factory farming can&rsquo;t vote to protect themselves, nor can
            future generations vote on issues today that affect the planet
            they will live on.
          </p>
          <p>
            We wish change would come sooner for their sakes most of all. But
            we know this is a long-term fight and we are committed to
            continuing the struggle to end factory farming no matter how long
            it takes. We have to keep trying, even if we, too, are destined to
            lose 30 times before we win.
          </p>
        </div>
      </Section>
    </>
  );
}
