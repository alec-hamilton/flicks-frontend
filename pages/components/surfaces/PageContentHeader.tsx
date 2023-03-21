import StandardButton from "../buttons/StandardButton";

type PageContentHeaderProps = {
  title: string;
  text: string;
  buttonOneText: string;
  buttonTwoText?: string;
  children: React.ReactNode;
};

const PageContentHeader = ({
  title,
  text,
  buttonOneText,
  buttonTwoText,
  children,
}: PageContentHeaderProps) => {
  return (
    <section>
      <h1>{title}</h1>
      <div className="flex flex-col my-4 md:my-6 sm:flex-row sm:gap-6">
        <div className="flex flex-col sm:py-2">
          <p className="pb-4 sm:pb-8">{text}</p>
          <div className="flex flex-col gap-3 mb-4 sm:mb-1 sm:flex-row">
            <StandardButton>{buttonOneText}</StandardButton>
            <StandardButton>{buttonTwoText}</StandardButton>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
};

export default PageContentHeader;
