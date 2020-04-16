import React from "react";
import BookList from "./components/BookList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">Reading Challenge</header>
      <div className="lists">
        <BookList />
        <BookList completeList />
      </div>
    </div>
  );
}

export default App;
