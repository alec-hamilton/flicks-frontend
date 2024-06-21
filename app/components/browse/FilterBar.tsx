"use client";

import { Button } from "@/components/ui/button";
import { MultiSelect } from "@/components/ui/multi-select";
import type { Tables } from "@/types/database.types";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";

type FilterBarProps = {
  categories: Tables<"categories">[];
  languages: Tables<"languages">[];
  nationalities: Tables<"nationalities">[];
};

const FilterBar = ({
  categories,
  languages,
  nationalities,
}: FilterBarProps) => {
  const supabase = createClient();

  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<string[]>([]);
  const [selectedNationality, setSelectedNationality] = useState<string[]>([]);

  const [results, setResults] = useState<Tables<"titles">[]>([]);

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
    const { data, error } = await supabase
      .rpc("get_titles_by_nationality_language_or_cat_ids", {
        cat_ids: selectedCategory,
        language_ids: selectedLanguage,
        nationality_ids: selectedNationality,
      })
      .range(0, 10);

    setResults(data);
  };

  return (
    <div>
      <div className="flex">
        <MultiSelect
          options={categoriesList}
          onValueChange={setSelectedCategory}
          defaultValue={selectedCategory}
          placeholder="Category"
        />
        <MultiSelect
          options={languagesList}
          onValueChange={setSelectedLanguage}
          defaultValue={selectedLanguage}
          placeholder="Language"
        />
        <MultiSelect
          options={nationalitiesList}
          onValueChange={setSelectedNationality}
          defaultValue={selectedNationality}
          placeholder="Nationality"
        />
        <Button onClick={applyFilters}>Apply</Button>
      </div>
      <div>
        {results.map((result) => (
          <div>
            <Link href={`/movie/${result.id}`}>{result.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
