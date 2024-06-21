import Image from "next/image";
import PageContentWrapper from "@/components/surfaces/PageContentWrapper";
import { createClient } from "@/lib/supabase/server";

type MoviePageProps = {
  params: {
    id: string;
  };
};

const API_KEY: string = process.env.OMDB_API_KEY as string;

// const fetchMovie = async (id: string) => {
//   const DATA_SOURCE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`;

//   const res = await fetch(DATA_SOURCE_URL);

//   if (!res.ok) {
//     throw new Error("Failed to fetch movie data");
//   }

//   return res.json();
// };

const fetchMovie = async (id: string) => {

  const supabase = createClient();
  const {
    data: [movieData],
    error,
  } = await supabase
    .from("titles")
    .select(
      "*, categories:titles2categories(categories(id, description)), languages:titles2languages(languages(id, language)), nationalities:titles2nationalities(nationalities(id, country)), people:titles2people(people(id, forename, surname), roles(id, role_name))"
    )
    .eq("id", id);

    return { movieData, error };
}

export const generateMetadata = async ({ params }: MoviePageProps) => {
  const {movieData} = await fetchMovie(params.id);

  // TODO: uncapitalise titles.
  return {
    title: `${movieData.title} - 20th Century Flicks`,
    description: `Rent ${movieData.title} from 20th Century Flicks, the longest running movie store in the world. Rent locally or by post.`,
  };
};

const MoviePage = async ({ params: { id } }: MoviePageProps) => {
 const { movieData, error } = await fetchMovie(id);

  const getDirectors = (entries: Entry[]): PersonWithId[] =>
    entries
      .filter((entry) => entry.roles.id === 1)
      .map((entry) => ({
        id: entry.people.id,
        name: `${entry.people.forename.trim()} ${entry.people.surname.trim()}`,
      }));

  const getNonDirectors = (entries: Entry[]): PersonWithId[] =>
    entries
      .filter((entry) => entry.roles.id > 1)
      .map((entry) => ({
        id: entry.people.id,
        name: `${entry.people.forename.trim()} ${entry.people.surname.trim()}`,
      }));

  return (
    <PageContentWrapper>
      <div className="flex flex-col-reverse md:grid md:grid-cols-6 gap-x-8">
        <div className="flex flex-col xs:grid xs:grid-cols-2 md:flex-col md:flex md:col-span-2 border border-foreground">
          {/* <Image
            src={movieData.Poster}
            width="290"
            height="430"
            alt={`movie poster for ${movieData.Title}`}
            priority
          /> */}
          <div className="flex flex-col gap-y-4 p-4 xs:max-md:border-l md:border-t border-foreground">
            <div className="flex justify-between gap-x-2">
              <h4>Cert</h4>
              <p className="text-sm text-end">
                {movieData.certification}
              </p>
            </div>
            <div className="flex justify-between gap-x-2">
              <h4>Running time</h4>
              <p className="text-sm text-end">
                {movieData.runningtime}
              </p>
            </div>
            <div className="flex justify-between gap-x-2">
              <h4>Country</h4>
              <p className="text-sm text-end">
                {movieData.nationalities.map((country) => (
                  <span>{country.nationalities.country}</span>
                ))}
              </p>
            </div>
            <div className="flex justify-between gap-x-2">
              <h4>Language</h4>
              <p className="text-sm text-end">
                {movieData.languages.map((language) => (
                  <span>{language.languages.language}</span>
                ))}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col col-span-4">
          <h1 className="pb-3">{`${movieData.title} (${movieData.date_1})`}</h1>
          <h2>
            {getDirectors(movieData.people).map((director) => (
              <span>{director.name}</span>
            ))}
          </h2>
          <div className="flex gap-x-2 my-4">
            {movieData.categories.map((category) => {
              return (
                <div
                  className="border border-foreground p-2"
                  key={category.categories.id}
                >
                  {category.categories.description}
                </div>
              );
            })}
          </div>
          <div className="mb-4">
            <h3>Cast</h3>
            <p>
              {getNonDirectors(movieData.people).map((castMember) => (
                <span>{castMember.name}</span>
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
