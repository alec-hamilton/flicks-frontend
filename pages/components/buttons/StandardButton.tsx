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
