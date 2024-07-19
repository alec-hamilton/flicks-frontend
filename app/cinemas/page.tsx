import { Metadata } from "next";
import Image from "next/image";
import StandardButton from "@/components/buttons/StandardButton";
import ExternalLink from "@/components/links/ExternalLink";
import twinPeaksCinema from "@/assets/images/twin-peaks-style-cinema.png";
import videodromeCinema from "@/assets/images/bladerunner-style-cinema.png";
import shopFront from "@/assets/images/bladerunner-style-movie-store.png";
import PageContentHeader from "@/components/surfaces/PageContentHeader";
import { globalConstants } from "@/constants/globalConstants";

const {
  cinemas: {
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

const Cinemas = () => {
  const image = (
    <Image
      src={shopFront}
      alt="Movie rental store shop front in the style of bladerunner"
      className="border border-foreground sm:w-4/12 self-start"
      priority
    />
  );

  return (
    <>
      <PageContentHeader title={pageTitle} text={headerText} image={image}>
        <ExternalLink href="https://cal.smoothbook.co/20thcflicks">
          <StandardButton>{buttonOneText}</StandardButton>
        </ExternalLink>
        <ExternalLink href="https://appvrstudio.com/viewer/20thcenturyflicks">
          <StandardButton>{buttonTwoText}</StandardButton>
        </ExternalLink>
      </PageContentHeader>
      <section className="p-4 md:p-6 my-4 md:my-6 border border-foreground bg-layer2">
        <h2>{sectionOne.title}</h2>
        <div className="flex flex-col sm:flex-row sm:gap-6">
          <div>
            <p className="py-4 ">{sectionOne.content}</p>
            <div className="mb-4">
              <ExternalLink href="https://cal.smoothbook.co/20thcflicks">
                <StandardButton>{sectionOne.button}</StandardButton>
              </ExternalLink>
            </div>
          </div>
          <Image
            src={twinPeaksCinema}
            alt="Cinema auditorium in the style of twin peaks"
            className="border border-foreground sm:w-5/12 sm:mt-4"
          />
        </div>
      </section>
      <section className="p-4 md:p-6 border border-foreground bg-layer2">
        <h2>{sectionTwo.title}</h2>
        <div className="flex flex-col sm:flex-row sm:gap-6">
          <div>
            <p className="py-4">{sectionTwo.content}</p>
            <div className="mb-4">
              <ExternalLink href="https://cal.smoothbook.co/20thcflicks">
                <StandardButton>{sectionTwo.button}</StandardButton>
              </ExternalLink>
            </div>
          </div>
          <Image
            src={videodromeCinema}
            alt="Cinema auditorium in the style of twin peaks"
            className="border border-foreground sm:w-5/12 sm:mt-4"
          />
        </div>
      </section>
    </>
  );
};

export default Cinemas;
