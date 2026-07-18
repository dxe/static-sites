import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
};

const GOOGLE_CALENDAR_EMBED_SRC =
  "https://calendar.google.com/calendar/embed?src=directactioneverywhere.com_g5gbpddon12e4pc1nvml1kjbbc%40group.calendar.google.com&ctz=America%2FLos_Angeles";

export default function EventsPage() {
  return (
    <div className="mt-24 bg-white px-6 py-20 lg:mt-36.75">
      <div className="mx-auto max-w-252.5">
        <h1 className="text-center font-display text-4xl font-medium uppercase tracking-[1px] text-arc-ink lg:text-[54px] lg:leading-none">
          Events
        </h1>
        <div className="mt-10 text-xl font-light leading-7.5 text-arc-text">
          <p>
            We are back to hosting events in person at ARC (2414 Sixth
            Street)! You can see most events on the calendar below. Please
            click on the event to see specific location information.
          </p>
          <p className="mt-8">
            <strong className="font-bold">
              Want to host an event at ARC?
            </strong>{" "}
            Please email info@berkeleyarc.com. Priority is given to animal
            rights and other social justice organizations.
          </p>
        </div>
        <iframe
          src={GOOGLE_CALENDAR_EMBED_SRC}
          title="Berkeley Animal Rights Center events calendar"
          loading="lazy"
          width={800}
          height={600}
          className="mt-12 max-w-full border-0"
        />
      </div>
    </div>
  );
}
