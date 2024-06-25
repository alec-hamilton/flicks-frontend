"use client";

import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import { MultiSelect } from "@/components/ui/multi-select";
import type { Tables } from "@/types/database.types";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Results from "./Results";
import { useSearchParams, useRouter } from "next/navigation";

type FilterBarProps = {
  categories: Tables<"categories">[];
  languages: Tables<"languages">[];
  nationalities: Tables<"nationalities">[];
};

const BrowseInterface = ({
  categories,
  languages,
  nationalities,
}: FilterBarProps) => {
  const supabase = createClient();
  const searchParams = useSearchParams();
  const router = useRouter();

  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<string[]>([]);
  const [selectedNationality, setSelectedNationality] = useState<string[]>([]);

  const [results, setResults] = useState<Tables<"titles">[]>([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  const page = searchParams.get("page") ?? "1";
  const perPage = searchParams.get("perPage") ?? "10";
  const start = (Number(page) - 1) * Number(perPage);
  const end = start + Number(perPage) - 1;

  const categoriesList = categories.map((category) => {
    return { label: category.description, value: category.id.toString() };
  });

  const languagesList = languages.map((language) => {
    return { label: language.language, value: language.id.toString() };
  });

  const nationalitiesList = nationalities.map((nationality) => {
    return { label: nationality.country, value: nationality.id.toString() };
  });

  const applyFilters = async () => {
    setLoading(true);
    const { data, error, count } = await supabase
      .rpc(
        "get_titles_by_nationality_language_or_cat_ids",
        {
          cat_ids: selectedCategory.map((id) => parseInt(id)),
          language_ids: selectedLanguage.map((id) => parseInt(id)),
          nationality_ids: selectedNationality.map((id) => parseInt(id)),
        },
        { count: "exact" }
      )
      .range(start, end).order("id", { ascending: true });

    setResults(data ?? []);
    setCount(count ?? 0);
    setLoading(false);
  };

  const handleNextPage = () => {
    if (Number(page) < Math.ceil(count / Number(perPage))) {
      router.push(
        `/browse?page=${Number(page) + 1}&perPage=${Number(perPage)}`
      );
    }
  };

  const handlePreviousPage = () => {
    if (Number(page) > 1) {
      router.push(
        `/browse?page=${Number(page) - 1}&perPage=${Number(perPage)}`
      );
    }
  };

  useEffect(() => {
    applyFilters();
  }, [page]);

  return (
    <>
      <div className="flex flex-wrap sm:flex-nowrap gap-2">
        <MultiSelect
          options={categoriesList}
          onValueChange={setSelectedCategory}
          defaultValue={selectedCategory}
          placeholder="Category"
          maxCount={1}
        />
        <MultiSelect
          options={languagesList}
          onValueChange={setSelectedLanguage}
          defaultValue={selectedLanguage}
          placeholder="Language"
          maxCount={1}
        />
        <MultiSelect
          options={nationalitiesList}
          onValueChange={setSelectedNationality}
          defaultValue={selectedNationality}
          placeholder="Nationality"
          maxCount={1}
        />
        <Button
          onClick={() => applyFilters()}
          variant="secondary"
          className="w-full sm:w-auto h-auto"
        >
          Apply
        </Button>
      </div>
      <div className="mt-4 flex flex-col divide-y divide-foreground/20">
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
