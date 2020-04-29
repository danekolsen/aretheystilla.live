// Todos:

//  COMPLETED
//  -Set search term to upper case before search                                DONE
//  -Get name and image from search results                                     DONE
//  -Display name and image from search results                                 DONE
//  -Style app                                                                  DONE
//  -Make the crystal ball spin                                                 DONE
//  -Style image results with obnoxiousness                                     DONE
//  -Setup easter eggs: Betty White                                             DONE
//  -Setup random text options for various outcomes                             DONE
//  -Ensure it looks good on small iPhone SE screen(fix width)                  DONE
//  -Fix nothing found position                                                 DONE
//  -Fix span tags for emojies                                                  DONE
//  -Fix rerender on every keystroke                                            DONE
//  -Remove old code after refactor to fix too much rerendering                 DONE
//  -Remove emojis on no article found                                          DONE
//  -Comment components                                                         DONE
//  -Move app info and button(maybe replace with asterisk)                      DONE
//  -Fix CSS on results                                                         DONE
//  -See about setting up a user profile for wikipedia best practices           DONE
//  -Comment and organize SASS                                                  DONE
//  -No repeat emojis on one render                                             DONE
//  -Let Che build the emojie arrays                                            DONE
//  -Launch text site                                                           DONE
//  -Put results in close-able modal to make app appear as single page          DONE
//  -Make disclaimer box go away when user enters text in input field           DONE
//  -Move easterEgg stuff to upper left so it doesn't conflict with other stuff DONE
//  -Experiment with emojies more on edge of photo(redefine grid/boundaries)    DONE
//  -Cleanup multiple choice code                                               DONE
//  -Phone layout still needs tweaking(why does results cause side-scrolling?)  DONE
//  -Implement social media buttons                                             DONE
//  -Add in generic image if no image is returned                               DONE
//  -Minor UI fixes:                                                            DONE
//      -Social media buttons             DONE
//      -Error text                       DONE
//      -Disclaimer text including email  DONE
//  -Make an actual logo(Used different font)                                   DONE
//  -Play with emoji scaling more, tighter boundaries, more variety             DONE
//  -Set different font sizes for individual strings                            DONE
//  -Separate output for covid deaths and non-covid deaths                      DONE
//  -Implement Google Analytics                                                 DONE
//  -Have Che redo text and emoji arrays                                        DONE

//  ISSUES IN PROGRESS

//  ISSUES ON PAUSE
//  -Implement loading spinner for data retrieval time(maybe)
//  -Ads?
//  -Export final result as an image (NOT EASILY DONE ATM)
//  -Search the first 10 results for an entry that fits a criteria
//      (Not easily done at this time, just return a hint to use profession in parenthesis for now)
//  -Test list of knows problem searches:
//      {"Mike the headless chicken": returns dead}, (Search for list of "individual animals")
//      {"Harambe": returns dead but no image} (Implemented extra categories for animals)
//      {"Chris Evans": returns nothing}, (For now just return hints for generic names)
//      {"Mike Jones": returns nothing}

import React, { useEffect } from "react";
import SearchApp from "./components/SearchApp.component";
import Disclaimer from "./components/Disclaimer.component";
import "./styles.css";
import ReactGA from "react-ga";

function App() {
  useEffect(() => {
    ReactGA.initialize("UA-164789762-1");
    ReactGA.pageview("/");
  }, []);
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
