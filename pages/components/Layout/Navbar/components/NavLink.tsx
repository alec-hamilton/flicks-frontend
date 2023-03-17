import Link from "next/link";

type NavLinkProps = {
  to: string;
};

const NavLink = ({ to }: NavLinkProps) => {
  return (
    <li className="flex items-center border border-primary">
      <Link
        href={`/${to.toLowerCase()}`}
        className="px-4 flex items-center justify-center h-full"
      >
        {to}
      </Link>
    </li>
  );
};

export default NavLink;
