import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import ContainerForTasks from "./components/ContainerForTask/ContainerForFolder";

const App = () => {
  return (
    <div>
      <div className="logoWrapper">
        <img
          className="logo"
          src="https://giraffesoftware.com/images/logo.svg"
          alt="logo"
        />
        <h1>
          Test task by
          <a
            target={"_blank"}
            href="https://www.linkedin.com/in/mykola-nazimkov-6b29b218a/"
            rel="noreferrer"
            className="appLinkPerson"
          >
            Mykola Nazimkov
          </a>
        </h1>
        <nav className="nav">
          <Link className="appLink" to="/">
            Task1
          </Link>
          <Link className="appLink" to="/task2">
            Task2
          </Link>
          <Link className="appLink" to="/task3">
            Task3
          </Link>
        </nav>
      </div>

      <ContainerForTasks />
    </div>
  );
};
export default App;
