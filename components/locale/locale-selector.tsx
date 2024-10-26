"use client";

import React, { startTransition, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Locale, usePathname, useRouter } from "@/i18n/routing";
import i18nConfig from "@/i18n/config";
import { useLocale } from "next-intl";

const { locales } = i18nConfig;

export default function LocaleSelector() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const [selectedLocale, setSelectedLocale] = useState<Locale>(locale);

  const handleValueChange = (value: string) => {
    const newLocale = value as Locale;
    setSelectedLocale(newLocale);
    startTransition(() => {
      router.replace({ pathname }, { locale: newLocale });
    });
  };

  return (
    <Select value={selectedLocale} onValueChange={handleValueChange}>
      <SelectTrigger className="w-[100px] focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none">
        <SelectValue placeholder={selectedLocale} />
      </SelectTrigger>
      <SelectContent align="end">
        {locales.map((locale) => (
          <SelectItem value={locale} key={locale}>
            {locale}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
