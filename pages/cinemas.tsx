import StandardButton from "./components/buttons/StandardButton";

const Cinemas = () => {
  return (
    <div className="border border-primary m-2">
      <div className="p-4">
        <h1>Our Cinemas</h1>
        <p className="py-4">
          Our Twin Peaks-y Kino seats 8 people and The Videodrome seats up to
          18. For more details or to check availability and book a screening..
          COPY CHANGE NEEDED?
        </p>
        <div className="flex flex-col gap-2">
          <StandardButton>Book a cinema</StandardButton>
          <StandardButton>Take virtual tour</StandardButton>
        </div>
      </div>
    </div>
  );
};

export default Cinemas;
