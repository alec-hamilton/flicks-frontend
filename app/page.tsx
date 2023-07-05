import { Metadata } from "next";
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
      <StaffFavorites />
      <OurCinemas />
    </PageContentWrapper>
  );
}
