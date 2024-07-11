import Image from "next/image";
import PageContentWrapper from "@/components/surfaces/PageContentWrapper";
import Rating from "@/components/ratings/Rating";
import { createClient } from "@/lib/supabase/server";
import { getDirectors, getNonDirectors } from "@/lib/helpers/moviePage";
import movieNotFound from "@/assets/images/movie-not-found.svg";
import Link from "next/link";

type MoviePageProps = {
  params: {
    id: string;
  };
};

const fetchMovie = async (id: string) => {
  const supabase = createClient();
  const { data: movieData, error } = await supabase
    .from("titles")
    .select(
      "*, categories:titles2categories(categories(id, description)), languages:titles2languages(languages(id, language)), nationalities:titles2nationalities(nationalities(id, country)), people:titles2people(people(id, forename, surname), roles(id, role_name))"
    )
    .eq("id", id)
    .single();

  return { movieData, error };
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
  const { movieData, error } = await fetchMovie(id);

  if (error) return <p>{error.message}</p>;

  if (movieData)
    return (
      <PageContentWrapper>
        <div className="flex flex-col-reverse md:grid md:grid-cols-6 gap-x-8">
          <div className="grid grid-cols-2 md:flex-col md:flex md:col-span-2 border">
            <Image
              src={movieData.image_url ?? movieNotFound}
              width="290"
              height="430"
              alt={`movie poster for ${movieData.title}`}
              priority
            />
            <div className="flex flex-col gap-y-4 p-4 max-md:border-l md:border-t">
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
                        <Link
                          key={nationalities.id}
                          href={`/browse?nationality=${nationalities.id}`}
                          className="block md:hover:underline"
                        >
                          {nationalities.country}
                        </Link>
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
                        <Link
                          key={languages.id}
                          href={`/browse?language=${languages.id}`}
                          className="block md:hover:underline"
                        >
                          {languages.language}
                        </Link>
                      )
                  )}
                </div>
              </div>
              <div className="flex justify-between gap-x-2">
                <h4>Format</h4>
                <p className="text-sm text-end">{movieData.format}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col col-span-4">
            <h1 className="pb-3">{`${movieData.title} (${movieData.date_1})`}</h1>
            <Rating rating={movieData.rating} />
            <h2 className="mt-4">
              {getDirectors(movieData.people).map(({ name, id }) => (
                <Link
                  key={id}
                  href={`/person/${id}`}
                  className="md:hover:underline mr-4"
                >
                  {name}
                </Link>
              ))}
            </h2>
            <div className="flex gap-2 my-4 flex-wrap">
              {movieData.categories.map(({ categories }) => {
                return (
                  <Link
                    key={categories?.id}
                    href={`/browse?category=${categories?.id}`}
                    className="border p-2 md:hover:underline"
                  >
                    {categories?.description}
                  </Link>
                );
              })}
            </div>
            <div className="mb-4">
              <h3>Cast</h3>
              <div>
                {getNonDirectors(movieData.people).map(({ name, id }) => (
                  <Link
                    key={id}
                    className="mr-4 md:hover:underline"
                    href={`/person/${id}`}
                  >
                    {name}
                  </Link>
                ))}
              </div>
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
