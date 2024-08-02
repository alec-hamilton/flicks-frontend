import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Tables } from "@/types/database.types";

type AddPeopleProps = {
  roles: Tables<"roles">[];
};

const AddPeople = ({ roles }: AddPeopleProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const [searchQuery, setSearchQuery] = useState("");
  const [people, setPeople] = useState<Tables<"people">[]>([]);

  const supabase = createClient();

  useEffect(() => {
    const getPeople = async () => {
      const { data, error } = await supabase
        .from("people")
        .select("*")
        .textSearch("fts", encodeURIComponent(searchQuery).replace(/%20/g, "+"))
        .limit(10);
      if (error) throw Error("Error fetching people when searching");
      setPeople(data ?? []);
    };

    getPeople();
  }, [supabase, searchQuery]);
  return (
    <div className="flex">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {value
              ? people.find((person) => person.id === parseInt(value))
                  ?.full_name
              : "Select person"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command shouldFilter={false}>
            <CommandInput
              value={searchQuery}
              onValueChange={setSearchQuery}
              placeholder="Search people..."
            />
            <CommandEmpty>No one found.</CommandEmpty>
            <CommandList>
              <CommandGroup>
                {people.map((person) => (
                  <CommandItem
                    key={person.id}
                    value={person.id.toString()}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === person.id.toString()
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {person.full_name}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a role" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {roles.map((role) => {
              return (
                <SelectItem value={role.id.toString()} key={role.id}>
                  {role.role_name}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button disabled={value === ""} type="button">
        Add another
      </Button>
    </div>
  );
};

export default AddPeople;
