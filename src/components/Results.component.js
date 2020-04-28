import React from "react";

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
            "Still Breathin'!",
          ],
          emoji: [
            ["🎉", "🎊", "✨", "🌈", "🥇", "💋", "⭐️", "🌟"],
            ["🥳", "😁", "😄", "😍", "😘", "👍", "🙌", "👏"],
            ["💕", "💖", "💯", "❤️", "💜", "💙", "❣️", "💓", "♥️"],
          ],
        },
        covid19: {
          text: [
            "Confirmed Covid-19 death",
            // "This person is dead!",
            // "Kicked the bucket!",
            // "DEAD AF",
            // "Another one bites the dust!!!",
            // "OH NOES!",
          ],
          emoji: [
            ["⚰️", "☠️", "👻", "💀", "🙅‍♀️", "🙅‍♂️"],
            ["😵", "😢", "🙁", "😩", "🥺", "😭", "😳", "😱"],
            ["👀", "👼", "🕯", "💔", "❌", "🚫", "💐", "🔚"],
          ],
        },
        maybeCovid19: {
          text: [
            "Maybe died of Covid-19...?",
            // "This person is dead!",
            // "Kicked the bucket!",
            // "DEAD AF",
            // "Another one bites the dust!!!",
            // "OH NOES!",
          ],
          emoji: [
            ["⚰️", "☠️", "👻", "💀", "🙅‍♀️", "🙅‍♂️"],
            ["😵", "😢", "🙁", "😩", "🥺", "😭", "😳", "😱"],
            ["👀", "👼", "🕯", "💔", "❌", "🚫", "💐", "🔚"],
          ],
        },
        notCovid19: {
          text: [
            "Dead, but not of Covid-19",
            // "This person is dead!",
            // "Kicked the bucket!",
            // "DEAD AF",
            // "Another one bites the dust!!!",
            // "OH NOES!",
          ],
          emoji: [
            ["⚰️", "☠️", "👻", "💀", "🙅‍♀️", "🙅‍♂️"],
            ["😵", "😢", "🙁", "😩", "🥺", "😭", "😳", "😱"],
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
            ["🤨", "🧐", "🤔", "🤭", "😶", "😬", "😯"],
            ["🧙‍♀️", "🧙", "🧙‍♂️", "🧝‍♀️", "🧝", "🧝‍♂️", "🧜‍♀️", "🧞‍♂️", "🧜", "🧚‍♀️", "🐉"],
            ["🎬", "📖", "👀", "🎭", "⌛️", "🤷‍♀️", "🤷‍♂️", "🤦‍♀️", "🤦‍♂️"],
          ],
        },
        animal: {
          text: ["This is an animal!"],
          emoji: [["🤨"]],
        },
      },
    };
    this.getRandomInt = this.getRandomInt.bind(this);
  }

  //Number randomizer for getting things from state and setting positions.
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  getRandomFloat() {
    return (Math.random() + 1) * (this.getRandomInt(1) + 1);
  }

  setFontSize(string) {
    if (string.length >= 20) {
      return "40px";
    } else if (string.length <= 10) {
      return "60px";
    } else if (string.length > 10) {
      return "50px";
    }
  }

  render() {
    let emoji1 = "";
    let emoji2 = "";
    let emoji3 = "";
    let exclamation = "";
    let infoDeg = this.getRandomInt(30) + "deg";
    let easterEgg = "";
    let easterEmoji = "";

    if (this.props.results.info === "living") {
      emoji1 = this.state.options.living.emoji[0][
        this.getRandomInt(this.state.options.living.emoji[0].length)
      ];
      emoji2 = this.state.options.living.emoji[1][
        this.getRandomInt(this.state.options.living.emoji[1].length)
      ];
      emoji3 = this.state.options.living.emoji[2][
        this.getRandomInt(this.state.options.living.emoji[2].length)
      ];
      exclamation = this.state.options.living.text[
        this.getRandomInt(this.state.options.living.text.length)
      ];
      easterEgg = "";
      easterEmoji = "";
    } else if (this.props.results.info === "Covid19 death") {
      emoji1 = this.state.options.covid19.emoji[0][
        this.getRandomInt(this.state.options.covid19.emoji[0].length)
      ];
      emoji2 = this.state.options.covid19.emoji[1][
        this.getRandomInt(this.state.options.covid19.emoji[1].length)
      ];
      emoji3 = this.state.options.covid19.emoji[2][
        this.getRandomInt(this.state.options.covid19.emoji[2].length)
      ];
      exclamation = this.state.options.covid19.text[
        this.getRandomInt(this.state.options.covid19.text.length)
      ];
      easterEgg = "";
      easterEmoji = "";
    } else if (this.props.results.info === "Maybe covid19") {
      emoji1 = this.state.options.maybeCovid19.emoji[0][
        this.getRandomInt(this.state.options.maybeCovid19.emoji[0].length)
      ];
      emoji2 = this.state.options.maybeCovid19.emoji[1][
        this.getRandomInt(this.state.options.maybeCovid19.emoji[1].length)
      ];
      emoji3 = this.state.options.maybeCovid19.emoji[2][
        this.getRandomInt(this.state.options.maybeCovid19.emoji[2].length)
      ];
      exclamation = this.state.options.maybeCovid19.text[
        this.getRandomInt(this.state.options.maybeCovid19.text.length)
      ];
      easterEgg = "";
      easterEmoji = "";
    } else if (this.props.results.info === "Not covid19") {
      emoji1 = this.state.options.notCovid19.emoji[0][
        this.getRandomInt(this.state.options.notCovid19.emoji[0].length)
      ];
      emoji2 = this.state.options.notCovid19.emoji[1][
        this.getRandomInt(this.state.options.notCovid19.emoji[1].length)
      ];
      emoji3 = this.state.options.notCovid19.emoji[2][
        this.getRandomInt(this.state.options.notCovid19.emoji[2].length)
      ];
      exclamation = this.state.options.notCovid19.text[
        this.getRandomInt(this.state.options.notCovid19.text.length)
      ];
      easterEgg = "";
      easterEmoji = "";
    } else if (this.props.results.info === "fictional") {
      emoji1 = this.state.options.fictional.emoji[0][
        this.getRandomInt(this.state.options.fictional.emoji[0].length)
      ];
      emoji2 = this.state.options.fictional.emoji[1][
        this.getRandomInt(this.state.options.fictional.emoji[1].length)
      ];
      emoji3 = this.state.options.fictional.emoji[2][
        this.getRandomInt(this.state.options.fictional.emoji[2].length)
      ];
      exclamation = this.state.options.fictional.text[
        this.getRandomInt(this.state.options.fictional.text.length)
      ];
      easterEgg = "";
      easterEmoji = "";
    } else if (this.props.results.info === "animal") {
      emoji1 = this.state.options.animal.emoji[0][
        this.getRandomInt(this.state.options.animal.emoji[0].length)
      ];
      // emoji2 = this.state.options.animal.emoji[1][
      //   this.getRandomInt(this.state.options.animal.emoji[1].length)
      // ];
      // emoji3 = this.state.options.animal.emoji[2][
      //   this.getRandomInt(this.state.options.animal.emoji[2].length)
      // ];
      exclamation = this.state.options.animal.text[
        this.getRandomInt(this.state.options.animal.text.length)
      ];
      easterEgg = "";
      easterEmoji = "";
    }

    const infoStyle = {
      transform: `translate(-50%) rotate(-15deg) rotate(${infoDeg})`,
      fontSize: this.setFontSize(exclamation),
    };
    const easterEggStyle = {
      top: "25px",
      left: "3%",
      fontSize: "16px",
      transform: `rotate(-15deg) `,
      width: "50%",
    };
    const easterEmojiStyle = {
      top: "0px",
      left: "3%",
      fontSize: "16px",
      transform: `rotate(-15deg)`,
      width: "50%",
    };
    const emoji1Style = {
      transform: `scale(${this.getRandomFloat()})`,
      top: this.getRandomInt(20) + 20 + "%",
      left: this.getRandomInt(20) + 10 + "%",
    };
    const emoji2Style = {
      transform: `scale(${this.getRandomFloat()})`,
      bottom: this.getRandomInt(10) + 30 + "%",
      left: this.getRandomInt(20) + 10 + "%",
    };
    const emoji3Style = {
      transform: `scale(${this.getRandomFloat()})`,
      top: this.getRandomInt(60) + 10 + "%",
      right: this.getRandomInt(20) + 10 + "%",
    };

    if (this.props.results.properName === "Betty White") {
      easterEgg = "Thank you for being a friend!";
      easterEmoji = "👵👵👵👵";
    }
    if (this.props.results.properName === "Justin Trudeau") {
      easterEgg = "";
      easterEmoji = "🇨🇦❤️🤍❤️🇨🇦👀🔥🔥🔥";
    }
    let twitterURL = `https://twitter.com/intent/tweet?text=Checking+on+my+fav+celeb+with+aretheystilla.live!+${this.props.results.properName}: ${exclamation} ${emoji1} ${emoji2} ${emoji3}&hashtags=aretheystillalive,covid19&url=http%3A%2F%2Faretheystilla.live`;
    return (
      <div className="results">
        <div id="resultsContainer">
          <button id="close-btn" onClick={this.props.action}>
            <span role="img" aria-label="close button">
              ❌
            </span>
          </button>
          <h2 id="name">{this.props.results.properName}</h2>

          <div id="imgCanvas">
            <p style={infoStyle} id="resultsInfo">
              {exclamation}
            </p>
            <p style={easterEggStyle} id="easterEgg">
              {easterEgg}
            </p>
            <span style={emoji1Style}>{emoji1}</span>
            <span style={emoji2Style}>{emoji2}</span>
            <span style={emoji3Style}>{emoji3}</span>
            <span style={easterEmojiStyle}>{easterEmoji}</span>
            <img
              src={this.props.results.resultImg}
              alt={this.props.results.properName}
            ></img>
          </div>
          <div id="socialBtns">
            <a
              href={twitterURL}
              target="blank"
              rel="noopener noreferrer"
              className="tweetBtn"
            >
              <span role="img" aria-label="bird emoji">
                🐦
              </span>{" "}
              Tweet
            </a>
            <a
              href="https://www.facebook.com/sharer.php?u=http%3A%2F%2Faretheystilla.live%2F"
              className="fbBtn"
              target="blank"
              rel="noopener noreferrer"
            >
              <span role="img" aria-label="thumbs up emoji">
                👍
              </span>{" "}
              Facebook
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Results;
