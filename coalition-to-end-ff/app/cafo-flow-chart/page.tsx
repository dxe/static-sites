import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/section";
import flowChart from "@/public/images/cafo-flow-chart/cafo-logic-flow-chart.jpeg";

export const metadata: Metadata = {
  title: "Cafo Flow Chart",
};

export default function CafoFlowChartPage() {
  return (
    <Section>
      <div className="pt-28 lg:pt-20">
        <Image
          src={flowChart}
          alt="Am I a CAFO? A flow chart showing how to determine whether a facility is a CAFO based on animal confinement, EPA pollutant designation, manure discharge, and animal count thresholds, followed by a table of size thresholds by animal sector."
          className="mx-auto h-auto w-full max-w-[900px]"
        />
      </div>
    </Section>
  );
}
