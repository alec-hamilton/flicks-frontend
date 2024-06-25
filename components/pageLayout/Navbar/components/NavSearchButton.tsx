"use client";

import SearchModal from "@/components/modals/SearchModal";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";

const NavSearchButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        className="border border-foreground lg:border-fuchsia-400 lg:hover:bg-fuchsia-400/20 px-4 bg-layer1 w-[42px] xs:w-[62px] lg:w-auto"
        aria-label="Search"
      >
        <span className="flex gap-4 items-center justify-center">
          <span>
            <BiSearch
              size="1.5rem"
              className="text-foreground lg:text-fuchsia-400"
            />
          </span>
          <span className="font-bold text-fuchsia-400 hidden lg:block">
            Search
          </span>
        </span>
      </button>
      <SearchModal isOpen={isOpen} handleClose={handleClose} />
    </>
  );
};

export default NavSearchButton;
