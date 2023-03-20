import Image from "next/image";
import StandardButton from "./components/buttons/StandardButton";
import twinPeaksCinema from "../assets/images/twin-peaks-style-cinema.png";
import videodromeCinema from "../assets/images/bladerunner-style-cinema.png";

const Cinemas = () => {
  return (
    <div className="border border-primary m-2 bg-black1">
      <div className="p-4">
        <h1>Our Cinemas</h1>
        <p className="py-4">
          Our Twin Peaks-y Kino seats 8 people and The Videodrome seats up to
          18. For more details or to check availability and book a screening..
          COPY CHANGE NEEDED?
        </p>

        <div className="flex flex-col gap-3">
          <StandardButton>Book a cinema</StandardButton>
          <StandardButton>Take virtual tour</StandardButton>
        </div>
      </div>
      <div className="p-4 m-4 border border-primary bg-black2">
        <div>
          <h2>The Kino</h2>
          <p className="py-4">
            Our Twin Peaks-y Kino seats 8 people and The Videodrome seats up to
            18. For more details or to check availability and book a screening
          </p>
          <Image
            src={twinPeaksCinema}
            alt="Cinema auditorium in the style of twin peaks"
            className="border border-primary mb-4"
          />
          <StandardButton>Book the Kino</StandardButton>
        </div>
      </div>
      <div className="p-4 m-4 border border-primary bg-black2">
        <div>
          <h2>The Videodrome</h2>
          <p className="py-4">
            Our Twin Peaks-y Kino seats 8 people and The Videodrome seats up to
            18. For more details or to check availability and book a screening
          </p>
          <Image
            src={videodromeCinema}
            alt="Cinema auditorium in the style of bladerunner"
            className="border border-primary mb-4"
          />
          <StandardButton>Book the Videodrome</StandardButton>
        </div>
      </div>
    </div>
  );
};

export default Cinemas;
