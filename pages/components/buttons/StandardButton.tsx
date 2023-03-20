type ChildrenProps = {
  children: React.ReactNode;
};

// Alternative hover classes
// shadow-button hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all

const StandardButton = ({ children }: ChildrenProps) => {
  return (
    <button
      type="button"
      className="p-3 text-fuchsia-400 font-bold border border-fuchsia-400 shadow-button bg-fuchsia-700/5 hover:bg-fuchsia-400/20"
    >
      {children}
    </button>
  );
};

export default StandardButton;
