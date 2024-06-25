import Image from "next/image";
import PageContentWrapper from "@/components/surfaces/PageContentWrapper";
import Rating from "@/components/ratings/Rating";
import { createClient } from "@/lib/supabase/server";
import { getDirectors, getNonDirectors } from "@/lib/helpers/moviePage";

type MoviePageProps = {
  params: {
    id: string;
  };
};

const API_KEY: string = process.env.OMDB_API_KEY as string;

const fetchMovieImage = async (title: string, year: string) => {
  const DATA_SOURCE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&t=${title}&y=${year}`;

  const res = await fetch(DATA_SOURCE_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch movie data");
  }

  return res.json();
};

const fetchMovie = async (id: string) => {
  const supabase = createClient();
  let poster;
  const { data: movieData, error } = await supabase
    .from("titles")
    .select(
      "*, categories:titles2categories(categories(id, description)), languages:titles2languages(languages(id, language)), nationalities:titles2nationalities(nationalities(id, country)), people:titles2people(people(id, forename, surname), roles(id, role_name))"
    )
    .eq("id", id)
    .single();

  //TODO: seed the db
  if (movieData) {
    const result = await fetchMovieImage(movieData.title, movieData.date_1);
    poster = result.Poster;
  }

  return { movieData, error, poster };
};

export const generateMetadata = async ({ params }: MoviePageProps) => {
  const { movieData } = await fetchMovie(params.id);

  if (!movieData) return;

  // TODO: uncapitalise titles.
  return {
    title: `${movieData.title} - 20th Century Flicks`,
    description: `Rent ${movieData.title} from 20th Century Flicks, the longest running movie store in the world. Rent locally or by post.`,
  };
};

const MoviePage = async ({ params: { id } }: MoviePageProps) => {
  const { movieData, error, poster } = await fetchMovie(id);

  if (error) return <p>{error.message}</p>;

  if (movieData)
    return (
      <PageContentWrapper>
        <div className="flex flex-col-reverse md:grid md:grid-cols-6 gap-x-8">
          <div className="flex flex-col xs:grid xs:grid-cols-2 md:flex-col md:flex md:col-span-2 border border-foreground">
            <Image
              src={poster}
              width="290"
              height="430"
              alt={`movie poster for ${movieData.title}`}
              priority
            />
            <div className="flex flex-col gap-y-4 p-4 xs:max-md:border-l md:border-t border-foreground">
              <div className="flex justify-between gap-x-2">
                <h4>Flicks ID</h4>
                <p className="text-sm text-end">{movieData.id}</p>
              </div>
              <div className="flex justify-between gap-x-2">
                <h4>Cert</h4>
                <p className="text-sm text-end">{movieData.certification}</p>
              </div>
              <div className="flex justify-between gap-x-2">
                <h4>Running time</h4>
                <p className="text-sm text-end">{movieData.runningtime} mins</p>
              </div>
              <div className="flex justify-between gap-x-2">
                <h4>Country</h4>
                <div className="gap-2 text-sm text-end">
                  {movieData.nationalities.map(
                    ({ nationalities }) =>
                      nationalities && (
                        <p key={nationalities.id}>{nationalities.country}</p>
                      )
                  )}
                </div>
              </div>
              <div className="flex justify-between gap-x-2">
                <h4>Language</h4>
                <div className="gap-2 text-sm text-end">
                  {movieData.languages.map(
                    ({ languages }) =>
                      languages && (
                        <p key={languages.id}>{languages.language}</p>
                      )
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col col-span-4">
            <h1 className="pb-3">{`${movieData.title} (${movieData.date_1})`}</h1>
            <Rating rating={movieData.rating} />
            <h2>
              {getDirectors(movieData.people).map(({ name, id }) => (
                <span key={id}>{name}</span>
              ))}
            </h2>
            <div className="flex gap-2 my-4 flex-wrap">
              {movieData.categories.map(({ categories }) => {
                return (
                  <span
                    className="border border-foreground p-2"
                    key={categories?.id}
                  >
                    {categories?.description}
                  </span>
                );
              })}
            </div>
            <div className="mb-4">
              <h3>Cast</h3>
              <p>
                {getNonDirectors(movieData.people).map(({ name, id }) => (
                  <span key={id} className="mr-4">
                    {name}
                  </span>
                ))}
              </p>
            </div>
            <div className="mb-4">
              <h3>Plot</h3>
              <p>{movieData.review}</p>
            </div>
          </div>
        </div>
      </PageContentWrapper>
    );
};

export default MoviePage;
