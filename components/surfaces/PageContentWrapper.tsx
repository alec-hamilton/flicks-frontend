const PageContentWrapper = ({ children }: ChildrenProps) => {
  return (
    <div className="border border-primary m-2 xs:m-4 p-4 md:p-6 bg-black1">
      {children}
    </div>
  );
};

export default PageContentWrapper;
