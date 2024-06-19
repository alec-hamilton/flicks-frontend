import { Metadata } from "next";
import Image from "next/image";
import betty from "@/assets/images/betty-blue.jpg";
import PageContentWrapper from "@/components/surfaces/PageContentWrapper";
import ExternalLink from "@/components/links/ExternalLink";
import StandardButton from "@/components/buttons/StandardButton";
import PageContentHeader from "@/components/surfaces/PageContentHeader";
import NewToRent from "@/app/components/NewToRent";
import StaffFavorites from "@/app/components/StaffFavorites";
import OurCinemas from "@/app/components/OurCinemas";
import { globalConstants } from "@/constants/globalConstants";

const {
  homePage: { metaTitle, metaDescription, pageTitle, headerText },
} = globalConstants;

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
};

export default function Home() {
  const image = (
    <Image
      src={betty}
      alt="Movie poster image of betty from betty blue"
      className="border border-foreground sm:w-4/12 self-start"
      priority
    />
  );

  return (
    <PageContentWrapper>
      <PageContentHeader title={pageTitle} text={headerText} image={image}>
        <ExternalLink href="https://cal.smoothbook.co/20thcflicks">
          <StandardButton>Book a cinema</StandardButton>
        </ExternalLink>
      </PageContentHeader>
      <NewToRent />
      <StaffFavorites />
      <OurCinemas />
    </PageContentWrapper>
  );
}
