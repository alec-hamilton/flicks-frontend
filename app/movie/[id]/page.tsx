import PageContentWrapper from "@/components/surfaces/PageContentWrapper";
import { headers } from "next/headers";
import Image from "next/image";

type MoviePageProps = {
  params: {
    id: string;
  };
};

const fetchMovie = async (id: string) => {
  const host = headers().get("host");
  const protocol = headers().get("x-forwarded-proto");
  const res = await fetch(`${protocol}://${host}/api/movie/${id}`);
  return res.json();
};

// const movieData = {
//   Title: "The Social Network",
//   Year: "2010",
//   Rated: "PG-13",
//   Released: "01 Oct 2010",
//   Runtime: "120 min",
//   Genre: "Biography, Drama",
//   Director: "David Fincher",
//   Writer: "Aaron Sorkin, Ben Mezrich",
//   Actors: "Jesse Eisenberg, Andrew Garfield, Justin Timberlake",
//   Plot: "As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea and by the co-founder who was later squeezed out of the business.",
//   Language: "English, French",
//   Country: "United States",
//   Awards: "Won 3 Oscars. 173 wins & 186 nominations total",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
//   Ratings: [
//     { Source: "Internet Movie Database", Value: "7.8/10" },
//     { Source: "Rotten Tomatoes", Value: "96%" },
//     { Source: "Metacritic", Value: "95/100" },
//   ],
//   Metascore: "95",
//   imdbRating: "7.8",
//   imdbVotes: "726,546",
//   imdbID: "tt1285016",
//   Type: "movie",
//   DVD: "11 Jan 2011",
//   BoxOffice: "$96,962,694",
//   Production: "N/A",
//   Website: "N/A",
//   Response: "True",
// };

const MoviePage = async ({ params: { id } }: MoviePageProps) => {
  const movieData = await fetchMovie(id);

  return (
    <PageContentWrapper>
      <div className="flex flex-col-reverse md:grid md:grid-cols-6 gap-x-8">
        <div className="flex flex-col xs:grid xs:grid-cols-2 md:flex-col md:flex md:col-span-2 border border-primary">
          <Image
            src={movieData.Poster}
            width="400"
            height="400"
            alt={`movie poster for ${movieData.Title}`}
          />
          <div className="flex flex-col gap-y-4 p-4 xs:max-md:border-l md:border-t border-primary">
            <div className="flex justify-between gap-x-2">
              <h4>Cert</h4>
              <p className="text-sm text-end">{movieData.Rated}</p>
            </div>
            <div className="flex justify-between gap-x-2">
              <h4>Running time</h4>
              <p className="text-sm text-end">{movieData.Runtime}</p>
            </div>
            <div className="flex justify-between gap-x-2">
              <h4>Country</h4>
              <p className="text-sm text-end">{movieData.Country}</p>
            </div>
            <div className="flex justify-between gap-x-2">
              <h4>Language</h4>
              <p className="text-sm text-end">{movieData.Language}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col col-span-4">
          <h1 className="pb-3">{`${movieData.Title} (${movieData.Year})`}</h1>
          <h2>{`Directed by ${movieData.Director}`}</h2>
          <div className="flex gap-x-2 my-4">
            {movieData.Genre.split(",").map((genre: string) => {
              return (
                <div className="border border-primary p-2" key={genre}>
                  {genre}
                </div>
              );
            })}
          </div>
          <div className="mb-4">
            <h3>Cast</h3>
            <p>{movieData.Actors}</p>
          </div>
          <div className="mb-4">
            <h3>Plot</h3>
            <p>{movieData.Plot}</p>
          </div>
        </div>
      </div>
    </PageContentWrapper>
  );
};

export default MoviePage;
