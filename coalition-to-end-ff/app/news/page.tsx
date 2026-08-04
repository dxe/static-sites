import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";

import img01 from "@/public/images/news/01-losing-forward.jpg";
import img02 from "@/public/images/news/02-salon.png";
import img03 from "@/public/images/news/03-new-lede.jpg";
import img04 from "@/public/images/news/04-kqed-forum.jpg";
import img05 from "@/public/images/news/05-kqed-thebay.jpg";
import img06 from "@/public/images/news/06-press-democrat-close-to-home.jpg";
import img07 from "@/public/images/news/07-press-democrat-cruelty.jpg";
import img08 from "@/public/images/news/08-economic-guide.jpg";
import img09 from "@/public/images/news/09-ktvu.png";
import img10 from "@/public/images/news/10-ap-chicken.png";
import img11 from "@/public/images/news/11-kqed-sunrise.jpg";
import img12 from "@/public/images/news/12-debate-recap.png";
import img13 from "@/public/images/news/13-sonoma-state-star.jpeg";
import img14 from "@/public/images/news/14-community-support.jpeg";
import img15 from "@/public/images/news/15-norcal-pandemic.jpg";
import img16 from "@/public/images/news/16-press-democrat-march.jpeg";
import img17 from "@/public/images/news/17-hcn-cafo-ban.png";
import img18 from "@/public/images/news/18-public-news-service.jpg";
import img19 from "@/public/images/news/19-common-dreams.png";
import img20 from "@/public/images/news/20-politico.jpg";
import img21 from "@/public/images/news/21-cbs-news.jpg";
import img22 from "@/public/images/news/22-press-democrat-reluctantly.jpg";
import img23 from "@/public/images/news/23-press-democrat-dispute.jpg";
import img24 from "@/public/images/news/24-latimes.png";
import img25 from "@/public/images/news/25-norcal-downsize.jpg";
import img26 from "@/public/images/news/26-sonoma-gazette.jpg";
import img27 from "@/public/images/news/27-press-democrat-qualifies.jpg";

export const metadata: Metadata = {
  title: "News",
};

type NewsItem = {
  title: string;
  href: string;
  source: string;
  date: string;
  image: StaticImageData;
};

const NEWS_ITEMS: NewsItem[] = [
  {
    title: "Losing Forward in the Fight to End Factory Farming",
    href: "/losing-forward-in-the-fight-to-end-factory-farming",
    source: "Coalition to End Factory Farming",
    date: "December 3, 2024",
    image: img01,
  },
  {
    title: "This California ballot measure could change the way America feeds itself",
    href: "https://www.salon.com/2024/11/02/this-california-ballot-measure-could-change-the-way-america-farms/",
    source: "Salon",
    date: "November 2nd, 2024",
    image: img02,
  },
  {
    title: "Proposed Factory Farm Ban Divides California County",
    href: "https://www.thenewlede.org/2024/11/proposed-factory-farm-ban-divides-california-county/",
    source: "The New Lede",
    date: "November 1st, 2024",
    image: img03,
  },
  {
    title: "Sonoma’s Contentious Measure J Aims to Disrupt Meat Production",
    href: "https://www.kqed.org/forum/2010101907561/sonomas-contentious-measure-j-aims-to-disrupt-meat-production",
    source: "KQED",
    date: "October 22nd, 2024",
    image: img04,
  },
  {
    title: "Sonoma County's Measure J Could Reshape Farming",
    href: "https://www.kqed.org/news/12010140/sonoma-measure-j-thebay",
    source: "KQED",
    date: "October 21st, 2024",
    image: img05,
  },
  {
    title: "Close to Home: Factory farms have no place in Sonoma County",
    href: "https://www.pressdemocrat.com/article/opinion/sonoma-county-election-measure-farming-dairy-eggs/",
    source: "The Press Democrat",
    date: "October 20th, 2024",
    image: img06,
  },
  {
    title: "Measure J debate in Sonoma County comes down to a central question: What constitutes animal cruelty?",
    href: "https://www.pressdemocrat.com/article/news/measure-j-animal-cruelty-factory-farming/",
    source: "The Press Democrat",
    date: "October 18th, 2024",
    image: img07,
  },
  {
    title: "Measure J Economic Impact Guide",
    href: "/economic-guide",
    source: "Coalition to End Factory Farming",
    date: "October 11th, 2024",
    image: img08,
  },
  {
    title: "Sonoma County Voters to Decide on Measure J — Future of Large-Scale Farms",
    href: "https://www.ktvu.com/news/sonoma-county-voters-decide-future-large-scale-farms",
    source: "KTVU",
    date: "October 8th, 2024",
    image: img09,
  },
  {
    title: "Voters in Northern California County to Vote on Whether to Allow Large-Scale Farms",
    href: "https://apnews.com/article/california-sonoma-county-farm-ballot-measure-eggs-e8bd1af491da5e60c9db7a614ada8ac3",
    source: "Associated Press",
    date: "September 30th, 2024",
    image: img10,
  },
  {
    title: "The Sonoma Ballot Measure That Could Change the Farm Industry",
    href: "https://www.kqed.org/news/12006460/the-sonoma-ballot-measure-that-could-change-the-farm-industry",
    source: "KQED",
    date: "September 26th, 2024",
    image: img11,
  },
  {
    title: "Here’s What Happened at the Measure J Debate",
    href: "/debate",
    source: "Coalition to End Factory Farming",
    date: "September 25th, 2024",
    image: img12,
  },
  {
    title: "Measure J Sparks Controversy in Sonoma County",
    href: "https://sonomastatestar.com/37241/opinion/measure-j-sparks-controversy-in-sonoma-county/",
    source: "Sonoma State Star",
    date: "September 23rd, 2024",
    image: img13,
  },
  {
    title: "Community Support for Measure J",
    href: "/community-support-for-measure-j-1",
    source: "Coalition to End Factory Farming",
    date: "September 9th, 2024",
    image: img14,
  },
  {
    title: "Health workers supporting Measure J link factory farms with pandemic illnesses",
    href: "https://norcalpublicmedia.org/2024090596220/news-feed/health-workers-supporting-measure-j-link-factory-farms-with-pandemic-illnesses",
    source: "Northern California Public Media",
    date: "September 4th, 2024",
    image: img15,
  },
  {
    title: "Measure J supporters march in Petaluma as fight over ballot measure heats up",
    href: "https://www.pressdemocrat.com/article/news/measure-j-sonoma-county/",
    source: "The Press Democrat",
    date: "August 25th, 2024",
    image: img16,
  },
  {
    title: "Banning concentrated feedlots is on the ballot in Sonoma",
    href: "https://www.hcn.org/articles/banning-industrial-feedlots-is-on-the-ballot-in-sonoma/",
    source: "High Country News",
    date: "August 6th, 2024",
    image: img17,
  },
  {
    title: "Sonoma County ballot measure would ban large livestock farms",
    href: "https://publicnewsservice.org/2024-08-05/animal-welfare/sonoma-county-ballot-measure-would-ban-large-livestock-farms/a91627-1",
    source: "Public News Service",
    date: "August 5th, 2024",
    image: img18,
  },
  {
    title: "Measure J in California’s Sonoma County paves the way for environmental health",
    href: "https://www.commondreams.org/opinion/measure-j-animal-rights",
    source: "Common Dreams",
    date: "July 13th, 2024",
    image: img19,
  },
  {
    title: "Animal rights comes to ‘America’s Provence’ and farmers are worried",
    href: "https://www.politico.com/news/2024/06/09/animal-rights-california-sonoma-farms-00162034",
    source: "Politico",
    date: "June 9th, 2024",
    image: img20,
  },
  {
    title: "Anti-pollution Measure J sees backlash from Sonoma farmers",
    href: "https://www.cbsnews.com/sanfrancisco/news/anti-pollution-measure-j-sees-backlash-from-sonoma-farmers/",
    source: "CBS News Bay Area",
    date: "May 23rd, 2024",
    image: img21,
  },
  {
    title: "Sonoma County supervisors send factory farm measure to ballot, reluctantly",
    href: "https://www.pressdemocrat.com/article/news/factory-farm-ballot-november/",
    source: "The Press Democrat",
    date: "May 14th, 2024",
    image: img22,
  },
  {
    title: "Number of Sonoma County farms affected by proposed ‘factory farming’ ordinance is in dispute",
    href: "https://www.pressdemocrat.com/article/news/chicken-farms-dairy-factory-animal-activists-farmers/",
    source: "The Press Democrat",
    date: "May 13th, 2024",
    image: img23,
  },
  {
    title: "Groups seek to ban large-scale animal farming in Sonoma County",
    href: "https://www.latimes.com/environment/story/2024-04-04/groups-seek-to-ban-large-scale-animal-farming-in-sonoma-county",
    source: "Los Angeles Times",
    date: "April 4th, 2024",
    image: img24,
  },
  {
    title: "Controversial ballot measure aims to downsize animal farms",
    href: "https://norcalpublicmedia.org/2024040395033/news-feed/controversial-ballot-measure-aims-to-downsize-animal-farms",
    source: "Northern California Public Media",
    date: "April 2nd, 2024",
    image: img25,
  },
  {
    title: "Sonoma County faces heated debate over farm size limitation initiative",
    href: "https://www.sonomacountygazette.com/sonoma-county-news/sonoma-county-faces-heated-debate-over-farm-size-limitation-initiative/",
    source: "Sonoma Gazette",
    date: "April 1st, 2024",
    image: img26,
  },
  {
    title: "Measure seeking to limit size of Sonoma County livestock and poultry farms qualifies for ballot",
    href: "https://www.pressdemocrat.com/article/news/measure-seeking-to-limit-size-of-sonoma-county-livestock-and-poultry-farms/",
    source: "The Press Democrat",
    date: "March 27th, 2024",
    image: img27,
  },
];

export default function NewsPage() {
  return (
    <>
      <PageHero title="News" />

      <Section>
        <p>
          <strong>Media inquiry? Please email </strong>
          <a
            href="mailto:press@endfactoryfarming.vote"
            target="_blank"
            rel="noopener"
            className="underline"
          >
            <strong>press@endfactoryfarming.vote</strong>
          </a>
        </p>

        <div className="mt-10 divide-y divide-ceff-ink/20">
          {NEWS_ITEMS.map((item) => {
            const external = item.href.startsWith("http");
            return (
              <div
                key={item.href + item.title}
                className="flex flex-col gap-5 py-6 first:pt-0 sm:flex-row"
              >
                {external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener"
                    className="shrink-0 sm:w-40"
                  >
                    <Image
                      src={item.image}
                      alt=""
                      className="aspect-3/2 w-full object-cover"
                    />
                  </a>
                ) : (
                  <Link href={item.href} className="shrink-0 sm:w-40">
                    <Image
                      src={item.image}
                      alt=""
                      className="aspect-3/2 w-full object-cover"
                    />
                  </Link>
                )}
                <div>
                  {external ? (
                    <a href={item.href} target="_blank" rel="noopener">
                      <strong>{item.title}</strong>
                    </a>
                  ) : (
                    <Link href={item.href}>
                      <strong>{item.title}</strong>
                    </Link>
                  )}
                  <p className="sqsrte-small mt-1 text-[0.85rem] italic">
                    {item.source}
                    <br />
                    {item.date}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </>
  );
}
