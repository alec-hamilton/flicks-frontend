import Link from "next/link";
import { DialogTrigger } from "../ui/dialog";

type MovieHitProps = {
  hit: any;
};

const MovieHit = ({ hit }: MovieHitProps) => {
  return (
    <div className="flex pb-1 sm:pb-2">
      <DialogTrigger asChild>
        <Link
          href={`/movie/${hit.id}`}
          className="text-foreground underline lg:hover:text-fuchsia-400"
        >
          {hit.title}
        </Link>
      </DialogTrigger>
    </div>
  );
};

export default MovieHit;
