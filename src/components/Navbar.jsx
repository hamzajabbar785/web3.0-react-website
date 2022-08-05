import React from "react";
import GradientBtn from "./GradientBtn";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

function Navbar({ isMenuShown, setIsMenuShown }) {
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "products",
    },
    {
      id: 3,
      link: "developer API",
    },
    {
      id: 4,
      link: "customers",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <>
      <div className="absolute w-full h-24 bg-black text-white z-20">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4 h-full">
          <div>
            <h1 className="text-thBlue tracking-widest text-3xl">ANTON</h1>
          </div>

          <div className="hidden lg:flex items-center">
            <ul className="flex">
              {links.map(({ id, link }) => {
                return (
                  <li
                    key={id}
                    className="p-4 uppercase duration-200 hover:text-thBlue cursor-pointer"
                  >
                    <Link to={link} smooth duration={500}>
                      {link}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <GradientBtn className="ml-4 capitalize" title="Get Anton" />
          </div>

          <div
            onClick={() => setIsMenuShown(!isMenuShown)}
            className="block cursor-pointer lg:hidden"
          >
            {isMenuShown ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </div>

      <div
        className={`absolute left-0 w-full bg-black z-10 h-fit lg:hidden flex justify-center text-center text-2xl  duration-500 ${
          isMenuShown ? "top-24 rounded-b-2xl opacity-95" : "top-[-100%]"
        }  `}
      >
        <ul>
          {links.map(({ id, link }) => {
            return (
              <li className="p-4 uppercase cursor-pointer" key={id}>
                <Link
                  onClick={() => setIsMenuShown(false)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            );
          })}

          <GradientBtn className="mt-8 mb-7 capitalize" title="get anton" />
        </ul>
      </div>
    </>
  );
}

export default Navbar;
