import Image from "next/image";
import { FigureImage } from "@/components/figure-image";
import { LinkButton } from "@/components/link-button";
import { Section } from "@/components/section";
import hero from "@/public/images/index/mccoys-crowding.png";
import logoCard from "@/public/images/index/android-chrome-512x512.png";
import henImg from "@/public/images/index/sunrise.jpg";
import calvesImg from "@/public/images/index/screenshot-2024-06-17-at-8.24.50-am.png";
import ducksImg from "@/public/images/index/duck-on-back-at-reichardt.jpg";

import gpsc from "@/public/images/index/gpsc-square.jpg";
import peaceJustice from "@/public/images/index/peacejusticecenter.jpg";
import voteSonomaStrong from "@/public/images/index/screenshot-2024-10-03-at-9.16.59-am.png";
import calma from "@/public/images/index/4c52fe70-cf23-4327-ac5e-611f7cbd7567.jpg";
import littleSaint from "@/public/images/index/little-saint.png";
import metta from "@/public/images/index/metta-logo-black-small-2016.png";
import riverWatch from "@/public/images/index/california-river-watch-logo.png";
import oca from "@/public/images/index/oca-logo-360.png-square.png";
import littleTrooper from "@/public/images/index/littletrooperranch.png";
import farmSanctuary from "@/public/images/index/fs-logo-color-02-farm-sanctuary-untrimmed-.jpg";
import scil from "@/public/images/index/scil-logo-square.png";
import cats from "@/public/images/index/cats-square.png";
import chaliceFarms from "@/public/images/index/screenshot-2024-10-21-at-5.21.52-e2-80-afpm.jpg";
import farmworkers from "@/public/images/index/direct-action-farmworkers-small-square.png";
import ruthlessKindness from "@/public/images/index/ruthlesskindness-small-square.jpg";
import compassionateLiving from "@/public/images/index/compassionate-living-small-square-325.jpg";
import goatlandia from "@/public/images/index/file-000.png";
import wap from "@/public/images/index/wap-small-square-325.png";
import charlies from "@/public/images/index/charlies.png";
import jolenes from "@/public/images/index/jollll.jpg";
import jameson from "@/public/images/index/full-logo-vector-jameson-big-final-v2.jpg";
import whenPigsFly from "@/public/images/index/img-6730.png";
import rancherAdvocacy from "@/public/images/index/rancher-advocacy-program-logo.png";
import allPaws from "@/public/images/index/all-paws-small-square-350.png";
import dougsDelivery from "@/public/images/index/guerneville-ca.jpg";
import animalEquality from "@/public/images/index/animalequality.jpg";
import weAnimals from "@/public/images/index/untitled-design.png";
import oilAndGas from "@/public/images/index/ogan-small-square-350.jpg";
import animalPlace from "@/public/images/index/animal-place.png";
import proAnimalFuture from "@/public/images/index/pro-animal-future-logo.png";
import xrSfBay from "@/public/images/index/xr-sf-bay.png-square.png";
import leap from "@/public/images/index/leap-logo.png";
import inDefenseOfAnimals from "@/public/images/index/in-defense-of-animals-square.png";
import votersForAr from "@/public/images/index/votersforar.png";
import newRoots from "@/public/images/index/newrootsinstitute.jpg";
import rootsOfCompassion from "@/public/images/index/rc-logo.png";
import wildCare from "@/public/images/index/wildcare-square.png";
import clorofil from "@/public/images/index/clorofil-logo-text-growing-awareness-1x-1-.png";
import ladyFreethinker from "@/public/images/index/ladyfreethinker-square.jpg";
import birdsOfAFeather from "@/public/images/index/boafr-v2.jpg";
import animalOutlook from "@/public/images/index/animal-outlook.png";
import connectAnimals from "@/public/images/index/connectanimals.png";
import worldPeaceChocolate from "@/public/images/index/world-peace-chocolate-1-.png";
import freeFromHarm from "@/public/images/index/freefromharm.png";
import awfw from "@/public/images/index/awfw-logo-round-p4h-small-2023.png";
import climateSave from "@/public/images/index/climate-save-movement-logo-650.png";
import faces from "@/public/images/index/faces.jpeg";
import dxe from "@/public/images/index/dxe-circle-logo-2021.jpg";
import compassionateBay from "@/public/images/index/cb-vertical-blue-4-.png-square.png";

const SUPPORTER_LOGOS = [
  { src: gpsc, alt: "Green Party of Sonoma County" },
  { src: peaceJustice, alt: "Peace & Justice Center of Sonoma County" },
  { src: voteSonomaStrong, alt: "Vote Sonoma Strong" },
  { src: calma, alt: "CALMA" },
  { src: littleSaint, alt: "Little Saint" },
  { src: metta, alt: "Metta Center for Nonviolence" },
  { src: riverWatch, alt: "California River Watch" },
  { src: oca, alt: "Organic Consumers Association" },
  { src: littleTrooper, alt: "Little Trooper Ranch" },
  { src: farmSanctuary, alt: "Farm Sanctuary" },
  { src: scil, alt: "Social Compassion in Legislation" },
  { src: cats, alt: "Californians for Alternatives to Toxics" },
  { src: chaliceFarms, alt: "Chalice Farms" },
  { src: farmworkers, alt: "Direct Action Farmworkers" },
  { src: ruthlessKindness, alt: "Ruthless Kindness" },
  { src: compassionateLiving, alt: "Compassionate Living" },
  { src: goatlandia, alt: "Goatlandia" },
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
  { src: leap, alt: "LEAP" },
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
  { src: worldPeaceChocolate, alt: "World Peace Chocolate" },
  { src: freeFromHarm, alt: "Free From Harm" },
  { src: awfw, alt: "A Well-Fed World" },
  { src: climateSave, alt: "Climate Save Movement" },
  { src: faces, alt: "FACES" },
  { src: dxe, alt: "Direct Action Everywhere" },
  { src: compassionateBay, alt: "Compassionate Bay" },
];

export function HomePage() {
  return (
    <>
      {/* Hero: CAFO photo with the light-blue logo card, caption bottom-right */}
      <div className="relative flex min-h-[240px] items-center py-16 md:min-h-[400px] lg:min-h-[550px]">
        <Image
          src={hero}
          alt="Perdue Chicken CAFO in Petaluma"
          fill
          priority
          className="object-cover"
        />
        <div className="relative mx-auto w-full max-w-[1200px] px-6">
          <Image
            src={logoCard}
            alt="Coalition to End Factory Farming"
            className="w-36 md:w-52 lg:w-60"
            priority
          />
        </div>
        <p className="absolute bottom-1 right-3 text-[0.75rem] tracking-wide text-white/90">
          Perdue Chicken CAFO in Petaluma
        </p>
      </div>

      <Section>
        <div className="space-y-5">
          <p>
            The Coalition to End Factory Farming is a network of numerous
            animal advocacy, environmental, and social justice organizations
            working to end factory farming in Sonoma County and beyond.
          </p>
          <p>
            Sonoma County is well-known for its hundreds of small family farms.
            But throughout the county, around{" "}
            <strong>two dozen large Concentrated Animal Feeding Operations</strong>{" "}
            are operating in near secrecy.
          </p>
          <p>
            These industrial facilities{" "}
            <strong>harm animals, pollute our air and water, and spread disease</strong>
            . They are not in line with the values of Sonoma County residents.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <FigureImage
            src={henImg}
            alt="A hen covered in feces at a Sunrise Farms CAFO in Petaluma"
            caption="A hen covered in feces at a Sunrise Farms CAFO in Petaluma"
            className="order-1"
            imgClassName="aspect-4/3 object-cover"
          />
          <FigureImage
            src={calvesImg}
            alt="Baby cows confined in hutches at Mertens Dairy in Sonoma"
            caption="Baby cows confined in hutches at Mertens Dairy in Sonoma"
            className="order-3 md:order-2"
            imgClassName="aspect-4/3 object-cover"
          />
          <FigureImage
            src={ducksImg}
            alt="Ducks stuck on their backs, unable to stand up at Reichardt in Petaluma"
            caption="Ducks stuck on their backs, unable to stand up at Reichardt in Petaluma"
            className="order-2 md:order-3"
            imgClassName="aspect-4/3 object-cover"
          />
        </div>

        <div className="mt-10 space-y-5">
          <p>If our legislators won’t act to solve the problem, we will.</p>
          <p>
            Together, we can start the transition away from these destructive
            factory farms and use our collective power to build a better world
            for all!
          </p>
        </div>

        <div className="mt-10 text-center">
          <LinkButton href="/cafos">See the factory farms</LinkButton>
        </div>
      </Section>

      <Section>
        <h2 className="text-center text-[3.32rem] md:text-[min(1rem+4.56vw,4.99rem)]">
          Supporters
        </h2>
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
    </>
  );
}
