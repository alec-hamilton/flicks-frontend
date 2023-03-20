import { BiSearch } from "react-icons/bi";

const NavSearchButton = () => {
  return (
    <button
      type="button"
      className="border border-violet-400 hover:bg-violet-400/20 px-4 bg-black1"
    >
      <span className="flex gap-4">
        <span>
          <BiSearch size="1.5rem" className="text-violet-400" />
        </span>
        <span className="font-bold text-violet-400">Search</span>
      </span>
    </button>
  );
};

export default NavSearchButton;
