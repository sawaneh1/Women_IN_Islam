import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from "./components/Quiz";
import ScoreBoard from "./components/scoreBoard";
import Auth from "./components/Auth/Auth";
import AdminDashboard from "./components/Admin";
import { Provider } from "react-redux";
import store from "./components/Redux/store";
import SetQuiz from "./components/SetQuiz";
import Be_Member from "./components/Be_Member";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path="/" />
        <Route element={<Quiz />} path="/quiz" />
        <Route element={<ScoreBoard />} path="/scoreboard" />
        <Route element={<AdminDashboard />} path="/admin_dashboard" />
        <Route element={<SetQuiz />} path="/set_quiz" />
        <Route element={<Auth />} path="/login" />
        <Route element={<Be_Member />} path="/be_member" />
      </Routes>
    </BrowserRouter>
    ,
  </Provider>,

  document.getElementById("root")
);
