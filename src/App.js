import { useState } from "react";
import Counter from "./Counter.js";
import "./App.css";

function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow((s) => !s)}>
        {show ? "Hide" : "Show"} counter
      </button>
      <br />
      <hr />
      {show && <Counter />}
    </>
  );
}

export default App;
