export function YouTube({
  id,
  title,
  aspect = "56.5%",
  start,
}: {
  id: string;
  title: string;
  /** Height as a percentage of width, matching the original embed wrappers. */
  aspect?: string;
  start?: number;
}) {
  const src = `https://www.youtube.com/embed/${id}${start ? `?start=${start}` : ""}`;
  return (
    <div className="relative w-full" style={{ paddingBottom: aspect }}>
      <iframe
        src={src}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}
