import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Impact Report",
};

const SIZE_THRESHOLDS: Array<[string, string, string, string]> = [
  ["cattle or cow/calf pairs", "1,000 or more", "300 - 999", "less than 300"],
  ["mature dairy cattle", "700 or more", "200 - 699", "less than 200"],
  ["veal calves", "1,000 or more", "300 - 999", "less than 300"],
  [
    "swine (weighing over 55 pounds)",
    "2,500 or more",
    "750 - 2,499",
    "less than 750",
  ],
  [
    "swine (weighing less than 55 pounds)",
    "10,000 or more",
    "3,000 - 9,999",
    "less than 3,000",
  ],
  ["horses", "500 or more", "150 - 499", "less than 150"],
  ["sheep or lambs", "10,000 or more", "3,000 - 9,999", "less than 3,000"],
  ["turkeys", "55,000 or more", "16,500 - 54,999", "less than 16,500"],
  [
    "laying hens or broilers (liquid manure handling systems)",
    "30,000 or more",
    "9,000 - 29,999",
    "less than 9,000",
  ],
  [
    "chickens other than laying hens (other than a liquid manure handling systems)",
    "125,000 or more",
    "37,500 - 124,999",
    "less than 37,500",
  ],
  [
    "laying hens (other than a liquid manure handling systems)",
    "82,000 or more",
    "25,000 - 81,999",
    "less than 25,000",
  ],
  [
    "ducks (other than a liquid manure handling systems)",
    "30,000 or more",
    "10,000 - 29,999",
    "less than 10,000",
  ],
  [
    "ducks (liquid manure handling systems)",
    "5,000 or more",
    "1,500 - 4,999",
    "less than 1,500",
  ],
];

const CAFOS: Array<{
  name: string;
  count: string;
  city: string;
  type: string;
  notes?: string;
}> = [
  {
    name: "Sunrise Main Weber + Hillside",
    count: "607,000",
    city: "Petaluma",
    type: "Chicken (Eggs)",
    notes:
      "Sunrise Weber Ranch (497,700) + Weber Hillside Ranch (109,282) are counted as one AFO because they are under common ownership and adjoining per 40 CFR 122.23(b)(2)",
  },
  {
    name: "Sunrise Todd Ranch",
    count: "322,100",
    city: "Santa Rosa",
    type: "Chicken (Eggs)",
  },
  {
    name: "Petaluma Egg Farm Main",
    count: "684,579",
    city: "Petaluma",
    type: "Chicken (Eggs)",
  },
  {
    name: "Sunrise Windsor Ranch",
    count: "200,600",
    city: "Windsor",
    type: "Chicken (Eggs)",
  },
  {
    name: "Sunrise Westside Ranch",
    count: "132,300",
    city: "Santa Rosa",
    type: "Chicken (Eggs)",
  },
  {
    name: "Petaluma Egg Farm McBrown",
    count: "113,500",
    city: "Petaluma",
    type: "Chicken (Eggs)",
  },
  {
    name: "Sunrise Nissen Ranch",
    count: "105,000",
    city: "Petaluma",
    type: "Chicken (Eggs)",
  },
  {
    name: "Petaluma Egg Farm Bannon",
    count: "91,400",
    city: "Penngrove",
    type: "Chicken (Eggs)",
  },
  {
    name: "Sunrise Bodega Ranch",
    count: "82,500",
    city: "Petaluma",
    type: "Chicken (Eggs)",
  },
  {
    name: "Sunrise J&J Ranch",
    count: "82,400",
    city: "Petaluma",
    type: "Chicken (Eggs)",
  },
  {
    name: "Petaluma Poultry Llano",
    count: "232,400",
    city: "Santa Rosa",
    type: "Chicken (Meat)",
  },
  {
    name: "Petaluma Poultry Bonness",
    count: "215,000",
    city: "Sonoma",
    type: "Chicken (Meat)",
  },
  {
    name: "Petaluma Poultry Napa",
    count: "159,400",
    city: "Sonoma",
    type: "Chicken (Meat)",
  },
  {
    name: "Petaluma Poultry Roblar",
    count: "144,300",
    city: "Petaluma",
    type: "Chicken (Meat)",
  },
  {
    name: "McClelland's Dairy",
    count: "1200",
    city: "Petaluma",
    type: "Cow (Dairy)",
  },
  {
    name: "Renati Dairy",
    count: "950",
    city: "Petaluma",
    type: "Cow (Dairy)",
  },
  {
    name: "Moreda Dairy Travis + Valley",
    count: "1,500",
    city: "Petaluma",
    type: "Cow (Dairy)",
    notes:
      "Travis Moreda (550) + Moreda Valley (950) are counted as one AFO because they are under common ownership and adjoining per 40 CFR 122.23(b)(2)",
  },
  {
    name: "Deer Valley Dairy East + West",
    count: "925",
    city: "Petaluma",
    type: "Cow (Dairy)",
    notes:
      "Deer Valley East (350) and Deer Valley West (575) are counted as one AFO because they are under common ownership and adjoining per 40 CFR 122.23(b)(2)",
  },
  {
    name: "Mertens Dairy",
    count: "900",
    city: "Sonoma",
    type: "Cow (Dairy)",
  },
  {
    name: "Spaletta Ranch",
    count: "880",
    city: "Petaluma",
    type: "Cow (Dairy)",
  },
  {
    name: "Reichardt Duck Farm",
    count: "205,000",
    city: "Petaluma",
    type: "Duck (Meat)",
  },
];

export default function ImpactReportPage() {
  return (
    <>
      <Section>
        <div className="pt-28 text-center lg:pt-20">
          <h1>
            <span className="bg-ceff-blue px-2">
              Coalition to End Factory Farming:
            </span>
            <br />
            <span className="bg-ceff-blue px-2">
              Impact Report on Measure J
            </span>
          </h1>
          <p className="mt-6 text-left">
            Our research team has identified 21 large CAFOs in Sonoma County,
            which are listed in the Large CAFOs section of this research
            report. These facilities would have three years to either close
            down, downsize or otherwise alter their operations to no longer
            meet the definition of a CAFO. Continue reading for more details
            on the impact of Measure J on CAFOs, as well as the impact CAFOs
            have on Sonoma County.
          </p>
        </div>
      </Section>

      <Section>
        <h2>Defining AFOs and CAFOs</h2>
        <div className="space-y-5">
          <p>
            To be a Concentrated Animal Feeding Operation (CAFO), a facility
            must first meet the EPA’s definition of an Animal Feeding
            Operation (AFO). According to the EPA:
            <br />
            “<strong>
              <em>Animal feeding operation</em>
            </strong>{" "}
            (“AFO”) means a lot or facility (other than an aquatic animal
            production facility) where the following conditions are met:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Animals (other than aquatic animals) have been, are, or will be
              stabled or confined and fed or maintained for a total of 45 days
              or more in any 12-month period, and
            </li>
            <li>
              Crops, vegetation, forage growth, or post-harvest residues are
              not sustained in the normal growing season over any portion of
              the lot or facility.”
            </li>
          </ul>
          <p className="text-right text-[0.85rem]">
            <em>Source: </em>
            <a
              href="https://www.ecfr.gov/current/title-40/part-122/section-122.23#p-122.23(b)(1)"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              Title 40 Code of Federal Regulations §122.23(b)(1)
            </a>
          </p>
          <p>
            An AFO becomes a CAFO when it meets the regulatory definition of a
            large CAFO (confining a certain number of animals) or of a medium
            CAFO (confining a smaller number of animals but also discharging
            waste into surface water), or when it is deemed a major polluter
            by regulatory authorities on a case-by-case basis.
          </p>

          <h3 className="text-center">
            Regulatory Definitions of Large CAFOs, Medium CAFO, and Small
            CAFOs
          </h3>
          <p>
            A <strong>Large CAFO</strong> confines at least the number of
            animals described in the table below.
          </p>
          <p>
            A <strong>Medium CAFO</strong> falls within the size range in the
            table below and either:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              has a manmade ditch or pipe that carries manure or wastewater to
              surface water; <strong>or</strong>
            </li>
            <li>
              the animals come into contact with surface water that passes
              through the area where they’re confined.
            </li>
          </ul>
          <p>
            If an operation is found to be a significant contributor of
            pollutants, the permitting authority may designate a
            medium-sized facility as a CAFO.
          </p>
          <p>
            A <strong>Small CAFO</strong> confines fewer than the number of
            animals listed in the table <strong>and</strong> has been
            designated as a CAFO by the permitting authority as a significant
            contributor of pollutants.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[0.85rem]">
              <thead>
                <tr>
                  <th className="border border-ceff-ink/40 p-2 text-left">
                    Animal Sector
                  </th>
                  <th className="border border-ceff-ink/40 p-2 text-left">
                    Large CAFOs
                  </th>
                  <th className="border border-ceff-ink/40 p-2 text-left">
                    Medium CAFOs<sup>1</sup>
                  </th>
                  <th className="border border-ceff-ink/40 p-2 text-left">
                    Small CAFOs<sup>2</sup>
                  </th>
                </tr>
              </thead>
              <tbody>
                {SIZE_THRESHOLDS.map(([sector, large, medium, small]) => (
                  <tr key={sector}>
                    <td className="border border-ceff-ink/40 p-2">
                      {sector}
                    </td>
                    <td className="border border-ceff-ink/40 p-2">
                      {large}
                    </td>
                    <td className="border border-ceff-ink/40 p-2">
                      {medium}
                    </td>
                    <td className="border border-ceff-ink/40 p-2">
                      {small}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[0.8rem]">
            <sup>1</sup>Must also meet one of two “method of discharge”
            criteria to be defined as a CAFO or may be designated.
          </p>
          <p className="text-[0.8rem]">
            <sup>2</sup>Never a CAFO by regulatory definition, but may be
            designated as a CAFO on a case-by-case basis.
          </p>
          <p className="text-right text-[0.85rem]">
            <em>Source: </em>
            <a
              href="https://www.epa.gov/sites/default/files/2015-08/documents/sector_table.pdf"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              EPA.Gov
            </a>
          </p>
        </div>
      </Section>

      <Section>
        <h2>Small and Medium CAFOs</h2>
        <div className="space-y-5">
          <p>
            Any CAFO in the US that discharges waste to surface water is{" "}
            <a
              href="https://www3.epa.gov/npdes/pubs/cafo_implementation_guidance.pdf"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              required to obtain
            </a>{" "}
            a National Pollutant Discharge Elimination System (NPDES) permit
            from the EPA. Because the definition of a medium CAFO includes
            discharge of waste to surface water, any medium CAFO would be
            required to have an NPDES permit. The California State Water
            Resource Control Board’s{" "}
            <a
              href="https://ciwqs.waterboards.ca.gov/ciwqs/readOnly/CiwqsReportServlet?inCommand=reset&reportName=RegulatedFacility"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              NPDES Permit Facility Search
            </a>{" "}
            system shows that there are no CAFOs in the county permitted to
            discharge waste, meaning there are no medium CAFOs in Sonoma
            County. If any AFO within the medium size range was discharging
            waste into surface water without an NPDES permit, that would
            already be a violation of either the{" "}
            <a
              href="https://www.waterboards.ca.gov/northcoast/board_decisions/adopted_orders/pdf/2019/19_0001_Dairy_GWDR.pdf"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              North Coast
            </a>{" "}
            or{" "}
            <a
              href="https://www.waterboards.ca.gov/sanfranciscobay/water_issues/programs/agriculture/CAF/CAF%20General%20WDRs%20Order%20R2-2016-0031%20ADA.pdf"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              SF Bay
            </a>{" "}
            Regional Water Quality Control Board rules and EPA guidelines.
          </p>
          <p>
            Any AFO can be designated a CAFO by regulatory authorities on a
            one-off basis, if it is found to be a major risk to the
            environment, regardless of the number of animals it confines.
            This is extremely rare. Becky Mitschele, Acting Watersheds
            Manager at US EPA Region 9, which includes California, said she
            was only aware of small CAFO designation happening a couple times
            in the Midwest, and that there are no small CAFOs in Sonoma
            County.
          </p>
          <p>
            Given our research and communication with local and federal
            regulatory agencies, it is our best understanding that there are
            no small or medium CAFOs in Sonoma County.
          </p>
        </div>
      </Section>

      <Section>
        <h2>Large CAFOs</h2>
        <div className="space-y-5">
          <p>
            While our best understanding is that there are no small or
            medium CAFOs in Sonoma County, research shows that there are
            multiple facilities that meet the regulatory definition of large
            CAFOs. Large CAFOs are defined as any AFO that confines more than
            a certain number of animals, with that number depending on the
            species, the product being produced, and whether the facility
            uses a solid or liquid manure handling system.
          </p>
          <p>
            Through extensive open source research, we have identified 21
            large CAFOs in Sonoma County, which are listed in the table
            below. This list aims to be overinclusive; we believe it is
            highly unlikely that large CAFOs are missing from the list based
            on our review of approximately 100 of the largest animal farms in
            Sonoma County, obtained by public records and thorough analysis
            of satellite imagery. All data listed is a best estimate based on
            available information, with sources linked where possible.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[0.85rem]">
              <thead>
                <tr>
                  <th className="border border-ceff-ink/40 p-2 text-left">
                    Facility Name
                  </th>
                  <th className="border border-ceff-ink/40 p-2 text-left">
                    Est Number of Animals
                  </th>
                  <th className="border border-ceff-ink/40 p-2 text-left">
                    City
                  </th>
                  <th className="border border-ceff-ink/40 p-2 text-left">
                    Type of Facility
                  </th>
                  <th className="border border-ceff-ink/40 p-2 text-left">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                {CAFOS.map((f) => (
                  <tr key={f.name}>
                    <td className="border border-ceff-ink/40 p-2">
                      {f.name}
                    </td>
                    <td className="border border-ceff-ink/40 p-2">
                      {f.count}
                    </td>
                    <td className="border border-ceff-ink/40 p-2">
                      {f.city}
                    </td>
                    <td className="border border-ceff-ink/40 p-2">
                      {f.type}
                    </td>
                    <td className="border border-ceff-ink/40 p-2">
                      {f.notes ?? ""}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      <Section>
        <h2>CAFO Research Methodology</h2>
        <div className="space-y-5">
          <p>
            The above research was conducted by volunteers based on the best
            available evidence that could be located. Whenever two sources
            provided contradicting estimates of animal populations at a
            facility, we used the higher number sources in order to lean
            toward over-inclusion of facilities as CAFOs, so that the
            possible impacts of the CAFO prohibition are not underestimated.
            It is possible that some population sources we used count animals
            not relevant to the CAFO number threshold, such as immature
            heifers on a dairy farm. It should be possible for county
            officials to make more accurate assessments based on information
            not available to the public.
          </p>
          <p>
            The majority of dairy farms were able to be assessed based on
            data from regional water boards, found{" "}
            <a
              href="https://ciwqs.waterboards.ca.gov/ciwqs/readOnly/CiwqsReportServlet?inCommand=reset&reportName=RegulatedFacility"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              here
            </a>
            .
          </p>
          <p>
            Some poultry/egg facilities were able to be assessed based on
            USDA reports from the 2023-2024 HPAI outbreaks, found{" "}
            <a
              href="https://publicdashboards.dl.usda.gov/t/MRP_PUB/views/VS_Avian_HPAIConfirmedDetections2022/HPAI2022ConfirmedDetections"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              here
            </a>
            .
          </p>
          <p>
            The remainder of poultry/egg facility populations were estimated
            based on a projected average of birds per square foot of barn
            space, generated by calculating the average for known facilities
            of the same type, and owner when possible. These estimates are
            the least reliable and, hopefully, it should be possible for
            county officials to make a more accurate assessment.
          </p>
        </div>
      </Section>

      <Section>
        <h2>How the Measure Addresses CAFOs</h2>
        <div className="space-y-5">
          <p>
            This measure would prohibit all CAFOs, including small, medium,
            and large CAFOs, though as explained above, we believe there are
            no small or medium CAFOs in the county. The measure would also
            prohibit new CAFOs from opening, as well as the expansion of
            existing CAFOs in the county. This measure would apply to
            unincorporated parts of the county, excluding the Coastal Zone.
          </p>
          <p>
            The measure spells out that: “Pre-Existing CAFOs shall be given a
            phase-out period of no more than three (3) years from the
            effective date of this Section to modify or terminate their
            operations such that they are no longer classified as a CAFO.”
            There are a few ways a large CAFO could make modifications so
            that it no longer qualifies as a CAFO.
          </p>
          <p>The facility could:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Downsize the animal population to below the relevant limit, or</li>
            <li>
              Change to a non-liquid manure handling system where applicable,
              or
            </li>
            <li>
              Stop confining their animals for more than 45 days per year so
              that the facility no longer qualifies as an AFO
            </li>
          </ul>
          <p>
            The text of the measure is{" "}
            <Link href="/measure-text" className="underline">
              here
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section>
        <h2>Animal Welfare</h2>
        <div className="space-y-5">
          <p>
            Investigations into Concentrated Animal Feeding Operations
            (CAFOs) in Sonoma County reveal severe and systemic animal
            welfare issues. Animals in CAFOs are often subjected to extreme
            overcrowding and confinement, preventing them from exhibiting
            natural behaviors and leading to chronic stress and physical
            ailments. Investigations from multiple animal welfare
            organizations have documented egregious animal welfare
            violations in Sonoma County CAFOs.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <a
                href="https://ducks.mercyforanimals.org/"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                An investigation
              </a>{" "}
              at Reichardt Duck Farm in Petaluma by Mercy For Animals found
              ducks being mutilated by workers, and systematically left to
              die from untreated injuries and illnesses.
            </li>
            <li>
              <a
                href="https://righttorescue.com/cases/petalumapoultry/Petaluma%20Poultry%20Investigatory%20Report%202023.pdf"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                Repeated investigations
              </a>{" "}
              of Perdue-run chicken CAFOs in Sonoma County have found
              chickens growing so fast that their bodies can not keep up,
              leading to mobility issues, as well as a host of widespread
              diseases that run rampant in Perdue facilities.
            </li>
          </ul>
          <p>
            Despite repeated reports to local and state authorities,
            enforcement actions have been minimal, and animal cruelty laws
            are frequently violated. These findings highlight the urgent
            need for Measure J to prohibit the operation of CAFOs, ensuring
            more humane treatment of farm animals and aligning agricultural
            practices with the values of Sonoma County residents.
          </p>
        </div>
      </Section>

      <Section>
        <h2>Greenhouse Gas Emissions</h2>
        <div className="space-y-5">
          <p>
            According to the Regional Climate Protection Authority’s{" "}
            <a
              href="https://rcpa.ca.gov/wp-content/uploads/2022/09/RCPA-Community-GHG-Inventory-2020-Update-FINAL-2022-09-06.pdf"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              2020 Sonoma County Greenhouse Gas Emissions Inventory
            </a>
            , livestock manure management is the third largest emissions
            source county-wide. Reducing agricultural emissions would result
            in significant progress on the ambitious county goal of
            achieving net zero emissions by 2030. The county’s current plans
            to reach carbon neutrality by 2030 heavily rely on carbon
            capture, which is a more complicated and likely more expensive
            strategy than reducing the emissions in the first place.
          </p>
          <p>
            The{" "}
            <a
              href="https://www.epa.gov/snep/agriculture-and-aquaculture-food-thought"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              EPA states
            </a>{" "}
            that 154 to 264 lbs of methane is produced by an individual cow
            per year. According to this calculation, closure of the 6 dairy
            CAFOs in Sonoma County (estimated to confine 6,355 mature dairy
            cows) would prevent between 978,670 and 1,677,720 pounds of
            methane emissions per year. These emissions alone, without
            adding any of the other emissions from other CAFOs, are
            equivalent to 12,430-21,308 metric tons of Co2 every year, equal
            to the amount of carbon sequestered by 14,512 - 24,878 acres of
            US forest.
          </p>
        </div>
      </Section>

      <Section>
        <h2>Water Pollution</h2>
        <div className="space-y-5">
          <p>
            CAFOs are defined by the EPA specifically because they pose a
            threat of water pollution. According to the{" "}
            <a
              href="https://www.hecweb.org/wp-content/uploads/2019/03/CDC-report.pdf"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              CDC
            </a>
            <a
              href="https://www.cdc.gov/nceh/ehs/docs/understanding_cafos_nalboh.pdf"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              :
            </a>
          </p>
          <p>
            <em>
              “The agriculture sector, including CAFOs, is the leading
              contributor of pollutants to lakes, rivers, and reservoirs. It
              has been found that states with high concentrations of CAFOs
              experience on average 20 to 30 serious water quality problems
              per year as a result of manure management problems.”
            </em>
          </p>
          <p>
            Many important bodies of water in Sonoma County, including the
            Petaluma River, Laguna de Santa Rosa, Estero Americano, and San
            Pablo Bay Estuaries are impaired by bacteria and microbes which
            threaten human and wildlife health, as well as nitrogen and/or
            phosphorus which create harmful algal blooms or “dead zones,”
            all of which are commonly caused by CAFO pollution.
          </p>
          <p>
            While the EPA is theoretically tasked with oversight and
            regulation of CAFO water pollution, a{" "}
            <a
              href="https://www.gao.gov/assets/gao-08-944.pdf"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              report
            </a>{" "}
            from the U.S. Government Accountability Office found that “EPA
            does not have comprehensive, accurate information on the number
            of permitted CAFOs nationwide. As a result, EPA does not have the
            information it needs to effectively regulate these CAFOs.” The
            EPA has faced severe criticism and lawsuits from prominent
            environmental groups including the{" "}
            <a
              href="https://www.nrdc.org/resources/cafos-what-we-dont-know-hurting-us"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              National Resource Defense Council
            </a>
            ,{" "}
            <a
              href="https://www.foodandwaterwatch.org/2022/10/11/after-long-delay-groups-sue-epa-for-response-on-factory-farm-water-pollution-rules/"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              Food and Water Watch
            </a>
            ,{" "}
            <a
              href="https://biologicaldiversity.org/programs/population_and_sustainability/pdfs/Citizens_CAFO_CWA_Petition.pdf"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              Center for Biological Diversity
            </a>
            , and{" "}
            <a
              href="https://www.ucsusa.org/resources/confined-animal-feeding-operations-uncovered"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              Union of Concerned Scientists
            </a>{" "}
            for their failure to effectively regulate CAFOs. Sadly, the task
            of challenging CAFOs falls on local jurisdictions like Sonoma
            County, which has a unique opportunity to lead the battle
            against these major sources of environmental destruction.
          </p>
        </div>
      </Section>

      <Section>
        <h2>Water Use</h2>
        <div className="space-y-5">
          <p>
            CAFOs are major consumers of water. Irrigated pasture was{" "}
            <a
              href="https://www.pressdemocrat.com/article/specialsections/these-are-the-california-crops-that-use-the-most-water/"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              ranked as the number 1
            </a>{" "}
            most water-intensive crop in California in the most recent 2015
            analysis. As well as the massive water use of irrigating
            extensive pasture to feed animals, water is required for every
            step of industrial animal production, from growing alfalfa (the
            3rd most water intensive crop according to the{" "}
            <a
              href="https://www.pressdemocrat.com/article/specialsections/these-are-the-california-crops-that-use-the-most-water/"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              same statewide report
            </a>
            ), to providing drinking water for animals, flushing feces into
            manure lagoons for storage, and finally, the water-intensive
            process of slaughter.
          </p>
          <p>
            Extensive data on CAFO water use is not publicly available, which
            makes it even more imperative that the county use their access
            to calculate the impacts of CAFOs on the limited supply of fresh
            and recycled water in Sonoma County.
          </p>
        </div>
      </Section>

      <Section>
        <h2>Public Health</h2>
        <div className="space-y-5">
          <p>
            CAFOs, or Concentrated Animal Feeding Operations, can have
            multiple negative impacts on public health, including:
          </p>
          <ol className="list-decimal space-y-4 pl-6">
            <li>
              Air quality issues:{" "}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/17384782/"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                According to the NIH
              </a>
              , “Toxic gasses, vapors, and particles are emitted from
              concentrated animal feeding operations (CAFOs) into the general
              environment. These include ammonia, hydrogen sulfide, carbon
              dioxide, malodorous vapors, and particles contaminated with a
              wide range of microorganisms.”{" "}
              <a
                href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9602095/#:~:text=Populations%20exposed%20to%20these%20chemicals,%2C%20and%20throat%20%5B4%5D."
                target="_blank"
                rel="noopener"
                className="underline"
              >
                Another NIH study
              </a>{" "}
              focused on poultry CAFOs reports, “Populations exposed to these
              chemicals may be at risk for a host of adverse health outcomes.
              Exposure to airborne ammonia and volatile organic compounds can
              aggravate lung function and may cause chronic lung disease,
              while hydrogen sulfide can cause inflammation of the eyes,
              nose, and throat. Particulate matter may worsen lung function
              and can cause irregular heartbeat, heart attacks, and other
              cardiac abnormalities.”{" "}
              <a
                href="https://www.sciencedirect.com/science/article/pii/S0160412018320750"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                These pollutants can lead to a variety of health problems
                including respiratory issues, headaches, eye irritation and
                can exacerbate asthma.
              </a>{" "}
              <a
                href="https://www.cdc.gov/nceh/ehs/docs/understanding_cafos_nalboh.pdf"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                According to the CDC
              </a>
              , “There is consistent evidence suggesting that factory farms
              increase asthma in neighboring communities, as indicated by
              children having higher rates of asthma (Sigurdarson & Kline,
              2006; Mirabelli et al., 2006). CAFOs emit particulate matter
              and suspended dust, which is linked to asthma and bronchitis.
              Smaller particles can actually be absorbed by the body and can
              have systemic effects, including cardiac arrest.”
            </li>
            <li>
              Water contamination: Manure from CAFOs can run off into nearby
              water sources, causing high levels of nitrates, pathogens, and
              pharmaceuticals in the water. This can impact drinking water
              sources, causing public health concerns.{" "}
              <a
                href="https://www.doi.gov/ocl/hearings/110/CAFOIndustry_090607"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                Studies have shown trace antibiotics in drinking water and
                groundwater near these facilities.
              </a>
            </li>
            <li>
              Antibiotic resistance: The overuse of antibiotics in CAFOs{" "}
              <a
                href="https://www.gao.gov/assets/gao-04-490.pdf"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                can contribute to antibiotic resistance in humans
              </a>
              . This could make treatment of certain bacterial infections
              more difficult and potentially dangerous.
            </li>
            <li>
              Disease transmission: A zoonotic disease caused the swine flu
              outbreak in 2009-2010. The CDC estimates{" "}
              <a
                href="https://en.wikipedia.org/wiki/2009_swine_flu_pandemic_in_the_United_States"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                the global H1N1 death toll at 284,000
              </a>
              .{" "}
              <a
                href="https://www.who.int/news/item/30-03-2024-2023--outbreaks-of-swine-influenza"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                There are still outbreaks happening all over the world
              </a>
              . Avian flu is another example of zoonotic disease that ravaged
              the world in the past and is{" "}
              <a
                href="https://www.google.com/search?q=avian+flu"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                currently evolving
              </a>{" "}
              posing a massive threat to human and non-human life.
            </li>
            <li>
              Community health: Communities located near CAFOs{" "}
              <a
                href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1817697/"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                often report
              </a>{" "}
              higher levels of stress and lower quality of life due to noise,
              odor, and concerns about health impacts.{" "}
              <a
                href="https://www.nar.realtor/animal-feedlots"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                Property values also decrease when near CAFOs.
              </a>
            </li>
          </ol>
          <p>
            These issues, as well as a number of other concerns, have led
            prominent public health groups to sound the alarm about CAFOs,
            with the American Public Health Association adopting a{" "}
            <a
              href="https://www.apha.org/policies-and-advocacy/public-health-policy-statements/policy-database/2020/01/13/precautionary-moratorium-on-new-and-expanding-concentrated-animal-feeding-operations"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              policy statement
            </a>{" "}
            calling for a moratorium on the construction and expansion of
            CAFOs.
          </p>
        </div>
      </Section>
    </>
  );
}
