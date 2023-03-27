import ReactPortal from "./ReactPortal";

type SearchModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
};

const SearchModal = ({ children, isOpen, handleClose }: SearchModalProps) => {
  if (!isOpen) return null;
  return (
    <ReactPortal wrapperId="react-portal-modal">
      <div className="inset-0 fixed bg-black/80 z-50">
        <button type="button" className="text-primary" onClick={handleClose}>
          Close
        </button>
        <div>{children}</div>
      </div>
    </ReactPortal>
  );
};

export default SearchModal;
