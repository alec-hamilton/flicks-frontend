type ChildrenProps = {
  children: React.ReactNode;
};

// Alternative hover classes
// shadow-button hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all

const StandardButton = ({ children }: ChildrenProps) => {
  return (
    <button
      type="button"
      className="border border-primary p-3 font-bold bg-black1 hover:bg-primary/20"
    >
      {children}
    </button>
  );
};

export default StandardButton;
