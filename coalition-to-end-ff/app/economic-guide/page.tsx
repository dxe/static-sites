import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { FigureImage } from "@/components/figure-image";
import dirtRoadImg from "@/public/images/economic-guide/dirt-road-hills.png";

export const metadata: Metadata = {
  title: "Economic Guide",
};

export default function Page() {
  return (
    <Section width="narrow">
      <div className="pt-28 lg:pt-20">
        <h1 className="text-center">Measure J Economic Impact Guide</h1>

        <div className="mt-10 space-y-5">
          <h4>Introduction</h4>
          <p>
            There have been a lot of misconceptions around Measure J and the
            impact it would have on Sonoma County’s economy. To help inform
            voters and clarify the impact on the local economy and food
            supply, we’ve compiled this Measure J economic impact guide.
            We’ve sourced from peer-reviewed literature and talked to local
            economists to create this guide.
          </p>
          <p>
            Measure J provides an opportunity to reinvigorate smaller and
            more diverse farms in Sonoma County. Small and medium farms
            bring safer and higher-paying jobs and contribute to the local
            economy more than most CAFOs do. A transition away from factory
            farming benefits all of us, including smaller farms.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-[520px]">
          <FigureImage
            src={dirtRoadImg}
            alt=""
            caption="Photo by Ashe Walker on Unsplash"
            captionPosition="below"
          />
        </div>

        <div className="mt-10 space-y-5">
          <h4>
            How many facilities in Sonoma County will be impacted by Measure
            J?
          </h4>
          <p>
            There are an estimated{" "}
            <Link href="/cafos" className="underline">
              21 Concentrated Animal Feeding Operations (CAFOs)
            </Link>{" "}
            in Sonoma County. These are the largest and most destructive
            animal farms in Sonoma County. Measure J would require these 21
            facilities to either downsize to below the threshold for a large
            CAFO or close within 3 years. These 21 facilities together
            confine around 3 million animals. Many of these facilities, such
            as Sunrise Bodega Ranch and Deer Valley Dairy, also known as
            Tresch Dairy, are only slightly over the CAFO limit and we
            expect they could downsize quite easily over the 3-year period
            if they choose to do so.
          </p>
          <p>References:</p>
          <p>
            <Link href="/cafos" className="underline">
              CAFO list
            </Link>
          </p>
        </div>

        <div className="mt-10 space-y-5">
          <h4>What is the economic impact of Measure J?</h4>
          <p>
            Measure J could benefit the economy significantly. Short-term
            economic costs caused by the 21 CAFOs downsizing or closing
            would be low.
          </p>
          <p>
            While CAFOs in Sonoma County do generate more product than
            smaller farms, sales and use tax is not collected by the county
            from most CAFO transactions because of the tax exemptions
            granted to animal livestock producers by the California
            Department of Tax and Fee Administration (CDTFA) and because
            sales and use tax is not collected for most grocery sales in
            California.
          </p>
          <p>
            Purchases and retail of live and processed animals are tax
            exempt when intended for human consumption. Many supplies such
            as feed and farm equipment are also fully or partially tax
            exempt for all animal livestock producers meaning that sales tax
            is not collected when CAFOs purchase animal feed.
          </p>
          <p>
            Property values may increase in neighborhoods surrounding
            CAFOs, which would result in an increase in property tax
            collected by the county. The likely increase of property values
            is supported by decades of research that show houses within
            close proximity to CAFOs show a decrease value of up to 26%.
            This is primarily due to odors and pollution that negatively
            impact the neighboring community.
          </p>
          <p>References:</p>
          <p>
            <a
              href="https://www.greenfieldadvisors.com/wp-content/uploads/2015/08/animaloperationsJKwinter2015.pdf"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              https://www.greenfieldadvisors.com/wp-content/uploads/2015/08/animaloperationsJKwinter2015.pdf
            </a>
          </p>
          <p>
            <a
              href="https://www.cdtfa.ca.gov/formspubs/pub66.pdf"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              https://www.cdtfa.ca.gov/formspubs/pub66.pdf
            </a>
          </p>
        </div>

        <div className="mt-10 space-y-5">
          <h4>How much will it cost the county if Measure J passes?</h4>
          <p>
            The county’s own impact analyses reveal that a very tiny
            fraction of a percent of the county’s yearly budget would be
            spent as a result of Measure J passing. They estimate
            approximately 3.1 million dollars during the initial three-year
            phase out period for worker retraining services and enforcement
            programs, which is approximately 0.124% percent of the county’s
            2.5 billion dollar budget that the Board of Supervisors adopted
            for 2024-2025 fiscal year.
          </p>
          <p>
            There&apos;s also a cost to taxpayers for <em>not</em>{" "}
            eliminating CAFOs. Local and federal taxpayers fund water
            cleanup programs, road infrastructure maintenance, CAFO
            subsidies, and avian flu bailout programs.
          </p>
          <p>
            Measure J requires that the county fund a worker retraining
            program to aid any workers who experience job loss from CAFOs
            downsizing or shutting down. The county’s Human Services
            Department estimates that these services would cost 1.5 million
            dollars, <strong>over a three-year period</strong>. This is
            0.0598% of the fiscal year budget. The Agricultural Commissioner
            also predicts around five additional jobs would be created to
            help manage the retraining of CAFO workers.
          </p>
          <p>
            The Agriculture Commissioner also estimates around 1.6 dollars
            million per year throughout the three-year phase out period for
            inspections and documentation that are required for overseeing
            the phase out. The ballot ordinance requires that the county
            develop a public-facing database of CAFOs in the county, which
            currently does not exist. The Department of
            Agriculture/Weights and Measures estimates that this will cost
            $50,000 to develop and $20,000/year to maintain – approximately
            0.0008% of the fiscal year budget.
          </p>
          <p>
            The No on J campaign will often cite an irrelevant report from
            University of California Cooperative Extension, Sonoma County
            (UCCE) and the Chico Agribusiness Institute which estimates a
            cost of $259,049,852. This report does not measure the impact
            of Measure J. The report cites that it is “difficult to
            identify what portion of these livestock and poultry operations
            would be directly impacted by the proposed ordinance,” and
            states “this study examines the economic impacts associated
            with a loss of all livestock and poultry production in Sonoma
            County.”
          </p>
          <p>
            References:
            <br />
            <a
              href="https://sonoma-county.legistar.com/LegislationDetail.aspx?ID=6666022&GUID=E2194147-3738-41BB-8B8B-49DE31E10F4D"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              UCCE Report
            </a>
          </p>
          <p>
            <a
              href="https://sonoma-county.legistar.com/LegislationDetail.aspx?ID=6666022&GUID=E2194147-3738-41BB-8B8B-49DE31E10F4D"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              HSD Report
            </a>
          </p>
          <p>
            <a
              href="https://sonoma-county.legistar.com/LegislationDetail.aspx?ID=6666022&GUID=E2194147-3738-41BB-8B8B-49DE31E10F4D"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              AWM Report
            </a>
          </p>
          <p>
            <a
              href="https://sonomacounty.ca.gov/board-of-supervisors-adopts-fiscal-year-2024-25-budget"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              https://sonomacounty.ca.gov/board-of-supervisors-adopts-fiscal-year-2024-25-budget
            </a>
          </p>
        </div>

        <div className="mt-10 space-y-5">
          <h4>How would Measure J impact the employees of CAFOs?</h4>
          <p>
            If Measure J passes, there will be a small amount of job loss
            among workers at existing CAFOs. Longterm, eliminating CAFOs
            could allow for the potential for employment gain since smaller
            farms, which provide more job opportunities per dollar and per
            production unit than CAFOs, will no longer be outcompeted.
            CAFOs rely on the model of industrialization, which
            standardizes, specializes, and consolidates work, resulting in
            fewer workers required to operate CAFOs.
          </p>
          <p>
            We care about our residents and don’t want any of them to
            experience job loss, which is why the ordinance requires that
            the county provide these workers a retraining program to aid
            them in finding employment in other sectors. While it is hard
            to get exact employment numbers from facilities for multiple
            reasons, including lack of transparency in the industry as a
            whole and the potential for large numbers of employees without
            documentation, the County’s Economic Development Board
            estimates 454 employees would be impacted. This is a signifant
            overestimate because it assumes that all existing CAFOs shut
            down rather than downsize, and because their report includes
            medium-sized facilities which are not designated as CAFOs in
            the county.
          </p>
          <p>
            CAFO work is dangerous work that no one should be subjected to.
            CAFO workers are at increased risk of respiratory disease and
            decreased lung function, machinery accidents, and mental health
            conditions. Eliminating CAFOs provides the opportunity to
            reintroduce smaller and more diverse animal farms into the
            county, which in turn will bring more and safer job
            opportunities for local residents, including the most
            vulnerable.
          </p>
          <p>References:</p>
          <p className="break-all">
            https://sonoma-county.legistar.com/View.ashx?M=F&ID=12929414&GUID=41A09836-8D20-4500-989A-27F1BFDEBA95
          </p>
          <p>
            <a
              href="https://www.cabidigitallibrary.org/doi/pdf/10.5555/20073020230"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              https://www.cabidigitallibrary.org/doi/pdf/10.5555/20073020230
            </a>
          </p>
          <p>
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/37191901/"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              https://pubmed.ncbi.nlm.nih.gov/37191901/
            </a>
          </p>
          <p>
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/18524283/"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              https://pubmed.ncbi.nlm.nih.gov/18524283/
            </a>
          </p>
        </div>

        <div className="mt-10 space-y-5">
          <h4>How would Measure J impact small farms?</h4>
          <p>
            Measure J would level the playing field for small and medium
            farms, which are currently being outcompeted by CAFOs. Measure
            J is a unique opportunity for Sonoma County to enable and
            support the smaller farms that are core to the county’s
            identity.
          </p>
          <p>
            CAFOs hold market power and outcompete small farms. CAFOs are
            heavily subsidized which gives them an unfair advantage and
            allows them to create a cheaper product than small and medium
            sized farms. Small farms typically do not receive the same
            amount of federal subsidies as CAFOs; in 2017 only 23% of farms
            with yearly revenues of less than $100,000 received federal
            subsidies, while 69% of farms above that income threshold did.
            With the aid of government subsidies, CAFOs are able to reduce
            operating expenses and squeeze independent producers out of
            business.
          </p>
          <p>
            While some CAFOs in Sonoma County do purchase feed locally,
            some do not. CAFOs operated by Perdue’s Petaluma Poultry use a
            vertical integration model in which the CAFO contractor
            provides hatcheries, feed, and veterinary care. If Measure J
            passes, the hundreds of small and medium farms in Sonoma County
            will diversify the business of these services and contribute
            to the local economy in a much healthier way.
          </p>
          <p>
            Small farms in Sonoma County are currently not protected. In
            the 1940s, over 4,000 independent egg farms operated in the
            county; by 2015, only 157 remained, with two companies (Sunrise
            Farms and Petaluma Egg Farms) dominating the market. In 2017,
            125 dairy farms existed in the county and in only 5 years that
            number was more than halved to 54. Measure J will protect small
            farms from continuing to get forced out by CAFOs.
          </p>
          <p>References:</p>
          <p>
            <a
              href="https://www.ucsusa.org/sites/default/files/2019-10/cafos-uncovered-full-report.pdf"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              https://www.ucsusa.org/sites/default/files/2019-10/cafos-uncovered-full-report.pdf
            </a>
          </p>
          <p>
            <a
              href="https://www.sierraclub.org/sites/www.sierraclub.org/files/2023-06/SClub%20Fact%20Sheet%20Dairy%20SubsidiesCVreview%20III%20.pdf"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              https://www.sierraclub.org/sites/www.sierraclub.org/files/2023-06/SClub%20Fact%20Sheet%20Dairy%20SubsidiesCVreview%20III%20.pdf
            </a>
          </p>
          <p>
            <a
              href="https://www.cato.org/briefing-paper/cutting-federal-farm-subsidies#reasons-repeal-farm-subsidies"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              https://www.cato.org/briefing-paper/cutting-federal-farm-subsidies#reasons-repeal-farm-subsidies
            </a>
          </p>
          <p>
            <a
              href="https://www.nass.usda.gov/Publications/AgCensus/2022/Full_Report/Volume_1,_Chapter_2_County_Level/California/st06_2_011_011.pdf"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              https://www.nass.usda.gov/Publications/AgCensus/2022/Full_Report/Volume_1,_Chapter_2_County_Level/California/st06_2_011_011.pdf
            </a>
          </p>
        </div>

        <div className="mt-10 space-y-5">
          <h4>
            How would Measure J impact the price of locally produced dairy,
            poultry, and eggs?
          </h4>
          <p>
            Measure J would likely have little impact on the price of
            locally produced food, and residents should not be paying
            “locally produced” prices for factory farmed products.
          </p>
          <p>
            Only 3% of all animal farms in the county meet the requirements
            to be designated as CAFOs, and many CAFOs in Sonoma County are
            only barely over the animal size threshold and could downsize
            a small amount and continue operating. Measure J is about a{" "}
            <em>transition</em> away from factory farming. CAFOs can
            downsize to be more sustainable operations and small and medium
            farms increase and expand to help fill the gaps.
          </p>
          <p>
            CAFO catastrophes have historically been shown to lead to an
            increase in food prices. Most notably we have seen a scarcity
            and profound price increase in commercial eggs when national
            outbreaks of avian flu occurred in 2022 and 2023. With avian
            flu now being detected in dairy farms across the US, including
            in California, it may be only a matter of time before we see
            similar price increases to dairy products as well.
          </p>
        </div>

        <div className="mt-10 space-y-5">
          <h4>
            How would Measure J impact the amount of locally produced
            dairy, poultry, and eggs?
          </h4>
          <p>
            All Sonoma County CAFOs supply to large commercial suppliers
            such as Costco, Safeway, Whole Foods, and Trader Joes. Most
            export and distribute their products across the country. This
            results in a very small amount of CAFO product staying in the
            county for local consumption. So if the CAFOs in Sonoma County
            downsize under Measure J, they should be able to maintain the
            same production of food for local shelves and simply reduce
            the amount of product they are shipping out of the county,
            which would also reduce their greenhouse gas emissions from
            transportation.
          </p>
          <p>
            There is also no evidence supporting that CAFOs solve food
            scarcity at a local or non-local level. CAFOs, in general, have
            not solved food scarcity in the US. This can be exemplified by
            EPA data which shows the number of food insecure households
            continues to rise, as does the number and expansion of CAFOs
            in the US. There’s no relationship between the expansion of
            CAFOs and greater availability or affordability of food.
          </p>
          <p>
            References:
            <br />
            <a
              href="https://www.researchgate.net/figure/a-Total-US-changes-in-CAFOs-from-2011-to-2018-b-numbers-of-CAFOs-by-US-region-in-2018_fig22_343562853"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              https://www.researchgate.net/figure/a-Total-US-changes-in-CAFOs-from-2011-to-2018-b-numbers-of-CAFOs-by-US-region-in-2018_fig22_343562853
            </a>
          </p>
          <p>
            <a
              href="https://www.epa.gov/sites/default/files/2019-09/documents/cafo_tracksum_endyear_2018.pdf"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              https://www.epa.gov/sites/default/files/2019-09/documents/cafo_tracksum_endyear_2018.pdf
            </a>
          </p>
          <p>
            <a
              href="https://www.ers.usda.gov/topics/food-nutrition-assistance/food-security-in-the-u-s/key-statistics-graphics/"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              https://www.ers.usda.gov/topics/food-nutrition-assistance/food-security-in-the-u-s/key-statistics-graphics/
            </a>
          </p>
        </div>
      </div>
    </Section>
  );
}
