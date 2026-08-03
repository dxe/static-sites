import { LinkButton } from "@/components/link-button";
import { SocialIcons } from "@/components/social-icons";

export function Footer() {
  return (
    <footer>
      <div className="bg-ceff-blue px-6 py-16 text-center">
        <p>Questions or comments? Please reach out!</p>
        <p className="mt-5">
          Email:{" "}
          <a href="mailto:info@endfactoryfarming.vote" className="underline">
            info@endfactoryfarming.vote
          </a>
        </p>
        <div className="mt-8">
          <LinkButton href="/newsletter" variant="outline">
            Subscribe
          </LinkButton>
        </div>
      </div>
      <div className="bg-white px-6 py-6">
        <SocialIcons />
        <p className="mt-5 text-center text-[0.8rem]">
          Paid for by Coalition to End Factory Farming, Yes on Measure J,
          Sponsored by animal rights and environmental justice organizations
        </p>
      </div>
    </footer>
  );
}
