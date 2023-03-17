import MobileMenuLink from "./components/MobileMenuLink";
import navbarConstants from "./navbarConstants";

const { regularLinks, aboutLinks } = navbarConstants;

type MobileMenuProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const MobileMenu = ({ open, setOpen }: MobileMenuProps) => {
  return open ? (
    <nav className="flex flex-col fixed inset-0 sm:left-2/4 xs:border-l xs:border-primary bg-black gap-4 mdx:hidden">
      <ul className="mt-16 xs:mt-20 m-2 xs:m-3 flex flex-col gap-4">
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
      <hr className="bt border-primary w-9/12 mx-auto" />
      <ul className="flex m-2 xs:m-3 flex-col gap-4">
        {aboutLinks.map(({ title, url }, index) => {
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
  ) : (
    <></>
  );
};

export default MobileMenu;
