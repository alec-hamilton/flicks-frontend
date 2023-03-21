import Image from "next/image";
import PageContentWrapper from "../components/surfaces/PageContentWrapper";
import StandardButton from "../components/buttons/StandardButton";
import shopFront from "../../assets/images/bladerunner-style-movie-store.png";

const TheShop = () => {
  return (
    <PageContentWrapper>
      <section>
        <h1>The Shop</h1>
        <div className="flex flex-col sm:flex-row sm:gap-6">
          <div className="flex flex-col sm:py-2">
            <p className="py-4 sm:pb-8">
              Our Twin Peaks-y Kino seats 8 people and The Videodrome seats up
              to 18. For more details or to check availability and book a
              screening.. COPY CHANGE NEEDED?
            </p>
            <div className="flex flex-col gap-3 mb-4 sm:mb-1 sm:flex-row">
              <StandardButton>Browse our collection</StandardButton>
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
      <div className="flex flex-col gap-4 my-4 md:my-6 sm:flex-row sm:gap-6">
        <section className="p-4 md:p-6 border border-primary bg-black2 sm:w-6/12">
          <h2 className="pb-4">Address</h2>
          <address className="not-italic">
            <p>20th Century Flicks</p>
            <p>19 Christmas Steps</p>
            <p>Bristol</p>
            <p>BS1 5BS</p>
          </address>
        </section>
        <section className="p-4 md:p-6 border border-primary bg-black2 sm:w-6/12">
          <h2 className="pb-4">Opening times</h2>
          <p>
            Unfixed for the time being! Usually Dave is in 4ish til 7ish pm,
            Monday to Thursday and PG is in Friday evenings and Saturday and
            Sunday daytimes. Phone or email to check!
          </p>
        </section>
      </div>
      <section className="p-4 md:p-6 border border-primary bg-black2">
        <h2 className="pb-4">Accessibility</h2>
        <p>
          The shop is on Christmas Steps, a historic, cobbled pedestrian street
          in the centre of Bristol. There are 22 steps up to the shop from
          Colston Avenue and 25 steps down to the shop from Colston Street.
          There is a loading bay at the bottom of the Christmas Steps on Colston
          Avenue which can be used as a parking space to drop off or pick up
          movies from the shop. The steps are uneven and there isn’t a handrail.
          This is because the street is historical and listed and can’t be
          changed! In the shop, we have chairs for customers. We have a urinal
          and a toilet at the shop. There is one step to the urinal and 5 to the
          toilet. The shop can be very busy on Saturdays, the weekdays are much
          quieter.
        </p>
      </section>
    </PageContentWrapper>
  );
};

export default TheShop;
