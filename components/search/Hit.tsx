import Link from "next/link";
import type { Hit as AlgoliaHit } from "instantsearch.js/es/types";

type HitProps = {
  hit: AlgoliaHit;
  handleClose: () => void;
};

const Hit = ({ hit, handleClose }: HitProps) => {
  return (
    <div className="flex justify-between pb-2">
      <Link
        href={`/movie/${hit.imdbId}`}
        onClick={() => handleClose()}
        className="text-primary underline lg:hover:text-fuchsia-400"
      >
        {hit.title}
      </Link>
      <p className="text-body">{hit.year}</p>
    </div>
  );
};

export default Hit;
