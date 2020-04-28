import React from "react";
import SearchBar from "./SearchBar.component";
import Results from "./Results.component";

export class SearchApp extends React.Component {
  //This parent component was neccessary because originally the Results component was a child of the SearchBar component and it was causing rerender of the results on every keystroke in the input bar.

  constructor(props) {
    super(props);
    this.state = {
      searchResults: {},
      displayResults: false,
      displayChoice: false,
    };
    this.searchHandler = this.searchHandler.bind(this);
    this.closeHandler = this.closeHandler.bind(this);
  }

  // Handles data sent back from the SearchBar component
  searchHandler = (results) => {
    this.setState({ searchResults: results, displayResults: true });
  };

  closeHandler = () => {
    this.setState({ displayResults: false });
  };

  render() {
    if (this.state.displayResults) {
      return (
        <React.Fragment>
          <SearchBar action={this.searchHandler} />
          <Results
            action={this.closeHandler}
            results={this.state.searchResults}
          />
        </React.Fragment>
      );
    } else {
      return <SearchBar action={this.searchHandler} />;
    }
  }
}

export default SearchApp;
