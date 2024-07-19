import type { Tables } from "@/types/database.types";
import Image from "next/image";
import Link from "next/link";
import movieNotFound from "@/assets/images/movie-not-found.svg";

type ResultsProps = {
  results: Tables<"titles">[];
};

const Results = ({ results }: ResultsProps) => {
  return (
    <>
      {results.map((result) => (
        <Link
          href={`/movie/${result.id}`}
          key={result.id}
          className="flex gap-x-4 py-2 items-center md:hover:underline"
        >
          <Image
            src={result.image_url ?? movieNotFound}
            alt={`movie poster for ${result.title}`}
            width={50}
            height={75}
            className="border h-auto"
          />
          <div className="my-2">
            <p>{result.title}</p>
            <p>{result.date_1}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Results;
