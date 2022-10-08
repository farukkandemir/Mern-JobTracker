import {createContext, useEffect, useReducer} from "react";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
  jobs: JSON.parse(localStorage.getItem("jobs")) || null,
  // accessToken: null,
};

function reducer(state, {type, payload}) {
  switch (type) {
    case "LOGIN_START":
      return {
        ...state,
        user: null,
        isFetching: true,
        error: false,
      };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: payload.user,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        user: null,
        isFetching: false,
        error: true,
      };
    case "LOG_OUT":
      return {
        ...state,
        user: null,
        isFetching: false,
        error: false,
      };

    case "GET_JOBS":
      return {
        ...state,
        jobs: payload,
      };
    case "ADD_JOB":
      return {
        ...state,
        jobs: [...state.jobs, payload],
      };

    case "DEL_JOB":
      return {
        ...state,
        jobs: state.jobs.filter((job) => job._id !== payload),
      };

    default:
      return state;
  }
}

export const Context = createContext();

export function ContextProvider({children}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(state.jobs));
  }, [state.jobs]);

  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        jobs: state.jobs,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
}
