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
import movieNotFound from "@/assets/images/movie-not-found.svg";
import type { Tables } from "@/types/database.types";

type MovieCarouselProps = {
  movies: Tables<"titles">[];
  description?: string;
};

const MovieCarousel = ({ movies, description }: MovieCarouselProps) => {
  return (
    <Carousel>
      {description ? <p className="pb-6">{description}</p> : null}
      <div className="absolute right-0 -top-7 md:-top-9 flex gap-x-2">
        <CarouselPrevious />
        <CarouselNext />
      </div>
      <CarouselContent>
        {movies.map((movie) => {
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
                <Link
                  href={`/movie/${movie.id}`}
                  className="underline text-heading font-bold text-xl mt-4 xs:m-0 md:hover:text-fuchsia-400"
                >
                  {movie.title}
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
  );
};

export default MovieCarousel;
