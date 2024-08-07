import Link from "next/link";

type MobileMenuLinkProps = {
  title: string;
  url: string;
  setOpen: (open: boolean) => void;
};

const MobileMenuLink = ({ title, url, setOpen }: MobileMenuLinkProps) => {
  return (
    <li className="flex border border-foreground items-center justify-center bg-layer1">
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
