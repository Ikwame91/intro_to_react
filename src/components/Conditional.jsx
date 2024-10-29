import React from "react";
import Welcome from "./welcome";
import Code from "./code";

export default function Conditional() {
  const display = true;

  return display ? <h1> {<Welcome />}</h1> : <h1>{<Code />}</h1>;
}
