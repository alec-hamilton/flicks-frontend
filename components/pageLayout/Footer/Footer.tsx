import Link from "next/link";
import { FiTwitter, FiInstagram } from "react-icons/fi";
import { layoutConstants } from "../Navbar/layoutConstants";

const { usefulLinks, aboutLinks, contactLinks } = layoutConstants;
const footerLinks = [usefulLinks, aboutLinks];
const contactMinusWhat3 = contactLinks.links.slice(0, -1);

const Footer = () => {
  return (
    <footer className="flex flex-col mt-auto border-t-2 border-primary pt-2 xs:pt-4">
      <div className="flex flex-col mx-2 xs:mx-4 gap-2 xs:gap-4 md:flex-row">
        {footerLinks.map(({ groupName, links }, index) => {
          return (
            <section
              className="border border-primary md:flex-1 bg-black1"
              key={index}
            >
              <h3 className="border-b border-primary p-4">{groupName}</h3>
              <ul className="p-4 flex flex-col gap-2 text-sm">
                {links.map(({ title, url }, index) => {
                  return (
                    <li
                      className="underline lg:hover:text-fuchsia-400"
                      key={index}
                    >
                      <Link href={url}>{title}</Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
        <section className="border border-primary md:flex-1 bg-black1">
          <h3 className="border-b border-primary p-4">
            {contactLinks.groupName}
          </h3>
          <ul className="p-4 flex flex-col gap-2 text-sm">
            {contactMinusWhat3.map(({ title, url, name }) => {
              return name === "address" ? (
                <li
                  key={title}
                  className="underline lg:hover:text-fuchsia-400 whitespace-pre-wrap"
                >
                  <a href={url} target="_blank" rel="noreferrer">
                    <address className="not-italic">{title}</address>
                  </a>
                </li>
              ) : (
                <li className="underline lg:hover:text-fuchsia-400" key={title}>
                  <a href={url} target="_blank" rel="noreferrer">
                    {title}
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
      <div className="flex border-t border-primary items-center justify-between mt-2 xs:mt-4 p-2 xs:p-4">
        <h3 className="font-logo whitespace-nowrap p-2 text-xs">
          20th Century Flicks
        </h3>
        <div className="flex gap-2">
          <a
            href="https://twitter.com/20thCFlicks"
            target="_blank"
            rel="noreferrer"
            aria-label="Link to twitter page"
          >
            <div className="border border-primary p-2 bg-black1 lg:hover:bg-primary/20">
              <FiTwitter size="1.5rem" />
            </div>
          </a>
          <a
            href="https://www.instagram.com/20thcenturyflicks/"
            target="_blank"
            rel="noreferrer"
            aria-label="Link to instagram page"
          >
            <div className="border border-primary p-2 bg-black1 lg:hover:bg-primary/20">
              <FiInstagram size="1.5rem" />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
