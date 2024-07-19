import Link from "next/link";

type HitProps = {
  hit: any;
  handleClose: () => void;
};

const Hit = ({ hit, handleClose }: HitProps) => {
  return (
    <div className="flex justify-between pb-2">
      <Link
        href={`/movie/${hit.id}`}
        onClick={() => handleClose()}
        className="text-foreground underline lg:hover:text-fuchsia-400"
      >
        {hit.title}
      </Link>
      <p className="text-heading">{hit.date_1}</p>
    </div>
  );
};

export default Hit;
