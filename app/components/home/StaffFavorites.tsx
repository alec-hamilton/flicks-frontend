import MovieCarousel from "./MovieCarousel";
import { createClient } from "@/lib/supabase/server";

const StaffFavorites = async () => {
  const supabase = createClient();

  const { data: staffFavourites, error } = await supabase
    .from("titles")
    .select("*")
    .eq("is_fave", true);

  if (error) return <p>{error.message}</p>;

  return (
    <section className="p-4 md:p-6 my-4 md:my-6 border border-foreground bg-layer2">
      <h2 className="pb-4 md:pb-6">Staff favorites</h2>
      <MovieCarousel movies={staffFavourites} />
    </section>
  );
};

export default StaffFavorites;
