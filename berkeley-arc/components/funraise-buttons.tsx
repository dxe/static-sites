"use client";

import Script from "next/script";

const FUNRAISE_ORG_ID = "472c107b-a760-4be2-b990-81c429da14d5";
const FUNRAISE_FORM_ID = "13186";

const TIERS = [
  { amount: 15, color: "#5BC0DE" },
  { amount: 25, color: "#5BC0DE" },
  { amount: 45, color: "#5BC0DE" },
  { amount: 50, color: "#5BC637" },
] as const;

export function FunraiseButtons() {
  return (
    <>
      <Script
        src={`https://assets.funraise.io/widget/common/2.0/inject-form.js?orgId=${FUNRAISE_ORG_ID}`}
        strategy="lazyOnload"
      />
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
        {TIERS.map((tier) => (
          <button
            key={tier.amount}
            type="button"
            aria-label={`$${tier.amount}`}
            data-formid={FUNRAISE_FORM_ID}
            data-amount={tier.amount}
            className="cursor-pointer rounded-[3px] px-8.75 py-3 text-lg text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: tier.color }}
          >
            ${tier.amount}
          </button>
        ))}
      </div>
    </>
  );
}
