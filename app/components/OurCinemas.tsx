import Image from "next/image";
import Link from "next/link";
import twinPeaksCinema from "@/assets/images/twin-peaks-style-cinema.png";
import StandardButton from "@/components/buttons/StandardButton";
import { globalConstants } from "@/constants/globalConstants";

const {
  homePage: {
    ourCinemas: { title, sectionText },
  },
} = globalConstants;

const OurCinemas = () => {
  return (
    <section className="p-4 md:p-6 mt-4 md:mt-6 border border-primary bg-black2">
      <h2 className="pb-4 md:pb-6">{title}</h2>
      <div className="flex flex-col gap-4 sm:gap-6 sm:flex-row">
        <div className="relative w-full min-w-[15rem] aspect-square self-start">
          <Image
            src={twinPeaksCinema}
            alt="Cinema auditorium in the style of twin peaks"
            className="border border-primary"
            fill
          />
        </div>
        <div className="flex flex-col gap-4 sm:gap-6">
          <p>{sectionText}</p>
          <div className="flex flex-col gap-3">
            <Link href="/Cinemas">
              <StandardButton>Find out more</StandardButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCinemas;
