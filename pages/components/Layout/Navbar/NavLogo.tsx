const NavLogo = () => {
  return (
    <div className="flex flex-col border border-primary">
      <div className="border-b border-primary">
        <p className="text-primary px-1 text-xs">Welcome to...</p>
      </div>
      <div className="flex flex-col items-center justify-center h-full">
        <p className="text-primary py-2 px-4 font-logo text-l">
          20th Century Flicks
        </p>
      </div>
    </div>
  );
};

export default NavLogo;
