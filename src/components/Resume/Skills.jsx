import { skillsData } from "../../data/data";
import SkillItem from "./components/SkillItem";
import ContentCard from "./components/ContentCard";
const Skills = () => {
  return (
    <ContentCard>
      <SkillItem
        data={skillsData.design}
        title="Design Skill"
        stage="2021-2023"
      />

      <SkillItem
        data={skillsData.dev}
        title="Development Skill"
        stage="2021-2023"
      />
    </ContentCard>
  );
};

export default Skills;
