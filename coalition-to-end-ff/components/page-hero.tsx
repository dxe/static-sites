import Image, { type StaticImageData } from "next/image";

type Props = {
  /** Big Oswald H1. Omit if you pass custom children instead. */
  title?: string;
  /** Background image (static import). Without it you get the light-blue band. */
  image?: StaticImageData | string;
  imageAlt?: string;
  /** Darken the background image so white text stays readable (0–100, default 30) */
  overlayOpacity?: number;
  /** Small photo credit shown bottom-right over the image */
  caption?: string;
  /** Extra/custom hero content rendered under (or instead of) the title */
  children?: React.ReactNode;
  className?: string;
};

/**
 * Full-bleed hero band under the transparent site header.
 * - Color band (FAQ-style): centered dark-ink H1 on light blue.
 * - Image hero (CAFOs-style): background photo + overlay + centered white H1.
 */
export function PageHero({
  title,
  image,
  imageAlt = "",
  overlayOpacity = 30,
  caption,
  children,
  className = "",
}: Props) {
  const withImage = Boolean(image);
  return (
    <div
      className={`relative flex flex-col items-center justify-center px-6 text-center ${
        withImage
          ? "min-h-[400px] py-32 text-white md:min-h-[520px] lg:min-h-[630px]"
          : "bg-ceff-blue pb-14 pt-32 text-ceff-ink lg:pb-20 lg:pt-40"
      } ${className}`}
    >
      {image && (
        <>
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-black"
            style={{ opacity: overlayOpacity / 100 }}
          />
        </>
      )}
      <div className="relative max-w-[1200px]">
        {title && <h1>{title}</h1>}
        {children}
      </div>
      {caption && (
        <p className="absolute bottom-2 right-4 text-[0.75rem] tracking-wide opacity-90">
          {caption}
        </p>
      )}
    </div>
  );
}
