import "./App.css";

import { useState } from "react";
import List from "./List";

function App() {
<<<<<<< HEAD
  const [list, setList] = useState([]);
=======
  const [home, setHome] = useState([]);
>>>>>>> tesr
  const [buttonColor, setButtonColor] = useState("red");
  const [isChecked, setIsChecked] = useState(false);

  const newButtonColor = buttonColor === "blue" ? "red" : "blue";

  return (
    <div>
      <List />
      <button
        onClick={() => setButtonColor(newButtonColor)}
        style={{ backgroundColor: buttonColor }}
        disabled={isChecked}
      >
        Change to {newButtonColor}
      </button>

      <input type="checkbox" onClick={() => setIsChecked(!isChecked)} />
    </div>
  );
}

export default App;
