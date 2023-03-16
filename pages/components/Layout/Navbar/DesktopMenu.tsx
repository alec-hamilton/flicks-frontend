import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import Link from "next/link";
import { useRef, useState } from "react";
import { BiChevronDown, BiSearch } from "react-icons/bi";

const DesktopMenu = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  useOnClickOutside(dropdownRef, buttonRef, () => setDropdownOpen(false));

  return (
    <nav className="hidden mdx:flex ml-4 gap-2 justify-between w-full">
      <ul className="flex gap-2">
        <li className="flex items-center border border-primary px-4">
          <Link href="/browse">Browse</Link>
        </li>
        <li className="flex items-center border border-primary px-4">
          <Link href="/cinemas">Cinemas</Link>
        </li>
        <li className="flex items-center border border-primary px-4">
          <Link href="/contact">Contact</Link>
        </li>
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
      </ul>
      <button type="button" className="border border-primary px-4">
        <span className="flex gap-4">
          <span>
            <BiSearch size="1.5rem" />
          </span>
          <span>Search</span>
        </span>
      </button>
    </nav>
  );
};

export default DesktopMenu;
