import { useEffect } from "react";
import ReactPortal from "./ReactPortal";
import { BiX } from "react-icons/bi";
import Search from "../search/Search";

type SearchModalProps = {
  isOpen: boolean;
  handleClose: () => void;
};

const SearchModal = ({ isOpen, handleClose }: SearchModalProps) => {
  useEffect(() => {
    const closeOnEscapeKey = (event: KeyboardEvent) => {
      event.key === "Escape" ? handleClose() : null;
    };
    document.body.addEventListener("keydown", closeOnEscapeKey);

    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) return null;
  return (
    <ReactPortal wrapperId="react-portal-modal">
      <div className="inset-0 fixed flex flex-col justify-center items-center bg-black0/90 z-50">
        <div className="border border-primary p-6 max-w-3xl h-[75vh] w-11/12 flex flex-col bg-black0">
          <div className="flex justify-between items-center mb-6">
            <h2>Search the catalogue</h2>
            <button
              type="button"
              className="text-primary border border-primary bg-black0 place-self-end"
              onClick={handleClose}
            >
              <BiX size="2rem" />
            </button>
          </div>
          <Search />
        </div>
      </div>
    </ReactPortal>
  );
};

export default SearchModal;
