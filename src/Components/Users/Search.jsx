import { useState, useContext } from "react";

import GithubContext from "../../Context/Github/Context";
import AlertContext from "../../Context/Alert/Context";

const Search = () => {
  const [search, setSearch] = useState("");

  const GC = useContext(GithubContext);
  const AC = useContext(AlertContext);

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (search === "") {
      AC.setAlert("Please enter a search term", "info");
      return;
    }

    GC.searchUsers(search);
    setSearch("");
  };

  return (
    <>
      <form onSubmit={onSubmit} className="form-control my-5">
        <div className="flex justify-center space-x-3">
          <input
            value={search}
            onChange={onChange}
            type="search"
            placeholder="Search Users"
            className="w-3/6  input input-primary input-bordered lg:w-2/6"
          />
          <button onClick={onSubmit} className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
      {GC.users.length > 0 && (
        <div className="flex justify-center space-x-3">
          <button
            className="w-2/6 mb-10 input input-primary input-bordered lg:w-1/6"
            onClick={GC.userClear}
          >
            Clear
          </button>
        </div>
      )}
    </>
  );
};

export default Search;
