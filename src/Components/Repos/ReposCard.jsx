
const RepoCard = ({ repo }) => {
  return (
    <>
      <div
        className={`transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 ${
          repo.language === "JavaScript"
            ? "bg-yellow-500"
            : repo.language === "SCSS"
            ? "bg-purple-600"
            : repo.language === "HTML"
            ? "bg-red-600"
            : repo.language === "CSS"
            ? "bg-pink-500"
            : repo.language === "Vue"
            ? "bg-green-500"
            : repo.language === "Ruby"
            ? "bg-red-900"
            : repo.language === "Python"
            ? "bg-yellow-400"
            : repo.language === "Java"
            ? "bg-orange-900"
            : repo.language === "Shell"
            ? "bg-green-500"
            : "bg-blue-500"
        } text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0`}
      >
        <div
          className={`w-5 h-5 bg-white absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0`}
        />
        <div className={`w-10 h-1 bg-white  absolute -left-10 z-0`} />
        <div className="flex-auto">
          <h1 className="text-xl font-bold">
            {repo.name}
            <span className="badge text-blue-500 bg-white border-2 border-blue-500 ml-1">
              {repo.language ? repo.language : "Readme"}
            </span>
          </h1>
          <h3 className="my-2">{repo.description}</h3>
          <h4>
            {repo.topics.map((topic) => (
              <span key={topic} className="mr-2 badge-xs badge p-2">
                {topic}
              </span>
            ))}
          </h4>
        </div>

        <a
          href={`${repo.html_url}`}
          className="text-center text-black border-2 border-black  capitalize hover:text-white btn-md btn-ghost btn"
        >
          View Repo
        </a>
      </div>
    </>
  );
};

export default RepoCard;
