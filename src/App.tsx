import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    document.title = "react-css-arrow"
  })
  return (
    <div className="App">
      <p className="arrow sample1-1"></p>
      <p className="arrow sample1-2"></p>
      <p className="arrow sample1-3"></p>
    </div >
  );
}

export default App;
