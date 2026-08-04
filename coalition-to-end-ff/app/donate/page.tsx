import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { LinkButton } from "@/components/link-button";
import heroImg from "@/public/images/donate/mccoys-crowding.png";
import groupPhoto from "@/public/images/donate/group-photo-turning-in-sigs.jpg";

export const metadata: Metadata = {
  title: "Donate",
};

export default function DonatePage() {
  return (
    <>
      <PageHero
        title="Help End Factory Farming in Sonoma County"
        image={heroImg}
      />

      <Section>
        <div className="grid gap-x-10 gap-y-8 md:grid-cols-2 md:items-start">
          <div className="order-1 flex justify-center md:order-2 md:justify-start">
            <LinkButton href="https://buy.stripe.com/00gaESc5o3RqaE87ss">
              Donate
            </LinkButton>
          </div>

          <Image src={groupPhoto} alt="" className="order-2 md:order-1 md:row-span-2" />

          <p className="order-3">
            The Coalition to End Factory Farming is exclusively focused on
            prohibiting factory farming in Sonoma County by way of a ballot
            measure, which is why contributions are not tax-deductible. We can
            only accept donations from US residents or citizens. We ask for
            your occupation and employer due to disclosure requirements and
            are legally required to disclose donor information in quarterly
            campaign statements. Thank you for helping to end factory farming
            and for supporting the democratic process.
          </p>
        </div>
      </Section>
    </>
  );
}
