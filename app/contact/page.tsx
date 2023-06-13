import React from "react";
import HorizontalDivider from "@/components/dividers/HorizontalDivider";
import PageContentWrapper from "@/components/surfaces/PageContentWrapper";
import { layoutConstants } from "@/components/layout/Navbar/layoutConstants";

const { contactLinks } = layoutConstants;

const Contact = () => {
  return (
    <PageContentWrapper>
      <h1>Contact us</h1>
      <div className="flex flex-col gap-4 text-sm sm:text-base mt-6">
        {contactLinks.links.map(({ name, title, url }, index) => {
          return name === "address" ? (
            <React.Fragment key={index}>
              <div className="flex justify-between">
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
            </React.Fragment>
          ) : (
            <React.Fragment key={index}>
              <div className="flex justify-between">
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
            </React.Fragment>
          );
        })}
      </div>
    </PageContentWrapper>
  );
};

export default Contact;
