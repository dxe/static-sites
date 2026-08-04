import Image, { type StaticImageData } from "next/image";

type Props = {
  src: StaticImageData | string;
  alt: string;
  /** Caption text (verbatim from the live site) */
  caption?: string;
  /** overlay = white text over the image bottom (live-site style); below = under the image */
  captionPosition?: "overlay" | "below";
  className?: string;
  imgClassName?: string;
};

export function FigureImage({
  src,
  alt,
  caption,
  captionPosition = "overlay",
  className = "",
  imgClassName = "",
}: Props) {
  return (
    <figure className={`relative ${className}`}>
      <Image src={src} alt={alt} className={`w-full ${imgClassName}`} />
      {caption &&
        (captionPosition === "overlay" ? (
          <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/60 to-transparent px-4 pb-2 pt-8 text-[0.8rem] text-white">
            {caption}
          </figcaption>
        ) : (
          <figcaption className="mt-2 text-[0.8rem]">{caption}</figcaption>
        ))}
    </figure>
  );
}
