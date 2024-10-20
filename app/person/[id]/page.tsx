import Results from "@/app/components/browse/Results";
import { createClient } from "@/utils/supabase/server";

type PersonPageProps = {
  params: {
    id: string;
  };
};

export const generateMetadata = async ({ params }: PersonPageProps) => {
  const { personData } = await fetchPerson(params.id);

  if (!personData) return;

  return {
    title: `${personData.forename} ${personData.surname} - 20th Century Flicks`,
    description: `Rent ${personData.forename} ${personData.surname}'s movies from 20th Century Flicks, the longest running movie store in the world. Rent locally or by post.`,
  };
};

const fetchPerson = async (id: string) => {
  const supabase = createClient();

  const { data: personData, error: personError } = await supabase
    .from("people")
    .select("forename, surname, titles!inner(id)")
    .eq("id", id)
    .single();

  return { personData, personError };
};

const fetchTitles = async (id: string) => {
  const supabase = createClient();
  const { data: titlesData, error: titlesError } = await supabase
    .from("titles")
    .select("*, people!inner(id)")
    .eq("people.id", id)
    .order("date_1", { ascending: false });

  return { titlesData, titlesError };
};

const Person = async ({ params: { id } }: PersonPageProps) => {
  const { personData, personError } = await fetchPerson(id);
  const { titlesData, titlesError } = await fetchTitles(id);

  if (personError) return <p>{personError.message}</p>;
  if (titlesError) return <p>{titlesError.message}</p>;

  if (personData && titlesData)
    return (
      <>
        <h1>
          {personData.forename} {personData.surname}
        </h1>
        <p>Credited in {titlesData.length} movies</p>
        <div className="mt-4 flex flex-col divide-y divide-foreground/20">
          <Results results={titlesData}></Results>
        </div>
      </>
    );
};

export default Person;
