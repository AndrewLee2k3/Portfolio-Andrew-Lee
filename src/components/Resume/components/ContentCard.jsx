import { motion } from "framer-motion";
const ContentCard = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-6 lgl:py-12 flex flex-col lgl:flex-row justify-between gap-10 lgl:gap-20"
    >
      {children}
    </motion.div>
  );
};

export default ContentCard;
