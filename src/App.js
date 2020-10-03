import React from 'react';
import {AppProvider} from './AppContext';
import Header from './components/Header';
import BookList from './components/BookList';

import './App.css';


function App() {
  return (
    <AppProvider>
    <Header />
    <div className="App">
    <div className="lists">
       <BookList />
      <BookList completeList />
    </div>
    </div>
    </AppProvider>
  );
}

export default App;
