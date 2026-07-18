import Image from "next/image";
import Link from "next/link";
import { SignupForm } from "@/components/signup-form";
import community from "@/public/images/community.jpg";
import development from "@/public/images/development.jpg";
import heroMural from "@/public/images/hero-mural.jpg";
import socialChange from "@/public/images/social-change.jpg";
import whoWeAre from "@/public/images/who-we-are.jpg";

const GOOGLE_MAPS_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16274.169007773107!2d-122.28807698285816!3d37.86405359953464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80857f4d6f16d6ab%3A0xdf4111cc35eb0037!2sBerkeley%20Animal%20Rights%20Center%20-%20West!5e1!3m2!1sen!2sus!4v1751818754643!5m2!1sen!2sus";

const PILLARS = [
  {
    image: community,
    title: "Community",
    body: (
      <>
        We host <strong className="font-bold">community events</strong> to
        build and sustain a strong and effective movement for animals.
      </>
    ),
  },
  {
    image: socialChange,
    title: "Social Change",
    body: (
      <>
        We work to <strong className="font-bold">transform Berkeley</strong>{" "}
        (and the world) such that every animal is safe, happy and free.
      </>
    ),
  },
  {
    image: development,
    title: "Development",
    body: (
      <>
        We offer trainings, lectures, and discussions for{" "}
        <strong className="font-bold">new and veteran activists</strong>.
      </>
    ),
  },
] as const;

const sectionHeadingClasses =
  "text-center font-display text-[32px] font-medium uppercase tracking-[1px] text-arc-ink lg:text-[42px]";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex h-112.5 items-center justify-center overflow-hidden lg:h-140">
        <Image
          src={heroMural}
          alt="Animal rights mural at the Berkeley Animal Rights Center"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#989661]/55" aria-hidden />
        <div className="relative px-6 pt-16 text-center">
          <h1 className="font-display text-4xl font-medium uppercase tracking-[1px] text-white md:text-5xl lg:text-[64px] lg:leading-none">
            Berkeley Animal Rights Center
          </h1>
          <h2 className="mt-4 font-display text-base font-normal uppercase tracking-[4px] text-white/90 md:text-xl lg:text-2xl">
            The first community center for{" "}
            <strong className="font-semibold">animal rights</strong> in the
            U.S.
          </h2>
        </div>
      </section>

      {/* Who we are */}
      <section className="bg-white px-6 py-20 lg:py-24">
        <h2 className={sectionHeadingClasses}>Who We Are</h2>
        <div className="mx-auto mt-8 max-w-182.5 text-center text-xl font-light leading-7.5 text-arc-text">
          <p>
            The Berkeley Animal Rights Center (ARC) is the first community
            center for animal rights in the US. And now we have two locations!
            We host <strong className="font-bold">community events</strong> and{" "}
            <strong className="font-bold">trainings</strong> for animal rights
            and social justice advocates and function as an office space,
            materials building shop, and more!
          </p>
          <p className="mt-8">
            <Link href="/sign-up" className="font-bold text-arc-salmon">
              Join us
            </Link>{" "}
            as we change the world for animals.
          </p>
        </div>
        <Image
          src={whoWeAre}
          alt="Community members gathered inside the Berkeley Animal Rights Center"
          className="mx-auto mt-12 w-full max-w-2xl"
        />
      </section>

      {/* What we're about */}
      <section className="bg-arc-cream px-6 py-20 lg:py-24">
        <h2 className={sectionHeadingClasses}>What We&rsquo;re About</h2>
        <div className="mx-auto mt-14 grid max-w-5xl gap-12 sm:grid-cols-3 sm:gap-8">
          {PILLARS.map((pillar) => (
            <div key={pillar.title} className="text-center">
              <Image
                src={pillar.image}
                alt=""
                className="aspect-3/2 w-full object-cover"
              />
              <h3 className="mt-8 font-display text-2xl font-medium uppercase tracking-[3px] text-arc-heading">
                {pillar.title}
              </h3>
              <p className="mt-4 text-lg font-light leading-7 text-arc-text">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Where we are */}
      <section className="bg-white px-6 py-20 lg:py-24">
        <h2 className={sectionHeadingClasses}>Where We Are</h2>
        <div className="mx-auto mt-12 flex max-w-5xl flex-col gap-10 lg:flex-row lg:gap-16">
          <iframe
            src={GOOGLE_MAPS_EMBED_SRC}
            title="Map showing the Berkeley Animal Rights Center at 2414 Sixth Street, Berkeley"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="h-87.5 w-full border-0 lg:h-140 lg:w-[55%]"
          />
          <div className="text-xl font-light leading-7.5 text-arc-text">
            <h3 className="font-display text-lg font-medium uppercase tracking-[4px] text-arc-red">
              ARC
            </h3>
            <p className="mt-4">
              2414 Sixth Street
              <br />
              Berkeley, CA
              <br />
              94710
            </p>
            <h3 className="mt-10 font-display text-lg font-medium uppercase tracking-[4px] text-arc-red">
              Contact
            </h3>
            <p className="mt-4">
              <a href="mailto:info@berkeleyarc.com" className="text-arc-salmon">
                info@berkeleyarc.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter sign-up */}
      <section className="bg-arc-cream px-6 py-20">
        <h2 className="mx-auto text-center font-display text-base font-medium uppercase tracking-[3px] text-arc-red md:text-xl md:tracking-[4px] lg:text-2xl">
          Sign up to stay up to date on all the events happening at ARC!
        </h2>
        <div className="mt-12 flex justify-center">
          <SignupForm />
        </div>
      </section>
    </>
  );
}
