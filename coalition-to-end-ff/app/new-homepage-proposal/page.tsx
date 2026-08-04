import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { FigureImage } from "@/components/figure-image";
import { LinkButton } from "@/components/link-button";
import { Section } from "@/components/section";
import { VideoEmbed } from "@/components/video-embed";

import heroBg from "@/public/images/new-homepage-proposal/mccoys-crowding.png";
import heroLogo from "@/public/images/new-homepage-proposal/yes-on-j-logo.png";
import checkIcon from "@/public/images/new-homepage-proposal/blue-circle-check.png";

import henImg from "@/public/images/new-homepage-proposal/sunrise.jpg";
import ducksImg from "@/public/images/new-homepage-proposal/duck-on-back-at-reichardt.jpg";
import calvesImg from "@/public/images/new-homepage-proposal/screenshot-2024-06-17-at-8.24.50-am.png";

import moredaDairyImg from "@/public/images/new-homepage-proposal/moreda-dairy-cafo.jpg";
import mertensLagoonImg from "@/public/images/new-homepage-proposal/mertens-manure-lagoon.jpg";
import eggFarmAerialImg from "@/public/images/new-homepage-proposal/caltopo-egg-farm-screenshot.png";

import crowdingPetalumaImg from "@/public/images/new-homepage-proposal/crowding-at-petaluma-farms.jpg";
import screenshot20230910Img from "@/public/images/new-homepage-proposal/screenshot-2023-09-10.jpg";
import livingBirdDeceasedImg from "@/public/images/new-homepage-proposal/living-bird-deceased-bird-petaluma-poultry.jpg";

import gpsc from "@/public/images/new-homepage-proposal/gpsc-square.jpg";
import greenGooseFarm from "@/public/images/new-homepage-proposal/green-goose-farm.jpg";
import peaceJustice from "@/public/images/new-homepage-proposal/peacejusticecenter.jpg";
import calma from "@/public/images/new-homepage-proposal/4c52fe70-cf23-4327-ac5e-611f7cbd7567.jpg";
import westernWatersheds from "@/public/images/new-homepage-proposal/western-watersheds-project.jpg";
import oca from "@/public/images/new-homepage-proposal/oca-logo-360.png-square.png";
import farmSanctuary from "@/public/images/new-homepage-proposal/fs-logo-color-02-farm-sanctuary-untrimmed-.jpg";
import scil from "@/public/images/new-homepage-proposal/scil-logo-square.png";
import cats from "@/public/images/new-homepage-proposal/cats-square.png";
import farmworkers from "@/public/images/new-homepage-proposal/direct-action-farmworkers-small-square.png";
import ruthlessKindness from "@/public/images/new-homepage-proposal/ruthlesskindness-small-square.jpg";
import compassionateLiving from "@/public/images/new-homepage-proposal/compassionate-living-small-square-325.jpg";
import goatlandia from "@/public/images/new-homepage-proposal/file-000.png";
import sonomaChix from "@/public/images/new-homepage-proposal/sonoma-chix.gif";
import wap from "@/public/images/new-homepage-proposal/wap-small-square-325.png";
import charlies from "@/public/images/new-homepage-proposal/charlies.png";
import jolenes from "@/public/images/new-homepage-proposal/jollll.jpg";
import jameson from "@/public/images/new-homepage-proposal/full-logo-vector-jameson-big-final-v2.jpg";
import whenPigsFly from "@/public/images/new-homepage-proposal/img-6730.png";
import rancherAdvocacy from "@/public/images/new-homepage-proposal/rancher-advocacy-program-logo.png";
import allPaws from "@/public/images/new-homepage-proposal/all-paws-small-square-350.png";
import dougsDelivery from "@/public/images/new-homepage-proposal/guerneville-ca.jpg";
import animalEquality from "@/public/images/new-homepage-proposal/animalequality.jpg";
import weAnimals from "@/public/images/new-homepage-proposal/untitled-design.png";
import oilAndGas from "@/public/images/new-homepage-proposal/ogan-small-square-350.jpg";
import animalPlace from "@/public/images/new-homepage-proposal/animal-place.png";
import proAnimalFuture from "@/public/images/new-homepage-proposal/pro-animal-future-logo.png";
import xrSfBay from "@/public/images/new-homepage-proposal/xr-sf-bay.png-square.png";
import inDefenseOfAnimals from "@/public/images/new-homepage-proposal/in-defense-of-animals-square.png";
import votersForAr from "@/public/images/new-homepage-proposal/votersforar.png";
import newRoots from "@/public/images/new-homepage-proposal/newrootsinstitute.jpg";
import rootsOfCompassion from "@/public/images/new-homepage-proposal/rc-logo.png";
import wildCare from "@/public/images/new-homepage-proposal/wildcare-square.png";
import clorofil from "@/public/images/new-homepage-proposal/clorofil-logo-text-growing-awareness-1x-1-.png";
import ladyFreethinker from "@/public/images/new-homepage-proposal/ladyfreethinker-square.jpg";
import birdsOfAFeather from "@/public/images/new-homepage-proposal/boafr-v2.jpg";
import animalOutlook from "@/public/images/new-homepage-proposal/animal-outlook.png";
import connectAnimals from "@/public/images/new-homepage-proposal/connectanimals.png";
import freeFromHarm from "@/public/images/new-homepage-proposal/freefromharm.png";
import awfw from "@/public/images/new-homepage-proposal/awfw-logo-round-p4h-small-2023.png";
import climateSave from "@/public/images/new-homepage-proposal/climate-save-movement-logo-650.png";
import faces from "@/public/images/new-homepage-proposal/faces.jpeg";
import dxe from "@/public/images/new-homepage-proposal/dxe-circle-logo-2021.jpg";
import compassionateBay from "@/public/images/new-homepage-proposal/cb-vertical-blue-4-.png-square.png";

export const metadata: Metadata = {
  title: "Alt Homepage - Alex's draft",
};

const SUPPORTER_LOGOS = [
  { src: gpsc, alt: "Green Party of Sonoma County" },
  { src: greenGooseFarm, alt: "Green Goose Farm" },
  { src: peaceJustice, alt: "Peace & Justice Center of Sonoma County" },
  { src: calma, alt: "CALMA" },
  { src: westernWatersheds, alt: "Western Watersheds Project" },
  { src: oca, alt: "Organic Consumers Association" },
  { src: farmSanctuary, alt: "Farm Sanctuary" },
  { src: scil, alt: "Social Compassion in Legislation" },
  { src: cats, alt: "Californians for Alternatives to Toxics" },
  { src: farmworkers, alt: "Direct Action Farmworkers" },
  { src: ruthlessKindness, alt: "Ruthless Kindness" },
  { src: compassionateLiving, alt: "Compassionate Living" },
  { src: goatlandia, alt: "Goatlandia" },
  { src: sonomaChix, alt: "Sonoma Chix" },
  { src: wap, alt: "World Animal Protection" },
  { src: charlies, alt: "Charlie's Acres" },
  { src: jolenes, alt: "Jolene's Retreat" },
  { src: jameson, alt: "Jameson Humane Animal Rescue" },
  { src: whenPigsFly, alt: "When Pigs Fly Ranch in Guerneville, CA" },
  { src: rancherAdvocacy, alt: "Rancher Advocacy Program" },
  { src: allPaws, alt: "AllPaws Rescue Supply Network" },
  { src: dougsDelivery, alt: "Doug's Delivery, Guerneville, CA" },
  { src: animalEquality, alt: "Animal Equality" },
  { src: weAnimals, alt: "We Animals Media" },
  { src: oilAndGas, alt: "Oil & Gas Action Network" },
  { src: animalPlace, alt: "Animal Place" },
  { src: proAnimalFuture, alt: "Pro-Animal Future" },
  { src: xrSfBay, alt: "Extinction Rebellion SF Bay" },
  { src: inDefenseOfAnimals, alt: "In Defense of Animals" },
  { src: votersForAr, alt: "Voters for Animal Rights" },
  { src: newRoots, alt: "New Roots Institute" },
  { src: rootsOfCompassion, alt: "Roots of Compassion" },
  { src: wildCare, alt: "WildCare" },
  { src: clorofil, alt: "Clorofil" },
  { src: ladyFreethinker, alt: "Lady Freethinker" },
  { src: birdsOfAFeather, alt: "Birds of a Feather Rescue" },
  { src: animalOutlook, alt: "Animal Outlook" },
  { src: connectAnimals, alt: "Connect Animals" },
  { src: freeFromHarm, alt: "Free From Harm" },
  { src: awfw, alt: "A Well-Fed World" },
  { src: climateSave, alt: "Climate Save Movement" },
  { src: faces, alt: "FACES" },
  { src: dxe, alt: "Direct Action Everywhere" },
  { src: compassionateBay, alt: "Compassionate Bay" },
];

/** Draft-page CTAs use a solid black button that isn't one of LinkButton's two variants. */
function DarkButton({ href, children }: { href: string; children: React.ReactNode }) {
  const classes =
    "inline-block rounded-md border-2 border-black bg-black px-8 py-3 text-center font-button text-[1.1rem] font-medium leading-snug tracking-[0.02em] text-white hover:bg-black/80";
  const external = href.startsWith("http") || href.startsWith("mailto:");
  return external ? (
    <a href={href} className={classes} target="_blank" rel="noopener">
      {children}
    </a>
  ) : (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

function ChecklistItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <Image src={checkIcon} alt="" className="mt-1 w-8 shrink-0" />
      <h3 className="text-left">{children}</h3>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <div className="relative flex min-h-[340px] flex-col items-center justify-center py-16 text-center md:min-h-[460px] lg:min-h-[620px]">
        <Image
          src={heroBg}
          alt="Perdue Chicken CAFO in Petaluma"
          fill
          priority
          className="object-cover"
        />
        <div aria-hidden className="absolute inset-0 bg-black/40" />
        <Image
          src={heroLogo}
          alt="Protect Animals: Yes on J"
          priority
          className="relative w-56 sm:w-64 md:w-72 lg:w-[26rem]"
        />
        <p className="absolute bottom-1 right-3 text-[0.75rem] tracking-wide text-white/90">
          Perdue Chicken CAFO in Petaluma
        </p>
      </div>

      <Section>
        <h1 className="text-center">Vote Yes On Measure J</h1>
        <p className="mt-4 text-center">
          <em>
            A ban on the cruel, massive-scale confinement of animals in Sonoma
            County, to be voted on in the November 5th election.
          </em>
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-16 md:gap-y-8">
          <ChecklistItem className="order-1">Yes to protect animals</ChecklistItem>
          <ChecklistItem className="order-2 md:order-3">
            Yes to protect our environment
          </ChecklistItem>
          <ChecklistItem className="order-3 md:order-2">
            Yes to protect public health
          </ChecklistItem>
          <ChecklistItem className="order-4">Yes to protect small farms</ChecklistItem>
        </div>
      </Section>

      <Section>
        <VideoEmbed
          src="https://www.youtube.com/embed/1ksmM09t2TA"
          title="Measure J in Sonoma County, Explained"
          className="mx-auto max-w-3xl"
        />
      </Section>

      <Section bg="blue">
        <h1 className="text-center">Why Prohibit CAFOs?</h1>
        <div className="mt-6 space-y-5">
          <p>
            Sonoma County is well-known for its hundreds of small family
            farms. But throughout the county, around{" "}
            <Link href="/cafos" className="underline">
              two dozen <strong>Concentrated Animal Feeding Operations</strong>
            </Link>
            , also called factory farms, are operating in near secrecy
          </p>
          <p>
            These industrial facilities{" "}
            <Link href="/research" className="underline">
              <strong>harm animals, pollute our air and water, and spread disease</strong>
            </Link>
            . They are{" "}
            <Link href="/news" className="underline">
              not in line
            </Link>{" "}
            with the values of Sonoma County residents.
          </p>
          <p>
            Measure J would{" "}
            <Link href="/research" className="underline">
              affect just <strong>3%</strong>
            </Link>{" "}
            of all animal farms in the county, requiring them to scale down to
            manageable populations over the next <strong>3 years. </strong>
            Together, we can start the{" "}
            <strong>transition away from factory farms</strong> and build a
            better world for all!
          </p>
        </div>
      </Section>

      <Section>
        <h2 className="text-center">Protecting Animal Welfare</h2>
        <p className="mt-6 text-center">
          Investigations revealed severe and systemic animal welfare issues in
          Sonoma County’s large poultry, egg and dairy farms. Measure J will
          prevent this abuse by prohibiting CAFOs.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <FigureImage
            src={henImg}
            alt="A hen covered in feces at a Sunrise Farms CAFO in Petaluma"
            caption="A hen covered in feces at a Sunrise Farms CAFO in Petaluma"
            imgClassName="aspect-4/3 object-cover"
          />
          <FigureImage
            src={ducksImg}
            alt="Ducks stuck on their backs, unable to stand up at Reichardt in Petaluma"
            caption="Ducks stuck on their backs, unable to stand up at Reichardt in Petaluma"
            imgClassName="aspect-4/3 object-cover"
          />
          <FigureImage
            src={calvesImg}
            alt="Baby cows confined in hutches at Mertens Dairy in Sonoma"
            caption="Baby cows confined in hutches at Mertens Dairy in Sonoma"
            imgClassName="aspect-4/3 object-cover"
          />
        </div>
        <p className="mt-10 text-center">
          To learn more about the conditions in factory farms, check out our{" "}
          <Link href="/faq" className="underline">
            FAQ
          </Link>
          . For exact number limits imposed by this measure, see the{" "}
          <Link href="/research" className="underline">
            impact report
          </Link>{" "}
          or{" "}
          <Link href="/measure-text" className="underline">
            measure text
          </Link>
          .
        </p>
        <div className="mt-8 text-center">
          <LinkButton href="/cafos">Explore Sonoma County CAFOs</LinkButton>
        </div>
      </Section>

      <Section bg="blue">
        <h2 className="text-center">Protecting the environment</h2>
        <p className="mt-6 text-center">
          CAFOs <strong>pollute local rivers</strong> and streams, threatening
          aquatic ecosystems, and emit <strong>greenhouse gasses</strong> at
          odds with <strong>Sonoma County&apos;s goal</strong> of achieving{" "}
          <strong>net zero emissions by 2030</strong>.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <FigureImage
            src={moredaDairyImg}
            alt="Manure lagoons at Deer Valley Dairy CAFO in Petaluma"
            caption="Manure lagoons at Deer Valley Dairy CAFO in Petaluma"
            imgClassName="aspect-4/3 object-cover"
          />
          <FigureImage
            src={mertensLagoonImg}
            alt="Manure lagoon the size of two football fields at Mertens Dairy in Sonoma"
            caption="Manure lagoon the size of two football fields at Mertens Dairy in Sonoma"
            imgClassName="aspect-4/3 object-cover"
          />
          <FigureImage
            src={eggFarmAerialImg}
            alt="Petaluma Egg Farm CAFO, Petaluma"
            caption="Petaluma Egg Farm CAFO, Petaluma"
            imgClassName="aspect-4/3 object-cover"
          />
        </div>
        <div className="mt-10 text-center">
          <DarkButton href="#">Explore the environmental impact</DarkButton>
        </div>
      </Section>

      <Section>
        <h2 className="text-center">Protecting public health</h2>
        <p className="mt-6 text-center">
          CAFOs emit toxic gases and particles that can cause serious health
          issues for nearby residents. They also pose risks of{" "}
          <strong>zoonotic diseases</strong>, which can jump from animals to
          humans. Measure J will reduce these risks by eliminating the primary
          sources of pollution and disease.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <FigureImage
            src={crowdingPetalumaImg}
            alt="Crowding at Petaluma Farms"
            imgClassName="aspect-4/3 object-cover"
          />
          <FigureImage
            src={screenshot20230910Img}
            alt="Overcrowded poultry housing"
            imgClassName="aspect-4/3 object-cover"
          />
          <FigureImage
            src={livingBirdDeceasedImg}
            alt="A living bird stands on a deceased bird at a Petaluma Poultry farm on Walker Avenue in 2023"
            imgClassName="aspect-4/3 object-cover"
          />
        </div>
        <div className="mt-10 text-center">
          <DarkButton href="#">Explore the risk</DarkButton>
        </div>
      </Section>

      <Section bg="blue">
        <h2 className="text-center">Taking the power back</h2>
        <p className="mt-6 text-center">
          If our <strong>legislators won’t act to solve the problem</strong>,
          we will. That&apos;s why the{" "}
          <strong>Coalition to End Factory Farming</strong> is using the
          ballot measure process, a process which provides citizens an
          opportunity to take the power back and{" "}
          <strong>directly pass legislation ourselves</strong>.
        </p>
        <div className="mt-8 text-center">
          <DarkButton href="/volunteer">Learn why legislators failed us</DarkButton>
        </div>

        <h2 className="mt-16 text-center">Help pass Measure J</h2>
        <div className="mt-8 flex flex-col items-center gap-4">
          <DarkButton href="#">Donate</DarkButton>
          <div className="flex flex-wrap justify-center gap-4">
            <DarkButton href="#">Attend an event</DarkButton>
            <DarkButton href="#">Volunteer</DarkButton>
          </div>
          <DarkButton href="#">Stay informed</DarkButton>
        </div>
      </Section>

      <Section>
        <h1 className="text-center">Supported by</h1>
        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 lg:gap-8">
          {SUPPORTER_LOGOS.map((logo) => (
            <Image
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="aspect-square w-full object-contain"
            />
          ))}
        </div>
      </Section>

      <Section bg="blue">
        <h1 className="text-center">Learn more</h1>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <DarkButton href="#">Factory farms in SoCo</DarkButton>
          <DarkButton href="#">Map</DarkButton>
          <DarkButton href="#">Impact report</DarkButton>
          <DarkButton href="#">FAQ</DarkButton>
          <DarkButton href="#">Press</DarkButton>
          <DarkButton href="/measure-text">Measure text</DarkButton>
        </div>
        <p className="mt-10 text-center">
          Questions or concerns? Don’t hesitate to reach out!
        </p>
        <div className="mt-4 text-center">
          <DarkButton href="#">Contact us</DarkButton>
        </div>
      </Section>
    </>
  );
}
