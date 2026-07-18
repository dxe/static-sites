import type { Metadata } from "next";
import { SignupForm } from "@/components/signup-form";

export const metadata: Metadata = {
  title: "Sign up",
};

export default function SignUpPage() {
  return (
    <div className="mt-24 bg-white px-6 py-24 lg:mt-36.75">
      <h1 className="mx-auto text-center font-display text-base font-medium uppercase tracking-[3px] text-arc-red md:text-xl md:tracking-[4px] lg:text-2xl">
        Sign up to stay up to date on all the events happening at ARC!
      </h1>
      <div className="mt-14 flex justify-center">
        <SignupForm />
      </div>
    </div>
  );
}
