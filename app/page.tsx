import { Metadata } from "next";
import Image from "next/image";
import betty from "@/assets/images/betty-blue.jpg";
import ExternalLink from "@/components/links/ExternalLink";
import StandardButton from "@/components/buttons/StandardButton";
import PageContentHeader from "@/components/surfaces/PageContentHeader";
import NewToRent from "@/app/components/home/NewToRent";
import OurCinemas from "@/app/components/home/OurCinemas";
import FeaturedFilms from "./components/home/FeaturedFilms";
import { globalConstants } from "@/constants/globalConstants";
import Link from "next/link";

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
    <>
      <PageContentHeader title={pageTitle} text={headerText} image={image}>
        <ExternalLink href="https://cal.smoothbook.co/20thcflicks">
          <StandardButton>Book a cinema</StandardButton>
        </ExternalLink>
        <Link href="/browse">
          <StandardButton>Browse our movies</StandardButton>
        </Link>
      </PageContentHeader>
      <FeaturedFilms />
      <NewToRent />
      <OurCinemas />
    </>
  );
}
