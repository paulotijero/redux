/** @jsx jsx */
import React from "react";
import { render } from "react-dom";
import { jsx, Global } from "@emotion/core";

const global = {
  body: {
    margin: 0,
    fontFamily: "Roboto, sans-serif",
    background: "#f2f3f5",
    color: "#34495e",
    fontSize: "15px"
  }
};

function App() {
  return (
    <>
      <Global styles={global} />
    </>
  );
}

render(<App />, document.getElementById("root"));
