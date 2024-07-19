"use client";

import Search from "@/components/search/Search";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BiSearch } from "react-icons/bi";

const NavSearchButton = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <button
            type="button"
            className="border border-foreground lg:border-fuchsia-400 lg:hover:bg-fuchsia-400/20 px-4 bg-layer1 w-[42px] xs:w-[62px] lg:w-auto"
            aria-label="Search"
          >
            <span className="flex gap-4 items-center justify-center">
              <span>
                <BiSearch
                  size="1.5rem"
                  className="text-foreground lg:text-fuchsia-400"
                />
              </span>
              <span className="font-bold text-fuchsia-400 hidden lg:block">
                Search
              </span>
            </span>
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Search the catalogue</DialogTitle>
            <Search />
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default NavSearchButton;
