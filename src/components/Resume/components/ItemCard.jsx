import TitleInfo from "./TitleInfo";
import ResumeCard from "../ResumeCard";
const ItemCard = ({ data, titleItem, stageItem }) => {
  return (
    <div>
      <TitleInfo title={titleItem} stage={stageItem} />
      <div className="mt-8 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        {data.map(({ id, title, subTitle, result, des, logo }) => (
          <ResumeCard
            key={id}
            logo={logo}
            title={title}
            subTitle={subTitle}
            result={result}
            des={des}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemCard;
