import React from "react";
import { Metadata } from "next";
import HorizontalDivider from "@/components/dividers/HorizontalDivider";
import { navigationConstants } from "@/components/navigation/Navbar/navigationConstants";
import { globalConstants } from "@/constants/globalConstants";

const { contactLinks } = navigationConstants;
const {
  contactUs: { metaTitle, metaDescription },
} = globalConstants;

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
};

const Contact = () => {
  return (
    <>
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
    </>
  );
};

export default Contact;
