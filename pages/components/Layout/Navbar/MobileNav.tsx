import { useState } from "react";
import { BiMenu, BiSearch, BiX } from "react-icons/bi";
import MobileMenu from "./MobileMenu";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const burgerButton = <BiMenu size="2rem" />;

  const closeButton = <BiX size="2rem" />;

  return (
    <>
      <div className="flex gap-2">
        <button
          type="button"
          className="border border-primary bg-black mdx:hidden w-[42px] xs:w-[62px]"
        >
          <span className="flex items-center justify-center">
            <BiSearch size="1.5rem" />
          </span>
        </button>
        <button
          onClick={toggleOpen}
          type="button"
          className="border border-primary z-50 bg-black mdx:hidden w-[42px] xs:w-[62px]"
        >
          <span className="flex items-center justify-center">
            {open ? closeButton : burgerButton}
          </span>
        </button>
      </div>
      <MobileMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default MobileNav;
