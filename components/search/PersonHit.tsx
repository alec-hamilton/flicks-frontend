import Link from "next/link";

type HitProps = {
  hit: any;
  handleClose: () => void;
};

const PersonHit = ({ hit, handleClose }: HitProps) => {
  return (
    <div className="flex justify-between pb-2">
      <Link
        href={`/person/${hit.id}`}
        onClick={() => handleClose()}
        className="text-foreground underline lg:hover:text-fuchsia-400"
      >
        {hit.full_name}
      </Link>
    </div>
  );
};

export default PersonHit;
