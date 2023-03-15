import BurgerMenu from "./BurgerMenu";
import NavLogo from "./NavLogo";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <NavLogo />
      <BurgerMenu />
    </div>
  );
};

export default Navbar;
