import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageContentWrapper from "@/components/surfaces/PageContentWrapper";
import PageContentHeader from "@/components/surfaces/PageContentHeader";
import shopFront from "@/assets/images/bladerunner-style-movie-store.png";
import StandardButton from "@/components/buttons/StandardButton";
import ExternalLink from "@/components/links/ExternalLink";
import { globalConstants } from "@/constants/globalConstants";

const {
  rentLocally: {
    metaTitle,
    metaDescription,
    pageTitle,
    headerText,
    buttonOneText,
    buttonTwoText,
    sectionOne,
    sectionTwo,
  },
} = globalConstants;

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
};

const RentLocally = () => {
  const image = (
    <Image
      src={shopFront}
      alt="Movie rental store shop front in the style of bladerunner"
      className="border border-foreground sm:w-4/12 self-start"
      priority
    />
  );

  return (
    <PageContentWrapper>
      <PageContentHeader title={pageTitle} text={headerText} image={image}>
        <ExternalLink href="https://paypal.me/20thcenturyflicks">
          <StandardButton>{buttonOneText}</StandardButton>
        </ExternalLink>
        <Link href="/contact">
          <StandardButton>{buttonTwoText}</StandardButton>
        </Link>
      </PageContentHeader>
      <div className="flex flex-col gap-4 mt-4 md:mt-6 sm:flex-row sm:gap-6">
        <section className="p-4 md:p-6 border border-foreground bg-layer2 sm:w-6/12">
          <h2 className="pb-4">{sectionOne.title}</h2>
          <p>{sectionOne.content}</p>
        </section>
        <section className="p-4 md:p-6 border border-foreground bg-layer2 sm:w-6/12">
          <h2 className="pb-4">{sectionTwo.title}</h2>
          <p>{sectionTwo.content}</p>
        </section>
      </div>
    </PageContentWrapper>
  );
};

export default RentLocally;
