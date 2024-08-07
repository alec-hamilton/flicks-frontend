import MovieCarousel from "./MovieCarousel";
import { createClient } from "@/lib/supabase/server";

const FeaturedFilms = async () => {
  const supabase = createClient();

  const { data: featuredFilms, error: featuredError } = await supabase
    .from("titles")
    .select("*")
    .eq("is_fave", true);

  const { data: strapline, error: straplineError } = await supabase
    .from("featured")
    .select("description")
    .single();

  if (featuredError) return <p>{featuredError.message}</p>;
  if (straplineError) return <p>{straplineError.message}</p>;

  return (
    <section className="p-4 md:p-6 my-4 md:my-6 border border-foreground bg-layer2">
      <h2 className="pb-4 md:pb-6">Featured films</h2>
      <MovieCarousel
        movies={featuredFilms}
        description={strapline.description ?? ""}
      />
    </section>
  );
};

export default FeaturedFilms;
