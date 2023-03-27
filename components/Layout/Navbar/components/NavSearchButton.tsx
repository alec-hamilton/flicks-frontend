import SearchModal from "@/components/modals/SearchModal";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";

const NavSearchButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        className="border border-fuchsia-400 hover:bg-fuchsia-400/20 px-4 bg-black1"
      >
        <span className="flex gap-4">
          <span>
            <BiSearch size="1.5rem" className="text-fuchsia-400" />
          </span>
          <span className="font-bold text-fuchsia-400">Search</span>
        </span>
      </button>
      <SearchModal isOpen={isOpen} handleClose={() => setIsOpen(false)}>
        This is the modal content!
      </SearchModal>
    </>
  );
};

export default NavSearchButton;
