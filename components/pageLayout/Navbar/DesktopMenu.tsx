import Link from "next/link";
import NavDropDown from "./components/NavDropdown";
import NavSearchButton from "./components/NavSearchButton";
import { layoutConstants } from "./layoutConstants";

const { regularLinks } = layoutConstants;
const { rentalsLinks } = layoutConstants;
const { aboutLinks } = layoutConstants;

const DesktopMenu = () => {
  return (
    <div className="hidden lg:flex ml-4 gap-2 justify-between w-full">
      <ul className="flex gap-2">
        {regularLinks.map(({ title, url }, index) => {
          return (
            <li
              key={index}
              className="flex items-center border border-foreground bg-layer1 hover:bg-foreground-hover"
            >
              <Link
                href={url}
                className="px-4 flex items-center justify-center h-full font-bold"
              >
                {title}
              </Link>
            </li>
          );
        })}
        <NavDropDown dropdownLinks={rentalsLinks} />
        <NavDropDown dropdownLinks={aboutLinks} />
      </ul>
      <NavSearchButton />
    </div>
  );
};

export default DesktopMenu;
