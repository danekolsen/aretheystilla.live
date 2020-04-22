import React, { Component } from "react";

export class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      img: "",
      info: "",
      options: {
        living: {
          text: [
            "This person is alive!",
            "Still Kickin'!",
            "ALIVE AF",
            "Stayin' Alive!",
            "Still Breathin'!"
          ],
          emoji: [
            ["🎉", "🎊", "✨", "🌈","🥇", "💋", "⭐️", "🌟"],
            ["🥳", "😁", "😄", "😍", "😘", "👍", "🙌", "👏"],
            ["💕", "💖", "💯", "❤️", "💜", "💙", "❣️", "💓", "♥️"],
          ],
        },
        dead: {
          text: [
            "This person is dead!",
            "Kicked the bucket!",
            "DEAD AF",
            "Another one bites the dust!!!",
            "OH NOES!",
          ],
          emoji: [
            ["⚰️", "☠️", "👻", "💀", "🙅‍♀️", "🙅‍♂️"],
            ["😵", "😢", "☹️", "😩", "🥺", "😭", "😳", "😱"],
            ["👀", "👼", "🕯", "💔", "❌", "🚫", "💐", "🔚"],
          ],
        },
        fictional: {
          text: [
            "This person is fictional!",
            "Probably a wizard!",
            "Maybe a spaceperson...?",
            "FICTIONAL AF",
            "A figment of your imagination",
            "Maybe magical?",
          ],
          emoji: [
            ["🤨","🧐", "🤔", "🤭", "😶", "😬", "😯"],
            ["🧙‍♀️", "🧙", "🧙‍♂️", "🧝‍♀️", "🧝", "🧝‍♂️", "🧜‍♀️", "🧞‍♂️", "🧜", "🧚‍♀️", "🐉"],
            ["🎬", "📖", "👀", "🎭", "⌛️", "🤷‍♀️", "🤷‍♂️", "🤦‍♀️", "🤦‍♂️"],
          ],
        },
      },
    };
    this.getRandomInt = this.getRandomInt.bind(this);
  }

  //Number randomizer for getting things from state and setting positions.
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  render() {
    var emoji1 = "";
    var emoji2 = "";
    var emoji3 = "";
    var exclamation = "";
    var infoDeg = this.getRandomInt(30) + "deg";
    var easterEgg = "";
    var easterEmoji = "";

    if (this.props.results.info === "living") {
      this.emoji1 = this.state.options.living.emoji[0][
        this.getRandomInt(this.state.options.living.emoji[0].length)
      ];
      this.emoji2 = this.state.options.living.emoji[1][
        this.getRandomInt(this.state.options.living.emoji[1].length)
      ];
      this.emoji3 = this.state.options.living.emoji[2][
        this.getRandomInt(this.state.options.living.emoji[2].length)
      ];
      this.exclamation = this.state.options.living.text[
        this.getRandomInt(this.state.options.living.text.length)
      ];
      this.easterEgg = "";
      this.easterEmoji = "";
    } else if (this.props.results.info === "dead") {
      this.emoji1 = this.state.options.dead.emoji[0][
        this.getRandomInt(this.state.options.dead.emoji[0].length)
      ];
      this.emoji2 = this.state.options.dead.emoji[1][
        this.getRandomInt(this.state.options.dead.emoji[1].length)
      ];
      this.emoji3 = this.state.options.dead.emoji[2][
        this.getRandomInt(this.state.options.dead.emoji[2].length)
      ];
      this.exclamation = this.state.options.dead.text[
        this.getRandomInt(this.state.options.dead.text.length)
      ];
      this.easterEgg = "";
      this.easterEmoji = "";
    } else if (this.props.results.info === "fictional") {
      this.emoji1 = this.state.options.fictional.emoji[0][
        this.getRandomInt(this.state.options.fictional.emoji[0].length)
      ];
      this.emoji2 = this.state.options.fictional.emoji[1][
        this.getRandomInt(this.state.options.fictional.emoji[1].length)
      ];
      this.emoji3 = this.state.options.fictional.emoji[2][
        this.getRandomInt(this.state.options.fictional.emoji[2].length)
      ];
      this.exclamation = this.state.options.fictional.text[
        this.getRandomInt(this.state.options.fictional.text.length)
      ];
      this.easterEgg = "";
      this.easterEmoji = "";
    } else if (this.props.results.info === "nothing") {
      this.exclamation = "Can't find anything... Try again!";
      this.emoji1 = "";
      this.emoji2 = "";
      this.emoji3 = "";
      this.easterEgg = "";
      this.easterEmoji = "";
    }

    const infoStyle = {
      transform: `translate(-50%, -50%) rotate(-15deg) rotate(${infoDeg})`,
    };
    const easterEggStyle = {
      bottom: "-20px",
      right: "0px",
    };
    const easterEmojiStyle = {
      bottom: "0px",
      left: "0px",
    };
    const emoji1Style = {
      transform: `scale(${this.getRandomInt(3) + 1.25})`,
      top: this.getRandomInt(30) + 25 + "%",
      left: this.getRandomInt(30) + 10 + "%",
    };
    const emoji2Style = {
      transform: `scale(${this.getRandomInt(3) + 1.25})`,
      bottom: this.getRandomInt(30) + 5 + "%",
      left: this.getRandomInt(30) + 10 + "%",
    };
    const emoji3Style = {
      transform: `scale(${this.getRandomInt(3) + 1.25})`,
      bottom: this.getRandomInt(30) + 5 + "%",
      right: this.getRandomInt(30) + 10 + "%",
    };

    if (this.props.results.properName === "Betty White") {
      this.easterEgg = "Thank you for being a friend!";
      this.easterEmoji = "👵👵👵👵";
    }
    if (this.props.results.properName === "Justin Trudeau") {
      this.easterEgg = "";
      this.easterEmoji = "🇨🇦❤️🤍❤️🇨🇦👀🔥🔥🔥";
    }
    return (
      <div id="resultsContainer">
        <h2 id="name">{this.props.results.properName}</h2>
        <p style={infoStyle} id="resultsInfo">
          {this.exclamation}
        </p>
        <p style={easterEggStyle} id="easterEgg">
          {this.easterEgg}
        </p>
        <span style={emoji1Style}>{this.emoji1}</span>
        <span style={emoji2Style}>{this.emoji2}</span>
        <span style={emoji3Style}>{this.emoji3}</span>
        <span style={easterEmojiStyle}>{this.easterEmoji}</span>
        <img
          src={this.props.results.resultImg}
          alt={this.props.results.properName}
        ></img>
      </div>
    );
  }
}

export default Results;
