import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { Accordion, AccordionItem } from "@/components/accordion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
};

export default function FaqPage() {
  return (
    <>
      <PageHero title="FAQ" />

      <Section>
        <Accordion>
          <AccordionItem title="What is a CAFO?">
            <p>
              CAFOs (Concentrated Animal Feeding Operations), commonly
              referred to as “factory farms,” are intensive animal
              agriculture operations in which large numbers of animals are
              confined and/or a large amount of waste is created. The
              Environmental Protection Agency (EPA) defined this term to
              classify farms that pose a risk of water pollution.
            </p>
            <p>
              A facility that confines more than 125,000 chickens raised for
              meat, more than 82,000 egg-laying hens, or more than 700 mature
              dairy cows is considered a large CAFO. A medium CAFO must
              contain the medium size range of animals listed by the EPA and
              also directly discharge animal waste into surface water,{" "}
              <Link
                href="/what-are-cafos#:~:text=there%20are%20no%20CAFOs%20in%20the%20county%20permitted%20to%20discharge%20waste"
                className="underline"
              >
                which no farms in Sonoma County are permitted to do
              </Link>
              . To learn more, read the{" "}
              <a
                href="https://www.ecfr.gov/current/title-40/chapter-I/subchapter-D/part-122/subpart-B/section-122.23"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                EPA’s definition of CAFOs
              </a>{" "}
              or check out their{" "}
              <a
                href="https://www3.epa.gov/npdes/pubs/sector_table.pdf"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                chart summarizing the CAFO definition
              </a>
              .
            </p>
          </AccordionItem>

          <AccordionItem title="How many CAFOs are in Sonoma County?">
            <p>
              There are an estimated 21 CAFOs, also called factory farms, in
              Sonoma County. They effectively market themselves as
              small-scale, family farms, but the reality is that these 21
              facilities all meet the federal definition of a large CAFO and
              together confine around 3 million animals. Investigations into
              many of these facilities have found rampant animal cruelty.{" "}
              <Link href="/cafos" className="underline">
                Learn more about factory farms in Sonoma County
              </Link>
              , or read{" "}
              <Link href="/what-are-cafos" className="underline">
                What are CAFOs?
              </Link>
              .
            </p>
          </AccordionItem>

          <AccordionItem title="What’s so bad about CAFOs?">
            <p>
              CAFOs are bad for animals, the environment, local farmers, and
              public health. Despite bucolic imagery on their marketing,
              investigations into CAFOs in Sonoma County have found rampant
              animal abuse, including animals left to slowly die without food
              or water. Emissions from industrial animal agricultural
              operations are a significant cause of climate change, with
              livestock contributing{" "}
              <a
                href="https://openknowledge.fao.org/server/api/core/bitstreams/a06a30d3-6e9d-4e9c-b4b7-29a6cc307208/content"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                12 percent
              </a>{" "}
              of all greenhouse gas emissions, which worsens the drought and
              wildfires in Sonoma County. As factory farming corporations
              have entered rural areas of Sonoma County with giant,
              windowless sheds, local farmers have been put out of business
              and residents have lost the benefits of quality food and a
              truly local economy. Workers at CAFOs face{" "}
              <a
                href="https://clf.jhsph.edu/sites/default/files/2021-05/essential-and-in-_crisis-a-review-of-the-public-health-threats-facing-farmworkers-in-the-us.pdf"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                health risks
              </a>{" "}
              due to exposure to harmful substances and antibiotic-resistant
              bacteria, as well as high rates of respiratory injuries,
              musculoskeletal injuries, and anxiety and depression. And
              finally, given that{" "}
              <a
                href="https://www.cdc.gov/onehealth/basics/zoonotic-diseases.html"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                three out of four emerging infectious diseases are zoonotic
              </a>
              , CAFOs pose a serious risk to public health. Institutions like
              the{" "}
              <a
                href="https://www.cdc.gov/nceh/ehs/docs/understanding_cafos_nalboh.pdf"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                Centers for Disease Control and Prevention
              </a>{" "}
              (CDC) and the{" "}
              <a
                href="https://www.apha.org/policies-and-advocacy/public-health-policy-statements/policy-database/2020/01/13/precautionary-moratorium-on-new-and-expanding-concentrated-animal-feeding-operations"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                American Public Health Association
              </a>{" "}
              (APHA) are calling for action to protect against the harms of
              CAFOs. For all these reasons, the factory farming industry is
              one of the most destructive and harmful industries on the
              planet - an industry that is not in line with the values of
              Sonoma County residents.
            </p>
          </AccordionItem>

          <AccordionItem title="Who operates the CAFOs in Sonoma County?">
            <p>
              The majority of the estimated{" "}
              <Link href="/cafos" className="underline">
                21 CAFOs in Sonoma County
              </Link>{" "}
              are operated by or supply to massive agricultural companies.
              For example,{" "}
              <strong>
                seven of the CAFOs are operated by a <em>single</em> company,{" "}
              </strong>
              <Link href="/sunrise" className="underline">
                <strong>Sunrise Farms LLC</strong>
              </Link>
              <strong>,</strong> which sells eggs to Costco, Safeway, Walmart
              and other large retail chains.{" "}
              <strong>
                Perdue Farms Inc, the fourth largest poultry company in the
                United States,
              </strong>{" "}
              also operates multiple CAFOs in Sonoma County. Three of the
              large dairy CAFOs in Sonoma County supply to a corporation that
              has local roots - Clover - but is now{" "}
              <a
                href="https://www.financecolombia.com/colombian-dairy-company-alpina-takes-70-stake-in-california-based-clover-sonoma/"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                majority owned
              </a>{" "}
              by a <strong>Colombian agricultural company,</strong> Alpina
              Productos Alimenticios, with annual sales over $700 million.
              Clover also supplies from multiple CAFOs in the Central Valley.
            </p>
          </AccordionItem>

          <AccordionItem title="Is there a link between CAFOs and avian flu?">
            <p>
              Yes. While avian flu is often carried by wild birds,{" "}
              <a
                href="https://www.ciwf.org.uk/media/7454789/191565_ciwf-avian-flu-report_2023_a4_aw_low-res_pages.pdf"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                CAFOs are a perfect location
              </a>{" "}
              for avian flu and other viruses such as swine flu to rapidly
              spread. In CAFOs, massive numbers of animals (sometimes
              hundreds of thousands) are confined in crowded, unsanitary
              conditions. This allows viruses to easily spread from one
              animal to another. These conditions also increase the chances
              for viruses to mutate, causing new strains to emerge which
              could be even more contagious or deadly and could have the
              potential to infect humans. Because workers at CAFOs are often
              in close proximity to these animals, they are at{" "}
              <a
                href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2042988/#:~:text=Influenza%20pandemics%20occur%20when%20a,a%20new%20strain%20of%20influenza."
                target="_blank"
                rel="noopener"
                className="underline"
              >
                higher risk of becoming infected
              </a>{" "}
              and could carry the viruses out to the broader population.
            </p>
            <p>
              In the past few years, viruses such as avian flu have wreaked
              havoc across the country, including in Sonoma County. Outbreaks
              have caused massive economic losses, unstable food prices, and
              extreme suffering, as animals who are potentially infected are
              “depopulated” with cruel methods such as “
              <a
                href="https://awionline.org/press-releases/avian-flu-outbreak-illustrates-how-factory-farming-threatens-animal-welfare-and"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                ventilation shutdown
              </a>
              ”, where airflow is turned off in the barns, heat and steam is
              pumped in, and animals are left to die of heatstroke over the
              course of hours. In order to{" "}
              <a
                href="https://nutritionfacts.org/video/pandemics-history-prevention/"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                prevent the next pandemic
              </a>{" "}
              and protect workers, animals, and food security, it’s
              imperative that we phase out CAFOs.
            </p>
          </AccordionItem>

          <AccordionItem title="Why are the current regulations not enough?">
            <p>
              Regulatory agencies have failed to protect animals, the
              environment, and public health. They typically only give minor
              penalties, if any at all, when powerful factory farms pollute
              communities or spread disease. Whistleblowers have documented
              criminal animal abuse and dangerous, unhygienic conditions in
              Sonoma County CAFOs on dozens of occasions. They have reported
              this to local and state authorities, but no action has been
              taken.
            </p>
            <p>
              The legislature has shown time and time again that they are
              unwilling to confront this powerful industry, but with a
              ballot measure, citizens can directly vote to change the law
              without any way for corrupt politicians or lobbyists to get in
              the way.
            </p>
          </AccordionItem>

          <AccordionItem title="What is the Coalition to End Factory Farming?">
            <p>
              The Coalition to End Factory Farming is a network of numerous
              animal advocacy, environmental, and social justice
              organizations including Compassionate Bay, FACES (Farm Animal
              Climate and Environmental Stewards) of Sonoma County, and
              Direct Action Everywhere - SF Bay Area. You can see a full list
              of supporters on our{" "}
              <Link href="/" className="underline">
                homepage
              </Link>
              . If your organization or business would like to be listed as
              a supporter, please email us at info@endfactoryfarming.vote.
            </p>
          </AccordionItem>

          <AccordionItem title="How can I contact someone from the campaign?">
            <p>Email us directly at info@endfactoryfarming.vote</p>
          </AccordionItem>
        </Accordion>
      </Section>
    </>
  );
}
