import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Rating from "@/components/ratings/Rating";
import { createClient } from "@/lib/supabase/server";
import movieNotFound from "@/assets/images/movie-not-found.svg";

const NewToRent = async () => {
  const supabase = createClient();

  const { data: latestMovies, error } = await supabase
    .from("titles")
    .select("*")
    .order("id", { ascending: false })
    .limit(5);

  if (error) return <p>{error.message}</p>;

  const truncateReview = (review: string, length: number) => {
    return review.length > length ? `${review.substring(0, length)}...` : review;
  }

  return (
    <section className="p-4 md:p-6 my-4 md:my-6 border border-foreground bg-layer2">
      <h2 className="pb-4 md:pb-6">New to rent...</h2>
      <Carousel>
      <div className="absolute right-0 -top-7 md:-top-9 flex gap-x-2">
          <CarouselPrevious />
          <CarouselNext />
        </div>
        <CarouselContent>
          {latestMovies.map((movie) => {
            return (
              <CarouselItem
                key={movie.id}
                className="flex flex-col xs:grid grid-cols-4 gap-x-4"
              >
                <Image
                  src={movie.image_url ?? movieNotFound}
                  width="370"
                  height="430"
                  alt={`movie poster for ${movie.title}`}
                  className="border h-auto"
                />

                <div className="col-span-3 flex flex-col gap-y-2">
                  <Link href={`/movie/${movie.id}`}>
                    <h3 className="text-xl mt-4 xs:m-0">{movie.title}</h3>
                  </Link>
                  <Rating rating={movie.rating} />
                  <div className="flex divide-x divide-dotted">
                    <p className="pr-4">{movie.date_1}</p>
                    <p className="px-4">{movie.certification}</p>
                    <p className="px-4">{movie.runningtime} mins</p>
                  </div>
                  <p className="cutoff-text xs:max-sm:hidden">{movie.review}</p>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        
      </Carousel>
    </section>
  );
};

export default NewToRent;
