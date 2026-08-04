import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";

import regulatoryDefinitionsImg from "@/public/images/what-are-cafos/regulatory-definitions-table.png";
import sizeThresholdsImg from "@/public/images/what-are-cafos/cafo-size-thresholds-table.png";
import facilityTableImg from "@/public/images/what-are-cafos/cafo-facility-table.jpg";

export const metadata: Metadata = {
  title: "What are CAFOs?",
};

export default function WhatAreCafosPage() {
  return (
    <>
      <PageHero title="What are CAFOs?" />

      <Section>
        <p>
          The Coalition to End Factory Farming has identified 21 large
          Concentrated Animal Feeding Operations (CAFOs) in Sonoma County,
          which are listed in the “Large CAFOs” section below. Continue
          reading to understand how CAFOs are defined.
        </p>

        <div className="mt-10 space-y-5">
          <h2 className="text-center">Defining AFOs and CAFOs</h2>
          <p>
            To be a Concentrated Animal Feeding Operation (CAFO), a facility
            must first meet the EPA’s definition of an Animal Feeding
            Operation (AFO). According to the EPA:
            <br />“<strong>
              <em>Animal feeding operation</em>
            </strong>{" "}
            (“AFO”) means a lot or facility (other than an aquatic animal
            production facility) where the following conditions are met:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Animals (other than aquatic animals) have been, are, or will be
              stabled or confined and fed or maintained for a total of 45
              days or more in any 12-month period, and
            </li>
            <li>
              Crops, vegetation, forage growth, or post-harvest residues are
              not sustained in the normal growing season over any portion of
              the lot or facility.”
            </li>
          </ul>
          <p className="text-right text-[0.85rem]">
            <strong>
              <em>Source: </em>
            </strong>
            <a
              href="https://www.ecfr.gov/current/title-40/part-122/section-122.23#p-122.23(b)(1)"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              <strong>
                <em>Title 40 Code of Federal Regulations §122.23(b)(1)</em>
              </strong>
            </a>
          </p>
          <p>
            An AFO becomes a CAFO when it meets the regulatory definition of
            a large CAFO (confining a certain number of animals) or of a
            medium CAFO (confining a smaller number of animals but also
            discharging waste into surface water), or when it is deemed a
            major polluter by regulatory authorities on a case-by-case basis.
          </p>
        </div>

        <div className="mt-10">
          <Image
            src={regulatoryDefinitionsImg}
            alt="Regulatory definitions of Large CAFO, Medium CAFO, and Small CAFO"
            className="w-full"
          />
        </div>
        <div className="mt-6">
          <Image
            src={sizeThresholdsImg}
            alt="Table of size thresholds (number of animals) by animal sector for Large, Medium, and Small CAFOs"
            className="w-full"
          />
        </div>
        <p className="mt-4 text-right text-[0.85rem]">
          <strong>
            <em>Source: </em>
          </strong>
          <a
            href="https://www.epa.gov/sites/default/files/2015-08/documents/sector_table.pdf"
            target="_blank"
            rel="noopener"
            className="underline"
          >
            <strong>
              <em>EPA.Gov</em>
            </strong>
          </a>
        </p>

        <div className="mt-10 space-y-5">
          <h2 className="text-center">Small and Medium CAFOs</h2>
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
            was only aware of small CAFO designation happening a couple
            times in the Midwest, and that there are no small CAFOs in
            Sonoma County.
          </p>
          <p>
            Given our research and communication with local and federal
            regulatory agencies, it is our best understanding that there are
            no small or medium CAFOs in Sonoma County.
          </p>
        </div>

        <div className="mt-10 space-y-5">
          <h2 className="text-center">Large CAFOs</h2>
          <p>
            While our best understanding is that there are no small or
            medium CAFOs in Sonoma County, research shows that there are
            multiple facilities that meet the regulatory definition of large
            CAFOs. Large CAFOs are defined as any AFO that confines more
            than a certain number of animals, with that number depending on
            the species, the product being produced, and whether the
            facility uses a solid or liquid manure handling system.
          </p>
          <p>
            Through extensive open source research, we have identified 21
            large CAFOs in Sonoma County, which are listed in the table
            below. This list aims to be overinclusive; we believe it is
            highly unlikely that large CAFOs are missing from the list
            based on our review of approximately 100 of the largest animal
            farms in Sonoma County, obtained by public records and thorough
            analysis of satellite imagery. All data listed is a best
            estimate based on available information.
          </p>
        </div>

        <div className="mt-10">
          <Image
            src={facilityTableImg}
            alt="Table listing the 21 large CAFOs identified in Sonoma County, with facility name, estimated number of animals, city, type of facility, and notes"
            className="w-full"
          />
        </div>

        <div id="methodology" className="mt-10 space-y-5">
          <h2 className="text-center">CAFO Research Methodology</h2>
          <p>
            The above research was conducted by volunteers based on the
            best available evidence that could be located. Whenever two
            sources provided contradicting estimates of animal populations
            at a facility, we used the higher number sources in order to
            lean toward over-inclusion of facilities as CAFOs, so that the
            possible impacts of the CAFO prohibition are not underestimated.
            It is possible that some population sources we used count
            animals not relevant to the CAFO number threshold, such as
            immature heifers on a dairy farm. It should be possible for
            county officials to make more accurate assessments based on
            information not available to the public.
          </p>
          <p>
            The majority of dairy farms were able to be assessed based on{" "}
            <a
              href="https://ciwqs.waterboards.ca.gov/ciwqs/readOnly/CiwqsReportServlet?inCommand=reset&reportName=RegulatedFacility"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              data from regional water boards
            </a>
            .
          </p>
          <p>
            Some poultry/egg facilities were able to be assessed based on{" "}
            <a
              href="https://publicdashboards.dl.usda.gov/t/MRP_PUB/views/VS_Avian_HPAIConfirmedDetections2022/HPAI2022ConfirmedDetections"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              USDA reports from the 2023-2024 HPAI outbreaks
            </a>
            .
          </p>
          <p>
            The remainder of poultry/egg facility populations were estimated
            based on a projected average of birds per square foot of barn
            space, generated by calculating the average for known facilities
            of the same type, and owner when possible.
          </p>
        </div>
      </Section>
    </>
  );
}
