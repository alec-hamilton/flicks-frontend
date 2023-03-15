import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import MobileMenu from "./MobileMenu";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const burgerButton = <BiMenu size="2rem" className="text-primary" />;

  const closeButton = <BiX size="2rem" className="text-primary" />;

  return (
    <>
      <div className="flex items-center justify-center border-2 border-primary z-50 md:hidden">
        <button onClick={toggleOpen} className="p-4">
          {open ? closeButton : burgerButton}
        </button>
      </div>
      <MobileMenu open={open} />
    </>
  );
};

export default BurgerMenu;
