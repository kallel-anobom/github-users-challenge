import { useReducer } from "react";

import GithubContext from "./Context";
import GithubReducer from "./Reducer";

import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_REPOS,
  GET_SORT_BY,
  GET_USER,
} from "../Types";

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const searchUsers = async (input) => {
    setLoading();

    fetch(`https://api.github.com/search/users?q=${input}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: SEARCH_USERS, payload: data.items }))
      .catch((error) => console.log(error));
  };

  const getUser = async (userName) => {
    setLoading();

    fetch(`https://api.github.com/users/${userName}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_USER, payload: data }))
      .catch((error) => console.log(error));
  };

  const getUserRepo = async (userName) => {
    setLoading();

    fetch(`https://api.github.com/users/${userName}/repos`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_REPOS, payload: data }))
      .catch((error) => console.log(error));
  };

  const sortyByCreatedAt = (filter) => {
    if (filter === "desc") {
      dispatch({
        type: GET_SORT_BY,
        payload: 
          state.repos.sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at)),
      })
    }
  }

  const userClear = () => dispatch({ type: CLEAR_USERS });

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        userClear,
        getUser,
        getUserRepo,
        sortyByCreatedAt
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
