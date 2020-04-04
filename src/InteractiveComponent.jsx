import React from "react";
import "./styles.css";
import HumanWithEmotions from "./ComponentWithState";

class Greeding extends React.Component {
  render() {
    return [
      <h1>Hello, {this.props.who}</h1>,
      <span role="img" aria-label="surprised_emoji">
        Wow! There is more, I can even interact with you! &#x1F632;
      </span>
    ];
  }
}

class InteractiveHumanWithEmotions extends HumanWithEmotions {
  printEmotionInConsole() {
    console.log("Logged emotion:" + this.state.emotion);
  }

  changeEmotion() {
    let randomNumber = Math.floor(Math.random() * 4 + 1);
    let randomEmotion = "";

    switch (randomNumber) {
      case 1:
        randomEmotion = "angry";
        break;
      case 2:
        randomEmotion = "happy";
        break;
      case 3:
        randomEmotion = "sad";
        break;
      case 4:
        randomEmotion = "scared";
        break;
      default:
        break;
    }

    this.setState({ emotion: randomEmotion }); //TODO check state: () => {}
    // this.printEmotionInConsole();
  }

  render() {
    let emoji_icon = this.checkEmotion();

    return (
      <div>
        <Greeding who={this.props.name} />
        <p>
          Oh I see, you are {this.state.emotion} right now {emoji_icon}
          <br />
          <br />
          Let me change it !
        </p>
        <button type="button" onClick={this.changeEmotion.bind(this)}>
          Change {this.props.name}'s emotion
        </button>
      </div>
    );
  }
}

export default InteractiveHumanWithEmotions;
