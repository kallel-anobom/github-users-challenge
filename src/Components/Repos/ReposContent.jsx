import { useContext, useState } from 'react';

import ReposCard from './ReposCard'

import GithubContext from '../../Context/Github/Context';

const ReposContent = ({ repositories }) => {
  const [sort, setSort] = useState("asc");

  const GC = useContext(GithubContext);

  const onSortyByCreatedAt = (value) => {
    GC.sortyByCreatedAt(value);
    setSort(value)
  }

  return (
    <>
      <div className="flex mb-10 justify-center space-x-3">
        <select onChange={(e) => onSortyByCreatedAt(e.target.value)} 
        className="select select-bordered select-sm w-full max-w-xs">
        <option value='asc' data-sort="asc">↑ CreateAt (asc)</option>
        <option value='desc' data-sort="desc">↓ CreateAt (desc)</option>
        </select>
      </div>
      {repositories.map(repository => <ReposCard key={repository.id} repo={repository} />)}
    </>
  )
}

export default ReposContent