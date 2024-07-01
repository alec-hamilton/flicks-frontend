import { createClient } from "@/lib/supabase/server";
import MovieCarousel from "./MovieCarousel";

const NewToRent = async () => {
  const supabase = createClient();

  const { data: latestMovies, error } = await supabase
    .from("titles")
    .select("*")
    .order("id", { ascending: false })
    .limit(5);

  if (error) return <p>{error.message}</p>;

  return (
    <section className="p-4 md:p-6 my-4 md:my-6 border border-foreground bg-layer2">
      <h2 className="pb-4 md:pb-6">New to rent</h2>
      <MovieCarousel movies={latestMovies} />
    </section>
  );
};

export default NewToRent;
