import { logo } from "@/assets";
import { navLinksdata } from "@/constants";
import { MdNightlight, MdWbSunny } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-scroll";
import { useState } from "react";

import NavbarMobile from "./NavbarMobile";
const Navbar = ({ darkMode, setDarkMode }) => {
  const [showMenu, setShowMenu] = useState(false);

  const darkModeHandler = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="w-full px-16 sticky bg-white top-0 z-50 dark:bg-bodyColor lgl:h-24 mx-auto flex mdl:flex-col lgl:flex-row mdl:h-32 mdl:justify-evenly justify-between items-center font-titleFont border-b-gray-200 border-b-[1px]  dark:border-b-gray-600">
      <div>
        <img className="w-52 h-16 object-contain" src={logo} alt="logo" />
      </div>
      <div>
        <ul className="hidden mdl:inline-flex  items-center gap-6 lg:gap-10 ">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-800 dark:text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300 "
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                smooth={true}
                spy={true}
                offset={-100}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
          <div
            onClick={darkModeHandler}
            className="text-designColor hover:text-black dark:hover:text-white duration-300"
          >
            {darkMode ? (
              <MdWbSunny className="text-2xl  cursor-pointer" />
            ) : (
              <MdNightlight className="text-2xl cursor-pointer" />
            )}
          </div>
        </ul>
        <div className="ml-5 flex mdl:hidden justify-between items-center">
          <div onClick={darkModeHandler} className="text-designColor">
            {darkMode ? (
              <MdWbSunny className="text-2xl  cursor-pointer  hover:text-black dark:hover:text-white duration-300" />
            ) : (
              <MdNightlight className="text-2xl cursor-pointer  hover:text-black dark:hover:text-white duration-300" />
            )}
          </div>

          <span
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            className="ml-3 text-xl dark:bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer hover:bg-black dark:hover:bg-white duration-300"
          >
            <FiMenu />
          </span>
        </div>

        {showMenu && <NavbarMobile setShowMenu={setShowMenu} />}
      </div>
    </div>
  );
};

export default Navbar;
