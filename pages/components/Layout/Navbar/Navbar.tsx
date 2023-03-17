import MobileNav from "./MobileNav";
import NavLogo from "./NavLogo";
import DesktopMenu from "./DesktopMenu";

const Navbar = () => {
  return (
    <nav className="flex justify-between m-2 xs:m-3 mdx:justify-start">
      <NavLogo />
      <DesktopMenu />
      <MobileNav />
    </nav>
  );
};

export default Navbar;
