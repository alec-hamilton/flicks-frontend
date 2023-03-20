import { BiSearch } from "react-icons/bi";

const NavSearchButton = () => {
  return (
    <button
      type="button"
      className="border border-fuchsia-400 hover:bg-fuchsia-400/20 px-4 bg-black1"
    >
      <span className="flex gap-4">
        <span>
          <BiSearch size="1.5rem" className="text-fuchsia-400" />
        </span>
        <span className="font-bold text-fuchsia-400">Search</span>
      </span>
    </button>
  );
};

export default NavSearchButton;
