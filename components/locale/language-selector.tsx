"use client";

import React, { useEffect, useState } from "react";
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
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import i18nConfig from "@/i18nConfig";

const { locales } = i18nConfig;

const LanguageSelector: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    const pathname =
      typeof window !== "undefined" ? window.location.pathname : "";
    setValue(pathname.split("/").slice(1, 2).join("") || "");
  }, []);

  const handleValueChange = (value: string) => {
    window.location.href = `/${value}`;
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value !== "" ? value : "Select Language..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search Language..." />
          <CommandList>
            <CommandEmpty>No Language found.</CommandEmpty>
            <CommandGroup>
              {locales.map((locale) => (
                <CommandItem
                  key={locale}
                  value={locale}
                  onSelect={(currentValue) => {
                    setValue(currentValue);
                    handleValueChange(currentValue);
                    setOpen(false);
                  }}
                  //   className={`hover:bg-accent ${
                  //     value === locale ? "bg-accent" : "bg-black"
                  //   }`}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === locale ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {locale}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default LanguageSelector;
