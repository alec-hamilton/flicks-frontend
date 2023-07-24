import type { Hit as AlgoliaHit } from "instantsearch.js/es/types";

type HitProps = {
  hit: AlgoliaHit<{ title: string }>;
};

const Hit = ({ hit }: HitProps) => {
  console.log(hit.title);
  return (
    <div>
      <p className="text-body">{hit.title}</p>
    </div>
  );
};

export default Hit;
