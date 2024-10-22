import i18nConfig from "@/i18nConfig";
import "server-only";
import { DataType } from "./dictionaries/type";

const dictionaries: Record<string, () => Promise<DataType>> = {
  ...Object.fromEntries(
    i18nConfig.locales.map((locale) => [
      locale,
      () =>
        import(`./dictionaries/${locale}.json`).then(
          (module) => module.default
        ),
    ])
  ),
};

export const getDictionary = async (locale: string): Promise<DataType> => {
  const dictionaryLoader = dictionaries[locale];
  if (!dictionaryLoader) {
    throw new Error(`Dictionary for locale "${locale}" not found.`);
  }
  return dictionaryLoader();
};
