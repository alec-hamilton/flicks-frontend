import { Metadata } from "next";
import PageContentWrapper from "@/components/surfaces/PageContentWrapper";
import { globalConstants } from "@/constants/globalConstants";

const {
  faqs: { faqs, metaTitle, metaDescription },
} = globalConstants;

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
};

const Faqs = () => {
  return (
    <PageContentWrapper>
      <h1>FAQs</h1>
      <div className="flex flex-col mt-6 gap-4 md:gap-6">
        {faqs.map((faq, index) => {
          return (
            <section
              key={index}
              className="border border-primary p-4 md:p-6 bg-black2"
            >
              <h2>{faq.question}</h2>
              <p className="mt-4">{faq.answer}</p>
            </section>
          );
        })}
      </div>
    </PageContentWrapper>
  );
};

export default Faqs;
