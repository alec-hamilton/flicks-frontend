import MobileNav from "./MobileNav";
import NavLogo from "./components/NavLogo";
import DesktopMenu from "./DesktopMenu";

const Navbar = () => {
  return (
    <nav className="flex sticky top-0 z-50 bg-background border-b-2 border-foreground p-2 justify-between xs:p-4 lg:justify-start">
      <NavLogo />
      <DesktopMenu />
      <MobileNav />
    </nav>
  );
};

export default Navbar;
