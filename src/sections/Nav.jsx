import React from "react";
import { useLocation } from "react-router-dom";

function Nav() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#Team", label: "Works" },
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
      <div className=" font-poppinsSemiBold text-md flex">
        Solola David
        <div className=" bg-buttonColor rounded-full mt-[13px] ml-[0.5px]  h-1 w-1"></div>
      </div>
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
