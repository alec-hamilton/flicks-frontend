import { NextResponse } from "next/server";

const API_KEY: string = process.env.OMDB_API_KEY as string;

type RouteProps = {
  request: Request;
  params: {
    id: string;
  };
};

export async function GET({ params: { id } }: RouteProps) {
  const DATA_SOURCE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`;

  const res = await fetch(DATA_SOURCE_URL);

  const movie = await res.json();

  if (!movie.imdbID) return NextResponse.json({ message: "Movie not found" });

  return NextResponse.json(movie);
}
