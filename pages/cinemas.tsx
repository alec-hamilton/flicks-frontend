import Image from "next/image";
import StandardButton from "./components/buttons/StandardButton";
import twinPeaksCinema from "../assets/images/twin-peaks-style-cinema.png";
import videodromeCinema from "../assets/images/bladerunner-style-cinema.png";
import shopFront from "../assets/images/bladerunner-style-movie-store.png";
import PageContentWrapper from "./components/surfaces/PageContentWrapper";

const Cinemas = () => {
  return (
    <PageContentWrapper>
      <section className="">
        <h1>Our Cinemas</h1>
        <div className="flex flex-col sm:flex-row sm:gap-6">
          <div className="flex flex-col sm:py-2">
            <p className="py-4 sm:pb-8">
              Our Twin Peaks-y Kino seats 8 people and The Videodrome seats up
              to 18. For more details or to check availability and book a
              screening.. COPY CHANGE NEEDED?
            </p>
            <div className="flex flex-col gap-3 mb-4 sm:mb-1 sm:flex-row">
              <StandardButton>Book a cinema</StandardButton>
              <StandardButton>Take virtual tour</StandardButton>
            </div>
          </div>
          <Image
            src={shopFront}
            alt="Movie rental store shop front in the style of bladerunner"
            className="border border-primary sm:w-4/12 sm:mt-4"
          />
        </div>
      </section>
      <section className="p-4 md:p-6 my-4 md:my-6 border border-primary bg-black2">
        <h2>The Kino</h2>
        <div className="flex flex-col sm:flex-row sm:gap-6">
          <div>
            <p className="py-4 ">
              Our Twin Peaks-y Kino seats 8 people and The Videodrome seats up
              to 18. For more details or to check availability and book a
              screening
            </p>
            <div className="mb-4">
              <StandardButton>Book the Kino</StandardButton>
            </div>
          </div>
          <Image
            src={twinPeaksCinema}
            alt="Cinema auditorium in the style of twin peaks"
            className="border border-primary sm:w-5/12 sm:mt-4"
          />
        </div>
      </section>
      <section className="p-4 md:p-6 border border-primary bg-black2">
        <h2>The Videodrome</h2>
        <div className="flex flex-col sm:flex-row sm:gap-6">
          <div>
            <p className="py-4">
              Our Twin Peaks-y Kino seats 8 people and The Videodrome seats up
              to 18. For more details or to check availability and book a
              screening
            </p>
            <div className="mb-4">
              <StandardButton>Book the Videodrome</StandardButton>
            </div>
          </div>
          <Image
            src={videodromeCinema}
            alt="Cinema auditorium in the style of twin peaks"
            className="border border-primary sm:w-5/12 sm:mt-4"
          />
        </div>
      </section>
    </PageContentWrapper>
  );
};

export default Cinemas;
