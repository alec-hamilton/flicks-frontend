import Link from "next/link";
import { BiChevronDown, BiSearch } from "react-icons/bi";

const DesktopMenu = () => {
  return (
    <nav className="hidden mdx:flex ml-4 gap-2 justify-between w-full">
      <ul className="flex gap-2">
        <li className="flex items-center border border-primary text-primary px-4">
          <Link href="/browse">Browse</Link>
        </li>
        <li className="flex items-center border border-primary text-primary px-4">
          <Link href="/cinemas">Cinemas</Link>
        </li>
        <li className="flex items-center border border-primary text-primary px-4">
          <Link href="/contact">Contact</Link>
        </li>
        <li className="flex">
          <button type="button" className="border border-primary text-primary">
            <span className="flex items-center h-full">
              <span className="px-4">About</span>
              <span className="flex items-center border-l h-full px-1">
                <BiChevronDown size="1.5rem" />
              </span>
            </span>
          </button>
        </li>
      </ul>
      <button type="button" className="border border-primary text-primary px-4">
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
