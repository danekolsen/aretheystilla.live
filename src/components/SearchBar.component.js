import React from "react";
import wtf from "wtf_wikipedia";
import Results from "./Results.component";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cleanedName: "",
      searchTerm: "",
      properName: "",
      resultImg: "",
      info: "",
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
      };
    });

    // Calls make spin function for obnoxious search button emoji animation.
    this.makeSpin();

    // Wikipedia fetch using wtf_wikipedia for cleanedName from state.
    wtf
      .fetch(this.state.cleanedName, {
        "Api-User-Agent": "dkowebdev@gmail.com",
      })
      .then((doc) => {
        // console.log(doc);
        // Makes sure the fetch returned anything at all before checking categories.
        if (doc != null) {
          // console.log(doc.categories()); //Does the search term have categories?
          // Checks returned categories for the phrase 'Living people' and then updates state with a true for dead.
          const livingPerson = doc
            .categories()
            .find((cat) => cat.match(/Living people/));
          // console.log(Boolean(livingPerson));
          if (Boolean(livingPerson)) {
            this.setState((state) => {
              return { info: "living" };
            });
          }
          // Checks returned categories for the word 'death' and then updates state with a true for dead.
          // console.log(doc.categories().find((cat) => cat.match(/deaths/)));
          const deathEntry = doc
            .categories()
            .find((cat) => cat.match(/deaths/));
          // console.log(Boolean(deathEntry));
          if (Boolean(deathEntry)) {
            this.setState((state) => {
              return { info: "dead" };
            });
          }
          // Checks returned categories for the words 'fictional' or 'character' and then updates state with a true for fictional character.
          const fictionalEntry = doc
            .categories()
            .find((cat) => cat.match(/Fictional/) || cat.match(/character/));
          // console.log(Boolean(fictionalEntry));
          if (Boolean(fictionalEntry)) {
            this.setState((state) => {
              return { info: "fictional" };
            });
          }

          // If a proper name was returned, update state with that string.
          if (doc.data.title) {
            this.setState((state) => {
              return { properName: doc.data.title };
            });
          }
          // If an image exists, update state with the URL.
          if (doc.images(0)) {
            this.setState((state) => {
              return { resultImg: doc.images(0).thumbnail() };
            });
          }
          // Checks state to see if search results came back with a person, if it didn't, it udpates state with no person found to send to Results.
          if (this.state.info === "") {
            this.setState((state) => {
              return { info: "nothing", properName: "", resultImg: "" };
            });
          }
        } else {
          // Sends "nothing found" message to state->Results when nothing is returned from Wikipedia.
          this.setState((state) => {
            return { info: "nothing" };
          });
        }
        // Sends state after updated with results to the Results component.
        this.props.action(this.state);
      });
    // Resets the input bar for new search.
    this.setState((state) => {
      return { searchTerm: "" };
    });
  }

  render() {
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
        </form>
      </div>
    );
  }
}

export default SearchBar;
