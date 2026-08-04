import type { Metadata } from "next";
import { Section } from "@/components/section";
import { FigureImage } from "@/components/figure-image";

import cageImg from "@/public/images/sunrise/sunrise-farms-cage.jpg";

export const metadata: Metadata = {
  title: "Sunrise Farms",
};

export default function SunrisePage() {
  return (
    <Section width="narrow">
      <div className="pt-28 lg:pt-20">
        <h1 className="text-center">Know the Facts about Sunrise Farms</h1>

        <div className="mt-5 space-y-5">
          <p>
            Seven of the estimated 21 Concentrated Animal Feeding Operations
            (CAFOs) in Sonoma County are operated by a <em>single</em>{" "}
            company: Sunrise Farms LLC. These CAFOs range in size from just
            above the large CAFO threshold of 82,000 chickens all the way up
            to over 600,000 chickens.
          </p>
        </div>

        <FigureImage
          src={cageImg}
          alt=""
          caption="A hen stuck in the wire of her cage inside Sunrise Farms at 395 Liberty Rd, Petaluma in 2016."
          captionPosition="below"
          className="mt-10 text-center"
        />

        <div className="mt-10 space-y-5">
          <p>
            Back in the 1940s, there were over 4,000 egg farms in Sonoma
            County, but over the decades, the largest operations have grown
            at the expense of small farms. By 2015, there were{" "}
            <a
              href="https://sonomacounty.ca.gov/Main%20County%20Site/Natural%20Resources/Agricultural%2C%20Weights%20%26%20Measures/Documents/Crop%20Reports/2015_crop_report.pdf"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              only 157
            </a>{" "}
            egg farms left, with two large companies, Sunrise Farms LLC and
            Petaluma Farms, dominating the entire commercial industry. Over
            the years, Sunrise has sold eggs to Costco, Safeway, Walmart,
            Sam&rsquo;s Club, Trader Joe&rsquo;s and other large retail
            chains.
          </p>

          <p>
            <em>
              &ldquo;Sunrise is one of two big egg producers left in a
              community that once had 2,700 and called itself the Egg Basket
              of the World.&rdquo;
            </em>{" "}
            -{" "}
            <a
              href="https://www.pressdemocrat.com/article/news/pd-editorial-over-easy-a-national-standard-for-egg-farms/"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              2008 Press Democrat Editorial Article
            </a>
          </p>

          <p>
            <strong>Sunrise Farms was a major opponent to </strong>
            <a
              href="https://ballotpedia.org/California_Proposition_2,_Farm_Animal_Confinement_Initiative_(2008)"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              <strong>California&rsquo;s Proposition 2</strong>
            </a>
            <strong>
              , a ballot measure to outlaw intensive confinement of egg-laying
              hens,
            </strong>{" "}
            calves raised for veal, and pregnant pigs. In an{" "}
            <a
              href="https://www.pressdemocrat.com/article/news/no-industry-standards-and-practices-are-already-in-place-for-humane-treatm/"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              opinion piece
            </a>{" "}
            opposing Proposition 2, Sunrise Farms co-owner Arnie Riebli tried
            to convince consumers that keeping animals in cages is better for
            the wellbeing of the animals.
          </p>

          <p>
            Proposition 2 passed in 2008 with 63.2% of Sonoma County voters
            voting for it. Despite the overwhelming support from voters
            across the state and here in Sonoma County,{" "}
            <a
              href="https://www.prnewswire.com/news-releases/california-egg-farmers-file-suit-against-the-state-of-california-challenging-the-constitutionality-of-proposition-2-179966961.html"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              Arnie Riebli led a lawsuit
            </a>{" "}
            against the State of California challenging the constitutionality
            of Proposition 2.
          </p>

          <p>
            In addition to advocating against animal welfare improvements,
            Sunrise Farms co-owner Michael Weber has lied under oath about
            conditions and practices at his facilities. He lied when he
            denied that there is cannibalism among the birds at Sunrise and
            when he said that his employees do not kill birds by cervical
            dislocation (breaking their necks). After mortality sheets that
            listed cannibalism were brought up in court, Weber finally
            admitted that birds do regularly die from cannibalism at Sunrise
            Farms.
          </p>

          <p>
            And you can{" "}
            <a
              href="https://www.dropbox.com/scl/fi/pct0ky9pc6i7722f864cv/broll-2.mp4?rlkey=71onqabnwx9jc6jy43r7h495w&dl=0"
              target="_blank"
              rel="noopener"
            >
              <strong>see footage for yourself</strong>
            </a>{" "}
            <strong>
              of Sunrise Farms employees killing birds by breaking their
              necks
            </strong>{" "}
            (scroll to the 1:45 minute mark), despite Weber&rsquo;s sworn
            testimony that they don&rsquo;t use this kill method.
          </p>

          <p>
            This company is once again advocating against animal welfare
            advancements, trying to tell us that they are doing everything
            right and that there&rsquo;s no need for Measure J.
          </p>

          <p>
            Sunrise Farms co-owner Michael Weber operates another commercial
            egg business called Weber Family Farms. Between the two, Sunrise
            and Weber Family Farms donated $120,000 to the opposition to
            Measure J. That&rsquo;s a small sum for a company like Sunrise
            Farms, with{" "}
            <a
              href="https://www.northbaybiz.com/northbay-biz-top-500-lists/"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              over 60 million dollars in revenue
            </a>
            . The company has also received huge government bailouts paid by
            our tax dollars during crises like the avian flu outbreak last
            year.
          </p>

          <p>
            After Sunrise Farms and Weber Family Farms facilities experienced
            outbreaks of Highly Pathogenic Avian Influenza late last year,
            they killed hundreds of thousands of birds to prevent the spread
            of the disease. This included more than 550,000 birds at one
            facility in Petaluma. Extreme confinement like that at Sunrise
            Farms is a major risk factor in spreading diseases such as avian
            flu. (It also{" "}
            <a
              href="https://www.instagram.com/p/DAD7R3cvWGO/"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              causes stress and injuries
            </a>{" "}
            for the animals.)
          </p>

          <p>
            One method that Weber Family Farms used to kill birds after an
            outbreak in December 2023 is{" "}
            <a
              href="https://www.pressdemocrat.com/article/news/latest-sonoma-county-front-in-avian-flu-crisis-how-exposed-farm-raised-bir/"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              ventilation shutdown plus heat
            </a>
            . It is a highly controversial mass kill method which involves
            sealing a building, turning off ventilation, and increasing the
            temperature until the animals inside die from heat stroke. The
            process takes hours, and it is widely{" "}
            <a
              href="https://www.vavsd.org/"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              condemned by veterinarians
            </a>
            .
          </p>

          <p>
            This cruelty was rewarded with an indemnity payment of $4.8
            million from the federal government to compensate for the loss of
            income. In total, Sunrise Farms LLC and Weber Family Farms
            received{" "}
            <a
              href="https://docs.google.com/spreadsheets/d/1_f5_37dxd9EJ72RVEwyVKCibrJtFo6xiFGHZIMFpPvs/edit?gid=1327623620#gid=1327623620"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              over $9 million in indemnity payments
            </a>{" "}
            for loss of income during the recent avian flu outbreak. Those
            are our tax dollars at work, propping up the factory farming
            industry so that it can continue to spread diseases that
            endanger animals and threaten to bring on the next pandemic.
          </p>

          <p>
            Our government is failing to address the harms caused by factory
            farms. But we have a chance to protect animals, small farms, and
            the health of our entire community.{" "}
            <strong>
              Vote YES on Measure J this November to prohibit CAFOs in Sonoma
              County.
            </strong>
          </p>
        </div>
      </div>
    </Section>
  );
}
