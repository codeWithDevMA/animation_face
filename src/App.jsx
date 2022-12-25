import { useState } from "react";
import "./App.css";
import Switch from "./Switch";
function App() {
  const [face, setface] = useState("");
  return (
    <div className="App">
      <input
        type="number"
        value={face}
        onChange={(e) => setface(e.target.value)}
        placeholder="type a number"
      />
        <div className="cartoon hb">
        <div className="neck"></div>
        <div className="shoulder"></div>
        <div className="back-hair r ha hb"></div>
        <div className="ear ha"></div>
        <Switch status={face} />
      </div>
    </div>
  );
}

export default App;
