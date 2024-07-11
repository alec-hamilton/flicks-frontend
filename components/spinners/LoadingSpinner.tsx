import { ImSpinner5 } from "react-icons/im";

const LoadingSpinner = () => {
  return (
    <div className="min-h-[160rem] flex justify-center">
      <ImSpinner5 size="2rem" className="animate-spin mt-10" />
    </div>
  );
};

export default LoadingSpinner;
