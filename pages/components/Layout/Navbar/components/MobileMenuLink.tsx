import Link from "next/link";

type MobileMenuLinkProps = {
  title: string;
  url: string;
  setOpen: (open: boolean) => void;
};

const MobileMenuLink = ({ title, url, setOpen }: MobileMenuLinkProps) => {
  return (
    <li className="flex border border-primary items-center justify-center">
      <Link
        href={url}
        onClick={() => setOpen(false)}
        className="flex p-4 w-full items-center justify-center"
      >
        {title}
      </Link>
    </li>
  );
};

export default MobileMenuLink;