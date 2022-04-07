import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

function App() {
  const [selected, setSelected] = useState();

  return (
    <div className="app">
      <div className="divider">
        <Navbar />
      </div>
      {/* <h1>test</h1> */}
    </div>
  );
}

export default App;
