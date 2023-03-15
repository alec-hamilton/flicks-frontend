import BurgerMenu from "./BurgerMenu";
import NavLogo from "./NavLogo";

const Navbar = () => {
  return (
    <div className="flex justify-between m-3">
      <NavLogo />
      <BurgerMenu />
    </div>
  );
};

export default Navbar;
