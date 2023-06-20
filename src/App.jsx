import { useState } from "react";
import AddButton from "./components/AddButton.jsx";
import Popup from "./components/Popup.jsx";
import "./index.css";

function App() {
  const [popup, setPopup] = useState(false);

  const handleAddPhoto = () => {
    setPopup(!popup);
  };

  return (
    <>
      <h1>Gallery</h1>
      <AddButton onAddPhoto={handleAddPhoto} />
      {popup && <Popup />}
    </>
  );
}

export default App;
