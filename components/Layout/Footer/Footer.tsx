import Link from "next/link";
import { FiTwitter, FiInstagram } from "react-icons/fi";
import { layoutConstants } from "../Navbar/layoutConstants";

const { usefulLinks, aboutLinks } = layoutConstants;
const footerLinks = [usefulLinks, aboutLinks];

const Footer = () => {
  return (
    <footer className="flex flex-col border-t-2 border-primary pt-2 xs:pt-4">
      <div className="flex flex-col mx-2 xs:mx-4 gap-2 xs:gap-4 md:flex-row">
        {footerLinks.map(({ groupName, links }, index) => {
          return (
            <section className="border border-primary md:flex-1" key={index}>
              <h3 className="border-b border-primary p-4">{groupName}</h3>
              <ul className="p-4 flex flex-col gap-2 text-sm">
                {links.map(({ title, url }, index) => {
                  return (
                    <Link href={url} key={index}>
                      <li>{title}</li>
                    </Link>
                  );
                })}
              </ul>
            </section>
          );
        })}
        {/* <section className="border border-primary md:flex-1">
          <h3 className="border-b border-primary p-4">Useful links</h3>
          <ul className="p-4 flex flex-col gap-2 text-sm">
            <li>Browse</li>
            <li>Cinemas</li>
            <li>Rent locally</li>
            <li>Rent by post</li>
          </ul>
        </section>
        <section className="border border-primary md:flex-1">
          <h3 className="border-b border-primary p-4">About</h3>
          <ul className="p-4 flex flex-col gap-2 text-sm">
            <li>About us</li>
            <li>The shop</li>
            <li>FAQs</li>
          </ul>
        </section>
        <section className="border border-primary md:flex-1">
          <h3 className="border-b border-primary p-4">Contact</h3>
          <ul className="p-4 flex flex-col gap-2 text-sm">
            <li>0117 925 8432</li>
            <li>info@20thcenturyflicks.co.uk</li>
            <li>
              <address className="not-italic">
                <p>20th Century Flicks Ltd</p>
                <p>19 Christmas Steps</p>
                <p>Bristol</p>
                <p>BS1 5BS</p>
              </address>
            </li>
          </ul>
        </section> */}
      </div>
      <div className="flex border-t-2 border-primary items-center justify-between mt-2 xs:mt-4 p-2 xs:p-4">
        <h3 className="font-logo whitespace-nowrap p-2 text-xs">
          20th Century Flicks
        </h3>
        <div className="flex gap-2">
          <a
            href="https://twitter.com/20thCFlicks"
            target="_blank"
            rel="noreferrer"
          >
            <div className="border border-primary p-2">
              <FiTwitter size="1.5rem" />
            </div>
          </a>
          <a
            href="https://www.instagram.com/20thcenturyflicks/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="border border-primary p-2">
              <FiInstagram size="1.5rem" />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
