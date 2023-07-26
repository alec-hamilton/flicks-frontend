import Link from "next/link";
import type { Hit as AlgoliaHit } from "instantsearch.js/es/types";

type HitProps = {
  hit: AlgoliaHit<{
    title: string;
    year: string;
    imdbId: string;
  }>;
};

const Hit = ({ hit }: HitProps) => {
  return (
    <div className="flex justify-between pb-2">
      <Link
        href={`/movie/${hit.imdbId}`}
        onClick={() => console.log("clicked")}
      >
        <p className="text-body">{hit.title}</p>
      </Link>
      <p className="text-body">{hit.year}</p>
    </div>
  );
};

export default Hit;
