import React, { useState } from "react";
import { isCompositeComponent } from "react-dom/test-utils";
import { useLocation } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Works" },
    { href: "/contact", label: "Contact" },
  ];
  const location = useLocation();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const getLocation = (path) => {
    return location.pathname === path
      ? "text-buttonColor"
      : "text-baseContentSecondary";
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center mt-4">
        <a href="/">
          <div className="font-poppinsSemiBold text-md flex items-center">
            Solola David
            <div className="bg-buttonColor rounded-full ml-1 h-2 w-2"></div>
          </div>
        </a>

        <ul className="hidden md:flex gap-6 font-poppinsSemiBold text-md">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`hover:text-buttonColor ${getLocation(link.href)}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              onClick={toggleDropdown}
              className="lucide lucide-x ml-auto"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              onClick={toggleDropdown}
              className="lucide lucide-align-justify ml-auto"
            >
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
          )}
        </div>

        <a
          className="hidden md:block underline underline-offset-4"
          href="mailto:sololadavid4@gmail.com"
        >
          sololadavid4@gmail.com
        </a>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-50">
          <ul className="flex flex-col items-start gap-4 py-4 px-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`text-baseContent text-lg ${getLocation(
                    link.href
                  )}`}
                  onClick={toggleDropdown}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Nav;
