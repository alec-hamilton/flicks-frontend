import PageContentWrapper from "@/components/surfaces/PageContentWrapper";
import { globalConstants } from "@/constants/globalConstants";

const { aboutUs } = globalConstants;

const AboutUs = () => {
  return (
    <PageContentWrapper>
      <h1>About us</h1>
      <section className="flex flex-col gap-6 mt-6">
        <p>{aboutUs.para1}</p>
        <p>{aboutUs.para2}</p>
        <p>{aboutUs.para3}</p>
        <p>{aboutUs.para4}</p>
        <p>{aboutUs.para5}</p>
      </section>
    </PageContentWrapper>
  );
};

export default AboutUs;
