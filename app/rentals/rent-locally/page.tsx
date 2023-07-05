import PageContentWrapper from "@/components/surfaces/PageContentWrapper";
import PageContentHeader from "@/components/surfaces/PageContentHeader";
import shopFront from "@/assets/images/bladerunner-style-movie-store.png";
import StandardButton from "@/components/buttons/StandardButton";
import ExternalLink from "@/components/links/ExternalLink";
import Link from "next/link";
import { globalConstants } from "@/constants/globalConstants";

const {
  rentLocally: {
    pageTitle,
    headerText,
    buttonOneText,
    buttonTwoText,
    sectionOne,
    sectionTwo,
  },
} = globalConstants;

const RentLocally = () => {
  return (
    <PageContentWrapper>
      <PageContentHeader
        title={pageTitle}
        text={headerText}
        imageSrc={shopFront}
        imageAlt="Movie rental store shop front in the style of bladerunner"
      >
        <ExternalLink href="https://paypal.me/20thcenturyflicks">
          <StandardButton>{buttonOneText}</StandardButton>
        </ExternalLink>
        <Link href="/contact">
          <StandardButton>{buttonTwoText}</StandardButton>
        </Link>
      </PageContentHeader>
      <div className="flex flex-col gap-4 mt-4 md:mt-6 sm:flex-row sm:gap-6">
        <section className="p-4 md:p-6 border border-primary bg-black2 sm:w-6/12">
          <h2 className="pb-4">{sectionOne.title}</h2>
          <p>{sectionOne.content}</p>
        </section>
        <section className="p-4 md:p-6 border border-primary bg-black2 sm:w-6/12">
          <h2 className="pb-4">{sectionTwo.title}</h2>
          <p>{sectionTwo.content}</p>
        </section>
      </div>
    </PageContentWrapper>
  );
};

export default RentLocally;
