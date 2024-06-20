import PageContentWrapper from "@/components/surfaces/PageContentWrapper";
import FilterBar from "../components/browse/FilterBar";
import { supabase } from "@/lib/supabase";

const Browse = async () => {
  const { data: categories, error: categoriesError } = await supabase.from("categories").select("*").order("description", { ascending: true });
  const { data: languages, error: languagesError } = await supabase.from("languages").select("*").order("language", { ascending: true });
  
  if (categoriesError) return <p>{categoriesError.message}</p>;
  if (languagesError) return <p>{languagesError.message}</p>;

  return (
    <PageContentWrapper>
      <h1>Browse!</h1>
      <FilterBar categories={categories} languages={languages}/>
    </PageContentWrapper>
  );
};

export default Browse;
