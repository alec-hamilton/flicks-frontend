import MobileMenuLink from "./components/MobileMenuLink";

type MobileMenuProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const MobileMenu = ({ open, setOpen }: MobileMenuProps) => {
  const regularLinks = [
    { title: "Browse", url: "/browse" },
    { title: "Cinemas", url: "/cinemas" },
    { title: "Contact", url: "/contact" },
  ];

  const aboutLinks = [
    { title: "The shop", url: "/about/the-shop" },
    { title: "Rent by post", url: "/about/rent-by-post" },
    { title: "Faqs", url: "/about/faqs" },
  ];

  return open ? (
    <div className="flex flex-col fixed inset-0 sm:left-2/4 xs:border-l xs:border-primary bg-black gap-4 mdx:hidden">
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
    </div>
  ) : (
    <></>
  );
};

export default MobileMenu;
