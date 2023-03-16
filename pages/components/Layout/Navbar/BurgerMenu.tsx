import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import MobileMenu from "./MobileMenu";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const burgerButton = <BiMenu size="2rem" />;

  const closeButton = <BiX size="2rem" />;

  return (
    <>
      <button
        onClick={toggleOpen}
        className="border border-primary z-50 mdx:hidden w-[62px]"
      >
        <span className="flex items-center justify-center">
          {open ? closeButton : burgerButton}
        </span>
      </button>
      <MobileMenu open={open} />
    </>
  );
};

export default BurgerMenu;
