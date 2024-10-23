import "@testing-library/jest-dom";
import { NextIntlClientProvider, createTranslator } from "next-intl";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LocalePage from "./page";
import * as en from "../../messages/en.json";

jest.mock("../../public/logo.svg", () => "mocked-logo.svg");

jest.mock("next-intl", () => {
  const originalModule = jest.requireActual("next-intl");
  return {
    ...originalModule,
    useTranslations: jest.fn().mockImplementation((namespace) => {
      return createTranslator({
        locale: "en",
        messages: en,
        namespace,
      });
    }),
  };
});

test("renders /en/ with English content", async () => {
  render(
    <MemoryRouter>
      <NextIntlClientProvider locale="en">
        <LocalePage />
      </NextIntlClientProvider>
    </MemoryRouter>
  );
  const englishContents = await screen.findByText(
    /Welcome to Your Exceptional Website/i
  );
  expect(englishContents).toBeInTheDocument();
});
