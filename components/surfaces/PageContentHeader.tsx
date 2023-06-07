import Image, { StaticImageData } from "next/image";

type PageContentHeaderProps = {
  title: string;
  text: string;
  imageSrc: StaticImageData;
  imageAlt: string;
  children: React.ReactNode;
};

const PageContentHeader = ({
  title,
  text,
  imageSrc,
  imageAlt,
  children,
}: PageContentHeaderProps) => {
  return (
    <header>
      <h1>{title}</h1>
      <div className="flex flex-col my-4 md:my-6 sm:flex-row sm:gap-6">
        <div className="flex flex-col sm:py-2">
          <p className="pb-4 sm:pb-8">{text}</p>
          <div className="flex flex-col gap-3 mb-4 sm:mb-1 sm:flex-row">
            {children}
          </div>
        </div>
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="border border-primary sm:w-4/12"
        />
      </div>
    </header>
  );
};

export default PageContentHeader;
