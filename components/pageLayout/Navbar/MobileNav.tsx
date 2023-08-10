"use client";

import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import NavSearchButton from "./components/NavSearchButton";
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
      <div className="flex gap-2 lg:hidden">
        <NavSearchButton />
        <button
          onClick={toggleOpen}
          type="button"
          className="border border-primary z-50 bg-black1 w-[42px] xs:w-[62px]"
          aria-label="navigation menu"
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
