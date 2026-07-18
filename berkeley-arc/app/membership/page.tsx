import type { Metadata } from "next";
import Image from "next/image";
import { FunraiseButtons } from "@/components/funraise-buttons";
import arcShirt from "@/public/images/arc-shirt.jpg";

export const metadata: Metadata = {
  title: "Become A Supporting Member",
};

export default function MembershipPage() {
  return (
    <div className="mt-24 bg-white px-6 py-20 lg:mt-36.75">
      <div className="mx-auto max-w-252.5">
        <h1 className="text-center font-display text-4xl font-medium uppercase tracking-[1px] text-arc-ink lg:text-[54px] lg:leading-none">
          Become a Supporting Member
        </h1>
        <h2 className="mt-16 text-center font-display text-2xl font-normal uppercase tracking-[3px] text-arc-heading lg:text-[32px]">
          Select Your Membership
        </h2>
        <div className="mt-8">
          <FunraiseButtons />
        </div>
        <div className="mt-20 text-xl font-light leading-7.5 text-arc-text">
          <p>
            You don&rsquo;t need to becoming a supporting member in order to
            attend any of our events or make use of our community centers, but
            donations do help us build and sustain a strong and effective
            movement for animals. Together we work to transform Berkeley (and
            the world) such that every animal is safe, happy and free. And
            your financial support is vital to this work!
          </p>
          <p className="mt-6">
            Plus, a monthly donation of $15 or more entitles you to this
            exclusive ARC T-shirt (free shipping to continental US).
          </p>
          <p className="mt-6">
            Your support helps us keep ARC operating to its full potential.
            Thank you!
          </p>
        </div>
        <Image
          src={arcShirt}
          alt="Dark heather ARC T-shirt with the Berkeley Animal Rights Center mural design"
          className="mt-10 w-full"
        />
        <div className="mt-12 text-center text-xl font-light leading-7.5 text-arc-text">
          <p>
            If you are already a monthly member and you want to change or
            cancel your monthly donation, please email:{" "}
            <a
              href="mailto:donate@friendsofdxe.com"
              className="text-arc-salmon"
            >
              donate@friendsofdxe.com
            </a>
            .
          </p>
          <p className="mt-6">
            One-time donations can be made at{" "}
            <a
              href="https://directactioneverywhere.com"
              className="text-arc-salmon"
            >
              directactioneverywhere.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
