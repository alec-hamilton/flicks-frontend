import { Metadata } from "next";
import Image from "next/image";
import PageContentWrapper from "@/components/surfaces/PageContentWrapper";
import PageContentHeader from "@/components/surfaces/PageContentHeader";
import shopFront from "@/assets/images/bladerunner-style-movie-store.png";
import Link from "next/link";
import StandardButton from "@/components/buttons/StandardButton";
import ExternalLink from "@/components/links/ExternalLink";
import { globalConstants } from "@/constants/globalConstants";

const {
  theShop: {
    metaTitle,
    metaDescription,
    pageTitle,
    headerText,
    buttonOneText,
    buttonTwoText,
    sectionOne,
    sectionTwo,
    sectionThree,
  },
} = globalConstants;

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
};

const TheShop = () => {
  const image = (
    <Image
      src={shopFront}
      alt="Movie rental store shop front in the style of bladerunner"
      className="border border-primary sm:w-4/12 self-start"
      priority
    />
  );

  return (
    <PageContentWrapper>
      <PageContentHeader title={pageTitle} text={headerText} image={image}>
        <Link href="/browse">
          <StandardButton>{buttonOneText}</StandardButton>
        </Link>
        <ExternalLink href="https://appvrstudio.com/viewer/20thcenturyflicks">
          <StandardButton>{buttonTwoText}</StandardButton>
        </ExternalLink>
      </PageContentHeader>
      <div className="flex flex-col gap-4 my-4 md:my-6 sm:flex-row sm:gap-6">
        <section className="p-4 md:p-6 border border-primary bg-black2 sm:w-6/12">
          <h2 className="pb-4">{sectionOne.title}</h2>
          <address className="not-italic">
            <p>{sectionOne.content.line1}</p>
            <p>{sectionOne.content.line2}</p>
            <p>{sectionOne.content.line3}</p>
            <p>{sectionOne.content.line4}</p>
          </address>
        </section>
        <section className="p-4 md:p-6 border border-primary bg-black2 sm:w-6/12">
          <h2 className="pb-4">{sectionTwo.title}</h2>
          <p>{sectionTwo.content}</p>
        </section>
      </div>
      <section className="p-4 md:p-6 border border-primary bg-black2">
        <h2 className="pb-4">{sectionThree.title}</h2>
        <p>{sectionThree.content}</p>
      </section>
    </PageContentWrapper>
  );
};

export default TheShop;
