import { useContext } from "react";

import UserItem from "./UserItem";
import Spinner from "../Layout/Spinner";

import GithubContext from "../../Context/Github/Context";

const Users = () => {
  const GC = useContext(GithubContext);

  const { loading, users } = GC;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
      <div className="flex w-5/6 flex-wrap mx-auto">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
      </>
    );
  }
};

export default Users;
