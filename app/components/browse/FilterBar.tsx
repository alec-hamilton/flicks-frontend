"use client";

import { MultiSelect } from "@/components/ui/multi-select";
import type { Tables } from "@/types/database.types";
import { useState } from "react";

type FilterBarProps = {
  categories: Tables<"categories">[];
  languages: Tables<"languages">[];
};

const FilterBar = ({ categories, languages }: FilterBarProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<string[]>([]);

  const categoriesList = categories.map((category) => {
    return { label: category.description, value: category.id.toString() };
  });

  const languagesList = languages.map((language) => {
    return { label: language.language, value: language.id.toString() };
  })

  return (
    <>
      <MultiSelect
        options={categoriesList}
        onValueChange={setSelectedCategory}
        defaultValue={selectedCategory}
      />
      <MultiSelect
        options={languagesList}
        onValueChange={setSelectedLanguage}
        defaultValue={selectedLanguage}
      />
    </>
  );
};

export default FilterBar;
