import React from 'react';
import TopBar from './components/TopBar';
import Blog from './components/Blog';
import './App.css';

function App() {
  return (
    <div className="App">
      <TopBar title="My Blog" />
      <Blog />
    </div>
  );
}

export default App;
