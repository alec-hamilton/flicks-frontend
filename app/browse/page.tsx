import PageContentWrapper from "@/components/surfaces/PageContentWrapper";
import FilterBar from "../components/browse/FilterBar";
import { createClient } from "@/lib/supabase/server";

const Browse = async () => {
  const supabase = createClient();
  const { data: categories, error: categoriesError } = await supabase
    .from("categories")
    .select("*")
    .order("description", { ascending: true });
  const { data: languages, error: languagesError } = await supabase
    .from("languages")
    .select("*")
    .order("language", { ascending: true });
  const { data: nationalities, error: nationalitiesError } = await supabase
    .from("nationalities")
    .select("*")
    .order("country", { ascending: true });

  if (categoriesError) return <p>{categoriesError.message}</p>;
  if (languagesError) return <p>{languagesError.message}</p>;
  if (nationalitiesError) return <p>{nationalitiesError.message}</p>;
  
  return (
    <PageContentWrapper>
      <h1 className="mb-4">Browse</h1>
      <FilterBar
        categories={categories}
        languages={languages}
        nationalities={nationalities}
      />
    </PageContentWrapper>
  );
};

export default Browse;
