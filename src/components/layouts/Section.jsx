import Title from "./Title";
const Section = ({ id, title, des, children }) => {
  return (
    <section id={id} className="w-full py-20 border-b-[1px] border-b-gray-300">
      <div className="flex justify-center items-center text-center">
        <Title title={title} des={des} />
      </div>
      {children}
    </section>
  );
};

export default Section;
