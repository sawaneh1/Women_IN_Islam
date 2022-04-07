import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from "./components/Quiz";
import ScoreBoard from "./components/scoreBoard";
import Auth from "./components/Auth/Auth";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />} path="/" />
      <Route element={<Quiz />} path="/quiz" />
      <Route element={<ScoreBoard />} path="/scoreboard" />
      <Route element={<Auth />} path="/login" />
    </Routes>
  </BrowserRouter>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
