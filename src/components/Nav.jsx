import React from "react";

function Nav() {
  const navLinks = [
    { href: "#dashboard", label: "Home", current: true },
    { href: "#Team", label: "Projects", current: false },
    { href: "#Team", label: "About", current: false },
  ];
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
                className={` hover:text-buttonColor ${
                  link.current
                    ? "text-buttonColor"
                    : "text-baseContentSecondary"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <button className=" font-poppinsRegular border-2 hover:text-white hover:bg-buttonColor transition  duration-200 border-buttonColor rounded-full p-2 text-buttonColor">
          Say Hello
        </button>
      </div>
    </div>
  );
}

export default Nav;
