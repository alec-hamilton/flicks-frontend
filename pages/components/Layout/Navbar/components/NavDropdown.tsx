import { useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";

const NavDropDown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  useOnClickOutside(dropdownRef, buttonRef, () => setDropdownOpen(false));

  return (
    <li className="flex relative">
      <button
        type="button"
        ref={buttonRef}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="border border-primary"
      >
        <span className="flex items-center h-full">
          <span className="px-4">About</span>
          <span className="flex items-center border-l h-full px-1">
            <BiChevronDown size="1.5rem" />
          </span>
        </span>
      </button>
      {dropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute left-0 top-16 border border-primary p-4"
        >
          Dropdown content
        </div>
      )}
    </li>
  );
};

export default NavDropDown;
