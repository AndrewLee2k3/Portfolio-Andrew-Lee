/* eslint-disable react/no-unescaped-entities */

import { useTypewriter, Cursor } from "react-simple-typewriter";

import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Fullstack Developer.", "UI Designer."],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full  lgl:w-1/2 ">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">HELLO TO MY WORLD</h4>
        <h1 className="text-6xl text-gray-800 font-bold dark:text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Andrew Lee</span>
        </h1>
        <h2 className="text-4xl font-bold text-gray-800  dark:text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="💻💖"
            cursorColor="#f9743e"
          />
        </h2>
        <p className="text-base text-justify font-bodyFont leading-6 tracking-wide">
          Thank you for taking the time to get to know me, and I look forward to
          connecting with fellow developers, learning from shared experiences,
          and contributing my unique perspective to the dynamic world of
          software development.
        </p>

        <Media />
      </div>
    </div>
  );
};

export default LeftBanner;
