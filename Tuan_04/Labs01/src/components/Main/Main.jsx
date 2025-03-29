import React from "react";
import "./main.css";
import Filter from "./components/Filter";
import Content from "./components/Content";

function Main() {
  return (
    <div className="main">
      <Filter />
      <Content />
    </div>
  );
}

export default Main;
