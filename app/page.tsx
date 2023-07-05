import { Metadata } from "next";
import betty from "@/assets/images/betty-blue.jpg";
import PageContentWrapper from "@/components/surfaces/PageContentWrapper";
import ExternalLink from "@/components/links/ExternalLink";
import StandardButton from "@/components/buttons/StandardButton";
import PageContentHeader from "@/components/surfaces/PageContentHeader";
import NewToRent from "@/components/tables/NewToRent";
import { globalConstants } from "@/constants/globalConstants";
import Image from "next/image";

const {
  homePage: { pageTitle, headerText },
} = globalConstants;

export const metadata: Metadata = {
  title: "My Page Title",
};

export default function Page() {
  return (
    <PageContentWrapper>
      <PageContentHeader
        title={pageTitle}
        text={headerText}
        imageSrc={betty}
        imageAlt="Movie poster image of betty from betty blue"
      >
        <ExternalLink href="https://cal.smoothbook.co/20thcflicks">
          <StandardButton>Book a cinema</StandardButton>
        </ExternalLink>
      </PageContentHeader>
      <NewToRent />
      <section className="p-4 md:p-6 my-4 md:my-6 border border-primary bg-black2">
        <h2 className="pb-4 md:pb-6">Staff favorites</h2>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Image
            src="https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
            alt="blade runner movie poster"
            width={355}
            height={320}
            className="border border-primary"
          />
          <div className="flex flex-col gap-2">
            <h3>Blade runner</h3>
            <p>
              A blade runner must pursue and terminate four replicants who stole
              a ship in space and have returned to Earth to find their creator.
            </p>
          </div>
        </div>
      </section>
    </PageContentWrapper>
  );
}
