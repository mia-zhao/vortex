import { ModeToggle } from "../theme/theme-toggle";
import Logo from "../../public/logo.svg";
import { SECTION_IDS } from "@/lib/constants";

export default function Header() {
  return (
    <header className="shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center text-primary mb-4 sm:mb-0">
          <Logo
            alt="Logo"
            className="mr-2 w-6 h-6 stroke-current text-primary"
          />
          <span className="font-bold text-2xl">Vortex</span>
        </div>
        <nav className="flex items-center">
          <ul className="flex flex-wrap items-center justify-center space-x-6">
            <li>
              <a href="/" className="header-link">
                Home
              </a>
            </li>
            <li>
              <a href={`/#${SECTION_IDS.FEATURES}`} className="header-link">
                Features
              </a>
            </li>
            <li>
              <a href={`/#${SECTION_IDS.PRICING}`} className="header-link">
                Pricing
              </a>
            </li>
            <li>
              <a href="/blog" className="header-link">
                Blog
              </a>
            </li>
            <li>
              <ModeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
