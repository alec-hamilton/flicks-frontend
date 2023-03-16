import { BiChevronDown } from "react-icons/bi";

const DesktopMenu = () => {
  return (
    <div className="hidden md:flex ml-4 gap-2">
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
        <div className="flex items-center h-full">
          <p className="px-4">About</p>
          <div className="flex items-center border-l h-full px-1">
            <BiChevronDown size="1.5rem" />
          </div>
        </div>
      </button>
    </div>
  );
};

export default DesktopMenu;
