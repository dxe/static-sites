export function Footer() {
  return (
    <footer className="bg-arc-orange py-10 text-center text-white">
      <a
        href="#top"
        className="font-nav text-xs font-bold uppercase tracking-[3px] lg:hidden"
      >
        Back to top
      </a>
      <p className="mt-6 text-xl font-light leading-7.5 lg:mt-0">
        <strong className="font-bold">Berkeley Animal Rights Center</strong>
        <br />
        2414 Sixth Street, Berkeley, CA 94710
        <br />
        <a href="mailto:info@berkeleyarc.com" className="underline">
          info@berkeleyarc.com
        </a>
      </p>
    </footer>
  );
}
