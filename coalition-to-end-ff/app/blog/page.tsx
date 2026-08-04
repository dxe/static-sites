import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/section";
import postImg from "@/public/images/blog/sunrise-main-sat-imagery.png";

export const metadata: Metadata = {
  title: "Blog 3",
};

export default function BlogPage() {
  return (
    <Section>
      <div className="grid grid-cols-1 items-center gap-10 pt-28 lg:grid-cols-2 lg:gap-16 lg:pt-20">
        <Link href="/blog/more-info" className="block">
          <Image
            src={postImg}
            alt="More Info on Measure J"
            className="aspect-square w-full object-cover"
          />
        </Link>
        <div>
          <p className="text-ceff-ink/70">5/28/19</p>
          <h1 className="mt-2">
            <Link href="/blog/more-info">More Info on Measure J</Link>
          </h1>
          <Link href="/blog/more-info" className="mt-8 inline-block underline">
            Read More
          </Link>
        </div>
      </div>
    </Section>
  );
}
