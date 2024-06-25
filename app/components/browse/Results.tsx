import type { Tables } from "@/types/database.types";
import Link from "next/link";

type ResultsProps = {
  results: Tables<"titles">[];
};

const Results = ({ results }: ResultsProps) => {
  return (
    <>
      {results.map((result) => (
        <Link href={`/movie/${result.id}`} key={result.id}>
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
