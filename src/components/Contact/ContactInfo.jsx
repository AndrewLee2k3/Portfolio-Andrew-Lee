/* eslint-disable react/no-unescaped-entities */
import { contactImg } from "../../assets";
import Socials from "../layouts/Socials";
const ContactInfo = () => {
  return (
    <div className="flex flex-col justify-center gap-8 p-4 lgl:p-8 rounded-lg  w-full lgl:w-[35%] h-full shadow-shadowTwo dark:bg-gradient-to-r from-[#1e2024] to-[#23272b] dark:shadow-shadowOne">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />

      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-designColor ">Andrew Lee</h3>
        <p className="text-lg font-normal dark:text-gray-400">
          Fullstack Developer
        </p>
        <p className="text-base dark:text-gray-400 tracking-wide">
          Andrew Lee, coding enthusiast, seeks collaboration and innovation.
          Let's connect and create!
        </p>
        <p className="text-base dark:text-gray-400 flex items-center gap-2">
          Phone: <span className="dark:text-lightText">+84 96 888 0945</span>
        </p>
        <p className="text-base dark:text-gray-400 flex items-center gap-2">
          Email:
          <span className="dark:text-lightText">andrewleedev03@gmail.com</span>
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <Socials />
      </div>
    </div>
  );
};

export default ContactInfo;
