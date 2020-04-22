import React, { Component } from "react";

export class Disclaimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfo: false,
    };

    this.toggleInfo = this.toggleInfo.bind(this);
  }
  toggleInfo() {
    this.setState((state) => {
      return { showingInfo: !this.state.showingInfo };
    });
  }

  render() {
    return (
      <div id="discl-div">
        <span
          id="discl-btn"
          className="flipH"
          onClick={this.toggleInfo}
          role="img"
          aria-label="speech bubble emoji"
        >
          💬
        </span>
        <div
          id="discl-text"
          className={this.state.showingInfo ? "showInfo" : "hideInfo"}
        >
          <p>
            This app is intended to be a little bit of dark humor in the trying
            times of Covid-19. It uses data from Wikipedia, and therefore might
            not be 100% up to date, or may not contain information about the
            person you are looking for, or maybe I messed up the code, who
            knows?{" "}
            <span role="img" aria-label="man shrugging emoji">
              🤷‍♂️
            </span>
          </p>
          <p>Please take information found here with a grain of salt.</p>
          <p>
            Stay safe and healthy!{" "}
            <span role="img" aria-label="heart emojis">
              ❤️❤️❤️❤️❤️
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default Disclaimer;
