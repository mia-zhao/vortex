"use client";
import React, { createContext, useContext, ReactNode } from "react";
import { DataType } from "../app/[lang]/dictionaries/type";

interface LocaleProviderProps {
  children: ReactNode;
  locale: DataType;
}

const LocaleContext = createContext<DataType | null>(null);

export type { DataType };

export const LocaleProvider: React.FC<LocaleProviderProps> = ({
  children,
  locale,
}) => {
  return (
    <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
  );
};

export const useLocale = (): DataType => {
  const context = useContext(LocaleContext);
  if (context === null) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
};
