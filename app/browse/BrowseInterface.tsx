"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import CustomPagination from "@/components/pagination/CustomPagination";
import LoadingSpinner from "@/components/spinners/LoadingSpinner";
import Results from "./Results";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { Tables } from "@/types/database.types";

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

  const PER_PAGE = "10" as const;
  const PAGE = "1" as const;

  // store filter selections in the URL so the user can use the back button and be presented with same results.
  const selectedCategory = searchParams.get("category") ?? "";
  const selectedLanguage = searchParams.get("language") ?? "";
  const selectedNationality = searchParams.get("nationality") ?? "";
  const page = searchParams.get("page") ?? PAGE;
  const perPage = searchParams.get("perPage") ?? PER_PAGE;

  const [results, setResults] = useState<Tables<"titles">[]>([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  const start = (Number(page) - 1) * Number(perPage);
  const end = start + Number(perPage) - 1;

  // whenever a user changes their filters, fire a request to supabase for fresh data.
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

      // if a category, language or nationality has been chosen, add it to the supabase query.
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

  const getPageHref = (pageNum: number) => {
    return `/browse?category=${selectedCategory}&language=${selectedLanguage}&nationality=${selectedNationality}&page=${pageNum}&perPage=${perPage}`;
  };

  return (
    <>
      <div className="flex flex-wrap sm:flex-nowrap gap-2">
        <Select
          onValueChange={(value: string) =>
            router.push(
              `?category=${value}&language=${selectedLanguage}&nationality=${selectedNationality}&page=1&perPage=${perPage}`
            )
          }
          value={selectedCategory === "" ? "" : selectedCategory}
        >
          <SelectTrigger>
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map(({ description, id }) => (
              <SelectItem value={id.toString()} key={id}>
                {description}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          onValueChange={(value: string) =>
            router.push(
              `?category=${selectedCategory}&language=${value}&nationality=${selectedNationality}&page=1&perPage=${perPage}`
            )
          }
          value={selectedLanguage === "" ? "" : selectedLanguage}
        >
          <SelectTrigger>
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent>
            {languages.map(({ language, id }) => (
              <SelectItem value={id.toString()} key={id}>
                {language}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          onValueChange={(value: string) =>
            router.push(
              `?category=${selectedCategory}&language=${selectedLanguage}&nationality=${value}&page=1&perPage=${perPage}`
            )
          }
          value={selectedNationality === "" ? "" : selectedNationality}
        >
          <SelectTrigger>
            <SelectValue placeholder="Nationality" />
          </SelectTrigger>
          <SelectContent>
            {nationalities.map(({ country, id }) => (
              <SelectItem value={id.toString()} key={id}>
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
        {loading ? <LoadingSpinner /> : <Results results={results} />}
      </div>
      <CustomPagination
        currentPage={Number(page)}
        count={count}
        perPage={Number(perPage)}
        getPageHref={getPageHref}
      />
    </>
  );
};

export default BrowseInterface;
