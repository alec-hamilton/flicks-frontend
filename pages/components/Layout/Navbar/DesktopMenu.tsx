import NavDropDown from "./components/NavDropdown";
import NavLink from "./components/NavLink";
import NavSearchButton from "./components/NavSearchButton";

const DesktopMenu = () => {
  return (
    <div className="hidden mdx:flex ml-4 gap-2 justify-between w-full">
      <ul className="flex gap-2">
        <NavLink to="Browse" />
        <NavLink to="Cinemas" />
        <NavLink to="Contact" />
        <NavDropDown />
      </ul>
      <NavSearchButton />
    </div>
  );
};

export default DesktopMenu;
