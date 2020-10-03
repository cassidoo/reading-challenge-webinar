import React from 'react';
import {AppProvider} from './AppContext';
import BookList from './components/BookList';

import './App.css';


function App() {
  return (
    <AppProvider>
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
