import PageContentWrapper from "@/components/surfaces/PageContentWrapper";
import FilterBar from "../components/browse/FilterBar";
import { supabase } from "@/lib/supabase";

const Browse = async () => {
  const { data: category, error } = await supabase.from("category").select("*");

  return (
    <PageContentWrapper>
      <h1>Browse!</h1>
      <FilterBar category={category} />
    </PageContentWrapper>
  );
};

export default Browse;
