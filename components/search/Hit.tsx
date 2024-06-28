import Link from "next/link";

type HitProps = {
  hit: any;
  handleClose: () => void;
};

const Hit = ({ hit, handleClose }: HitProps) => {
  return (
    <div className="flex justify-between pb-2">
      <Link
        href={`/movie/${hit.imdbId}`}
        onClick={() => handleClose()}
        className="text-foreground underline lg:hover:text-fuchsia-400"
      >
        {hit.title}
      </Link>
      <p className="text-heading">{hit.year}</p>
    </div>
  );
};

export default Hit;
