import Link from "next/link";
import { DialogTrigger } from "../ui/dialog";

type PersonHitProps = {
  hit: any;
};

const PersonHit = ({ hit }: PersonHitProps) => {
  return (
    <div className="flex pb-1 sm:pb-2">
      <DialogTrigger asChild>
        <Link
          href={`/person/${hit.id}`}
          className="text-foreground underline lg:hover:text-fuchsia-400"
        >
          {hit.full_name}
        </Link>
      </DialogTrigger>
    </div>
  );
};

export default PersonHit;
