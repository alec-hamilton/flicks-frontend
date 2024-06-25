import Image from "next/image";
import Link from "next/link";

const StaffFavorites = () => {
  return (
    <section className="p-4 md:p-6 my-4 md:my-6 border border-foreground bg-layer2">
      <h2 className="pb-4 md:pb-6">Staff favorites</h2>
      <div className="flex flex-col gap-4 sm:gap-6 sm:flex-row">
        <div className="relative w-full min-w-[15rem] aspect-[100/149] self-start">
          <Link href="/movie/tt0083658">
            <Image
              src="https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
              alt="blade runner movie poster"
              fill
              className="border border-foreground"
            />
          </Link>
        </div>
        <div className="flex flex-col gap-2 sm:gap-4">
          <Link href="/movie/tt0083658">
            <h3 className="underline lg:hover:text-fuchsia-400">
              Blade runner
            </h3>
          </Link>
          <p>
            A blade runner must pursue and terminate four replicants who stole a
            ship in space and have returned to Earth to find their creator. A
            blade runner must pursue and terminate four replicants who stole a
            ship in space and have returned to Earth to find their creator.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StaffFavorites;
