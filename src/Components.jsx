import React from "react";
import "./styles.css";

function HumanFunction(props) {
  return <h1>Function: Hello, {props.name}</h1>;
}

class HumanClass extends React.Component {
  static defaultProps = {
    name: "Noname"
  };

  constructor(props) {
    console.log("Before: " + props);
    // console.log("Before: " + this.props);
    super(props);
    console.log("After: " + this.props);
  }

  render() {
    return (
      <div>
        <h1>Class: Hello, {this.props.name}</h1>
        <span role="img" aria-label="noemotions_emoji">
          No state no emotions &#128528;
          <br />
          Here you have my state: {this.stete}
        </span>
      </div>
    );
  }
}

export { HumanFunction, HumanClass };
