import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [boxes, setBoxes] = useState([
    {bg:'#' + ((Math.random() * 0xffffff) << 0).toString(16)}])

  useEffect(() => {
    const interval = setInterval(() => {
      setBoxes([...boxes, 
        {bg:'#' + ((Math.random() * 0xffffff) << 0).toString(16)}
      ])
    }, 100);
      return () => clearInterval(interval); 
  },[boxes])


  return (
    <div className="hero">
      {
        boxes.map((box, index) => (
          <div key={index} className="box" style={{background: box.bg}}>
            <p>{index}</p>
          </div>
        ))
      }
    </div>
  );
}

export default App;
