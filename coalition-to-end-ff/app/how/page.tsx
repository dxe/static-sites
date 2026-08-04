import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "How to Vote",
};

export default function Page() {
  return (
    <>
      <PageHero title="How and Where to Vote in Sonoma County" />

      <Section>
        <div className="space-y-5">
          <h3>Voter Registration Lookup</h3>
          <p>
            <strong>Are you registered to vote?</strong> Find out:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <a
                href="https://voterstatus.sos.ca.gov/"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                Check Your Voter Status
              </a>
            </li>
          </ul>
          <p>
            <strong>
              If you are <em>not</em> registered to vote:
            </strong>
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <a
                href="https://covr.sos.ca.gov/"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                Register to Vote Online
              </a>
            </li>
            <li>
              Paper Voter Registration Applications are available at{" "}
              <a
                href="https://sonomalibrary.org/visit/locations"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                Sonoma County Library branches
              </a>
              .
            </li>
            <li>
              <a
                href="https://sonomacounty.ca.gov/administrative-support-and-fiscal-services/clerk-recorder-assessor-registrar-of-voters/registrar-of-voters/accessible-voting#large_print_and_audio_cd_versions_of_voter_guides"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                <strong>Accessible Voting</strong>
              </a>
            </li>
          </ul>

          <h3>How &amp; Where to Vote</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              All registered voters in Sonoma County receive a ballot in the
              mail. If you haven’t received yours, you can track it{" "}
              <a
                href="https://california.ballottrax.net/voter/"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                here
              </a>
              . You can turn in your completed ballot by{" "}
              <a
                href="https://sonomacounty.ca.gov/CRA/Registrar-of-Voters/Vote-by-Mail/#voting_VBM"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                dropping it in the mail
              </a>{" "}
              or bringing it to a ballot drop box location.
            </li>
            <li>
              <a
                href="https://sonomacounty.ca.gov/administrative-support-and-fiscal-services/clerk-recorder-assessor-registrar-of-voters/registrar-of-voters/elections/where-to-vote-or-drop-off-your-ballot"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                See the list of Ballot Drop Box Locations here.
              </a>
            </li>
            <li>
              You can also see these locations on an interactive map here:{" "}
              <a
                href="https://sonomacounty.maps.arcgis.com/apps/webappviewer/index.html?id=20319983129d4b5fb1b5f2922044db95"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                Map of Vote Center &amp; Ballot Drop Box Locations
              </a>
              .
            </li>
          </ul>
        </div>
      </Section>
    </>
  );
}
