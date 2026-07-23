import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us",
  robots: { index: false },
};

// The old Squarespace URL for the contact page. Static export can't issue
// HTTP redirects, so serve a meta refresh that hosts will render instantly.
export default function ContactRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/what-is-alc#contact" />
      <div className="bg-alc-mist">
        <div className="mx-auto w-full max-w-[1180px] px-5 py-10 sm:px-9 sm:py-[90px] xl:px-[50px]">
          <p>
            This page has moved to the{" "}
            <Link href="/what-is-alc#contact" className="text-alc-link underline">
              About
            </Link>{" "}
            page.
          </p>
        </div>
      </div>
    </>
  );
}
