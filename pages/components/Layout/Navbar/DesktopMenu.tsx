import { BiChevronDown, BiSearch } from "react-icons/bi";

const DesktopMenu = () => {
  return (
    <div className="hidden mdx:flex ml-4 gap-2 justify-between w-full">
      <div className="flex gap-2">
        <button className="border border-primary text-primary px-4">
          Browse
        </button>
        <button className="border border-primary text-primary px-4">
          Cinemas
        </button>
        <button className="border border-primary text-primary px-4">
          Contact
        </button>
        <button className="border border-primary text-primary">
          <span className="flex items-center h-full">
            <span className="px-4">About</span>
            <span className="flex items-center border-l h-full px-1">
              <BiChevronDown size="1.5rem" />
            </span>
          </span>
        </button>
      </div>
      <button className="border border-primary text-primary px-4">
        <span className="flex gap-4">
          <span>
            <BiSearch size="1.5rem" />
          </span>
          <span>Search</span>
        </span>
      </button>
    </div>
  );
};

export default DesktopMenu;
