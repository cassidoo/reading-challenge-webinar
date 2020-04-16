import React, { createContext, useContext, useReducer } from "react";
import { BOOKS } from "./constants";

const appStateReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const initialState = {
  toRead: BOOKS,
  completed: [],
};

export function AppStateProvider({ children }) {}
