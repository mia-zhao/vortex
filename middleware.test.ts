import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, middleware } from "./middleware";

const redirectSpy = jest.spyOn(NextResponse, "redirect");

jest.mock("next/server", () => {
  const actualNextServer = jest.requireActual("next/server");
  return {
    ...actualNextServer,
    NextRequest: jest.fn().mockImplementation((url, { headers }) => ({
      nextUrl: {
        pathname: url.pathname || "",
      },
      headers: {
        get: jest.fn().mockImplementation((key) => {
          if (key === "accept-language") {
            return headers.acceptLanguage || "";
          }
          return null;
        }),
      },
    })),
  };
});

describe("Middleware Tests", () => {
  beforeEach(() => {
    redirectSpy.mockReset();
  });

  describe("when the 'accept-language' header is missing", () => {
    it("should not redirect when the user accesses the default locale path", () => {
      const url = new URL(`/${defaultLocale}`, "http://localhost:3000");
      const req = new NextRequest(url, {
        headers: { "accept-language": "" },
      });

      middleware(req);

      expect(redirectSpy).not.toHaveBeenCalled();
    });

    it("should not redirect when the user accesses a valid localized path (/es)", () => {
      const url = new URL("/es", "http://localhost:3000");
      const req = new NextRequest(url, { headers: { acceptLanguage: "" } });

      middleware(req);

      expect(redirectSpy).not.toHaveBeenCalled();
    });

    it("should redirect to the default locale path when the user accesses an unsupported localized path (/th)", () => {
      const url = new URL("/th/page", "http://localhost:3000");
      const req = new NextRequest(url, { headers: { acceptLanguage: "" } });

      middleware(req);

      expect(redirectSpy).toHaveBeenCalledWith({
        pathname: `/${defaultLocale}/page`,
      });
    });

    it("should redirect to the default locale path when the user accesses the root path /", () => {
      const url = new URL("/", "http://localhost:3000");
      const req = new NextRequest(url, { headers: { acceptLanguage: "" } });

      middleware(req);

      expect(redirectSpy).toHaveBeenCalledWith({
        pathname: `/${defaultLocale}`,
      });
    });
  });

  describe("when the 'accept-language' header is set to the default language", () => {
    it("should not redirect when the user accesses a valid localized path (/es)", () => {
      const url = new URL("/es", "http://localhost:3000");
      const req = new NextRequest(url, {
        headers: { acceptLanguage: defaultLocale },
      });

      middleware(req);

      expect(redirectSpy).not.toHaveBeenCalled();
    });

    it(`should not redirect when the user accesses the default locale path (/${defaultLocale})`, () => {
      const url = new URL(`/${defaultLocale}`, "http://localhost:3000");
      const req = new NextRequest(url, {
        headers: { acceptLanguage: defaultLocale },
      });

      middleware(req);

      expect(redirectSpy).not.toHaveBeenCalled();
    });

    it(`should redirect to the default locale path when the user accesses an unsupported locale path (/th)`, () => {
      const url = new URL(`/th/page`, "http://localhost:3000");
      const req = new NextRequest(url, {
        headers: { acceptLanguage: defaultLocale },
      });

      middleware(req);

      expect(redirectSpy).toHaveBeenCalledWith({
        pathname: `/${defaultLocale}/page`,
      });
    });

    it("should redirect to the default locale path when the user accesses the root path /", () => {
      const url = new URL("/", "http://localhost:3000");
      const req = new NextRequest(url, {
        headers: { acceptLanguage: defaultLocale },
      });

      middleware(req);

      expect(redirectSpy).toHaveBeenCalledWith({
        pathname: `/${defaultLocale}`,
      });
    });
  });

  describe("when the 'accept-language' header is set to a non-default language", () => {
    it("should not redirect when the user accesses a valid non-default locale (/fr)", () => {
      const url = new URL("/fr", "http://localhost:3000");
      const req = new NextRequest(url, { headers: { acceptLanguage: "es" } });

      middleware(req);

      expect(redirectSpy).not.toHaveBeenCalled();
    });

    it("should not redirect when the user accesses the default locale path", () => {
      const url = new URL(`/${defaultLocale}`, "http://localhost:3000");
      const req = new NextRequest(url, { headers: { acceptLanguage: "es" } });

      middleware(req);

      expect(redirectSpy).not.toHaveBeenCalled();
    });

    it(`should not redirect when the user accesses the preferred locale path (/es)`, () => {
      const url = new URL("/es", "http://localhost:3000");
      const req = new NextRequest(url, { headers: { acceptLanguage: "es" } });

      middleware(req);

      expect(redirectSpy).not.toHaveBeenCalled();
    });

    it(`should redirect to the user preferred locale path when accessing an unsupported locale path (/th)`, () => {
      const url = new URL(`/th/page`, "http://localhost:3000");
      const req = new NextRequest(url, {
        headers: { acceptLanguage: "es" },
      });

      middleware(req);

      expect(redirectSpy).toHaveBeenCalledWith({ pathname: "/es/page" });
    });

    it("should redirect to the preferred locale path when the user accesses the root path /", () => {
      const url = new URL("/", "http://localhost:3000");
      const req = new NextRequest(url, { headers: { acceptLanguage: "es" } });

      middleware(req);

      expect(redirectSpy).toHaveBeenCalledWith({
        pathname: `/es`,
      });
    });
  });
});
