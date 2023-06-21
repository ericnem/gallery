import './App.css'
import { useState } from 'react';

function App() {
  const images = ["src/img/img1.jpeg", "src/img/img2.jpeg", "src/img/img3.jpeg"];
  const lastIndex = images.length - 1;
  // const imgTotal = images.length;
  const [current, setCurrent] = useState(0);

  function rotateImg(direction) {
    // setCurrent(current + direction);
    // if (current == -1) {
    //   setCurrent(lastIndex);
    // } else if (current > lastIndex) {
    //   setCurrent(0);
    // }
    if (current == 0 && direction == -1) {
      setCurrent(lastIndex);
    } else if (current == lastIndex && direction == 1) {
      setCurrent(0);
    } else {
      setCurrent(current + direction);
    }
  }
  
  return (
    <>
    <div id="body">
    <button id="left" onClick={() => rotateImg(-1)}>
    </button>
      <img 
        className="image"
        src={images[current]}>
      </img>
      <button id="right" onClick={() => rotateImg(1)}>
      </button>
    </div>
    </>
  )
}

export default App
