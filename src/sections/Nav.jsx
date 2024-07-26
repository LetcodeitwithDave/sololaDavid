import React from "react";
import { useLocation } from "react-router-dom";

function Nav() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Works" },
    { href: "/contact", label: "Contact" },
  ];
  const location = useLocation();

  const getLocation = (path) => {
    return location.pathname === path
      ? "text-buttonColor"
      : "text-baseContentSecondary";
  };
  return (
    <div className=" flex  justify-between items-center   mt-4">
      <a href="/">
        <div className=" font-poppinsSemiBold text-md flex">
          Solola David
          <div className=" bg-buttonColor rounded-full mt-[13px] ml-[0.5px]  h-1 w-1"></div>
        </div>
      </a>
      <div>
        <ul className=" hidden md:flex gap-6 font-poppinsSemiBold text-md ">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={` hover:text-buttonColor ${getLocation(link.href)}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <a
          className=" hidden md:block underline underline-offset-4 "
          href="mailto:sololadavid4@gmail.com"
        >
          sololadavid4@gmail.com
        </a>
      </div>
    </div>
  );
}

export default Nav;

// menu svg
{
  /* <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                onClick={toggleSideNav}
                className="lucide lucide-x md:hidden text-white mt-7  mr-2 ml-[276px]  "
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg> */
}

// arrow svg

// <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
