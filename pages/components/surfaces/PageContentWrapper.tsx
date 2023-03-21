const PageContentWrapper = ({ children }: ChildrenProps) => {
  return (
    <div className="border border-primary m-2 xs:m-3 bg-black1">{children}</div>
  );
};

export default PageContentWrapper;
