import { useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import Link from "next/link";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import navbarConstants from "../navbarConstants";

const { aboutLinks } = navbarConstants;

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
        className="border border-primary bg-black hover:bg-primary/20"
      >
        <span className="flex items-center h-full">
          <span className="px-4 font-bold">About</span>
          <span className="flex items-center border-l border-primary h-full px-1">
            <BiChevronDown size="1.5rem" />
          </span>
        </span>
      </button>
      {dropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute left-0 top-16 w-60 border border-primary p-3 bg-darkBlack"
        >
          <ul className="flex flex-col gap-2">
            {aboutLinks.map(({ title, url }, index) => {
              return (
                <li
                  key={index}
                  className="flex border border-primary items-center justify-center bg-black hover:bg-primary/20"
                >
                  <Link
                    href={url}
                    onClick={() => setDropdownOpen(false)}
                    className="flex p-3 w-full items-center justify-center font-bold"
                  >
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </li>
  );
};

export default NavDropDown;
