import ReactPortal from "./ReactPortal";

type SearchModalProps = {
  isOpen: boolean;
  handleClose: () => void;
};

const SearchModal = ({ isOpen, handleClose }: SearchModalProps) => {
  if (!isOpen) return null;
  return (
    <ReactPortal wrapperId="react-portal-modal">
      <div className="inset-0 fixed bg-black/80 z-50">
        <button type="button" className="text-primary" onClick={handleClose}>
          Close
        </button>
        <div className="border border-primary m-4 p-4 flex bg-black">
          <h2>Search the collection</h2>
        </div>
      </div>
    </ReactPortal>
  );
};

export default SearchModal;
