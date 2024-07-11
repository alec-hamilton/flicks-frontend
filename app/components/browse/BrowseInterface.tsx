"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Tables } from "@/types/database.types";
import { Metadata } from "next";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Results from "./Results";
import { useSearchParams, useRouter } from "next/navigation";
import { globalConstants } from "@/constants/globalConstants";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const {
  browse: { metaTitle, metaDescription },
} = globalConstants;

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
};

type BrowseInterfaceProps = {
  categories: Tables<"categories">[];
  languages: Tables<"languages">[];
  nationalities: Tables<"nationalities">[];
};

const BrowseInterface = ({
  categories,
  languages,
  nationalities,
}: BrowseInterfaceProps) => {
  const supabase = createClient();
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedCategory = searchParams.get("category") ?? "";
  const selectedLanguage = searchParams.get("language") ?? "";
  const selectedNationality = searchParams.get("nationality") ?? "";
  const page = searchParams.get("page") ?? "1";
  const perPage = searchParams.get("perPage") ?? "10";

  const [results, setResults] = useState<Tables<"titles">[]>([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  const start = (Number(page) - 1) * Number(perPage);
  const end = start + Number(perPage) - 1;

  const handleNextPage = () => {
    if (Number(page) < Math.ceil(count / Number(perPage))) {
      router.push(
        `/browse?category=${selectedCategory}&language=${selectedLanguage}&nationality=${selectedNationality}&page=${
          Number(page) + 1
        }&perPage=${Number(perPage)}`
      );
    }
  };

  const handlePreviousPage = () => {
    if (Number(page) > 1) {
      router.push(
        `/browse?category=${selectedCategory}&language=${selectedLanguage}&nationality=${selectedNationality}&page=${
          Number(page) - 1
        }&perPage=${Number(perPage)}`
      );
    }
  };

  useEffect(() => {
    const applyFilters = async () => {
      setLoading(true);

      let query = supabase
        .from("titles")
        .select(
          "*, categories!inner(id), languages!inner(id), nationalities!inner(id)",
          { count: "exact" }
        )
        .range(start, end)
        .order("id", { ascending: false });

      if (selectedCategory) {
        query = query.eq("categories.id", selectedCategory);
      }

      if (selectedLanguage) {
        query = query.eq("languages.id", selectedLanguage);
      }

      if (selectedNationality) {
        query = query.eq("nationalities.id", selectedNationality);
      }

      const { data, error, count } = await query;

      if (error) {
        setLoading(false);
        throw new Error(error.message);
      }

      setResults(data ?? []);
      setCount(count ?? 0);
      setLoading(false);
    };

    applyFilters();
  }, [
    page,
    selectedCategory,
    selectedLanguage,
    selectedNationality,
    end,
    start,
    supabase,
  ]);

  return (
    <>
      <div className="flex flex-wrap sm:flex-nowrap gap-2">
        <Select
          onValueChange={(value: number) =>
            router.push(
              `?category=${value}&language=${selectedLanguage}&nationality=${selectedNationality}&page=1&perPage=${perPage}`
            )
          }
          value={selectedCategory === "" ? "" : parseInt(selectedCategory)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map(({ description, id }) => (
              <SelectItem value={id} key={id}>
                {description}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          onValueChange={(value: number) =>
            router.push(
              `?category=${selectedCategory}&language=${value}&nationality=${selectedNationality}&page=1&perPage=${perPage}`
            )
          }
          value={selectedLanguage === "" ? "" : parseInt(selectedLanguage)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent>
            {languages.map(({ language, id }) => (
              <SelectItem value={id} key={id}>
                {language}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          onValueChange={(value: number) =>
            router.push(
              `?category=${selectedCategory}&language=${selectedLanguage}&nationality=${value}&page=1&perPage=${perPage}`
            )
          }
          value={
            selectedNationality === "" ? "" : parseInt(selectedNationality)
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Nationality" />
          </SelectTrigger>
          <SelectContent>
            {nationalities.map(({ country, id }) => (
              <SelectItem value={id} key={id}>
                {country}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Link href="/browse">
          <Button variant="secondary">Clear</Button>
        </Link>
      </div>
      <div className="mt-4 flex flex-col divide-y divide-foreground/20 min-h-[900px]">
        <p className="mb-4">{count} movies found</p>
        {loading ? <p>Loading</p> : <Results results={results} />}
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={() => handlePreviousPage()} />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext onClick={() => handleNextPage()} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};

export default BrowseInterface;
