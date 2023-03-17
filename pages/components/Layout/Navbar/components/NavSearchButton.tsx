import { BiSearch } from "react-icons/bi";

const NavSearchButton = () => {
  return (
    <button type="button" className="border border-primary px-4">
      <span className="flex gap-4">
        <span>
          <BiSearch size="1.5rem" />
        </span>
        <span>Search</span>
      </span>
    </button>
  );
};

export default NavSearchButton;
