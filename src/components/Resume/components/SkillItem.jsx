import { motion } from "framer-motion";
import TitleInfo from "../components/TitleInfo";
const SkillItem = ({ data, title, stage }) => {
  return (
    <div className="w-full lgl:w-1/2">
      <TitleInfo title={title} stage={stage} />

      <div className=" flex flex-col gap-6 mt-8">
        {data.map(({ id, title, percent }) => {
          return (
            <div key={id} className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">{title}</p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  style={{ width: `${percent}`, height: "100%" }}
                  className="bg-gradient-to-r from-[#0D69B3] via-designColor to-[#1FB34A] rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">{percent}</span>
                </motion.span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillItem;
