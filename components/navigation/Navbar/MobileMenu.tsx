import MobileMenuLink from "./components/MobileMenuLink";
import { navigationConstants } from "./navigationConstants";

const { regularLinks, rentalsLinks, aboutLinks } = navigationConstants;

type MobileMenuProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const MobileMenu = ({ open, setOpen }: MobileMenuProps) => {
  return open ? (
    <nav className="flex flex-col fixed bg-background inset-0 sm:left-2/4 sm:border-l sm:border-foreground gap-2 lg:hidden">
      <ul className="mt-16 xs:mt-20 m-2 xs:mx-4 flex flex-col gap-2">
        {regularLinks.map(({ title, url }, index) => {
          return (
            <MobileMenuLink
              title={title}
              url={url}
              setOpen={setOpen}
              key={index}
            />
          );
        })}
      </ul>
      <hr className="border-foreground w-9/12 mx-auto" />
      <ul className="flex m-2 xs:mx-4 flex-col gap-2">
        {rentalsLinks.links.map(({ title, url }, index) => {
          return (
            <MobileMenuLink
              title={title}
              url={url}
              setOpen={setOpen}
              key={index}
            />
          );
        })}
      </ul>
      <hr className="border-foreground w-9/12 mx-auto" />
      <ul className="flex m-2 xs:mx-4 flex-col gap-2">
        {aboutLinks.links.map(({ title, url }, index) => {
          return (
            <MobileMenuLink
              title={title}
              url={url}
              setOpen={setOpen}
              key={index}
            />
          );
        })}
      </ul>
    </nav>
  ) : null;
};

export default MobileMenu;
