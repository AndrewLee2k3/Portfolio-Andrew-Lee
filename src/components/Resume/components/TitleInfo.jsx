const TitleInfo = ({ stage, title }) => {
  return (
    <div className="flex flex-col font-titleFont gap-4">
      <p className="text-sm text-designColor uppercase tracking-[4px]">
        {stage}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold capitalize">{title}</h2>
    </div>
  );
};

export default TitleInfo;
