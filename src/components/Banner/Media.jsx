import { FaReact, FaNodeJs } from "react-icons/fa";
import {  SiExpress, SiMongodb } from "react-icons/si";
import Socials from "../layouts/Socials";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-8 justify-between">
      <div>
      <Socials/>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <FaNodeJs />
          </span>
          <span className="bannerIcon">
            <SiExpress />
          </span>
          <span className="bannerIcon">
            <SiMongodb />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
