import logo from './logo.svg';
import './App.css';
import CustomCursor from './spaceCursor';
import React, { useState } from 'react';

function App() {
  const [isFading, setIsFading] = useState("CLICK ME");

  const handleButtonClick = () => {

    // Delay setting the background color to black by 5 seconds
    setTimeout(() => {
      document.body.style.backgroundColor = 'black';
    });
    setIsFading("LIFTOFF!")
  };
  return (
    <div className="App" style={{ cursor: 'url(cursor.gif),auto' }}>
      <div class="text-container">
        <button style={{background: 'none', border: 'none'}} onClick={handleButtonClick}><h1>{isFading}</h1></button>
    </div><CustomCursor />
    </div>
  );
}

export default App;
