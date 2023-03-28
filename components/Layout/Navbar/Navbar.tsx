import MobileNav from "./MobileNav";
import NavLogo from "./components/NavLogo";
import DesktopMenu from "./DesktopMenu";

const Navbar = () => {
  return (
    <nav className="flex border-b border-primary p-2 justify-between xs:p-4 mdx:justify-start">
      <NavLogo />
      <DesktopMenu />
      <MobileNav />
    </nav>
  );
};

export default Navbar;
