"use client";

import { useRouter } from "next/navigation";
import type { Hit as AlgoliaHit } from "instantsearch.js/es/types";

type HitProps = {
  hit: AlgoliaHit;
  handleClose: () => void;
};

const Hit = ({ hit, handleClose }: HitProps) => {
  const router = useRouter();

  const handleClick = (id: string) => {
    handleClose();
    router.push(`/movie/${id}`);
  };

  return (
    <div className="flex justify-between pb-2">
      <button
        className="text-body underline"
        onClick={() => handleClick(hit.imdbId)}
      >
        {hit.title}
      </button>
      <p className="text-body">{hit.year}</p>
    </div>
  );
};

export default Hit;
