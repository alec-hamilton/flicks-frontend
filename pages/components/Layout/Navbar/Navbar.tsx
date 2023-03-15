import BurgerMenu from "./BurgerMenu";
import NavLogo from "./NavLogo";
import DesktopMenu from "./DesktopMenu";

const Navbar = () => {

  return (
    <div className="flex justify-between m-3">
      <NavLogo />
      <BurgerMenu />
      <DesktopMenu />
    </div>
  );
};

export default Navbar;
