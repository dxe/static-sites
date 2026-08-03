import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  /** primary = light-blue fill (accent), outline = transparent with dark border */
  variant?: "primary" | "outline";
  className?: string;
};

/**
 * Squarespace-style button: "Obviously"-esque font (Archivo), 2px dark
 * border, slightly rounded. External hrefs get a plain <a>.
 */
export function LinkButton({
  href,
  children,
  variant = "primary",
  className = "",
}: Props) {
  const classes = [
    "inline-block font-button text-[1.1rem] font-medium tracking-[0.02em] text-black",
    "rounded-md border-2 border-black px-8 py-3 text-center leading-snug",
    variant === "primary" ? "bg-ceff-blue hover:bg-ceff-accent" : "bg-transparent hover:bg-black/5",
    className,
  ].join(" ");
  const external = href.startsWith("http") || href.startsWith("mailto:");
  return external ? (
    <a href={href} className={classes} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener">
      {children}
    </a>
  ) : (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
