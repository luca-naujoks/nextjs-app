export function TechStackCard({
  label,
  listItems,
}: {
  label: string;
  listItems: string[];
}) {
  return (
    <div className="w-4/5 lg:w-1/4 h-1/4 lg:h-72 border-effect border-2 lg:border-b-0 rounded-lg lg:rounded-t-lg lg:rounded-b-none transition-all ease-linear duration-150 delay-150">
      <h1 className="containerHeadline mb-4">{label}</h1>
      <section className="flex flex-wrap justify-center lg:justify-start w-full gap-4 px-4">
        {listItems.map((item, index) => (
          <p key={index} className="techStackItem">
            {item}
          </p>
        ))}
      </section>
    </div>
  );
}
