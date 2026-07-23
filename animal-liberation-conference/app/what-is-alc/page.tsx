import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What is ALC",
};

export default function WhatIsAlc() {
  return (
    <div className="bg-alc-mist">
      <div className="mx-auto w-full max-w-[1180px] px-5 py-10 sm:px-9 sm:py-[90px] xl:px-[50px]">
        <h2 className="font-heading text-[46.8px] font-bold leading-[1.19] text-alc-orange">
          About
        </h2>
        <div className="mt-8 space-y-[1em]">
          <p>
            The Animal Liberation Conference is the flagship conference for
            grassroots animal rights activism, leading a global movement where
            ordinary people are taking a bold stand against injustice.
          </p>
          <p>
            Meet like-minded people who want to change the world for animals,
            and learn how to get animal liberation into mainstream
            conversation. Be inspired while taking part in historic actions,
            and watch your transformation impact your community.
          </p>
          <p>
            The Animal Liberation Conference is for everyone. No matter who you
            are, where you come from, or where you&rsquo;re at in your journey
            as an activist.
          </p>
          <p>
            Come experience what can happen when we rise up to achieve animal
            liberation together.
          </p>
          <p id="contact">
            Questions? Email{" "}
            <a
              href="mailto:info@liberationconference.com"
              className="text-alc-link underline"
            >
              info@liberationconference.com.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
