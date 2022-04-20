import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import Home from "./components/Home";

function App() {
  const [selected, setSelected] = useState();

  return (
    <div className="app">
      <div className="divider">
        <Navbar />
        <Home />
      </div>
      {/* <h1>test</h1> */}
    </div>
  );
}

export default App;
