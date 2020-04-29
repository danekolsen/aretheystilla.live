import React from "react";
import wtf from "wtf_wikipedia";
import ReactGA from "react-ga";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cleanedName: "",
      searchTerm: "",
      properName: "",
      resultImg: "",
      info: "",
      error: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.makeSpin = this.makeSpin.bind(this);
    this.cleanName = this.cleanName.bind(this);
  }

  // Makes the emojis in the search button spin on press.
  makeSpin() {
    document.getElementById("crysBall").classList.add("spin");
    var skulls = document.getElementsByClassName("skullEm");
    skulls = Array.from(skulls);
    skulls.forEach((skElem) => {
      skElem.classList.add("skull");
    });
    setTimeout(function () {
      document.getElementById("crysBall").classList.remove("spin");
      skulls.forEach((skElem) => {
        skElem.classList.remove("skull");
      });
    }, 1000);
  }

  // Cleans any input name on each character input because the Wikipedia search works better when names are properly capitalized.
  cleanName(name) {
    var nameSplit = name.split(" ");
    for (var i = 0; i < nameSplit.length; i++) {
      var wordSplit = nameSplit[i].split("");
      for (var k = 0; k < wordSplit.length; k++) {
        if (k === 0) {
          wordSplit[k] = wordSplit[k].toUpperCase();
        } else {
          wordSplit[k] = wordSplit[k].toLowerCase();
        }
      }
      nameSplit[i] = wordSplit.join("");
    }
    // Sets cleanedName in state.
    this.setState((state) => {
      return { cleanedName: nameSplit.join(" ") };
    });
  }

  //Whenever there is a change in the input bar, updated the state value and cleans the name for capitalization for ease of use.
  handleChange(event) {
    this.cleanName(event.target.value);
    this.setState({ searchTerm: event.target.value });
  }

  handleSubmit(event) {
    // Prevents default form submission behavior
    event.preventDefault();
    // Resets state on each search.
    this.setState((state) => {
      return {
        properName: "",
        resultImg: "",
        cleanedName: "",
        info: "",
        error: false,
      };
    });

    // Data to Google Analytics
    ReactGA.event({
      category: "Perform Search",
      action: "Pressed search button",
      label: this.state.cleanedName,
    });

    // Calls make spin function for obnoxious search button emoji animation.
    this.makeSpin();

    // Wikipedia fetch using wtf_wikipedia for cleanedName from state.
    wtf
      .fetch(this.state.cleanedName, {
        "Api-User-Agent": "dkowebdev@gmail.com",
      })
      .then((doc) => {
        console.log(doc); //For diagnosis on bad outcomes

        if (doc === null) {
          //Checks results for null and returns error
          return this.setState((state) => {
            return { error: "No results", properName: "", resultImg: "" };
          });
        } else if (
          doc.categories().length === 0 ||
          doc.categories().find((cat) => cat.match(/disambiguation/))
        ) {
          //Checks for empty categories or diagambiguation, meaning multiple results) and returns error
          return this.setState((state) => {
            return { error: "Too many options", properName: "", resultImg: "" };
          });
        } else if (doc.categories().find((cat) => cat.match(/Living people/))) {
          // Checks for living person in categories and returns info
          this.setState((state) => {
            return {
              info: "living",
              searchTerm: "",
              properName: doc.data.title,
              resultImg: doc.images(0)
                ? doc.images(0).thumbnail()
                : "./defaultImg.png",
            };
          });
        } else if (
          doc.categories().find((cat) => cat.match(/Deaths|Death|deaths|death/))
        ) {
          // Checks for death in categories
          if (
            doc
              .categories()
              .find((cat) => cat.match(/Deaths|Death|deaths|death/))
              .split(" ")
              .find((cat) => cat.match(/animal|Animal/))
          ) {
            // Checks for animal and returns results with animal
            this.setState((state) => {
              return {
                info: "animal",
                searchTerm: "",
                properName: doc.data.title,
                resultImg: doc.images(0)
                  ? doc.images(0).thumbnail()
                  : "./defaultImg.png",
              };
            });
          } else if (
            doc.categories().find((cat) => cat.match(/coronavirus pandemic/))
          ) {
            // Checks for coronavirus pandemic and returns results for pandemic
            this.setState((state) => {
              return {
                info: "Covid19 death",
                searchTerm: "",
                properName: doc.data.title,
                resultImg: doc.images(0)
                  ? doc.images(0).thumbnail()
                  : "./defaultImg.png",
              };
            });
          } else {
            // Otherwise returns older death results
            this.setState((state) => {
              return {
                info: "Not covid19",
                searchTerm: "",
                properName: doc.data.title,
                resultImg: doc.images(0)
                  ? doc.images(0).thumbnail()
                  : "./defaultImg.png",
              };
            });
          }
        } else if (
          doc.categories().find((cat) => cat.match(/Fictional|character/))
        ) {
          // Checks categories for fictional or character then returns results
          this.setState((state) => {
            return {
              info: "fictional",
              searchTerm: "",
              properName: doc.data.title,
              resultImg: doc.images(0)
                ? doc.images(0).thumbnail()
                : "./defaultImg.png",
            };
          });
        }
        // If no errors, send results to SearchApp component
        if (this.state.error === false) {
          this.props.action(this.state);
        }
      });
  }

  render() {
    let errorText = "";
    if (this.state.error === "Too many options") {
      errorText = (
        <span>
          😅 🤪 Too many results! 🤯 😬
          <br /> Try adding the person's profession in parentheses: e.g.,
          <br />
          Chris Evans (actor) 🎭
          <br /> Jack Johnson (musician) 🎸
        </span>
      );
    } else if (this.state.error === "No results") {
      errorText = (
        <span>
          No{" "}
          <span role="img" aria-label="dice emoji">
            🎲
          </span>{" "}
          dice{" "}
          <span role="img" aria-label="dice emoji">
            🎲
          </span>
          !<br />
          <span role="img" aria-label="shrugging man emoji">
            🤷
          </span>{" "}
          Try again!
        </span>
      );
    }

    return (
      <div className="searchBar">
        <form onSubmit={this.handleSubmit}>
          <input
            required
            type="text"
            value={this.state.searchTerm}
            onChange={this.handleChange}
            placeholder="Please use a full name..."
          />
          <button onClick={this.makeSpin} id="submit-btn">
            <span
              className="skullEm"
              role="img"
              aria-label="skull and crossbones emoji"
            >
              ☠️
            </span>
            <span className="flipH" role="img" aria-label="sparkle emoji">
              ✨
            </span>
            <span id="crysBall" role="img" aria-label="crystal ball emoji">
              🔮
            </span>
            <span role="img" aria-label="sparkle emoji">
              ✨
            </span>
            <span
              className="skullEm"
              role="img"
              aria-label="skull and crossbones emoji"
            >
              ☠️
            </span>
          </button>
          <p id="error">{errorText}</p>
        </form>
      </div>
    );
  }
}

export default SearchBar;
