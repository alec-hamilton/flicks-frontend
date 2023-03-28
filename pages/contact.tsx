import HorizontalDivider from "@/components/dividers/HorizontalDivider";
import PageContentWrapper from "@/components/surfaces/PageContentWrapper";
import { layoutConstants } from "@/components/Layout/Navbar/layoutConstants";

const { contactLinks } = layoutConstants;

const Contact = () => {
  return (
    <PageContentWrapper>
      <h1>Contact us</h1>
      <div className="flex flex-col gap-4 text-sm sm:text-base mt-6">
        {contactLinks.links.map(({ name, title, url }, index) => {
          return name === "address" ? (
            <>
              <div className="flex justify-between" key={index}>
                <p>{name}</p>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="mdx:hover:text-fuchsia-400 underline"
                >
                  <address className="not-italic whitespace-pre-wrap text-end">
                    {title}
                  </address>
                </a>
              </div>
              <HorizontalDivider />
            </>
          ) : (
            <>
              <div className="flex justify-between" key={index}>
                <p>{name}</p>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="mdx:hover:text-fuchsia-400 underline"
                >
                  {title}
                </a>
              </div>
              <HorizontalDivider />
            </>
          );
        })}
        {/* <div className="flex justify-between">
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
        </div> */}
      </div>
    </PageContentWrapper>
  );
};

export default Contact;
