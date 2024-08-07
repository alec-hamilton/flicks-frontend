import Link from "next/link";
import { DialogTrigger } from "../ui/dialog";

// algolia doesn't provide access to their type for Hit<BaseHit> to extend from in react-instantsearch.
// using any for now, hopefully they will update their docs with ts examples soon.
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
