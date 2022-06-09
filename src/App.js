import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import Home from "./components/Home";
import About from "./components/About/Index";
import Activities from "./components/Activites";
import Contact from "./components/Contact";
import More from "./components/More";
import Header from "./Header";

function App() {
  const [selected, setSelected] = useState();

  return (
    <div className="app">
      <div className="divider">
        <Header />
        {/* <Home /> */}
        <About />
        <Activities />
        <More />
        <Contact />
        {/* <Contact /> */}
      </div>
      {/* <h1>test</h1> */}
    </div>
  );
}

export default App;
