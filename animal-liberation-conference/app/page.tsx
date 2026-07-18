import Image from "next/image";
import { YouTube } from "@/components/youtube";
import banner from "@/public/images/alc-banner.jpg";

const h1Classes =
  "font-heading text-[72px] font-bold leading-[1.19] text-alc-orange";
const h2Classes =
  "font-heading text-[46.8px] font-bold leading-[1.19] text-alc-orange";
const linkClasses = "text-alc-link underline";

export default function Home() {
  return (
    <div className="bg-alc-mist">
      <div className="mx-auto w-full max-w-[1180px] px-5 py-10 sm:px-9 xl:px-[50px]">
        <div className="py-[17px] text-center">
          <h1 className={h1Classes}>Animal Liberation Conference 2025</h1>
          <h2 className={`${h2Classes} mt-12`}>
            Santa Rosa, CA <br />
            May 23-27, 2025
          </h2>
        </div>

        <div className="py-[17px]">
          <Image
            src={banner}
            alt="Animal Liberation Conference banner"
            className="h-auto w-full"
            priority
            sizes="(max-width: 1180px) 100vw, 1080px"
          />
        </div>

        <div className="py-[17px]">
          <p>
            <strong>
              The Animal Liberation Conference (ALC) is the largest grassroots
              animal rights conference in the world.
            </strong>{" "}
            ALC brings together hundreds of animal advocates for trainings,
            guest speakers, and activism in the streets! ALC 2025 will take
            place from May 23-27 in Santa Rosa, California, about an hour drive
            north of San Francisco.
          </p>
        </div>

        <div className="py-[17px] text-center">
          <a
            href="https://dxe.io/register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-alc-orange px-[34px] py-[21px] font-round text-[16.5px] leading-snug font-semibold text-[#212121] shadow-[0_2px_0_0_var(--color-alc-orange-shade)] transition-opacity hover:opacity-90"
          >
            Register Now!
          </a>
        </div>

        <div className="py-[17px]">
          <h1 className={h1Classes}>Past Conferences</h1>
          <p>
            Learn more about previous ALCs and previous trial convergences DxE
            has organized below.
          </p>
        </div>

        <div className="py-[17px] text-center">
          <h2 className={h2Classes}>Ridglan Beagle Rescue Trial</h2>
          <h2 className={`${h2Classes} mt-[15px]`}>Madison, WI</h2>
        </div>

        <div className="py-[17px] md:float-left md:w-1/2 md:pr-[17px]">
          <YouTube id="wQd9sMhDzcY" title="Inside A Secret Lab" aspect="75%" />
        </div>

        <div className="py-[17px]">
          <p>
            All charges in the <strong>Ridglan Beagle Rescue Trial</strong>{" "}
            were dropped just before the trial, but activists across the
            country still united in Madison, Wisconsin to protest
            Ridglan&rsquo;s cruelty. Ridglan Farms is one of the largest
            breeders of beagles for experimentation in the United States. In
            2017, DxE investigators entered the facility and documented the
            filthy conditions and the psychological trauma of the dogs spinning
            endlessly inside small cages. The team rescued three beagles,
            Julie, Anna, and Lucy.
          </p>
        </div>

        <div className="py-[17px] md:float-right md:w-1/2 md:pl-[17px]">
          <YouTube
            id="wDznWDtPVOo"
            start={81}
            title="Incredible week of action to highlight cruelty to dogs. #righttorescue #doglovers"
          />
        </div>

        <div className="space-y-[1em] py-[17px]">
          <p>
            Three activists, Eva, Paul, and Wayne, were charged with felony
            burglary and felony theft charges. Their trial was set to start
            March 18, 2024 in Madison, Wisconsin. Just ten days before trial,
            the state dropped all the charges at the request of Ridglan Farms,
            which didn&rsquo;t want the world to hear about its crimes. But we
            kept the pressure on, and now, Ridglan is the one facing
            prosecution! In January 2025, a Wisconsin judge agreed to appoint a
            special prosecutor to investigate and prosecute Ridglan for
            criminal animal cruelty. You can read more in the press{" "}
            <a
              href="https://isthmus.com/news/news/let-special-prosecutor-decide-if-ridglan-committed-crimes/"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClasses}
            >
              here.
            </a>
          </p>
          <p>
            <strong>WHERE:</strong> Madison, Wisconsin
            <br />
            <strong>WHEN:</strong> March 16th - 24th, 2024
          </p>
          <h2 className={`${h2Classes} text-center`}>
            Animal Liberation Conference 2023
          </h2>
          <h2 className={`${h2Classes} text-center`}>Berkeley, CA</h2>
          <p>
            Hundreds of us came together to connect, train, and take action.
            Together, we rescued 23 suffering animals during ALC 2023! Check
            out this inspiring video recap produced by Cavelight Films:
          </p>
        </div>

        <div className="clear-both py-[17px]">
          <YouTube
            id="ihGhqaSdwAE"
            title="The Right to Rescue - A Short Documentary by Cavelight Films"
          />
        </div>

        <div className="py-[17px] text-center">
          <h2 className={h2Classes}>Foster Farms Trial</h2>
          <h2 className={`${h2Classes} mt-[15px]`}>Merced, CA</h2>
        </div>

        <div className="py-[17px] md:float-left md:w-[41.66%] md:pr-[17px]">
          <YouTube id="LxnIwWmFd1E" title="Rescuing Animals from Foster Farms" />
        </div>

        <div className="space-y-[1em] py-[17px]">
          <p>
            The <strong>Foster Farms Trial</strong> ended with a{" "}
            <a
              href="https://www.vox.com/future-perfect/23647682/factory-farming-dxe-criminal-trial-rescue"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClasses}
            >
              &ldquo;not guilty&rdquo; verdict
            </a>{" "}
            on March 17! This is a historic victory for the Right to Rescue.
            Please share this news on{" "}
            <a
              href="https://www.instagram.com/p/Cp55h4tytyW/?igshid=YmMyMTA2M2Y%3D"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClasses}
            >
              Instagram,
            </a>{" "}
            <a
              href="https://www.facebook.com/directactioneverywhere/posts/pfbid02nSU2dn2ez62gAUVMqzrvnGYQt5NbQL1gwtkP9rKvP66U7txLF1QsrPBXgWQmTAy2l"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClasses}
            >
              Facebook,
            </a>{" "}
            and{" "}
            <a
              href="https://twitter.com/FosterFarmTrial/status/1636837110627078144"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClasses}
            >
              Twitter.
            </a>{" "}
            Alexandra Paul and Alicia Santurio were facing theft charges for
            rescuing two sick birds, Jax and Ethan, from a stopped slaughter
            truck that was heading into the Foster Farms slaughterhouse in
            Livingston, CA. The same day, DxE released{" "}
            <a
              href="https://www.youtube.com/watch?v=qWdJst8f7Sk"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClasses}
            >
              hidden camera footage
            </a>{" "}
            filmed inside the slaughterhouse showing chickens routinely missing
            the stun bath and a device designed to cut their necks, leaving it
            to workers to identify conscious birds before their evisceration,
            at a speed of 140 birds per minute. Alexandra and Alicia received
            theft charges in the mail in spring 2022 and pleaded not guilty.
            The #FosterFarmsTrial began on March 7, 2023, a full jury was
            selected on March 10, and the trial concluded March 17 after six
            hours of jury deliberation.
          </p>
          <p>
            <strong>WHERE:</strong> Merced, California
            <br />
            <strong>WHEN:</strong> March 7th - 17th, 2023
          </p>
          <h2 className={`${h2Classes} text-center`}>Smithfield Trial</h2>
          <h2 className={`${h2Classes} text-center`}>St. George, UT</h2>
        </div>

        <div className="py-[17px] md:float-left md:w-1/2 md:pr-[17px]">
          <YouTube
            id="wlSE1X-hSqQ"
            title="Smithfield Trial convergence in St. George, Utah"
            aspect="56.2%"
          />
        </div>

        <div className="space-y-[1em] py-[17px]">
          <p>
            In the <strong>Smithfield Trial</strong> DxE investigators Wayne
            Hsiung and Paul Darwin Picklesimer were being prosecuted for
            investigating the world&rsquo;s largest &ldquo;pork&rdquo;
            producer, Smithfield Foods, and rescuing 2 sick piglets, Lily and
            Lizzie. They published the whole investigation and rescue online
            and in the{" "}
            <a
              href="https://www.nytimes.com/2017/07/06/dining/animal-welfare-virtual-reality-video-meat-industry.html"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClasses}
            >
              New York Times
            </a>{" "}
            to show the world the nightmarish cruelty happening inside
            Smithfield&rsquo;s farms.
          </p>
          <p>
            Trial began October 3, 2022 in Washington County, Utah. Over 100
            supporters attended the trial convergence. On Saturday, October 8,
            after a full day of deliberations, the jury of 8 people unanimously
            found Wayne and Paul{" "}
            <a
              href="https://www.nytimes.com/2022/10/08/science/animals-rights-piglets-smithfield.html"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClasses}
            >
              NOT GUILTY
            </a>{" "}
            on all charges for rescuing Lily and Lizzie from Smithfield. This
            is a major victory for the Right to Rescue!
          </p>
          <p>
            <strong>WHERE:</strong> Washington County, Utah
            <br />
            <strong>WHEN:</strong> October 3rd - 8th, 2022
          </p>
          <h2 className={`${h2Classes} text-center`}>Iowa Convergence</h2>
          <h2 className={`${h2Classes} text-center`}>Wright County, IA</h2>
        </div>

        <div className="clear-both gap-[34px] py-[17px] md:grid md:grid-cols-2">
          <div>
            <YouTube
              id="0Hf1YwIzN-k"
              title="Iowa Convergence recap"
              aspect="75%"
            />
          </div>
          <div className="space-y-[1em] max-md:mt-[34px]">
            <p>
              In 2020, DxE exposed Iowa&rsquo;s largest &ldquo;pork&rdquo;
              producer, Iowa Select Farms, using a gruesome mass kill method
              called &ldquo;ventilation shutdown.&rdquo; With the help of an
              employee whistleblower, DxE investigators captured video of this
              horrific process and rescued a piglet named Gilly. Matt Johnson
              and Linda Cridge were being prosecuted for this investigation and
              rescue. Matt was also the first person to be charged under
              Iowa&rsquo;s third ag-gag law.
            </p>
            <p>
              In a surprising turn of events, all of Matt&rsquo;s{" "}
              <a
                href="https://www.theguardian.com/world/2022/jan/22/an-animal-rights-activist-was-in-court-on-criminal-charges-why-was-the-case-suddenly-dismissed"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClasses}
              >
                charges were dropped
              </a>{" "}
              the day before trial. But we decided to go to Iowa anyway and
              spent the entire week protesting and putting pressure on the
              government and industry to end ag gag and support the right to
              rescue.
            </p>
            <p>
              <strong>WHERE:</strong> Wright County, Iowa
              <br />
              <strong>WHEN:</strong> January 19th - 28th, 2022
            </p>
          </div>
        </div>

        <div className="space-y-[1em] py-[17px]">
          <h2 className={`${h2Classes} text-center`}>
            Animal Liberation Conference 2021
          </h2>
          <h2 className={`${h2Classes} text-center`}>Oakland, CA</h2>
          <p>
            ALC 2021 brought together hundreds of dedicated activists to take
            action in California&rsquo;s Bay Area and the Central Valley.
            Activists connected, trained, and pulled off bold actions,
            including locking down outside Governor Newsom&rsquo;s house in
            Sacramento and at the largest slaughterhouse in the state, as well
            as directly rescuing animals from slaughter.
          </p>
        </div>

        <div className="py-[17px]">
          <div className="md:mx-auto md:w-2/3">
            <YouTube
              id="EPKF_GF5A-w"
              title="Animal Liberation Conference 2021 recap"
              aspect="75%"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
