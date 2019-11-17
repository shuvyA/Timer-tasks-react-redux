import React from 'react';
import './App.css';
import cover from './assets/img/tasks2.jpg';

import HomePage from './pages/HomePage/HomePage'

function App() {
  return (
    <div className="App">
      <img className="cover-img" alt="as" src={cover} />
      <HomePage />
    </div>
  );
}

export default App;
