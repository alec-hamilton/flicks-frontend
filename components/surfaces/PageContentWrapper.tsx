import type { ChildrenProps } from "@/types/children.types";

const PageContentWrapper = ({ children }: ChildrenProps) => {
  return (
    <div className="border border-foreground m-2 xs:m-4 p-4 md:p-6 bg-layer1">
      {children}
    </div>
  );
};

export default PageContentWrapper;
