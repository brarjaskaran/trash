import "./App.css";

import { useState } from "react";

function App() {
  const [home, setHome] = useState([]);
  const [buttonColor, setButtonColor] = useState("red");
  const [isChecked, setIsChecked] = useState(false);

  const newButtonColor = buttonColor === "blue" ? "red" : "blue";

  return (
    <div>
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
