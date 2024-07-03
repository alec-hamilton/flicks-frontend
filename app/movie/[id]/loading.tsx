import PageContentWrapper from "@/components/surfaces/PageContentWrapper";
import { ImSpinner5 } from "react-icons/im";

const Loading = () => {
  return (
    <PageContentWrapper>
      <div className="min-h-[160rem] flex justify-center">
        <ImSpinner5 size="2rem" className="animate-spin mt-10" />
      </div>
    </PageContentWrapper>
  );
};

export default Loading;
