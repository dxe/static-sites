type Props = {
  /** Full embed URL, e.g. https://www.youtube.com/embed/XXXX */
  src: string;
  title?: string;
  className?: string;
};

export function VideoEmbed({ src, title = "Video", className = "" }: Props) {
  return (
    <div className={`relative aspect-video w-full ${className}`}>
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}
