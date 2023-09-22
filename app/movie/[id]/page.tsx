import Image from "next/image";
import PageContentWrapper from "@/components/surfaces/PageContentWrapper";

type MoviePageProps = {
  params: {
    id: string;
  };
};

const API_KEY: string = process.env.OMDB_API_KEY as string;

const fetchMovie = async (id: string) => {
  const DATA_SOURCE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`;

  const res = await fetch(DATA_SOURCE_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch movie data");
  }

  return res.json();
};

export const generateMetadata = async ({ params }: MoviePageProps) => {
  const movieData = await fetchMovie(params.id);

  return {
    title: `${movieData.Title} - 20th Century Flicks`,
    description: `Rent ${movieData.Title} from 20th Century Flicks, the longest running movie store in the world. Rent locally or by post.`,
  };
};

const MoviePage = async ({ params: { id } }: MoviePageProps) => {
  const movieData = await fetchMovie(id);

  return (
    <PageContentWrapper>
      <div className="flex flex-col-reverse md:grid md:grid-cols-6 gap-x-8">
        <div className="flex flex-col xs:grid xs:grid-cols-2 md:flex-col md:flex md:col-span-2 border border-primary">
          <Image
            src={movieData.Poster}
            width="290"
            height="430"
            alt={`movie poster for ${movieData.Title}`}
            priority
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
