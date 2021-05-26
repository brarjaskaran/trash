import "./App.css";

import { useState } from "react";
import List from "./List";

function App() {
  const [list, setList] = useState([]);
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
