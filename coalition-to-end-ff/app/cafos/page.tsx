import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { FigureImage } from "@/components/figure-image";
import { LinkButton } from "@/components/link-button";
import { SquarespaceEmbed } from "@/components/squarespace-embed";
import { readEmbed } from "@/lib/embeds";

import heroImg from "@/public/images/cafos/mccoys-crowding.png";
import cafoTableImg from "@/public/images/cafos/cafo-table-soco-sept-2024.jpg";

import eggPetalumaAerial from "@/public/images/cafos/petaluma-egg-farm-cafo.jpg";
import eggPetalumaCrowding from "@/public/images/cafos/crowding-at-petaluma-egg-farm-cafo.jpg";
import sunriseToddRd from "@/public/images/cafos/sunrise-farms-cafo-todd-rd-santa-rosa.jpg";
import henFeces from "@/public/images/cafos/hen-covered-in-feces-sunrise-farms.jpg";
import sunriseCrowdingSantaRosa from "@/public/images/cafos/crowding-at-sunrise-farms-santa-rosa.jpg";
import trashCansDeadHens from "@/public/images/cafos/trash-cans-dead-hens-sunrise-farms.jpg";

import mertens900Cows from "@/public/images/cafos/mertens-dairy-cafo-900-cows.jpg";
import babyCowsMertens from "@/public/images/cafos/baby-cows-hutches-mertens-dairy.png";
import calvesMcClellands from "@/public/images/cafos/calves-hutches-mcclellands-dairy.jpg";
import deadCowMulas from "@/public/images/cafos/dead-cow-and-calf-mulas-dairy.jpg";
import manureLagoonMertens from "@/public/images/cafos/manure-lagoon-mertens-dairy.jpg";
import manureLagoonsDeerValley from "@/public/images/cafos/manure-lagoons-deer-valley-dairy.jpg";

import reichardtMap from "@/public/images/cafos/reichardt-duck-cafo-petaluma-map.jpg";
import duckOnBack from "@/public/images/cafos/duck-on-back-at-reichardt.jpg";
import chickenCollapsed from "@/public/images/cafos/chicken-collapsed-petaluma-poultry-cafo.png";
import llanoRdCrowding from "@/public/images/cafos/petaluma-poultry-cafo-llano-rd-santa-rosa.png";

export const metadata: Metadata = {
  title: "The CAFOs",
};

export default function CafosPage() {
  const mapEmbedHtml = readEmbed("cafo-map-embed.txt");

  return (
    <>
      <PageHero
        title="The CAFOs In Sonoma County"
        image={heroImg}
        imageAlt=""
        overlayOpacity={15}
      />

      <Section>
        <div className="mx-auto max-w-3xl space-y-5 rounded-lg bg-ceff-blue p-8 md:p-10">
          <p>
            Sonoma County is well-known for its hundreds of small farms. But
            throughout the county, there are approximately{" "}
            <strong>
              two dozen “Large Concentrated Animal Feeding Operations,”
            </strong>{" "}
            as defined by the U.S. Environmental Protection Agency, which
            confine a total of <strong>nearly 3 million animals</strong>.
          </p>
          <p>
            This includes factory egg farms, like a Sunrise facility in
            Petaluma that confines around half a million chickens in massive
            industrial sheds. It also includes chicken farms that supply to
            Perdue, one of the largest meat producers in the country, and a
            handful of large dairy farms with an average of over 1,000 cows.
          </p>
          <p>
            These factory farms hide behind Sonoma County’s reputation for
            small-scale and sustainable agriculture, but they are{" "}
            <strong>
              poisoning the environment, hoarding the limited water supply,
              spreading disease, and confining animals in deplorable
              conditions
            </strong>
            .
          </p>
        </div>
      </Section>

      <Section id="cafo-map">
        <div className="md:flex md:items-start md:gap-10">
          <h2 className="md:w-1/4">CAFO Map</h2>
          <p className="mt-4 md:mt-0 md:w-3/4">
            Through extensive research, the Coalition to End Factory Farming
            has identified 21 large CAFOs in Sonoma County, shown in the
            interactive map below. All data is a best estimate based on
            available information. See methodology{" "}
            <Link href="/what-are-cafos#methodology" className="underline">
              here
            </Link>
            .
          </p>
        </div>

        <div className="mt-10">
          <SquarespaceEmbed html={mapEmbedHtml} />
        </div>

        <p className="mt-6">
          Note: Satellite imagery is available in the map above at higher
          zoom levels.
        </p>

        <div className="mt-10">
          <Image
            src={cafoTableImg}
            alt="Table listing the 21 CAFOs identified in Sonoma County, with facility name, estimated number of animals, city, type of facility, and notes"
            className="w-full"
          />
        </div>

        <p className="mt-6 text-[0.85rem]">
          <em>
            NOTE: All research is based on best available data and could
            change if updated data is made available. Please contact
            info@endfactoryfarming.vote if you have any information to share.
          </em>
        </p>
      </Section>

      <Section id="cafo-eggs">
        <div className="md:flex md:items-start md:gap-10">
          <h2 className="md:w-1/4">Eggs</h2>
          <p className="mt-4 md:mt-0 md:w-3/4">
            Sonoma County’s egg industry is dominated by two large producers,
            Sunrise Farms and Petaluma Egg Farm. Of the 12+ facilities
            affiliated with these companies, many are CAFOs, with one Sunrise
            location confining over 500,000 hens at a time.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <FigureImage
            src={eggPetalumaAerial}
            alt="Petaluma Egg Farm CAFO, Petaluma"
            caption="Petaluma Egg Farm CAFO, Petaluma"
            captionPosition="below"
            imgClassName="aspect-4/3 object-cover"
          />
          <FigureImage
            src={eggPetalumaCrowding}
            alt="Crowding at a Petaluma Egg Farm CAFO"
            caption="Crowding at a Petaluma Egg Farm CAFO"
            captionPosition="below"
            imgClassName="aspect-4/3 object-cover"
          />
          <FigureImage
            src={sunriseToddRd}
            alt="Sunrise Farms CAFO, Todd Rd, Santa Rosa"
            caption="Sunrise Farms CAFO, Todd Rd, Santa Rosa"
            captionPosition="below"
            imgClassName="aspect-4/3 object-cover"
          />
          <FigureImage
            src={henFeces}
            alt="A hen covered in feces at a Sunrise Farms CAFO in Petaluma"
            caption="A hen covered in feces at a Sunrise Farms CAFO in Petaluma"
            captionPosition="below"
            imgClassName="aspect-4/3 object-cover"
          />
          <FigureImage
            src={sunriseCrowdingSantaRosa}
            alt="Crowding at a Sunrise Farms CAFO in Santa Rosa"
            caption="Crowding at a Sunrise Farms CAFO in Santa Rosa"
            captionPosition="below"
            imgClassName="aspect-4/3 object-cover"
          />
          <FigureImage
            src={trashCansDeadHens}
            alt="Trash cans full of dead hens at Sunrise Farms CAFO"
            caption="Trash cans full of dead hens at Sunrise Farms CAFO"
            captionPosition="below"
            imgClassName="aspect-4/3 object-cover"
          />
        </div>
      </Section>

      <Section id="cafo-dairy">
        <div className="md:flex md:items-start md:gap-10">
          <h2 className="md:w-1/4">Dairy</h2>
          <p className="mt-4 md:mt-0 md:w-3/4">
            Dairy CAFOs in Sonoma County are massive water users and they
            pollute groundwater and surface water with untreated animal
            waste. A single dairy CAFO of 700 cows produces more waste in a
            year than the entire human population of Petaluma (60,000
            people).
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <FigureImage
            src={mertens900Cows}
            alt="Mertens Dairy CAFO where 900 cows live on dirt and feces"
            caption="Mertens Dairy CAFO where 900 cows live on dirt and feces"
            captionPosition="below"
            imgClassName="aspect-4/3 object-cover"
          />
          <FigureImage
            src={babyCowsMertens}
            alt="Baby cows confined in hutches at Mertens Dairy in Sonoma"
            caption="Baby cows confined in hutches at Mertens Dairy in Sonoma"
            captionPosition="below"
            imgClassName="aspect-4/3 object-cover"
          />
          <FigureImage
            src={calvesMcClellands}
            alt="Dozens of calves confined in hutches at McClelland’s Dairy CAFO"
            caption="Dozens of calves confined in hutches at McClelland’s Dairy CAFO"
            captionPosition="below"
            imgClassName="aspect-4/3 object-cover"
          />
          <FigureImage
            src={deadCowMulas}
            alt="Dead cow and calf left by the trash at Mulas Dairy CAFO"
            caption="Dead cow and calf left by the trash at Mulas Dairy CAFO"
            captionPosition="below"
            imgClassName="aspect-4/3 object-cover"
          />
          <FigureImage
            src={manureLagoonMertens}
            alt="Manure lagoon the size of two football fields at Mertens Dairy in Sonoma"
            caption="Manure lagoon the size of two football fields at Mertens Dairy in Sonoma"
            captionPosition="below"
            imgClassName="aspect-4/3 object-cover"
          />
          <FigureImage
            src={manureLagoonsDeerValley}
            alt="Manure lagoons at Deer Valley Dairy CAFO in Petaluma"
            caption="Manure lagoons at Deer Valley Dairy CAFO in Petaluma"
            captionPosition="below"
            imgClassName="aspect-4/3 object-cover"
          />
        </div>
      </Section>

      <Section id="cafo-poultry">
        <div className="md:flex md:items-start md:gap-10">
          <h2 className="md:w-1/4">Poultry</h2>
          <p className="mt-4 md:mt-0 md:w-3/4">
            Chicken and duck CAFOs in Sonoma County confine hundreds of
            thousands of animals and produce massive amounts of waste.
            Reichardt Duck Farm, for example, produces 200,000 gallons of
            manure in a single day.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <FigureImage
            src={reichardtMap}
            alt="Reichardt Duck CAFO, Petaluma"
            caption="Reichardt Duck CAFO, Petaluma"
            captionPosition="below"
            imgClassName="aspect-4/3 object-cover"
          />
          <FigureImage
            src={duckOnBack}
            alt="Ducks stuck on their backs, unable to stand up at Reichardt CAFO"
            caption="Ducks stuck on their backs, unable to stand up at Reichardt CAFO"
            captionPosition="below"
            imgClassName="aspect-4/3 object-cover"
          />
          <FigureImage
            src={chickenCollapsed}
            alt="A chicken collapsed on their back at a Petaluma Poultry CAFO"
            caption="A chicken collapsed on their back at a Petaluma Poultry CAFO"
            captionPosition="below"
            imgClassName="aspect-4/3 object-cover"
          />
          <FigureImage
            src={llanoRdCrowding}
            alt="Petaluma Poultry CAFO, Llano Rd, Santa Rosa"
            caption="Petaluma Poultry CAFO, Llano Rd, Santa Rosa"
            captionPosition="below"
            imgClassName="aspect-4/3 object-cover"
          />
        </div>
      </Section>

      <Section>
        <div className="space-y-6 text-center">
          <p>Learn more about how facilities are classified as CAFOs:</p>
          <LinkButton href="/what-are-cafos">What are CAFOs?</LinkButton>
          <p>
            See more details about factory farms in Sonoma County at{" "}
            <a
              href="https://www.sonomacountyfactoryfarms.com"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              sonomacountyfactoryfarms.com
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
