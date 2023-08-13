import { educationData, exprencesData } from "../../data/data";
import ItemCard from "./components/ItemCard";
import ContentCard from "./components/ContentCard";
const Education = () => {
  return (
    <ContentCard>
      <ItemCard
        data={educationData}
        titleItem="Education Quanlity"
        stageItem="2021-2023"
      />
      <ItemCard
        data={exprencesData}
        titleItem="Exprences"
        stageItem="2021-2023"
      />
    </ContentCard>
  );
};

export default Education;
