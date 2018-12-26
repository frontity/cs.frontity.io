import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const Link = ({ name, href }) => (
  <div className="link">
    <a href={href} target="_blank">
      {name}
    </a>
  </div>
);

const App = () => (
  <div className="App">
    <h1>Customer Success tools for Frontity</h1>
    <Link name="Priority System" href="https://priorities.frontity.io" />
    <Link
      name="URL directory for Github Issues"
      href="https://docs.google.com/spreadsheets/d/1FWcvX7KiLAppGW2qOICxs8ATWqV1uEsCVdTnq5mK7q8/edit#gid=0"
    />
    <Link name="Autodemos" href="https://autodemos.frontity.io" />
    <Link name="Sites Info" href="https://sites-info.frontity.io" />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
