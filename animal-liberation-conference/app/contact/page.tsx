import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function Contact() {
  return (
    <div className="bg-alc-mist">
      <div className="mx-auto w-full max-w-[1180px] px-5 py-10 sm:px-9 sm:py-[90px] xl:px-[50px]">
        <h1 className="font-heading text-[72px] font-bold leading-[1.19] text-alc-orange">
          Contact Us
        </h1>
        <ContactForm />
      </div>
    </div>
  );
}
