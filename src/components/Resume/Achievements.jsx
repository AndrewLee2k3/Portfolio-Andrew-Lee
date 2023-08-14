import { exprencesData } from "../../data/data";
import ItemCard from "./components/ItemCard";
import ContentCard from "./components/ContentCard";
const Achievement = () => {
  return (
    <ContentCard>
      <ItemCard
        data={exprencesData}
        titleItem="Achievements"
        stageItem="2021-2023"
      />
      <ItemCard
        data={exprencesData}
        titleItem="Achievements"
        stageItem="2021-2023"
      />
    </ContentCard>
  );
};

export default Achievement;
