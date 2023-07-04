import { Metadata } from "next";
import Image from "next/image";
import betty from "@/assets/images/betty-blue.jpg";
import PageContentWrapper from "@/components/surfaces/PageContentWrapper";
import ExternalLink from "@/components/links/ExternalLink";
import StandardButton from "@/components/buttons/StandardButton";
import PageContentHeader from "@/components/surfaces/PageContentHeader";

export const metadata: Metadata = {
  title: "My Page Title",
};

export default function Page() {
  return (
    <PageContentWrapper>
      <PageContentHeader
        title="Welcome to 20th Century Flicks"
        text="We are the longest running video shop in this world. Serving
        Bristol and beyond with movies since 1982."
        imageSrc={betty}
        imageAlt="Movie poster image of betty from betty blue"
      >
        <ExternalLink href="https://cal.smoothbook.co/20thcflicks">
          <StandardButton>Book a cinema</StandardButton>
        </ExternalLink>
      </PageContentHeader>
    </PageContentWrapper>
  );
}
