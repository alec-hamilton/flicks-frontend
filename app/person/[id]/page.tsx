import PageContentWrapper from "@/components/surfaces/PageContentWrapper";
import { createClient } from "@/lib/supabase/server";

const fetchPerson = async (id: string) => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("people")
    .select("forename, surname")
    .eq("id", id)
    .single();

  return { data, error };
};

type PersonPageProps = {
  params: {
    id: string;
  };
};

const Person = async ({ params: { id } }: PersonPageProps) => {
  const supabase = createClient();

  const { data: personData, error: personError } = await supabase
    .from("people")
    .select("forename, surname")
    .eq("id", id)
    .single();

  const { data: titles, error: titlesError } = await supabase
    .from("titles")
    .select("*, people!inner(id)")
    .eq("people.id", id)
    .order("date_1", { ascending: false });

  if (personError) return <p>{personError.message}</p>;
  if (titlesError) return <p>{titlesError.message}</p>;

  if (personData && titles)
    return (
      <PageContentWrapper>
        <h1>
          {personData.forename} {personData.surname}
        </h1>
        {titles.map((title) => {
          return (
            <div key={title.id}>
              {title.title} {title.date_1}
            </div>
          );
        })}
      </PageContentWrapper>
    );
};

export default Person;
