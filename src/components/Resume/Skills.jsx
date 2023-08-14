import { skillsData } from "../../data/data";
import SkillItem from "./components/SkillItem";
import ContentCard from "./components/ContentCard";
const Skills = () => {
  return (
    <ContentCard>
      <SkillItem
        data={skillsData.fe}
        title="Front-End Skill"
        stage="2021-2023"
      />

      <SkillItem
        data={skillsData.be}
        title="Back-End Skill"
        stage="2021-2023"
      />
    </ContentCard>
  );
};

export default Skills;
