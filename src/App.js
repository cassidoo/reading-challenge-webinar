import React from "react";
import { AppStateProvider } from "./AppContext";
import BookList from "./components/BookList";
import "./App.css";

function App() {
  return (
    <AppStateProvider>
      <div className="App">
        <header className="App-header">Reading Challenge</header>
        <div className="lists">
          <BookList />
          <BookList completeList />
        </div>
      </div>
    </AppStateProvider>
  );
}

export default App;
