import { exprencesData } from "../../data/data";
import ItemCard from "./components/ItemCard";
import ContentCard from "./components/ContentCard";
const Achievement = () => {
  return (
    <ContentCard>
      <ItemCard
        data={exprencesData}
        titleItem="Company Experience"
        stageItem="2021-2023"
      />
      <ItemCard
        data={exprencesData}
        titleItem="Job Experience"
        stageItem="2021-2023"
      />
    </ContentCard>
  );
};

export default Achievement;
