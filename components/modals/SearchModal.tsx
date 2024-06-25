import { useEffect, useRef } from "react";
import ReactPortal from "./ReactPortal";
import { BiX } from "react-icons/bi";
import Search from "../search/Search";

type SearchModalProps = {
  isOpen: boolean;
  handleClose: () => void;
};

const SearchModal = ({ isOpen, handleClose }: SearchModalProps) => {
  const modalBackgroundRef = useRef(null);

  useEffect(() => {
    const closeOnEscapeKey = (event: KeyboardEvent) => {
      event.key === "Escape" ? handleClose() : null;
    };
    document.body.addEventListener("keydown", closeOnEscapeKey);

    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  const handleBackgroundClick = (event: React.MouseEvent) => {
    if (event.target === modalBackgroundRef.current) {
      handleClose();
    }
  };

  if (!isOpen) return null;
  return (
    <ReactPortal wrapperId="react-portal-modal">
      <div
        className="inset-0 fixed flex flex-col justify-center items-center bg-background/90 z-50"
        onClick={handleBackgroundClick}
        ref={modalBackgroundRef}
      >
        {/* <div className="border border-foreground p-6 sm:p-8 max-w-3xl h-[75vh] w-11/12 flex flex-col bg-layer1">
          <div className="flex justify-between items-center mb-6">
            <h2>Search the catalogue</h2>
            <button
              type="button"
              className="text-heading border border-foreground bg-layer1 lg:hover:bg-foreground/20 place-self-end"
              onClick={handleClose}
            >
              <BiX size="2rem" />
            </button>
          </div>
          <Search handleClose={handleClose} />
        </div> */}
        <p>This feature is currently under construction, check back soon!</p>
      </div>
    </ReactPortal>
  );
};

export default SearchModal;
