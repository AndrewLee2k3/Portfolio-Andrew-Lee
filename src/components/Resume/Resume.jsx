import { useState } from "react";
import Achievement from "./Achievements";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Section from "../layouts/Section";
const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);

  const educationHandler = () => {
    setEducationData(true) &
      setSkillData(false) &
      setExperienceData(false) &
      setAchievementData(false);
  };

  const skillHandler = () => {
    setEducationData(false) &
      setSkillData(true) &
      setExperienceData(false) &
      setAchievementData(false);
  };

  const experienceHandler = () => {
    setEducationData(false) &
      setSkillData(false) &
      setExperienceData(true) &
      setAchievementData(false);
  };

  const achievementHandler = () => {
    setEducationData(false) &
      setSkillData(false) &
      setExperienceData(false) &
      setAchievementData(true);
  };
  return (
    <Section id="resume" title="I'm a intern" des="My Resume">
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          <li
            onClick={educationHandler}
            className={`${
              educationData ? "border-designColor " : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={skillHandler}
            className={`${
              skillData ? "border-designColor " : "border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li>
          <li
            onClick={experienceHandler}
            className={`${
              experienceData ? "border-designColor " : "border-transparent"
            } resumeLi`}
          >
            Experience
          </li>
          <li
            onClick={achievementHandler}
            className={`${
              achievementData ? "border-designColor " : "border-transparent"
            } resumeLi`}
          >
            Achievements
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
      {achievementData && <Achievement />}
      {experienceData && <Experience />}
    </Section>
  );
};

export default Resume;
