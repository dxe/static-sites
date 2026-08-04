type Props = {
  children: React.ReactNode;
  /** Section background: white (default) or the site's light blue */
  bg?: "white" | "blue";
  /** normal = 1200px content column (site default), narrow = 800px */
  width?: "normal" | "narrow";
  id?: string;
  className?: string;
};

export function Section({
  children,
  bg = "white",
  width = "normal",
  id,
  className = "",
}: Props) {
  return (
    <section
      id={id}
      className={`${bg === "blue" ? "bg-ceff-blue" : "bg-white"} ${className}`}
    >
      <div
        className={`mx-auto px-6 py-10 md:py-14 ${
          width === "narrow" ? "max-w-[800px]" : "max-w-[1200px]"
        }`}
      >
        {children}
      </div>
    </section>
  );
}
