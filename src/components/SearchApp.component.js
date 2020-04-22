import React, { Component } from "react";
import SearchBar from "./SearchBar.component";
import Results from "./Results.component";

export class SearchApp extends React.Component {
  //This parent component was neccessary because originally the Results component was a child of the SearchBar component and it was causing rerender of the results on every keystroke in the input bar.

  constructor(props) {
    super(props);
    this.state = {
      searchResults: {},
    };
    this.handler = this.searchHandler.bind(this);
  }

  // Handles data sent back from the SearchBar component
  searchHandler = (results) => {
    this.setState({ searchResults: results });
  };

  render() {
    return (
      <div>
        <SearchBar action={this.searchHandler} />
        <Results results={this.state.searchResults} />
      </div>
    );
  }
}

export default SearchApp;
