import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

// import { PhoneIcon, AddIcon, WarningIcon, CheckIcon } from "@chakra-ui/icons";

// import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'

//   [
//     {
//       name: "Business",
//       ram: "16GB",
//       cpus: "8 CPUs",
//       disk: "512 GB SSD disk",
//     },
//     {
//       name: "Enterprise",
//       ram: "32GB",
//       cpus: "12 CPUs",
//       disk: "1024 GB SSD disk",
//     },

//     {
//       name: "Startup",
//       ram: "12GB",
//       cpus: "6 CPUs",
//       disk: "160 GB SSD disk",
//     },
//   ],

//   [
//     {
//       name: "Business tesy",
//       ram: "16GB hg",
//       cpus: "8 CPUs s",
//       disk: "512 GB SSD diskh",
//     },
//     {
//       name: "Enterprise hgsg",
//       ram: "32GB shs",
//       cpus: "12 CPUs66",
//       disk: "1024 GB SSD disk hshs",
//     },

//     {
//       name: "Startupjshhss",
//       ram: "12GBshs",
//       cpus: "6 CsbhsPUs",
//       disk: "160 GBshs SSD disk",
//     },
//   ],

//   [
//     {
//       name: " pp Business",
//       ram: "516GB",
//       cpus: "81 CPUs",
//       disk: "512ss GB SSD disk",
//     },
//     {
//       name: "Entsjjsjjserprise",
//       ram: "3297GB",
//       cpus: "12087 CPUs",
//       disk: "1024uus GB SSD disk",
//     },

//     {
//       name: "Star08hdstup",
//       ram: "12G74365B",
//       cpus: "6 C55PUs",
//       disk: "160 0987731GB SSD disk",
//     },
//   ],
// ];

function App() {
  // let [plan, setPlan] = useState("startup");
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
