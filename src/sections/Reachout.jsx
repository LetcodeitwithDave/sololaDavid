import React from "react";
import { useLocation } from "react-router-dom";

function Reachout() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Works" },
    { href: "/contact", label: "Contact" },
  ];
  const location = useLocation();

  const getLocation = (path) => {
    return location.pathname === path
      ? "text-gray-00"
      : "text-baseContentSecondary";
  };
  return (
    <div className="flex flex-col mt-28 px-8 lg:px-12  ">
      {/* contact links */}

      <div className="  text-left">
        <h1 className="sm:text-5xl text-3xl   font-poppinsBold mt-16 text-white ">
          Get In Touch
        </h1>

        <p className=" text-white text-md sm:text-md font-poppinsRegular my-4 max-w-md mb-4">
          Looking to partner or work together? Reach out through the form and
          I'll get back to you as soon as possible.
        </p>
      </div>

      {/* social icons */}
      <div className="grid  grid-cols-2 md:grid-cols-3 text-left  items-center  justify-between   mt-4  mb-4 ">
        <div className=" flex gap-4 ">
          {/* email svg */}
          <a href="mailto:sololadavid4@gmail.com" target="_blank">
            <div className=" border p-2 lg:p-4 rounded-full text-white  hover:text-buttonColor hover:bg-white transition duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
          </a>

          {/* linkedin svg */}
          <a
            href="https://www.linkedin.com/in/david-solola-4773a1291/"
            target="_blank"
          >
            <div className=" border p-2 lg:p-4 rounded-full text-white  hover:text-buttonColor hover:bg-white transition duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </div>
          </a>

          {/* twitter svg */}
          <a href="https://x.com/Tech_Dave4" target=" _blank">
            <div className=" border p-2 lg:p-4 rounded-full text-white  hover:text-buttonColor hover:bg-white transition duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-twitter"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </div>
          </a>
        </div>

        <div>
          <ul className="flex gap-4 md:gap-4 font-poppinsSemiBold text-md">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`hover:text-gray-400 text-white ${getLocation(
                    link.href
                  )}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className=" text-white  font-poppinsRegular mt-6 md:mt-0 ">
            Made with ❤ by <span></span>
            <a href="mailto:sololadavid4@gmail.com" className=" underline">
              Solola David
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Reachout;
