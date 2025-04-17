export function ProjectContainer({
  label,
  description,
  languages,
  frameworks,
  githublink,
}: {
  label: string;
  description: string;
  languages: string[];
  frameworks: string[];
  githublink: string;
}) {
  return (
    <div className="w-full lg:w-1/4 h-96 lg:h-5/6 border-2 px-4 rounded-md">
      <h1 className="containerHeadline mb-4">{label}</h1>
      <p>{description}</p>
      <div className="mt-4">
        <h2 className="containerHeadline text-xl text-left">Used Languages</h2>
        <ul>
          {languages.map((language) => (
            <li key={language}>- {language}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h2 className="containerHeadline text-xl text-left">Used Frameworks</h2>
        <ul>
          {frameworks.map((framework) => (
            <li key={framework}>- {framework}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h2 className="containerHeadline text-xl text-left">GitHub Link</h2>
        <a href={githublink} className="text-effect hover:text-text underline">
          here
        </a>
      </div>
    </div>
  );
}
