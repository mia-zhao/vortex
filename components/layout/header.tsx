"use client";

import { ModeToggle } from "../theme/theme-toggle";
import Logo from "../../public/logo.svg";
import { useLocale } from "@/context/locale-context";
import LanguageSelector from "../locale/language-selector";

export default function Header() {
  const { header } = useLocale();

  return (
    <header className="shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center text-primary mb-4 sm:mb-0">
          <Logo
            alt="Logo"
            className="mr-2 w-6 h-6 stroke-current text-primary"
          />
          <span className="font-bold text-2xl">{header.siteName}</span>
        </div>
        <nav className="flex items-center">
          <ul className="flex flex-wrap items-center justify-center space-x-6">
            {header.menu.map(({ id, name }) => (
              <li key={id}>
                <a
                  href={
                    id === "home" ? "/" : id === "blog" ? "/blog" : `/#${id}`
                  }
                  className="header-link"
                >
                  {name}
                </a>
              </li>
            ))}
            <li>
              <ModeToggle />
            </li>
            <li>
              <LanguageSelector />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
