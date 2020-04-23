// Todos:
//  -Set search term to upper case before search                        DONE
//  -Get name and image from search results                             DONE
//  -Display name and image from search results                         DONE
//  -Style app                                                          DONE
//  -Make the crystal ball spin                                         DONE
//  -Style image results with obnoxiousness                             DONE
//  -Setup easter eggs: Betty White                                     DONE
//  -Setup random text options for various outcomes                     DONE
//  -Ensure it looks good on small iPhone SE screen(fix width)          DONE
//  -Fix nothing found position                                         DONE
//  -Fix span tags for emojies                                          DONE
//  -Fix rerender on every keystroke                                    DONE
//  -Remove old code after refactor to fix too much rerendering         DONE
//  -Remove emojis on no article found                                  DONE
//  -Comment components                                                 DONE
//  -Move app info and button(maybe replace with asterisk)              DONE
//  -Fix CSS on results                                                 DONE
//  -See about setting up a user profile for wikipedia best practices   DONE
//  -Comment and organize SASS                                          DONE
//  -No repeat emojis on one render                                     DONE
//  -Let Che build the emojie arrays                                    DONE
//  -LAUNCH                                                             DONE
//  -Put results in close-able modal to make app appear as single page  DONE
//  -Make disclaimer box go away when user enters text in input field   DONE

//  -Phone layout still needs tweaking(why does results cause side-scrolling?)

//     v2.0
//  -Test list of knows problem searches:
//                {"Mike the headless chicken": returns dead}, (Search for list of "individual animals")
//                {"Harambe": returns dead but no image}
//                {"Chris Evans": returns nothing},
//                {"Mike Jones": returns nothing}
//  -Implement Google Analytics
//  -Ads?
//  -For easter eggs, move randomized text to upper left or something so it doesn't conflict with easter egg text
//  -Experiment with emojies more on edge of photo(redefine grid/boundaries)
//  -Implement loading spinner for data retrieval time
//  -Search the first 10 results for an entry that fits a criteria
//  -Export final result as an image
//  -Send images to social media(Look up how share buttons function)

import React from "react";
import SearchApp from "./components/SearchApp.component";
import Disclaimer from "./components/Disclaimer.component";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          <span id="h1Emoji1" role="img" aria-label="frightened emoji">
            😳
          </span>{" "}
          Are they still alive?{" "}
          <span id="h1Emoji2" role="img" aria-label="terrified emoji">
            😱
          </span>
        </h1>
        <p>
          Quickly check up on your favorite public figures, and see who has
          survived the global{" "}
          <span role="img" aria-label="microbe emoji">
            🦠
          </span>
          Covid-19
          <span role="img" aria-label="microbe emoji">
            🦠
          </span>{" "}
          pandemic.{" "}
          <span role="img" aria-label="mask emoji">
            😷
          </span>{" "}
          <span role="img" aria-label="temperature emoji">
            🤒
          </span>
        </p>
      </header>
      <SearchApp />
      <Disclaimer />
    </div>
  );
}

export default App;
