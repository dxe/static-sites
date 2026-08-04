import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Measure Text",
};

const SIZE_THRESHOLDS: Array<[string, string, string]> = [
  ["Cattle or cow/calf pairs", "1,000 or more", "300 - 999"],
  ["Mature dairy cattle", "700 or more", "200 - 699"],
  ["Veal calves", "1,000 or more", "300 - 999"],
  ["Swine (weighing over 55 pounds)", "2,500 or more", "750 - 2,499"],
  ["Swine (weighing less than pounds)", "10,000 or more", "3,000 - 9,999"],
  ["Horses", "500 or more", "150 - 499"],
  ["Sheep or lambs", "10,000 or more", "3,000 - 9,999"],
  ["Turkeys", "55,000 or more", "16,500 - 54,999"],
  [
    "Laying hens or broilers (liquid manure handling systems)",
    "30,000 or more",
    "9,000 - 29,999",
  ],
  [
    "Chickens other than laying hens (other than a liquid manure handling systems)",
    "125,000 or more",
    "37,500 - 124,999",
  ],
  [
    "Laying hens (other than a liquid manure handling systems)",
    "82,000 or more",
    "25,000 - 81,999 ",
  ],
  [
    "Ducks (other than a liquid manure handling systems)",
    "30,000 or more",
    "10,000 - 29,999",
  ],
  [
    "Ducks (liquid manure handling systems)",
    "5,000 or more",
    "1,500 - 4,999",
  ],
];

const FOOTNOTES: Array<{ n: number; prefix?: string; url: string; suffix?: string }> = [
  { n: 1, url: "https://www.supremecourt.gov/opinions/22pdf/21-468_5if6.pdf" },
  {
    n: 2,
    url: "https://sonomacounty.ca.gov/administrative-support-and-fiscal-services/clerk-recorder-assessor-registrar-of-voters/registrar-of-voters/elections/november-6-2018-general-election-final-results",
  },
  { n: 3, url: "https://www3.epa.gov/npdes/pubs/region9.pdf" },
  { n: 4, url: "https://www3.epa.gov/npdes/pubs/region9.pdf" },
  { n: 5, url: "https://www.livescience.com/39481-time-to-declare-animal-sentience.html" },
  {
    n: 6,
    url: "https://www.centerforfoodsafety.org/issues/307/animal-factories/animal-factories-and-animal-welfare",
  },
  { n: 7, url: "https://www.cdc.gov/nceh/ehs/docs/understanding_cafos_nalboh.pdf" },
  {
    n: 8,
    url: "https://www.vice.com/en/article/g5bjjb/the-next-pandemic-could-come-from-an-american-factory-farm",
  },
  {
    n: 9,
    url: "https://www.scientificamerican.com/article/how-drug-resistant-bacteria-travel-from-the-farm-to-your-table/",
  },
  { n: 10, url: "https://www.cdc.gov/onehealth/basics/zoonotic-diseases.html" },
  { n: 11, url: "https://www.cdc.gov/nceh/ehs/docs/understanding_cafos_nalboh.pdf" },
  { n: 12, url: "https://www.fao.org/news/story/en/item/197623/icode/" },
  {
    n: 13,
    url: "https://vitalsigns.edf.org/story/what-does-californias-flooding-and-drought-have-do-climate-change",
  },
  { n: 14, url: "https://www.ppic.org/publication/climate-change-and-californias-water/" },
  {
    n: 15,
    url: "https://www.ewg.org/news-insights/news/2023/02/will-agriculture-be-americas-leading-source-greenhouse-gas-emissions",
  },
  {
    n: 16,
    url: "https://www.chathamhouse.org/sites/default/files/2021-02/2021-02-03-food-system-biodiversity-loss-benton-et-al_0.pdf",
  },
  {
    n: 17,
    url: "https://www.foodandwaterwatch.org/wp-content/uploads/2021/03/ib_1906_biogas_manure-2019-web.pdf",
  },
  {
    n: 18,
    url: "https://clf.jhsph.edu/sites/default/files/2021-05/essential-and-in-_crisis-a-review-of-the-public-health-threats-facing-farmworkers-in-the-us.pdf",
  },
  {
    n: 19,
    url: "https://www.apha.org/policies-and-advocacy/public-health-policy-statements/policy-database/2020/01/13/precautionary-moratorium-on-new-and-expanding-concentrated-animal-feeding-operations",
  },
  { n: 20, url: "https://www.nar.realtor/animal-feedlots" },
  { n: 21, url: "https://www.congress.gov/bill/117th-congress/senate-bill/2332" },
  {
    n: 22,
    url: "https://www.apha.org/policies-and-advocacy/public-health-policy-statements/policy-database/2020/01/13/precautionary-moratorium-on-new-and-expanding-concentrated-animal-feeding-operations",
  },
  {
    n: 23,
    url: "https://www.wisfarmer.com/story/news/2023/07/07/officials-in-the-remaining-towns-with-livestock-regulations-wonder-whether-they-too-are-in-legal-cro/70387371007/",
  },
  {
    n: 24,
    prefix: "Available at ",
    url: "https://www.ecfr.gov/current/title-40/chapter-I/subchapter-D/part-122/subpart-B/section-122.23",
    suffix: ".",
  },
  {
    n: 25,
    prefix: "Available at ",
    url: "https://www.ecfr.gov/current/title-40/chapter-I/subchapter-D/part-122/subpart-B/section-122.23",
    suffix: ".",
  },
];

export default function MeasureTextPage() {
  return (
    <Section>
      <div className="pt-28 lg:pt-20 space-y-4">
        <p className="text-center">
          <span className="underline">
            PROHIBITION ON CONCENTRATED ANIMAL FEEDING OPERATIONS
          </span>
        </p>

        <p>
          <strong>WHEREAS</strong>, the people of Sonoma County value healthy
          communities and a healthy environment; and
        </p>
        <p>
          <strong>WHEREAS</strong>, the people of Sonoma County value the
          humane treatment of animals; and
        </p>
        <p>
          <strong>WHEREAS</strong>, the U.S. Supreme Court upheld
          California’s Proposition 12 (the Farm Animal Confinement
          Initiative), the nation’s strongest farm animal welfare law[1],
          which was supported by 61.6% of Sonoma County voters[2]; and
        </p>
        <p>
          <strong>WHEREAS</strong>, hundreds of Concentrated Animal Feeding
          Operations (CAFOs) presently operate in California[3], including
          over a dozen in Sonoma County; and
        </p>
        <p>
          <strong>WHEREAS</strong>, millions of animals are confined in
          CAFOs across California[4]; and
        </p>
        <p>
          <strong>WHEREAS</strong>, it is a well-established scientific
          fact, as supported by thousands of studies exploring animal
          cognition, that animals have emotions, personalities, and the
          ability to feel pain, fear, and stress[5]; and
        </p>
        <p>
          <strong>WHEREAS</strong>, every day, animals are treated
          inhumanely at CAFOs[6]; and
        </p>
        <p>
          <strong>WHEREAS</strong>, the treatment of animals in CAFOs
          routinely violates California animal cruelty laws, with little to
          no accountability; and
        </p>
        <p>
          <strong>WHEREAS</strong>, CAFOs have severe negative public health
          and environmental impacts due to the large amounts of
          concentrated, potentially toxic waste they produce and the
          infectious diseases they facilitate and harbor[7]; and
        </p>
        <p>
          <strong>WHEREAS</strong>, investigators have found
          antibiotic-resistant bacteria and infectious diseases in CAFOs in
          California[8] and across the U.S.[9]; and
        </p>
        <p>
          <strong>WHEREAS</strong>, given that three out of four emerging
          infectious diseases are zoonotic[10], CAFOs pose a serious risk to
          public health[11]; and
        </p>
        <p>
          <strong>WHEREAS</strong>, emissions from industrial animal
          agricultural operations are a significant cause of climate change,
          with livestock contributing 14.5 percent of all greenhouse gas
          emissions[12]; and
        </p>
        <p>
          <strong>WHEREAS</strong>, by worsening climate change via the
          release of greenhouse gasses such as methane, CAFOs are a major
          contributor to the drought and wildfires in California[13],[14];
          and
        </p>
        <p>
          <strong>WHEREAS</strong>, it is projected that the global
          industrial agricultural sector will nearly double in greenhouse
          gas emissions by 2050[15]; and
        </p>
        <p>
          <strong>WHEREAS</strong>, globally, CAFOs and other intensive
          farming practices are the primary driver of biodiversity loss
          through dependence on inputs such as fertilizer, pesticides,
          energy, land, and water, and on practices such as monocropping and
          heavy tilling, which in turn reduces the variety of landscapes and
          habitats[16]; and
        </p>
        <p>
          <strong>WHEREAS</strong>, biodigesters (which can convert animal
          waste into energy) have been shown to be ineffective at mitigating
          the public health and environmental impacts of CAFOs, as they can
          produce other harmful chemicals without fully removing toxins from
          the environment[17]; and
        </p>
        <p>
          <strong>WHEREAS</strong>, workers at CAFOs face health risks due to
          exposure to harmful substances and antibiotic-resistant bacteria,
          as well as high rates of respiratory injuries, musculoskeletal
          injuries, and anxiety and depression[18]; and
        </p>
        <p>
          <strong>WHEREAS</strong>, CAFOs disproportionately affect
          low-income and disadvantaged communities, raising social and
          environmental justice concerns[19]; and
        </p>
        <p>
          <strong>WHEREAS</strong>, proximity to CAFOs significantly
          decreases property values, with a 2015 study showing that
          properties within 3 miles of a CAFO lost up to 26% of their value
          and properties within ¼ mile of a CAFO lost up to 88% of their
          value[20]; and
        </p>
        <p>
          <strong>WHEREAS</strong>, legislation (the Farm System Reform Act)
          has been proposed in U.S. Congress which would place a moratorium
          on the construction of large CAFOs and enact other restrictions on
          resource-intensive factory farming[21]; and
        </p>
        <p>
          <strong>WHEREAS</strong>, the American Public Health Association
          has called for federal, state, and local governments to impose a
          moratorium on new and expanding CAFOs[22]; and
        </p>
        <p>
          <strong>WHEREAS</strong>, several other jurisdictions across the
          U.S. have placed restrictions on CAFOs[23]; and
        </p>
        <p>
          <strong>WHEREAS</strong>, the County of Sonoma has a legitimate and
          substantial interest in promoting public health and encouraging
          responsible environmental practices; and
        </p>
        <p>
          <strong>WHEREAS</strong>, it is the intent of Sonoma County to
          prohibit CAFOs in order to protect the environment, animals, and
          the health and well-being of its residents and communities; and
        </p>
        <p>
          <strong>WHEREAS</strong>, it is also the intent of Sonoma County to
          provide a retraining and employment assistance program for workers
          at CAFOs to facilitate the transition to safer forms of work; and
        </p>
        <p>
          <strong>WHEREAS</strong>, the present Ordinance is in line with
          Sonoma County’s values as an agricultural community that respects
          the environment and responsible agricultural practices;
        </p>

        <p>
          <strong>NOW, THEREFORE, the People of the County of Sonoma ordain
          as follows:</strong>
        </p>

        <p>
          <strong>SECTION 1: ADDITION OF §26-18-075.</strong>
        </p>

        <p>Section 26-18-075 is hereby added to read as follows:</p>

        <div className="space-y-4">
          <p className="pl-10">
            Sec. 26-18-075 Animal Keeping: Concentrated Animal Feeding
            Operations
          </p>
          <p className="pl-10">
            <strong>A. Purpose.</strong>
          </p>
          <p className="pl-10">
            The Purpose of this Section is to protect the environment,
            animals, and the health and well-being of Sonoma County
            residents and communities by prohibiting the operation of
            CAFOs, as defined herein, within the unincorporated areas of the
            County.
          </p>

          <div className="lg:grid lg:grid-cols-[1fr_320px] lg:gap-8 lg:items-start">
            <div className="pl-10 space-y-4">
              <p>
                <strong>B. Definitions.</strong>
              </p>
              <p>
                The following words and phrases as used in this Chapter
                shall be defined as follows:
              </p>
              <p>
                “Animal feeding operation” or “AFO” means a lot or facility
                that meets the regulatory definition of an AFO as set out by
                the Environmental Protection Agency in 40 CFR 122.23 as of
                August 2023[24]. Specifically, a lot or facility (other than
                an aquatic animal production facility) is deemed an AFO
                where the following conditions are met:
              </p>
              <div className="pl-10 space-y-2">
                <p>
                  (i) Animals (other than aquatic animals) have been, are,
                  or will be stabled or confined and fed or maintained for a
                  total of 45 days or more in any 12-month period, and
                </p>
                <p>
                  (ii) Crops, vegetation, forage growth, or post-harvest
                  residues are not sustained in the normal growing season
                  over any portion of the lot or facility.
                </p>
              </div>
            </div>
            <div className="mt-6 space-y-2 self-start bg-ceff-blue p-6 lg:mt-0">
              <p>
                <strong>Note from the Coalition to End Factory Farming:</strong>
              </p>
              <p>
                Confining animals for 45 days is part of the definition of
                an AFO; it does not make a facility a CAFO and it would not
                be prohibited by Measure J. It is just an initial
                prerequisite for the CAFO definition which is based on size.
              </p>
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-[1fr_320px] lg:gap-8 lg:items-start">
            <div className="pl-10 space-y-4">
              <p>
                “Concentrated Animal Feeding Operation” or “CAFO” means an
                AFO which meets the definition of a Medium CAFO or Large
                CAFO, as defined herein, and set out by the Environmental
                Protection Agency in 40 CFR 122.23 as of August 2023, or
                which is designated as a CAFO of any size by the permitting
                authority[25].
              </p>
              <p>
                “Large CAFO” means an AFO which confines at least the
                number of animals described in Table 18-0.
              </p>
              <p>
                “Medium CAFO” means an AFO which falls within the size
                range in Table 18-0 and either:
              </p>
              <div className="pl-[120px] space-y-2">
                <p>
                  (i) has a man-made ditch or pipe that carries manure or
                  wastewater to surface water; or
                </p>
                <p>
                  (ii) the animals come into contact with surface water that
                  passes through the area where they’re confined; or
                </p>
                <p>
                  (iii) is designated as a Medium CAFO by the permitting
                  authority due to being a significant contributor of
                  pollutants.
                </p>
              </div>
              <p>
                “Pre-Existing CAFO” means a CAFO currently in existence in
                Sonoma County at the time this Ordinance becomes effective.
              </p>
              <p>
                “Small CAFO” means an AFO which confines fewer than the
                number of animals listed in Table 18-0 and which has been
                designated as a CAFO by the permitting authority as a
                significant contributor of pollutants.
              </p>
            </div>
            <div className="mt-6 space-y-2 self-start bg-ceff-blue p-6 lg:mt-0">
              <p>
                <strong>Note from the Coalition to End Factory Farming:</strong>
              </p>
              <p>
                As shown in the definition, one of the criteria to be a
                medium CAFO is direct pollution of surface water. This is
                not permitted in Sonoma County. For this reason, there are
                no medium CAFOs in Sonoma County. There are an estimated 21
                large CAFOs. Read more{" "}
                <Link href="/what-are-cafos" className="underline">
                  here
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="pl-10">
            <p className="text-center font-semibold">
              Table 18-0: Size Thresholds for CAFOs
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full border-collapse text-[0.85rem]">
                <thead>
                  <tr>
                    <th className="border border-ceff-ink/40 p-2 text-left">
                      Animal Sector
                    </th>
                    <th className="border border-ceff-ink/40 p-2 text-left">
                      Size Threshold: Large CAFOs
                    </th>
                    <th className="border border-ceff-ink/40 p-2 text-left">
                      Size Threshold: Medium CAFOs
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {SIZE_THRESHOLDS.map(([sector, large, medium]) => (
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
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <p>
            <strong>C. Aggregation.</strong>
          </p>
          <p>
            Two or more lots or facilities that collectively meet the
            definition of a CAFO shall together be deemed a CAFO if they are
            under common ownership and are either on adjoining parcels or
            share a waste disposal system.
          </p>

          <p>
            <strong>D. Prohibition of CAFOs; Exceptions.</strong>
          </p>
          <p>
            1. No person shall establish, operate, expand, or maintain a
            CAFO in unincorporated Sonoma County on or after the date of the
            enactment of this Section.
          </p>
          <p>
            2. This Section does not limit or impact the availability of
            remedies under other applicable local, state and federal laws,
            regulations, and ordinances, including but not limited to laws,
            regulations, and ordinances regarding environmental protection
            and animal cruelty.
          </p>
          <p>
            3. The prohibitions in this Section shall not apply to an
            evacuation area set up to temporarily stable animals in the case
            of a natural disaster or a declared state of emergency, or to a
            registered non-profit animal shelter, sanctuary, or rescue
            organization which does not sell animals or animal products.
          </p>

          <p>
            <strong>E. Existing CAFOs; Phase-Out Period.</strong>
          </p>
          <p>
            1. Notwithstanding anything in this Section, Pre-Existing CAFOs
            shall be deemed a nonconforming use and shall be required to
            register on a public database maintained by the Sonoma County
            Department of Agriculture, Weights and Measures.
          </p>
          <p>
            2. Pre-Existing CAFOs shall be given a phase-out period of no
            more than three (3) years from the effective date of this
            Section to modify or terminate their operations such that they
            are no longer classified as a CAFO. Proof of this shall be
            provided to the Agricultural Commissioner prior to the end of
            the phase-out period. During the phase-out period, Pre-Existing
            CAFOs shall not increase the number of animals in confinement.
          </p>
          <p>
            3. The Agricultural Commissioner or his/her designee shall
            inspect closed CAFOs within one month of receiving such proof of
            termination from a Pre-Existing CAFO to ensure that all relevant
            operations have ceased or been appropriately modified.
          </p>
          <p>
            4. Any Pre-Existing CAFO taking advantage of the phase-out
            period mentioned in Subsection (E)(1) shall comply with Best
            Management Practices set forth by the Agricultural Commissioner,
            which shall be developed in collaboration with a
            California-based humane society and/or a California-based
            society for the prevention of cruelty to animals. The foregoing
            shall be in addition to any requirements imposed on CAFOs by
            County, State and Federal environmental protection agencies.
          </p>
          <p>
            5. The Agricultural Commissioner shall establish a system to
            receive, investigate, and retain complaints related to this
            Section.
          </p>

          <p>
            <strong>F. Violations.</strong>
          </p>
          <p>
            1. Any person who continues to operate a Pre-Existing CAFO after
            the three (3) year phase-out period elapses, or who establishes
            or maintains a CAFO following the enactment of this Section, or
            who violates any other provision of this Section, shall be
            subject to a civil penalty of one thousand dollars ($1,000) for
            the first offense, five thousand dollars ($5,000) for the second
            offense, and ten thousand dollars ($10,000) for the third and
            any subsequent offenses, payable to the Sonoma County General
            Fund.
          </p>
          <p>
            2. Notwithstanding the foregoing, the Agricultural Commissioner
            or his/her designee may also pursue on behalf of the county any
            other civil or administrative penalty or remedy otherwise
            available for failure to comply with the requirements of this
            Section.
          </p>
          <p>
            3. Each day, or portion thereof, during which the violation
            occurs shall be treated as a separate offense.
          </p>
          <p>
            4. Nothing herein shall impact the standing of other interested
            parties, or the availability of remedies under other applicable
            federal, state and local laws, regulations and ordinances,
            including the remedies afforded any person set forth in
            Subsection I of this Ordinance.
          </p>
          <p>
            5. The availability of funds under this Section shall not
            restrict any obligation by the County to provide retraining and
            employment assistance opportunities to CAFO workers.
          </p>
          <p>
            6. For the purposes of this Subsection (F), “person” includes
            any owner, officer, or director of a CAFO. No penalties shall be
            issued to individuals solely for working at a CAFO operation
            unless they also meet one of the foregoing criteria.
          </p>

          <p>
            <strong>G. Retraining for CAFO Workers</strong>
          </p>
          <p>
            The County shall provide a retraining and employment assistance
            program for current and former CAFO workers during the
            phase-out period in Subsection (E)(1) and for an additional one
            year thereafter. The purpose of this program is to provide
            individuals who worked at a CAFO at the time of this Ordinance’s
            enactment or who worked at a CAFO at any point during the
            phase-out period with the training needed to work at a legally
            acceptable agricultural operation or in a different job sector.
            This program shall be administered by the Agricultural
            Commissioner or his/her designee, along with qualified experts
            in employment law, animal rights, farm labor, and best
            agricultural practices. Such experts shall provide proof of
            their qualifications, which shall be subject to public
            disclosure. The County’s obligation under this Subsection (G) to
            provide retraining and employment assistance to CAFO workers
            shall not depend on the fines and penalties collected pursuant
            to Subsection (F).
          </p>

          <p>
            <strong>H. Annual Report.</strong>
          </p>
          <p>
            The Agricultural Commissioner or his/her designee shall prepare
            an annual report containing the following information: the
            number of CAFOs currently operating in unincorporated Sonoma
            County; the number of CAFO termination notices received in the
            previous year; the number of CAFO termination inspections
            conducted in the previous year; the number of CAFO workers in
            the retraining program; and the amount of penalties assessed and
            collected in the previous year. Such report shall be presented
            to the Board of Supervisors at a duly-noticed public hearing and
            posted on the Agricultural Commissioner’s webpage, beginning one
            year after the effective date of this Section and continuing
            until all CAFOs, as defined herein, have been phased out of the
            County.
          </p>

          <p>
            <strong>I. Right of Action.</strong>
          </p>
          <p>
            Any interested party may institute a civil proceeding for
            injunctive relief against a violation of this Section, and for
            whatever other additional relief the court deems appropriate. In
            any action brought pursuant to this Section, the prevailing
            party shall be entitled to reasonable attorney’s fees and costs.
            The remedies available under this Section shall be in addition
            to, and shall not in any way restrict, any other rights or
            remedies under law. Nothing in this Section is intended to, or
            shall be interpreted to, conflict with the Constitution of the
            United States, the Constitution of the State of California, or
            with any state or federal law. For the purposes of this Section,
            “interested party” shall include but not be limited to any
            association, organization, society, or corporation organized
            for the purpose of protecting animals or the environment.
          </p>

          <p>
            <strong>J. Retaliation Prohibited.</strong>
          </p>
          <p>
            Any person who retaliates against another person for making a
            good-faith complaint that there has been a failure to comply
            with this Section is guilty of a misdemeanor.
          </p>

          <p>
            <strong>K. Severability.</strong>
          </p>
          <p>
            The provisions of this Section are declared to be separate and
            severable. The invalidity of any clause, phrase, sentence,
            paragraph, subdivision, section or portion of this Section, or
            the invalidity of the application thereof to any person or
            circumstance, shall not affect the validity of the remainder of
            this Section, or the validity of its application to other
            persons or circumstances. In the event that any provision is
            severed, the remaining provisions of this Section shall be
            interpreted in light of its stated purpose and intent.
          </p>

          <p>
            <strong>SECTION 2. AMENDMENT OF OTHER COUNTY CODE SECTIONS.</strong>
          </p>
          <p>
            Section 26-04-020(C) is hereby amended by inserting the
            following between “Composting” and “Condominium” as Section
            26-04-020(C)(31.5):
          </p>
          <p className="pl-10">
            Concentrated Animal Feeding Operations (CAFOs). Concentrated
            animal feeding operation, or CAFO, shall have the meaning set
            forth in Section 26-18-075.
          </p>
          <p>Section 26-18-070(A) is hereby amended to read as follows:</p>
          <div className="pl-10 space-y-2">
            <p>
              <strong>Definition</strong>. The raising, feeding, maintaining
              and breeding of farm animals where animals are continuously
              confined in enclosed pens or similar structures, the majority
              of animal feed is provided by facility management rather than
              grazing, and animal wastes are concentrated on site. In the
              event that an operation falls under this definition and is
              also defined as a CAFO pursuant to Section 26-18-075, then
              Section 26-18-075 shall control.
            </p>
            <p>
              Includes: Dairies, hog farms, veal production, and chicken and
              turkey ranches, and similar livestock where animals are
              continuously confined.
            </p>
            <p>
              Excludes: Horses, goats, sheep, and similar farm animals;
              Concentrated Animal Feeding Operations (CAFOs).
            </p>
          </div>
          <p>Section 26-18-080(A)(1) is hereby amended to read as follows:</p>
          <p className="pl-10">
            Excludes: Confined farm animal facilities, Concentrated Animal
            Feeding Operations (CAFOs), the keeping of household pets and
            wild or exotic animals.
          </p>
          <p>Section 26-18-090(A)(2) is hereby amended to read as follows:</p>
          <p className="pl-10">
            Excludes: Slaughterhouses, rendering plants, Concentrated Animal
            Feeding Operations (CAFOs).
          </p>

          <p>
            <strong>SECTION 3. FUTURE AMENDMENTS.</strong>
          </p>
          <p>
            In addition to the foregoing, the Board of Supervisors shall
            amend the County Code as needed within a reasonable time
            following the adoption of the Ordinance to effectuate this
            Ordinance, and from time-to-time as the necessity of any other
            amendments becomes clear.
          </p>

          <p>
            <strong>SECTION 4. CONSTRUCTION &amp; INTERPRETATION.</strong>
          </p>
          <p>
            This Ordinance and its provisions shall be broadly construed and
            interpreted to accomplish its purpose and intent.
          </p>

          <p>
            <strong>SECTION 5. CEQA.</strong>
          </p>
          <p>
            This Ordinance is exempt from the California Environmental
            Quality Act (CEQA) as a citizen-sponsored initiative.
          </p>

          <p>
            <strong>SECTION 6. SEVERABILITY.</strong>
          </p>
          <p>
            If any provision of this Ordinance, or part thereof, or the
            application of any provision or part to any person or
            circumstance is held for any reason to be invalid or
            unconstitutional, the remaining provisions and parts shall not
            be affected, and the Ordinance as a whole shall be interpreted
            in light of its stated Purpose and Intent. The People of the
            County of Sonoma hereby declare that they would have passed
            this Ordinance and every section, subsection, sentence, clause
            or phrase thereof irrespective of the fact that any one or more
            sections, subsections, sentences, clauses or phrases be
            declared unconstitutional or invalid.
          </p>

          <p>
            <strong>SECTION 7. EFFECTIVE DATE.</strong>
          </p>
          <p>
            This Ordinance shall take effect immediately upon approval by
            the voters, or as soon as otherwise allowable under applicable
            law.
          </p>

          <p>
            <strong>SECTION 8. CERTIFICATION; PUBLICATION.</strong>
          </p>
          <p>
            Upon approval by the voters, the County Clerk shall certify to
            the passage and adoption of this Ordinance and shall cause it to
            be published according to law.
          </p>

          <div className="space-y-1 text-[0.85rem]">
            {FOOTNOTES.map(({ n, prefix, url, suffix }) => (
              <p key={n}>
                [{n}] {prefix}
                <a
                  href={url}
                  target="_blank"
                  rel="noopener"
                  className="underline break-all"
                >
                  {url}
                </a>
                {suffix}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
