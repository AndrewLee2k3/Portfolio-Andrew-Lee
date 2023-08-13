import { avatar } from "../../assets";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
        src={avatar}
        alt="avatar"
      />
      <div className="absolute shadow-shadowTwo bottom-0 w-[300px] h-[300px] lgl:w-[500px] lgl:h-[500px] dark:bg-gradient-to-r from-[#1e2024] to-[#202327] dark:shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
};

export default RightBanner;
