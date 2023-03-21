import HorizontalDivider from "@/components/dividers/HorizontalDivider";
import PageContentWrapper from "@/components/surfaces/PageContentWrapper";

const Contact = () => {
  return (
    <PageContentWrapper>
      <h1>Contact us</h1>
      <div className="flex flex-col gap-4 text-sm sm:text-base mt-6">
        <div className="flex justify-between">
          <p>email</p>
          <a
            href="mailto:info@20thcenturyflicks.co.uk"
            className="mdx:hover:text-fuchsia-400 underline"
          >
            info@20thcenturyflicks.co.uk
          </a>
        </div>
        <HorizontalDivider />
        <div className="flex justify-between">
          <p>phone</p>
          <a
            href="tel:+4401179258432"
            className="mdx:hover:text-fuchsia-400 underline"
          >
            0117 925 8432
          </a>
        </div>
        <HorizontalDivider />
        <div className="flex justify-between">
          <p>address</p>
          <address className="not-italic text-end">
            <p>20th Century Flicks Ltd</p>
            <p>19 Christmas Steps</p>
            <p>Bristol</p>
            <p>BS1 5BS</p>
          </address>
        </div>
        <HorizontalDivider />
        <div className="flex justify-between">
          <p>what3words</p>
          <a
            href="https://w3w.co/mops.window.modern"
            className="mdx:hover:text-fuchsia-400 underline"
          >
            mops.window.modern
          </a>
        </div>
      </div>
    </PageContentWrapper>
  );
};

export default Contact;
