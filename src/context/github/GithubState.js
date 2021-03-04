import {
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
  SEARCH_USERS,
  SET_LOADING,
} from "./../types";
import { GithubContext } from "./githubContext";
import { useReducer } from "react";

import React from "react";
import { githubReducer } from "./githubReducer";

export const GithubState = ({ children }) => {
  const initState = {
    user: {},
    users: [],
    loading: false,
    repos: [],
  };
  const [state, dispatch] = useReducer(githubReducer, initState);
  const search = async (value) => {
    setLoading();
    // ....

    dispatch({
      type: SEARCH_USERS,
      payload: [],
    });
  };
  const getUser = async (name) => {
    setLoading();

    // ....
    dispatch({
      type: GET_USER,
      payload: {},
    });
  };
  const getRepos = async (name) => {
    setLoading();

    // ....
    dispatch({
      type: GET_REPOS,
      payload: [],
    });
  };
  const clearUsers = () => dispatch({ type: CLEAR_USERS });
  const setLoading = () => dispatch({ type: SET_LOADING });

  const { user, users, repos, loading } = state;

  return (
    <GithubContext.Provider
      value={{
        setLoading,
        search,
        getUser,
        getRepos,
        clearUsers,
        user,
        users,
        repos,
        loading,
      }}>
      {children}
    </GithubContext.Provider>
  );
};
