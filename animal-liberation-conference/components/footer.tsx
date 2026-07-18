import Link from "next/link";
import { SocialIcons } from "@/components/social-icons";

export function Footer() {
  return (
    <footer className="bg-alc-ink text-alc-fog">
      <div className="mx-auto w-full max-w-[1180px] p-5 sm:px-9 sm:py-[90px] xl:px-[50px]">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="font-wide text-[25px] leading-[1.55] tracking-[0.1em]">
              Animal Liberation Conference
            </h3>
            <p className="mt-6">
              Hosted by{" "}
              <a
                href="https://www.directactioneverywhere.com/"
                className="underline transition-opacity hover:opacity-80"
              >
                Direct Action Everywhere
              </a>
            </p>
          </div>
          <div className="self-end sm:self-auto">
            <SocialIcons />
          </div>
        </div>
        <nav className="mt-10">
          <Link
            href="/contact"
            className="text-[14px] tracking-[0.24em] uppercase transition-opacity hover:opacity-80"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </footer>
  );
}
