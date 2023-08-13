import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";
const Banner = () => {
  return (
    <section
      id="home"
      className="flex flex-col lgl:flex-row w-full pt-10 pb-20 gap-10 lgl:gap-10 font-titleFont items-center  border-b-[1px] border-b-gray-300"
    >
      <LeftBanner />

      <RightBanner />
    </section>
  );
};

export default Banner;
