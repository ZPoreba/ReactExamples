import React from "react";
import "./styles.css";

class HumanWithEmotions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emotion: this.props.emotion
    };
  }

  checkEmotion() {
    switch (this.state.emotion) {
      case "angry":
        return "\u{1F624}";
      case "happy":
        return "\u{1F600}";
      case "sad":
        return "\u{1F641}";
      case "scared":
        return "\u{1F628}";
      default:
        return "";
    }
  }

  render() {
    let emoji_icon = this.checkEmotion();

    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <span role="img" aria-label="surprised_emoji">
          Wow you have some emotions! &#x1F632;
        </span>
        <p>
          Oh I see, you are {this.state.emotion} right now {emoji_icon}
        </p>
      </div>
    );
  }
}

export default HumanWithEmotions;
