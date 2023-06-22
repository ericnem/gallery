import './App.css'
import { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Caption from './Caption';
import ImageObject from './ImageObject';
import { motion } from "framer-motion";

function App() {

  //TEMPORARY
  const img1 = new ImageObject("src/img/img1.jpeg","Eagles",2019,"Four eagles in the winter.", "Eric");
  const img2 = new ImageObject("src/img/img2.jpeg","Mountains",2023,"Misty mountains, black and white.", "Eric");
  const img3 = new ImageObject("src/img/img3.jpeg","Dali",1950,"Famous portrait of artist Salvador Dali.", "Eric");
  

  
  const images = [img1, img2, img3];

  const lastIndex = images.length - 1;
  // const imgTotal = images.length;
  const [current, setCurrent] = useState(0);

  function rotateImg(direction) {

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
      <img id="toplight" src="src/assets/toplight.png"></img>
      <button id="left" onClick={() => rotateImg(-1)}>
      </button>
      <motion.img 
        className="image"
        src={images[current].url}
      />
      
      <Popup trigger = 
        {<button id="caption"> </button>}
          modal nested
          contentStyle={{width: "44%"}}>
          {
            <Caption info= {images[current]} style = {{ width: "10%" }}/>
          } 
      </Popup>
      <button id="right" onClick={() => rotateImg(1)}>
      </button>
    </div>
    <div className='footer'>
      <p id="sitename">SITE NAME</p>
      <div style = {{width: "15%", height:"0px",border:"2px solid", color:"#9E9E9E"}}></div>
    </div>
    </>
  )
}

export default App
