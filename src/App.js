import React from "react";
import { AppStateProvider } from "./AppContext";
import Header from "./components/Header";
import BookList from "./components/BookList";

import "./App.css";

function App() {
  return (
    <AppStateProvider>
      <div className="App">
        <Header />
        <div className="lists">
          <BookList />
          <BookList completeList />
        </div>
      </div>
    </AppStateProvider>
  );
}

export default App;
