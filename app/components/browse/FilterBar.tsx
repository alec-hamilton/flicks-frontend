"use client";

import { MultiSelect } from "@/components/ui/multi-select";
import type { Tables } from "@/types/database.types";
import { useState } from "react";

type FilterBarProps = {
  category: Tables<"category">[];
};

const FilterBar = ({ category }: FilterBarProps) => {
  const options = category.map((cat) => {
    return { label: cat.description, value: cat.id.toString() };
  });
  
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <MultiSelect
      options={options}
      onValueChange={setSelected}
      defaultValue={selected}
    />
  );
};

export default FilterBar;
