import ReactPortal from "./ReactPortal";
import { BiX } from "react-icons/bi";

type SearchModalProps = {
  isOpen: boolean;
  handleClose: () => void;
};

const SearchModal = ({ isOpen, handleClose }: SearchModalProps) => {
  if (!isOpen) return null;
  return (
    <ReactPortal wrapperId="react-portal-modal">
      <div className="inset-0 fixed bg-black/80 z-50">
        <div className="flex flex-col  m-4">
          <button
            type="button"
            className="text-primary border border-primary bg-black place-self-end"
            onClick={handleClose}
          >
            <BiX size="2rem" />
          </button>
          <div className="border border-primary p-4 mt-4 flex bg-black">
            <h2>Search the collection</h2>
          </div>
        </div>
      </div>
    </ReactPortal>
  );
};

export default SearchModal;