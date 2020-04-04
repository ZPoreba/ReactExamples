import React from "react";
import "./styles.css";
import { HumanFunction, HumanClass } from "./Components";
import HumanWithEmotions from "./ComponentWithState";
import InteractiveHumanWithEmotions from "./InteractiveComponent";

export default function App() {
  return (
    <div className="App">
      <HumanFunction name="Żaneta" />
      <HumanClass name="Żaneta" />
      <HumanWithEmotions name="Żaneta" emotion="angry" />
      <InteractiveHumanWithEmotions name="Żaneta" emotion="angry" />
    </div>
  );
}
