import type { Hit as AlgoliaHit } from "instantsearch.js/es/types";

type HitProps = {
  hit: AlgoliaHit<{ title: string, year: string }>;
};

const Hit = ({ hit }: HitProps) => {
  return (
    <div className="flex justify-between">
      <p className="text-body">{hit.title}</p>
      <p className="text-body">{hit.year}</p>
    </div>
  );
};

export default Hit;
