import Link from "next/link";

const NavLogo = () => {
  return (
    <Link href="/">
      <div className="flex flex-col border border-foreground bg-layer1 lg:hover:bg-foreground-hover">
        <div className="hidden xs:block xs:border-b xs:border-foreground">
          <p className="px-1 text-xs">Welcome to...</p>
        </div>
        <div className="flex flex-col items-center justify-center h-full">
          <p className="py-2 px-4 font-logo text-l whitespace-nowrap text-heading">
            20th Century Flicks
          </p>
        </div>
      </div>
    </Link>
  );
};

export default NavLogo;
