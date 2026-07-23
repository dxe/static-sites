"use client";

import Script from "next/script";

const FUNRAISE_ORG_ID = "472c107b-a760-4be2-b990-81c429da14d5";
const FUNRAISE_FORM_ID = 13186;

const TIERS = [
  { amount: 15, color: "#5BC0DE" },
  { amount: 25, color: "#5BC0DE" },
  { amount: 45, color: "#5BC0DE" },
  { amount: 50, color: "#5BC637" },
] as const;

// Verbatim Funraise loader snippet (same one used on the live Squarespace site).
// It seeds the `window.funraise` command queue, pushes `init` (which the async
// widget script reads on load), and injects inject-form.js. We then push
// `create` for the form so clicking a `[data-formId]` button opens the widget.
// Keep this in sync with the snippet Funraise provides; only the trailing
// arguments to the IIFE and the `create` form id are ours to change.
const FUNRAISE_LOADER = `(function(f,u,n,r,a,i,s,e){var data={window:window,document:document,tag:"script",data:"funraise",orgId:f,uri:u,common:n,client:r,script:a};var scripts;var funraiseScript;data.window[data.data]=data.window[data.data]||[];if(data.window[data.data].scriptIsLoading||data.window[data.data].scriptIsLoaded)return;data.window[data.data].loading=true;data.window[data.data].push("init",data);scripts=data.document.getElementsByTagName(data.tag)[0];funraiseScript=data.document.createElement(data.tag);funraiseScript.async=true;funraiseScript.src=data.uri+data.common+data.script+"?orgId="+data.orgId;scripts.parentNode.insertBefore(funraiseScript,scripts)})('${FUNRAISE_ORG_ID}','https://assets.funraise.io','/widget/common/2.0','/widget/client','/inject-form.js');
window.funraise.push('create', { form: ${FUNRAISE_FORM_ID} });`;

export function FunraiseButtons() {
  return (
    <>
      <Script id="funraise-loader" strategy="afterInteractive">
        {FUNRAISE_LOADER}
      </Script>
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
