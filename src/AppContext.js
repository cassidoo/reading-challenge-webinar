import React, { createContext, useContext, useReducer } from "react";
import { BOOKS } from "./constants";

export const AppContext = createContext();

export function useAppState() {
  return useContext(AppContext);
}

const appStateReducer = (state, action) => {
  switch (action.type) {
    case "READ_BOOK": {
      return {
        ...state,
        toRead: state.toRead.filter((item) => {
          return item !== action.item;
        }),
        completed: state.completed.concat(action.item),
      };
    }
    case "UNREAD_BOOK": {
      return {
        ...state,
        toRead: state.toRead.concat(action.item),
        completed: state.completed.filter((item) => {
          return item !== action.item;
        }),
      };
    }
    case "GET_FROM_LOCAL_STATE": {
      return {
        ...state,
        toRead: action.toRead,
        completed: action.completed,
      };
    }
    default:
      return state;
  }
};

export function AppStateProvider({ children }) {
  const initialState = { toRead: BOOKS, completed: [] };
  const value = useReducer(appStateReducer, initialState);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
