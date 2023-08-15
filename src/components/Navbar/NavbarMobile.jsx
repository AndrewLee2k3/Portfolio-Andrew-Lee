import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-scroll";
import { navLinksdata } from "@/constants";
import { logo } from "@/assets";

const NavbarMobile = ({ setShowMenu }) => {
  return (
    <div>
      <div className="w-[80%] h-screen overflow-scroll bg-white absolute top-0 left-0 dark:bg-gray-900 p-4 scrollbar-hide">
        <div className="flex flex-col gap-8 py-2 relative">
          <div>
            <img className="w-32" src={logo} alt="logo" />
          </div>
          <ul className="flex flex-col gap-4">
            {navLinksdata.map((item) => (
              <li
                key={item._id}
                className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              >
                <Link
                  onClick={() => setShowMenu(false)}
                  activeClass="active"
                  to={item.link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4">
            <h2 className="text-base uppercase font-titleFont mb-4">
              Find me in
            </h2>
            <div className="flex gap-4">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
              <span className="bannerIcon">
                <FaTwitter />
              </span>
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </div>
          </div>
          <span
            onClick={() => setShowMenu(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
          >
            <MdClose />
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;
